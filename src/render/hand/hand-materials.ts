/**
 * The mascot hand's material: one warm honey-orange tone over the whole hand, with white nails.
 *
 * Decisions, and what each costs:
 * - **One physical material with a few lines added,** so the hand takes the scene's lights, shadows
 *   and environment like every other part, in one draw call.
 * - **The skin is one colour with no pattern.** A soft warm sheen keeps it from looking like plastic.
- **A faceted model is lit flat in the shader,** from the screen derivatives of each face. The model
  then needs no normals, and its faces share their corners.
 * - **Each nail is a rounded patch at a frame the model's markers give,** white and glossier than the
 *   skin. It is found from the rest-pose position, so it stays on the fingertip as the hand bends, and
 *   its edge is sharp at any mesh density.
 */
import { Color, MeshPhysicalMaterial, Vector2, type Vector3 } from "three";

/** The hand's honey orange, from the mascot. */
const SKIN = new Color(0xd98a3d);
const NAIL = new Color(0xf7f2ea);

/** A nail in the skin's rest space: its centre, the way it points, its normal and its half sizes. */
export interface NailFrame {
  centre: Vector3;
  along: Vector3;
  normal: Vector3;
  halfLength: number;
  halfWidth: number;
}

/** The hand's one material, with a nail at each of `nails`, lit face by face when `flat`. */
export function skinMaterial(nails: readonly NailFrame[], flat: boolean): MeshPhysicalMaterial {
  const material = new MeshPhysicalMaterial({
    color: SKIN,
    flatShading: flat,
    roughness: 0.55,
    sheen: 0.5,
    sheenColor: new Color(0xffb46a),
    sheenRoughness: 0.5,
  });
  const n = nails.length;
  material.onBeforeCompile = (shader) => {
    Object.assign(shader.uniforms, {
      uNailColor: { value: NAIL },
      uNailC: { value: nails.map((f) => f.centre) },
      uNailA: { value: nails.map((f) => f.along) },
      uNailN: { value: nails.map((f) => f.normal) },
      uNailS: { value: nails.map((f) => new Vector2(f.halfLength, f.halfWidth)) },
    });
    shader.vertexShader = shader.vertexShader
      .replace("#include <common>", "#include <common>\nvarying vec3 vRest;")
      .replace("#include <begin_vertex>", "#include <begin_vertex>\nvRest = position;");
    shader.fragmentShader = shader.fragmentShader
      .replace(
        "#include <common>",
        /* glsl */ `#include <common>
uniform vec3 uNailColor;
uniform vec3 uNailC[${n}];
uniform vec3 uNailA[${n}];
uniform vec3 uNailN[${n}];
uniform vec2 uNailS[${n}];
varying vec3 vRest;
// How much of a nail covers this point.
float nailAt() {
  float best = 0.0;
  for (int i = 0; i < ${n}; i++) {
    vec3 q = vRest - uNailC[i];
    vec3 lateral = normalize(cross(uNailN[i], uNailA[i]));
    float u = dot(q, lateral) / uNailS[i].y;
    float v = dot(q, uNailA[i]) / uNailS[i].x;
    float h = dot(q, uNailN[i]) / uNailS[i].x;
    float shape = pow(abs(u), 2.6) + pow(abs(v), 3.0);
    best = max(best, (1.0 - smoothstep(0.82, 1.0, shape)) * smoothstep(-0.9, -0.5, h));
  }
  return best;
}`,
      )
      .replace("#include <color_fragment>", "#include <color_fragment>\nfloat nail = nailAt();\ndiffuseColor.rgb = mix(diffuseColor.rgb, uNailColor, nail);")
      .replace("#include <roughnessmap_fragment>", "#include <roughnessmap_fragment>\nroughnessFactor = mix(roughnessFactor, 0.22, nail);")
      .replace(
        "#include <lights_physical_fragment>",
        "#include <lights_physical_fragment>\n#ifdef USE_SHEEN\nmaterial.sheenColor *= 1.0 - nail;\n#endif",
      );
  };
  material.customProgramCacheKey = () => "hand-skin";
  return material;
}

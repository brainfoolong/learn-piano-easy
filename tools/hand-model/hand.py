"""
Builds the mascot's right hand as a rigged glTF, `public/models/hand.glb`, from MakeHuman's CC0 human.
Blender runs it headless with the MPFB extension, through `bun tools/hand-model.ts`.

The model is in the 3D piano's units, where one white key is one unit wide, so it needs no scale at
runtime. Blender's axes here: x runs from the thumb to the little finger, y from the wrist to the
fingertips, and z from the palm to the back of the hand. The exporter turns z up into the scene's y up.

Decisions, and what each costs:
- **The hand is MakeHuman's,** made by artists and rigged with a bone per phalanx and per metacarpal.
  MPFB builds a fuller-than-average man, and this script keeps his right forearm and hand. Their
  weights are MakeHuman's own.
- **The hand is faceted low-poly by default.** MakeHuman's own mesh is collapsed to a quarter of its
  faces, and each face is lit flat. That is the mascot's chosen style, and it keeps the file small. A
  faceted hand carries no normals: flat light would split every vertex once per face, so the runtime
  lights each face from screen derivatives instead. The
  flags can still build a smooth hand: subdivided, and lit with the normals of a twice subdivided copy.
- **The rig is renamed for the runtime:** `forearm`, `hand`, `<digit>_0` for a metacarpal and
  `<digit>_1` to `_3` for the phalanges. Every finger bone's local z faces the back of the hand, so a
  bend towards the palm is a turn about local x.
- **Markers that deform nothing end each digit.** `_tip` is the fingertip's end, `_pad` the point that
  meets a key, and `_nail` the nail's centre. `_nailside` sits at the nail's side edge and `_nailtip` at
  its free edge. glTF keeps no bone tails, so every measure is a marker's head, and the runtime holds no
  measurements of its own.
- **The arm ends in a straight cut** `CUT` behind the wrist, closed by a flat cap with a hard rim.
  The cut is made after subdividing and collapsing, so it stays square.
- **The model carries no colour.** The runtime gives the whole hand one material and draws the nails
  from the nail markers.

Bounds: by default the skin keeps a quarter of the faces of MakeHuman's hand region, and a vertex keeps
MakeHuman's own weights, interpolated by the collapse.

  blender --background --python tools/hand-model/hand.py -- <out.glb> [<preview-dir>]
"""

import os
import sys

import addon_utils
import bmesh
import bpy
import numpy as np
from mathutils import Matrix, Vector

MPFB = "bl_ext.user_default.mpfb"

# A white key is 23.5 mm wide, and MakeHuman's units are metres.
METRES_PER_KEY = 0.0235

# MakeHuman's bones kept, by the names the runtime knows them by.
DIGIT_BONES = {
    "thumb": ["finger1-1.R", "finger1-2.R", "finger1-3.R"],
    "index": ["metacarpal1.R", "finger2-1.R", "finger2-2.R", "finger2-3.R"],
    "middle": ["metacarpal2.R", "finger3-1.R", "finger3-2.R", "finger3-3.R"],
    "ring": ["metacarpal3.R", "finger4-1.R", "finger4-2.R", "finger4-3.R"],
    "little": ["metacarpal4.R", "finger5-1.R", "finger5-2.R", "finger5-3.R"],
}


def renames():
    out = {"lowerarm02.R": "forearm", "wrist.R": "hand"}
    for digit, names in DIGIT_BONES.items():
        first = 1 if digit == "thumb" else 0
        for i, name in enumerate(names):
            out[name] = f"{digit}_{first + i}"
    return out


RENAME = renames()

# The man MPFB builds: a little fuller and softer than its average.
MACRO = {"gender": 1.0, "weight": 0.7, "muscle": 0.42, "age": 0.5}

# How far up the forearm the rig's weights are read, in key widths from the wrist.
FOREARM_KEPT = 4.0

# Where the forearm is cut off square, in key widths behind the wrist.
CUT = 2.4

# How many times the skin is subdivided, from `HAND_LEVELS`, and how many times the surface a smooth
# hand takes its normals from is.
LEVELS = int(os.environ.get("HAND_LEVELS", "0"))
SHADING_LEVELS = 2

# The share of the subdivided skin's faces kept, from `HAND_DECIMATE`, and whether each face is lit
# flat, which `HAND_FLAT=0` turns off for a smooth hand.
DECIMATE = float(os.environ.get("HAND_DECIMATE", "0.25"))
FLAT = os.environ.get("HAND_FLAT", "1") != "0"


def select_only(*objects):
    for o in bpy.context.view_layer.objects:
        o.select_set(o in objects)
    bpy.context.view_layer.objects.active = objects[0]


def make_human():
    addon_utils.enable(MPFB, default_set=True)
    from bl_ext.user_default.mpfb.services.humanservice import HumanService
    from bl_ext.user_default.mpfb.services.targetservice import TargetService

    for obj in list(bpy.data.objects):
        bpy.data.objects.remove(obj)
    macro = TargetService.get_default_macro_info_dict()
    macro.update(MACRO)
    # The rig is fitted to the joint helpers, so they stay until the mask removes them.
    human = HumanService.create_human(mask_helpers=True, detailed_helpers=True, extra_vertex_groups=False, scale=0.1, macro_detail_dict=macro)
    rig = HumanService.add_builtin_rig(human, "default", import_weights=True)
    select_only(human)
    if human.data.shape_keys:
        bpy.ops.object.shape_key_remove(all=True, apply_mix=True)
    for mod in list(human.modifiers):
        if mod.type == "MASK":
            bpy.ops.object.modifier_apply(modifier=mod.name)
    return human, rig


def bone_world(rig, name):
    bone = rig.data.bones[name]
    return rig.matrix_world @ bone.head_local, rig.matrix_world @ bone.tail_local


def hand_frame(rig):
    """The matrix that takes MakeHuman's world to the hand's own axes, in key widths."""
    wrist = bone_world(rig, "wrist.R")[0]
    middle = bone_world(rig, "finger3-1.R")[0]
    index = bone_world(rig, "finger2-1.R")[0]
    little = bone_world(rig, "finger5-1.R")[0]
    y = (middle - wrist).normalized()
    x = little - index
    x = (x - y * x.dot(y)).normalized()
    z = x.cross(y)
    basis = Matrix((x, y, z)).to_4x4()  # Rows are the new axes, so this rotates world into hand axes.
    return Matrix.Scale(1 / METRES_PER_KEY, 4) @ basis @ Matrix.Translation(-wrist)


def keep_hand(human, rig):
    """Deletes all but the right forearm and hand, and folds every other bone's weight into the forearm."""
    to_hand = hand_frame(rig)
    kept = set(RENAME) | {"lowerarm01.R"}
    index_of = {g.index: g.name for g in human.vertex_groups}
    mesh = human.data
    keep = np.zeros(len(mesh.vertices), dtype=bool)
    for v in mesh.vertices:
        w = sum(g.weight for g in v.groups if index_of[g.group] in kept)
        p = to_hand @ (human.matrix_world @ v.co)
        keep[v.index] = w > 0.5 and p.y > -FOREARM_KEPT
    bm = bmesh.new()
    bm.from_mesh(mesh)
    bm.verts.ensure_lookup_table()
    bmesh.ops.delete(bm, geom=[bm.verts[i] for i in np.nonzero(~keep)[0]], context="VERTS")
    bm.to_mesh(mesh)
    bm.free()

    forearm = human.vertex_groups["lowerarm02.R"]
    index_of = {g.index: g.name for g in human.vertex_groups}
    for v in mesh.vertices:
        other = sum(g.weight for g in v.groups if index_of[g.group] not in RENAME)
        if other > 0:
            forearm.add([v.index], other, "ADD")
    for group in list(human.vertex_groups):
        if group.name not in RENAME:
            human.vertex_groups.remove(group)

    select_only(rig)
    bpy.ops.object.mode_set(mode="EDIT")
    for bone in list(rig.data.edit_bones):
        if bone.name not in RENAME:
            rig.data.edit_bones.remove(bone)
    rig.data.edit_bones["lowerarm02.R"].parent = None
    bpy.ops.object.mode_set(mode="OBJECT")
    for old, new in RENAME.items():
        rig.data.bones[old].name = new
        if old in human.vertex_groups:
            human.vertex_groups[old].name = new

    # Both objects move into the hand's axes and scale, and keep that as their rest.
    human.parent = None
    for obj in (human, rig):
        obj.matrix_world = to_hand @ obj.matrix_world
    select_only(human, rig)
    bpy.ops.object.transform_apply(location=True, rotation=True, scale=True)
    human.parent = rig
    human.matrix_parent_inverse = Matrix.Identity(4)
    for mod in human.modifiers:
        if mod.type == "ARMATURE":
            mod.object = rig


def subdivide(obj, levels):
    obj.data.polygons.foreach_set("use_smooth", [True] * len(obj.data.polygons))
    if levels > 0:
        select_only(obj)
        mod = obj.modifiers.new("smooth", "SUBSURF")
        mod.levels = levels
        mod.render_levels = levels
        bpy.ops.object.modifier_move_to_index(modifier=mod.name, index=0)
        bpy.ops.object.modifier_apply(modifier=mod.name)
    obj.data.update()


def smooth_shaded(human):
    """
    Subdivides the skin `LEVELS` times, cuts it, and gives it the normals of a copy subdivided
    `SHADING_LEVELS` times, so a coarse mesh lights as smoothly as the fine one.
    """
    reference = human.copy()
    reference.data = human.data.copy()
    bpy.context.collection.objects.link(reference)
    for mod in list(reference.modifiers):
        reference.modifiers.remove(mod)
    subdivide(reference, SHADING_LEVELS)
    cut(reference)
    subdivide(human, LEVELS)
    if DECIMATE < 1:
        # Collapsing keeps each vertex's weights, interpolated, and runs before the cut keeps it square.
        select_only(human)
        mod = human.modifiers.new("fewer", "DECIMATE")
        mod.ratio = DECIMATE
        bpy.ops.object.modifier_move_to_index(modifier=mod.name, index=0)
        bpy.ops.object.modifier_apply(modifier=mod.name)
    cut(human)
    if FLAT:
        # A faceted hand exports no normals: the runtime lights each face flat from screen derivatives,
        # so the faces share their corners and the file holds each vertex once.
        pass
    elif LEVELS < SHADING_LEVELS or DECIMATE < 1:
        select_only(human)
        mod = human.modifiers.new("normals", "DATA_TRANSFER")
        mod.object = reference
        mod.use_loop_data = True
        mod.data_types_loops = {"CUSTOM_NORMAL"}
        mod.loop_mapping = "POLYINTERP_NEAREST"
        bpy.ops.object.modifier_move_to_index(modifier=mod.name, index=0)
        bpy.ops.object.modifier_apply(modifier=mod.name)
    bpy.data.objects.remove(reference)


def positions(obj):
    co = np.zeros(len(obj.data.vertices) * 3)
    obj.data.vertices.foreach_get("co", co)
    return co.reshape(-1, 3)


def group_weights(obj, name):
    w = np.zeros(len(obj.data.vertices))
    if name not in obj.vertex_groups:
        return w
    index = obj.vertex_groups[name].index
    for v in obj.data.vertices:
        for g in v.groups:
            if g.group == index:
                w[v.index] = g.weight
    return w


def thumb_up(d):
    """The way the thumbnail faces: out from the palm and up, square to the thumb."""
    hint = Vector((-0.75, 0.0, 0.66))
    return (hint - d * hint.dot(d)).normalized()


def finger_up(d):
    hint = Vector((0.0, 0.0, 1.0))
    return (hint - d * hint.dot(d)).normalized()


def markers(human, rig):
    """Rolls every finger bone so its z faces the back, and adds each digit's tip, pad and nail markers."""
    p = positions(human)
    select_only(rig)
    bpy.ops.object.mode_set(mode="EDIT")
    bones = rig.data.edit_bones
    for digit in DIGIT_BONES:
        for bone in bones:
            if bone.name.startswith(digit + "_"):
                d = (bone.tail - bone.head).normalized()
                bone.align_roll(thumb_up(d) if digit == "thumb" else finger_up(d))
        distal = bones[f"{digit}_3"]
        a = np.array(distal.head)
        d = np.array((distal.tail - distal.head).normalized())
        up = np.array(thumb_up(Vector(d)) if digit == "thumb" else finger_up(Vector(d)))
        lateral = np.cross(d, up)
        w = group_weights(human, f"{digit}_3")
        pts = p[w > 0.5]
        along = (pts - a) @ d
        radial = pts - a - np.outer(along, d)
        radius = float(np.median(np.linalg.norm(radial, axis=1)))
        length = float(along.max())
        tip = a + d * length
        near_tip = pts[along > length - radius * 1.1]
        pad = near_tip[np.argsort(near_tip @ up)[:12]].mean(axis=0)
        nail_centre = a + d * (length - radius * 1.25) + up * radius * 0.98
        half_length = radius * 0.95
        half_width = radius * 0.72
        for name, head, tail, roll_up in (
            ("tip", tip, tip + d * 0.1, up),
            ("pad", pad, pad + d * 0.1, up),
            ("nail", nail_centre, nail_centre + d * half_length, up),
            ("nailside", nail_centre + lateral * half_width, nail_centre + lateral * half_width + d * 0.1, up),
            ("nailtip", nail_centre + d * half_length, nail_centre + d * (half_length + 0.1), up),
        ):
            marker = bones.new(f"{digit}_{name}")
            marker.head = Vector(head)
            marker.tail = Vector(tail)
            marker.align_roll(Vector(roll_up))
            marker.parent = distal
            marker.use_deform = False
    bones["hand"].align_roll(Vector((0, 0, 1)))
    bones["forearm"].align_roll(Vector((0, 0, 1)))
    bpy.ops.object.mode_set(mode="OBJECT")


def cut(human):
    """Cuts the forearm off square, `CUT` behind the wrist, and closes the cut with a flat cap."""
    bm = bmesh.new()
    bm.from_mesh(human.data)
    geom = bm.verts[:] + bm.edges[:] + bm.faces[:]
    result = bmesh.ops.bisect_plane(bm, geom=geom, plane_co=(0.0, -CUT, 0.0), plane_no=(0.0, 1.0, 0.0), clear_inner=True)
    rim = [e for e in result["geom_cut"] if isinstance(e, bmesh.types.BMEdge)]
    cap = bmesh.ops.triangle_fill(bm, edges=rim, use_beauty=True, normal=(0.0, -1.0, 0.0))["geom"]
    bmesh.ops.recalc_face_normals(bm, faces=bm.faces)
    # The rim is a hard edge, so the cap stays flat and the arm's side keeps its round shading.
    for edge in rim:
        edge.smooth = False
    for face in cap:
        if isinstance(face, bmesh.types.BMFace):
            face.smooth = False
    bm.to_mesh(human.data)
    bm.free()
    human.data.update()


def material(name, rgba, roughness):
    mat = bpy.data.materials.new(name)
    mat.diffuse_color = rgba
    mat.roughness = roughness
    return mat


# ---------------------------------------------------------------------------------------------------
# Preview renders, so the shape can be checked without the app.


def preview(rig, out_dir):
    scene = bpy.context.scene
    scene.render.engine = "BLENDER_WORKBENCH"
    scene.display.shading.light = "STUDIO"
    scene.display.shading.color_type = "MATERIAL"
    scene.render.resolution_x = 900
    scene.render.resolution_y = 620
    select_only(rig)
    bpy.ops.object.mode_set(mode="POSE")
    curls = {"_1": -0.5, "_2": -0.7, "_3": -0.4}
    for pb in rig.pose.bones:
        pb.rotation_mode = "XYZ"
        for suffix, angle in curls.items():
            if pb.name.endswith(suffix) and not pb.name.startswith("thumb"):
                pb.rotation_euler.x = angle
    bpy.ops.object.mode_set(mode="OBJECT")
    cam = bpy.data.objects.new("cam", bpy.data.cameras.new("cam"))
    cam.data.lens = 40
    bpy.context.collection.objects.link(cam)
    scene.camera = cam
    views = {
        "top": ((0.0, 2.0, 14.0), (0.0, 2.6, -0.5)),
        "right": ((10.0, 6.0, 3.5), (0.0, 3.0, -0.6)),
        "left": ((-10.5, 6.0, 3.0), (-0.5, 3.0, -0.6)),
        "below": ((0.5, 3.0, -11.0), (0.0, 3.0, -0.6)),
    }
    for name, (eye, target) in views.items():
        cam.location = Vector(eye)
        cam.rotation_euler = (Vector(target) - Vector(eye)).to_track_quat("-Z", "Y").to_euler()
        scene.render.filepath = f"{out_dir}/model-{name}.png"
        bpy.ops.render.render(write_still=True)


# ---------------------------------------------------------------------------------------------------


def main():
    argv = sys.argv[sys.argv.index("--") + 1 :]
    out = argv[0]
    preview_dir = argv[1] if len(argv) > 1 else None

    human, rig = make_human()
    keep_hand(human, rig)
    smooth_shaded(human)
    markers(human, rig)
    human.name = "skin"
    rig.name = "rig"
    human.data.materials.clear()
    human.data.materials.append(material("skin", (0.95, 0.72, 0.62, 1), 0.55))

    objects = [human]
    select_only(rig, *objects)
    bpy.ops.export_scene.gltf(
        filepath=out,
        export_format="GLB",
        use_selection=True,
        export_yup=True,
        export_apply=False,
        export_skins=True,
        export_animations=False,
        export_morph=False,
        export_texcoords=False,
        export_normals=not FLAT,
        export_vertex_color="NONE",
        export_all_vertex_colors=False,
        export_materials="EXPORT",
    )
    for o in objects:
        print(f"MESH {o.name}: {len(o.data.vertices)} vertices, {len(o.data.polygons)} faces")
    print(f"BONES {len(rig.data.bones)}")

    if preview_dir:
        preview(rig, preview_dir)


main()

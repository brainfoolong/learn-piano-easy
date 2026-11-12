# The mascot's hand

The model in this folder is the hand of the site's mascot, our piano teacher. It starts from the human
base mesh, rig and weights of [MakeHuman](https://static.makehumancommunity.org/), which are released
under [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/). MakeHuman's MPFB extension for
Blender builds that human, and MPFB's code never ships with the app.

`tools/hand-model.ts` makes the file. It keeps the right forearm and hand, cuts the arm square, reduces
it to a faceted low-poly mesh, renames the rig, and adds marker bones. Our changes are under the MIT
License, the same as the app: see `LICENSE` at the repository root. The MakeHuman parts stay CC0.

| File | What it shows | License |
|---|---|---|
| `hand.glb` | The mascot's right hand and forearm, rigged, in the 3D piano's units | CC0 1.0, with our changes under MIT |

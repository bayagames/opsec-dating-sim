# OPSEC Dating Simulator

A first-person 3D visual novel about love, lies and leaving your Bluetooth on.

## Play
Open `index.html` in a browser. It is fully self-contained (no external libraries).

## Build
Source lives in `src/`. To rebuild `index.html` after editing:

    python3 build.py

`build.py` concatenates `src/*.js` (in filename order) into `src/template.html`.

## Source map
- `01_engine.js`   portraits, state, VN engine, tutorials
- `02_games.js`    minigames (quiz, phishing, terminal, timing, code review)
- `03_main.js`     main story chapters 0-4
- `04_routes_a.js` Nyx, Ada, Priya, Juno routes
- `05_routes_b.js` Kit, Rin, Bea, Ellie, Mira routes + Dave
- `06_hub_finale.js` hangouts, shop, keynote, endings, title
- `07_gl.js`       WebGL renderer, geometry helpers, character sprites
- `08_level.js` / `08b_level.js` textures and level design
- `09_world.js`    movement, collision, interaction, minimap
- `10_phone.js`    phone UI and apps
- `11_saves.js`    save slots, export/import
- `12_input.js`    keyboard + device detection
- `99_boot.js`     startup

## Deploy to GitHub Pages
Settings → Pages → Build and deployment → Source: "Deploy from a branch" → `main` / `(root)`.
The site is served from `index.html` at the repo root; `.nojekyll` stops Jekyll from processing the files.
Remember to run `python3 build.py` and commit `index.html` after editing `src/`.

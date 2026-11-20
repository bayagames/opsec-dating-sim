# OPSEC Dating Simulator

A first-person 3D visual novel about love, lies and leaving your Bluetooth on.

## Play
Open `index.html` in a browser (or serve the folder). It needs `vendor/three.bundle.js` next to it; there are no other assets. Music and sound are synthesised at runtime with Web Audio.

## Build
Source lives in `src/`. To rebuild `index.html` after editing:

    python3 build.py

`build.py` concatenates `src/*.js` (in filename order) into `src/template.html`.

`vendor/three.bundle.js` is three.js r170 plus the post-processing addons the game uses, bundled from `tools/three-entry.js`:

    npm i three@0.170.0 esbuild@0.24.0
    npx esbuild tools/three-entry.js --bundle --minify --format=iife --target=es2019 --legal-comments=none --outfile=vendor/three.bundle.js

## Source map
- `01_engine.js`   portraits, state, settings, VN engine, tutorials
- `02_games.js`    minigames (quiz, phishing, terminal, timing, code review)
- `03_main.js`     main story chapters 0-4
- `04_routes_a.js` Nyx, Ada, Priya, Juno routes
- `05_routes_b.js` Kit, Rin, Bea, Ellie, Mira routes + Dave
- `06_hub_finale.js` hangouts, shop, keynote, endings, title
- `07_gl.js`       three.js renderer: level builder API, chunked geometry, light pool, bloom, sky
- `07b_chars.js`   full-body character and crowd art
- `08_level.js` / `08b_level.js` textures, materials and level design
- `09_world.js`    movement, collision, interaction, sprites, minimap, main loop
- `10_phone.js`    phone UI and apps (Settings: volume, graphics, look speed)
- `11_saves.js`    save slots, export/import
- `12_input.js`    keyboard + device detection
- `13_audio.js`    procedural music, ambience and UI sounds
- `99_boot.js`     startup

## Controls
Desktop: WASD/arrows to walk, Shift to run, mouse to look (always captured while walking), E to interact, M for map. Esc or P opens the phone and frees the mouse; close it to step back in.
Touch: left stick to walk, drag anywhere else to look, tap the prompt to interact.

## Deploy to GitHub Pages
Settings → Pages → Build and deployment → Source: "Deploy from a branch" → `main` / `(root)`.
The site is served from `index.html` at the repo root; `.nojekyll` stops Jekyll from processing the files.
Remember to run `python3 build.py` and commit `index.html` after editing `src/`.

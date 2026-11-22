# OPSEC Dating Simulator

A first-person 3D visual novel about love, lies and leaving your Bluetooth on.

## Play
Open `index.html` in a browser (or serve the folder). It needs `vendor/three.bundle.js` next to it; there are no other assets. Music and sound are synthesised at runtime with Web Audio.

## Build
Source lives in `src/`. To rebuild `index.html` after editing:

    python3 build.py

`build.py` concatenates `src/*.js` (in filename order) into `src/template.html`.

`vendor/three.bundle.js` is three.js r170 plus the post-processing addons the game uses (bloom, GTAO ambient occlusion, FXAA, output), bundled from `tools/three-entry.js`:

    npm i three@0.170.0 esbuild@0.24.0
    npx esbuild tools/three-entry.js --bundle --minify --format=iife --target=es2019 --legal-comments=none --outfile=vendor/three.bundle.js

## Source map
- `01_engine.js`   portraits, state, settings, VN engine, tutorials
- `02_games.js`    minigames (quiz, phishing, terminal, timing, code review)
- `03_main.js`     main story: chapter 0 (office, evening, station, train) and Day 1 onboarding steps, chapters 1-4
- `04_routes_a.js` Nyx, Ada, Priya, Juno routes
- `05_routes_b.js` Kit, Rin, Bea, Ellie, Mira routes + Dave
- `06_hub_finale.js` hangouts, shop, keynote, endings, title
- `07_gl.js`       three.js renderer: level builder API, chunked geometry, glass, light pool, per-region environment maps, lightmap packing, bump relief, AO, bloom, colour grade, sky. `LOOK` holds every lighting knob in one place
- `07c_bake.js`    baked lighting, one place at a time: the first visit to a place renders a cube shadow map per light and accumulates them into its lightmaps (soft shadows, falloff, fill, RGBM), caches them in IndexedDB, and frees the previous place's GPU memory. Moving things are lit by `probeAt`
- `07b_chars.js`   full-body character and crowd art
- `08_level.js`    textures and materials
- `08b_level.js`   level helpers + home (flat and bakery)
- `08i_site.js`    the site: textures, builder helpers (floors with holes, stair shells, escalators, booths, chandeliers) and the visibility zones (which part of the building can see which)
- `08j_hotel.js`   the Halcyon Hotel: atrium lobby, promenade, bar and terrace, grill, kitchen, back rooms; mezzanine, ballroom, Lumen Lounge, meeting rooms, library; pool, gym, spa; tower and facades
- `08k_core.js`    the convention core: the Foyer atrium with registration, the Lumen booth, escalators and skybridge; the three-level Ring; the courtyard and bar terrace
- `08l_halls.js`   Hall A (the arena), Hall B, backstage, staff corridors, security, stores, MDF, service corridor, Con Ops/press/speakers, kitchen, break room, loading dock
- `08m_east.js`    the Expo Hall, the south-east concourse, Village Row (two storeys of villages and workshops)
- `08n_south.js`   food court and Sky Garden, cosplay hall, chill-out, nap pods, quiet room, the plaza and the outside of the buildings
- `08o_under.js`   car park, NOC, plant room and laundry, hotel basement, service tunnel, the con roof, and the named areas
- `08d_tower.js`   hotel 13th floor + hotel roof
- `08a_kit.js`     shared props (desks, chairs, monitors, plants, lamps, beams) sized in metres
- `08g_office.js`  Brindle & Co: the third floor of an office tower, with the street below
- `08h_station.js` Central Station: a Victorian train shed, concourse and the tracks out to the city
- `08f_home.js`    Proof: a five-level corner building (bakery, Flat 1A, two locked floors, roof terrace) on Linden Street, with the street, square, rear terraces, viaduct and city around it; morning sun baked through real windows
- `09_world.js`    movement, collision, interaction, sprites, minimap, main loop
- `09a_place.js`   who stands where, interactions, crowd, story gates, lifts, train and taxi
- `10_phone.js`    phone UI and apps (Settings, Quit)
- `11_saves.js`    save slots, export/import
- `12_input.js`    keyboard + device detection
- `12b_cursor.js`  virtual cursor, so the mouse stays captured through conversations
- `13_audio.js`    procedural music, ambience, UI sounds and surface-aware footsteps (carpet, marble, wood, metal, concrete, grass, gravel)
- `99_boot.js`     startup

## Map
Two buildings joined at the Foyer (ground) and a glass skybridge (Level 1). The Halcyon Hotel is west:
lobby, café, bar with a courtyard terrace, luggage room, Level 1 (meeting rooms, gym, Lumen Lounge),
basement (car park, network ops, plant room, service tunnel), the 13th floor and the roof. The Convention
Centre is east: the Ring around an open courtyard, Hall A and Hall B, Vendor Hall, Village Row, Food
Court, Cosplay Hall, Chill-out, back of house (service corridor, security, MDF, loading dock) and
Level 1 (gallery, workshops, hardware hacking, Creator Corner, Retro Arcade, Con Ops, press, quiet room).
Areas open as the story needs them (`GATES` in `09a_place.js`).

## Controls
Desktop: WASD/arrows to walk, Shift to run, mouse to look, E to interact, M for map. The mouse is captured from the moment you press Begin/Continue and stays captured in the 3D world, including during conversations (a drawn cursor appears for choices). Esc or P opens the phone and frees the mouse; closing it steps you straight back in.
Touch: left stick to walk, drag anywhere else to look, tap the prompt to interact.

## Deploy to GitHub Pages
Settings → Pages → Build and deployment → Source: "Deploy from a branch" → `main` / `(root)`.
The site is served from `index.html` at the repo root; `.nojekyll` stops Jekyll from processing the files.
Remember to run `python3 build.py` and commit `index.html` after editing `src/`.

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
- `01_engine.js`   portraits, VN engine, tutorials
- `01b_core.js`    the week (days and six parts of each), Skill and Clout ranks, closeness, Exposure and its daily reset and fail, clues, achievements, the story summary, what carries over between runs
- `01c_script.js`  the scene language: scenes are written as plain text (`~` narration, `*` thoughts, `name.x:` lines, `?` choices, `if`, `[commands]`) and parsed on first use
- `02_games.js`    minigames (quiz, phishing, terminal, timing, code review)
- `03_data.js`     clues, the twelve mysteries, leads, items, achievements, endings
- `03b_flow.js`    story beats, free time, hangouts, leads, the case board, the final act's positions
- `04_days.js`     the calendar: which part of which day belongs to the story
- `04a`-`04h`      the prologue and Days 1 to 7; `04i_endings.js` the twenty endings
- `05_routes.js`   the twenty-one routes' requirements and small talk; `05a`-`05j` their scenes; `05k_leads.js` investigations
- `06_finale.js`   hub, shop, Room 1337, positions, choosing the ending, title
- `docs/STORY_BIBLE.md` the cast, the conspiracy, the mysteries, the calendar and the endings (spoilers)
- `07_gl.js`       three.js renderer: level builder API, chunked geometry, glass, light pool, per-region environment maps, lightmap packing, bump relief, AO, bloom, colour grade, sky. `LOOK` holds every lighting knob in one place
- `07c_bake.js`    baked lighting, one place at a time: the first visit to a place renders a cube shadow map per light and accumulates them into its lightmaps (soft shadows, falloff, fill, RGBM), caches them in IndexedDB, and frees the previous place's GPU memory. Moving things are lit by `probeAt`
- `07b_chars.js`   full-body character and crowd art
- `08_level.js`    textures and materials
- `08b_level.js`   level helpers + home (flat and bakery)
- `08i_site.js`    the site: textures, builder helpers (floors with holes, stair shells, escalators, booths, chandeliers) and the visibility zones (which part of the building can see which)
- `08j_hotel.js`   the Halcyon Hotel, drawn on its own plan and placed 64 m west of it: atrium lobby with a glass front onto its garden, promenade, bar and its terrace in the lane, grill, kitchen, back rooms; mezzanine, ballroom, Lumen Lounge, meeting rooms, library; pool, gym, spa; tower and facades
- `08k_core.js`    the convention core: the Foyer atrium with registration, the cloakroom, the Lumen booth and escalators; the Link and Skybridge to the hotel; Hall C and the Badge Lab; the three-level Ring; the courtyard
- `08l_halls.js`   Hall A (the arena), Hall B, backstage, staff corridors, security, stores, MDF, service corridor, Con Ops/press/speakers, kitchen, break room, loading dock
- `08m_east.js`    the Expo Hall, the south-east concourse, Village Row (two storeys of villages and workshops)
- `08n_south.js`   food court and Sky Garden, cosplay hall, chill-out, nap pods, quiet room, the plaza, the boulevard and the city blocks round the site, the Halcyon Garden, and the outside of the buildings
- `08o_under.js`   car park, NOC, plant room and laundry, hotel basement, service tunnel, the con roof, and the named areas
- `08d_tower.js`   hotel 13th floor + hotel roof
- `08a_kit.js`     shared props (desks, chairs, monitors, plants, lamps, beams) sized in metres
- `08g_office.js`  Brindle & Co: the third floor of an office tower, with the street below
- `08h_station.js` Central Station: a Victorian train shed, concourse and the tracks out to the city
- `08f_home.js`    Proof: a five-level corner building (bakery, Flat 1A, two locked floors, roof terrace) on Linden Street, with the street, square, rear terraces, viaduct and city around it; morning sun baked through real windows
- `09_world.js`    movement, collision, interaction, sprites, minimap, main loop
- `09a_place.js`   who stands where, interactions, crowd, story gates, lifts, train and taxi
- `10_phone.js`    phone UI and apps (Messages, Calendar, Hearts, Case board, Stats, Story, Achievements, Bag, Saves, Log, Settings)
- `10b_map.js`     the full-screen map: pan and zoom, level tabs, fast travel grouped by building, search and recents
- `11_saves.js`    save slots, export/import
- `12_input.js`    keyboard + device detection
- `12b_cursor.js`  virtual cursor, so the mouse stays captured through conversations
- `13_audio.js`    procedural music, ambience, UI sounds and surface-aware footsteps (carpet, marble, wood, metal, concrete, grass, gravel)
- `99_boot.js`     startup

## Map
Two separate buildings across a lane, joined by the Link: a glazed two-storey bridge building from the
hotel's Promenade to the con's Foyer, with the Skybridge on its upper floor. The Halcyon Hotel is west:
lobby, café, the bar and its terrace in the lane, the Grill, luggage room, Level 1 (ballroom, meeting
rooms, library, Lumen Lounge), Level 2 (pool, gym, spa), the 13th floor and the roof, with its garden
between its glass front and the Foyer. The Convention Centre is east: the Foyer, Hall C and the Badge Lab,
the Ring around an open courtyard, Hall A and Hall B, the Expo Hall, Village Row, Food Court, Cosplay
Hall, Chill-out, back of house (service corridor, security, MDF, loading dock) and Level 1 (gallery,
workshops, hardware hacking, Creator Corner, Retro Arcade, Con Ops, press, quiet room). Underneath:
the car park, network ops, the plant room and the service tunnel. Areas open as the story needs them
(`GATES` in `09a_place.js`).

## Controls
Desktop: WASD/arrows to walk, Shift to run, mouse to look, E to interact, M for map. The mouse is captured from the moment you press Begin/Continue and stays captured in the 3D world, including during conversations (a drawn cursor appears for choices). Esc or P opens the phone and frees the mouse; closing it steps you straight back in.
Touch: left stick to walk, drag anywhere else to look, tap the prompt to interact.

## Deploy to GitHub Pages
Settings → Pages → Build and deployment → Source: "Deploy from a branch" → `main` / `(root)`.
The site is served from `index.html` at the repo root; `.nojekyll` stops Jekyll from processing the files.
Remember to run `python3 build.py` and commit `index.html` after editing `src/`.

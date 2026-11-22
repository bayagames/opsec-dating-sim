# OPSEC Dating Simulator: story bible

Working reference for the expanded game. Spoilers throughout.

## Shape of a run
- **Prologue (Two weeks earlier).** Linear. Proof, Flat 1A, Brindle & Co, Ellie's stolen account, WHISPER's first DM, Lumen.
- **Day 1 (Monday).** Linear morning to afternoon: packing, saying goodbye at Proof, a last half-day at the office (Linda, Gary, SafeSphere rolled out to work phones), Central Station (Pia busking), the train (Astrid). From the Evening slot the calendar runs.
- **Days 1 to 7** of CTRL+ALT+CON's 20th anniversary "Hack Week". Six slots a day: Morning, Midday, Afternoon, Evening, Night, Late night. Day 1 starts at Evening. Time never moves on its own: only story beats and slot activities move it.
- **Story slots** hold a beat that happens at a place (the goal beacon points there). Other activities wait until it's done.
- **Free slots** take one activity: a hangout scene, an investigation lead, a talk or workshop, CTF practice, a bug bounty, streaming with Juno, or resting. Meeting someone, talking shop (once per person per day), gifts, the shop and the phone are free.
- **Exposure** resets each morning to your Footprint (permanent leaks). At 100 you're doxxed and the day restarts from its morning snapshot. Risky leads can spike it.
- **Skill** and **Clout** are XP with ranks (0-5). Skill: Script Kiddie, Novice, Practitioner, Specialist, Expert, Elite. Clout: Nobody, Lurker, Known Face, Notable, Con Famous, Legend. Thresholds 0/30/80/150/250/380.
- **Closeness** per character: affection 0-100 plus scenes seen (0-6). Stages: Met, Acquaintance, Friend, Close, Dating, In Love. Scene 0 (meeting) is free; scenes 1-5 cost a slot each; scene 5 is the final love scene.
- 14 free slots per run, so two full routes plus Ellie (whose scenes are mostly story beats) plus a few leads. From Day 5 the story nudges you to spend time on people you're dating.

## Cast (datable: 21)
| id | name | who | where | met |
|---|---|---|---|---|
| ellie | Ellie Park | baker, Proof; main girl | home / hotel lobby & café | story |
| nyx | Nyx | red teamer, contracted by Lumen | Lockpick Village | optional |
| ada | Ada Mensah | CTF prodigy | Hall C / CTF room | story D2 |
| priya | Priya Raman | blue team, paranoid | Blue Team Village | story D2 |
| juno | Juno | streamer CyberJuno | Creator Corner | optional |
| kit | Kit | cosplayer, maker | Cosplay Hall | optional |
| rin | Rin Takahashi (he/him) | malware analyst at Bastion; femboy | Chill-out | story D2 |
| bea | Bea Doyle | hotel bartender | Hotel Bar | story D1 |
| mira | Mira | WHISPER, ex-Lumen data scientist | hotel roof | story D3 |
| saoirse | Saoirse Quinn | investigative journalist, The Ledger | Press room | story D3 |
| sunny | Sunny Adeyemi | NOC lead, keeps 4,000 people online | NOC (basement) | story D4 |
| tilly | Tilly Marsh | designed the con badge | Badge Lab | story D2 |
| petra | Petra Novak | car hacker | Car Hacking Village, car park | optional |
| astrid | Astrid Lund | satellites and radio | Aerospace Village; met on the train | optional |
| yuki | Yuki Tanabe | speedrunner, glitch hunter | Retro Arcade | optional |
| vesper | Vesper Lane | jazz singer; secretly Halberd | Lumen Lounge | story D2 |
| delphine | Delphine Vos | Lumen VP Communications | Lumen booth / Grill | story D2 |
| noor | Noor Haddad | digital rights lawyer | hotel library / speakers | optional |
| fern | Fern Albright | hotel gardener, beekeeper | Halcyon Garden / roof | optional |
| wren | Wren Calloway | lifeguard, true-crime podcaster | hotel pool | optional |
| pia | Pia Reyes | busker, Jonah's sister | Central Station | optional (seen D1) |

Not datable: Dave (redeemed intern), Marge (con chair), Linda (your boss), Gary, Victor Hale (Lumen CEO),
Silas Krall (Lumen "Trust & Safety", ex-intelligence: runs the copycat), Graham Pike (Bastion CEO), Owen Pryce
(con deputy chair: the mole), Mr Ashgrove (Halberd), Jonah Reyes (missing researcher).

## The conspiracy, layer by layer
1. **SafeSphere** started as Mira's honest privacy app. Victor turned it into a harvester: contacts, location every
   60 s, browsing through the "VPN". Sold to brokers and insurers (Brindle & Co's "LifeScore" pricing).
2. **Lumen Growth Partners** runs "account recovery": breach lists plus SafeSphere data to hijack small businesses,
   then sell them the fix. Ellie's account. The forwarding address leads to Lumen's infrastructure.
3. **LANTERN** (SafeSphere 2's contact graph) maps who knows whom, scores people who never installed it, and finds
   *sources*: who meets journalists, lawyers, regulators. The con is the live test. Owen approved a "sponsor
   firmware" for Tilly's badges: every badge beacons its neighbours, so LANTERN logs who talks to whom and for how
   long. Data flows to LANTERN-01, a rogue box in the MDF.
4. **Halberd** (a private intelligence firm, fronted by Corvid Holdings) is buying LANTERN for £400m. Mr Ashgrove
   flies in on Day 5. The signing is Day 7 after the keynote in Suite 1313, proof being the con's own graph.
5. **The copycat WHISPER ("WH1SPER")**: Krall's team. After Mira's Day 1 lesson on Dave, the copycat doxes with
   real addresses and SafeSphere-only data: panic drives installs ("Shield mode protects you from WHISPER"),
   justifies the badge firmware as "WHISPER protection", smears the security community before a regulator vote,
   and on Day 5 frames {h} as WHISPER.
6. **The mole**: Owen Pryce, deputy chair, in debt, promised Lumen money for life. Feeds Lumen the Room 1337 meeting
   (the Day 6 raid). Unmasked, he can be fed a false plan.
7. **Bastion**: Graham Pike signs SafeSphere's audits for Lumen's money. A year ago he wrote the "forensic report"
   that branded Jonah Reyes a thief.
8. **Jonah Reyes** found LANTERN early, was smeared, and vanished. He's alive, hiding in the city, talking to his
   sister Pia through song requests at Central Station; his archive is in a station locker.
9. **Vesper** is Halberd's asset, sent to find WHISPER through you (WHISPER DMed you, so the graph flagged you).
   She falls for you for real.
10. **Delphine** writes Victor's speeches. She finds the copycat's scripts and is sick of it.
11. **Mira's switch**: she kept SafeSphere's original update signing key. Pushing a "self-destruct" update to
    10 million phones is the vigilante option.

## Mysteries (case board)
Each has a question, answer options, and the clues that prove it. Clues come from story, routes and leads.
Solving: pick the answer and the three clues that prove it. A wrong deduction costs Exposure.
1. **The Bakery Job**: who stole Proof's account? Lumen Growth Partners.
2. **WHISPER**: who is WHISPER? Mira.
3. **The Copycat**: who is WH1SPER? Krall and Lumen Trust & Safety, from Suite 1313.
4. **Lantern**: what is SafeSphere 2? A contact graph built to find sources.
5. **The Badges**: why do the badges blink? The sponsor firmware beacons for LANTERN.
6. **The Mole**: who in Con Ops leaks? Owen Pryce.
7. **The Auditor**: is Bastion's audit real? No: Pike is paid by Lumen.
8. **The Buyer**: who is buying? Halberd, through Corvid Holdings; Mr Ashgrove.
9. **The Missing Man**: what happened to Jonah Reyes? Smeared by Pike, alive, hiding.
10. **Brindle**: why does your employer care? It buys LifeScore data from Lumen.
11. **The Singer**: who is Vesper? Halberd's asset.
12. **Mira's Switch**: what is Mira planning? The signing key and a kill update.

## Calendar (S = story beat, F = free)
- D1 Mon: Morning S Home (pack, Ellie, the door) · Midday S Brindle & Co (queue, Gary, LifeScore) · Afternoon S Central Station (Pia, the train, Astrid) · Evening S Arrival (badge, Dave, ceremony, check-in, room) · Night S The Bar (Bea, Victor, Delphine, WHISPER doxes Dave) · Late F
- D2 Tue: Morning S CTF 101 (Ada; CTF explained) · Midday S Rin in the Chill-out · Afternoon S The Badge (Tilly, Priya; the badges beacon) · Evening S Reception (Lumen Lounge: Vesper sings, Delphine, Krall, LANTERN teased) · Night F · Late S Room 1337 (WHISPER's DM, Ellie's text)
- D3 Wed: Morning S Ellie arrives · Midday S Two Whispers (Victor exposed; then WH1SPER posts a real address; Saoirse) · Afternoon F · Evening F · Night S The Roof (Mira) · Late F
- D4 Thu: Morning F · Midday S The NOC (Sunny; LANTERN-01; Owen) · Afternoon F · Evening S The Gathering (Rin's findings; Marge's deal) · Night S Proof is burgled · Late F
- D5 Fri: Morning S Home (train with Ellie; Proof ransacked; Pia) · Midday F (home side: leads at Proof, the office, the station) · Afternoon S Framed (WH1SPER names {h}; Ellie chooses; leave-with-Ellie ending) · Evening S The Offer (Victor at the Grill) · Night F · Late F
- D6 Sat: Morning F · Midday S CTF Finals (Ada; Mira's challenge names Halberd) · Afternoon F · Evening S The Raid (Room 1337 searched) · Night S War Council (choose the plan) · Late F (the night before)
- D7 Sun: Morning S Positions · Midday S Krall's Move · Afternoon S The Keynote (tasks) · Evening S The Thirteenth Floor (roof, 1313, Mira, Krall, Ashgrove) · Night S 0xFF (afterparty, epilogue)

## Final act
Plan options (each needs its own conditions): Disclosure (Marge's slot), Front Page (Saoirse), Injunction (Noor and
Delphine), Kill Switch (Mira), Sell Out (Victor's offer), Walk Away (last train). Then the keynote tasks: stop the
uplink, protect Rin and the evidence, get the evidence on screen, verify it live, find the buyer, handle the mole.
Allies are assigned; fit and closeness decide each task. Then the roof.

## Endings (20)
1 Everything Connected (true harem) · 2 Responsible Disclosure · 3 Half Measures · 4 Front Page · 5 Injunction ·
6 Kill Switch · 7 Ghost Protocol (leave with Mira) · 8 Double Agent (with Vesper) · 9 Whistleblower (Delphine) ·
10 Found (Jonah testifies) · 11 Signal (Astrid's broadcast) · 12 Blackout (Sunny cuts everything) · 13 The Graph
(Lumen wins) · 14 Scapegoat (framed) · 15 Sold Out · 16 Proof (go home with Ellie, Day 5) · 17 Larp Exposed ·
18 Open Source (friends) · 19 404: Partner Not Found · 20 Last Train.
Romance epilogues layer on top: whoever's final scene you reached (pick one if several).

## The hidden way to everyone
Persistent meta records every route finished and every mystery solved across runs. Once every route and every
mystery has been done at least once, a new run's prologue flat has `session.bak` on your laptop. Restoring it:
people whose route you've finished before start at Dating once met, mysteries you've solved before keep their clues
in your notebook, and you get "overclocked" days (two activities per free slot). With all 21 final scenes, max love
and all 12 mysteries solved in that run, Day 7 becomes Everything Connected.

## Script format (src/03a_script.js)
Scenes are plain text in template literals, parsed at runtime:
- `~ text` narration · `* text` inner thought · `> text` you say it · `id.x: text` a character (x = expression
  n h s a o b d) · `"Role": text` a named stranger · `whisper: TEXT` / `wh1sper: TEXT` · `sms Name: text`
- `[bg key]` `[hide]` `[fx ellie:5 skill:4 exp:10]` `[flag a b]` `[clue id]` `[item id]` `[msg id text]` `[game kind k=v]`
  `[sum text]` (story summary) `[ach id]` `[unlock k]` `[goto label]` `[call fn]` `[end key]`
- `? choice text || hint` with an indented block below; `?(expr) text` only if expr is true
- `if expr` / `elif expr` / `else` with indented blocks; `# label`
- `{h}` is your handle; `{=expr}` evaluates.

## Files
- `01b_core.js` calendar constants, ranks, closeness, effects, exposure fail, meta; `01c_script.js` the script parser
- `03_data.js` clues, mysteries, leads, items, achievements, endings; `03b_flow.js` beats, free time, hangouts, leads, case board, positions
- `04_days.js` the calendar; `04a`-`04h` the prologue and Days 1-7; `04i_endings.js` the twenty endings and epilogues
- `05_routes.js` route requirements and small talk; `05a`-`05j` the routes; `05k_leads.js` leads, Dave, solved-case beats
- `06_finale.js` hub, shop, Room 1337, positions game, ending choice, title

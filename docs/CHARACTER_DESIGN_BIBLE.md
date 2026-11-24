# OPSEC Dating Simulator: Character Design Bible

A brief for rebuilding every character in a detailed character creator. It keeps each character's existing
identity (colours, hair shape, outfit, accessories, theme colour) and fills in everything the current flat art
doesn't say: body, posture, face, fabrics, small details.

Every character is an adult. Small characters (Yuki, Rin, Ada, Marge) are small adults: adult head-to-body
proportions, adult faces, never childlike.

Anything the story already says is kept (Ellie's grandmother in Busan, Rin's pronouns, who works where). Ages,
heights, heritage for most of the cast, and small details are suggestions you can change.

Hex codes are the colours already in the game (`CH` in `src/01_engine.js`, `LOWER` in `src/07b_chars.js`), so the new
art still matches the UI, the 3D world and the portraits. The **theme colour** is each character's UI colour
(name tag, hearts, map pins), so let it show up somewhere on them.

## Global rules

- **Style:** clean modern anime visual-novel style, soft cel shading, slightly muted real-world palette with one
  saturated accent per character (their theme colour). Grounded clothes: things people actually wear to a
  hacker conference, a bar, an office, a garden.
- **Scale:** Ellie = 1.00 = 165 cm. Heights below are barefoot; shoes are listed where they change it.
- **Proportions:** about 7 to 7.5 heads tall for adults. Keep the cast varied in shape as well as height. Not
  everyone is slim: Bea, Tilly, Petra, Fern, Marge and Owen have real weight to them.
- **Default pose for sprites:** standing, facing three-quarters to camera, weight on one leg, arms relaxed. Each
  character's signature posture (below) is what makes them read in silhouette.
- **Con badge:** attendees wear the CTRL+ALT+CON badge (a small circuit board with a blue LED) on a red lanyard.
  Listed per character. Staff, hotel workers and outsiders don't.
- **Expressions needed (7):** neutral, happy, surprised, half-lidded (smug or tired), worried, angry, teary.
- **Variants:** Ellie has two looks (apron, then the cardigan from Day 3). Kit has two (everyday, then armour).
  Dave has two (shades on Day 1, then without).

## Quick reference

| Character | Scale | Height | Age | Build | Bust / chest | Theme |
|---|---|---|---|---|---|---|
| Ellie Park | 1.00 | 165 cm | 26 | Soft, sturdy | Medium | `#ffb38a` peach |
| Nyx | 1.04 | 172 cm | 28 | Lean, wiry | Small | `#ff3fa4` hot pink |
| Ada Mensah | 0.95 | 157 cm | 22 | Slight | Small | `#8affc1` mint |
| Priya Raman | 1.02 | 168 cm | 30 | Slim, upright | Small to medium | `#7cc4ff` sky blue |
| Juno | 0.97 | 160 cm | 25 | Petite, curvy | Medium | `#ff8fc8` candy pink |
| Kit | 1.07 | 177 cm | 26 | Tall, strong shoulders | Small | `#2bf0ff` cyan |
| Rin Takahashi (he/him) | 0.94 | 155 cm | 27 | Small, slender, soft | Flat (male) | `#c9b6ff` lilac |
| Bea Doyle | 1.03 | 170 cm | 31 | Solid, curvy | Full | `#ff9a5c` orange |
| Mira | 1.06 | 175 cm | 30 | Tall, willowy | Small | `#cfd8ff` pale blue |
| Saoirse Quinn | 1.01 | 167 cm | 32 | Average, wiry | Small to medium | `#e8a35c` amber |
| Sunny Adeyemi | 1.05 | 173 cm | 29 | Athletic, broad shoulders | Small | `#ffe066` yellow |
| Tilly Marsh | 0.96 | 158 cm | 38 | Stocky, soft | Medium to full | `#9fe3c0` seafoam |
| Petra Novak | 1.04 | 172 cm | 28 | Muscular | Medium | `#ff7a3c` burnt orange |
| Astrid Lund | 1.02 | 168 cm | 31 | Slender, soft | Medium | `#a8d8ff` ice blue |
| Yuki Tanabe | 0.93 | 153 cm | 22 | Small, slim | Small | `#3aa0ff` electric blue |
| Vesper Lane | 1.06 | 175 cm | 32 | Hourglass | Full | `#d64a5a` crimson |
| Delphine Vos | 1.05 | 173 cm | 38 | Slim, poised | Medium | `#9ab4d8` steel blue |
| Noor Haddad | 1.00 | 165 cm | 33 | Average | Medium | `#5ac8a0` jade |
| Fern Albright | 1.01 | 167 cm | 35 | Sturdy, outdoorsy | Medium | `#8ac86a` leaf green |
| Wren Calloway | 1.03 | 170 cm | 25 | Swimmer's build | Small to medium | `#ff6a5a` coral red |
| Pia Reyes | 0.98 | 162 cm | 23 | Slim | Small | `#c89ae8` violet |
| Pam | 0.97 | 160 cm | 54 | Soft | Full | `#b8d8a8` sage |
| Silas Krall | 1.12 | 185 cm | 46 | Heavy-set | Broad | `#8a8f9a` gunmetal |
| Graham Pike | 1.08 | 178 cm | 52 | Thin, stooped | Narrow | `#b8a88a` khaki |
| Owen Pryce | 1.06 | 175 cm | 44 | Soft middle | Average | `#c8b08a` tan |
| Mr Ashgrove | 1.10 | 182 cm | 64 | Tall, lean | Narrow | `#c8ccd8` silver |
| Jonah Reyes | 1.08 | 178 cm | 28 | Lanky | Narrow | `#a89a8a` stone |
| Dave | 1.09 | 180 cm | 29 | Gym build | Broad | `#9be36b` lime |
| Victor Hale | 1.13 | 187 cm | 52 | Tall, broad, trim | Broad | `#b0b6c3` platinum |
| Linda | 1.01 | 167 cm | 54 | Neat, average | Medium | `#d9d4cc` stone grey |
| Gary | 1.04 | 172 cm | 34 | Slight paunch | Average | `#9be36b` lime |
| Marge | 0.95 | 157 cm | 63 | Small, round | Full | `#ffd166` butter yellow |

---

# The datable cast

## Ellie Park
*The baker downstairs. Not a hacker. Does things properly.* Korean-British; her grandmother had a bakery in Busan.

- **Height:** 165 cm (1.00). Age 26.
- **Body:** soft but sturdy, the build of someone who lifts 25 kg flour sacks every morning. Strong forearms and
  hands, rounded shoulders, medium bust, medium to full hips, solid legs. Skin warm fair `#f3d2bc`.
- **Posture:** grounded, feet planted, often wiping her hands on her apron or holding something (a tray, a paper
  bag). Leans in when she listens. Laughs with her whole upper body.
- **Face:** round, soft jaw, full cheeks that bunch up when she smiles. Eyes moss green `#5d7a3a`, warm and wide,
  slightly downturned outer corners. Thick, expressive brows. Small rounded nose. Full lower lip. A dusting of
  flour somewhere (cheek, nose, hairline).
- **Hair:** chestnut brown `#7a4a2c`, shoulder-length, loose waves, a few strands always escaping.
- **Look 1 (Days 0 to 2), Proof apron:** cream canvas bib apron over a dusty-pink long-sleeved top `#e9a9a0`,
  sleeves pushed to the elbow. Mid-blue straight jeans `#3d5a8a`, white trainers. Red-and-white bandana tied
  over her hair. Flour on the apron and hands.
- **Look 2 (Day 3 on):** cream knit cardigan `#f1e3c8` over a brick-red top `#c8504a`, navy A-line skirt to the
  knee `#3d4a6a`, opaque tights, brown ankle boots `#6a3a2a`. Red beret tilted to one side.
- **Accessories:** bandana (look 1), beret (look 2), a paper bag of cinnamon knots, a phone with a cracked
  corner. Con badge from Day 5.
- **Signature:** the most "normal" person in the cast; she should look warm and real next to the con's neon.

## Nyx
*Red teamer. Breaks into buildings for a living. Hates larpers.*

- **Height:** 172 cm (1.04), plus 3 cm boot heel. Age 28.
- **Body:** lean and wiry, a climber's body: defined shoulders and forearms, small bust, narrow hips, long legs.
  Skin pale `#f1d3c4`.
- **Posture:** very still, weight on one hip, arms folded or hands in jacket pockets. Watches doors. Chin
  slightly down, eyes up.
- **Face:** angular, sharp jaw and cheekbones, narrow chin. Eyes crimson `#e0315b`, almond-shaped, heavy black
  liner with a small flick. Straight, dark brows. Thin nose. Small mouth, usually a smirk on one side.
- **Hair:** blue-black `#1d1726`, chin-length blunt bob, a hot-pink streak `#ff3fa4` at the front on one side.
- **Clothes:** black leather jacket `#2a2530`, worn soft, sleeves pushed up; black fitted top. Dark pleated
  skirt `#1a1520` over black opaque tights `#2a2030`, black lace-up combat boots.
- **Accessories:** black choker, a lockpick set in a leather wallet, fingerless gloves when working. Con badge,
  the lanyard wrapped round her wrist.
- **Signature:** all black with one pink cut through it.

## Ada Mensah
*CTF prodigy. Compiles her own kernel. Thinks she's a fraud.* Ghanaian-British.

- **Height:** 157 cm (0.95). Age 22.
- **Body:** slight and slim, small bust, narrow shoulders, thin wrists. Skin deep brown `#7a4a32`.
- **Posture:** hunched forward as if over a laptop even when standing. Hoodie sleeves over her hands. Shifts her
  weight when nervous; stands up straight only when she's explaining something she knows.
- **Face:** round with a soft chin, high round cheeks. Eyes warm brown `#6b4426`, large, behind oversized round
  glasses. Soft brows. Broad nose. Full lips.
- **Hair:** near-black `#24160f`, natural 4C hair in two high puffs.
- **Clothes:** bright orange oversized hoodie `#ff8a3d`, sleeves too long, kangaroo pocket stuffed with a USB
  stick and a pen. Navy jeans `#2a3a5a`, white trainers.
- **Accessories:** oversized round glasses, laptop covered in stickers, con badge on the lanyard.
- **Signature:** a small person in a big orange hoodie.

## Priya Raman
*Blue team. Professionally paranoid. Has a reason.* British Tamil.

- **Height:** 168 cm (1.02). Age 30.
- **Body:** slim and upright, small to medium bust, long neck, straight back. Skin warm medium brown `#b07a5a`.
- **Posture:** perfectly straight, one phone in hand and another in her pocket. Keeps her back to walls. Arms close
  to her body. Precise, economical gestures.
- **Face:** oval with high defined cheekbones and a narrow chin. Eyes dark brown `#3d2a1c`, sharp and assessing,
  slightly hooded. Strong arched brows. Straight nose. Neutral mouth that rarely gives anything away.
- **Hair:** black `#140f12`, very long, scraped back into a high sleek ponytail.
- **Clothes:** slate-blue tailored blazer `#3f526a` over a white tee, charcoal slim trousers `#2a3040`, black
  minimal trainers.
- **Accessories:** two phones (one personal, one burner) and a webcam cover on her laptop. Con badge, worn
  face-in so nobody can scan it.
- **Signature:** neat, controlled, the only person at the con in a blazer by choice.

## Juno (CyberJuno)
*Streamer. Fifty thousand viewers, no real friends.*

- **Height:** 160 cm (0.97), plus 4 cm platform trainers. Age 25.
- **Body:** petite and curvy, medium bust, defined waist, rounded hips. Skin very fair `#fbe0d6`.
- **Posture:** always "on": head tilted, peace sign or finger-heart, one knee bent inward, playing to a camera
  that may not be there. When the camera's off her shoulders drop and she looks smaller.
- **Face:** heart-shaped, small pointed chin. Eyes violet `#9b59ff`, big and round, with false lashes and pink
  glitter liner. Thin arched brows. Tiny nose. Glossy pink lips.
- **Hair:** candy pink `#ff8fc8`, long twin tails reaching her waist, with a straight fringe.
- **Clothes:** cropped white techwear jacket `#efeaff` with pink trim, purple pleated skirt `#9b59ff` with a white
  hem `#ffffff`, white thigh-high socks, pink platform trainers `#ff8fc8`.
- **Accessories:** pink cat-ear headphones that light up, a ring light clipped to her phone, a small mic clipped to
  her jacket. Con badge decorated with stickers.
- **Signature:** the brightest thing in any room.

## Kit
*Cosplayer and maker. A different person in the armour.*

- **Height:** 177 cm (1.07). In armour, 182 cm with boots and helmet. Age 26.
- **Body:** tall, broad-shouldered, strong arms and back from building props, small bust, straight hips, long
  legs. Skin fair `#f6d9c6`.
- **Posture, everyday:** shy. Shoulders rounded, hands in back pockets, looking at the floor, tall but trying not
  to be.
- **Posture, armour:** heroic: chest up, feet apart, a completely different person.
- **Face:** long oval, strong jaw. Eyes purple `#6a4fb3`, deep-set and gentle. Straight brows. Freckles across
  her nose and cheeks. Wide mouth, crooked half-smile.
- **Hair, everyday:** dark plum `#3b2a4f`, short choppy pixie cut.
- **Hair, armour:** a long cyan wig `#2bd9e8` in a high ponytail.
- **Clothes, everyday:** faded charcoal band tee `#2d2d3a`, olive cargo trousers `#5a5a46`, scuffed black boots,
  paint and glue stains on her fingers.
- **Armour:** foam-and-resin sci-fi armour in deep navy `#1c2133` with cyan light strips `#2bf0ff`, cyan
  knee guards, cyan-soled boots, a visor pushed up on her forehead.
- **Accessories:** one silver ear cuff, a craft knife in a pocket. Con badge.
- **Signature:** the gap between quiet Kit and armour Kit is the whole point; make them read as the same person
  in two silhouettes.

## Rin Takahashi (he/him)
*Malware analyst at Bastion. Knows too much. Eats gummy worms.* A man who wears soft, feminine clothes; the
design should read as a pretty young man in a skirt, not as a girl.

- **Height:** 155 cm (0.94). Age 27.
- **Body:** small, slender and soft, male frame: flat chest, narrow shoulders, straight waist, slim legs. Skin very
  fair `#f7e0d4`.
- **Posture:** slouched, curled up when possible (on a bean bag, on a chair with his knees up). Hood half up.
  Speaks without looking up from a screen; looks up suddenly when something interests him.
- **Face:** soft and round, small chin, pretty rather than rugged. Eyes teal `#4fb3c4`, sleepy, with heavy lids
  and dark shadows underneath. Soft, slightly worried brows. Small nose. Small mouth, often chewing something.
  A plaster on one cheek.
- **Hair:** pale lilac `#d8c6ff`, fluffy, messy, ear-length, with a cat-shaped hair clip.
- **Clothes:** oversized pastel-pink hoodie `#ffd1e6` (sleeves past his fingers), lilac pleated skirt `#c9b6ff`
  with a pink hem `#ff9fd0`, white thigh-high socks, white trainers.
- **Accessories:** thin black choker, cat hair clip, plaster, a bag of gummy worms, Bastion ID on a lanyard (not
  a con badge).
- **Signature:** tiny, soft and pastel, the most dangerous person in the building.

## Bea Doyle
*Bartender. Sees everything. Draws all of it.* Irish.

- **Height:** 170 cm (1.03). Age 31.
- **Body:** solid and curvy, full bust, strong arms, broad hips, a real weight to her. Skin fair `#f5d6c4`.
- **Posture:** leaning on the bar on her forearms, or one hand on her hip, towel over her shoulder. Relaxed and
  in charge. Head tilted when she's sizing someone up.
- **Face:** square with soft edges, wide cheekbones. Eyes deep green `#4d7a5c`, knowing, crinkled at the corners.
  Thick straight brows. Lots of freckles. Wide grin, slightly gapped front teeth.
- **Hair:** copper red `#c2532b`, thick, piled up into a messy top bun with a pencil through it.
- **Clothes:** crisp white shirt `#f2f2f2`, sleeves rolled, under a black waistcoat; black trousers `#17141c`,
  black non-slip shoes.
- **Accessories:** a small hoop earring, a bar towel, a sketchbook and pencil in her back pocket, ink on the side
  of her hand. Staff, so no con badge.
- **Signature:** the steadiest person in the hotel.

## Mira
*Silver hair. Talks in riddles.* (Spoiler: she is WHISPER, an ex-Lumen data scientist.)

- **Height:** 175 cm (1.06). Age 30, but hard to place.
- **Body:** tall and willowy, long limbs, small bust, narrow hips. Skin cool pale `#ecdfd9`.
- **Posture:** perches rather than sits (on an air-con unit, a ledge, a railing). Moves slowly and deliberately.
  Often seen from a distance, looking down at people.
- **Face:** long, delicate, slightly elfin, pointed chin. Eyes pale grey `#8c96a8`, wide-set, unblinking. Fine
  grey brows `#9aa3b5`. Thin straight nose. Pale lips, faint smile.
- **Hair:** silver-white `#e3e7f0`, very long and straight, past her waist, one side pinned back with a clip.
- **Clothes:** black turtleneck `#17151c`, long black skirt to the ankle, flat black boots. A long dark coat on the
  roof at night.
- **Accessories:** a plain silver hair clip, a worn notebook, no badge (she shouldn't be there).
- **Signature:** monochrome. Silver and black and nothing else.

## Saoirse Quinn
*Investigative journalist, The Ledger. Burned once. Careful now.* Irish.

- **Height:** 167 cm (1.01). Age 32.
- **Body:** average and wiry, small to medium bust, thin wrists. Skin fair `#f4d8c6`.
- **Posture:** always mid-step, notebook open, pencil ready. Turns her head before her body. Stands slightly side-on
  to people, as if ready to leave.
- **Face:** narrow, angular, a sharp nose. Eyes green `#4a7a5a`, quick and watchful. Straight brows. Freckles.
  Thin lips, pressed together when thinking.
- **Hair:** auburn `#a0482a`, a big mass of tight curls to the shoulders, a pencil stuck in it.
- **Clothes:** tan trench coat `#b59a6a`, belt untied, over a striped top; dark trousers `#2a2a34`, brown boots.
- **Accessories:** spiral notebook, a pencil behind her ear, a press lanyard, a recorder in her pocket.
- **Signature:** the trench coat and the hair.

## Sunny Adeyemi
*Runs the con network. Hasn't slept since Monday.* Nigerian-British.

- **Height:** 173 cm (1.05). Age 29.
- **Body:** athletic, broad shoulders, toned arms, small bust, strong legs. Skin deep brown `#6a4430`.
- **Posture:** always walking somewhere fast, radio in hand. When she stops, she leans against a wall with her eyes
  closed for exactly three seconds.
- **Face:** oval, high cheekbones, strong jaw. Eyes dark brown `#3a2a1a`, tired, with heavy shadows. Dark brows
  `#2a1a10`. Broad nose. Full lips, a rare and enormous smile.
- **Hair:** short bleached buzz cut `#f2e6b8`.
- **Clothes:** hi-vis yellow vest over a black tee `#2a2a34`, charcoal work trousers `#2f3440`, black boots.
- **Accessories:** a two-way radio on her vest, a lanyard of keys, a small stud earring, a coffee cup, and a staff
  badge that says NOC.
- **Signature:** hi-vis yellow, the person keeping 4,000 people online.

## Tilly Marsh
*Designed the con badge. All four thousand, by hand.*

- **Height:** 158 cm (0.96). Age 38.
- **Body:** stocky and soft, medium to full bust, round shoulders, thick arms. Skin fair `#f6dccb`.
- **Posture:** sitting at a workbench, leaning in close to a circuit board, tongue between her teeth. Stands
  with her hands in her front pocket. Bounces when excited.
- **Face:** round, rosy cheeks, a soft double chin. Eyes warm brown `#7a5a3a`, crinkly. Pale green brows
  `#6a8a7a` matching her hair. Button nose. Wide smile.
- **Hair:** seafoam green `#9fe3c0`, two thick plaits.
- **Clothes:** light-blue denim dungarees `#6a8ab0` over a cream long-sleeved top `#f0e6d8`, white trainers.
- **Accessories:** soldering goggles pushed up on her head, a plaster on one finger, a soldering-iron burn or two,
  pliers in the bib pocket. Her own badge, heavily modified.
- **Signature:** dungarees, goggles, seafoam plaits.

## Petra Novak
*Car hacker. Loud. Rebuilt her dad's car from scrap.* Czech.

- **Height:** 172 cm (1.04). Age 28.
- **Body:** muscular, strong shoulders and arms, medium bust, thick waist, strong legs. Skin fair `#efd2bd`.
- **Posture:** takes up space: feet wide, thumbs hooked in her belt, a spanner in one hand. Big gestures, leans back
  when she laughs.
- **Face:** square, wide jaw, strong brows. Eyes slate blue `#5a6a8a`. Straight nose, slightly crooked from a break.
  Wide mouth. A smudge of grease on one cheek.
- **Hair:** black `#1a1418`, long, in a high ponytail.
- **Clothes:** slate-blue mechanic's coveralls `#3a4a5a`, top half unzipped and tied round her waist over a white
  vest. Black steel-toe boots.
- **Accessories:** grease smudges, a small hoop earring, a spanner, a CAN-bus tool hanging from her belt. Con badge.
- **Signature:** coveralls tied at the waist, grease and noise.

## Astrid Lund
*Listens to satellites. Would rather be in orbit.* Swedish.

- **Height:** 168 cm (1.02). Age 31.
- **Body:** slender and soft, medium bust, gentle shoulders. Skin very fair `#f8e4d8`.
- **Posture:** dreamy, head tilted back to the sky or down to a radio, headphones half on. Holds things carefully
  with both hands.
- **Face:** soft oval, small chin. Eyes pale blue `#6aa0c8`, kind, behind round gold-rimmed glasses. Light
  brows `#c8b48a`. Small nose. Soft smile.
- **Hair:** platinum blonde `#f1e6c8`, very long, in a single thick braid over one shoulder.
- **Clothes:** navy cardigan `#2a3a6a` embroidered with tiny gold stars, over a cream blouse `#e9e3da`; long brown
  skirt `#5a4a3a`, brown boots `#3a2a1a`.
- **Accessories:** round gold glasses, a handheld radio with a whip antenna, over-ear headphones, a laptop. Con
  badge.
- **Signature:** a night-sky cardigan full of stars.

## Yuki Tanabe
*Speedrunner. Glitch hunter. Fastest hands in the building.* Japanese.

- **Height:** 153 cm (0.93). Age 22.
- **Body:** small and slim, small bust, thin wiry arms and quick fingers. Skin fair `#f3d9c4`.
- **Posture:** coiled. Bouncing on her toes, fingers drumming, or leaning hard into an arcade cabinet. Never quite
  still.
- **Face:** small and sharp, pointed chin. Eyes very dark `#3a2a2a`, narrow and intense. Straight brows. Small nose.
  A confident grin, one canine showing.
- **Hair:** black `#14141c`, choppy layered shag to the jaw, an electric-blue streak `#3aa0ff`.
- **Clothes:** red varsity jacket `#c0283a` with white sleeves and a big letter on the chest, black tee, black
  shorts `#1a1a24`, black knee socks, white trainers.
- **Accessories:** big headphones round her neck, a wristband, a stopwatch. Con badge.
- **Signature:** red varsity jacket and a stopwatch.

## Vesper Lane
*Sings in the Lumen Lounge. Watches the room. Watches you.* (Spoiler: she is secretly Halberd.)

- **Height:** 175 cm (1.06), plus 7 cm heels. Age 32.
- **Body:** hourglass, full bust, defined waist, full hips, long legs. Skin warm fair `#efd0c0`.
- **Posture:** slow and deliberate, one hand on the microphone stand, hip shifted. Looks at people over her
  shoulder. Never in a hurry.
- **Face:** oval, high cheekbones, strong brows. Eyes amber brown `#6a4a2a`, heavy-lidded, smoky makeup. Straight
  nose. Full lips in deep red. A beauty mark under one eye.
- **Hair:** deep wine red `#7a1a22`, glossy old-Hollywood waves to the shoulders, swept to one side.
- **Clothes:** floor-length black velvet gown `#141018`, off the shoulder, a slit to the knee; black heels.
- **Accessories:** a string of pearls, red lipstick, long black gloves for performances. No badge.
- **Signature:** red lips, black velvet, pearls.

## Delphine Vos
*Lumen's VP of Communications. Writes Victor's words. Hates some of them.* Dutch.

- **Height:** 173 cm (1.05), plus 5 cm heels. Age 38.
- **Body:** slim and poised, medium bust, long neck, defined calves. Skin fair `#f2dccd`.
- **Posture:** perfect posture, chin level, a tablet held to her chest. Smiles with her mouth for cameras and with
  her eyes only in private.
- **Face:** long, elegant, defined jaw. Eyes grey-blue `#7a8a9a`, cool. Groomed brows `#b89a6a`. Straight, narrow nose.
  Lips in a muted nude-rose.
- **Hair:** honey blonde `#e8d29a`, smooth low chignon, not a hair out of place.
- **Clothes:** navy tailored blazer `#1f2a44` and a matching pencil skirt, a cream silk blouse `#e9dcd0`, black
  pumps.
- **Accessories:** small diamond studs, a slim watch, a tablet, a Lumen staff pass on a navy lanyard.
- **Signature:** corporate polish with a crack in it.

## Noor Haddad
*Digital rights lawyer. Lost to Lumen once. Wants a rematch.* Lebanese-British.

- **Height:** 165 cm (1.00). Age 33.
- **Body:** average, medium bust, upright. Skin warm olive brown `#c9946e`.
- **Posture:** composed, both hands on a folder or a coffee cup. Listens without interrupting, then says one
  devastating sentence.
- **Face:** oval, soft jaw, strong cheekbones. Eyes dark brown `#4a3020`, behind rectangular glasses. Full
  defined brows. Straight nose. Calm mouth.
- **Hair:** covered by a deep green hijab `#1d4a3a`, neatly pinned.
- **Clothes:** brown blazer `#6a4a3a` over a cream top, long charcoal skirt `#2a2a34`, brown loafers `#2a1a14`.
- **Accessories:** rectangular glasses, a thick case folder, a fountain pen, a speaker's lanyard.
- **Signature:** the green hijab and the folder.

## Fern Albright
*The hotel gardener. Keeps bees on the roof. Notices everything.*

- **Height:** 167 cm (1.01). Age 35.
- **Body:** sturdy and outdoorsy, medium bust, strong hands and forearms, broad hips. Skin sun-tanned `#efcfb4`.
- **Posture:** kneeling by a flowerbed, or standing with a trowel and her weight on her back foot. Unhurried.
  Looks at plants more than people.
- **Face:** round, sun-weathered, freckled. Eyes green `#5a7a3a`, gentle. Soft brows. Rounded nose. An easy smile.
- **Hair:** brown `#6a4a2a`, loose and long, a bit wild, under a straw sun hat.
- **Clothes:** cream gardening shirt `#e9e0c8`, sleeves rolled; olive work trousers `#6a7a4a` with knee patches;
  brown wellies or boots `#4a3a2a`.
- **Accessories:** wide straw sun hat, gardening gloves in her back pocket, dirt on her knees and hands, a bee
  sometimes on her shoulder. Staff, so no badge.
- **Signature:** sun hat and soil.

## Wren Calloway
*Lifeguard. True-crime podcaster. Wants a real case.*

- **Height:** 170 cm (1.03). Age 25.
- **Body:** swimmer's build: broad shoulders, long torso, toned arms, small to medium bust, narrow hips. Skin
  sun-kissed `#e8bf9a`.
- **Posture:** on the high chair by the pool, elbows on knees; or leaning in to someone with her phone recording.
  Eager.
- **Face:** wide and open, a strong chin. Eyes blue `#3a6a8a`, bright. Sun-bleached brows `#9a7a4a`. Freckles.
  A big, slightly goofy grin.
- **Hair:** sun-bleached blonde `#d8b878`, short and wavy, often damp.
- **Clothes:** red lifeguard hoodie `#d0302a` with a white cross, navy shorts `#1a2a4a`, white sliders.
- **Accessories:** whistle on a cord, a phone in a waterproof case, a podcast mic. Hotel staff, so no badge.
- **Signature:** lifeguard red and a whistle.

## Pia Reyes
*Busks at Central Station. Looking for her brother (Jonah).* Filipino-British.

- **Height:** 162 cm (0.98). Age 23.
- **Body:** slim, small bust, long fingers. Skin warm brown `#d9a888`.
- **Posture:** a violinist's posture: left shoulder slightly raised, chin turned. When she isn't playing, she
  hugs her violin case.
- **Face:** soft oval. Eyes dark brown `#5a3a24`, large, a little sad. Soft brows. Small rounded nose. A careful
  smile that doesn't reach her eyes until late in her route.
- **Hair:** dark brown `#2a1a14`, curly, shoulder-length, under a knitted beanie.
- **Clothes:** grey-green wool coat `#4a5a4a`, charcoal jeans `#2a2a34`, brown boots `#3a2a1a`.
- **Accessories:** knitted beanie, a long scarf, a violin and an open case with coins in it, a photo of her brother
  in her coat pocket.
- **Signature:** the violin and the scarf.

---

# Side characters

## Pam (Pamela)
*Builds open-source privacy tools; doxxed through SafeSphere.*

- **Height:** 160 cm (0.97). Age 54.
- **Body:** soft and comfortable, full bust, rounded shoulders. Skin fair `#e9c3a6`.
- **Posture:** sitting very upright with a laptop, both feet on the floor. Composed until she isn't.
- **Face:** round, gentle lines round the eyes. Eyes green-grey `#4a5a3a`, behind round glasses. Grey brows.
- **Hair:** grey `#5a5a5a`, neat chin-length bob.
- **Clothes:** sage cardigan `#5a6a4a` over a cream blouse, charcoal trousers, brown flat shoes.
- **Accessories:** round glasses, small earrings, a laptop covered in privacy stickers. Con badge.

## Silas Krall
*Lumen "Trust & Safety". Ex-intelligence. Runs the copycat.*

- **Height:** 185 cm (1.12). Age 46.
- **Body:** heavy-set, broad chest, thick neck, big hands.
- **Posture:** completely still, hands clasped in front, in doorways. Fills the frame.
- **Face:** square, heavy brow, flat expression. Eyes grey-blue `#5a6a7a`, small, cold. A scar through one
  eyebrow. Stubble. Skin `#e6c4a8`.
- **Hair:** grey `#6a6a70`, short buzz cut.
- **Clothes:** black suit `#1a1c22`, white shirt, dark red tie, black shoes.
- **Accessories:** earpiece, a Lumen staff pass.

## Graham Pike
*Bastion CEO.*

- **Height:** 178 cm (1.08). Age 52.
- **Body:** thin, narrow chest, slightly stooped.
- **Posture:** leaning forward, hands in pockets, nodding too much.
- **Face:** long and lined. Eyes green-grey `#4a5a4a` behind wire glasses. Skin `#efc8a8`.
- **Hair:** grey-brown `#8a8070`, slicked back.
- **Clothes:** khaki-olive suit `#4a4a3a` that doesn't quite fit, white shirt, tie.
- **Accessories:** wire glasses, a Bastion lanyard.

## Owen Pryce
*Con deputy chair.* (Spoiler: the mole.)

- **Height:** 175 cm (1.06). Age 44.
- **Body:** average, soft around the middle.
- **Posture:** always hurrying, clipboard held to his chest, talking over his shoulder.
- **Face:** round, a friendly face that is a little too friendly. Eyes green `#4a5a3a` behind square glasses.
  Trimmed brown beard. Skin `#efcfb4`.
- **Hair:** brown `#7a5a3a`, short and tidy.
- **Clothes:** brown cardigan `#6a5a4a` over a cream shirt, grey trousers, brown shoes.
- **Accessories:** a staff lanyard with a STAFF badge, a clipboard, a walkie-talkie.

## Mr Ashgrove
*Halberd.*

- **Height:** 182 cm (1.10). Age 64.
- **Body:** tall and lean, narrow shoulders, very straight-backed.
- **Posture:** still and upright, both hands resting on a cane.
- **Face:** long and gaunt, deep lines. Eyes pale grey-blue `#8a9aa8`. Skin `#ecd0bc`.
- **Hair:** white `#d8dce4`, slicked back.
- **Clothes:** charcoal three-piece suit `#2a2a2e`, silver tie.
- **Accessories:** a cane with a silver top, a pocket watch.

## Jonah Reyes
*The missing researcher, Pia's brother.*

- **Height:** 178 cm (1.08). Age 28.
- **Body:** lanky, narrow shoulders, long arms.
- **Posture:** hunched over, hood up, hands in pockets. Looks over his shoulder.
- **Face:** long, tired. Eyes dark brown `#4a3020`, the same shape as Pia's. Scruffy beard. Skin warm brown `#c99878`.
- **Hair:** dark brown `#2a1a14`, curly, overgrown.
- **Clothes:** olive hoodie `#4a4a3a`, dark jeans, worn trainers.
- **Accessories:** a backpack, an old laptop.

## Dave
*Lumen's intern. "Ten million downloads." Redeemed later.*

- **Height:** 180 cm (1.09). Age 29.
- **Body:** gym build, broad chest, big arms, skinny legs.
- **Posture:** chest out, finger guns, leaning on things.
- **Face:** wide grin, square jaw. Eyes green `#5a6a3a`. Skin `#f0c8a8`.
- **Hair:** brown `#8a5a2b`, short with a quiff.
- **Clothes:** green hoodie `#3a7d44`, khaki shorts `#c9a46a`, white trainers.
- **Accessories:** Day 1, sunglasses on indoors and a stress ball with a QR code; Day 2 on, no shades. Con badge.

## Victor Hale
*Lumen CEO.*

- **Height:** 187 cm (1.13). Age 52.
- **Body:** tall, broad-shouldered, trim from expensive personal training.
- **Posture:** relaxed authority: one hand in his pocket, the other gesturing palm-up, as if on stage.
- **Face:** handsome, square jaw, a camera-ready smile that never reaches his eyes. Eyes dark blue-grey `#3a4a5a`.
  Silver stubble. Skin `#e8c7ad`.
- **Hair:** silver `#9aa0aa`, slicked back.
- **Clothes:** dark navy suit `#2c3140`, white shirt, silver tie, polished black shoes.
- **Accessories:** a slim watch, a Lumen pin on his lapel.

## Linda
*Your boss at Brindle & Co.*

- **Height:** 167 cm (1.01). Age 54.
- **Body:** neat and average, medium bust.
- **Posture:** arms folded, one eyebrow raised. Brisk.
- **Face:** oval, sharp, practical. Eyes blue-grey `#3a4a5a` behind rectangular glasses. Skin `#e8c7ad`.
- **Hair:** dark brown `#5a3a2a`, neat bob.
- **Clothes:** blue blazer `#4a5a7a`, white blouse, grey trousers, low heels.
- **Accessories:** glasses on a chain, an office lanyard, a mug.

## Gary
*Your co-worker.*

- **Height:** 172 cm (1.04). Age 34.
- **Body:** average with a slight paunch.
- **Posture:** leaning on your desk, mug in hand.
- **Face:** round, freckled, a cheerful know-nothing smile. Eyes green `#4a6a3a`. Skin `#f0c8a8`.
- **Hair:** ginger `#c2532b`, short.
- **Clothes:** olive T-shirt `#6a7a5a`, jeans, trainers.
- **Accessories:** a "World's Okayest Employee" mug.

## Marge
*The con chair. Twenty years of this con.*

- **Height:** 157 cm (0.95). Age 63.
- **Body:** small and round, full bust.
- **Posture:** hands on her hips or holding a megaphone. Small but in charge.
- **Face:** round, warm, laugh lines. Eyes dark brown `#4a3a2a` behind round glasses. Skin warm brown `#c98f6e`.
- **Hair:** grey-white `#d4d4d4`, in a bun.
- **Clothes:** purple con-staff hoodie `#6b4f8a`, long dark-purple skirt `#4a3a5a`, comfortable shoes.
- **Accessories:** round glasses, small earrings, a lanyard covered in twenty years of badge ribbons.

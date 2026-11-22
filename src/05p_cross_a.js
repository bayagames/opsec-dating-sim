/* ============ CROSSOVERS (1/2): each route's fifth scene (index 4) brings in someone else from the cast ============
   Every one has a version for when you haven't met the other person. Several set flags the main plot reads. */
/* clues the crossovers turn up */
Object.assign(CLUE,{
 barwatch:{s:'The man at the end of the bar',t:'A grey-suited Lumen man sits at the end of the Hotel Bar every night, writing down who walks past. He never tips.',m:['m3']},
 beaconroute:{s:'Red team, blue team',t:'Nyx and Priya agree: the beacon flood is a red-team tool hidden inside a blue-team building.',m:['m5']},
 firmwareskip:{s:'The frame skip',t:'Ada and Yuki: the badge firmware updates in a loop. Hit it at the wrong moment and it skips the bad update.',m:['m5']},
 lanternbox:{s:'LANTERN-01',t:'The beacon flood all goes to one box in the MDF closet, with no asset tag and a label: LANTERN-01.',m:['m4','m5']},
 rinsource:{s:'Rin\'s source',t:'Three years ago someone sent Rin SafeSphere\'s internal documents anonymously. It was Mira.',m:['m2']},
 vespertell:{s:'The singer who watches the door',t:'Vesper never drinks what she orders. She watches the room like a bartender, or a spy.',m:['m11']},
 laundrychute:{s:'The way off the roof',t:'Fern knows an old laundry chute from the roof to the basement, big enough for a person.',m:['m2']},
 delphinetalks:{s:'Tuesday',t:'Delphine to Saoirse: the apology for WH1SPER\'s "attacks" was written on Tuesday, before the attacks.',m:['m3']},
 badgepatch:{s:'The patch',t:'Someone patched the badges\' key list last month, after Tilly shipped them, while Owen had them "for QA".',m:['m5','m6']},
 trolleytimes:{s:'The trolley with no towels',t:'Every night at 3:15 a "housekeeping" trolley carries a grey case up to Suite 1313.',m:['m3']},
 buyerinside:{s:'The buyer\'s in the building',t:'Vesper reports to Halberd: Corvid Holdings on paper, a man called Ashgrove.',m:['m8','m11']},
 recoveryscam:{s:'Three thousand bakeries',t:'Lumen Growth Partners stole small business accounts and sold the owners the "recovery". Delphine has the documents.',m:['m1']},
 lantern02:{s:'LANTERN-02',t:'There\'s a second box. In Suite 1313. Delivered every night by a trolley with no towels.',m:['m4','m8']}});
for(const[c,o]of Object.entries(CLUE))for(const m of o.m)if(MYST[m]&&!MYST[m].ev.includes(c)&&['barwatch','beaconroute','firmwareskip','lanternbox','rinsource','vespertell','laundrychute','delphinetalks','badgepatch','trolleytimes','buyerinside','recoveryscam','lantern02'].includes(c))MYST[m].ev.push(c);
SC.ellie_x=`
[bg bar]
~ The Hotel Bar, mid-afternoon, nearly empty. Ellie's on a stool with her elbows on the counter and a notebook open, and she's talking to the bartender like they've known each other for years.
if met('bea')
 bea.h: ...no, you fold the zest INTO the syrup. Not on top. On top is for people who want a photo.
 ellie.h: Oh, that's clever. That's so clever. Can I put that in a bun? I'm putting that in a bun.
 ~ They've swapped notebooks. Bea's is full of cocktails drawn as little diagrams. Ellie's is full of laminated-dough cross-sections. They both look up when you sit down, guiltily, like you've caught them doing something.
 bea.s: Your baker's a menace. She's been here an hour and she's improved my old fashioned.
 ellie.b: I added cardamom! Just a tiny bit! I'm so sorry!
 ? "You two are going to open a place together, aren't you."
  bea.d: ...Don't say it out loud. I'll start planning it. I've got a whole notebook for things I don't do.
  ellie.n: A bakery that's a bar at night. Bread in the morning, cocktails at six. "Proof". It's already got the name.
  [fx ellie:6 bea:6]
 ? "Make me whatever you both think I'd like."
  ~ They argue about it for five minutes, in whispers, like it's a heist. What arrives is warm, cinnamon-sweet, and has a tiny croissant drawn on the napkin in Bea's biro.
  [fx ellie:6 bea:5]
 bea.n: She told me what Lumen did to her shop. The account. The "recovery" fee. I've seen their people in here every night this week. Same table. Same drink. They never tip.
 bea.a: There's one of them who drinks alone at the end. Grey suit. Writes things down when people walk past. I thought you'd want to know.
 [clue barwatch]
 [flag ellie_bea]
else
 ~ The bartender slides Ellie a glass of something orange with a cinnamon stick in it. "On the house. You look like you need it." Ellie looks like she's about to cry about it.
 ellie.n: Everyone here is so nice. Even the people who scare me. Especially them, actually. They're scary because they care so much.
 [fx ellie:5]
ellie.d: Can I tell you something? At home, I'm the one who knows what to do. Every morning. Dough, oven, customers. Here I don't know anything. And it's... nice? Not knowing. With you.
? "You know more than you think. You saw through the Lumen 'recovery' email before I did."
 ellie.b: ...I did, didn't I. I read it twice and it felt wrong. Like a bad loaf. You can't say why, you just know.
 [fx ellie:5 skill:1]
? "I like not knowing things with you too."
 ellie.h: Good. Then we'll be stupid together. It's the best way to be stupid.
 [fx ellie:6]
`;
SC.nyx_x=`
[bg soc]
~ The Blue Team Village, 1 AM. Every screen off but one. Nyx is crouched by the equipment cage with a tension wrench in her teeth.
nyx.n: Relax. It's a game. Red team versus blue team. I get into the cage before she notices, I win.
if met('priya')
 priya.a: She noticed. She noticed eleven minutes ago. I've been watching her on the thermal camera I set up for exactly this.
 ~ Priya steps out from behind a server rack holding a mug that says WORLD'S OKAYEST SYSADMIN. Nyx doesn't even flinch.
 nyx.s: Raman.
 priya.n: Nyx. You picked the cage lock on day one last year too. I changed it. You still got in.
 nyx.h: You changed it to a better one. Thank you. I enjoyed that.
 * They've done this before. Every year. Like fencing.
 ? "Who's winning?"
  priya.s: Overall? Seven to six. Her.
  nyx.d: Six to seven. She counts the time I got caught in the ceiling. I wasn't caught. I was resting.
  [fx nyx:5 priya:5]
 ? "Show me how you'd stop her."
  ~ Priya does. Door sensors. A canary file. A webcam that only records when the room's empty. Nyx watches with the expression of an artist looking at another artist's work.
  [fx priya:6 nyx:4 skill:3]
 priya.n: Here's the thing. The badges. The beacon flood. Someone's built a thing that listens to everyone at once. That's a red-team tool, inside a blue-team building.
 nyx.n: Which means you need a red teamer to find where it lives, and a blue teamer to prove it's there.
 priya.d: ...Are we really going to work together.
 nyx.s: One time. Don't tell anyone.
 [flag redblue]
 [clue beaconroute]
else
 ~ The cage door swings open. Nyx steps back to let you go first, like a gentleman. Inside: forty spare badges, a box of cables and a sticky note in someone's neat handwriting: "NICE TRY, NYX. -P."
 nyx.h: She's good. I like her. I'll never tell her that.
 [fx nyx:5]
nyx.n: This is why I do it. Not the locks. The other person on the other side, trying as hard as you are. It's the only honest conversation I ever get.
? "Is that what this is? An honest conversation?"
 nyx.o: ...Yes. You picked me. I didn't see it coming. That never happens.
 [fx nyx:6]
? "You're terrible at admitting you have friends."
 nyx.d: I have colleagues. And rivals. And you. You're a category of one.
 [fx nyx:5]
`;
SC.ada_x=`
[bg arcade]
~ The Retro Arcade. A small crowd round the racing cabinet, and in the middle of it, Ada, sleeves pushed up, glaring at a leaderboard.
if met('yuki')
 yuki.h: Ninety seconds! That's the record! Mine! You can't beat it with maths, CTF girl!
 ada.a: I can beat ANYTHING with maths. Watch me.
 ~ Ada pulls out a notebook and starts writing down the track's frame timings. Yuki starts writing down Ada's frame timings. Nobody is racing. Everyone is writing.
 ? "Race each other. Best of three. I'll referee."
  ~ Ada wins the first by reading the game's physics like a puzzle. Yuki wins the second by doing something with the wall that should not be possible. The third ends in a draw so exact the cabinet prints two scores.
  ada.h: That's not a draw. That's a bug. Which means we both found it. Which means we're...
  yuki.s: ...a team. Oh no. Oh, I hate that. I love that.
  [fx ada:6 yuki:5]
 ? "Ada, what's your plan?"
  ada.n: Yuki's routes skip parts of the game. CTFs are the same: you don't do the challenge, you find where the challenge is badly built. We're the same person. That's why she's so annoying.
  yuki.h: You're the annoying one!
  [fx ada:5 yuki:4 skill:2]
 ada.n: Yuki. The badge firmware. It updates in a loop. If you hit it with an update at exactly the wrong moment...
 yuki.o: ...it'd skip the bad update. Like a frame skip. Oh my god. That's a speedrun of the firmware.
 [flag ada_yuki]
 [clue firmwareskip]
else
 ~ Ada plays the racing game alone. She loses. She plays again. She loses. She gets out a notebook. On the fourth go she wins by six seconds and turns round with her arms up and nobody's watching but you.
 ada.b: You saw that. You're a witness.
 [fx ada:5]
ada.n: I never had friends who liked the same thing as me. I had people who were better than me, and people who were worse, and I counted which. This week I stopped counting.
? "What changed?"
 ada.o: You did. You don't keep score. It's contagious.
 [fx ada:6]
? "You're still counting. You said six seconds."
 ada.h: Okay, I'm counting a LITTLE.
 [fx ada:4]
`;
SC.priya_x=`
[bg noc]
~ The NOC, after midnight. Priya's on Sunny's spare chair, not touching anything, which for Priya is a form of meditation.
if met('sunny')
 sunny.n: She taught me. Did she tell you? Six years ago, at a different con. I was a volunteer who couldn't crimp a cable. Priya made me crimp four hundred.
 priya.s: Four hundred and twelve. And then she built a network for four thousand people. I'm very proud. I will never say it again.
 ~ Between them, on the big screen, the beacon flood: a heat map of the con, every badge chattering to every other badge, pulsing like a heart.
 sunny.a: Here's what I can't show anyone. The flood all goes to one address. Not out. In. Somewhere in this building there's a box eating all of it.
 priya.n: And we can't pull the plug because Owen signed for the "sponsor firmware" and we'd be breaking a contract.
 ? "Then don't pull the plug. Follow the cable."
  ~ They look at each other. Then at you. Then Sunny takes a torch off the wall.
  ~ Forty minutes in the ceiling void. Priya reading the labels, Sunny reading the switch lights. The cable goes to the MDF closet. To a box with no asset tag.
  priya.a: LANTERN-01. That's what the label says. Who labels their spy box?
  sunny.d: Someone who thinks nobody will ever look.
  [clue lanternbox]
  [flag flood_traced]
  [fx priya:6 sunny:6 skill:3]
 ? "Log everything. Every hour. A diary of the flood."
  priya.h: A timeline. You want a timeline. Oh, you're speaking my language.
  [flag flood_log]
  [fx priya:6 sunny:4]
else
 ~ The NOC lead's asleep in her chair with a radio on her chest. Priya puts a blanket on her without waking her, and logs the beacon flood herself, quietly, line by line.
 priya.n: Nobody looks after the people who look after everything. So I do it. Badly. With blankets.
 [fx priya:5]
priya.d: Can I say something weird? I don't usually let people sit in rooms with me while I work. You just... sit. You don't touch anything.
? "I'm scared to touch anything."
 priya.h: Correct. Healthy. Good instinct. Marry me. That was a joke.
 [fx priya:5]
? "I like watching you work."
 priya.o: ...That's the nicest thing anyone's said to me in a server room.
 [fx priya:6]
`;
SC.juno_x=`
[bg creator]
~ Creator Corner. Juno's stream is live: 12,000 people. And then the chat explodes, because someone has just walked into the back of the shot in full armour.
if met('kit')
 kit.n: ...Hi. Sorry. I didn't know you were live.
 juno.a: You always know when I'm live. You used to run my schedule.
 * Oh. OH.
 ~ The chat has worked it out faster than you: "IS THAT KIT", "THE EX", "THEY'RE IN THE SAME ROOM", "OH MY GOD".
 juno.d: We did the stream together for two years. Then we didn't. That's all anyone needs to know. Chat, that's all YOU need to know.
 kit.d: I made you the helmet. The one you wear for your intro. You still wear it.
 juno.n: ...It's a good helmet.
 ? Turn the camera off
  ~ You reach over and flip the lens cap down. Twelve thousand people see a black screen. In the quiet, Juno and Kit look at each other like people who've been shouting across a canyon for a year.
  kit.b: Thanks. I didn't want that to be content.
  juno.o: Neither did I. That's the first time I've ever not wanted something to be content.
  [fx juno:6 kit:6]
  [flag juno_kit]
 ? "You two should talk. Properly. Without chat."
  juno.s: Bossy. I like it. Fine. After the stream. Kit, don't leave.
  kit.n: I'm not leaving. I came to find you.
  [fx juno:4 kit:5]
  [flag juno_kit]
 kit.n: Juno. The badges. You've got twelve thousand people watching you. If you said the badges were spying on them...
 juno.a: ...they'd believe me. More than any journalist. That's the scary part.
 [flag juno_audience]
else
 ~ Juno sees you and turns the camera to you without asking. Twelve thousand people say hi. You wave like a hostage.
 juno.h: Chat, this is the cryptid. Say hi to the cryptid. ...Okay, they're shy. Camera off. Sorry. Couldn't resist.
 [fx juno:4]
juno.n: You know what I'm scared of? That I'm only interesting with an audience. That when the light goes off there's nothing there.
? "I like you best when the light's off."
 juno.o: ...You can't just say things like that. That's a clip. I'd clip that.
 [fx juno:6]
? "There's a lot there. I've seen it."
 juno.b: Name one thing.
 > You buy every volunteer a coffee and never put it on stream.
 juno.d: ...How do you know about that.
 [fx juno:6]
`;
SC.kit_x=`
[bg badgelab]
~ The Badge Lab. Kit's helmet is on the bench in pieces, and Tilly is soldering something into the visor with her tongue between her teeth.
if met('tilly')
 tilly.h: A heads-up display! In a cosplay helmet! With a real camera! Kit, this is the best thing anyone's ever asked me to build.
 kit.b: Can it record? Everything I look at? Without anyone knowing?
 tilly.o: ...That's a very specific question.
 kit.n: I walk past the Lumen booth eight times a day in full armour. Nobody looks at a cosplayer twice. They talk about everything in front of me.
 ~ Silence. Then Tilly grins, very slowly.
 tilly.s: Give me an hour. And don't tell Sunny.
 ? Help Tilly with the wiring
  [game pipe n=1 only=4 title="Wire the visor camera"]
  ~ It works. The visor shows a tiny green REC in the corner. Kit puts the helmet on and looks at you through it, and the camera sees you, and Kit doesn't say anything at all for a while.
  [flag kit_cam]
  [fx kit:6 tilly:5 skill:2]
 ? "Is this legal?"
  tilly.n: In a public space? Probably. Morally? Lumen's put spyware in four thousand badges. I think we're allowed a helmet.
  [flag kit_cam]
  [fx kit:4 tilly:4]
else
 ~ Kit's fixing the helmet alone, with a magnifier and a lot of swearing. You hold the torch. She lets you, which is a big deal for Kit.
 kit.n: I keep thinking about putting a camera in it. Walking past Lumen's booth all day. Nobody looks at a cosplayer.
 [fx kit:5]
kit.d: Do you ever feel like you only exist in costume? Like the real you is the boring one underneath?
? "The real you made the costume."
 kit.o: ...Huh. Yeah. She did, didn't she.
 [fx kit:6]
? "I like the boring one underneath."
 kit.b: She's terrible at small talk.
 > So am I.
 kit.h: Perfect. We'll stand in silence. Together.
 [fx kit:5]
`;
SC.rin_x=`
[bg roof]
~ The hotel roof, late. Rin's sitting on the air-con unit Mira always sits on, which is how you know he came looking for her.
if met('mira')
 ~ Mira's at the rail. She doesn't turn round.
 mira.n: You've been following me all week, Takahashi.
 rin.d: You've been following me for three years. Every report I've written. Somebody reads them within an hour of me posting them. From a different country every time.
 rin.n: Three years ago, someone sent me SafeSphere's internal documentation. Anonymously. It's the only reason I knew where to look. It's the reason my report exists. It's the reason I lost my job.
 mira.o: ...
 rin.a: It was you. Wasn't it. You were my source.
 * The whole week reorganises itself in your head.
 mira.d: I sent it to the one person I thought was brave enough. And then I watched them destroy you for it, and I didn't help. I couldn't. I was hiding.
 ? "You two have been on the same side this whole time."
  rin.n: On the same side, alone, for three years. That's a stupid way to be on a side.
  mira.s: Yes. It is.
  [fx rin:6 mira:6]
 ? Say nothing. Let them have this.
  ~ You step back. They stand at the rail for a long time, a metre apart. Then Rin offers her a gummy worm. She takes it.
  [fx rin:5 mira:6]
 rin.h: I'm not angry. I was. For about a year. Then I realised the report was right, and you were right to send it, and the people who were wrong were everyone else.
 mira.n: If you stand on that stage on Sunday, they'll say you're working with WHISPER.
 rin.s: Then I'll say I am.
 [flag mira_source]
 [clue rinsource]
else
 rin.n: I'm looking for someone. My source from three years ago. I think they're here. I think they're on this roof most nights. I just want to say thank you. And maybe shout a bit.
 [fx rin:5]
rin.d: Do you ever think the bravest thing you did was an accident? I didn't decide to be brave. I just posted a report and then everything happened to me.
? "Staying brave after was the decision."
 rin.o: ...Oh. Okay. I'm going to think about that for a week.
 [fx rin:6]
? "You're braver than you think."
 rin.b: You keep saying that. I keep almost believing it.
 [fx rin:5]
`;
SC.bea_x=`
[bg lumenlounge]
~ The Lumen Lounge, before the evening set. Bea's delivering a crate of wine, which is not her job, which is how you know she's here on purpose.
if met('vesper')
 ~ Vesper's at the piano, warming up. She sees Bea and the warm-up stops halfway through a scale.
 bea.n: You sit at the end of my bar every night after your set. You never drink what you order. You watch the door.
 vesper.s: I'm a singer, darling. We like to know where the exit is.
 bea.a: I've been behind that bar six years. I've watched everyone. Spies, cheats, affairs. You watch the room like I do. Except I get paid for it in tips.
 ~ Vesper stops smiling. It's the first time you've seen her not perform.
 vesper.d: ...Who are you going to tell?
 ? "Bea's not going to tell anyone. She's telling you she knows."
  bea.s: Exactly. Whatever you're doing, do it somewhere else. Not to them. Not to my regulars.
  vesper.n: Your regulars are the safest people in this building. You have my word. For what it's worth.
  [fx bea:6 vesper:4]
  [flag vesper_warned]
 ? "Who ARE you, Vesper?"
  vesper.o: Someone who's very good at a job she doesn't want any more. Ask me again on Saturday.
  [fx vesper:5 bea:3]
  [flag vesper_suspect]
 bea.n: (to you, on the way out) Be careful with her. Not because she's bad. Because she's not sure yet which side she's on, and that's the most dangerous kind.
 [clue vespertell]
else
 ~ Bea unloads the wine, then sits on the edge of the stage with her sketchbook and draws the empty room. The piano. The chairs. A single glass on the end of the bar.
 bea.n: Somebody sits there every night after the set. Never drinks. Watches the door. I've been drawing her all week.
 [flag vesper_suspect]
 [fx bea:5]
bea.d: I draw people because it makes me look properly. If I just glance, I miss things. Most people only glance at each other.
? "Draw me properly, then."
 bea.h: I already have. Twenty times. Don't ask to see them.
 [fx bea:6]
? "You don't glance at anything."
 bea.o: ...No. Especially not you.
 [fx bea:6]
`;
SC.mira_x=`
[bg garden]
~ The Halcyon Garden, just after dawn. Mira's on the bench by the olive tree, which is new, and she's eating something, which is newer.
if met('fern')
 fern.n: Toast. With honey. From the roof hives. She's been eating it every morning for three weeks. She just never let me see her eat it before.
 mira.d: I thought she didn't know I was there.
 fern.h: You climbed down my maintenance ladder at two in the morning on the second night. You stepped on my basil. I put a plate on the air-con unit the next day. You took it.
 mira.o: ...I thought it was the hotel. Room service for nobody.
 fern.n: It was me. Nobody sees the gardener. I see everyone.
 * Fern has been feeding WHISPER for three weeks and never told a soul.
 ? "Why didn't you tell anyone?"
  fern.n: Because she was hungry, and frightened, and hiding. And that's not anyone's business but the bees'.
  [fx fern:6 mira:6]
 ? "Mira, say thank you."
  mira.s: ...Thank you. That's... thank you. I don't say that. I'm saying it.
  fern.b: You're welcome. Don't step on the basil.
  [fx mira:5 fern:5]
 fern.n: If she ever needs to leave the roof without the fire stairs, there's a way. The old laundry chute to the basement. Big enough for a person, if she's brave.
 mira.a: ...I'm brave.
 [flag fern_mira]
 [clue laundrychute]
else
 ~ A plate on the bench beside her. Toast with honey, a sprig of rosemary on top, arranged carefully. Mira doesn't know who leaves it. She eats it anyway.
 mira.n: Every morning. Somebody in this hotel feeds me. I've never seen them. It's the kindest thing that's happened to me in three years.
 [fx mira:5]
mira.d: I used to think people were the problem. Data's just people, written down. If you want to stop the data, you have to stop trusting people.
? "And now?"
 mira.o: Now someone feeds me toast, and you come up here and don't ask me for anything. It's ruining my whole philosophy.
 [fx mira:6]
? "You trust me."
 mira.s: Don't push it.
 > You trust me a little.
 mira.b: ...A little.
 [fx mira:5]
`;
SC.saoirse_x=`
[bg library]
~ The hotel library, closed for the night, one lamp on. Saoirse has asked you to "be in the room". She hasn't said for what.
if met('delphine')
 ~ Delphine Vos walks in, exactly on time, in a coat she hasn't taken off. Two women who have spent six years on opposite ends of every Lumen story sit down at the same table.
 saoirse.n: You've hung up on me thirty-one times.
 delphine.n: Thirty-four. You stopped counting the ones at night.
 saoirse.a: Why are you here?
 delphine.d: Because they want you to know I'm here. That's what this is, isn't it? You want me on the record.
 ? "No record. Just talk. I'll make sure nobody's listening."
  ~ You put both their phones in the drawer of an old writing desk. Then the desk in the corridor. Then you sit by the door.
  ~ It takes an hour. At first they fence. Then Delphine says "Tuesday", and Saoirse's pen stops, and she says "the apology was written on Tuesday", and Saoirse stops writing altogether and just listens.
  [fx saoirse:5 delphine:6]
  [flag delphine_on_record]
 ? "Saoirse. Promise her she's protected."
  saoirse.n: You're protected. I've gone to court for sources. I'll go to prison for them. I'm not exaggerating. Ask the Ledger's lawyers, they hate it.
  delphine.o: ...I believe you. That's very inconvenient.
  [fx saoirse:5 delphine:5]
  [flag delphine_on_record]
 saoirse.n: (afterwards, very quietly) Six years. I've written about her as a villain for six years. She was in that building, writing the lies, hating every word.
 [clue delphinetalks]
else
 ~ Nobody comes. At eleven, Saoirse puts her pen down.
 saoirse.d: My source bottled it. Somebody inside Lumen. She's been on the edge for months. She'll come. When she's ready. They always do. Or they don't, and they live with it.
 [fx saoirse:5]
saoirse.n: You know what the job is? It's waiting. Ninety-nine per cent waiting. In libraries. With people who might not come.
? "I'll wait with you."
 saoirse.o: ...That's not a thing people say to journalists.
 [fx saoirse:6]
? "Is that why you're alone so much?"
 saoirse.d: Ouch. Yes. Fair. Ouch.
 [fx saoirse:4]
`;
SC.sunny_x=`
[bg noc]
~ The NOC, 3 AM. Sunny and Tilly are side by side at the big desk, both in hoodies, both with cold tea, a badge wired to a laptop between them.
if met('tilly')
 tilly.n: If we roll every badge back to my firmware at once, the beacon flood stops. Instantly. All four thousand.
 sunny.a: And the network has to survive four thousand devices rebooting in the same second. Which it won't. Unless I stagger them.
 tilly.h: Can you stagger them?
 sunny.s: Can I stagger them. Tilly. I can stagger anything. I staggered the 2019 Wi-Fi outage so politely nobody noticed.
 ? "Test it. One badge."
  ~ One badge. Mine. Sunny counts down. Tilly hits enter. Your badge blinks blue, then dark, then rainbow round the edge.
  tilly.b: Mine. My firmware. On a real badge. In the wild.
  sunny.n: One down. Three thousand nine hundred and ninety-nine to go. All we need is a reason and a ten-second window.
  [flag rollback_ready]
  [fx sunny:6 tilly:6 skill:3]
 ? "What happens if Owen finds out?"
  sunny.d: We get fired. Tilly gets sued. Owen gets a bonus.
  tilly.a: So we don't get found out. I'm very good at not being found out. I hid notes on the backs of badges for nine years.
  [flag rollback_ready]
  [fx sunny:5 tilly:5]
 ~ At four, Tilly falls asleep on the keyboard and types "kkkkkkkkkk" into a terminal. Sunny saves it as a file called "tilly_was_here" and doesn't wake her.
else
 ~ Sunny alone, a badge on a breadboard, the network map in amber and green. She's trying to make the badges reboot without killing her network. It keeps not working.
 sunny.d: I need the person who wrote the firmware. Tilly. Badge Lab. I keep meaning to go and talk to her. There's never time.
 [fx sunny:5]
sunny.n: I don't know how to do things for myself. I only know how to keep things running for other people.
? "Then let me keep something running for you."
 sunny.o: ...Like what?
 > Coffee. Hourly. Until Sunday.
 sunny.h: That's the most romantic thing anyone's ever offered a NOC lead.
 [fx sunny:6]
? "Go to sleep. I'll wake you if it breaks."
 sunny.b: You'd do that? You'd watch the map?
 [fx sunny:6]
`;

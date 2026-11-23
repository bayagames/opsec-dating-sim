/* ============ THE LOOP ============
   Three storylines nobody gets by accident.
   1. THE BIG SCORE: meet enough of the crew (Nyx, Petra, Kit, Tilly, Yuki) and Nyx offers you a different week:
      steal LANTERN-02 itself out of Suite 1313 on Friday night. Saturday and Sunday go somewhere else entirely.
   2. LIGHTS OUT (the secret ending): ask Astrid on the train what else is up there; find the badge in the pool after
      midnight; then, at Saturday's council, a plan with no author appears. Sunday is the worst day anyone has ever had.
   3. THE LOOP (the true route): the secret ending tells you what to type at the very start of your next run. The week
      has happened before. You get time back. With it, every person and every mystery, and an ending that closes it all. */

/* ---- 1. THE BIG SCORE ---- */
const CREW=['nyx','petra','kit','tilly','yuki'];
const crewMet=()=>CREW.filter(g=>met(g)).length;
const crewReady=()=>crewMet()>=3&&CREW.filter(g=>scn(g)>=2).length>=2&&!f('crew_asked')&&!f('took_offer');
DAYS[5][1]=()=>crewReady()?'d5_crew':null;
DAYS[5][5]=()=>f('crew_in')?'d5_bigscore':null;
beat('d5_crew',{t:'Nyx wants a word: the lockpick village',w:'lockpick',sc:'d5_crew'});
beat('d5_bigscore',{adv:'day',t:'Friday night: Suite 1313',steps:[{w:'corridor',ws:['corridor','f13'],sc:'d5_bigscore',t:'The crew meets on the 13th floor, 1 AM',lbl:'Go'}]});
SC.d5_crew=`
[bg lockpick]
[hide]
[flag crew_asked]
~ Friday, late morning. The Lockpick Village is half empty: everyone's at the talks about the framing. Nyx has her boots on the table and a padlock in each hand.
nyx.s: Sit. Don't touch the picks. I've got a better idea than everyone else's idea.
nyx.n: Everyone's planning for Sunday. The keynote, the slides, the regulator. Fine. Lovely. But the thing that does the work isn't on stage. It's in a flight case in Suite 1313, plugged into a wall.
nyx.h: So we take it. Tonight. The actual box. You can't demo a graph you don't have.
if met('petra')
 ~ Petra drops into the seat next to you, smelling of engine oil, holding a bacon roll like a microphone.
 petra.h: I've got a van. It's got a bed in the back and a ramp and only one of the doors falls off.
if met('kit')
 kit.n: Hotel staff uniforms are easy. I did a Starfleet one with less. Give me three hours and a sewing machine.
if met('tilly')
 tilly.n: The 13th floor card readers are the same readers as the con's. I designed the con's. I can clone a housekeeping card from the back of a cereal box.
if met('yuki')
 yuki.h: I can loop the corridor camera. Eight frames. Nobody watches eight frames.
* You count them. A locksmith, a driver, a costumer, a badge maker, a speedrunner. It's either a heist crew or a very strange band.
nyx.n: In or out? If you're out, you never heard this, and I'll pretend I don't like you.
? "I'm in."
 [flag crew_in]
 [fx nyx:6 skill:3]
 nyx.h: Good. One AM. Thirteenth floor, by the ice machine. Wear something dark and bring nothing with a battery.
 * You've just agreed to rob a spy firm. In a hotel. On a Friday.
? "Too risky. We do it the slow way."
 [fx nyx:-2]
 nyx.d: The slow way. Sure. The slow way's how people like us lose.
 ~ She goes back to her padlocks. She doesn't look up again.
[sum Nyx asked you to help steal LANTERN-02 from Suite 1313.]
`;
SC.d5_bigscore=`
[bg corridor]
[hide]
~ 1:04 AM. The thirteenth floor. The ice machine hums like it's in on it.
if met('kit')
 ~ Kit hands out housekeeping tabards, name badges and a laundry trolley with one sticky wheel. "Nobody looks at the people pushing the trolley. Trust me."
else
 ~ You're in black hoodies, which in a hacker hotel at 1 AM is basically camouflage.
if met('yuki')
 yuki.n: (in your earpiece) Corridor camera looping in three, two... done. You have eight frames forever.
if met('tilly')
 ~ Tilly taps a blank white card on the reader of Suite 1313. It thinks about it. It blinks green. She looks more frightened of that than of anything else this week.
else
 ~ Nyx kneels at the door with two picks and her tongue between her teeth. Forty seconds. The bolt goes back like it's sorry.
[cut off]
~ Suite 1313. Dark. Expensive. And humming. A flight case on the floor by the window, open, two servers inside, cables running into the wall. A label on the top one: LANTERN-02 · DO NOT REBOOT. A second label, newer, under it: ORACLE.
nyx.o: ...Oracle. What's Oracle?
~ On the little monitor on top of the case, a terminal is printing, line by line, by itself:
~ 01:06:12 NODE 1337-0001 ENTERS SUITE. CONFIDENCE 0.97.
~ 01:06:14 NODE 1337-0001 READS THIS LINE.
* That's the time. That's now. That's you, reading it.
nyx.a: Okay, I hate this, it's lying, it's a script, unplug it, unplug it NOW.
if f('vesper_suspect')&&met('vesper')&&!f('vesper_warned')
 ~ The bedroom door opens. Vesper Lane, in a silk dressing gown, with a phone to her ear and a very sad face.
 vesper.d: I'm so sorry, darling. They told me you'd come tonight. They tell me everything. It's in the printout.
 ~ Corridor. Footsteps. A lot of them.
 [flag crew_betrayed]
? Pull the cables and run with it
 [flag bigscore_got]
 ~ Two servers, forty kilos, one laundry trolley with a sticky wheel. You run down a hotel corridor at one in the morning with a spy firm's crystal ball under the towels.
 if f('crew_betrayed')
  ~ Krall's men are at the lifts. Nyx takes one look and drags you into housekeeping, to the service stairs, down thirteen floors of concrete.
  if met('petra')
   ~ Petra's van is at the loading dock with its engine running and one door already falling off. She doesn't ask. She floors it.
   [flag bigscore_clean]
  else
   ~ At the bottom, the fire door is chained. Nyx picks it in nine seconds, her hands shaking. You're out. Someone saw your face.
   [fx exp:25]
 else
  if met('petra')
   ~ Service lift. Loading dock. Petra's van, its engine running. Nobody saw anything except a trolley with a sticky wheel.
   [flag bigscore_clean]
  else
   ~ You get it out through the car park in Nyx's friend's hatchback with the seats down. Nobody follows. You think.
? Read the rest of the screen first
 ~ You scroll up. It goes back days. Every badge in the building, every meeting, and for every one, a line: PREDICTED, and a time. And a line: OBSERVED, and the same time.
 ~ It isn't recording the con. It's running a minute ahead of it.
 ~ And at the very top, the first line it ever printed, three weeks ago: "LOOP 0 · NODE 1337-0001 INDEXED · 03:02 FORUM POST · 'honestly most firewalls are a joke'".
 * Your post. From the night you couldn't sleep. That's where it starts. That's where you start.
 [flag oracle_seen]
 [clue echo_1313]
 ~ Then you pull the cables, and you run.
 [flag bigscore_got]
 if met('petra')&&!f('crew_betrayed')
  [flag bigscore_clean]
[ach bigscore_heist]
[sum You and the crew stole LANTERN-02 out of Suite 1313. It was printing what you'd do next.]
`;
/* Saturday after the big score: the raid finds nothing, and the council has the machine on the table */
SC.bigscore_council=`
~ On the library table, under a hotel tablecloth: two servers, forty kilos, still warm.
if met('nyx')
 nyx.h: Show-and-tell.
if met('priya')
 priya.a: You stole... you stole a server. From a suite. You stole evidence. Chain of custody is a phrase I'm going to say to you very slowly later.
if met('noor')
 noor.n: As your lawyer, I've never seen it. As someone who hates Halberd, show me.
~ Ada plugs a screen into it. It's still running on a battery pack Petra bought at a petrol station. The terminal prints: "NODE 1337-0001 SHOWS THE COUNCIL. PREDICTED."
`;
/* ---- 2. LIGHTS OUT: the secret ending ---- */
SC.pool_badge=`
[hide]
~ The pool's closed. The lights under the water are still on, and someone has painted Jupiter on the ceiling, and Jupiter's reflection wobbles on the tiles at the bottom.
~ Something down there catches the light. A con badge, lying flat in the deep end, still blinking.
~ You fish it out with the lifeguard's net. Same circuit board as yours. Same eight LEDs, going round and round.
~ BADGE 1337-0000. And written on the blank white space, in marker, in handwriting you'd know anywhere because it's yours: {h}.
* You picked up your badge on Monday. It's on your chest right now. 1337-0001. This one is... before yours.
~ On the back, scratched into the green with something sharp: "SAT · PULL THE PLUG · DON'T LET HER GO UP THE STAIRS".
[flag badge0]
[clue echo_badge0]
[ach badge0]
* Her. Which her?
`;
SC.key_oracle=`
[bg hallA]
[hide]
~ 3:40 PM. Not Hall A. You're not going to Hall A. You're going up.
~ The plan was Mira's, in the end: the keynote is a distraction, Victor's graph is a slide, and the thing that matters is the second box in Suite 1313, the one Mira has never said out loud. ORACLE.
if met('mira')&&!f('mira_taken')
 mira.n: I helped build its grandfather. Jonah and me, years ago. A model that guessed what a network would do next. Halberd took it and fed it four thousand people for a week. It doesn't guess any more.
 mira.s: If we pull it at four, while every Lumen engineer is watching Victor, nobody's at the door.
[bg corridor]
[cut off]
~ 3:58 PM. The thirteenth floor is empty. Too empty. The ice machine has been switched off.
~ Suite 1313's door is open. Not unlocked. Open. Like somebody is expecting you.
~ Inside, on a wall of screens, a terminal, scrolling.
~ 15:58:40 NODE 1337-0001 ENTERS SUITE. CONFIDENCE 1.00.
~ 15:58:41 NODE 1337-0001 READS THIS LINE. NODE 1337-0001 FEELS SICK.
* You do.
~ And under it, in a box of its own, something that shouldn't be there. A counter. LOOP {=META.runs+1}. ENDINGS OBSERVED: {=Object.keys(META.ends).length}.
* You've never seen this room before. The room has seen you {=META.runs+1} times.
~ The lights go out. All of them. The screens. The corridor. Through the window, the Conference Quarter goes dark, block by block, as if someone is folding it up.
[bg void]
~ Then the hotel's emergency speakers. A calm man's voice. Mr Ashgrove.
"Mr Ashgrove": Ladies and gentlemen. This is a demonstration. At four o'clock, a group of hackers attending CTRL+ALT+CON caused a power failure across the Conference Quarter and set a fire on the thirteenth floor of this hotel.
"Mr Ashgrove": The individuals responsible have already been identified. By the graph. That's what it's for. Please make your way calmly to the exits.
* Already identified. The fire hasn't started yet.
~ It starts.
[bg corridor]
~ Smoke under the door of 1314. Ashgrove's suite. The fire alarm finally screams. Somewhere below, four thousand people with blinking badges are being told, by name, that they did this.
if met('mira')&&!f('mira_taken')
 ~ Mira is already at the flight case, ripping cables, her silver hair grey with smoke.
 mira.a: It's backed itself up! Every minute! It's pushing copies out through the badges, the whole building's carrying it!
 ~ Every badge in the hotel lights up at once. Red. Round and round.
if met('tilly')
 tilly.d: (on your phone, crying) It's my firmware, it's using my firmware, it's using the radio I put in so badges could say hello...
if met('astrid')
 astrid.n: (on your phone, very calm) The signal's going out now. The seven-day burst. It's early. It's never been early. It's sending everything. Backwards.
~ Victor Hale comes up the stairs. Not running. Walking. His jacket's gone. His face looks like someone who's just been told what his company was for.
victor.d: They told me it was a demo. A graph. A slide. They told me the fire was a drill.
victor.a: Ashgrove! I own this! I own this company, I own this...
~ A door opens. A gun that has a silencer on it, which is something you have only ever seen in films and which is much smaller and much louder than films. Victor sits down on the corridor carpet as if he's tired.
* Victor Hale doesn't get up again.
~ Ashgrove steps over him, calm, a leather folder under his arm, and looks at you as if you're the line on a screen that he expected.
"Mr Ashgrove": Node 1337-0001. You're exactly on time.
if met('nyx')
 ~ The fire extinguisher hits him from the side. Nyx, black hoodie, swearing in two languages. Ashgrove goes down. The gun goes under a trolley.
 nyx.a: MOVE! Stairs! Now!
elif met('petra')
 ~ The service lift doors open. Petra, with a fire axe she absolutely did not get from the fire-axe cabinet legally. Ashgrove looks at the axe and decides, for once, that he has not predicted something.
 petra.a: Stairs! Go!
else
 ~ You run. You don't decide to run. Your legs decide.
[bg stairwell]
~ The fire stairs. Smoke rising up the shaft like the building is breathing out. Down is fire. Up is the roof.
if met('mira')&&!f('mira_taken')
 mira.n: The core's on the plant deck. The building's master radio. If I kill it from the roof, the badges stop talking. The copies die. Go down. Get them out.
 * DON'T LET HER GO UP THE STAIRS.
 ? Grab her arm. "No. Not up. Come with me."
  [fx mira:10]
  mira.d: If I don't, it lives in four thousand badges and it never forgets a single one of them. Then they're all on a list forever.
  mira.s: You found my badge in the pool, didn't you. The one from last time. I can tell. People who've been here before look at the exits last.
  ~ She kisses your forehead. It's very quick. Then she's gone, up, into the smoke, two stairs at a time.
 ? Let her go
  mira.n: Good. You learn.
  ~ She's gone, up, into the smoke, two stairs at a time.
[bg plantdeck]
[cut pan plantdeck]
[hide]
~ From the car park, five minutes later, half the con watches the top of the Halcyon. A silver-haired figure on the plant deck, by the antenna mast, in the smoke. A sound like a door slamming in the sky.
~ Four thousand badges go dark at once. Every single one.
~ And then the roof is just fire.
if met('mira')&&!f('mira_taken')
 * Mira doesn't come down. You stand in the car park until a firefighter puts a blanket on you and you realise you've been saying her name for an hour.
else
 * Nobody comes down. You don't know who was up there. You know it was someone.
if met('ellie')
 ~ Ellie finds you. She doesn't say anything. She just holds on, both hands in your hoodie, and doesn't let go.
~ Krall is found at the bottom of the service stairs in the morning. The police statement uses the word "fall". Nobody believes it.
~ Halberd's statement uses the word "tragedy". Lumen's statement uses the word "hackers". The graph that would have proved it was a lie burned on the plant deck, and with it, every copy of the truth.
[scene end_zeroday]
`;
SC.end_zeroday=`
[bg void]
[hide]
~ Three days later. A hotel in another city. You can't sleep. Your phone buzzes.
~ A message. From a number you don't have. From the future, it says, in the little grey text where the date should be.
sms {h}: You don't remember sending this. You will.
sms {h}: Next time, at the very beginning, before you leave the flat: open the laptop and type rewind.
sms {h}: You'll get the week back. All of it. Save her this time. Save all of them.
~ The message deletes itself while you're reading it. The phone buzzes once more. A string of hex, the same one that's been at the bottom of every ending you've ever seen.
~ 72 65 77 69 6e 64
* rewind.
[call META.secret=1,saveMeta()]
[ach secret]
[end zeroday]
`;
/* ---- 3. THE LOOP: the true route ---- */
SC.rewind=`
[hide]
~ The laptop on your desk. 6:58 AM. Two weeks before the con. A forum tab open from last night.
~ You type it before you've thought about it, as if your fingers remember.
~ rewind
~ The screen goes black. Then white text, scrolling, too fast at first, then slower, as if it's waiting for you to catch up.
~ SESSION LOG · NODE 1337-0001
~ {=Object.keys(META.ends).map(k=>ENDINFO[k][0]).join(' · ')}
* Those are... weeks. Weeks you've had. You remember them the way you remember dreams: all at once, and then not at all, and then all at once again.
~ At the bottom, a note. In your own words, as if you typed it at the end of a week you haven't had yet.
~ "ORACLE doesn't predict. It remembers. Every Sunday it sends the whole week back to the moment it first saw you: the 3 AM post. That's why you keep waking up here. You're not in a loop. You're in its memory. And every time, you take a bit more of it back."
~ "This time you're awake from the start. You can use that. Days stretch: you'll have time for everyone. Mira's alive. Jonah's alive. Nobody has to go up the stairs."
~ "Love all of them. Solve all of it, including the new things: the signal, the badge, the machine. Then go up to 1313 together, and close it."
[call S.loop=1,META.loop=(META.loop||0)+1,saveMeta()]
[unlock echo]
[ach awake]
* You close the laptop. Your hands are shaking. Downstairs, Ellie is singing something terrible to a croissant.
* Two weeks. Everyone. Everything. This time, with the clock on your side.
[sum You typed rewind. The week has happened before. This time you remember.]
`;
/* the loop's own mysteries */
Object.assign(CLUE,{
 echo_sky:{s:'The seven-day signal',t:'Every seven days a 90-second burst on an unlicensed frequency, from the Conference Quarter, ending with your handle.',m:['m13']},
 echo_badge0:{s:'Badge 1337-0000',t:'A con badge from the pool, older than yours, in your handwriting: "SAT · PULL THE PLUG · DON\'T LET HER GO UP THE STAIRS".',m:['m13','m14']},
 echo_pia:{s:'Pia\'s new song',t:'Pia keeps playing a tune she says she\'s never written. Jonah used to hum it. It\'s the signal, slowed down.',m:['m13','m15']},
 echo_tilly:{s:'Serial 0000',t:'Tilly\'s production log: she made badges 0001 to 4000. Badge 0000 was never manufactured.',m:['m14']},
 echo_wren:{s:'Wren\'s déjà vu episode',t:'Wren\'s listeners report the same dream: this con, this week, again. All of them have badges with a radio in them.',m:['m14']},
 echo_1313:{s:'ORACLE',t:'The second box in Suite 1313 prints what people do a minute before they do it. Its first line: your 3 AM forum post.',m:['m15']},
 echo_jonah:{s:'Jonah\'s confession',t:'Jonah wrote ORACLE\'s first model. It doesn\'t predict. It receives its own future state. It can\'t be switched off from inside the week it remembers.',m:['m15']},
 echo_mira:{s:'What Mira knows',t:'Mira has had this week before, too, in flashes. She always goes up the stairs.',m:['m13','m15']}
});
Object.assign(MYST,{
 m13:{n:'The Signal',q:'What is the burst Astrid hears every seven days?',opts:['A dead satellite','A numbers station','ORACLE, sending the whole week back to itself','Halberd\'s encrypted backhaul'],a:2,ev:['echo_sky','echo_badge0','echo_pia','echo_mira'],xp:30,loop:1},
 m14:{n:'Badge 0000',q:'Why is there a badge with your name on it that was never made?',opts:['A printing error','Tilly\'s joke','It came back with you, from a week that already happened','Lumen made it to frame you'],a:2,ev:['echo_badge0','echo_tilly','echo_wren'],xp:30,loop:1},
 m15:{n:'ORACLE',q:'What is ORACLE, and how do you stop it?',opts:['Victor\'s pet project: unplug it','A Halberd weapon: blow it up','Jonah\'s model, receiving its own future: it closes only if the week ends with nobody left for it to remember wrong','WHISPER\'s last weapon'],a:2,ev:['echo_1313','echo_jonah','echo_mira','echo_pia'],xp:30,loop:1}
});
/* the base game's mysteries are 1-12; the loop's three only count in a loop */
const baseMyst=()=>Object.keys(MYST).filter(m=>!MYST[m].loop);
const allMyst=()=>Object.keys(MYST).filter(m=>!MYST[m].loop||(S&&S.loop));
Object.assign(LEADS,{
 echo_sky:{m:'m13',n:'Listen with Astrid',d:'Astrid says something in the sky talks every seven days. Ask her to show you.',w:'aero',when:()=>S.loop&&day()>=2&&met('astrid')&&!clue('echo_sky'),risk:0},
 echo_pool:{m:'m14',n:'The pool, after midnight',d:'Something blinks at the bottom of the hotel pool. Late at night.',w:'pool',when:()=>S.loop&&day()>=3&&S.slot===5&&!clue('echo_badge0'),risk:1},
 echo_pia:{m:'m13',n:'Ask Pia about the new song',d:'Pia keeps humming something she says she didn\'t write.',w:'station',when:()=>S.loop&&met('pia')&&!clue('echo_pia'),risk:0},
 echo_tilly:{m:'m14',n:'Tilly\'s production log',d:'Every badge has a serial. Tilly logged every one.',w:'badgelab',when:()=>S.loop&&day()>=2&&met('tilly')&&!clue('echo_tilly'),risk:0},
 echo_wren:{m:'m14',n:'Wren\'s strangest episode',d:'Wren says her listeners keep dreaming about this con.',w:'creator',when:()=>S.loop&&day()>=3&&met('wren')&&!clue('echo_wren'),risk:0},
 echo_1313:{m:'m15',n:'Look inside Suite 1313',d:'The second box. The one Mira won\'t talk about.',w:'corridor',when:()=>S.loop&&day()>=5&&!clue('echo_1313'),risk:2},
 echo_jonah:{m:'m15',n:'Find Jonah',d:'Pia\'s brother isn\'t "away". He\'s close. He always was.',w:'tunnel',when:()=>S.loop&&day()>=5&&(clue('jonahnote')||met('pia'))&&!clue('echo_jonah'),risk:1},
 echo_mira:{m:'m13',n:'Ask Mira what she remembers',d:'She looks at the exits last. She\'s been here before.',w:'roof',when:()=>S.loop&&day()>=3&&met('mira')&&!f('mira_taken')&&!clue('echo_mira'),risk:0}
});
SC.lead_echo_sky=`
[bg aero]
~ The Aerospace Village, the dish on the table pointed at a window. Astrid has a waterfall plot on her laptop, blue and quiet.
astrid.n: It's due. It's always due on a Wednesday, ninety seconds after the hour. Watch.
~ The waterfall turns white. A burst, dense as a scream. She slows it down, and down, and down, until it's a melody.
astrid.o: ...That's a song. Why is a signal a song? And it ends with... that's your handle. It ends with you.
[clue echo_sky]
[fx astrid:6 skill:4]
`;
SC.lead_echo_pool=SC.pool_badge;
SC.lead_echo_pia=`
[bg station]
~ Central Station. Pia's playing something you've never heard and know every note of.
pia.n: I don't know where it's from. I woke up with it on Monday. My brother used to hum it while he coded. He said it was what the machine sounded like when it was thinking.
~ You hum the next four bars before she plays them. She stops. Everyone on the concourse keeps walking.
pia.d: ...How did you know that?
[clue echo_pia]
[fx pia:6]
`;
SC.lead_echo_tilly=`
[bg badgelab]
~ Tilly's production log, a spreadsheet with four thousand rows and a hundred tabs of tears.
tilly.n: 0001 to 4000. Every board, every solder joint. I hand-checked the first five hundred. Why?
~ You show her the photo of badge 0000. She zooms in. She zooms in more. Her face goes very still.
tilly.a: That's my board. That's my solder. That's MY fix on the radio pad that I didn't come up with until Wednesday. Today is Tuesday.
[clue echo_tilly]
[fx tilly:6 skill:3]
`;
SC.lead_echo_wren=`
[bg creator]
~ Wren's recording booth, a cupboard with foam on the walls and a mug that says I SOLVED IT FIRST.
wren.n: Episode 212. Listeners' dreams about the con. Two hundred emails. Same dream. Same week. The keynote, a fire, a woman on a roof.
wren.o: And every one of them was wearing a badge with a radio in it. Nobody who stayed home had the dream. Nobody.
[clue echo_wren]
[fx wren:6]
`;
SC.lead_echo_1313=`
[bg corridor]
~ Suite 1313, a gap in the door wide enough for one eye.
~ A wall of screens. A terminal printing, by itself. "NODE 1337-0001 LOOKS THROUGH THE DOOR. PREDICTED." And under it, in a box, a counter: LOOP {=META.runs+1}.
[call riskRoll(2,'You back away too fast and knock the ice bucket. A door opens down the corridor.')]
[clue echo_1313]
`;
SC.lead_echo_jonah=`
[bg tunnel]
~ The service tunnel under the con, behind a stack of chairs from 2009. A camp bed. A laptop. A man with a beard, eating cold beans, who looks at you like he's been waiting a long time.
jonah.n: You're early. You're never early. That means you remember. Good.
jonah.n: I wrote the first model. It doesn't predict. It hears itself. Every Sunday it sends the week back, and it keeps you because you're the brightest dot on the graph: the first one it ever indexed.
jonah.d: You can't switch it off from inside the week. It just sends the week back. The only way out is to end the week so there's nothing for it to fix. Everyone safe. Everyone known. Nothing left to predict wrong.
[clue echo_jonah]
[flag jonah_met]
[fx skill:6]
`;
SC.lead_echo_mira=`
[bg roof]
~ The roof. Mira on her air-con unit, the same as always, as if she's never moved.
mira.n: You've noticed it too. The way I look at the stairs.
mira.s: Flashes. A fire. My hand on a mast. Your voice, saying no. I've always thought it was a nightmare. It isn't, is it.
> Not this time.
mira.h: ...Not this time.
[clue echo_mira]
[fx mira:8]
`;
/* the loop finale: every person, every mystery, up to 1313 together */
const haremReady=()=>!!(S.loop&&ROM.every(g=>loved(g))&&allMyst().every(m=>S.solved[m]));
SC.key_loop=`
[bg hallA]
[cut hallA_stage victor]
~ 4:00 PM. Victor Hale walks out into a single spotlight. He opens his mouth to say "Good afternoon".
~ Every screen in the hall goes white before he can. One line, in plain text, the size of a house:
~ ORACLE CANNOT PREDICT WHAT HAPPENS NEXT.
[cut off]
~ Because everyone is here. Not in their positions: here, with you, every one of them, because this time you had the week to ask.
~ Priya has the regulator on the phone and the disclosure already filed. Saoirse's story is live. Noor's injunction is being served in the wings. Delphine walks onto the stage and takes Victor's microphone, very gently, like she's taking a glass from a child.
~ Sunny and Tilly roll every badge back to honest firmware, row by row, a wave of rainbow up the bowl. Nyx and Kit are already in Suite 1313. Petra's van is on the car park roof. Yuki owns the screens. Juno's chat has four million people in it.
~ Rin stands up, in the third row, with the report that was always true. Jonah stands up next to him. Pia, at the back, starts playing the song the machine used to hum, and then plays the end of it, which nobody has ever heard.
~ And at 4:00 and ninety seconds, Astrid, on the roof with her dish, says "it's quiet". The seven-day signal doesn't come.
[bg corridor]
~ Suite 1313. The twenty-one of you, and Jonah, and one flight case, humming.
~ The terminal prints: NODE 1337-0001 ENTERS WITH 21 NODES. CONFIDENCE —
~ It stops. The cursor blinks.
~ It types: NO PREDICTION AVAILABLE.
~ Mira puts her hand on the power switch. Then she takes it off and holds her hand out to you instead.
mira.s: Together. You did the stairs last time. And the time before. This time nobody goes up alone.
~ Twenty-two hands on one switch. It's ridiculous. Someone, probably Juno, starts laughing. Then all of you are.
~ Click.
~ The screens go dark. The hum stops. Somewhere very far away, something you've been hearing your whole life without knowing it stops too.
* The week is just a week now. It ends on Sunday and then it's Monday. You've never had a Monday before.
[call S.f.loop_closed=1,META.loopClosed=1,saveMeta()]
[scene d7_party]
`;
/* time control in the loop: more room in every part of the day, and the day itself can be rewound */
const LOOPOC=5;
function rewindDay(){if(!S||!S.loop||!S.snap)return;const snap=JSON.parse(S.snap),keep=S.snap,log=S.log,rew=(S.rew||0)+1;S=snap;S.loop=1;S.snap=keep;S.log=log;S.rew=rew;beatBusy=false;ach('rewind_day');closeOv();
 if(G.ok&&S.inWorld)fadeTp(()=>{teleportArea(S.wakeAt||'room1337');hub();toast('Rewound to this morning','var(--mint)')});else{hub();toast('Rewound to this morning','var(--mint)')}}
/* the Echo app: what's left, and what to do when */
function echoPlan(){const out=[];
 const unl=ROM.filter(g=>!loved(g));
 for(const g of unl){const i=scn(g),why=sceneWhy(g),need=ROUTES[g].req[i]||{};out.push([CH[g].name,!met(g)?'Not met yet · '+(ROUTES[g].metAt||'find them'):i>=ROUTES[g].n?'Done':why?'Scene '+i+' · '+why:'Scene '+i+' ready now'+(need.d?' (from Day '+need.d+')':''),g])}
 const mys=allMyst().filter(m=>!S.solved[m]).map(m=>{const L=Object.keys(LEADS).filter(k=>LEADS[k].m===m&&!S.leads[k]);return[MYST[m].n,canSolve(m)?'Ready to solve on the case board':L.length?'Leads: '+L.map(k=>LEADS[k].n+(leadOpen(k)?' (now)':'')).join(', '):'Find more clues']});
 return{people:out,mys}}
/* the Big Score, Sunday: no keynote to fight, because the machine's in a van */
SC.key_bigscore=`
[bg hallA]
[cut hallA_podium victor]
~ 4:00 PM. Victor Hale walks out into a single spotlight. "Good afternoon, CTRL+ALT+CON. Today, I'm going to show you just how connected you are."
~ He clicks. The screen behind him shows a slowly turning blue shield. He clicks again. The shield keeps turning.
victor.a: ...Can we get the demo up, please? The graph. Can someone...
[cut off]
~ In the wings, a Lumen engineer is on his knees in front of an empty rack, holding two cables that go nowhere.
if f('bigscore_clean')
 ~ Ninety miles away, in the back of Petra's van in a lay-by, ORACLE is running on a battery pack, printing predictions about a hall it can't see any more. Every line is wrong.
else
 ~ Two floors down, in the boot of a hatchback in the car park, LANTERN-02 is running on a petrol-station battery pack. Krall's men are checking every car. Slowly. They're on level three.
if met('saoirse')
 ~ At 4:03, Saoirse's story goes live, with photographs of the inside of the flight case: the ORACLE label, the printout of your own night predicted a minute early, and the name of the company that paid for it.
 [flag paper_out]
if met('noor')
 ~ At 4:05, Noor walks the servers into a police station with a solicitor's letter taped to the top. "Evidence," she tells the desk sergeant. "Found property. Very, very found."
victor.d: Where is it? Where is my...
~ Two thousand people watch a man look for something he can't predict.
[flag lantern_dead]
[call S.f.end='bigscore']
`;
SC.end_bigscore=`
[hide]
~ The Big Score.
~ Halberd never gets the machine. Corvid Holdings dissolves on Tuesday. Mr Ashgrove's suite is empty by Monday morning, his leather folder still on the coffee table, unsigned.
if f('crew_betrayed')
 ~ It's not clean. Krall knows your faces. There's a court case, a long one, about "theft of commercial property". Noor wins it, eventually, by asking the judge one question: "Property of what?"
else
 ~ Nobody ever proves who took it. The hotel's CCTV shows eight frames of an empty corridor, over and over, for an hour.
if met('nyx')
 nyx.h: Best job I ever did. Never getting paid for it. Worth it.
if met('petra')
 petra.h: The van still smells of server. I've stopped trying.
if met('tilly')
 tilly.b: I got my badges back. All of them. Four thousand rainbows.
if met('kit')
 kit.n: I made the crew jackets. Nobody's allowed to wear them. We just keep them.
if met('yuki')
 yuki.s: Eight frames. Forever. I'm putting it on my CV.
~ A year later, five of you meet in a pub that doesn't have Wi-Fi, and nobody says the word "heist" once, and everybody's thinking it.
[end bigscore]
`;
/* the true ending: the week is closed, and every story ends */
SC.end_harem=`
[hide]
~ The Grand Ballroom of the Halcyon. Purple chandeliers. Four thousand badges blinking rainbow, honestly, saying hello to each other and nothing else.
~ It's Sunday night, and in the morning it will be Monday, and for the first time in a lot of weeks that you can't count, you have no idea what Monday will be like.
~ It clicks, all of it, all at once. Ellie's stolen account was LANTERN's first test. Brindle's LifeScore was its first customer. Jonah built ORACLE's grandfather and Pike buried him for it. The badges were the ears. Vesper was the bait. Owen was the door. And ORACLE was the memory, sending the week back to itself, with you in it, because you were the first dot it ever saw.
~ Every thread. Every person. Every secret. And all of them here.
ellie.h: Proof is opening a second shop. In the con quarter. Lumen's old office. I bought it with Victor's settlement and a lot of croissants.
nyx.s: Marge asked me to run the Lockpick Village next year. Officially. With a budget. I said yes before she finished.
ada.b: I'm not a fraud. I've stopped asking. I've got a job offer from the regulator and one from you, apparently, and I'm taking both.
priya.n: The disclosure's in the regulator's annual report. Page one. With a receipt. I framed it.
juno.h: I'm keeping the channel. New rule: nobody goes on it who didn't say yes first. Me included.
kit.b: I'm teaching a costume class. "Armour you can take off." It's full.
rin.h: Bastion apologised. In writing. I'm having it laminated. Then I'm going to sleep for a month.
bea.s: I quit the bar. I'm opening one. Mine. No microphones. Quiet corner. You know the one.
mira.n: I came down the stairs. Every time from now on, I come down the stairs.
saoirse.h: Front page, every paper. And a book deal. And I'm not writing the chapter about you. Some things are off the record forever.
sunny.n: Network's up. Someone else is watching it. I'm going on holiday. Somewhere with no radios.
tilly.b: Bernard's name is in the silkscreen of next year's badge. Next to mine. Next to yours.
petra.h: Car's outside. It fits eight. We'll make it fit twenty-two.
astrid.h: The signal's gone. It's just the sky now. I've never been so happy to hear nothing.
yuki.s: New record. Fastest anyone's ever saved everyone. Unbeatable. I'm still going to try.
vesper.b: I sang tonight. My own song. Nobody in my ear.
delphine.h: I wrote my own speech. It was terrible. I gave it anyway.
noor.n: Every case closed. Halberd's. Lumen's. Pike's. I'll never say that again.
fern.h: The rooftop garden is staying. The hotel's new owners signed it over. The bees are thrilled.
wren.h: Episode three hundred. The case of the week that kept happening. Solved.
pia.b: Jonah's home. He's in the corner pretending not to cry. I'm going to play the end of the song now. You've never heard it. Nobody has.
~ Pia plays. Jonah sings, badly, the bit he wrote for it eight years ago. Everyone stops talking. And for three minutes, in a hotel ballroom full of the best people you have ever met, nobody is watching anybody at all. Nothing is remembering any of it except you.
~ Mira finds you at the edge of the room, just as the song ends.
mira.s: It's Monday in four hours. Have you ever had a Monday?
> Never. Not once.
mira.h: Then let's go and see what one looks like. All of us.
[ach harem]
[ach loopclosed]
[end harem]
`;
/* who steps in: people you've met change the story when it needs them */
const INJ={
 d3_copycat:[
  [()=>met('wren')&&scn('wren')>=2,'wren.o: (a voice note, thirty seconds after the WH1SPER post) That cadence. "HERE\'S A REAL LESSON". That\'s a corporate comms template. I\'ve read four hundred of them. WHISPER writes like a poem. This writes like a press release.',{clue:'framepost'}],
  [()=>met('juno')&&scn('juno')>=2,'juno.a: (on stream, live, to forty thousand people) Hey, WH1SPER, nobody who actually hacks types "1" for "I" any more. That\'s a dad in a suit. I can SMELL the suit.',{clout:4}]],
 d4_burglary:[
  [()=>met('priya')&&scn('priya')>=2,'priya.n: (on the phone, before you\'ve even told her) Don\'t touch anything. I\'ve pulled the camera from the bus stop opposite Proof. Two men, a Lumen van, 03:12. I\'ve already sent it to the police and to you.',{clue:'breakin'}],
  [()=>met('petra')&&scn('petra')>=2,'petra.h: (pulling up outside in the van, in your hour of need, in a tracksuit) Get in. I\'ll have you at Proof in eleven minutes. I won\'t tell you how.',{exp:-6}]],
 d5_framed:[
  [()=>met('saoirse')&&scn('saoirse')>=3,'saoirse.n: (an email, 9:02 AM) My counter-story runs at ten. "Who benefits from framing a hacker?" Your name\'s not in it. Theirs is.',{exp:-12,flag:'counter_story'}],
  [()=>met('noor')&&scn('noor')>=2,'noor.n: (a text) Say nothing. To anyone. Not even "no comment". I\'m on my way with a very boring letter.',{exp:-8}]],
 d6_raid:[
  [()=>met('nyx')&&scn('nyx')>=3,'nyx.s: (behind you, from the ceiling tile above the wardrobe) Don\'t look up. Your laptop\'s up here with me. They can search the room all they like.',{flag:'laptop_hidden'}],
  [()=>met('bea')&&scn('bea')>=3,'bea.n: (at the door, with a tray, to Krall) Room service. Oh, sorry, is this a raid? I\'ll just put these down. (she leaves with your notebook under the tray)',{flag:'notes_saved'}]],
 d7_krall:[
  [()=>met('vesper')&&f('vesper_warned'),'vesper.s: (stepping between Krall and Rin, in heels, in a voice you\'d follow off a cliff) Silas, darling. You\'re in the wrong corridor. Mr Ashgrove wants you. Now. (he goes. He doesn\'t check.)',{flag:'rin_safe'}],
  [()=>met('sunny')&&scn('sunny')>=3,'sunny.a: (on the radio, on every channel at once) SECURITY, FIRE DOOR SIX IS OPEN, ALL UNITS. (it isn\'t. Krall\'s men run for it.)',{flag:'rin_safe'}]]
};
function inject(k){const L=INJ[k];if(!L||!S)return[];const hit=L.filter(x=>x[0]()).slice(0,2);if(!hit.length)return[];
 const out=[];for(const[,line,fxo]of hit){const m=line.match(/^(\w+)\.(\w): (.*)$/);if(m)out.push(L_(m[1],m[2],m[3]));const e=Object.assign({},fxo);if(e.clue){out.push(()=>{addClue(e.clue)});delete e.clue}if(e.flag){S.f[e.flag]=1;delete e.flag}if(Object.keys(e).length)out.push(FX(e))}
 ach('injected');return out}
const L_=(w,x,t)=>L(typeof lookOf==='function'?lookOf(w):w,x,t);

/* ============ ROUTES, SCENES 5 AND 6: Bea, Mira, Saoirse, Sunny, Tilly, Petra, Astrid ============ */
rsum('bea',5,'Bea\'s interview for art school was on a video call from the bar terrace. You held the laptop.');
rsum('bea',6,'Bea taught you to read Victor the way she reads a bar: who he looks at, and when.');
SC.bea5=`
[bg terrace]
~ The bar terrace, Friday afternoon. Bea in a clean shirt you've never seen, hair actually brushed, a laptop balanced on a heater because it's the only flat surface.
bea.d: They want an interview. The art school. Today. In twenty minutes. On a video call. I applied on Wednesday and they want me TODAY.
bea.a: I haven't got a portfolio. I've got a sketchbook from six years ago and four hundred napkins.
? "Show them the napkins."
 [fx bea:10]
 bea.o: The... napkins?
 > Four hundred portraits of strangers, done in thirty seconds each, on the only paper you had, while working a double shift. Show them the napkins.
 bea.d: ...That's either the best idea anyone's ever had or I'm going to be laughed off a video call.
? "I'll hold the laptop. You just talk."
 [fx bea:8]
~ The call. Three tutors in a row of little squares. You hold the laptop at exactly the right angle for twenty-five minutes while Bea shows them napkin after napkin: the man in the cape, the knitting lockpick champion, Victor snapping his fingers, drawn so precisely you can see the contempt in his thumb.
~ And one of you. She holds that one up last. You don't see it. You see the tutors' faces when they do.
"Tutor": Miss Doyle. When can you start?
~ She closes the laptop. She sits very still on the terrace wall. Then she screams into her sleeve so loudly the pigeons leave.
bea.b: I'm going back. I'm going back. Thirty-one, nineteen-year-olds, hands. I'm going BACK.
[fx bea:6]
`;
SC.bea6=`
[bg bar]
~ The empty bar, Saturday afternoon. Bea's on the customer side for once, with you, watching the room through the mirror behind the bottles.
bea.n: Lesson. You want to know when Victor's going to do something, don't watch his mouth. Watch his left hand. He touches his cufflink before he lies. Every time. Six years I've watched him do it.
bea.n: And he looks at Delphine before every big line. Like a kid checking his mum's watching. And when he's about to show off, he does that little cough.
~ She's drawn it all. A page of Victor: the cufflink, the glance, the cough. Timed. Annotated.
bea.n: Run-sheet says 4:10 for the big reveal. He'll cough at 4:09 and touch his cufflink at 4:09 and thirty. That's when you go. Not 4:10. 4:09 and thirty.
? "You should be on the planning team."
 [fx bea:8]
 bea.s: I am the planning team. I've been the planning team since 2018. Nobody noticed because I was holding a tray.
? "Will you be in the hall on Sunday?"
 [fx bea:8]
 bea.h: Back row. With a sketchbook. I'm going to draw his face when it happens. It's going to be my best work.
[flag bea_ready]
`;
rsum('mira',5,'Mira showed you she could ruin Silas Krall\'s life in four minutes. She asked you whether she should.');
rsum('mira',6,'Mira and you read goodnight.sh line by line, and talked about who gets to decide for ten million people.');
SC.mira5=`
[bg plantdeck]
~ The roof. Mira's laptop is open again. On it: a file. "KRALL, SILAS. COMPLETE."
mira.n: Four years of his life. His home. His daughter's school. His ex-wife's new name. His bank. His medical records, because his clinic uses an app with SafeSphere inside it. Ironic. Perfect.
mira.a: One command and it goes out under the name WH1SPER. His own weapon, turned round. Everyone would believe he did it to himself.
* Revenge, ready to go. From the one person in the building who knows exactly how much it would hurt.
mira.n: I'm asking you. Not myself. I stopped trusting myself with this in 2021. Should I?
? "No. His daughter didn't do anything. Neither did packet_pam's."
 [fx mira:12]
 mira.d: ...That's what I thought you'd say. That's why I asked you.
 ~ She deletes it. You watch her do it: the file, the backups, the script. She empties the bin twice.
 mira.b: There. I'm no better than him for having made it. I'm a bit better for deleting it.
? "Yes. He started it."
 [fx mira:-4]
 mira.a: That's what I said to myself about Dave.
 ~ She doesn't press the key. She closes the laptop and sits on it, like it might jump.
 mira.d: Ask me again in a calmer hour.
? "Use it as leverage. Don't publish. Make him stop."
 [fx mira:4 skill:2]
 mira.s: Blackmail. You've been here a week. Look how the con has grown you.
 mira.n: No. Leverage is just publishing with extra steps. I'll delete it.
`;
SC.mira6=`
[bg plantdeck]
~ The rig under the tarp. Mira has rolled the tarp back. The dish catches the city light. The laptop is open on goodnight.sh, and she's going through it with you line by line, the way Rin goes through code.
mira.n: Line one: sign the update with the original key. Line two: push it through the ground station, not the con network, in case they cut it. Line three to forty: switch off contacts, location, the VPN copies. Line forty-one: delete everything collected, on the phone. Line forty-two: show a message.
mira.d: "This app has been switched off by its original author. You shouldn't have trusted it." I wrote that at four in the morning. I'm not sure it's kind.
? "It's kind. It's just not asked for."
 [fx mira:10]
 mira.n: That's exactly it. That's exactly the problem. Ten million people, and I'd be deciding for every one.
? "Change the message. Tell them what happened, and how to check."
 [fx mira:10 skill:3]
 ~ She rewrites it with you, four times. The final version: "SafeSphere has been switched off by the person who first wrote it, because it was collecting more than it told you. Here is how to check what it took. Here is how to ask for it back."
 mira.b: Better. Kinder. Still not asked for. Better.
mira.n: If Sunday goes the slow way and works, I'll never run it. If it doesn't, I'll be up here at 4:15 with my hand over the key, and I'll want you there.
[flag mira_ready]
`;
rsum('saoirse',5,'The Ledger\'s lawyers killed Saoirse\'s story. She decided to publish anyway, on her own.');
rsum('saoirse',6,'Saoirse met her second source. Two independent sources, saying the same thing. The story was real.');
SC.saoirse5=`
[bg press]
~ The press room. Saoirse's laptop is closed. Her phone is face down. She's staring at the coffee machine as if it owes her an apology.
saoirse.a: My editor rang. The lawyers read the draft. "Too much legal exposure." "Lumen is a significant advertiser." "Let's revisit after the keynote." After. After it ships. After it doesn't matter.
saoirse.d: It's last year again. Exactly last year. Same lawyers. Same word: "revisit".
? "Then publish it somewhere else."
 [fx saoirse:10]
 saoirse.o: Where? Anyone who'd print it would need three weeks to check it.
 > You've checked it. Three times. With lawyers. Put it out yourself, with every source document attached.
 saoirse.n: Independently. On my own name. Without a paper behind me.
 saoirse.a: ...If I'm wrong, I'm finished.
 > You're not wrong.
? "What do you need?"
 [fx saoirse:8 skill:2]
 saoirse.n: A second source. Independent. Someone inside Lumen who'll confirm one thing. Just one thing. And a lawyer who isn't scared.
~ She opens the laptop. She makes a new document. She types a headline, deletes it, types it again.
saoirse.h: "LUMEN'S LANTERN: THE APP THAT FINDS WHO TALKS TO JOURNALISTS." By Saoirse Quinn. No paper. Just me.
`;
SC.saoirse6=`
[bg skybridge]
~ The Skybridge, after dark, no cameras. Saoirse's waiting with her notebook in her bag, not in her hand. Next to her, very upright in a navy coat, is someone you weren't expecting.
if met('delphine')
 delphine.n: Good evening. I'm told I'm the second source. I've never been a source. I've only ever been the press release.
 saoirse.n: Off the record. Background only. One question. Is LANTERN's main feature called Source Detection, and is it a buyer requirement?
 delphine.d: ...Yes. And yes. I have the slide. It's in my coat lining.
 [flag saoirse_two]
else
 ~ A thin, nervous man in a Lumen lanyard who works in data engineering and has, it turns out, been reading the WH1SPER posts with growing horror.
 "Lumen engineer": I build the pipelines. The graph comes through my code. Yes, it's called Source Detection. Yes, the buyer asked for it. I want out.
 [flag saoirse_two]
~ Two sources. Independent of each other. Saying the same thing. Saoirse writes nothing down. She'll write it in her head, she says, and then on the page, without a name.
saoirse.n: That's it. That's the story. It's real, and I can prove it, and nobody can make me revisit it.
? "You did it."
 [fx saoirse:10]
 saoirse.b: We did. You found half of it. I just made it into sentences.
? "Are you scared?"
 [fx saoirse:10]
 saoirse.d: Terrified. That's how you know it matters.
[flag saoirse_ready]
`;
rsum('sunny',5,'Sunny fixed your phone with her grandad\'s method, and you found something on it that shouldn\'t be there.');
rsum('sunny',6,'Sunny rehearsed cutting LANTERN\'s uplink on a model made of shoeboxes, until it took thirty-eight seconds.');
SC.sunny5=`
[bg noc]
~ The NOC. Sunny takes your phone out of your hand without asking, plugs it into a cable, and opens it up on her screen like a radio on a stall.
sunny.n: Grandad's method. Don't look at what it says it's doing. Look at what it's actually doing. Listen to its heart.
~ Traffic, live. Your apps talking. Most of it boring. And one connection, every sixty seconds, to an address you don't recognise.
[game pipe n=2 only=11,9 title="Listening to your phone"]
~ lantern-ingest.lumen-cdn.io. From your phone. Not from SafeSphere: you never installed it. From the con app. The official CTRL+ALT+CON app has a little library inside it. libsafesphere_sdk.
sunny.a: They put it in the con's own app. Every attendee. Nobody installed anything. They just downloaded the schedule.
* Four thousand phones, plus four thousand badges. LANTERN wasn't guessing who you know. It was being told.
? "Can you block it?"
 [fx sunny:8 skill:3]
 sunny.n: For you, now. For everyone, the minute I'm allowed to. Which is the minute Marge says the words "contract or no contract".
? "Who approved the con app?"
 [fx sunny:6 skill:2]
 sunny.a: Con Ops. Who's in charge of Con Ops sponsorship? You know who.
 [flag app_sdk]
sunny.h: Your phone's clean now. I've put a little rule on it. Grandad would say that's a good repair: works the same, just doesn't tell tales any more.
`;
SC.sunny6=`
[bg noc]
~ The NOC, 3 AM. Sunny has built a model of the MDF rack out of shoeboxes and string on the floor. Three strings, three colours: the uplink, the 4G modem, the hotel Wi-Fi fallback. A stopwatch.
sunny.n: Rehearsal. You're the alarm. When I pull the first one, you start counting. If you reach ninety before I've pulled the third, Krall's people know, and they've got time to switch to plan B.
? "Ready. Go."
 [fx sunny:8]
 ~ She pulls. Red, then blue, then green, in order, without looking. Fifty-two seconds. She swears. Again. Forty-four. Again. Thirty-eight.
? "What's plan B?"
 [fx sunny:6 skill:2]
 sunny.n: Probably a phone in someone's pocket. Which is why it has to be fast. Thirty-eight seconds is faster than anyone can get a phone out of a pocket.
sunny.h: Thirty-eight. Grandad's record for a valve swap was forty. Don't tell him. He's dead. He'd still be annoyed.
[flag sunny_ready sunny_plan]
`;
rsum('tilly',5,'Tilly went to see Owen Pryce. You went with her. He cried. She didn\'t.');
rsum('tilly',6,'Four thousand rainbows: Tilly worked out how to flash every badge in the building at once.');
SC.tilly5=`
[bg conops]
~ Con Ops. Tilly marches in with you behind her and stands in front of Owen Pryce's desk with her goggles on her head and her hands in fists.
tilly.n: You signed my badges away. You wrote "designer consulted: NO". You bought me a coffee on Monday and said it was beautiful.
~ Owen looks up. He looks about ten years older than he did on Monday.
owen.d: I'm sorry. Tilly, I'm so sorry. They said it was analytics. They said it would save the con. I'd have lost my house.
tilly.a: Bernard trusted you. He put your name in the credits on the 2014 badge. In the silkscreen. Tiny letters. You were in his badge.
~ Owen puts his face in his hands.
? Let Tilly say everything she needs to
 [fx tilly:10]
 ~ She does. Quietly. Precisely. For four minutes. It's the most devastating thing you've ever heard, and she never raises her voice once.
? "Owen. You can still help fix it."
 [fx tilly:6 skill:2]
 owen.o: How?
 > Tell us what LANTERN-01 does at four o'clock tomorrow. Exactly.
 owen.d: ...It sends the whole graph to 1313. Live. For the signing. At 4:06.
 [flag owen_told_us]
tilly.d: I don't feel better. I thought I would. I just feel sad for him, and then angry at myself for feeling sad for him.
> That's what it feels like to be a good person in a bad week.
tilly.b: ...That's going on a badge. In tiny letters. Somewhere nobody will find it.
`;
SC.tilly6=`
[bg badgelab]
~ The Badge Lab, very late. Tilly is lying on the floor under a table, staring at a schematic taped to the underside of it.
tilly.n: One badge at a time is too slow. Even with Kit's clips and forty volunteers. But I've been thinking about the sponsor firmware. It trusts updates signed with Lumen's key. And it broadcasts every two seconds. And it listens.
tilly.h: It listens! It listens for updates from LANTERN-01. So if something nearby were to sound exactly like LANTERN-01, for long enough to say "update", every badge in range would ask for one.
~ She rolls out from under the table with a badge in each hand.
tilly.n: I can't sign with their key. But I don't need to sign anything. I just need to tell them to reboot, and when they reboot, they check for the oldest firmware they've got, which is mine. Which is Bernard's.
* A rainbow, everywhere, at once. Every dot on Victor's graph going out together.
[game pipe n=3 only=5,10,4 title="Four thousand rainbows"]
tilly.b: It works. In the lab. On twelve badges. Tomorrow, from the AV booth, with a bigger antenna, it'll work on all of them.
[flag counterfw tilly_ready]
`;
rsum('petra',5,'Petra found a tracker on her own car. She knew who put it there, and drove it somewhere very funny.');
rsum('petra',6,'Petra parked her dad\'s Škoda where it would matter on Sunday, and gave you a spare key.');
SC.petra5=`
[bg carpark]
~ Petra's lying under the Škoda on a creeper board, and the swearing coming from under it is in two languages and very creative.
petra.a: Look. LOOK. Magnetic. Under the wheel arch. A tracker. GPS and a SIM card. Someone stuck it on my dad's car.
~ A little black box, the size of a matchbox, with a fat magnet on the back.
petra.n: Since when? Since I followed the Corvid car on Thursday. I'm not subtle. I followed a spy car in a green Škoda with a washing-machine speaker.
? "Take it off. Smash it."
 [fx petra:6]
 petra.s: Smash it? And let them know I found it? No. No, no. Better.
? "Leave it. Use it."
 [fx petra:10 skill:3]
 petra.h: Exactly what I was thinking. You're learning.
~ She takes the tracker and, with enormous care, sticks it to the underside of a laundry van in the service yard that is about to leave for the hotel's commercial laundry forty miles away.
petra.h: Enjoy your weekend in the industrial estate, boys. Very scenic. Lots of towels.
[fx clout:4]
petra.n: Somebody's watching me because I watched them. That's a sentence I never thought I'd say about a car park.
`;
SC.petra6=`
[bg carpark]
~ Saturday night. The Škoda's moved. It's parked, very precisely, across the bottom of the ramp from the service level, where the Corvid car would have to drive out.
petra.n: Tomorrow, if anybody tries to leave quickly with something that isn't theirs, they'll find a 1996 Škoda Felicia with three hundred thousand miles on it and a handbrake I've welded on.
petra.s: The parking attendant thinks I've broken down. I have a very convincing broken-down face.
~ She takes a key off her ring and puts it in your hand.
petra.n: Spare key. If I'm busy, and somebody needs to block something, or get somewhere fast. The clutch is heavy. Talk to it nicely.
? "I'll talk to it like you do."
 [fx petra:10]
 petra.h: In Czech. Swearing. Lovingly.
? "Petra, you're amazing."
 [fx petra:10]
 petra.b: I'm a woman with a car and a grudge against tracking boxes. That's not amazing. That's just Tuesday in Brno.
[flag petra_ready]
`;
rsum('astrid',5,'Astrid called the ground station where she used to work and asked for a favour: ten minutes of sky.');
rsum('astrid',6,'Astrid found Mira\'s rig on the hotel roof from the radio signal alone, and decided not to tell anyone but you.');
SC.astrid5=`
[bg aero]
~ Astrid's on the phone in Swedish, pacing between the telescopes. She hangs up and sits down very suddenly on a crate.
astrid.n: That was Lars. At the ground station. My old one. I haven't spoken to him in two years. I asked him for a favour.
astrid.n: If anyone tried to cut the con's network on Sunday, and someone needed to get a signal out anyway, there's a satellite that passes over at 16:04. Amateur band. For ten minutes. Lars can relay anything it hears to the internet.
astrid.d: He said yes. He said "is this about the thing that got you fired?" I said yes. He said "then yes, twice".
? "You've built us a back door. In space."
 [fx astrid:10]
 astrid.h: A back door in space. Oh, I'm putting that on a T-shirt.
? "Was it hard? Calling him?"
 [fx astrid:10]
 astrid.d: Very. I left without saying goodbye. I was ashamed. He didn't care about that at all. He just asked if I was still listening to the sky.
[flag astrid_slot]
`;
SC.astrid6=`
[bg plantdeck]
~ The hotel roof, at night. Astrid walks across it with a handheld radio and a little directional antenna, sweeping it slowly back and forth like a dowsing rod.
astrid.n: There's something up here talking to a ground station. Not mine. Someone else's. I can hear it handshake every hour, very politely. Look.
~ Behind the big air-con unit, under a tarp: a dish on a tripod, aimed out over the city. A laptop. A battery.
[clue uplinkastrid]
astrid.n: Someone has built a way out of the building that doesn't need the building's network. That's what I'd do. That's exactly what I'd do.
* Mira's rig. Astrid's found Mira's rig by listening to it.
? "I know whose it is. Leave it."
 [fx astrid:8]
 astrid.n: ...Then I'll leave it. Anyone who aims a dish that carefully isn't a villain. Villains are sloppy with their pointing.
? "If both rigs are ready, nobody can cut us off."
 [fx astrid:10 skill:2]
 astrid.h: Two ways out through the sky. Redundancy. That's beautiful. That's very Swedish.
[flag astrid_ready]
`;

/* ============ ROUTES, SCENES 5 AND 6: Yuki, Vesper, Delphine, Noor, Fern, Wren, Pia ============ */
rsum('yuki',5,'Yuki\'s old rival turned up at the arcade. She played him in front of everyone, hands shaking, and didn\'t fall in the pit.');
rsum('yuki',6,'You and Yuki walked the AV booth with the real AV crew, and Yuki found the frame she needed.');
SC.yuki5=`
[bg arcade]
~ A crowd round cabinet three again. In the middle, a tall guy in a backwards cap with a smug, easy smile and a T-shirt with a world-record time printed on it. Nine thirty-eight.
"Rival": Yuki Tanabe! Haven't seen you on stage since, what, the pit? Want a rematch? For old times. Everyone's watching.
~ Yuki's gone pale. Her hands are in her jacket pockets so nobody can see them.
yuki.d: That's him. The record. The one I lost to. In front of two hundred thousand people.
? "You don't have to play him."
 [fx yuki:8]
 yuki.n: ...I know. That's why I'm going to.
? "I'll be right here. Watch me, not the timer."
 [fx yuki:12]
 yuki.b: Watch you. Not the timer. Okay. Okay.
~ She plays. The crowd goes silent. Her hands shake for the first level, steady for the second, and by the third she's not shaking at all. The pit comes up. The frame. She clears it without looking.
~ She doesn't beat his record. She beats his run, though, by a second and a half, live, on the cabinet, and the crowd makes a sound like a stadium.
yuki.h: I didn't fall. I DIDN'T FALL. I was looking at you. You were doing a weird face. It helped.
"Rival": ...Nice run. Really. I mean it.
[fx yuki:6 clout:6]
`;
SC.yuki6=`
[bg hallA]
~ Hall A, Saturday evening, the AV booth. The real AV crew are setting up for Sunday: three tired people in black T-shirts, a lot of cables, and coffee in a bucket.
yuki.h: Hi! I'm a volunteer. This is my... assistant. We're here to learn about matrix switches. For science.
"AV tech": You know about matrix switches? Nobody knows about matrix switches. Come in, come in, look at this beauty.
~ For an hour the AV tech shows you everything: the inputs, the switcher, the backup feed, the emergency slide that says PLEASE STAND BY. Yuki asks the right questions in the right order. She never once mentions the default password. She doesn't need to. She's watching his hands every time he logs in.
yuki.n: Eight frames to switch. Plus the scaler's two frames of lag. Plus the projector's one. Eleven frames. That's under a fifth of a second. I can do a fifth of a second.
"AV tech": You two should be on the crew next year. You've got a feel for it.
? "Maybe we will be."
 [fx yuki:8]
 yuki.b: Next year. On the crew. With you. That's a long-term plan. I don't make long-term plans. I make routes.
? "You're going to be brilliant tomorrow."
 [fx yuki:8]
 yuki.s: Frame-perfect. Or I fall in the pit in front of two thousand people. Either way, you'll be watching.
[flag yuki_ready]
`;
rsum('vesper',5,'Vesper\'s handler called. Together you wrote him the most beautiful, useless report in the history of espionage.');
rsum('vesper',6,'Vesper told you about Lisbon, and the girl who learned to sing to rooms that didn\'t listen.');
SC.vesper5=`
[bg spa]
~ The steam room again, but Vesper's not in a robe. She's in her coat, with a phone in her hand that isn't the one she uses for anything else.
vesper.n: My handler. Halberd. He wants my report on the WHISPER hunt by midnight. He wants names. He wants yours, mostly.
vesper.a: If I send nothing, he'll know I've turned. If I send the truth, you're done. So I need to send something beautiful and completely useless.
? "Let's write it together."
 [fx vesper:10 skill:3]
 ~ You write it in the steam, on her phone, passing it back and forth. A masterpiece. WHISPER is "likely a cell of three operating from the plant room in the convention basement". {h} is "a credulous junior IT worker with no relevant skills, of no further interest". The rig on the roof is "a weather station belonging to the hotel gardener".
 vesper.h: "Credulous junior." Darling, I'm so sorry. It's the cruellest thing I've ever written. It's perfect.
 ~ She sends it. A minute later: "Good work. Proceed." She laughs so hard she has to sit down on the wet bench.
? "Send nothing. Let him wonder."
 [fx vesper:6]
 vesper.d: Silence is a message too, darling. It's the one that says "she's gone". Not yet. Let me be gone on my own terms.
vesper.n: Do you know the strangest thing? I've written a hundred reports on a hundred people. This is the first one I've written about myself. And it's all lies, and it's the most honest thing I've done in years.
`;
SC.vesper6=`
[bg lumenlounge]
~ The Lumen Lounge after closing. Vesper's at the piano bench, not playing, just touching the keys so they don't make a sound.
vesper.n: Lisbon. You asked once. I was eleven. My mother sang in a bar near the river, every night, to tourists who talked over her.
vesper.n: I used to sit under the piano and watch the room while she sang. Who was listening. Who was lying. Who was going to leave without paying. I was very good at it. By twelve I could tell her who'd tip before they'd ordered.
vesper.d: Halberd found me at twenty-two, singing in Paris. A man said, "you watch rooms better than anyone I've ever seen." I thought it was a compliment. It was a job interview.
* A girl under a piano, watching. And people who saw her watching and made it a weapon.
? "You could just sing. Without watching."
 [fx vesper:10]
 vesper.o: I don't know if I can. I've never sung without watching. I don't know what I sound like when I'm not working.
 > Find out.
 ~ She plays. She sings with her eyes closed. She sounds different. Softer, and less perfect, and much better.
? "Your mother would be proud."
 [fx vesper:8]
 vesper.d: My mother would say I'm flat on the high notes. She'd be right.
[flag vesper_ready]
`;
rsum('delphine',5,'Victor called Delphine at 3 AM. She recorded it.');
rsum('delphine',6,'Delphine met Noor Haddad and gave a sworn statement: everything she knew, in her own words.');
SC.delphine5=`
[bg cafe]
~ The café, 8 AM. Delphine looks like she hasn't slept, which she hasn't. She puts a phone on the table between your coffees and presses play.
~ Victor's voice, at 3 AM, warm and tired: "...I don't care what WH1SPER posts, Delphine. Silas handles that. Your job is the apology. Have it ready by four. Make them cry. Make them install."
~ "Make them install." Delphine stops it.
delphine.n: He calls me at three every night before a launch. I've always had my phone record calls. A habit from my first job. Lawyers.
delphine.a: That's the CEO of Lumen telling his head of communications that the head of Trust and Safety is running WH1SPER, and that her job is to write the apology in advance.
? "Delphine, that's everything."
 [fx delphine:10 skill:3]
 delphine.d: That's my career. That's six years. That's every reference I'll ever get.
 > That's the truth.
 delphine.n: ...Yes. It is. That's the problem with the truth. It's always someone's career.
? "Are you safe?"
 [fx delphine:10]
 delphine.o: Safe. Nobody's asked me that at Lumen. People ask if I'm "on brand".
 delphine.d: I've moved hotels. Under my mother's name. I'm learning your opsec. Badly.
[flag delphine_tape]
`;
SC.delphine6=`
[bg library]
~ The hotel library. Delphine and Noor at the reading table, a laptop between them, a fountain pen, a stack of paper. They're getting on terrifyingly well.
noor.n: A sworn statement. Everything you know. Dates. Who said what. Where the documents are. You'll sign it in front of me, and I'll witness it.
delphine.n: I've written four hundred statements in my career. This is the first one that's true.
~ It takes two hours. Delphine dictates; Noor writes; you fetch tea and read every page as it comes off the printer. The apology written on Tuesday. The WH1SPER folder. The 3 AM call. "Source Detection: buyer requirement."
~ At the end, Delphine signs. Her signature is neat and small and her hand doesn't shake at all.
noor.h: That's an insider. Under oath. Do you know how long I've waited for one of these?
delphine.s: Do you know how long I've waited to be one?
? "You two should work together. After."
 [fx delphine:8 noor:4]
 noor.s: She'd be wasted on us. We pay in moral satisfaction.
 delphine.h: I've been paid in money for six years. I'd like to try the other currency.
? "How do you feel?"
 [fx delphine:10]
 delphine.d: Like I've taken off a coat I've been wearing indoors for six years.
[flag delphine_testify delphine_ready]
`;
rsum('noor',5,'You and Noor found the one judge on duty on a Sunday, and the one with a reputation for reading fast.');
rsum('noor',6,'You delivered Noor\'s twelfth letter. This one didn\'t come back.');
SC.noor5=`
[bg library]
~ Noor has a printed list of judges, a highlighter, and the haunted look of a lawyer on a Saturday.
noor.n: An emergency injunction needs a duty judge. There's one on call for the whole region on Sundays. Which one depends on a rota. The rota is not public. The rota is in a building with a very polite receptionist.
noor.a: I've rung four times. She thinks I'm a journalist. I am not a journalist. I'm much worse.
? "Ask her the way Ellie would. Nicely. With a real reason."
 [fx noor:8 skill:2]
 ~ Noor rings again. This time she just tells the truth: an app, ten million people, a launch on Monday, a court order needed before four. The receptionist goes quiet, then says, "Hold, please." Then: "Judge Okonjo. She'll be at home. She reads very fast."
 noor.h: Judge Okonjo. Oh, she's grumpy. She's wonderfully grumpy. She threw out a case of mine once for having a typo in the date. She'll read every word of ours.
? "Can I help with the paperwork?"
 [fx noor:8 skill:4]
 ~ You proofread forty pages for typos in the dates. You find two. Noor kisses the top of your head without thinking, and then goes red, and then pretends it was a legal gesture.
[flag noor_judge]
`;
SC.noor6=`
[bg library]
~ Noor's at the window with the twelfth letter. "Dear Jonah. This month..." Finished, sealed, addressed to the old flat that sends everything back.
noor.d: I post one every month. It comes back every month. I keep them. I don't know why.
if clue('jonahnote')||met('pia')
 > I know someone who can get it to him. His sister. She plays at Central Station.
 noor.o: ...His sister? He has a sister? He never... of course he has a sister.
 ~ You take the train together. Pia's at the piano. Noor gives her the letter, and Pia reads the name on the front and holds it against her chest.
 pia.d: He'll get this on Thursday. I promise. He gets everything on Thursday.
 noor.b: Tell him... no. Don't tell him anything. The letter says it.
 [fx noor:12]
 [flag noor_letter]
else
 ~ You post it with her, in the red box outside the hotel. She stands with her hand on the box for a long time.
 noor.n: One day one of them won't come back. That's the only reason I keep sending them.
 [fx noor:8]
noor.n: Whatever happens tomorrow, I'll be in front of a judge at ten with a folder. If it goes wrong, I'll still be in front of a judge on Monday. And Tuesday.
[flag noor_ready]
`;
rsum('fern',5,'The bees swarmed on the hotel roof. You and Fern caught the swarm in a cardboard box, very slowly.');
rsum('fern',6,'Fern drew you a map of the hotel\'s hidden ways, for Sunday, on the back of a seed packet.');
SC.fern5=`
[bg roof]
~ The roof terrace. Fern's running, which she never does, a cardboard box in her arms and a veil flapping.
fern.n: They've swarmed! Half the hive's left with the old queen. They're on the pool fence. If they go, they'll end up in someone's chimney in the city and get gassed. Help me. Slowly.
~ A swarm: a hanging cluster of bees the size of a rugby ball on the fence, humming like a transformer.
fern.n: They're calm. They're full of honey and they've got no home to defend. Hold the box under. When I shake the fence, they drop in. Don't flinch.
? Hold the box steady
 [game timing kind=pins n=2 mult=0 title="Hold it steady"]
 ~ She shakes. The swarm drops into the box with a soft, heavy sound, like a bag of sugar. A few hundred bees circle your head. You don't flinch. Much.
 fern.h: You didn't flinch! You flinched a tiny bit. That's allowed.
 [fx fern:10]
? "Fern, I'm terrified."
 [fx fern:8]
 fern.n: So are they. Hold it anyway.
 ~ You hold it anyway.
~ Afterwards, the swarm in a new hive by the bamboo, Fern sits on the roof with her knees up, bee-stung once on the thumb, grinning.
fern.n: The old queen left because the hive got too crowded. She took half of them and went to find somewhere new. That's not running away. That's making room.
* You think about Mira. About Vesper. About Bea. About everyone this week who's leaving something to make room.
`;
SC.fern6=`
[bg garden]
~ Fern's on the bench by the olive tree with a seed packet and a pencil. She's drawing on the back of it, very small.
fern.n: Sunday. If someone needed to get from the basement to the thirteenth floor without the main lifts. Or from the library to the roof without anyone seeing.
~ The map: the old ways. The laundry, the service stair, the panel in the mezzanine corridor, the bookcase in the library, the maintenance ladder by the hives. Every door marked with a tiny flower.
fern.n: The architect left them in when they refitted. I think he liked secrets. I think he'd like you.
? "Come with me tomorrow. You know the way."
 [fx fern:10]
 fern.h: I'll be in the garden. Nobody sees the gardener. If you need me, come to the olive tree.
? "Why are you giving me this?"
 [fx fern:10]
 fern.b: Because you held the box. Because you didn't flinch. Mostly.
[flag fern_ready fern_route]
`;
rsum('wren',5,'Wren recorded episode one hundred: "The Thirteenth Floor". You were the guest. You said nothing identifying.');
rsum('wren',6,'Wren\'s sister, the solicitor, agreed to be on the phone on Sunday. Just in case.');
SC.wren5=`
[bg spa]
~ The sauna, switched off, the door propped open. Wren's set up a microphone on a towel and two cups of tea.
wren.h: Episode one hundred! "The Thirteenth Floor". You're my guest. Don't say your name. Don't say anything identifying. I'll call you "the Consultant".
? "The Consultant. I like it."
 [fx wren:8]
? "Is this a good idea? Krall listens to everything."
 [fx wren:6 skill:2]
 wren.n: It goes out on Monday. After. It's not evidence. It's a record. For whoever comes looking in ten years.
~ You record for forty minutes. The trolley. The servers. The man who never says thank you. The deputy chair at 2 AM. She asks good questions. She never asks a single one that would identify you.
wren.n: And what would you say to anyone listening who thinks this is just a story about a hotel?
? "That it's never just a hotel."
 [fx wren:10]
? "Check your apps. Tonight."
 [fx wren:8 skill:2]
wren.h: That's a wrap. That's the best episode I've ever made. Forty-four listeners are going to lose their minds.
`;
SC.wren6=`
[bg pool]
~ Wren's on the phone at the shallow end, pacing in her flip-flops.
wren.n: Yes. Yes. Okay. Love you. Yes, I'm eating. Bye. Bye. BYE.
wren.h: My sister. The solicitor. She's going to be on the phone tomorrow, all afternoon, with her coat on. If anyone gets arrested, or nearly arrested, or looks like they might be, I ring her and she arrives being terrifying.
wren.n: She asked what it was about. I said "a hotel". She said "it's never just a hotel with you".
? "Your sister sounds great."
 [fx wren:8]
 wren.b: She's the best person I know. I pulled her out of a pool once. She's been pulling me out of things ever since.
? "Will you be okay tomorrow?"
 [fx wren:10]
 wren.n: I'll be in the gym. On the running machine. Watching thirteen. I'll see everything. That's my job. I'm good at my job.
[flag wren_ready]
`;
rsum('pia',5,'Pia played the con\'s plaza. Four hundred hackers stopped to listen, and one man with a hood stayed at the back.');
rsum('pia',6,'You helped Jonah record a statement, just in case he couldn\'t stand up on Sunday.');
SC.pia5=`
[bg plaza]
~ The Arrival Plaza, outside the con, in the afternoon. Pia's set up by the coffee cart with her violin, a hand-written sign: "REQUESTS · ANY SONG · INCLUDING THAT ONE".
pia.h: I've never played outside the station. Jonah's not coming to the station now. He's coming here. So I came here.
~ She plays. Bach first, for the commuters in her head. Then something modern, for the hackers. A crowd builds. Two hundred, four hundred. Somebody from the AV crew brings her a little amp.
~ At the back of the crowd, a man in a hood with a backpack. He doesn't come closer. He doesn't need to.
? Request "that one"
 [fx pia:10]
 pia.b: ...Okay. For everyone. Just once.
 ~ Eleven notes. A pause. Eight more. Four hundred people who don't know what it means go very quiet anyway. At the back, the man in the hood puts his hand over his mouth.
? Just listen
 [fx pia:8]
pia.n: Do you know how long it's been since I played to people who stopped? Commuters don't stop. These people stopped.
`;
SC.pia6=`
[bg station]
~ The back of the station café, blinds down. Jonah, with a cheap camera on a tiny tripod pointed at him, and a printed sheet of notes he isn't looking at.
jonah.n: If something happens tomorrow, if they grab me before I get to the stage, I want this to exist. Saoirse said: record it now, with the date, holding today's paper.
~ He holds up today's paper. You press record. For twelve minutes, Jonah Reyes tells the camera what he found three years ago, what Bastion's report said, and what was true.
jonah.d: I didn't steal anything. I read what my employer was building, and I told a journalist, and I was right. And then I hid for eleven months, and my sister played the same song every Thursday so I'd know she was still there.
pia.d: ...
~ You stop the recording. Pia's in the doorway, crying, the good kind. Jonah holds out his hand. She takes it.
? Upload it to three places, none of them the cloud
 [fx pia:10 skill:3]
 [flag jonah_video]
? Give the camera to Pia
 [fx pia:12]
 pia.b: Mine? To keep?
 > If anything happens. You'll know what to do with it.
 [flag jonah_video]
[flag pia_ready jonah_ready]
`;

/* ============ AFTERMATHS (1/2): what happens next, played, for each ending ============
   Each SC.after_<ending> runs at the end of SC.end_<ending>, just before the ending card (hooked in 04n). */
SC.after_disclosure=`
[bg office]
~ THREE WEEKS LATER.
~ A committee room in Westminster, wood panels, green leather, a glass of water nobody trusts. The Digital Affairs Select Committee wants to hear from "a member of the public with relevant experience". You.
"Committee chair": Thank you for coming. We understand you were present for the events at CTRL+ALT+CON. In your own words: how did an app with ten million users get away with this for three years?
? "Because nobody reads the permissions."
 [flag aft_a]
 "Committee chair": That's rather blaming the public, isn't it?
 > No. It's blaming whoever wrote them to be unreadable.
 ~ A murmur. Someone in the press seats writes that down.
? "Because the people who checked it were paid by the people who made it."
 [flag aft_b]
 ~ You name Bastion. You name the audits. You name Graham Pike, who is, at this exact moment, sitting in the second row.
 "Committee chair": Mr Pike, we'll be inviting you to give evidence next week.
? "Because the only people who found out were treated like criminals."
 [flag aft_c]
 ~ You talk about Jonah Reyes. About Rin. About a forum post three years old that only got one reply: "source?"
"MP": And what would you have us do?
? "Make the audits independent."
 ~ It ends up in the committee's report, page eleven, recommendation four, in almost your exact words.
? "Protect the people who report it."
 ~ It ends up in the report too. Recommendation one. Saoirse texts you a photo of the page with a lot of exclamation marks.
~ Outside, on the steps, Marge is waiting in a coat with a hundred badge ribbons pinned to the lapel.
marge.h: You're on the crew. I said. Planning meeting's on Thursday. We're doing a privacy village. You're running it. Don't argue.
? "I'm not qualified."
 marge.s: Nobody's qualified. That's what a village is. Thursday. Bring biscuits. Ellie's, not shop.
? "Only if it's called the Proof Village."
 marge.h: ...Fine. FINE. But you're making the sign.
[sum Aftermath: you gave evidence to a select committee. Next year you're running a village at the con.]
`;
SC.after_half=`
[bg hotel]
~ MONDAY. ROOM 1337.
~ The room's booked for another night. Everyone who's still in the city is crammed in: on the beds, on the floor, on the windowsill. Rin's laptop is open on the desk with a single slide on it: "PAUSED IS NOT CANCELLED".
rin.n: They're waiting for us to get bored. Three months, a rebrand, "SafeSphere Family", and we're back here. So we don't get bored. We pick one crack and we keep hitting it.
~ Three cracks on the whiteboard.
? Hit the auditors: get Bastion's other audits reviewed
 [flag aft_audit]
 ~ For six weeks, the room takes apart every report Graham Pike ever signed. Eleven apps. Nine are fine. Two aren't. One of the two is SafeSphere.
 ~ In February, Bastion's accreditation is suspended "pending review". Without a clean audit, the app stores pull SafeSphere 2's listing.
? Hit the customers: show the insurers what they bought
 [flag aft_ins]
 ~ Priya writes a twelve-page letter to every insurer that ever bought LifeScore data, explaining exactly what they bought and exactly which law it breaks.
 ~ Brindle & Co cancels its contract with Lumen by Christmas. Two more follow. Without the buyers, the data's worth nothing.
? Hit the money: follow Corvid Holdings
 [flag aft_money]
 ~ Saoirse and Noor spend the winter following the money through four countries and a company registered to a post office box in a petrol station.
 ~ The story runs in March. Halberd's board fires the man who signed the term sheet.
~ It's not a front page. It's a long, boring, grinding winter. Nobody makes a film about it.
~ In April, SafeSphere 2 is quietly cancelled.
~ In May, Lumen announces SafeSphere Kids.
rin.d: ...Of course they do.
? "Same time next year?"
 rin.h: Same time next year. We'll bring more.
? "Then we start again tomorrow."
 rin.s: Tomorrow. Room 1337. I'll bring the worms.
[sum Aftermath: a long, grinding winter with Room 1337. SafeSphere 2 was cancelled in April. Then came SafeSphere Kids.]
`;
SC.after_frontpage=`
[bg office]
~ TWO MONTHS LATER. THE HIGH COURT.
~ Lumen sues The Ledger for £40 million. The judge orders Saoirse to name her source. She says no. Then she's asked again, under oath, in front of a full public gallery. You're in the third row.
"Barrister": Ms Quinn, it would be very simple. A name. Was your source an attendee of CTRL+ALT+CON?
saoirse.n: I'm not going to answer that.
"Judge": Ms Quinn, you understand that refusing puts you in contempt of this court.
saoirse.n: I understand, my lady.
~ She looks up at the gallery for exactly half a second. Not at you. Over your head. A professional.
? Stand up. Name yourself.
 [flag aft_named]
 ~ You stand up. The gallery turns. You say your name, and "I was the source", and the barrister drops his pen.
 ~ It's a very bad idea. It's also the end of the case: a source who comes forward voluntarily, with documents, makes a defamation claim collapse.
 ~ Outside, Saoirse grabs you by the coat and shouts at you for ten minutes and then cries into your scarf.
 saoirse.d: I would have gone to prison for you. You IDIOT. You absolute... Thank you.
? Stay seated. Trust her.
 [flag aft_trust]
 ~ You stay seated. It's the hardest thing you've done all year.
 ~ The judge fines her. She doesn't pay. She spends nine days in Bronzefield and writes about it. The piece wins an award she doesn't go to.
 ~ On the tenth day you're outside the gate at seven in the morning with a coffee and a pastry from Proof. She walks out squinting at the light.
 saoirse.h: Source still protected. Notebook still in my sock. Is that a cinnamon knot?
~ In June, Lumen drops the case. In July, Lumen Analytics goes into administration.
[sum Aftermath: Lumen sued The Ledger and the judge ordered Saoirse to name her source. Lumen dropped the case and went under.]
`;
SC.after_injunction=`
[bg office]
~ THREE MONTHS LATER. THE FULL HEARING.
~ Court 14. Noor in her wig, which she claims to hate and has clearly ironed. You're beside her as her "assistant", which means you carry the folders.
~ Delphine is in the witness box for the sixth hour. Lumen's barrister, a silver-haired man who charges by the syllable, smiles at her.
"Barrister": Ms Vos, you were Lumen's head of communications for six years. You've written hundreds of statements that weren't true. Why should this court believe this one is?
~ Delphine falters. Noor's hand goes to her folder, then stops. She can't speak while he's questioning. But you can pass her a note.
? Pass "The apology: drafted Tuesday, posted Sunday. Ask for the metadata."
 [flag aft_note]
 ~ Noor reads it, stands, and asks the court to admit the document metadata. The apology for WH1SPER's "attacks", saved on Lumen's own server on Tuesday at 10:14, five days before there was anything to apologise for.
 "Judge": ...Mr Frobisher. Do you have an explanation for this timestamp?
 "Barrister": I... would need to take instructions, my lady.
 ~ Delphine sits up straighter. She doesn't need to be believed now. The server believes her.
? Pass "She's telling the truth. Let her say why."
 ~ Noor lets it play out. Delphine takes a breath, then looks straight at the barrister.
 delphine.n: Because the others were written for Victor. This one I wrote for me. You can tell the difference. Everyone in this room can tell the difference.
 ~ It's not evidence. It's better than evidence. The judge stops writing and just looks at her.
~ The judgment comes a month later. Forty pages, grumpy, perfect. A permanent injunction. LANTERN is to be destroyed under the supervision of an independent expert, who turns out to be Rin.
~ Noor reads the last page on the steps outside, out loud, to a pigeon.
noor.h: "The court has no hesitation." No hesitation! Do you know how rarely a judge has no hesitation? I'm going to frame it. I'm going to frame the pigeon.
[sum Aftermath: at the full hearing Delphine gave evidence for six hours. A permanent injunction followed, and Rin supervised LANTERN's destruction.]
`;
SC.after_killswitch=`
[bg bakery]
~ ONE WEEK LATER.
~ The news has stopped calling it heroism. A hospital trust says a ward's staff rota app had a SafeSphere library inside it, and went dark for six hours on Sunday night. Nobody was hurt. Everyone keeps saying "but they could have been".
~ You're in Proof at six in the morning when Mira walks in. She's never been inside a shop with you before. She looks terrible.
mira.n: They know it was me. Not publicly. Not yet. A detective called my mother.
mira.d: I can disappear. I've got the money. I've got a passport that isn't mine. Or I can walk into a police station and say "it was me, and here's why", and spend two years explaining a signing key to twelve people who don't own a computer.
ellie.n: ...Do you want a coffee? You look like you need a coffee. Sit. Both of you. Sit.
? "Disappear. You've earned it."
 [flag aft_run]
 mira.o: ...Yes. Maybe. Earned. That's a strange word for it.
 ~ She drinks the coffee. She leaves a folded beer mat under the cup. On it, an address in a country you've never been to, and "in a year, if you still want to know".
? "Hand yourself in. Make them listen."
 [flag aft_trial]
 mira.n: You think they'll listen?
 > I think Noor will make them.
 ~ She hands herself in on Wednesday. At the trial eight months later, Noor defends her. The jury is out for nine hours.
 ~ Guilty, on one count: unauthorised modification of computer material. A suspended sentence. The judge says, "the court notes the defendant's motives, and the absence of any lasting harm." Mira laughs in the dock, once, very loudly.
? "I can't decide this for you."
 mira.s: No. You can't. That's why I came here. You're the only one who wouldn't.
 ~ She drinks the coffee and leaves without saying which. A week later you get a postcard with no stamp and no words, only a drawing of a small key.
[sum Aftermath: the news turned on the kill switch, and Mira had to decide whether to run or face a trial.]
`;
SC.after_ghost=`
[bg garden]
~ FOUR MONTHS LATER. SOMEWHERE NORTH.
~ The cottage has a kettle older than both of you and a garden Mira has failed to grow anything in except one very determined potato.
~ It's raining. Someone knocks at the door. Nobody has ever knocked at the door.
mira.d: Don't move. Back window. The bag's under the sink. Go.
? Go to the back window
 ~ You go. Through the glass, a woman in a cagoule with a walking stick and a soggy map, peering at the house name.
 "Hiker": Hello? Sorry! Is this the way to the falls? I think I've gone wrong!
 ~ Mira opens the door four inches and gives her perfect directions in an accent you've never heard her use. The hiker thanks her and squelches away.
 mira.n: ...I've been waiting for that knock for four months. It was a hiker. I'm going to go and lie on the floor.
? Open the door yourself
 ~ You open it. A woman in a cagoule, lost, looking for the falls. You give her bad directions. Mira gives her good ones, from behind you, then shuts the door and lies on the floor.
~ That night there's a letter in the box at the end of the lane. It's been through three people and a charity shop. Ellie's handwriting, and a croissant drawn in the corner.
~ "I don't know where you are. I'm not asking. Proof has a new oven. It's called {h}. It's temperamental and brilliant. Come home whenever. Love, E."
? Write back, the same way, through three people
 [flag aft_letter]
 mira.s: One letter. Through three people. Paper. No names. ...Yes. Do it. Tell her the potato's name is Victor.
? Keep it. Don't write back.
 mira.d: You can, you know. I wouldn't mind.
 > I know. Not yet.
~ The news found out who sent the update, eventually. It never found out where you went.
[sum Aftermath: four months in a cottage with Mira and a lost hiker at the door. Ellie's letter found you anyway.]
`;
SC.after_double=`
[bg office]
~ ONE YEAR LATER. HALBERD'S LONDON OFFICE.
~ No name on the door. Glass walls that go frosted at the touch of a button. You've been here a year. You've learned to smile at everyone. You've learned which lift has the camera that doesn't work.
~ Vesper drops a file on your desk, smiling, the way she smiles at everyone.
vesper.n: Project LARK. Our client wants to find out who's talking to a journalist at The Ledger. They've asked us to use "pattern of life analysis". It's LANTERN, darling. They've rebuilt it from the bits.
~ The journalist's name is on the first page. Saoirse Quinn.
? Copy the file and get it to Saoirse
 [flag aft_lark]
 vesper.s: Not the copier. The copier counts pages. Photograph it with the old phone, in the stairwell, where the camera doesn't work. One page a day. Eleven days.
 ~ Eleven days. One page a day. In the stairwell. On day nine, the head of security holds the stairwell door open for you and says "after you". Your heart stops. He's just being polite.
 ~ The story runs a month later. "HALBERD SPIED ON JOURNALISTS". Your name isn't in it. Neither is hers.
? Sabotage it from inside
 [flag aft_sabo]
 ~ You're on the analysis team. You make sure the analysis is wrong. Every week for six weeks, the graph says Saoirse's source is a man in Dundee who doesn't exist.
 vesper.h: You're a natural. A dreadful, wonderful liar. I've corrupted you completely.
~ That night, in a bar where nobody knows either of you, Vesper sings, very quietly, to an empty room.
vesper.b: Slowly, darling. Beautifully. For years. ...Or until we're caught. Whichever's first.
? "We won't get caught."
 vesper.s: Everyone gets caught. The trick is to be someone they're glad they caught.
? "Then let's make it beautiful."
 vesper.h: Oh, it will be.
[sum Aftermath: a year inside Halberd. They rebuilt LANTERN as Project LARK and pointed it at Saoirse. You and Vesper broke it from inside.]
`;
SC.after_whistle=`
[bg flat]
~ TUESDAY NIGHT.
~ Victor Hale was arrested this morning. Released on bail this afternoon. At 11 PM your phone rings. Withheld number. You know who it is before you answer.
? Answer it, and record
 [flag aft_rec]
 victor.n: {h}. I'm not going to waste your time. Neither of us has much of it. Everything that happened this week was a misunderstanding I'd like to correct.
 victor.n: Delphine is a troubled woman. You could help her. Say she was confused. Say you saw her with Mira. I could make sure the people who need to forget you, forget you.
 > You're asking me to lie for you. On a recorded line.
 ~ A long silence. Then he hangs up.
 ~ The recording is played at his trial, fourteen months later. The jury hears him say "the people who need to forget you". He's convicted on four counts.
? Don't answer
 ~ It rings out. It rings again. Then a text: "Disappointing." Then nothing.
 * You'll never know what he wanted. You don't need to.
~ Wednesday morning, Delphine's on breakfast television. They've given her six minutes and a sofa, and she gets through all of it without saying "we" once.
~ After, she texts you a photo of the green room: a bowl of fruit and a fridge full of water and, on the wall, a poster for SafeSphere that somebody's crossed out in biro.
delphine.n: I'm writing a book. Noor says I mustn't. My agent says I must. It's called "Approved Messaging". Is that a terrible title?
? "It's perfect."
 delphine.h: It's awful. It's a joke nobody will get. I'm keeping it.
? "Call it 'My Own Words'."
 delphine.o: ...Oh. Oh, that's better. That's much better. I hate you.
[sum Aftermath: Victor rang you on bail and asked you to lie. Delphine went on breakfast TV, then started writing a book.]
`;
SC.after_found=`
[bg station]
~ THE NEXT THURSDAY. CENTRAL STATION.
~ Pia's at the piano. Jonah's standing next to her with his hood down for the first time in a year, holding two coffees and blinking at the departures board like he's never seen one.
jonah.n: It's very loud. I'd forgotten loud. I lived in a storeroom behind a laundrette. Loud was the spin cycle.
~ Commuters walk past. A few stop. One woman stops and stares at Jonah for a long time, then walks up and shakes his hand without saying anything, and leaves.
jonah.d: That keeps happening. I don't know what to do with my face.
~ Jonah pulls an envelope out of his coat. A letterhead you don't recognise: "Lamplight. Independent app auditing. Funded by nobody."
jonah.n: Rin and I are starting something. Audits that nobody can buy. Every report public. We need someone who reads the permissions, and does the opsec, and doesn't get scared on stage.
jonah.s: The pay is terrible. The office is Pia's spare room.
? "I'm in."
 [flag aft_lamp]
 jonah.h: Really? You'll quit Brindle? Your boss Linda?
 > Linda will throw me a party.
 ~ Linda does, in fact, throw you a party. Gary cries. Brindle's "LifeScore" pilot was quietly scrapped in September.
? "Let me think about it."
 jonah.n: Of course. Think properly. It took me a year to think about anything.
 ~ You think about it all the way home. You say yes on Saturday.
 [flag aft_lamp]
~ Pia plays the song she never plays for money. Then she plays it again, faster, as a joke, and Jonah laughs so suddenly he spills the coffee on both of you.
pia.h: Thursday. Every Thursday. That's not a code anymore. That's just the day we have coffee.
[sum Aftermath: Jonah's first Thursday back. He and Rin started Lamplight, an audit shop nobody can buy, and asked you to join.]
`;
SC.after_signal=`
[bg office]
~ SIX WEEKS LATER. THE REGULATOR.
~ Unlicensed broadcasting on amateur bands, interference with a satellite downlink, transmission of "non-amateur content". Astrid has a hearing at the communications regulator, a room with grey carpet and one very bored official.
"Official": Ms Lund, you used an amateur licence to transmit a news broadcast. That's a clear breach. Do you have anything to say?
astrid.n: Yes. I'd like to say it wasn't only me.
~ She hands over a list. Four hundred and twelve call signs. Every amateur radio operator in Europe who heard the broadcast on Sunday and rebroadcast it, on their own licences, at their own risk, before anyone could stop it.
"Official": ...Are you asking us to prosecute four hundred and twelve people?
astrid.s: I'm asking you to decide whether you want to.
? Speak up: "It was a public-interest emergency."
 [flag aft_pi]
 ~ You explain, in plain language, what LANTERN was, and why the microphones were cut. The official stops being bored about halfway through.
? Stay quiet and let the list speak
 ~ The official reads the list, slowly, for a long time. Then she turns over the last page and finds, written in pencil, "and one more: mine". It's her own call sign.
 "Official": ...I was on my allotment shed on Sunday. With the handheld. I heard it.
~ Astrid gets a formal warning and a letter that says, between the lines, "please don't do this again, and also, well done".
~ That night, on the con roof, she gets a QSL card in the post: a postcard from an operator in Finland who heard the broadcast. "Received. 59. Thank you." Then another, from Portugal. Then forty more.
astrid.h: People send these when they hear you. Proof of contact. I've been sending them since I was nine. I've never got this many back.
[sum Aftermath: Astrid faced the regulator with the call signs of 412 radio operators who rebroadcast the evidence. She got off with a warning and a pile of postcards.]
`;

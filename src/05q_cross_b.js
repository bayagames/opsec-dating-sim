/* ============ CROSSOVERS (2/2) ============ */
SC.tilly_x=`
[bg badgelab]
~ The Badge Lab. Someone has taken one of Tilly's badges apart on her own bench, and it isn't Tilly.
if met('ada')
 ada.n: Sorry! Sorry. I just wanted to see how the bootloader worked. It's beautiful. Did you know it's beautiful?
 tilly.a: Of course I know it's beautiful. I made it. Put my oscilloscope DOWN.
 ~ Ada puts it down. Then picks it up again, because she's found something.
 ada.o: The sponsor update. It's signed with a different key. But the bootloader checks the key against a list, and the list has a gap at the end. Like a door somebody left on the latch.
 tilly.d: ...A gap. In my list. I didn't leave a gap.
 ada.n: You didn't. Someone patched it. Look at the date. Last month. After you shipped them.
 * Someone reached into Tilly's work after it left her hands.
 ? "Then someone at the con had the badges before the con."
  tilly.a: Owen. Owen signed for the delivery. Owen had them for a week in Con Ops "for QA".
  [clue badgepatch]
  [fx tilly:6 ada:4 skill:2]
 ? "Tilly, are you okay?"
  tilly.d: No. Someone opened my thing and put their thing inside it. That's... that's a violation. That's what it is.
  ada.n: We'll close it. Together. I'll find every byte they touched.
  [clue badgepatch]
  [fx tilly:6 ada:5]
 [flag badge_rev]
else
 ~ Tilly alone, staring at a hex dump. The sponsor update's signature. Something about the date bothers her.
 tilly.n: It was patched last month. After I shipped them. Someone had them before the con. Who had them before the con?
 [clue badgepatch]
 [fx tilly:5]
tilly.b: I'm glad you're here. People think making things is lonely. It is. But it's less lonely when someone reads the back.
? "I'll always read the back."
 tilly.o: ...Careful. I'll start hiding notes for you specifically.
 [fx tilly:6]
? "Show me what else you've hidden."
 ~ She shows you nine years of tiny notes on nine years of badges. A joke about a printer. A heart. "Somebody, please, notice."
 [fx tilly:6]
`;
SC.petra_x=`
[bg carpark]
~ The car park, level minus one. Petra's car has its bonnet up. Next to it: a satellite dish on a tripod, a roll of cable, and Astrid in a hi-vis vest she clearly stole.
if met('astrid')
 astrid.n: The dish needs twelve volts and a clear view of the south sky. The car park roof has a clear view. Petra's car has twelve volts.
 petra.h: Petra's car has twelve volts, a bad attitude and a tape deck. She's perfect for this.
 ~ They've been planning it for two days without telling anyone: a mobile uplink. If anyone ever cuts the con's network, the van on the roof broadcasts instead.
 ? "Can you get it on the roof?"
  petra.s: The ramp's got a two-metre height limit. The dish is two point one. Watch.
  ~ She lets the tyres down. Drives up the ramp on rims, sparks and all, with Astrid holding the dish and screaming. They get to the roof with a centimetre to spare.
  astrid.h: That was the worst thing I've ever done. I need to do it again.
  [flag van_ready]
  [fx petra:6 astrid:6]
 ? "Test it first. Down here."
  ~ Astrid aims the dish at a concrete pillar and gets, impossibly, a weather satellite. Petra plays it a song from the tape deck. Somewhere over the Atlantic, a satellite receives a cassette of 80s pop.
  [flag van_ready]
  [fx petra:5 astrid:5 skill:2]
 petra.n: If they cut the mics on Sunday, we're the back door. A car and a dish. Nobody ever looks at the car park.
else
 ~ Petra's under the car. "There's a radio girl who keeps looking at my battery like she wants it. Aerospace Village. I'm going to let her have it. I'm a soft touch."
 [fx petra:5]
petra.d: I've never been part of a plan before. I fix things for people's plans. It's nice to be... in one.
? "You're the most important part of this one."
 petra.o: ...Shut up. Okay. Thank you. Shut up.
 [fx petra:6]
? "What do you want, when this is over?"
 petra.n: A road trip. No destination. Somebody in the passenger seat who doesn't touch the radio.
 [fx petra:6]
`;
SC.astrid_x=`
[bg pool]
~ The hotel pool, after hours, under the big glass roof. Astrid's lying on a sun lounger with a radio telescope app on a tablet, looking up.
if met('wren')
 wren.n: You're not supposed to be in here. I'm the lifeguard. I'm off duty. I'm also not supposed to be in here.
 astrid.h: Look up. The glass roof's perfect. No light pollution from the city because the lights are off. You can see Jupiter.
 ~ Wren looks up. Then she lies down on the next lounger. Then she gets out a microphone.
 wren.n: Episode fifty-five. "The Night I Saw Jupiter From A Hotel Pool." Do you mind?
 astrid.s: Only if you put the satellite in. There's one at 23:14. It's always a bit late.
 ? Lie down between them and look up
  ~ The three of you on three loungers. At 23:14 a light crosses the glass. Nobody says anything. Wren doesn't even narrate it.
  [fx astrid:6 wren:5]
 ? "Wren, have you seen anything strange from here? At night?"
  wren.a: Every night. The thirteenth floor. You can see it through the roof, the corner suite. The lights go on at three. A trolley goes up in the service lift at quarter past. I've timed it all week.
  astrid.n: ...You've been watching the suite and I've been watching the sky. Between us we've seen everything.
  [clue trolleytimes]
  [fx wren:5 astrid:4]
 [flag wren_witness]
else
 ~ Astrid alone, looking up. "Jupiter," she says, and points, and you look, and there it is: a small steady light, not a star.
 [fx astrid:5]
astrid.d: I spend all my time listening for things far away. I forget to listen to things that are close.
? "I'm close."
 astrid.o: ...Yes. You are. I've noticed.
 [fx astrid:6]
? "What are you listening for?"
 astrid.n: Someone saying something they mean. Mostly I get weather.
 [fx astrid:5]
`;
SC.yuki_x=`
[bg creator]
~ Creator Corner. Juno has a guest on the stream, and the guest is under the desk.
if met('juno')
 juno.h: Chat, she's here! The speedrunner! She's hiding! Yuki, twelve thousand people want to see you play.
 yuki.d: Twelve thousand. That's sixty times more people than the pit. That's sixty pits.
 ~ Yuki looks at you from under the desk with the face of an animal in headlights.
 ? "Play for me. Not them. Look at me, not the chat."
  ~ She plays. Her hands shake for one level. Then she looks at you, and they stop, and she does the whole route clean. The chat goes so fast it's just colour.
  juno.s: That's the best thing that's ever been on this stream. And I once had a tortoise on.
  [fx yuki:7 juno:4]
 ? "Juno, turn the chat off."
  juno.n: ...Okay. Chat's off. It's just the game.
  ~ It helps. Yuki plays, the stream watches, and nobody types. Afterwards Juno turns the chat back on and the first message, a minute late, just says "thank you".
  [fx yuki:5 juno:5]
 juno.n: Yuki. Sunday. If something happens on stage, would you play something? Anything? Keep the stream busy?
 yuki.a: A distraction. A run. Live. While something else happens. That's... that's the most speedrunner thing I've ever been asked.
 [flag yuki_stream]
else
 ~ Yuki plays the cabinet alone in the arcade, the crowd gone. She does the pit perfectly, three times, and nobody sees but you.
 [fx yuki:5]
yuki.n: I keep thinking about who's watching. Then I look at you and I forget. You're like a pause button.
? "That's a compliment, right?"
 yuki.h: The best one. Pausing is the most powerful thing in a game.
 [fx yuki:6]
? "Then I'll keep pausing you."
 yuki.b: Forever? You can't pause forever. ...Can you?
 [fx yuki:6]
`;
SC.vesper_x=`
[bg grill]
~ The Grill, late. Two women in a booth: Vesper Lane and Delphine Vos, both perfectly made up, both with untouched glasses, both saying absolutely nothing.
if met('delphine')
 delphine.n: You sing at our reception every night. I wrote your introduction. "Brand-aligned". I chose those words.
 vesper.s: I've always wondered who wrote that. It's dreadful.
 delphine.a: You were asking our people questions. At the bar. Nice questions. The kind I'd write for someone who needed to find something out without looking like it.
 ~ Silence. Then Vesper laughs, low and real.
 vesper.n: Darling. We're the same. Two women saying other people's words beautifully. I work for a man in London. You work for a man in Suite 1313.
 delphine.d: ...Halberd. You work for the buyer.
 ? "Both of you. What do you actually want?"
  delphine.n: To stop writing his words.
  vesper.d: To stop singing for anyone who's listening for something else.
  ~ They look at each other. Then, very carefully, Delphine slides her untouched glass across the table to Vesper, and Vesper slides hers back.
  [fx vesper:5 delphine:5]
  [flag vesper_delphine]
 ? "Vesper. Tell her who you report to."
  vesper.a: ...Halberd. Corvid Holdings on paper. A man called Ashgrove. He lands on Friday.
  delphine.o: Then the buyer's already in the building. And Victor doesn't know Halberd has someone inside his own reception.
  [clue buyerinside]
  [flag vesper_delphine]
  [fx vesper:4 delphine:6]
else
 ~ Vesper alone in the booth, with two glasses. She pours one out into the plant. "For a woman I haven't met yet," she says. "Lumen's speechwriter. We'd have a lot to say to each other."
 [fx vesper:5]
vesper.n: Everyone I meet is a mark or a handler. You're the first person in years who's neither.
? "What am I, then?"
 vesper.o: I don't have a word for it. I'm finding that thrilling.
 [fx vesper:6]
? "Maybe you could be neither too."
 vesper.d: ...Careful. That sounds like hope.
 [fx vesper:6]
`;
SC.delphine_x=`
[bg cafe]
~ The Halcyon Café. Delphine is ordering a coffee when Ellie walks in with a box of pastries for the volunteers, and stops dead.
if met('ellie')&&f('ellie_here')
 ellie.a: You. You're... I've seen you. On the Lumen website. You're the one who writes the emails.
 delphine.n: I'm the head of communications. Yes. I approve the emails.
 ellie.d: "Your business account is at risk. Lumen Account Recovery can help." I got that one. After they stole my account. I paid them nine hundred pounds to give me back my own bakery.
 ~ The café goes quiet. Delphine puts the coffee down.
 ? Stand next to Ellie. Say nothing.
  ~ You stand next to Ellie. Delphine looks at you both. For a long time.
  delphine.d: I wrote that email. Not the theft. I didn't know about the theft until this week. But I wrote that email. Every word.
  delphine.n: I'm sorry. That's not enough. It's the first time I've said it to anyone I actually hurt.
  ellie.n: ...Okay. It's not enough. But you said it. To my face. That's more than anyone at Lumen ever did.
  [fx delphine:5 ellie:4]
  [flag delphine_sorry]
 ? "Delphine. Tell her what you told me."
  delphine.n: Lumen Growth Partners runs a scheme. They steal small business accounts, then sell the owners the recovery. I found out on Tuesday. I've got the documents.
  ellie.o: ...You've got proof? Of what they did to me?
  delphine.d: I've got proof of what they did to three thousand of you.
  [clue recoveryscam]
  [flag delphine_sorry]
  [fx delphine:5 ellie:5]
 ellie.n: (later, to you) She looked so tired. I wanted to hate her. I gave her a cinnamon knot. I don't know why.
else
 ~ Delphine takes her coffee to the window and reads, on her phone, an email she approved two years ago. "Lumen Account Recovery can help." Her face does something complicated.
 delphine.n: Three thousand small businesses. I wrote the email. I didn't ask what it was for.
 [clue recoveryscam]
 [fx delphine:5]
delphine.d: I've been thinking about who I'd be if I'd asked. One question. "What is this for?"
? "Ask it now."
 delphine.o: ...What is this for? This. Us. You.
 > I don't know yet. That's the honest answer.
 delphine.h: God. An honest answer. I'd forgotten what they sounded like.
 [fx delphine:6]
? "You're asking now. That counts."
 delphine.b: Does it? Late counts?
 > Late counts.
 [fx delphine:6]
`;
SC.noor_x=`
[bg library]
~ The hotel library. Noor and Saoirse at opposite ends of the reading table, arguing, at volume, in the specific way of people who've argued for fifteen years.
if met('saoirse')
 saoirse.a: A court order takes days! A story takes minutes! By the time your judge reads page one, LANTERN's on ten million phones!
 noor.a: And a story can be denied! Sued! Buried! A court order can't be buried, Saoirse! It's the law!
 ~ They both turn to you at once.
 noor.n: We were at law school together. She dropped out to be a journalist. I've never forgiven her.
 saoirse.s: She stayed in to be a lawyer. I've never forgiven her either. We have dinner every month.
 ? "Do both. Story and court. At the same time."
  ~ They stop. They look at each other. Noor picks up her pen.
  noor.n: ...If the story runs at the moment the order's served, Lumen can't deny it AND can't launch.
  saoirse.h: And if they sue the story, the court's already looking at them. Oh. Oh, that's nasty. I love it.
  [flag press_court]
  [fx noor:6 saoirse:5]
 ? "Who's right?"
  noor.s: I am.
  saoirse.s: I am.
  noor.d: ...We both are. That's the problem. That's always been the problem.
  [fx noor:5 saoirse:5]
 saoirse.n: (to Noor, quietly) You looked happy, this week. For the first time since Jonah.
 noor.o: ...Don't.
else
 ~ Noor alone, drafting two documents side by side: an injunction, and a press release. "In case a journalist ever turns up," she says. "Journalists always turn up. Usually at the wrong moment."
 [fx noor:5]
noor.n: I've spent twelve years arguing for other people. I've never once argued for myself.
? "What would you argue for?"
 noor.o: ...An evening off. A long dinner. Somebody who asks me how I am and waits for the answer.
 > How are you?
 noor.b: ...Tired. Happy. Both. Thank you for waiting.
 [fx noor:6]
? "Argue for yourself now. I'll be the judge."
 noor.h: Objection. Leading the witness. Sustained. Oh, I'm going to enjoy this.
 [fx noor:5]
`;
SC.fern_x=`
[bg plantdeck]
~ The plant deck, 3 AM. Fern's crouched behind the hives with a thermos. Next to her, in a hoodie, with a recorder: Wren.
if met('wren')
 wren.n: Episode forty-one, live. "The Housekeeping Trolley That Wasn't." Part two.
 fern.n: Shh. Quarter past. Watch the service lift.
 ~ At 3:15 exactly, the service lift light comes on. The trolley comes out: two men in housekeeping jackets that don't fit, pushing it towards Suite 1313. No towels. A grey case where the towels should be.
 wren.a: That's not housekeeping. Housekeeping's a woman called Doreen and she's on holiday.
 fern.d: They do it every night. In with the case at quarter past. Out without it at half past.
 ? Photograph the trolley
  ~ You photograph it. The case has a label, the same as the box in the MDF: LANTERN. Different number. Not -01. -02.
  wren.o: There are two of them. There's a SECOND box.
  [clue lantern02]
  [fx fern:5 wren:6 skill:2]
 ? Follow it, quietly
  ~ The three of you follow it down the corridor, Fern leading, past the doors nobody uses. Into 1313. The door shuts. But not before you see the rack inside: a second box, humming.
  [clue lantern02]
  [fx fern:6 wren:5]
 [flag trolley_solved]
else
 ~ Fern alone, behind the hives, watching the service lift. At 3:15 it lights up. "Every night," she says. "A trolley with no towels. Going to 1313."
 [clue trolleytimes]
 [fx fern:5]
fern.n: I've been watching that trolley for a week. I didn't tell anyone because I thought nobody would believe the gardener.
? "I believe you."
 fern.o: ...I know. That's why I told you.
 [fx fern:6]
? "You're the best detective in this hotel."
 fern.h: Second best. Wren's got a podcast.
 [fx fern:5]
`;
SC.wren_x=`
[bg bar]
~ The Hotel Bar, closing time. Wren's set up her microphone on the counter, and Bea's polishing a glass very slowly, which is how Bea says no.
if met('bea')
 wren.h: Episode sixty! "The Bartender Who Sees Everything." Come on. Six years behind this bar. You must have stories.
 bea.s: I have stories. They're called "my regulars' privacy". You'll never hear them.
 wren.n: Okay. Not them. You. What's it like? Watching everyone and nobody watching you?
 ~ Bea stops polishing.
 bea.d: ...Lonely. That's what it's like. I know everyone's drink. Nobody knows mine.
 ? "What's your drink, Bea?"
  bea.o: ...Nobody's ever asked. It's a gin and tonic. Badly made. By someone who isn't me.
  ~ You make it. Badly. Wren records the sound of it being slid across the counter. Bea drinks it and laughs for the first time all week.
  [fx bea:5 wren:5]
 ? "Wren, turn it off. Let her just talk."
  wren.n: ...Off. Done. Just us.
  ~ Bea talks. About Glasgow. About drawing. About a man who sat at the end of this bar every night of the con with a notebook and never once tipped.
  [clue barwatch]
  [fx bea:5 wren:6]
 [flag bea_podcast]
else
 ~ Wren talks into the microphone alone: "Notes for an episode I'll never make. About everyone at this con who's being watched and doesn't know it." She looks at you. "And everyone who knows."
 [fx wren:5]
wren.n: My whole life I've been the one watching. The pool. The podcast. Other people's stories. You're the first person who's ever watched back.
? "Is that okay?"
 wren.o: ...It's terrifying. Keep doing it.
 [fx wren:6]
? "You deserve your own story."
 wren.b: Maybe this is it. Episode one. Season two.
 [fx wren:6]
`;
SC.pia_x=`
[bg station]
~ Central Station. Pia's at the piano. And standing over her, with a ring light on a stick: Juno.
if met('juno')
 juno.h: Twelve thousand people! On my stream! You'd be famous by Friday! Play the song! The sad one! Chat's been asking!
 pia.a: No.
 juno.o: ...No?
 pia.d: That one isn't for twelve thousand people. It's for one. And he's not on your stream.
 ~ Juno lowers the ring light. For a second she looks embarrassed, which you've never seen.
 ? "Juno. Some things aren't content."
  juno.d: ...Yeah. Yeah, I know. I said that to someone this week. I'm bad at remembering it.
  pia.n: Stream something else. Stream the station. People going home. That's nice. Nobody streams that.
  ~ Juno does. Twelve thousand people watch commuters go home for an hour, and it's the calmest the chat's ever been.
  [fx pia:6 juno:4]
  [flag pia_juno]
 ? "Pia. Play something else for them. Something happy."
  pia.s: ...Okay. Happy. For your chat. Not that one.
  ~ She plays something fast and silly and twelve thousand people dance in their bedrooms. At the end, quietly, for one person who isn't there, she plays eleven notes of "that one", and stops.
  [fx pia:5 juno:5]
  [flag pia_juno]
 juno.n: (to you, after) If her brother ever wants to say something on Sunday. To everyone. My stream's his. No chat. No ads. Just his face.
 [flag juno_audience]
else
 ~ Pia plays to the concourse. A man with a hood stands at the back. He leaves a folded note in her case and walks away. She doesn't open it until he's gone.
 pia.n: "Sunday." That's all it says. He's coming on Sunday.
 [fx pia:5]
pia.d: People think busking's begging. It's not. It's asking. "Will you stop? Just for a minute?" Most people don't. You did.
? "I'll always stop for you."
 pia.o: ...Don't say always. People say always and then they get on a train.
 > I'll get off the train.
 pia.b: ...Okay. Okay, that one I'll believe.
 [fx pia:6]
? "What do you ask for, when you play?"
 pia.n: For him to be okay. Every single time.
 [fx pia:5]
`;

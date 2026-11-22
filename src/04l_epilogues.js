/* ============ ROMANCE EPILOGUES: the last night, with the person you found first ============
   Played inside the ending, after the main outcome. Every one is its own short scene with a choice.
   endBad() lets a scene notice when the week went wrong. */
const endBad=()=>!!(S.endK&&ENDINFO[S.endK]&&ENDINFO[S.endK][2]==='bad');
SC.epi_ellie=`
[bg terrace]
~ Much later, Ellie finds you on the hotel terrace with a paper bag. Two cinnamon knots. A tiny croissant drawn on the side in biro, like every bag she's ever handed you.
ellie.b: I worked it out. Why I kept drawing them. It was so you'd keep the bags.
? "I kept every one."
 ellie.h: I know. They're in the drawer by your sink. All forty-one. I counted. I'm not ashamed.
? "I thought you just liked croissants."
 ellie.s: I do like croissants. I like you more. That's the most romantic thing I've ever said, and I said it about a pastry.
if endBad()
 ellie.d: It didn't go how we wanted. I know. But Proof opens at six on Tuesday, and the oven doesn't care who won. Come and fold dough with me. That's a thing we can do right.
else
 ellie.n: Mrs Okafor's going to ask. On Tuesday. "Did you meet anyone at your computer thing?" And I'm going to say, "I went with someone." And she's going to make a noise.
~ She leans on your shoulder. The city's still awake below you. Somewhere in it, a bakery with a new lock, a new password, and a sign in the window that's going back up on Tuesday: WE DO THINGS PROPERLY HERE.
? Take her hand
 ellie.b: ...Properly. Like that.
? Steal a bite of her cinnamon knot
 ellie.h: THIEF. Hacker. I knew it. I'm calling the police. The police is me. You're under arrest. For life.
`;
SC.epi_nyx=`
[bg stairwell]
~ Nyx is where she always is: the fire exit, the stairwell, the place with two ways out. Tonight she's sitting on the step with her picks rolled up beside her, not using them.
nyx.n: I don't do this.
> I know.
nyx.d: No. You don't. I don't stay in places. I get in, I write the report, I leave by the door nobody's watching. Twelve years.
nyx.n: I signed the Lumen contract under a name that isn't mine. I've been in this building six days and I know every door, and the only one I keep walking back to is yours.
? "Then stay a bit."
 nyx.s: A bit. I can do a bit. A bit's a good amount. Nobody gets hurt in a bit.
? "Teach me something. Your last lock of the week."
 ~ She hands you the picks and a little brass padlock. Talks you through it with her hand over yours. It opens. She doesn't take her hand back.
nyx.b: Here's the real secret. The whole job. You don't pick locks. You pick people who trust you enough to stand still while you do it.
~ She takes your hand like picking a lock she already knows the combination to.
`;
SC.epi_ada=`
[bg ctf]
~ The CTF room, empty, scoreboard frozen on the final standings. Ada's on the floor between two desks, a whiteboard marker in her hand, and the whole of the whiteboard is covered in a single, enormous equation.
ada.n: Don't look at it! Okay, look at it. I've been trying to calculate something since Wednesday.
? "What's the answer?"
 ada.b: That's the thing. I kept getting it wrong. I had too many variables. "Is this a distraction." "Am I being weird." "Will I mess it up like I mess up everything that isn't a flag."
 ada.h: Then I took out all the variables that didn't matter, and there was only one left. You. And it's one.
? Pick up a marker and write underneath it
 ~ Under her equation you write "= 1". She stares at it.
 ada.b: That's... that's not even the right notation. That's so wrong. I love it.
ada.n: The probability I'm in love with you is one. Which is a weird number for a probability. It means certain. I've never been certain of anything I couldn't submit.
~ She has to sit down, even though she's already sitting down, which she does by lying down on the carpet. You lie down beside her. The scoreboard glows over you both.
ada.h: Next year we enter as a team. Two people. We'll lose. We'll lose so badly.
`;
SC.epi_priya=`
[bg soc]
~ Priya finds you in the Blue Team Village, the screens all dark, the coffee machine finally switched off.
priya.n: Here. Hold this.
~ She hands you her phone. It's off. Actually, completely off. You didn't know it could be.
priya.d: That's for you. An hour. I'm going to be unreachable for an hour. Nobody on earth can find me. Do you know what that means for a person like me?
? "It means you trust me."
 priya.b: It means I trust you. With my threat model. Which is the most intimate thing I own.
? "Want me to put it in a Faraday bag?"
 priya.h: You'd do that? You carry one? Oh no. Oh no, I'm in so much trouble.
~ For an hour you sit in the dark with her and she tells you things that she's never written down anywhere. Her first job. Her mother's recipes. The time she cried in a server room because the backups had worked.
priya.s: Most people's idea of a date is "share your location with me". You're the first person who's ever made me want to switch it all off.
~ At midnight the phone is still off. At one, it's still off. You stop checking. So does she.
`;
SC.epi_juno=`
[bg creator]
~ Creator Corner, after hours. Juno's ring light is off. The camera's lens cap is on, and there's a sticky note on it that says "NOT TONIGHT".
juno.n: First time in four years I've been somewhere with no cameras. I checked. Twice. I checked the smoke alarm. Don't laugh.
juno.d: Juno's not my name. You know that.
> Do you want me to say it?
juno.o: ...Yes. Say the real one.
~ You do. She closes her eyes like she's hearing a song.
? "It suits you better."
 juno.b: It's a boring name. It's my nan's. It's the only thing I own that nobody else has ever seen.
? "I'll keep it safe."
 juno.h: I know you will. That's why I told you. You're the only person I know who'd never put it in a title.
~ Her phone buzzes forty times. Chat wants to know where she is. She looks at it, then puts it face down, then puts a cushion over it.
juno.s: Let them wonder. Let them make theories. I'm off stream. I'm a person. With a person.
`;
SC.epi_kit=`
[bg ballroom]
~ Kit arrives at the afterparty in full armour, which is a lot of armour, and walks straight to the middle of the dance floor.
~ Then she takes the helmet off. In front of everyone. Four hundred people. For Kit, that's louder than shouting.
kit.b: Hi. It's me. Just me.
? "Hi, just you."
 kit.h: That's my favourite thing anyone's ever called me.
? Take her gauntlet off for her, one finger at a time
 kit.o: You're... oh. You're very good at that. That's a lot of tiny buckles. Most people don't have the patience.
~ Under the armour she's in a black T-shirt with paint on it, her hair stuck down, glitter on her neck from the photo booth.
kit.n: I made that suit to be somebody else. All week I've been building the next one in my head. It doesn't have a helmet. It's just a jacket. With one pocket. Where you can put your hand.
? Put your hand in the imaginary pocket
 kit.h: ...Yep. That's where it goes. I'm going to sew it there. Exactly there.
? "Make one for me too."
 kit.b: Matching? Matching. Oh, I'm going to make us so embarrassing.
`;
SC.epi_rin=`
[bg chill]
~ The chill-out zone, two beanbags, one bag of gummy worms. Rin's in his oversized hoodie with the sleeves over his hands and his feet tucked under him.
rin.n: Last one. I saved it. All week.
~ He offers you the last gummy worm. Then he takes it back, bites it in half, and gives you half.
rin.h: That's how you know it's serious. I don't share worms.
if endBad()
 rin.d: They're going to say we lost. I've had a year of people saying that. It's fine. The report still exists. The truth doesn't expire.
else
 rin.s: Three years. I wrote that report three years ago and nobody believed it. Tonight four thousand people read it. And the one I wanted to read it first was you.
? "You did that. You stood up."
 rin.b: I was shaking the whole time. You saw. My voice went up like eight keys.
 > You sounded brave.
 rin.o: ...Say it again. No. Don't. I'll cry on my hoodie.
? "Your nails are still chipped from the stage."
 rin.h: I was picking at them! It's a nervous thing! You're not supposed to notice that.
 > I notice everything about you.
 rin.b: That's opsec talk. That's terrifying. Keep doing it.
~ He leans on you. The beanbag makes a terrible noise. Neither of you moves.
`;
SC.epi_bea=`
[bg bar]
~ Bea's off shift. She's never off shift. She's sitting at the end of the bar, on the wrong side of it, a sketchbook in her lap, and she's been drawing you since you walked in.
bea.s: Hold still. You're ruining it.
? Hold very still
 ~ You hold still. She draws. You've never been looked at like this, carefully, for a long time, like you're worth getting right.
? Steal a look at the sketchbook
 bea.h: Oi! That's a work in progress! Like you.
~ The page: you, at the bar, on Monday night, the first time. You, on the roof, with a notebook. You, asleep on a bench in the lobby on Thursday, mouth open. Twenty little drawings.
bea.n: Six years behind this bar. I've drawn everyone who ever sat on that stool. Nobody ever came back for the drawing.
bea.b: I applied for the art course. In Glasgow. The one I said I'd never do. I sent it at four this afternoon, when everything was happening, because I thought, if today's the day everything changes...
? "You're going to get in."
 bea.s: You don't know that.
 > I know you.
? "Glasgow's not far. Trains exist."
 bea.h: Trains. Yeah. You'd come? To see me be a student? With paint on me?
 > I'd come for the paint.
~ She tears the drawing out, the one from Monday, and hands it to you. On the back, in pencil: "come back for this".
`;
SC.epi_mira=`
[bg roof]
~ Mira doesn't come to the party. You knew she wouldn't.
~ When you go up to the roof at one in the morning, she's there, at the edge by the rig, the antenna dismantled and packed in a bag at her feet. For once there's no laptop at all.
mira.n: WHISPER's gone. I deleted everything. Every account, every key but one. Three years of my life in one keystroke.
mira.d: I thought I'd feel free. I mostly feel like I've forgotten how to have hands.
? Hold out yours
 mira.o: ...That's very obvious. That's the most obvious thing anyone's ever done to me. Okay.
 ~ She takes it. Her fingers are cold and her grip is much stronger than you expected.
? "What's the key you didn't delete?"
 mira.s: The one that opens my old flat. A real one. Brass. I'm going to go back there. I'm going to buy a plant. I'm going to forget my passwords.
mira.n: You were the only one who never asked me who I was. You just asked what I wanted.
? "What do you want?"
 mira.b: Sleep. Toast. A name that's just mine. And this. Whatever this is. With no plan behind it.
? Say nothing. Stay.
 ~ You stay. The city doesn't know you're there. For the first time in three years, nothing on earth is watching her.
`;
SC.epi_saoirse=`
[bg press]
~ The press room, 11:58 PM. Saoirse files her last story of the week, presses send, and closes the laptop. She looks at it for a while, as if it might reopen itself.
saoirse.n: Done. Six years of chasing Lumen. Four thousand words. Three lawyers. One source who'll never be named.
saoirse.s: Off the record?
? "Off the record."
 ~ She kisses you. It's very quick and very sure.
 saoirse.h: Don't print that.
? "On the record. I want it in writing."
 saoirse.b: You cheeky... Fine. "Source confirms." There. That's the most I've ever written about myself.
 ~ She kisses you anyway.
saoirse.n: I've spent my whole career learning not to need anybody. People are sources, or they're subjects, or they're liabilities. You were all three. And I still couldn't stay away.
? "What happens to us after?"
 saoirse.d: I'll be in court for a year. Lumen will sue everyone. I'll get no sleep. I'll be a nightmare.
 > I've met you. I know.
 saoirse.h: Good. Then you can't say I didn't warn you.
? "Let's get chips."
 saoirse.h: At midnight? On a Sunday? With a story out? ...Yes. God, yes. The ones with the curry sauce.
`;
SC.epi_sunny=`
[bg noc]
~ The NOC, after midnight. One screen still on: the con's network map, every switch green. Sunny reaches over and turns her radio off. Actually off. The light goes dark.
sunny.n: The network can manage for one hour. I built it so it could. I've never once let it.
? "What do you do with an hour?"
 sunny.h: I genuinely don't know. Normal people... watch things? Eat things? I've forgotten. Tell me what normal people do.
 > They sit with someone they like.
 sunny.b: Oh. That's it? That's easy. I can do that.
? "I'll watch the map. You rest."
 sunny.o: Nobody's ever offered to watch the map. Nobody ever even sees the map.
~ She sits next to you on the floor under the desk, where the fans are warm, and she's asleep in about four minutes, on your shoulder.
~ At 1:17 a switch on Level 2 goes amber. You look at it. You look at her. The switch goes green again on its own, because she built it to.
* She'll never know. You'll never tell her. That's the job.
`;
SC.epi_tilly=`
[bg badgelab]
~ The Badge Lab, quiet, the reflow oven cooling. Tilly's at her bench with a magnifier and one last badge, tiny tweezers, the tip of her tongue showing.
tilly.n: Don't look yet. Two more joints. One more. There.
~ She presses it into your hand. Not blue. A tiny rainbow running round its edge, the LEDs taking turns, softly.
tilly.b: Turn it over.
~ On the back, in her tiny writing, scratched into the solder mask: "for {h}, who read the back".
? "You made this tonight?"
 tilly.h: I made it on Thursday. After you read the back of my real one. Nobody reads the back. I've been hiding notes on the backs of badges for nine years.
? Put it on
 tilly.o: You're... wearing it. Like, now. In public. Okay. That's. Okay.
tilly.n: Next year I'm designing the badge again. My firmware. My art. No sponsor. And there's going to be a hidden mode, and you only unlock it if you're standing next to the one badge that's paired with yours.
? "Whose badge is it paired with?"
 tilly.b: ...Mine. Obviously. Don't make me say it with my mouth. I said it with solder.
`;
SC.epi_petra=`
[bg carpark]
~ Petra drives you to the top of the car park in a car held together with love and cable ties. Engine off. Handbrake on, with a noise. City lights all the way to the sea.
petra.n: I practised this. Out loud. To the car. She was very supportive.
? "Go on, then."
 petra.b: Okay. Right. Okay. The thing is. I fix things. That's what I'm for. I find the broken part and I swap it.
 petra.n: And all week I kept waiting for you to be a broken part. Something I'd need to fix to make it work. And you just... weren't. You were the bit that already worked.
? "Was that the speech?"
 petra.h: That was the speech! I had a better version! The car liked the other version!
~ The car radio comes on by itself. She bought it as scrap. It only gets one station, which only plays songs from before you were born.
petra.s: It does that. It's got a short somewhere. I've never fixed it. I like it.
? "Don't ever fix it."
 petra.b: Never. Same as you.
? Turn it up
 ~ You turn it up. She sings along, badly, every word, with her feet on the dashboard.
`;
SC.epi_astrid=`
[bg conroof]
~ Astrid takes you up to the con roof. The dish is still there, aimed at nothing now, the cables coiled neatly. She's brought a flask and two folding chairs.
astrid.n: There's a satellite going over at 23:51. I've asked it to take our picture.
? "Can it do that?"
 astrid.h: No. It's a weather satellite. It takes pictures of clouds. But we'll be in it. Too small to see. Two pixels. Maybe a quarter of a pixel.
? "Will it say yes?"
 astrid.s: Satellites don't say anything. You just have to trust they're there.
~ At 23:51 a very faint light crosses the sky, from west to east, slow and steady. She points. You both wave at it like idiots.
astrid.b: When I was nine, I used to lie in the garden and wave at the space station. My dad said nobody up there could see me. I kept doing it.
astrid.n: All week I've been talking to the sky. You're the first thing that ever answered.
? Take her cold hand in yours
 astrid.o: You're warm. Radio people are always cold. We stand on roofs.
? "Same time tomorrow?"
 astrid.h: It goes over again at 00:33 on Monday. I've already worked it out. I worked it out on Wednesday.
`;
SC.epi_yuki=`
[bg arcade]
~ The Retro Arcade, the main lights off, the cabinets glowing. Yuki's at the two-player fighting game in the corner, holding out player two's controller.
yuki.h: First to three. Loser buys breakfast. Winner also buys breakfast because I don't actually have any money.
? Play properly
 ~ You lose the first two in about nine seconds each. The third, she does something with her thumb you can't see, and her character walks into yours and falls over.
 yuki.s: Oh no. A glitch. A terrible, terrible glitch. You win, I guess.
? Mash buttons
 ~ You mash. It works horribly well. You win a round. She is outraged.
 yuki.h: That's not a strategy! That's a weather event!
~ She lets you win the last one. She will deny this forever.
yuki.n: I used to think the best thing in the world was a route nobody else could find. A perfect line. No mistakes.
yuki.b: Then I did my run with you watching and I made two mistakes, and it was the best run of my life. I don't think the route was the point.
? "What's the point?"
 yuki.h: Who's on the other controller.
? "Rematch?"
 yuki.s: Every day. Forever. I'm keeping score.
`;
SC.epi_vesper=`
[bg lumenlounge]
~ After the party, the Lumen Lounge is empty. Vesper sits at the piano and sings one more song, very quietly, to the room.
~ There's no earpiece. You check. She sees you check, and she smiles, and takes her hair down so you can see her ears.
vesper.s: Nobody's listening, darling. Only you. I've never sung to only one person in my life.
? "What will you tell Halberd?"
 vesper.n: That their asset went quiet. They lose people all the time. They'll write me off by Friday. It's the kindest thing they'll ever do.
? "Sing it again."
 vesper.b: Greedy. ...Yes. All right.
 ~ She sings it again. It's not a song you know. She's making it up as she goes, and halfway through you realise it's about you.
vesper.n: I came here to find WHISPER through you. I wrote it in a report. "Target is credulous." And then I sat in this room and watched you protect every single person you met, and none of them had any idea.
vesper.d: I'm out of practice at being nobody. Will you help me?
? "We'll start with breakfast. Under your real name."
 vesper.o: My real name. It's dreadful. You'll laugh.
 > Try me.
 ~ She whispers it. You don't laugh. She sings the next verse with it in.
? "You were never nobody."
 vesper.b: ...There. That's the line I'd have written. Damn you.
`;
SC.epi_delphine=`
[bg grill]
~ The Grill, after midnight. Delphine takes her hair down and leaves the Lumen lanyard on the bar, next to an untouched glass of wine.
delphine.n: I've been to four hundred of these. I've never once said anything I meant at one.
? "Say something now."
 delphine.d: Something I mean. Okay. I'm terrified. I don't have a job. I don't know who I am without a brief. My mother will ask what happened, and I'll have to tell her I set my career on fire in front of two thousand people.
 delphine.h: And I've never felt this well in my life. All at the same time.
? "Shall I write you a speech?"
 delphine.h: Oh, would you? Something with a pause in it. I love a pause.
 > No. Say it yourself.
 delphine.s: ...Cruel. Correct. Fine.
delphine.n: You're the first person all week who didn't want something from me. Everyone wanted the press release. You wanted me to stop writing them.
? "What will you do now?"
 delphine.b: Noor says the charity needs a communications person. Pays nothing. All true. Imagine. Writing only true things. I might be terrible at it.
? Take her hand across the bar
 delphine.o: That's not on brand.
 > Good.
~ She says something she means. It's three words long, and nobody's ever going to see a draft of it.
`;
SC.epi_noor=`
[bg library]
~ The hotel library. Noor caps her fountain pen and puts it in its case and closes the case, very deliberately, like a judge putting away a gavel.
noor.n: No more paperwork tonight. Just this.
~ She means you.
? "What's this?"
 noor.s: I don't have a word for it. I have words for everything. Tort, injunction, estoppel. Nothing for you. It's very irritating.
? Sit with her by the window
 ~ The window that she posted letters from. The red post box below, with the street light on it.
noor.d: I've written to Jonah every month for a year and every letter came back. I thought I'd become the sort of person who writes to people who never answer.
if f('noor_letter')
 noor.h: He wrote back. This afternoon. Pia gave me the envelope. One line. "Thank you for never stopping." I've read it eleven times.
else
 noor.n: Maybe one day one will stay gone. Maybe that's what tonight is.
noor.n: You answered. Every time. Every stupid question at two in the morning about precedent. You never once made me feel like too much.
? "You're exactly enough."
 noor.b: That's not a legal standard. That's... I'm going to have that engraved on something.
? "Write me a letter."
 noor.o: To you? You're right here.
 > I'll answer it anyway.
`;
SC.epi_fern=`
[bg garden]
~ Fern takes you out into the Halcyon garden among the little lights strung through the olive tree, and shows you where the purple beans are going to go next spring.
fern.n: Here. And the squash there, so it can climb. And the bees will come over the wall from the roof at about ten every morning, if it's warm.
~ Then she stops showing you things and just stands there with you, dirt on her knees, a single bee asleep on her sleeve.
? "Is it okay that it's on you?"
 fern.h: She's tired. Big day. She's allowed. So am I.
? Brush a leaf out of her hair
 fern.o: Oh. You found my leaf. I keep one there, in case. No I don't. I didn't know it was there.
fern.n: Nobody sees the gardener. That's the job. You fix the soil and you go home and nobody ever says "the soil's lovely today".
fern.b: You saw me. On Monday. You said "the bamboo's in the wrong place". It was in the wrong place! I'd been saying it for two years!
? "Stay out here a while?"
 fern.s: Until the sprinklers. They come on at two. I'll give you a two-minute warning. One-minute warning. No warning. That's what you get.
? "Can I help you plant the beans?"
 fern.h: In March. Gloves on. You'll be terrible at it. You'll be my favourite.
`;
SC.epi_wren=`
[bg pool]
~ The pool, after midnight, the underwater lights still on. Wren's sitting at the edge with her feet in the water, her phone in a plastic bag, the podcast mic packed away.
~ Then, without warning, she drops in fully clothed. She comes up laughing and looks up at you from the water.
wren.h: Lifeguard's off duty. You're on your own.
? Jump in
 ~ You jump in. It's colder than it looks. She cheers like you've won a medal.
? Sit on the edge and put your feet in
 wren.s: Coward. Sensible. Both. I like both.
wren.n: Episode one hundred goes out on Monday. "The Thirteenth Floor". Forty-four listeners. One guest. "The Consultant". My sister says it's my best one.
wren.b: The secret is, every true-crime podcast is about a mystery. Mine was always "why can't I stop watching other people's lives". And this week I worked it out. I was waiting for one of them to be mine.
? "This one's yours."
 wren.h: Don't! I'll put it in the outro! I'll put it in the outro and you'll hear it and you'll die!
? Float on your back next to her
 ~ You both float, looking up at the glass roof and the dark sky behind it. Neither of you says anything for a long time. It's the best episode of all.
`;
SC.epi_pia=`
[bg station]
~ Central Station, nearly empty, after midnight. Pia's piano, the public one in the middle of the concourse, under the departures board.
~ She plays you "that one". The song she never plays for money. It's short, and a bit sad, and on the last note the board above you clicks over to the morning trains.
pia.n: That's the song our mum used to sing in the car. Jonah's song. For a year, it meant "I'm still here". Every Thursday.
if f('jonah_video')||S.endK==='found'
 pia.b: He's sleeping at mine tonight. On the sofa. He snores. I forgot he snores. I'm so happy I could scream.
else
 pia.d: He's still out there. But he knows I'm here. And now someone else does too.
? "Play it again?"
 pia.s: No. I've played it enough. I want to play something new. Something that means "and then something good happened".
 ~ She plays something new. You've never heard it, because she's writing it right now, looking at you.
? Sit on the bench next to her
 ~ You sit next to her. She shows you where to put your hands, which keys. You play the bottom two notes over and over while she plays everything else, and it sounds wonderful, and it's mostly her.
pia.h: Next Thursday you have to come and turn pages. That's the deal. That's the price of the song.
`;

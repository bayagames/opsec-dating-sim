/* ============ ROUTES: JUNO, KIT ============ */
SC.juno0=`
[bg creator]
~ Creator Corner, upstairs on Village Row. Ring lights, green screens, a wall of little booths where streamers broadcast the con to people who couldn't come. The loudest booth has pink LED strips, a cat-ear headset and a girl with pink twin-tails talking very fast to a camera.
juno.h: CHAT. Chat. Chat, listen. A real hacker just walked past my booth. In the wild. Should I talk to him? Chat says talk to him. Chat is unhinged. Hi!
~ She waves at you. On her monitor, a river of messages scrolls past faster than you can read. Fifty thousand viewers, says the counter.
juno.h: Hi! I'm Juno. CyberJuno. I stream tech stuff for people who think tech stuff is scary. Can I interview you? Thirty seconds. Chat wants to know what a real hacker looks like.
? "Sure. Thirty seconds."
 [fx juno:6 clout:4]
 ~ She points the camera at you. Fifty thousand people. You manage a sentence about passwords. Chat seems to like it. Somebody types "he's cute tho".
? "I'd rather not be on camera."
 [fx juno:4 skill:2]
 juno.o: Ooh. Camera-shy. Mysterious. Chat, he said no. Respect the no!
 juno.n: Smart, honestly. Half of chat could find your house from your shoes.
? "What makes you think I'm a real hacker?"
 [fx juno:5]
 juno.s: You walked past a ring light without looking at yourself in it. Only two kinds of people do that. Hackers and spies. Which are you?
juno.n: Come back later, if you want. I'm here all week. My chat needs someone who knows what they're talking about. I mostly don't.
juno.d: ...Off camera, I mean. I don't mostly not know. I just pretend I don't. It's good for numbers. Forget I said that.
`;
SC.juno1=`
[bg creator]
juno.h: You came back! Okay. Okay. Big ask. Will you come on stream? Properly. Ten minutes. A "real hacker explains" segment. The numbers would be insane.
* Fifty thousand people watching. Everything you say, recorded forever, clipped, shared, searched.
? "Okay. But I'll be careful what I say."
 [fx juno:6 clout:6]
 ~ The light goes red. Ten minutes. You explain phishing, password managers, two-factor. You're good at it, surprisingly. Chat types "W" a lot, which Juno says is good.
 juno.h: And where are you from? Chat's asking!
 ? "Somewhere with rain." Deflect.
  [fx juno:4 skill:3]
  juno.s: Ooh, smooth. Chat, he deflected! That's opsec! That's what opsec looks like! Clip it!
 ? Tell them your hometown. It's just a town.
  [fx clout:5 foot:10]
  [flag leak_hometown]
  ~ You say the name of the town. Chat types it back at you three hundred times. Somebody posts a map.
  * It's just a town. Your town. With your old school in it, and your mum's house, and the corner shop that knows your name.
? "No camera. But I'll help you write a segment you can do yourself."
 [fx juno:8 skill:4]
 juno.o: You'd... help me be good at it? Instead of being in it?
 > You'd explain it better. People trust you. They don't know me.
 juno.b: ...Nobody's ever wanted me to be better at it. They just want to be in it.
 ~ You write it together on a napkin. She does it live an hour later, and it's brilliant, and she keeps glancing at you off camera like she's checking you're still there.
~ Afterwards, with the light off, she sits on the edge of her booth table and pulls off the cat ears.
juno.n: You know what's funny? I've got fifty thousand people watching me every day, and I eat lunch on my own in a hotel room.
juno.d: Chat isn't friends. Chat's... weather. Lovely weather sometimes. But you can't have a coffee with weather.
`;
SC.juno2=`
[bg creator]
~ Juno's booth is dark. She's sitting behind it on the floor with a tablet and an expression you haven't seen on her before: not performing.
juno.n: Hey. Can I show you something? Off stream. Off everything.
~ The tablet: a contract. "LUMEN ANALYTICS · CREATOR PARTNERSHIP · CyberJuno". Twenty pages. She's highlighted things in pink.
juno.n: They pay me more than everything else together. I just have to say SafeSphere "never collects personal data" in every stream. Every single one. They gave me the exact sentence.
juno.d: I didn't read it properly. I'm reading it now. Clause nine. "Creator will not discuss, criticise or reference security research relating to Partner's products." I can't even say WHISPER's name on stream.
* Fifty thousand people who trust her, being told a sentence somebody else wrote.
juno.n: And there's something else. Monday night. I was streaming from the Promenade, by the stairwell. Look at the background.
~ She scrubs back through the VOD. In the corner of the frame, behind her shoulder, blurred: a woman with long silver hair, kneeling by the router cupboard in the stairwell, unplugging something.
[clue vod]
juno.o: I didn't notice. I was doing a bit about hotel breakfast. Chat noticed. One person in chat. They typed "who's the ghost?". I ignored it.
? "Delete the VOD. If Lumen sees it, they'll find her."
 [fx juno:8 skill:3]
 juno.n: ...You're protecting whoever that is. WHISPER.
 > Whoever it is, Lumen's hunting them. And Lumen's paying you.
 juno.d: Right. Right. Okay. Deleting.
 [flag vod_deleted]
? "Keep it. It's evidence."
 [fx juno:4 skill:2]
 juno.n: Evidence of what?
 > I don't know yet. That's why you keep it.
juno.a: I hate this. I hate that I said that sentence two hundred times. "Never collects personal data." My chat's full of kids. Kids installed it because I said it.
`;
SC.juno3=`
[bg arcade]
~ The Retro Arcade, upstairs. Old cabinets humming, the smell of warm plastic and dust. Juno's on a two-player cabinet with her twin-tails tucked into her hoodie, no cat ears, no ring light. You almost walk past her.
juno.n: Hey. Play with me. I'm terrible. Let me be terrible at something with nobody watching.
~ You play. She is terrible. You are worse. She laughs, properly, not the stream laugh. It's lower. It snorts at the end.
juno.n: Can I tell you something nobody knows? Not chat. Not my sponsors. Not my mum, actually, my mum thinks I'm a receptionist.
juno.n: My name's not Juno. It's June. June Halloran. I made up Juno at seventeen because June sounded like someone's aunt and Juno sounded like someone who'd matter.
juno.d: And then fifty thousand people loved Juno. And I'm still June. And June eats lunch on her own.
* She's telling you her real name. In an arcade. At a con full of people who'd collect it like a flag.
? "Hi, June."
 [fx juno:12]
 juno.o: ...Nobody calls me that. Say it again.
 > June.
 juno.b: Okay. Okay. That's... a lot. That's a good lot.
? "I'll never say it on camera."
 [fx juno:10 skill:2]
 juno.h: I know. That's why I told you. You're the only person I've met this week who'd never say it on camera.
? "Juno's great. But I'd rather have lunch with June."
 [fx juno:12]
 juno.b: You're terrible at this game and you're good at this. That's annoying.
~ She plays one more round and, somehow, wins.
juno.h: I WON. June won! Not Juno! June!
`;
SC.juno4=`
[bg creator]
~ The red light's on. Fifty-two thousand viewers. Juno's in full cat ears and LEDs, but her hands are shaking. She asked you to be here, just off camera, where she can see you.
juno.n: Okay, chat. Serious one. I've got to tell you something, and I've got to say it in my own words, because for six months I've been saying somebody else's.
juno.n: I've been sponsored by Lumen. You know that. I said SafeSphere "never collects personal data". I said it two hundred times. It wasn't true. I didn't check. I should have checked.
juno.d: If you installed it because of me, I'm sorry. Here's how to uninstall it. Here's how to check what it took. Here's someone who knows more than me explaining it properly.
~ She puts up a link to Ada's verification page. Then she reads Clause Nine of her own contract out loud, on stream, line by line.
juno.a: I'm ending the partnership. Today. Now. They'll probably sue me. I don't care. My chat's got kids in it.
~ Chat goes silent. Then it explodes. Not anger. Hearts. Thousands of them.
~ She turns the camera off in the middle of it, and turns to you, and bursts into tears.
juno.d: I did it. I did it. I've lost two-thirds of my income. I did it.
? Hug her
 [fx juno:12]
 ~ She cries into your shoulder for a while. Somewhere a notification keeps going ding. She doesn't look at it.
? "You just did the bravest thing anyone's done all week."
 [fx juno:10]
 juno.b: Braver than WHISPER?
 > WHISPER wears a mask. You took yours off.
 juno.h: ...Oh, that's good. Can I use that? I'm not going to use that. That's ours.
[flag juno_dropped]
`;
SC.juno5=`
[bg skygarden]
~ The Sky Garden on the con's upper level. Glass roof, real trees in planters, night outside the glass and the city lit up below. It's almost empty. Juno's on a bench, in a plain grey hoodie, no make-up, no ears, hair down.
~ No phone in her hand. You've never seen her without a phone in her hand.
juno.n: Hi. It's June. Just June. No chat. No camera. I left my phone in my room. Is that how normal people live? It's terrifying.
~ You sit down next to her. Through the glass, the Lumen logo turns on the roof across the courtyard.
juno.n: I've been thinking. Everyone I've ever had a crush on, I've had it in front of fifty thousand people. I'd mention them on stream. Chat would ship us. It'd be content.
juno.d: I don't want you to be content. I want you to be... private. Mine. Not chat's.
? "Then I'm not content. I'm June's."
 [fx juno:15]
 juno.b: That's so cheesy. Say it again.
? "What would you tell chat about me?"
 [fx juno:10]
 juno.h: Nothing. That's the point. That's the best part. For once there's something I'm never going to tell them.
? Kiss her
 [fx juno:15]
 ~ There's no ring light. Nobody clips it. Nobody ever will. That's what makes it real.
juno.n: Can I tell you a secret? The last secret. I don't actually like pink. I like green. Dark green. Like a forest.
> I'll never tell.
juno.h: I know. That's why I love you. Oh. Oh, I said it. Off camera and everything.
`;
SC.kit0=`
[bg cosplay]
[call S.f.kit_armour=1]
~ The Cosplay Hall: armour, wings, a person dressed as a sentient vending machine. In the middle of it all, a figure in glowing cyan armour with a visor, a huge foam sword and a neon ponytail is posing for a queue of photographers.
~ Between photos, the visor turns towards you.
kit.n: You're staring. Is it the sword? Everyone stares at the sword. It's foam. It's mostly foam. Forty per cent glue.
? "It's incredible. You made all of this?"
 [fx kit:8]
 kit.h: Every piece. Foam, resin, thermoplastic, LEDs, two hundred hours and one minor burn. Okay, eleven minor burns.
? "Who are you supposed to be?"
 [fx kit:5]
 kit.n: Vex. From Static Bloom. The anime. Season two, episode nine, the bit where she hacks the city's power grid with a sword. It doesn't make sense. It's perfect.
? "Can I take a photo?"
 [fx kit:4]
 kit.s: Sure! Just... don't post it with location on. Long story.
kit.n: Kit. I'm a maker. I build things. Usually costumes. Sometimes robots. Once a toaster that tweets, which I regret.
kit.b: Sorry, I'm talking a lot. I talk a lot in the armour. Out of the armour I'm... less. Come to the Hardware Hacking Village sometime. I run the soldering table in the mornings.
`;
SC.kit1=`
[bg hwv]
[call S.f.kit_armour=0]
~ The Hardware Hacking Village. Long benches, soldering irons, the sweet pine smell of flux, and Kit, in jeans and a T-shirt with a circuit board printed on it, freckles, short dark hair. You'd have walked straight past her.
kit.h: You came! You recognised me! Nobody recognises me out of the armour. Sit. Today you're making a blinky.
> A blinky?
kit.n: A little circuit. An LED, a battery, a chip that makes it blink. It's the first thing everyone makes. It's useless. It's the best feeling in the world.
kit.n: Soldering: you melt a little bit of metal so it flows round two things and joins them. The iron's three hundred and fifty degrees. Hold it by the handle. Always the handle. I'm saying this for both of us.
[game timing kind=solder n=3 who=kit mult=3]
~ Your blinky blinks. Slightly unevenly. Kit cheers like you've landed on the moon.
kit.h: IT BLINKS. Look at it! It's alive! You made a thing that wasn't there before!
* It's a tiny red light on a bit of green board. You've never been prouder of anything.
~ She's quieter than in the armour. She doesn't look at you when she talks, she looks at her hands, which never stop moving.
kit.n: The armour's easier. In the armour I'm Vex, and Vex isn't scared of anything. Out of it, I'm someone who apologises to vending machines.
? "I like this Kit. The one who cheers at blinkies."
 [fx kit:10]
 kit.b: ...She's very loud about blinkies.
 > Good.
? "You don't need the armour to be brave."
 [fx kit:7]
 kit.n: Says someone who's never been looked at by four hundred photographers.
 kit.h: But thank you. That's nice. I'll think about it in the armour.
~ You burn your thumb on the iron, once. She burns hers twice, laughing at you burning yours.
`;
SC.kit2=`
[bg cosplay]
[call S.f.kit_armour=0]
~ Kit's sitting on a crate behind the Cosplay Hall stage, armour in pieces round her, phone in her hand, very pale.
kit.d: Sorry. Can you... sit? Just for a minute? I saw someone. In the queue for photos. I think. I'm not sure. I'm probably not sure.
~ It takes her a while to say it.
kit.d: Last year, at a different con, someone took photos of me. Lots. Then he turned up outside my flat. He'd found it from my own photos. The ones I posted. They had the location in them. Inside the file. I didn't know that was a thing.
* Metadata. The thing Ada showed you on Tuesday: data about the data. GPS, hidden inside a photo, where nobody looks.
kit.n: I moved. It's fine. I'm fine. I just thought I saw his coat.
? "Let's check every photo you've posted this week. Right now. Together."
 [fx kit:10 skill:4]
 ~ You go through her account photo by photo. Two still have location data in them: one from the train, one from her hotel window.
 [game pipe n=2 only=12,13 title="Stripping metadata"]
 ~ Stripped. Re-uploaded. Then you turn off location for her camera app entirely, so it never writes it again.
 kit.b: ...That's it? That's all it takes?
 > That's all it takes. It's just nobody tells you.
? "Do you want me to go and look for him?"
 [fx kit:6 clout:2]
 kit.o: No! No. I don't want anyone to... thank you. No. Just... sit here?
 ~ You sit there. After ten minutes she stops looking at the curtain.
kit.n: I'm going to do a panel next year. On this. How to strip your photos. I've been too scared to. I think I'm less scared now.
`;
SC.kit3=`
[bg cosplay]
[call S.f.kit_armour=1]
~ Kit's armour is on a mannequin, and its left arm is hanging off. A seam's split right through the LED channel.
kit.a: The contest's on Saturday night. And Vex's arm is held on with hope. Help me? I need hands. Four hands. You've got two, I've got two.
~ For two hours you hold things exactly still while she glues them, heats them, bends them back into shape. It smells of hot plastic and glue. You talk about everything except the con.
kit.n: You know why I do this? I was a really quiet kid. Really quiet. And I watched Static Bloom, and Vex was loud, and brave, and wore armour that glowed, and I thought: if I looked like that, I could be like that.
kit.n: So I built her. Piece by piece. And when I put it on, I could be. And I still can't, without it. Not really.
? "You're brave without it. You just told me that."
 [fx kit:10]
 kit.o: ...Huh. I did, didn't I. Out of the armour. To your face.
? "Vex is you. You built her. All of her."
 [fx kit:10]
 kit.b: That's... I've never thought about it like that. She's not someone I'm pretending to be. She's someone I made.
~ The arm goes back on. The LEDs come up, cyan, all the way down to the fingertips.
kit.h: SHE LIVES.
~ She hugs you, in her paint-stained T-shirt, and doesn't let go straight away.
`;
SC.kit4=`
[bg badgelab]
[call S.f.kit_armour=0]
~ The Badge Lab, after hours. Kit and Tilly side by side at the long table, two magnifier lamps, two soldering irons, a heap of con badges in a crate between them.
kit.h: We've had an idea. Well. Tilly had the idea. I had the soldering.
tilly.n: The badges have a programming port on the back. If we can get my real firmware back on enough of them before Sunday, the beacons stop. LANTERN's map goes dark, a badge at a time.
kit.n: And I've built a thing. Look. It's a clip. You put it on the back of a badge, press a button, and in four seconds it's reflashed. We can do one a minute. Each.
* Four thousand badges. Two people, one a minute each. That's a long night.
? "Show me how. That's three of us."
 [fx kit:10 tilly:6 skill:4]
 [game timing kind=solder n=3 who=kit mult=3]
 ~ By two in the morning, you've reflashed three hundred badges between you. Kit's started naming them.
? "Can we get more people?"
 [fx kit:6 tilly:6 skill:2]
 ~ Kit builds four more clips. By midnight there are eight volunteers at the table.
[flag counterfw]
kit.n: You know what's funny? I'm not wearing the armour. I'm doing the bravest thing I've ever done at a con, and I'm in a T-shirt with flux on it.
`;
SC.kit5=`
[bg cosplay]
[call S.f.kit_armour=1]
~ The Cosplay Hall after the contest. The stage is empty, the lights are on their night setting, and Kit, in full Vex armour, is sitting on the edge of the stage with her sword across her knees and her visor down.
kit.n: I came second. Second! In the whole con. The judge said Vex's arm was "seamless".
kit.h: It wasn't seamless. You held it for two hours. It was very seamed.
~ You sit next to her on the edge of the stage. Her armour clicks when she moves.
kit.n: Can I do something? It's a big thing. For me. It's going to look small.
> Of course.
~ She puts the sword down. Then she reaches up with both hands and takes the helmet off.
~ Short dark hair, flattened. Freckles. Red marks where the padding sat. Her own face, in the armour, on a stage, in front of someone.
kit.b: Hi. It's me. Just me. In the armour. Both at once. I've never done both at once.
? "Hi, Kit."
 [fx kit:15]
 kit.h: Hi.
? "You've never looked braver."
 [fx kit:15]
 kit.b: I'm terrified. My knees are actually shaking. You can hear the armour rattling.
? Kiss her
 [fx kit:15]
 ~ The armour is extremely uncomfortable to kiss someone in. Neither of you cares at all.
~ She takes something out of a pouch on her belt and puts it in your hand: a tiny circuit board, a little blinky, with one cyan LED, on a chain.
kit.n: From your LEDs. If you gave me the LEDs. If you didn't, from my LEDs. It blinks in our pattern. I programmed it. It's very embarrassing. Don't ask what the pattern is.
> What's the pattern?
kit.b: ...It's Morse. Don't decode it. Decode it later. When I'm not here.
`;

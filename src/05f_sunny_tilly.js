/* ============ ROUTES: SUNNY, TILLY ============ */
SC.sunny1=`
[bg noc]
~ The NOC at 1 AM. Half the screens are dimmed. Sunny's in a swivel chair with her boots on the desk, a radio murmuring on her shoulder, eating cereal out of a mug.
sunny.n: Night shift. Want to learn how a network works? Real one, not a diagram. Grab a chair. The one with three wheels is fine if you lean left.
sunny.n: Every device here gets an address. Every packet has a "from" and a "to", like a letter. Switches are the post office: they read the address and send it down the right cable. And I'm the postmistress, which is a word, and I'm keeping it.
sunny.n: We split the network into rooms that can't see each other. VLANs. Attendees in one, staff in another, the cameras in another, the box that controls the lights in its own little cupboard so nobody can turn off Hall A from their phone. It's like walls in a house.
* Walls in a house. Except someone put a black box in the middle of the house, plugged into every room at once.
sunny.n: I put a tap on LANTERN-01, like I told Owen. A tap copies everything that goes through a cable, so I can read it without the box knowing. Help me read it.
[game pipe n=3 only=9,11,7 title="The NOC night shift"]
~ The tap's capture, decoded: every hour, on the hour, LANTERN-01 bundles up everything it's heard and sends it out through a cable that goes up through the ceiling, to a single address. lantern-ingest.lumen-cdn.io.
[clue uplink]
sunny.a: Every hour. On the hour. The whole con's graph, shipped out of my building, on my power, on my cable, to them.
? "Can you block it?"
 [fx sunny:6 skill:2]
 sunny.n: I could. Then Owen tells Marge, Marge gets a call from Lumen's lawyers, and the con loses its sponsor money halfway through the week. And they'd just put a phone in there to do it instead.
 sunny.h: But I know where it goes now. And I know which cables. Knowing which cables is ninety per cent of everything.
? "How long have you been awake?"
 [fx sunny:8]
 sunny.s: Define awake.
`;
SC.sunny2=`
[bg noc]
~ Sunny is asleep sitting up. In her chair. With her eyes open. You didn't know people could do that.
sunny.n: I'm awake. I'm totally awake. I was resting my eyes, with them open, so I could see the graphs.
> When did you last sleep? Properly. Lying down.
sunny.a: Monday. Ish. It doesn't matter. The network doesn't sleep, so I don't sleep.
? "I'll watch the graphs. You sleep. Two hours."
 [fx sunny:10]
 sunny.a: You? Watch my network?
 > You taught me last night. I'll wake you if a single line moves.
 sunny.d: ...If a line moves. Any line.
 ~ She sleeps on the floor of the NOC on three folded hi-vis vests for four hours, not two, because you don't wake her, because no line moves that matters. When she wakes up, she's furious for exactly ten seconds and then very quiet.
 sunny.b: Nobody's ever done that. Watched it for me. Everyone needs the network. Nobody watches it.
? "Come and get breakfast. Real food. Ten minutes."
 [fx sunny:8]
 [bg food]
 ~ The Food Court at seven in the morning: shutters half up, one coffee stand open. Sunny eats two bacon rolls in four minutes, like a wolf, and then stares at her empty plate.
 sunny.h: Oh. Food. I forgot about food. That was really good. I'm going to cry about a bacon roll.
sunny.n: My mum says I fix networks because I can't fix people. She's not wrong. Networks tell you what's broken. People just say they're fine.
`;
SC.sunny3=`
[bg carpark]
~ The car park at 2 AM. Sunny's sitting on the bonnet of a stranger's car with her radio turned down, a flask of tea, two cups. It's the only place in the con, she says, where nobody comes to ask her about the Wi-Fi.
sunny.n: You want to know where I learned it? Fixing radios. My grandad's stall in Lagos. Market stall, under a tarp. I was seven. I'd sit on an upturned crate and hand him screwdrivers.
sunny.n: Everyone had a radio. Nobody could afford a new one. So they brought them to him. And he'd open them up and find the one broken thing in a hundred working things.
sunny.h: That's all a network is. A hundred thousand working things and one broken thing. Find the broken thing. Grandad called it "listening to the radio's heart".
? "He'd be proud of the NOC."
 [fx sunny:10]
 sunny.d: He'd think it was a waste of good copper.
 sunny.h: He'd also stay up all night with me. Grumbling. Handing me screwdrivers.
? "What happened to the stall?"
 [fx sunny:8]
 sunny.n: Still there. My cousin runs it. Does phones now. Unlocks them. It's not quite legal. Grandad would be thrilled.
sunny.n: We moved here when I was nine. School, uni, a job at a telecom, and then I started volunteering at the con, because it was the only place where people talked about networks like they're alive.
sunny.d: And now someone's put a thing in my network that listens to people's hearts. Not radios'. People's. Who they stand next to. Who they love. That's not right. That's... that's the opposite of what Grandad did.
~ She pours you tea. It's too strong and too sweet. It's perfect.
`;
SC.sunny4=`
[bg noc]
~ Sunny's drawn a diagram on a flattened pizza box with a marker. Three cables, a box, a cloud, and a lot of arrows.
sunny.n: The plan. For Sunday. If you want me in it.
sunny.n: LANTERN-01 talks to the outside world through one uplink. But it's clever: if that cable dies, it fails over to a 4G modem hidden in the back of the rack. And if THAT dies, it'll try the hotel's Wi-Fi.
sunny.n: So you pull all three. In the right order. In under ninety seconds. Because the moment one goes down, an alert goes to whoever's watching it in Suite 1313.
? "Ninety seconds. Can you do it?"
 [fx sunny:8 skill:3]
 sunny.h: I can do it in forty. I've practised. On a toy one. Made of shoeboxes. In the NOC. At 4 AM.
? "What if it goes wrong?"
 [fx sunny:6 skill:2]
 sunny.n: Then I pull the master. The whole building. Four thousand people in the dark, and LANTERN with them.
 sunny.d: I don't want to. That's the nuclear option. But it's there.
[flag sunny_plan]
sunny.n: You'll be upstairs, on the stage, with the cameras. I'll be down here, in the basement, with the cables. That's the right way round. You're better at faces. I'm better at copper.
`;
SC.sunny5=`
[bg conroof]
~ The con's roof, the night before. Sunny brought two folding chairs up through a hatch she says she's "technically responsible for". The network hums underneath you, four floors down.
~ She takes the radio off her shoulder. Looks at it. Turns it off. Actually off. The little green light goes out.
sunny.n: That's the first time since Monday. If something breaks in the next hour, it stays broken.
sunny.d: I'm terrified. I've got the shakes. Look.
~ She holds out her hand. It is shaking a bit. You hold it until it stops.
sunny.n: Grandad used to say: the best repairs are the ones nobody notices. The radio just works again, and they never think about the broken bit.
sunny.n: I've spent my whole life being the person nobody notices. The network works. Nobody thinks about me. And then you sat in the NOC and watched the graphs so I could sleep, and I noticed you noticing.
? "I'll always notice."
 [fx sunny:15]
 sunny.b: Don't say "always". Engineers don't say always. Say "five nines".
 > Five nines?
 sunny.h: Ninety-nine point nine nine nine per cent of the time. That's as close to always as anything real gets.
 > Five nines, then.
? Kiss her
 [fx sunny:15]
 ~ Somewhere below, four thousand people's packets flow through her switches. For one hour, nobody's watching them.
? "You're not nobody. You're the person who keeps four thousand people connected."
 [fx sunny:15]
 sunny.b: ...Four thousand and one.
~ She falls asleep in the folding chair about twenty minutes later, holding your hand, with the radio off on her knee.
`;
SC.tilly1=`
[bg badgelab]
~ The Badge Lab between rushes. Tilly's sorting a box of spare coin batteries by voltage, by hand, humming.
tilly.h: Hello! Badge okay? Show me. Oh, it's still blue. Everyone's is still blue. I hate it.
tilly.n: Do you want to know how it works? Really works? Nobody ever asks. They just ask why it's blinking.
~ She lays a badge on a lit glass table, back up. Under the magnifier, it's a city: tiny chips, copper roads, a coin battery like a gasometer.
tilly.n: The big chip's the brain. A little microcontroller, a computer the size of your fingernail. The coin battery runs it for six days if you're careful. The eight lights are on a single wire, one after another, like fairy lights. And this...
~ She taps a tiny rectangle at the edge.
tilly.n: ...is the radio. Bluetooth Low Energy. Short range. I put it in so badges could find each other for a game. Every badge says "hello, I'm badge 1043" once a minute. That's all. Just hello. And if your badge heard a friend's badge, it'd light up a bit more. A friendship meter.
tilly.d: The new firmware says hello every two seconds. And it doesn't just say who it is. It says who it's heard. Everyone near it. It's not a friendship meter now. It's a list of everyone's friends.
? "Can you prove that? That it's not your code?"
 [fx tilly:8 skill:3]
 [game pipe n=2 only=10,4 title="Checking the firmware"]
 tilly.n: There. The hash. A fingerprint of the file. Mine starts with 7f3a. This one starts with c2e9. Different fingerprint, different file. Not mine. Provably not mine.
 [clue fwhash]
? "Why did you make it a friendship meter?"
 [fx tilly:10]
 tilly.b: Because cons are lonely. Everyone thinks they're the only person who doesn't know anybody. I wanted the badge to say: look, you've met people. Look how bright you are.
`;
SC.tilly2=`
[bg badgelab]
~ Tilly's at the far end of the lab with a badge that isn't like the others: older, bigger, hand-soldered on a board gone brown with age, with a single red LED.
tilly.n: This is the first ever CTRL+ALT+CON badge. Number one. Twenty years ago. Thirty of them. Hand-made.
tilly.n: By a man called Bernard Okoye. He taught me to solder when I was fourteen, at a hackerspace above a chip shop. He made every con badge for nineteen years. He was going to make this one too.
tilly.d: He died in February. Heart. At his bench. With the iron still on. They found him with a half-finished prototype in his hand.
* The rainbow. The friendship meter. All of it, for him.
tilly.n: I finished his prototype. That's what you're wearing. It's his design, with my rainbow. It was supposed to be the best one ever. For him.
tilly.d: And someone took it and made it into... that. A spy. On everyone. With his name on the back, next to mine.
? "Then let's take it back. For him."
 [fx tilly:12]
 tilly.b: ...For Bernard.
 > For Bernard.
? "He'd be proud of what you made. Before they touched it."
 [fx tilly:10]
 tilly.h: He'd say the solder joints on batch three were "a bit enthusiastic".
 tilly.b: He'd be right. But he'd say it with a biscuit.
~ She puts Bernard's badge back in its little box, lined with felt, and shows you the lid. On the inside, in marker, in a shaky old hand: "FOR TILLY. KEEP THE LIGHTS ON."
`;
SC.tilly3=`
[bg conops]
~ Con Ops. Tilly marches in with you behind her, a printout clenched in her fist, and asks the volunteer at the desk for the sponsor sign-off log. The volunteer, who is nineteen and terrified of Tilly, hands it over.
tilly.a: It's here. It's here. "Badge firmware: sponsor features. Approved over the air. Authorised by O. Pryce, Deputy Chair. Designer consulted: NO."
tilly.a: NO. They wrote NO. In the box. They knew they didn't ask me, and they wrote it down.
[clue owensign]
tilly.d: Owen. Owen bought me a coffee on Monday and told me the badge was "beautiful". He'd already signed it away. He'd signed it away in March.
? "Let's tell Marge. Now."
 [fx tilly:8]
 tilly.n: Marge is in a sponsor meeting. With Lumen. She'll be in there till six. They always book her till six.
? "Copy it. Every page. Then put it back exactly how it was."
 [fx tilly:10 skill:3]
 ~ You photograph every page. Tilly puts it back so precisely the volunteer doesn't notice it was ever gone.
 tilly.h: Look at us. Being spies. For good.
tilly.n: I'm not angry. Okay, I'm very angry. But mostly I'm sad. Owen's been at the con as long as I have. Bernard liked him.
`;
SC.tilly4=`
[bg badgelab]
~ The Badge Lab, midnight. Tilly's built a programming jig out of a breadboard and a bulldog clip. Next to her, a stack of badges, all blue.
tilly.n: I've written it. My firmware, my real firmware, but with the radio switched off completely. No hello. No list. Just the rainbow.
tilly.n: The problem is the key. The badges only accept firmware signed with the sponsor's key now, which I don't have. So we can't push it over the air. But if you clip onto the programming pins on the back, you can bypass the check entirely. Physical access beats everything.
* Nyx said that. Physical access beats everything.
tilly.n: One badge at a time. Forty seconds each. Help me write the flasher so it's faster?
[game pipe n=2 only=5,10 title="The flasher"]
[game timing kind=solder n=3 who=tilly mult=3]
~ By 2 AM the flasher takes eight seconds a badge. Tilly cries when the first one blinks a rainbow again.
[flag counterfw]
tilly.b: It's back. It's back. Bernard's rainbow.
? "We'll do the rest on Sunday. All four thousand."
 [fx tilly:10]
 tilly.h: With help. With Kit, and volunteers, and you. Four thousand rainbows.
? Hug her
 [fx tilly:12]
 ~ She smells of flux and pine and smoke. She hugs you back so hard her goggles fall off her head.
`;
SC.tilly5=`
[bg badgelab]
~ The Badge Lab, after hours, the night before. One magnifier lamp on. Tilly's sitting at her bench with her hands in her lap and a little felt-lined box in front of her.
tilly.n: I made you something. I made it on Tuesday, actually. After you read the back. And then I was too scared to give it to you.
~ Inside the box: a badge. Not blue. Hand-soldered, small, heart-shaped, with a tiny rainbow running round its edge. On the back, in her tiny writing: "for {h}, who read the back".
tilly.b: It's got no radio. It can't talk to anything. It doesn't know where you are or who you're near. It just lights up when you press it, and stays lit for exactly as long as you hold it.
tilly.n: Bernard said a badge should be something people want to keep after the con. Not something that keeps them.
? "I'll keep it forever."
 [fx tilly:15]
 tilly.h: Not forever. The battery's six days. But I'll make you a new one. Every year. For as long as you want.
 > For as long as you want too.
 tilly.b: ...That's a long time. I'm warning you. I'm very consistent.
? Press it
 [fx tilly:15]
 ~ The rainbow comes on. Tilly watches you watching it, and her eyes fill up, and she laughs at herself.
 tilly.b: It works. Batch one, unit one, works. Oh, I'm so in love with you, I'm so sorry, I didn't mean to say it like that, I meant to say it with a speech.
? Kiss her
 [fx tilly:15]
 ~ Her goggles fall off her head. Neither of you picks them up.
tilly.n: Keep the lights on. That's what Bernard wrote. I think he'd like you.
`;

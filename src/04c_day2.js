/* ============ DAY 2 · TUESDAY: Capture the Flag, Rin, the badges, Lumen's reception, WHISPER's DM ============ */
SC.d2_ctf=`
[bg hallC]
[hide]
~ Hall C, Track 3. Nine in the morning, which at a hacker con is the middle of the night. Three hundred people, two hundred coffees, one projector showing a black screen with a blinking cursor.
~ Across the top of the screen, in green: CTRL+ALT+CON 20 · CAPTURE THE FLAG · QUALIFIERS OPEN.
"CTF organiser": Morning, nerds. If you're new: hands up. Don't be shy. Everyone was new once, except Ada, who was born at a keyboard.
~ A few hands go up. Yours goes up halfway, which is the hacker way.
"CTF organiser": Capture the Flag. It's a competition. We hide secrets, called flags, inside puzzles. Broken websites. Locked files. Programs that lie. Radio signals. A photo with something hidden in it.
"CTF organiser": Every flag looks like this. CTRL{some_text_here}. Find one, paste it into the scoreboard, get points. Most points by Saturday wins. Teams or solo, your choice.
"CTF organiser": It's legal because we built every target to be broken. That's the whole point. You practise breaking things here, so that in real life you know how they break, and you can fix them first.
* A game where the rules say: break it. Somewhere in your chest, the fourteen-year-old who chose the handle {h} sits up very straight.
"CTF organiser": The board opens now. First blood on each challenge gets a bonus. Go.
~ Three hundred laptops open at once with a sound like a flock of birds taking off.
~ Two seats along, a young woman with her hair in two big puffs, round glasses and an orange hoodie is already typing. She types the way some people play piano: without looking, a little bit angry.
~ The scoreboard updates. "FIRST BLOOD · warmup_01 · ada". Eleven seconds after it opened.
~ She doesn't look up. She mutters, to her screen:
ada.n: That was a bad challenge. That was a bad challenge and I'm a bad person for enjoying it.
? "How did you do that so fast?"
 [meet ada]
 [fx ada:6]
 ada.o: Oh. Hi. You're... a person. Talking to me.
 ada.n: It was an HTML comment. The flag was in the page source. You right-click, you view source, it's there. They do it to make beginners feel good. I'm not a beginner. I feel terrible.
 * You would not have thought to right-click.
? "Do you want a teammate? I'm... learning."
 [meet ada]
 [fx ada:8 skill:2]
 ada.o: A teammate. Me? People don't usually... ask.
 ada.n: I usually play solo. Teams have meetings. Meetings are where joy goes to die.
 ada.b: But you said "learning". Not "I'm basically elite". You said learning. Okay. Sit. Don't touch anything until I say.
? Say nothing. Watch her screen.
 [meet ada]
 [fx ada:3 skill:1]
 ~ She notices you watching after about a minute. She doesn't seem to mind. She tilts the laptop slightly towards you, like sharing a menu.
 ada.n: You're shoulder surfing. It's fine. It's a CTF. Watch this one, it's cute.
ada.n: Ada. Ada Mensah. I study computer science, which mostly means I study the ceiling of a lecture hall. I'm here to win, or to find out I'm a fraud. One of those.
~ She swings the laptop round. Challenge two: "Hidden in Plain Sight · 50 points". A photo of a cat.
ada.n: Here. Your first flag. Photos have metadata. Data about the data. When it was taken, on what phone, sometimes exactly where, GPS coordinates. Most people never look. Look.
[game pipe n=2 only=12,4 title="Your first flag"]
~ The metadata scrolls up the screen. Camera model. Date. And in the "comment" field, where nobody looks: CTRL{m3tadata_1s_d4ta}.
ada.h: There! That's a flag! Paste it! Paste it, paste it!
~ You paste it. The scoreboard updates. "{h} · 50". Your name, on a wall, in a room full of people who know what they're doing.
* Fifty points. It's nothing. It's the best nothing you've ever had.
[fx skill:6]
ada.b: First flag. I remember my first flag. I was twelve. I cried. You don't have to cry. You can if you want.
ada.n: The CTF runs all week. Qualifiers till Friday, finals on Saturday, in Hall A, in front of everyone. I need a team of two to enter the finals. That's a rule.
ada.a: I don't need a teammate. I need a... second name on the form. That's all. But if the second name could find a flag sometimes, that would be... fine. Nice. Fine.
? "I'm in. I'll be the second name."
 [fx ada:8]
 [flag ctf_team]
 ada.h: Okay. Okay! Team name. We need a team name. I've had one ready for six years. Null Pointers.
 > Why haven't you used it?
 ada.n: Nobody asked to be on my team.
? "I'll think about it."
 [fx ada:2]
 ada.n: That's fair. Think. I'll be here. I'm always here. The CTF Arena on Village Row has the real scoreboard. I'll be at the end table by the window, being a fraud.
ada.n: One more thing. A rule. Don't do CTF challenges on the con Wi-Fi. Or any Wi-Fi. Phone hotspot only. Somebody's always listening.
* Somebody's always listening. Everyone here says it the way normal people say "mind the step".
[unlock clues]
[sum CTF 101 in Hall C. Ada Mensah took first blood in eleven seconds, and showed you your first flag, hidden in a photo's metadata.]
`;
SC.d2_rin=`
[bg lounge]
[cut pan lounge]
[hide]
~ You need ten minutes away from four thousand people. The Chill-out Lounge: lava lamps, bean bags, carpet in a colour you'd call "nap", and ambient music that sounds like a modem having a nice dream.
~ Behind the biggest bean bag, someone in a lilac hoodie, a pleated skirt and pink thigh-highs is hunched over a laptop covered in stickers, eating gummy worms with the focus of a surgeon.
~ They look up at you. Then at your lanyard. Then at your face again, very quickly, like a deer checking a road.
rin.o: Are you with Lumen? You're not wearing a navy lanyard. Lumen people wear navy lanyards. You're red. Red is attendee. Red is fine.
? "No. Are you hiding from them?"
 [fx rin:6]
 rin.s: I prefer "strategically positioned behind soft furniture".
? "Who's asking?"
 [fx rin:2 clout:2]
 rin.s: Oh, a mysterious one. Very cool. Very "I watched a hacker film on the train".
? "I'm not with anyone. I'm barely with myself."
 [fx rin:5]
 rin.h: Relatable. Sit. There's a bean bag. It has a dent in it shaped like a stranger. You'll fit.
[meet rin]
rin.n: Rin. Rin Takahashi. He/him. I'm a malware analyst at Bastion Security. I take apps apart to see what they're really doing, instead of what they say they're doing.
rin.n: It's like... you know when an app asks for your contacts "to find your friends"? I'm the person who checks whether it only finds your friends, or whether it also sends all of them to a server in a country you can't pronounce.
* An app is a thing you trust. Rin is the person who checks whether you should.
rin.d: A man from Lumen keeps finding me to ask how my research is going. He knows which bean bag I sit on. My research is not going. My research has been asked to stop going.
? "Asked by who?"
 [fx rin:4 skill:2]
 rin.d: My boss. Graham Pike. CEO of Bastion. Bastion does "independent security audits". Companies pay us to check their apps and say they're safe.
 rin.n: Bastion audits SafeSphere. It's on their website. "Independently audited by Bastion Security." Little badge. Green tick.
 rin.a: And Lumen is our biggest client. They pay Bastion. To independently check Lumen. Do you see the shape of the problem?
 [clue bastion]
? "What were you researching?"
 [fx rin:3 skill:1]
 rin.n: SafeSphere. Obviously. Everyone's favourite free shield. I was supposed to sign off the audit. I read the code instead.
 rin.d: Bastion audits it. Lumen pays Bastion. Lumen is our biggest client. I wrote down what I found and my boss told me to delete it.
 [clue bastion]
rin.n: ...Sorry. I don't know you. I'm oversharing. That's very ironic, given my job.
rin.h: Come back later, if you want. It's nice to talk to someone who isn't on a payroll. Have a worm. It's a sour one. Brace.
[fx rin:3]
* The worm is extremely sour. You make a noise. Rin smiles for the first time, small and quick, like something escaping.
[sum In the Chill-out Lounge you met Rin Takahashi, a malware analyst at Bastion Security. Bastion "independently" audits SafeSphere, and Lumen pays Bastion.]
`;
SC.d2_badge=`
[bg badgelab]
[cut pan badgelab]
[hide]
~ Your badge has been doing something weird since breakfast. The eight little lights round the edge, which yesterday did a happy rainbow, now pulse dim blue. Slowly. Like breathing. And the screen says "SPONSOR UPDATE INSTALLED · THANKS FOR BEING SAFE!"
~ You didn't install anything. You've had it round your neck all night.
~ The Badge Lab is a corner of Hall C with long tables, solder fumes, magnifying lamps, and a hand-painted sign: "BADGE LAB · BROKEN BADGES · BAD IDEAS · FREE HELP". There's a queue. Everyone in it has a pulsing blue badge.
~ At the front, a young woman with pastel green hair in two long braids, brass-rimmed magnifier goggles pushed up on her head and dungarees covered in burn marks is holding a badge up to a lamp. Her face is doing something complicated.
tilly.d: That's not mine. That's not my firmware. My firmware does a rainbow. I spent three months on the rainbow.
[meet tilly]
tilly.o: Oh, hello. Sorry. Hi. Is yours blue too? Everyone's is blue. Nobody's should be blue.
? "I didn't install anything. It just changed overnight."
 [fx tilly:5 skill:1]
 tilly.n: Nobody did. That's the thing. Over the air. Every badge in the building. Four thousand of them, at three in the morning.
? "Are you T. Marsh? From the back of the badge?"
 [fx tilly:7]
 tilly.b: You read the back? Nobody reads the back. Yes. Tilly. Tilly Marsh. I designed it. All of it. I soldered the first hundred myself. My eyebrows grew back.
~ She plugs your badge into a little programmer board on the table. Numbers pour down her laptop.
tilly.n: My firmware is signed. That means I sign it with a secret key, like a wax seal, and the badge checks the seal before it'll run anything. Nobody can put new code on a badge without my key.
tilly.d: Except this is signed with... a different key. One I've never seen. And the badge accepted it. Which means someone changed which keys it trusts, before the badges ever left the factory.
* Somebody got to Tilly's badges before she did. Four thousand of them.
[clue fwhash]
~ A voice behind you, clipped and very calm.
priya.n: It's beaconing.
~ A woman in a dark blazer with headphones round her neck, a long black ponytail, and a phone in each hand. One of the phones has a little antenna plugged into it.
[meet priya]
priya.n: Priya. Blue team. I defend things for a living. Sorry to interrupt, but I've been listening to the badges since breakfast, and yours is talking.
tilly.o: Talking?
priya.n: Bluetooth Low Energy. A little radio, short range, ten metres or so. Every few seconds, every badge broadcasts its own ID. And the IDs of every badge it can hear near it.
priya.a: Which means if something in this building is listening to all of them, it knows who was standing next to whom, every few seconds, all week. Who you talk to. For how long.
[clue beacons]
tilly.d: That's... no. No, no. My badge was supposed to say hello to other badges. For a game. You find people, your lights light up. It was supposed to be nice.
* A friendship game, turned into a list of everyone's friendships. That's not a badge. That's a map of the con's relationships, built by four thousand necks.
? "Can we switch it off?"
 [fx skill:2 priya:4]
 priya.n: Pull the coin battery and it stops. But you'd be the only dark badge in a building full of blue ones. Someone would notice that, too.
 priya.a: The absence of a signal is also a signal. Welcome to my world.
? "Who sent the update?"
 [fx skill:2 tilly:4]
 tilly.n: Updates go through the con's systems. The sponsor wanted to "add features". I said no. I said no in an email. I said no in capitals.
 tilly.d: Someone said yes over my head.
priya.n: Here's my advice, both of you. Don't panic. Write everything down. Times, versions, who said what. Evidence doesn't care how angry you are.
priya.h: And Tilly. Your rainbow was lovely. I saw it yesterday. It made me happy, and nothing makes me happy.
tilly.b: ...Thank you.
[flag badges_blue]
[sum The badges all went blue overnight. Tilly Marsh, who designed them, found a firmware she never wrote. Priya, from the blue team, found they're broadcasting who stands next to whom.]
`;
SC.d2_reception=`
[bg lumenlounge]
[cut pan lumenlounge]
[hide]
~ The Lumen Lounge, on the Halcyon's mezzanine. Invite only. Your invite arrived at noon by email: "Lumen welcomes you. 7 PM. Drinks and canapés." You weren't sure whether to come. Free canapés decided for you.
~ Low lights, velvet booths, a baby grand piano, a bar lit from underneath. Glass walls look down into the hotel lobby. Lumen's blue shield glows on everything: the napkins, the coasters, the ice.
~ It's mostly suits. A few hackers, looking like cats that have wandered into a dentist's office.
~ On a little stage, a woman is singing. Dark red hair in long waves, a black velvet dress, pearls, a voice like smoke curling round a lamp. An old jazz song, slower than you've ever heard it.
~ She watches the room while she sings. Not the way performers do. The way Priya watches a network.
~ Her eyes reach you, and stop, and stay.
vesper.s: ...And this one is for the new face by the bar. Who looks like he's waiting to be found out.
* Everyone looks at you. You hold a canapé. It is the only thing you have.
~ After the song, she steps down, takes a glass from a tray without asking, and arrives beside you like she was always going to.
[meet vesper]
vesper.n: Vesper. Vesper Lane. I sing in the Lounge this week. I'm told I'm "brand-aligned". I've no idea what that means, and I've decided not to ask.
? "That was beautiful."
 [fx vesper:6]
 vesper.h: It was a sad song sung slowly. That's the whole trick, darling. Everyone thinks it's about them.
? "Why me? The song."
 [fx vesper:4 skill:1]
 vesper.s: You were the only one in the room who checked where the exits were before you checked where the food was. I like a person who knows the way out.
? "Do you work for Lumen?"
 [fx vesper:3 clout:2]
 vesper.a: I work for whoever books the room. This week it's Lumen. Next week, a wedding in Bath. I'm very loyal for exactly one week at a time.
vesper.n: Tell me, new face. Everyone here's talking about the man who took over the bar last night. WHISPER. Do you know who it is?
* She asks it lightly. A bit too lightly. Like someone checking a door handle in passing.
? "No idea. Do you?"
 [fx vesper:3]
 vesper.s: Oh, I only know songs. But I'd love to meet them. Anyone who can make a whole room go quiet is a fellow professional.
? "Why do you want to know?"
 [fx vesper:2 skill:2]
 [flag vesper_wary]
 vesper.h: Curiosity. I'm terribly curious. It's my only vice. Apart from all the others.
 * She didn't blink. Most people blink when they're asked a question back.
~ A sharp voice behind her, low and amused.
delphine.n: Vesper, you're needed for the second set. And you are monopolising our only guest who isn't wearing a suit.
~ The woman in the navy suit from the stage, and the bar. Up close: a sleek blond chignon, pearl studs, cool grey eyes, a Lumen lanyard, and a phone she doesn't look at but never puts down.
[meet delphine]
delphine.n: Delphine Vos. VP of Communications at Lumen. I write the words. Victor says them. Occasionally he improves them, and I spend the night fixing it.
? "You mouthed his lines last night. At the ceremony."
 [fx delphine:6 skill:2]
 delphine.o: You noticed that.
 delphine.s: Nobody notices that. I've done it for six years. You're dangerous.
 delphine.h: I like dangerous at a party. It makes the canapés taste better.
? "Privacy is a human right. Nice line."
 [fx delphine:4 clout:2]
 delphine.s: Thank you. I wrote it on a train. Nobody ever asks the second half of the sentence.
 > What's the second half?
 delphine.n: Rights are things people have to claim. Products are things people are given. We give it away free. Draw your own conclusions.
? "What does SafeSphere actually do?"
 [fx delphine:3 skill:1]
 delphine.n: It protects you. That's the answer. I'm paid to give it.
 delphine.s: Ask me again when I'm off the clock. I'm never off the clock.
~ Victor's voice, booming, from the middle of the room: "Ladies and gentlemen, our hosts with the most!"
~ He spreads his hands. Behind him, a screen lights up: a sparkling constellation of dots, lines between them, slowly rotating. "LANTERN · Connecting what matters. Coming Sunday."
victor.h: This week, we're all connected. Literally. Your badges, your phones, your friendships. On Sunday, you'll see just how connected.
* Dots and lines. People and who they talk to. Badges beaconing who stands next to whom. You're suddenly very aware of your own badge, pulsing blue against your chest.
[flag saw_lantern]
~ Near the door, the tall man with the scar is talking quietly to the bearded man in the cardigan, Owen Pryce, the deputy chair. Owen is nodding too much. The tall man isn't nodding at all.
delphine.n: Silas Krall. Head of Trust and Safety. If he ever asks to have a word with you, have the word somewhere with witnesses.
* She says it to her glass, not to you, and then she's gone across the room with her phone up and her smile on, as if she never said it.
~ Behind you, at the piano, Vesper begins the second set. She doesn't look at you once. You're fairly sure she knows exactly where you are anyway.
[sum Lumen's reception in the Lumen Lounge. Vesper Lane, the singer, asked very lightly about WHISPER. Delphine Vos writes Victor's words, and warned you about Silas Krall. Victor showed a glowing map of dots and lines: LANTERN, coming Sunday.]
`;
SC.d2_late=`
[bg hotel]
[hide]
~ Room 1337. Midnight. The bed is suspiciously crunchy. You've just turned off the light when your phone buzzes. Unknown sender. No number. No name.
whisper: HELLO, {H}.
[flag whisper_dm]
if f('leak_name')
 whisper: YOUR BADGE TOLD ME YOUR NAME. THANK YOU FOR MAKING IT EASY.
if f('leak_photo')
 whisper: YOUR SELFIE. ROOM 1337. THE KEY CARD WAS A NICE TOUCH.
if f('posted_ticket')
 whisper: YOUR TICKET POST. YOUR TRAVEL DATES. YOUR FORUM HANDLE. SAME AS YOUR BADGE.
if f('rewards')
 whisper: HALCYON REWARDS, REALLY? YOUR DATE OF BIRTH IS NOW IN THREE DATABASES.
if f('joined_twin')
 whisper: AND YOU JOINED THE FAKE WI-FI. I KNOW BECAUSE SO DID THE MAN WHO RUNS IT.
if S.foot<=12
 whisper: I LOOKED. I FOUND ALMOST NOTHING. INTERESTING.
 [fx mira:5 skill:3]
 [flag whisper_respect]
whisper: YOU HELPED THE BAKER. THAT WAS KIND. NOW HELP YOURSELF. DON'T INSTALL THE SHIELD. AND DON'T TRUST THE BLUE LIGHTS.
* Your badge, on the bedside table, pulsing blue. Breathing.
? Reply: "who is this"
 whisper: SOMEONE WHO READS WHAT YOU POST.
?(met('priya')) Screenshot it and send it to Priya
 [fx priya:6 skill:2]
 ~ Priya replies in nine seconds: "Don't reply. Don't click anything. Leave it with me. I'll try to trace it tomorrow. Sleep."
 ~ Then, a minute later: "That was a good instinct. Most people reply."
 [flag priya_dm]
? Put the badge in the bathroom and close the door
 [fx skill:2]
 ~ You put your badge in the bathroom, on the marble, and close the door. The blue light glows under the gap.
 * It's still talking. It's just talking to the bathroom now.
* You're still holding the phone. WHISPER is waiting. Somewhere in this building, so is everyone who'd like to know what you do next.
~ ⚑ This choice will change your week.
? Write back: "I'm listening."
 [flag path_whisper]
 [fx mira:6]
 whisper: GOOD. TOMORROW AFTERNOON. CHILL-OUT LOUNGE. THIRD BEAN BAG FROM THE LEFT. DON'T BE LATE. I WON'T WAIT.
 * A dead drop. Tomorrow afternoon. Only tomorrow afternoon.
? Forward it to Con Ops. This is their job, not yours.
 [flag path_report]
 ~ You screenshot it and send it to the Con Ops safety address. A reply arrives in under a minute: "Thanks so much, passing this to the right people. Owen."
 * The right people. That's reassuring. Probably.
? Tell nobody. Delete it. Sleep.
 [flag path_alone]
 ~ You delete it. You don't sleep. At 2 AM you check, and the message is gone from your trash too, which isn't possible, and you lie awake thinking about who can do that.
~ Ten minutes later, the phone buzzes again. This time it's Ellie.
sms Ellie: ok. so. I closed the bakery tomorrow. I booked a day pass. then I booked a room. I'm coming to your conference. is that weird. don't answer that. I'm bringing pastries
? Reply: "Not weird. I'd love that."
 [fx ellie:8]
 sms Ellie: !!!! ok. 48 pastries. is that enough for hackers. how much do hackers eat
 > More than you'd think. Less than the yoga studio emails you.
 sms Ellie: I unsubscribed from those!! you made me!! train gets in at 9. meet me in the lobby?? I'll be the one with the bags
? Reply: "Bring cinnamon knots or don't come."
 [fx ellie:5]
 sms Ellie: rude. bringing 20. train gets in at 9, meet me in the lobby
? Reply: "Are you sure? It's a bit intense here."
 [fx ellie:3]
 sms Ellie: I bake bread at 4am for a living. I'm intense. lobby, 9am. I'll be the one with the bags
* Ellie. Here. Tomorrow. In a building where every badge is a radio, every screen can be taken over, and someone sends you messages in the dark.
* You should probably tell her not to come. You don't. You lie there and find you're smiling at the ceiling.
[sum Back in Room 1337, WHISPER messaged you directly: "Don't install the shield. And don't trust the blue lights." Then Ellie said she's coming to the con tomorrow.]
`;

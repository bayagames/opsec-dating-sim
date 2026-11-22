/* ============ ROUTES: ELLIE, NYX ============ */
SC.ellie3=`
[bg cafe]
~ Ellie's table in the Halcyon Café is empty except for one croissant, guarded by a hand-written sign: "RESERVED FOR {H}. YES, YOU."
ellie.h: You came! I sold out. I sold out in two hours. A man bought six sausage rolls and asked if I'd "consider a seed round". I don't know what that is. I said no on principle.
ellie.n: Okay. I'm done for the day. Show me. Show me all of it. Show me your hacker convention.
* She means it. She's put her apron in her bag and she's got her beret on at a determined angle.
[bg lockpick]
~ Lockpick Village first. Rows of tables, clear plastic padlocks, people bent over them like surgeons.
"Volunteer": Want to try? Tension wrench goes in the bottom, pick goes in the top, you feel for the pins.
ellie.o: Feel for the pins. Okay. Okay. I'm feeling. I don't know what I'm feeling.
[game timing kind=pins n=3 who=ellie mult=3 title="Ellie's first lock"]
ellie.h: IT OPENED. Did you see? It went click! It's like when the dough springs back and you know it's proved!
* You've never once in your life thought of a lock as dough. You will now, forever.
[bg soceng]
~ The Social Engineering Village. A soundproof booth with a glass window, and inside it someone on a real phone call, live, trying to talk a (consenting, briefed) company's receptionist into reading out a password, while forty people watch and gasp.
ellie.a: That's what happened to me. That's exactly what that is. Somebody being nice to you until you do something stupid.
? "It's not stupid. It works on everyone. That's why they practise it here."
 [fx ellie:5]
 ellie.n: So people come here to learn how to trick people. So they can teach other people not to be tricked.
 > Exactly that.
 ellie.h: That's like... learning to make bad bread so you can spot bad bread. I respect that.
? "Want to try it?"
 [fx ellie:4 clout:2]
 ~ The volunteer lets her try a practice call, with a script. She's terrible at lying. She keeps apologising to the person she's lying to. The room loves her.
 ellie.b: I said sorry four times! I'm the worst con artist in the world!
 > That's a good thing to be.
[bg food]
~ The Food Court, at the end. Plastic trays, noodle steam, a man in a cape eating a pretzel.
ellie.n: Can I tell you something? I didn't think I'd like it here. I thought it'd be all... men in sunglasses saying "I'm in". And there's some of that.
ellie.n: But it's mostly people being very careful about very small things. Pins. Packets. Who's on the phone. That's... that's baking. That's just baking with worse snacks.
* You've been coming to things like this in your head for ten years. You've never once heard it explained so well.
ellie.b: Also you're different here. You walk differently. Like you know where the doors are.
? "I don't, really. I'm making it up."
 [fx ellie:6]
 ellie.h: Everyone's making it up. You're just making it up properly.
? "It's the first place I've ever felt like I'm not pretending."
 [fx ellie:8]
 ellie.n: ...Yeah. I can see that. I could see it on Friday, two weeks ago, when you stopped pretending. It's a nice look on you.
? "You're different here too. You're braver than you think."
 [fx ellie:7]
 ellie.b: I picked a lock! I'm a criminal now! A legal one!
~ She steals a chip off your tray. You let her.
ellie.n: Thank you for showing me. For not being embarrassed of me. The baker who came to the hacker party.
> Convention.
ellie.h: Convention. Sorry. Never.
`;
SC.ellie4=`
[bg bakery]
~ Night. Proof, with the lights off except the one over the counter. The back door's boarded up with planks Mr Demir found in his shed. The flour's swept. The drawers are back in their runners. It smells of bleach and, faintly, underneath, of cinnamon.
~ You came back on the late train. Ellie didn't ask you to. She texted "are you coming" at 9 PM, and you were already on the platform.
ellie.n: Thank you for coming back. I didn't want to be in here on my own the first night. Isn't that stupid? It's my bakery.
> It's not stupid.
ellie.d: Someone stood here. Right here. In my bakery. In the dark. And looked at my things and decided which one was worth taking.
~ She's holding her grandmother's recipe tin again. She's been holding it most of the day.
ellie.n: Halmeoni had a break-in once. In Busan. Nineteen eighty-something. Someone took the till and her good mixing bowl. She opened the next morning anyway. With a borrowed bowl.
ellie.n: When I asked her why, she said: "If you close, they took more than the bowl."
? "Then we open tomorrow. Borrowed bowl."
 [fx ellie:8]
 ellie.h: Borrowed bowl. Yes. We open tomorrow. Well. I open. You go back to your con and save the internet. But I open.
? "What do you need? Tell me and I'll do it."
 [fx ellie:6 skill:1]
 ellie.n: A new back door. A new laptop. A new password for the new laptop that I'll put in THE CUPBOARD. And... a hug. In that order. No. Reverse order.
 ~ Reverse order.
~ You fix what can be fixed. You set up her new laptop, the cheap one from the shop on the corner, properly: updates, a password manager, two-factor, the forwarding rules checked twice. She names the Wi-Fi "NOT TODAY LUMEN".
[fx ellie:4 skill:3]
* It's almost midnight. You're on the floor of a bakery with your back against the counter, and she's next to you, and neither of you has said anything for a while.
ellie.n: {h}. Can I tell you something embarrassing?
> Always.
ellie.b: The croissants. On the bags. I started drawing them three years ago, the week you moved in upstairs, because you came in every single morning and said "thank you" like you meant it, and nobody says thank you like they mean it.
ellie.b: I wanted you to have something to look at that wasn't a screen.
* You have every single one in a drawer upstairs. Four hundred and twelve tiny croissants in biro.
? Tell her about the drawer
 [fx ellie:12]
 > I kept them. All of them. They're in a drawer. In my flat. I've never thrown one away.
 ellie.o: ...You kept the bags?
 > Every one.
 ellie.b: You absolute... okay. Okay. I need a minute. I'm going to need a whole minute.
 ~ She doesn't need a whole minute. She kisses you after about eight seconds, on the floor of her bakery, with flour still in the grooves of the tiles.
? Kiss her
 [fx ellie:12]
 ~ You kiss her. It's clumsy, and it tastes of station coffee, and she laughs into it halfway through, and it's perfect.
 ellie.b: About time. I've been drawing croissants at you for three years.
? "I didn't know. I'm sorry I didn't know."
 [fx ellie:8]
 ellie.h: You're a hacker. You're supposed to notice patterns. Four hundred croissants is a pattern.
 > Four hundred and twelve.
 ellie.o: ...You counted?
 ~ And then she kisses you, very quickly, as if she's checking whether something's proved.
ellie.n: Go back to your con. Win. Come home. That's the order.
`;
SC.ellie7=`
[bg roof]
~ The Halcyon's roof terrace, after dark. The pool's lit from underneath, the loungers are stacked, and the city's spread out on every side like someone spilled a jewellery box.
~ Ellie's sitting on the edge of the pool with her boots off and her feet in the water. Next to her: two cinnamon knots in a paper bag, with a tiny croissant drawn on it.
ellie.n: I bribed the lifeguard. With pastries. She said "I didn't see anything" and walked off like a spy.
~ You take your shoes off and sit next to her. The water's warm. Below, the con is still lit, the Lumen logo still turning on its roof, the night before.
ellie.n: Tomorrow's the big one, isn't it.
> Tomorrow's the big one.
ellie.n: Are you scared?
? "Terrified."
 [fx ellie:6]
 ellie.h: Good. Me too. People who aren't scared don't check things twice.
? "Not when you're here."
 [fx ellie:6]
 ellie.b: Smooth. Very smooth. Where was this two weeks ago, when you typed "hack instagram"?
? "I'm scared I'll get it wrong."
 [fx ellie:7]
 ellie.n: You'll get bits of it wrong. Everyone gets bits wrong. You'll do it properly anyway. That's the difference.
ellie.n: Can I say a thing? A real thing. I've been practising it on the dough all week. The dough's sick of it.
~ She takes a breath, the way she does before she opens the oven door on something she's worried about.
ellie.n: I don't know anything about computers. I never will. I'll always think the cloud is a bit of a lie. But I know what you're like when you stop pretending.
ellie.n: You're careful. You're kind. You come down every morning and say thank you, and you fixed my life with a baguette, and you came back on the late train without me asking, and you've spent this whole week trying to make the internet a bit less of a horrible place for people like me who'll never understand it.
ellie.b: I love you. I think I've loved you since the oven timer. Don't laugh. It was a very good oven timer.
* Every part of you that's ever pretended to be something goes very quiet.
? "I love you too. I think since the first croissant."
 [fx ellie:15]
 ellie.h: The first one! It was so bad! It looked like a crab!
 > I still have it.
 ellie.b: You still have the crab.
? Don't say anything. Kiss her.
 [fx ellie:15]
 ~ The pool lights ripple across both of you. Somewhere below, four thousand badges are beaconing to each other about who stands next to whom. Let them.
? "When this is over, I want to come home. To Proof. To you."
 [fx ellie:15]
 ellie.n: You live upstairs. You're always coming home to Proof.
 > I mean properly.
 ellie.b: ...Properly. Yes. Properly.
~ You stay until the cinnamon knots are gone and the water's gone cold and the lifeguard who didn't see anything comes back and pointedly turns off the pool lights.
ellie.h: Tomorrow. Win. Then home. That's the order.
[adv ellie 7]
`;
SC.nyx0=`
[bg lockpick]
~ Lockpick Village. Rows of tables, clear practice padlocks on chains, pegboards of locks from cheap to terrifying. A woman with a black bob, a magenta streak and a choker with a little pink pendant is picking a lock without even looking at it, while talking to someone else.
~ The lock opens. She hands it back to its owner, who looks like he's just watched a magic trick.
nyx.s: You've been staring for thirty seconds. Either you want to learn, or you're a cop.
? "I'm here to learn."
 [fx nyx:8 skill:2]
 nyx.n: Rare. Most people come over to explain how they'd do it "in theory".
? "I pick locks with my mind. Digital locks. Firewalls, mostly."
 [fx nyx:-3 clout:4]
 nyx.a: Cool. Pick this one.
 ~ She tosses you a padlock. You do not pick it with your mind.
? "Are you single?"
 [fx nyx:2 clout:-1]
 nyx.o: Wow. Straight to the exploit. No recon at all.
 nyx.s: Points for speed, I suppose.
nyx.n: Nyx. Red team. Companies pay me to break into their buildings and then they cry about it in a report.
nyx.n: Physical security. Doors, badges, guards, the bit everyone forgets because it isn't on a screen. You can have the best firewall in the world and I'll walk in with a ladder and plug into your server.
nyx.s: I'm here on a job, actually. Some sponsor wants a "security review" of the con. Paperwork's in my bag. Always carry the paperwork.
* A sponsor. There's only one sponsor anyone talks about.
nyx.s: Anyway. Let's see if your mouth matches your brain.
[game quiz who=nyx n=3]
if aff('nyx')>=10
 nyx.h: Huh. Okay. You can come back. Bring something better than vibes.
else
 nyx.s: Come back when you've read a book. Any book. A picture book, even.
`;
SC.nyx1=`
[bg lockpick]
nyx.n: Perfect timing. Warm-up first. Pick this.
~ She slides a clear padlock across the table. You can see every pin inside, waiting, like teeth.
nyx.n: Tension wrench in the bottom of the keyway. Light pressure. Lighter than that. You're turning the whole lock very slightly, so when you push a pin to the right height, it catches on the edge and stays. That edge is the shear line.
[game timing kind=pins n=3 who=nyx mult=3]
nyx.s: Now the real thing. The hotel hired my firm to check whether strangers can walk into staff-only areas. They signed off. I need a plus-one.
nyx.b: Not like that.
[bg backstairs]
~ The hotel's back corridor. A staff door with a card reader, and a con volunteer playing "security guard" for the exercise, with a clipboard and a hi-vis vest and the expression of someone who has been told to be suspicious.
nyx.s: Your move, {h}. Get us in. No hacking. Just people.
? Pick up a stepladder and walk in like you own the place
 [fx nyx:12 skill:4]
 ~ Nobody questions a person carrying a ladder. Nobody. The guard actually holds the door for you.
 nyx.h: THE LADDER. You know the ladder. Oh, I like you.
? "Stand aside. I'm a hacker."
 [fx nyx:-5 clout:5]
 ~ The guard writes "said I'm a hacker" on his clipboard. Nyx sighs and walks in behind someone from catering carrying a tray of mini quiches.
 nyx.a: We're in. No thanks to you.
? Ask the guard about his day, very nicely, until he forgets you're there
 [fx nyx:9 skill:3]
 ~ Four minutes about his dog, two about his allotment. He waves you through without even looking at your badge.
 nyx.h: Rapport. That's the long con. Slower than the ladder. Works on more people.
nyx.n: That's social engineering. Most break-ins aren't clever. They're polite. People want to be helpful, and they don't want an awkward conversation, so they hold the door.
[bg stairwell]
~ The staff corridor leads to the rooftop stairwell. Nyx stops dead under the roof door and points up, without saying anything.
~ Taped under the door frame: a small black box with blinking lights and a stubby antenna.
nyx.o: That's a Wi-Fi sniffer. A little computer that listens to every wireless network in range and records it. Someone's listening to the whole top of this hotel.
~ A strip of tape on it reads "W". Caught in the tape: one long silver hair.
[clue sniffer]
nyx.a: That's not in my contract. Photograph it. Touch nothing.
nyx.b: ...Good work today. Don't make it weird.
[msg nyx you still owe me a ladder joke. don't text back something lame]
`;
SC.nyx2=`
[bg lockpick]
~ Nyx is sitting on a table with a stack of paper and a red pen. She doesn't look up.
nyx.a: My contract for this con. The sponsor that hired my firm. Guess who.
> ...Lumen.
nyx.s: Lumen. I didn't read the scope properly. I always read the scope. I was tired. I was flattered. They asked for me by name.
nyx.n: The scope is the bit of a contract that says what you're allowed to touch. Everything inside it is a job. Everything outside it is a crime. Read it with me. Out loud. Fresh eyes.
? Read the scope line by line
 [fx nyx:6 skill:3]
 ~ "Section 4.2: Contractor will identify the individual known as WHISPER using device identifiers collected from attendee wireless connections and badge telemetry."
 ~ "Section 4.3: Contractor will provide all collected attendee identifiers to Lumen Trust and Safety for product research."
 nyx.o: Product research. They want me to hoover up four thousand people's phones and badges and hand them to Silas Krall for "product research".
? "Skim it. Contracts are boring."
 [fx nyx:-4]
 nyx.a: Skimming is how I got here.
 ~ She reads it herself, aloud, slower. Section 4.3 makes her go very still.
nyx.a: And this. Equipment list. "One portable access point, broadcasting SSID: CTRLALTCON." They wanted me to run the fake Wi-Fi. The evil twin. The one Marge warned everyone about on day one.
nyx.d: I'd have been the one listening. To all of you.
? "You have to walk away from this contract."
 [fx nyx:10]
 nyx.n: Yeah. I know. I just needed someone to say it out loud so I couldn't pretend I didn't hear it.
? "Keep it. Use their access to get evidence."
 [fx nyx:3 clout:2]
 nyx.s: Spy for the spies. Tempting. But I'd have to do the job to keep the access, and the job is the crime.
 nyx.n: No. I'm out.
~ She takes the contract, folds it into a neat square, and tears it in half. Then in half again.
nyx.h: Always carry the paperwork. And always know when to shred it.
[flag nyx_quit]
nyx.n: I'm going to need something to do with my week now. I'm told there's a lot of breaking into things going on. Morally.
`;
SC.nyx3=`
[bg carpark]
~ The car park under the con, after dark. Concrete pillars, buzzing lights, the smell of cold engines. Nyx is leaning on a pillar with a coffee.
nyx.n: Lesson three. Buildings. Every building has a front, a back and a bit nobody thinks about.
nyx.n: The front's for visitors, so it's guarded. The back's for staff, so it's guarded badly, because staff are trusted. And the bit nobody thinks about is the car park, the loading dock, the roof, the laundry. Where the doors are propped open because someone's carrying boxes.
[bg dock]
~ The con's loading dock. A roller shutter half up. A fire door held open with a fire extinguisher, which is a crime against fire extinguishers.
nyx.s: There. That door goes to the service corridor, which goes to the network closet, which goes to the box with the label on it. A whole security system, undone by someone who didn't want to put a crate down.
? "So how do you defend against that?"
 [fx nyx:6 skill:4]
 nyx.n: Culture. Not locks. You make it normal to say "who are you?" and normal to answer. You make propping a door feel as weird as leaving your front door open at home.
 nyx.s: Nobody wants to hear that, because you can't buy it.
? "So how would you get in?"
 [fx nyx:4 clout:2]
 nyx.h: I'd carry a crate.
~ You walk the loop with her: dock, service corridor, the back of Hall A, the staff break room where nobody looks up. She points out every camera, every blind spot, every door that doesn't latch.
nyx.n: You know what I like about this job? Everybody lies to themselves about their buildings. "Nobody would come in that way." I'm the person who comes in that way. Then I tell them, and they fix it.
nyx.d: My dad was a locksmith. Small shop. He used to say: a lock isn't there to stop people. It's there to tell honest people where the line is.
? "And dishonest people?"
 [fx nyx:6]
 nyx.s: Dishonest people need a better lock. Or a better reason not to.
? "He'd be proud of you. Tearing up that contract."
 [fx nyx:9]
 nyx.d: ...He'd say I should've read it first.
 nyx.b: Then he'd say "good girl". He said that till I was thirty. Drove me mad.
~ At the end of the loop, back at the car park pillar, she hands you something: a tension wrench, thin and worn smooth.
nyx.n: His. One of his. I've got about forty. Don't lose it.
`;
SC.nyx4=`
[bg corridor]
~ The 13th floor, midnight. The refurbishment wing. A sign on a stand: "CLOSED FOR REFURBISHMENT · NO GUEST ACCESS". Beyond it, a corridor with fresh carpet, no dust sheets, no ladders, and no paint smell.
nyx.n: Refurbishment. With no refurbishing. Lesson four: when a sign tells you there's nothing interesting behind it, there's something interesting behind it.
* Suite 1313. Whatever it is, it's down there.
nyx.s: We're not breaking in. We're looking. Looking's free. Stay behind me, walk like you're lost, and if anyone asks, we're looking for the ice machine.
[call riskRoll(2)]
~ You walk the corridor like two people looking for an ice machine. Halfway down, outside 1313, a little white box on the ceiling with a green light: an access point. Not the hotel's. No hotel logo. Brand new.
nyx.o: That's not hotel kit. That's a private access point, right outside a private suite, on a floor that's "closed". Every packet from in there goes out through that.
~ Through the door: a hum. Fans. More than a minibar's worth. And someone typing very fast.
[clue r1313]
nyx.a: Servers. In a hotel suite. Someone's running a data centre in a room with a jacuzzi.
~ The lift pings at the end of the corridor. Nyx doesn't run. She grabs your hand, turns you towards the wall and starts loudly arguing about where the ice machine is.
nyx.s: I SAID it was on twelve. It's ALWAYS on twelve.
~ Two men in navy blazers walk past. One of them looks at you. The other looks at Nyx's hand in yours and loses interest.
* Her hand's still in yours, after they've gone. Neither of you mentions it.
nyx.n: ...Cover. It was cover.
> Sure.
nyx.b: Shut up. Ice machine's on twelve.
`;
SC.nyx7=`
[bg conroof]
~ The convention centre's roof. A flat expanse of gravel and skylights and humming plant, the Lumen logo turning slowly on its frame thirty metres away. Nyx got you up here through a hatch she says "was basically open", which it was not.
~ She's sitting on the edge of a skylight with her knees up, looking down through the glass at the Foyer, four storeys below: tiny people, tiny badges, all blue.
nyx.n: The night before. On every job there's a night before. You go over everything. Every door. Every exit. What you'll do if it goes wrong.
nyx.n: Usually I do it alone.
? Sit next to her
 [fx nyx:6]
 ~ The gravel crunches. She shifts over to make room, which is the most Nyx way of saying "stay".
? "You don't have to do it alone this time."
 [fx nyx:8]
 nyx.s: I know. That's the problem. I'm out of practice at not being alone.
nyx.n: I've broken into forty-one buildings. Banks. A hospital. A cheese factory, don't ask. Every single time, the thing that got me in wasn't a lock. It was someone being kind. Holding a door. Trusting me.
nyx.d: And I wrote it up in a report, and they fixed it, and the world got a bit less kind. Every time. That's my job. Making the world a bit more suspicious.
nyx.n: And then you turned up, and you were... suspicious and kind. Both. At once. I didn't know you could be both.
~ She takes something out of her jacket. A key. An old one, brass, on a ring with a little tag.
nyx.n: My dad's shop. It's closed now. I've still got the key. I've never given it to anyone. Not to the people who've had my flat keys, not to anyone.
nyx.b: Lesson five. The last one. Sometimes you open the door from the inside. On purpose. And you let someone in.
? Take the key
 [fx nyx:15]
 > I'll never copy it.
 nyx.h: I know. That's why.
? "I don't need the key. I'll knock."
 [fx nyx:15]
 nyx.o: ...You'll knock.
 nyx.b: Nobody knocks. Everyone tries the handle. You'd knock.
 ~ She puts the key in your hand anyway, and closes your fingers round it.
? Kiss her
 [fx nyx:15]
 ~ She kisses you back like she's been planning it for a week, which she says, afterwards, she had.
 nyx.s: I had a whole approach. Recon, everything. You skipped it. Again.
~ You stay on the roof until the Foyer lights below go down to their night setting. She doesn't let go of your hand once. Not for cover. Just because.
`;

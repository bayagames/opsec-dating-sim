/* ============ DAY 4 · THURSDAY: the network goes down, LANTERN-01, the gathering, Proof ============ */
SC.d4_call=`
[hide]
~ Your phone buzzes, then stops buzzing, then buzzes again. All round you, everyone's phone is doing the same thing: trying to find a network that isn't there.
~ The con's Wi-Fi is gone. The screens in the corridors show a spinning wheel. Somewhere a talk has stopped mid-sentence, and four thousand people are discovering what they do with their hands.
if met('priya')
 sms Priya: Network's down. Whole building. Sunny at the NOC is asking for anyone who can tell a cable from a snake. I told her you can. Don't make me a liar. Basement, under the con. Lifts to B or down through the car park.
else
 sms Marge: {h}. The con network's down. Sunny in the NOC needs hands, and Ada says you're "not useless", which from Ada is a knighthood. Basement. Under the con. Go. —M
* The NOC. Network Operations Centre. The room that keeps four thousand people online. You've seen photos of these on forums: dark rooms, big screens, people who haven't slept.
`;
SC.d4_noc=`
[bg noc]
[hide]
~ The NOC is exactly like the photos, but louder. A low room under the con, blue light, a wall of screens showing graphs that have all fallen off cliffs at the same time, racks humming behind a cage, and the smell of hot electronics and old coffee.
~ In the middle of it, standing on a chair, a woman in a hi-vis vest with a bleached buzz cut, a radio clipped to her shoulder and a cable in each fist is shouting at a screen.
sunny.a: No. No, no, no. Don't you dare. I've had four hours' sleep since Monday and you WILL come back up.
~ She sees you. She points a cable at you like a sword.
sunny.n: You. Are you the one Priya sent? The one who can tell a cable from a snake?
> That's... what they tell me.
[meet sunny]
sunny.n: Sunny Adeyemi. I run this network. Four thousand people, nine thousand devices, one fridge someone plugged into the core switch on Monday. Hold this. Don't let go. If it sparks, let go.
~ You hold the cable. It doesn't spark. You feel like a surgeon's assistant who's been handed a heart.
sunny.n: Here's what's happening. Something inside our network started shouting. Not attacking. Shouting. Millions of tiny messages a second, flooding the switch, until everything else drowned.
sunny.a: Same kind of messages the badges make. Little hellos. Except something is collecting them all, and something about the way it's collecting them just fell over and took my whole network with it.
* The badges. The beacons. Priya said something in the building must be listening to all of them.
? "The badges are beaconing. Every few seconds. Who's near who. Something must be collecting it."
 [fx sunny:8 skill:3]
 sunny.o: ...How do you know that?
 > Priya. And Tilly. The badge designer. The firmware isn't hers.
 sunny.h: Right. Right. Then it's in my building and it's not on my diagram. Let's go and find it.
? "Can we trace where the flood's coming from?"
 [fx sunny:6 skill:2]
 sunny.h: That's the spirit. Every switch has a table of which port each device lives on. We follow the flood back, port by port, like following a hose to the tap.
~ She drags a terminal across to you. A switch's address table, scrolling.
sunny.n: Every device has a MAC address. A hardware ID. Find the one that's talking a thousand times more than everything else. Then the table tells you which cable, which closet, which port.
[game pipe n=2 only=7,9 title="Follow the flood"]
~ Port 47. Closet MDF-1. The Main Distribution Frame: the con's central network closet, upstairs, off the staff corridor behind Hall A.
sunny.n: MDF-1. That's my closet. I have the only key. Apart from Con Ops. Come on.
[bg mdf]
~ A narrow room behind a locked door, walls of patch panels, a thousand blue cables in neat looms, and the roar of fans. Sunny goes straight to the rack at the back.
~ Between two of her switches, screwed in neatly, as if it belongs: a slim black box with no lights, no logo, and a label-maker label on the front.
~ "LANTERN-01".
[clue lantern01]
sunny.a: That's not mine. That's not mine. That's in my rack, on my power, on my core, and it is not mine.
~ A cable runs from it into her switch. Another runs out, up through the ceiling, somewhere she can't see.
? "Pull it out."
 [fx sunny:3 clout:2]
 ~ Sunny's hand is on the power cable before you've finished the sentence. And then a voice behind you both, warm, apologetic, firm.
? "Photograph it first. Every label, every cable. Then decide."
 [fx sunny:6 skill:3]
 [flag lantern_photos]
 ~ You photograph it from every side. The serial. The label. The cable going up. Sunny watches you do it with something like respect.
 sunny.n: Evidence first. Priya's been at you, hasn't she.
 ~ And then a voice behind you both, warm, apologetic, firm.
owen.n: Sunny. Sorry. Sorry. Don't touch that one, please.
~ Owen Pryce, the deputy chair, in his brown cardigan, slightly out of breath, as if he's run down from Con Ops.
owen.n: That's sponsor equipment. Lumen's. It's approved. It's for the badge features. Connectivity analytics. It's all signed off.
sunny.a: Signed off by who? Not by me. It's in MY rack.
~ Owen pulls a folded sheet from his cardigan pocket and holds it up. "SPONSOR EQUIPMENT · BADGE CONNECTIVITY · APPROVED." Under it, a signature. O. Pryce, Deputy Chair.
[clue owensign]
owen.d: It was all very last-minute. Marge was busy. The sponsor needed someone to sign. Lumen pays for everything, Sunny. Everything. Your switches. Your coffee. This room.
owen.n: It must have... misbehaved. I'll have their engineers fix it. Tonight. Just please don't unplug it. Their contract has penalties. The con can't afford penalties.
* He's sweating. In a room that's air-conditioned to the temperature of a fridge.
? "What does it do with the badge data, Owen?"
 [fx skill:2]
 owen.a: Analytics. Connectivity. Footfall. Which talks are popular. Normal sponsor things. I'm not a technical person, {h}. I'm a spreadsheet person.
 * He knows your handle. You've never told him.
? Say nothing. Let him talk.
 [fx skill:2]
 owen.n: It's all very standard. All the big cons do it now. You'll see. Sunday will be... wonderful. Victor's got such a lovely thing planned.
~ Sunny unplugs her own switch's uplink instead of the box, reroutes something with three cables, and the fans change pitch. Down in the NOC you can hear a cheer: the network's back.
sunny.n: Fine. It stays. For now. But I'm putting a tap on it, Owen. I'm going to watch every packet that box sends, and if I don't like one, it comes out, contract or no contract.
owen.n: Of course. Of course. Thank you, Sunny. Thank you.
~ He goes. Sunny stares at the black box for a long time.
sunny.n: Thanks, {h}. You held the cable. You thought. That's more than I get from most people with a Masters.
sunny.h: Come back to the NOC sometime. Bring coffee. Proper coffee. Not the stuff in the urn, the urn is a crime scene.
[sum The con's network went down. In the NOC you met Sunny Adeyemi, who runs it. In the main network closet you found a black box labelled LANTERN-01, collecting the badges' beacons. Owen Pryce, the deputy chair, had signed it in.]
`;
SC.d4_gathering=`
[bg hotel]
[hide]
~ Evening. Room 1337. Rin's message came at four: "can people come to yours. tonight. everyone you trust. no phones. bring nobody you're not sure about."
* You did something you've never done in your life. You invited people over.
~ Rin sits cross-legged on the crunchy bed with his laptop on his knees. Everyone else is wherever they fit.
if met('ellie')
 ellie.h: I brought the leftover pastries. There are twelve. There were forty-eight. Hackers are animals.
if met('ada')
 ada.b: I've never been in a hotel room with this many people. Is this a party? Am I at a party?
if met('priya')
 priya.n: Phones in the bathtub, everyone. The bathtub is now a Faraday-adjacent zone. Badges too. Especially badges.
 ~ One by one, phones and blue-pulsing badges go into the bathtub. Priya runs a tap, then turns it off, then thinks better of the whole idea and just closes the door.
if met('nyx')
 nyx.s: Your room is called 1337. You know that's embarrassing, right? It's incredibly embarrassing.
if met('juno')
 juno.h: Not streaming! Look! Camera off. Ring light off. Personality... mostly off.
if met('kit')
 kit.b: Sorry, is it weird I'm not in costume? I feel naked. Not literally. Normal amount of clothes.
if met('bea')
 bea.s: I came straight from closing. If anyone says "blockchain" I'm leaving.
if met('tilly')
 tilly.n: I brought my programmer. Just in case anyone wants their badge back the way I made it. I don't know how to fix them all yet. I'm working on it.
if met('sunny')
 sunny.n: Network's up. If it goes down while I'm here, I will cry, and I don't cry.
if met('saoirse')
 saoirse.n: Before anyone says anything: I'm here as a person, not a journalist. Nothing in this room is on the record until Rin says it is.
if f('dave_helped')
 dave.n: Hey everyone. I'm Dave. I used to be MegaHax. I'm... in recovery.
rin.n: Okay. Thank you for coming. I've never had this many people listen to me at once. I'm going to talk very fast.
rin.n: This is SafeSphere. The free one. Ten million phones.
~ He turns the laptop round. Lines of code, with comments in Rin's careful hand: what each part says it does, and what it actually does.
rin.n: When you install it, it asks for your contacts "to find friends". It uploads all of them. Your whole address book. Then it tracks your exact location every sixty seconds, even in the background. And the "privacy VPN" makes a copy of every website you visit and sends that home too.
[clue rinfind]
rin.d: That's the old version. That's what WHISPER put on the screens today. All true. I've had it in a folder for three months.
rin.n: The new version is SafeSphere 2. It ships worldwide on Monday, after Victor's keynote on Sunday. It's called LANTERN inside the company.
rin.d: It takes your contacts, and their contacts, and builds a graph. A map of who knows who. Then it buys data about everyone on the map from data brokers, even people who've never installed anything, and scores them.
* Dots and lines. The glowing map at the reception. "Connecting what matters."
if clue('beacons')||clue('lantern01')
 > And the badges. Every badge here is beaconing who stands next to whom. There's a box in the network closet called LANTERN-01, collecting all of it.
 rin.o: ...That's the demo. That's the live demo. They're building the con's graph, right now, from everyone in this building. Including everyone in this room.
 ~ A silence. Everyone looks at the bathroom door, where the badges are.
rin.d: My company, Bastion, audits SafeSphere. Lumen pays Bastion. When I wrote this up, my boss told me to delete it. I didn't. I made four copies and hid them in places that aren't the cloud.
~ Silence. Somebody's phone buzzes in the bathtub.
if met('priya')
 priya.n: If we dump this online, Lumen's lawyers bury it in a day and Rin loses his job, or worse. We do it properly. Verified evidence. The regulator first. Then the public. In that order, with receipts.
else
 > If we just dump this online, Lumen's lawyers bury it by morning. We do it properly.
~ Somebody says "properly". Ellie looks at you, very slightly, and you know she's thinking about the baguette.
> There's a word for it. Responsible disclosure. You tell the company, or if the company is the problem, you tell the regulator, the people whose job it is to stop this. You give them time. You keep receipts. Then you tell the world.
if met('ada')
 ada.a: I can reproduce every finding from scratch. Independently. So it isn't just Rin's word against Bastion's.
~ A knock. Everyone freezes. Rin closes the laptop so fast it bounces.
~ You open the door.
marge.n: You said, and I quote, "big, urgent, not a joke, bring no phone". I'm sixty-one. This had better be worth the lift.
~ Rin shows her. It takes twenty minutes. Marge sits on the edge of the desk with her reading glasses on and doesn't say a word the entire time.
marge.a: ...Lumen paid for my whole con. Every badge. Every lanyard. Every sandwich. Twenty years I've kept this thing independent, and this year I needed the money.
marge.n: All right. Here's what I can do. Victor's keynote is Sunday at four, Hall A. Forty-five minutes. Give me evidence I can verify, with a disclosure already sent to the regulator, and you get ten minutes of his slot.
marge.a: If you're wrong, Lumen sues this con into dust, and every one of you with it. So don't be wrong.
marge.n: I'll have Owen clear the running order. Quietly.
* Owen. Who signed in a black box with a label-maker label. Who knows your handle.
? "Don't tell Owen."
 [fx skill:3]
 [flag warned_marge]
 marge.o: Owen's been my deputy for nine years.
 > He signed in LANTERN-01. Ask Sunny.
 marge.d: ...Then I'll do the running order myself. And I'll ask Sunny. And then I'll need a drink.
? Say nothing.
 ~ Marge nods to the room and goes. You hear her in the corridor, already on the phone: "Owen? It's me. Sunday's running order. Come up to Con Ops."
 [flag owen_told]
~ After everyone leaves, there's a note under the door. Typed. Folded once.
if met('mira')
 whisper: YOU'RE DOING IT THE SLOW WAY. I RESPECT IT. YOU'LL NEED MORE THAN RIN HAS. ROOF. —W
else
 whisper: YOU'RE DOING IT THE SLOW WAY. I RESPECT IT. —W
[flag plan_started]
[sum Rin showed everyone what SafeSphere really does, and what SafeSphere 2, LANTERN, will do: map everyone who knows everyone. Marge offered ten minutes of Victor's Sunday keynote, if the evidence is verified and the regulator has it first.]
`;
SC.d4_burglary=`
[hide]
~ Night. Your phone rings. A real call, not a message. Ellie.
ellie.d: {h}. Sorry. Sorry, I know it's late. Can you come to the café? I'm in the café. I'm okay. I'm not okay.
[bg cafe]
~ The hotel café, closed, chairs on the tables. Ellie's sitting on the floor against the counter with her phone in both hands, the way she was in your doorway two weeks ago.
ellie.d: Mr Demir called. The barber. Proof's back door is smashed in. The police are there. They said it looks like kids. It doesn't look like kids.
ellie.d: They didn't take the till. They didn't take the coffee machine, and it's worth more than my van. They took one thing.
ellie.o: My old laptop. The one we fixed. The one with the... with the rule on it. That's all they took. Who steals a six-year-old laptop with a baguette sticker on it?
[clue breakin]
* Someone who wanted the forwarding rule gone. The one thing that pointed straight from Ellie's inbox to Lumen's mail server.
* Somebody went to Linden Street tonight because of what you did two weeks ago. Because Ellie told a man in a suit that her neighbour was "the computer guy".
? Sit down on the floor next to her
 [fx ellie:6]
 ~ You sit down next to her. She leans her head on your shoulder and doesn't say anything for a while.
 ellie.d: I keep thinking about my ovens. Isn't that stupid? Someone's been in my bakery and I'm worried about my ovens.
 > That's not stupid. That's your bakery.
? "It's my fault. I should never have told you to fight them."
 [fx ellie:2]
 ellie.a: Don't you dare. Don't you dare make this about you being sorry. You helped me. They're the ones who broke a door.
 [fx ellie:4]
? "We'll find out who. I promise."
 [fx ellie:3 clout:1]
 ellie.n: Don't promise. Just... don't promise yet. I can't do promises tonight.
ellie.n: I have to go home in the morning. The police want me to look. The insurance wants photos. I have to see it.
ellie.b: Will you come? You don't have to. You've got your con. You've got your people and your evidence and your... everything.
* Tomorrow morning is a whole part of a day. You've only got so many left. And Ellie has never once asked you for anything she didn't need.
> I'll come. Of course I'll come.
ellie.b: ...Thank you. First train. I'll meet you in the lobby. Bring a coat. Linden Street's cold at eight.
[flag ellie_home_ask]
[sum Proof was broken into. Nothing was taken but Ellie's old laptop, the one with the forwarding rule on it. She has to go home in the morning, and asked you to come.]
`;

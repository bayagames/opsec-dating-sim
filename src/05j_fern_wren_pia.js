/* ============ ROUTES: FERN, WREN, PIA ============ */
SC.fern0=`
[bg garden]
~ The Halcyon Garden, between the hotel's glass front and the con. Gravel paths, olive trees in big pots, lavender, little lights strung in the branches. A woman in a wide straw sunhat, a green apron and muddy boots is kneeling by a bed of roses with a trowel, talking to them.
fern.n: You're being dramatic. You're being so dramatic. It's one aphid.
~ She notices you, and doesn't stand up.
fern.n: Mind the hose. Hello. You're very quiet for a hacker. Most of them walk through my garden on the phone, shouting about servers.
? "It's beautiful out here."
 [fx fern:8]
 fern.h: It's a lot of work to look this effortless. The hotel pays me to make it seem like nobody works here.
? "Do the roses talk back?"
 [fx fern:6]
 fern.s: Constantly. Mostly complaints.
? "Can I help?"
 [fx fern:9]
 fern.o: ...With the weeding?
 > With anything.
 ~ She hands you a pair of gloves without another word. You weed for twenty minutes. She tells you the Latin name of everything you pull out.
fern.n: Fern. Fern Albright. Gardener. I keep the bees on the roof too. Nobody sees me. I see everybody. You'd be amazed what people do in a garden when they think it's empty.
`;
SC.fern1=`
[bg roof]
~ The hotel roof terrace, morning. Past the pool, behind a screen of bamboo, four white beehives humming in the sun. Fern's in a veil and gloves, lifting a frame out of one, golden and crawling.
fern.n: Don't flap. Bees don't mind you if you don't mind them. Stand still and breathe slowly. Here.
~ She hands you a spare veil. A bee lands on your sleeve, walks round in a circle and leaves.
fern.n: She checked you. Every bee that comes back to the hive gets smelled at the door by a guard. Right smell, you're in. Wrong smell, you're out. They know who belongs.
fern.n: Every hive's a security system. Older than any of yours.
? "Better than a badge."
 [fx fern:8 skill:2]
 fern.h: Much better. You can't forge a smell. And they don't tell anyone where you went after.
? "Do they know you?"
 [fx fern:8]
 fern.b: Some of them. The old ones. They land on my hat when I'm sad. I think it's a coincidence. I've decided it isn't.
~ She hands you a bit of honeycomb, straight from the frame, on the back of a hive tool. It's the best thing you've tasted all week.
fern.n: Lavender honey. From the garden. The bees go down, the bees come up, nobody stops them at a door. They're the only things here without a badge.
`;
SC.fern2=`
[bg garden]
~ Fern's waiting for you by a big planter near the hotel's glass front. She doesn't say hello. She just points with her trowel.
fern.n: Someone keeps digging in my olive tree's pot. Every morning, the soil's been turned. I thought it was a fox. Foxes don't refill the hole.
~ She digs. Ten centimetres down, in a sandwich bag: a cheap prepaid phone. Old, plastic, the kind you buy at a station kiosk for cash.
fern.n: I haven't turned it on. I thought you'd know whether I should.
? "Don't turn it on here. Turn it on somewhere with no signal."
 [fx fern:8 skill:3]
 [bg basement]
 ~ The hotel basement, under the garden, where the walls are thick enough that phones get nothing. Fern turns it on. No passcode. Whoever buried it trusted soil more than passwords.
? "Turn it on."
 [fx fern:5 skill:1 exp:6]
 ~ She turns it on, there, in the garden. It finds a network for half a second before you make her put it in airplane mode.
~ No contacts. No messages sent. Just drafts. Dozens of them, in capitals.
~ "WH1SPER HERE. WHISPER WAS TOO SOFT." "CONTESTANT: PACKET_PAM." And one you haven't seen yet, dated tomorrow: "CONTESTANT: {H}. ROOM 1337."
[clue buriedphone]
fern.d: That's you. That's your name. In my garden. In my olive tree.
* Someone wrote your dox before it happened, and buried it in a flowerpot.
fern.n: I see who walks through here at night. There's a tall man with a scar. He sits on the bench by this tree at six every morning and doesn't look at anything.
fern.a: I don't like people who don't look at anything in a garden.
`;
SC.fern3=`
[bg backstairs]
~ The hotel's back stairs, the ones guests never use. Fern's leading you through a door marked STAFF ONLY with her own key, down a corridor of laundry carts and stacked chairs.
fern.n: Every hotel has two buildings. The one the guests see and the one that makes it work. I know the second one. Nobody else in this hotel does except housekeeping, and they don't talk to management.
~ Through the laundry in the basement. Up a service stair. Out through a door hidden in the panelling of the mezzanine corridor. Into the hotel library by a second door behind a bookshelf.
fern.h: That's the old way. From before they did the refit. The architect left it in. I think he liked secrets.
* A way from the basement to the library to the roof that never touches a camera. Nyx would weep.
? "Why are you showing me this?"
 [fx fern:10]
 fern.n: Because I think you're going to need to be somewhere quickly on Sunday. And because I wanted someone to know. In case.
? "Fern. You're incredible."
 [fx fern:10]
 fern.b: I'm a gardener. I just pay attention to the bits nobody looks at.
fern.n: I started here eleven years ago. Before that I was a botanist at a university. I studied how plants talk to each other through their roots. It's slow, and nobody believed it.
fern.d: Then the funding went to a lab that made apps. So I came here, and grew roses, and nobody asked me to prove anything.
`;
SC.fern4=`
[bg garden]
~ Fern grabs your sleeve as you come into the garden and pulls you behind the olive tree.
fern.n: Look. At the glass. In the lobby.
~ Through the hotel's glass front: a silver-haired man in a very good suit, being welcomed by the duty manager like royalty. A driver behind him with a hard grey case, not luggage, the kind that holds equipment. And Silas Krall, taking the case himself.
fern.n: He arrived in a car from the airport. Corvid Holdings on the parking permit. I could read it from here. I've got very good eyes for small writing; you need them for seed packets.
~ The duty manager gives him a key card from a separate drawer. Not the normal one. The one for the 13th floor's closed wing.
fern.n: The manager said "Mr Ashgrove". And "fourteen". As in 1314, I think. Next to the one that's always closed.
[clue ashgrove]
[flag heard_corvid]
? "Fern, you're the best spy in this building."
 [fx fern:10]
 fern.h: I'm the gardener. That's the same thing, if you do it right.
? "Did he see us?"
 [fx fern:8]
 fern.s: Nobody sees the gardener. That's the whole point of the hat.
`;
SC.fern7=`
[bg garden]
~ The garden at night, the night before. Every little light in the trees is on. Fern's sitting on the bench by the olive tree, no hat, her hair loose, with two mugs of tea and a jar of honey with a spoon in it.
fern.n: Sit. Lavender tea. From the bed by the door. And the honey. Nobody else gets the honey.
~ You sit. The garden's very quiet. You can hear the con through the glass, distant, like the sea.
fern.n: Do you know what I did today? I planted the purple beans. If you gave me seeds, those. If you didn't, mine. On the roof, by the hives. They'll come up in three weeks.
fern.b: I've never planted something and wanted someone to come back and see it before.
? "I'll come back and see them."
 [fx fern:15]
 fern.h: In three weeks. On a Tuesday. They'll be very small and unimpressive.
 > Perfect.
? "I'm in love with you, Fern."
 [fx fern:15]
 fern.o: ...With the gardener?
 > With the person who notices everything nobody else does.
 fern.b: That's... nobody's ever noticed me noticing.
? Kiss her
 [fx fern:15]
 ~ She tastes of honey and lavender. A bee, lost and very late, lands on her shoulder, walks in a circle, and leaves.
 fern.h: She checked you. You're allowed.
fern.n: Plants talk through their roots. Slowly. Nobody believes it until they see it. I think that's how I talk too.
fern.b: So this is me, talking through my roots. Slowly. I hope you can hear it.
`;
SC.wren0=`
[bg pool]
~ The hotel pool on Level 2. Blue water, white tiles, the echo of splashing. A lifeguard in a red hoodie with a whistle round her neck is sitting in the tall chair, sandy hair in a short wave, scribbling in a notebook and occasionally glaring at the water.
wren.n: No running! That includes walking quickly with intent. Thank you.
~ She notices you looking at the notebook.
wren.h: Oh! Hi! Don't mind me. I'm working on an episode. I do a podcast. True crime. Hotel mysteries, mostly. Forty-one listeners. All very invested.
? "What's the mystery?"
 [fx wren:9]
 wren.o: You want to know? Nobody wants to know. Okay. Okay. Suite 1313. On the thirteenth floor. It's been "under refurbishment" for three months. No builders. No paint smell. But room service goes up there four times a day.
 wren.s: And the man who signs for it has a scar through his eyebrow and has never once said thank you.
? "Is it any good? The podcast?"
 [fx wren:6]
 wren.h: It's incredible. It's very badly recorded. I do it in the sauna for the acoustics.
? "Shouldn't you be watching the pool?"
 [fx wren:5]
 wren.s: I AM watching the pool. Lifeguards watch everything at once. It's basically surveillance, but nice.
wren.n: Wren. Wren Calloway. Lifeguard by day, detective by also day. If you see anything weird on thirteen, you come to me.
`;
SC.wren1=`
[bg pool]
~ Wren's off duty, sitting on the edge of the pool with her feet in the water and earphones in. She pulls one out and holds it out to you.
wren.h: Episode forty-one. "The Housekeeping Trolley That Wasn't". Listen. I'll watch your face.
~ You listen. It's very badly recorded and genuinely gripping. A housekeeping trolley seen on the 13th floor at 3 AM with no housekeeper. Wren timed it. Wren followed it. Wren found it in the service lift with two server cases on it instead of towels.
wren.n: Forty-one listeners. One of them's my mum. One's my sister. One is, I think, a retired detective in Belgium. He sends notes.
? "This is really good, Wren."
 [fx wren:10]
 wren.b: You think? You're not just saying it?
 > The bit with the lift doors. I held my breath.
 wren.h: The lift doors! That's my favourite bit!
? "Server cases. On thirteen. Did you tell anyone?"
 [fx wren:8 skill:2]
 wren.n: I told the duty manager. He said it was "guest equipment". Guests don't usually need forty kilos of computer for a mini-break.
wren.n: Everyone thinks lifeguards just sit there. We're trained to watch. To notice the swimmer who's struggling before they know it themselves. I just started doing it to the whole hotel.
`;
SC.wren2=`
[bg gym]
~ The hotel gym, at night. Empty. One running machine on, at walking pace, with Wren on it, facing the window. The gym's window looks straight across the light well at the 13th floor's closed wing.
wren.n: Stakeout. I've been doing it every night this week. You walk slowly, nobody questions you. People in gyms are invisible.
~ She hands you a pair of tiny binoculars.
wren.n: 1313. Third window from the left. Blinds down, but there's a gap at the bottom. Watch the gap.
~ Through the gap: blue light. Rows of tiny green lights, blinking. A man's shoes going back and forth. The corner of a screen showing something that looks very much like the galaxy from Lumen's reception.
[clue r1313]
wren.n: There's a little white box on the ceiling outside it. Not the hotel's. I looked it up. It's a private wireless access point. Every bit of internet that room uses goes through it, and not through the hotel.
wren.h: That's the sort of thing a podcaster notices. Most people don't look up.
? "You're better at this than most detectives."
 [fx wren:10]
 wren.b: I'm a lifeguard with binoculars and a running machine.
 > That's what I said.
? "Be careful. The man with the scar is dangerous."
 [fx wren:8]
 wren.n: I know. I've watched him. He never runs. Dangerous people never run. They don't need to.
`;
SC.wren3=`
[bg pool]
~ The pool after closing. The underwater lights are on, and the room's full of moving blue reflections. Wren's in the lifeguard chair, but sideways, with her knees up.
wren.n: You asked why I watch everything. I didn't tell you.
wren.d: When I was fourteen, my little sister nearly drowned. At a hotel. On holiday. A pool like this. The lifeguard was on his phone. I saw her before he did. I pulled her out.
wren.d: She's fine. She's twenty-three now, she's a solicitor, she's terrifying. But I've never stopped watching. Everything. Everyone. All the time. In case.
* The podcast, the binoculars, the stakeouts. It's not a hobby. It's the same thing as the chair.
? "That's why you're good at it. You care who's struggling."
 [fx wren:12]
 wren.b: ...Nobody's ever said that. They say I'm nosy.
 > You're not nosy. You're a lifeguard. For everyone.
? "Who watches you, Wren?"
 [fx wren:12]
 wren.o: ...Nobody. Nobody watches the lifeguard. That's the job.
 > I'll watch for a bit.
 wren.d: Don't. I'll cry. Lifeguards can't cry, it gets in the pool.
~ She climbs down from the chair and sits on the edge of the pool next to you. The light moves over both of you. For a while she doesn't watch anything at all.
`;
SC.wren4=`
[bg gym]
~ Wren's on the running machine at 2 AM, at walking pace, very still above the waist, binoculars up.
wren.n: Shh. Come here. Look. Quick.
~ Across the light well. The 13th floor corridor, lit. A man in a brown cardigan, glancing up and down the corridor, and using a key card on 1313's door. Owen Pryce. The door opens. He goes in.
wren.n: That's the deputy con chair. I've seen him do it three nights in a row. Always after midnight. Always alone. Always for about forty minutes.
[clue owen13]
wren.a: What does a con organiser do in a closed suite at 2 AM with a man who never says thank you?
? "He reports to them. Everything the con is doing."
 [fx wren:8 skill:3]
 wren.o: ...A mole. An actual mole. This is the best episode I've ever had and I can never air it.
? "Write it all down. Times. Everything."
 [fx wren:8 skill:2]
 wren.h: Already done. Timestamps, durations, which key card. My sister says evidence without timestamps is just gossip.
wren.n: I'm scared, a bit. I don't usually get scared. Usually the mysteries are about missing towels.
`;
SC.wren7=`
[bg pool]
~ The pool, midnight, the night before. Every light's off except the ones underwater, so the whole room is blue and moving. Wren's standing at the edge in her red hoodie with her hands in the pocket.
wren.n: Lifeguard's off duty. For the first time all week. Nobody's watching the pool. Which means, technically, you're on your own.
~ She takes the whistle off her neck and puts it on the lifeguard chair. Then she jumps in, hoodie and all, with an enormous splash, and comes up laughing.
wren.h: Get in! It's warm! It's always warm! The hotel heats it to twenty-nine degrees, it's basically soup!
? Jump in
 [fx wren:12]
 ~ It is basically soup. You float on your back in the blue dark. She floats next to you. The ceiling has little lights in it like stars.
? Sit on the edge
 [fx wren:8]
 ~ She swims over and folds her arms on the edge next to your knees and looks up at you, dripping.
wren.n: I've been narrating my whole life. In my head. For the podcast. "Wren noticed the man with the scar." "Wren followed the trolley."
wren.b: I haven't narrated anything tonight. I've just been here. With you. I didn't know I could stop.
? "I'm in love with you. No narration."
 [fx wren:15]
 wren.h: Oh, that's going in the episode. No. No it isn't. That one's ours.
? Kiss her
 [fx wren:15]
 ~ Underwater lights. Chlorine. A whistle on a chair that nobody blows.
? "Who's watching you now?"
 [fx wren:15]
 wren.b: You are. And I don't mind. That's new.
`;
SC.pia1=`
[bg station]
~ Central Station. Pia's by the piano, as always, but not playing. She's tuning, which takes a long time when you do it properly.
pia.h: You came back. Most people only come through. Request something?
? "Anything except that one."
 [fx pia:8]
 pia.s: You remembered the rule. Nobody remembers the rule.
? "Tell me about your brother instead."
 [fx pia:10]
 pia.d: ...You remembered that too.
~ She plays something gentle, to give her hands something to do, and talks over it.
pia.n: Jonah. He's four years older than me. He's the reason I play. He taught me the first song on a toy keyboard when I was five.
pia.n: He was a researcher. Computers. Security. He went to your con every year. And then, a year ago, he found something at work, and he told a journalist, and the story came out, and then it un-came out. They printed an apology.
pia.d: And then his flat was empty. His phone was off. The police said he's an adult and adults are allowed to leave.
[flag heard_jonah]
pia.n: I play here because this is the last place anyone saw him. The CCTV has him walking onto Platform 4 eleven months ago, with a backpack. And then nothing.
pia.d: I keep thinking: if he ever comes back through, he'll hear me. He'll know I'm still here.
? "We'll find out what happened to him."
 [fx pia:10]
 pia.o: ...You'd try?
 > I know people who've heard his name. A journalist. A lawyer.
 pia.d: Then they know more than the police.
? "He'd be proud of you. Still here. Still playing."
 [fx pia:8]
 pia.b: He'd say my bowing's sloppy. He'd be right.
`;
SC.pia2=`
[bg station]
~ Pia's packed up early. The station's quiet: the gap between the commuter rush and the evening. She sits on the piano stool with her violin in her lap.
pia.n: I want to play you something. The song I never play for money. "That one."
pia.n: When we were kids, Jonah and I had a code. We tapped it on the wall between our bedrooms. Long and short. A tune, really. He made it a song. Every number, every letter, a note.
pia.d: The night before he left, he came round and asked me to play it. He sat right there. He made me play it twice. He said, "remember the numbers, Pia." I thought it was a joke.
~ She plays it. It's short. Eleven notes, then a pause, then eight more. It's a bit sad, and a bit silly, the kind of tune a teenage boy makes for his little sister.
? "Play it again. Slowly. I think there are numbers in it."
 [fx pia:10 skill:3]
 ~ She plays it again. Long, short. Eleven notes. A pause. You write the long and short down. Then you count.
 ~ Four. Four. A pause. Then: two, zero, one, nine.
 > Forty-four. And two-zero-one-nine.
 pia.o: ...Locker forty-four. The left luggage lockers. Down there. He always used forty-four, it's my birthday.
 pia.d: Twenty-nineteen. That's the year our dad died. That's a code. That's a combination.
 [clue pia_song]
? "That's beautiful."
 [fx pia:8]
 pia.b: It's silly. It's a teenager's song. But it's ours.
 ~ You hum it on the train back. You can't stop. Somewhere in it, you're sure, there are numbers.
 [clue pia_song]
`;
SC.pia3=`
[bg station]
~ The left luggage lockers, down a ramp behind the ticket hall. Rows of grey steel doors with keypads. Pia's in front of number 44, very still.
if !clue('locker')
 pia.n: I can't. My hands won't. You do it.
 ~ You type the code. Two, zero, one, nine. A clunk. The door swings open.
 ~ Inside: a padded envelope, a USB drive in a sandwich bag, and an old paperback with a train ticket in it as a bookmark.
 [clue locker]
~ The USB drive is LANTERN's first design documents: two hundred pages, from three years ago, with Victor Hale's initials on every page and a note on the first: "Primary market: government and private intelligence. Source detection is the product."
~ And in the padded envelope, a note. Folded once. In handwriting Pia makes a sound at.
~ "P. If you're reading this, you remembered the numbers. I'm alive. I'm all right. I can't come in until LANTERN is public, because they'll say I stole it again and this time they'll make it stick. Keep playing. I can hear you on Thursdays. J."
[clue jonahnote]
pia.d: Thursdays. He can hear me on Thursdays. I play on Thursdays.
pia.d: He's been listening. Every Thursday. For eleven months.
? Hold her while she cries
 [fx pia:12]
 ~ She cries into your shoulder, in a dead end by the left luggage, while trains go overhead. It's the good kind. You can tell by how she laughs halfway through.
? "He's alive. He's all right. He said so."
 [fx pia:10]
 pia.b: In his handwriting. His terrible handwriting. He writes his Js backwards. Look. Look, it's backwards.
`;
SC.pia4=`
[bg station]
~ Thursday. Pia plays. You sit on the bench across the concourse with a paper cup of coffee and watch everyone who stops.
~ At 4:41, a thin man with a beard, a hood up and a backpack stops by the piano. He doesn't drop a coin. He says, quietly, "Request. That one."
~ Pia's bow stops. She doesn't look up. She plays it. Eleven notes. A pause. Eight more.
~ When she finishes, she looks up. He's still there. He's crying.
jonah.n: Hi, Pia.
~ Twenty minutes later, in the back of the station café, with the blinds down, Jonah Reyes is holding his sister's hand across the table and not letting go. He looks at you over her shoulder.
jonah.n: You're the one who found the locker. Saoirse Quinn says you're careful. Noor Haddad says you're careful. Even Rin Takahashi says you're careful, and he doesn't trust anyone.
jonah.d: I found LANTERN three years ago. Bastion called me a thief. I've been living in a caravan for eleven months, coming in on Thursdays to hear my sister play through a ticket barrier.
jonah.n: If it goes public on Sunday, properly, with proof, I'll come in. I'll stand up. I'll say what I saw. But only if it's done properly. Last time they buried it in a week.
? "It'll be done properly. I promise."
 [fx pia:10]
 jonah.n: ...All right. Then I'll be there. At the back. If you need me, I'll walk down the aisle.
 [flag jonah_ready]
? "You don't have to. You've been through enough."
 [fx pia:8]
 jonah.d: I've been hiding for a year. That's not enough. That's too much.
 [flag jonah_ready]
pia.b: I'm going to play every day now. Not just Thursdays. Every day.
`;
SC.pia7=`
[bg platform]
~ Platform 4, after the last train. The station's lights are on their night setting. Pia's sitting on a bench with her violin case open beside her and the strings, new ones, if you gave her them, catching the light.
pia.n: The guard knows me. He lets me stay till he locks up. He likes Bach.
pia.n: I've played on this concourse for eleven months for one person. Every Thursday. In case.
pia.d: And now he's found. And I keep thinking: who do I play for now?
? "Play for yourself."
 [fx pia:12]
 pia.h: Myself. Imagine. I haven't done that since I was nineteen.
? "Play for me."
 [fx pia:15]
 pia.b: ...Okay.
~ She plays. Not Bach. Not "that one". Something you've never heard, that she's clearly been working on, slow and warm, with a bit in the middle that sounds like a train pulling in.
pia.n: That's new. I wrote it this week. It doesn't have a name yet.
pia.b: It's about someone who came back. Not Jonah. You. You came back to the station. People don't. They only come through.
? "I'll always come back."
 [fx pia:15]
 pia.h: On Thursdays?
 > Every day.
? Kiss her
 [fx pia:15]
 ~ The last guard rattles his keys somewhere down the platform, very pointedly, and very slowly, and doesn't come any closer.
? "I'm in love with you, Pia."
 [fx pia:15]
 pia.b: Then the song's called that. Something like that. I'll think of a better word. There isn't one.
`;

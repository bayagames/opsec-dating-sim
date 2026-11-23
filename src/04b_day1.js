/* ============ DAY 1 · MONDAY: home, work, the train, arrival, the bar ============ */
SC.d1_wake=`
[bg flat]
[hide]
~ Monday. 6:58 AM. Two minutes before the alarm, which never happens, because today is not a normal day.
* Today is the day. CTRL+ALT+CON 20. Badge pickup at six this evening. A whole week.
* You lie there for a moment and let it be true.
~ Your suitcase is open on the floor where it has been open for four days, like a mouth waiting to be fed. Inside: six hoodies, one shirt with a collar "for networking", and a power bank the size of a brick.
[unlock move]
* Two weeks since Ellie's account. You've read more about security in two weeks than in the last two years. Turns out there's a word for what you've been doing wrong your whole life.
* OPSEC. Operational security. It's an old military word: the discipline of not giving away the small things, because the enemy builds the big picture out of small things. A boarding pass. A room number. A photo of a window.
* Nobody is your enemy. Probably. But four thousand hackers are about to be in one building, and you'd quite like to not be the small thing.
? Pack the nice shirt.
 ~ The shirt with a collar goes in. It has been worn once, to a wedding, and it still smells faintly of a wedding.
 [fx clout:2]
? Pack an extra phone charger.
 ~ A second charger goes in. Then a third. You'll lose two of them by Wednesday. This is the way of chargers.
 [fx skill:1]
? Pack the plastic plant. It deserves a holiday.
 ~ You put the plant in the suitcase. You take it out again. You put it back in. It's coming. It's been through a lot.
 [flag plant]
~ Your phone buzzes. A message from Ellie.
sms Ellie: are you up?? come down before you go. I made you something. it's not a big deal. it's a medium deal
* You can already smell it through the floor. Cinnamon. She's been up since four.
[sum Monday morning. Packed for the con, and Ellie wanted to see you before you left.]
`;
SC.d1_ellie=`
[bg bakery]
~ Proof at seven in the morning: the bell over the door, the radio on low, the hiss of the coffee machine that has opinions.
~ Three customers count as a queue in here. There are four. You wait.
ellie.h: There he is! The hacker. Off to the hacker party.
> Convention.
ellie.s: Convention. Sorry. Off to the hacker convention, where I assume everyone wears sunglasses indoors and says "I'm in".
ellie.n: Usual. I've already bagged it. I bagged it at half six, in case you tried to sneak off without saying goodbye.
? "I would never sneak off."
 [fx ellie:4]
 ellie.h: You would. You'd do a little wave through the window and mouth "text you". I've seen you do it to the barber.
 ellie.b: Mr Demir was devastated. He told me. We have a group chat now.
? "You've been practising the computer words again, haven't you."
 [fx ellie:3]
 ellie.s: Two new ones. "Phishing", which is not a typo, and "zero day", which sounds like a perfume.
 ellie.h: I'm saving them. I'm going to use them on you when you get back and you'll have to be impressed.
? "Is that the knot with extra icing?"
 [fx ellie:2 clout:1]
 ellie.b: It's a going-away knot. Going-away knots get extra icing. That's not favouritism, it's policy.
 * It is favouritism. The woman in front of you got a normal knot and noticed.
~ She hands you the knot in a paper bag with a tiny croissant drawn on it in biro. She draws one on every bag. You have kept every single one in a drawer upstairs, and you will never tell anyone this.
~ Then she hands you a second bag. A big one. Heavy.
ellie.n: For the train. And for the hackers. Hackers eat, right? Twelve cinnamon knots, six sausage rolls, and a loaf of the good one for your hotel room. Don't eat the loaf on the train. Hotel room loaf.
> Ellie, this is...
ellie.n: It's a medium deal. I said. Shush.
* It is a large deal. It's at least a large deal. There's a note taped to the side of the bag in her handwriting: "for {h}, who does things properly. come back with stickers."
ellie.n: How's my BREAD SHIELD going, by the way? It keeps asking me for the code, and I keep giving it the code. Is that good?
> That's exactly what it's for. If it ever asks you for a code you didn't ask for, that's someone trying your password.
ellie.o: It did. Last Thursday. At 3 AM. I didn't ask for anything at 3 AM. I was asleep. I was dreaming about a pie.
* A cold little feeling in your stomach. Somebody tried her password again, two weeks after. That's not a random robot. That's someone checking whether the door's still locked.
? "Did you change your password after that?"
 [fx ellie:3 skill:2]
 ellie.n: I did! I opened THE CUPBOARD and pressed the button that makes a new one. It's forty letters long. I can't read it. Nobody can read it. It's beautiful.
 > You did everything right.
 ellie.b: I did everything right. Say it again, I'm going to put it on a cake.
? "That's what the code's for. They can't get in without your phone."
 [fx ellie:2 skill:1]
 ellie.n: Good. Good. My phone is in my apron at all times. I'd like to see them get it out of my apron.
* Her eyes go to the till, then back to you. There's something else.
ellie.n: Also. A man came in on Saturday. Suit. Very nice teeth. He said he was from "Lumen Growth Partners", and did I want "account protection", for £9.99 a month, because "small businesses are a target".
ellie.a: I said no. I said my neighbour is a computer person and he's already protected me. He said "of course", and smiled, and wrote something down. Who writes something down?
[clue lgpcall]
* Lumen again. They don't just sell the fix after the break-in. They come back to sell the lock.
? "You did the right thing. Don't let him in again."
 [fx ellie:4]
 ellie.h: I gave him a scone. To get him out. Was that wrong? It was a day-old scone.
 > That was perfect.
? "Did he say anything about me?"
 [fx ellie:2 skill:1]
 ellie.n: He asked your name. I said "the computer guy". He laughed. I don't think he thought it was funny. I think he thought it was useful.
 * You don't love that.
~ The bell goes. A customer. Ellie wipes her hands on her apron, and for a second neither of you says anything.
ellie.n: Go on. You'll miss your train. Text me. Not a lot. A medium amount.
ellie.b: And be careful. If the people who did that to me are paying for your party...
> Convention.
ellie.h: If they're paying for your convention. Be careful anyway.
* You walk out with a cinnamon knot, a bag of baking heavy enough to stun a man, and a feeling that you don't have a word for yet.
[fx ellie:5]
[adv ellie 1]
[sum Ellie gave you a bag of baking for the con, and told you a man from Lumen Growth Partners had come into Proof selling "account protection".]
`;
SC.d1_leave=`
[hide]
~ Linden Street, with a suitcase. The barber waves with his scissors. Mr Demir has never waved before. He must know.
* No work today. Linda gave you the whole week, and made you promise not to check your email. You will check your email.
[bg station]
~ Ten minutes' walk, a suitcase that won't steer, and Central Station.
`;
SC.d1_concourse=`
[hide]
~ A Victorian train shed: iron ribs, glass, pigeons, a clock the size of a car. The departures board clatters. "16:12 CONFERENCE QUARTER · HALCYON · PLATFORM 4 · ON TIME."
~ An hour early. You are always an hour early for trains. It's the only part of your life you're early for.
* People everywhere. Commuters. A school trip. Two people in matching black hoodies who are definitely going to the con, arguing about tabs and spaces at a volume that suggests real stakes.
~ At the kiosk by the ticket barriers, a tall man in a grey overcoat is buying prepaid phones. Six of them, in their plastic boxes. He pays in cash, counts his change twice and is gone into the crowd before you've finished noticing him.
* Six phones. Cash. You don't know why you notice that. Maybe because you've spent two weeks reading about why people do that.
[flag saw_krall_kiosk]
~ And somewhere on the concourse, someone is playing a violin. Not well. Better than well. The kind of playing that makes a whole station of people slow down without knowing why.
`;
SC.d1_pia=`
[meet pia]
~ She's sitting on an upturned crate by the old station piano: long dark curls under a wine-red beanie, an oversized green coat, fingerless gloves, a violin case open at her feet with a few coins and a handwritten sign.
~ The sign says: "REQUESTS · ANY SONG · EXCEPT THAT ONE".
~ She finishes the piece. Nobody claps, because it's a station. You clap, a bit, before you can stop yourself.
pia.h: Oh. Hi. You're allowed to do that, you know. Clap. People think there's a rule.
? "That was beautiful. What was it?"
 [fx pia:5]
 pia.n: Bach. Partita number two. The bit everyone knows from adverts. I play it when the 15:40 is late, because people need something to be on time.
? "Which one's 'that one'?"
 [fx pia:4 skill:1]
 pia.s: You'd be amazed how many people ask for that one. Like, an amazing number. Every day.
 pia.n: There's one song I don't play for money. That's all. It's a rule. Everyone needs one rule they don't explain.
? Drop a pound in the case.
 [fx pia:3 cred:-2]
 pia.h: A whole pound. Big spender. Thank you.
pia.n: Pia. I'm here most days. You're going to the con, right? The hoodie, the lanyard-shaped hole in your outfit. You've got that look.
> What look?
pia.s: Like you're about to find out whether you're who you say you are online.
* That's uncomfortably accurate for a stranger on a crate.
pia.n: My brother used to go. Years ago. He loved it. Said it was the only place where everyone was weird in the same direction.
> Used to?
~ She looks at the departures board for a moment longer than she needs to.
pia.n: He's away. Travelling. Anyway. Your train's in forty minutes and you're the kind of person who's on the platform in thirty, I can tell.
pia.h: If you're ever back through here, request something. Anything. Except that one.
[sum At Central Station you met Pia, a violinist who busks by the old piano. Her brother used to go to the con. He's "away".]
`;
SC.d1_train=`
[bg carriage]
[hide]
~ The 16:12. You get a table seat facing backwards, which you hate, and put Ellie's bag of baking on the seat beside you like a guard dog.
~ Opposite: a woman with a long platinum-blond braid, round gold glasses and a cardigan the colour of the night sky with tiny embroidered stars on it. She has a radio on the table. Not a phone. A radio, with a whip antenna, and a pair of headphones, and she's smiling at something only she can hear.
~ The city slides past. Cranes, back gardens, a billboard: "SafeSphere. Your shield on the internet. Free forever." Someone has graffitied "FOREVER IS A LONG TIME" underneath.
~ The woman opposite lifts one side of her headphones and looks at you.
astrid.n: Sorry. Am I being loud? It hisses. The radio. Some people find it upsetting.
? "Not at all. What are you listening to?"
 [meet astrid]
 [fx astrid:5]
 astrid.h: A satellite. A weather satellite, an old one, from 1998. It's passing over us right now, eight hundred kilometres up, and it's sending pictures of the clouds to anyone who listens. For free. To everyone. It's very generous.
 astrid.n: I'm Astrid. I'm going to the con too. The Aerospace Village. We listen to things in the sky and try very hard not to make them fall out of it.
 > Is that... legal? Listening?
 astrid.h: Listening is almost always legal. It's talking back you have to be careful with. Like people.
 ~ She turns the radio so you can hear: a rhythmic tick-tock, like a clock having a dream.
 astrid.n: That noise is a picture. Line by line. In about ten minutes I'll have a photograph of the clouds over this train, taken from space, and nobody will have paid for it, and nobody will have logged in.
 * You've spent two weeks reading about everything that watches you. This is the first time it's sounded beautiful.
 ? "Can I see it when it's done?"
  [fx astrid:6]
  ~ Ten minutes later she turns her laptop round. A grey-and-white swirl of cloud, the coast, the river. A tiny smudge which she insists is the city.
  astrid.h: There. We're in there. Somewhere. Too small to be seen. That's my favourite kind of picture.
 ? "Doesn't it bother you? Satellites watching everything?"
  [fx astrid:4 skill:2]
  astrid.n: That one only sees clouds. It's the ones in our pockets that see us. The satellites are honest about it, at least. They say what they are.
  ~ She nods at the window, where the SafeSphere billboard is sliding away.
  astrid.n: That one says it's a shield. Shields don't need to know where you are every sixty seconds.
  * Every sixty seconds. You've read that number before. You didn't know it was common knowledge.
 ? "Is anything else up there? Anything strange?"
  [flag heard_echo]
  [fx astrid:5]
  ~ She goes quiet. Then she turns the dial, very slowly, past the satellite, into hiss.
  astrid.n: There's one. I've never told anyone because it sounds mad. Every seven days, on a frequency nothing is licensed to use, something sends a burst. Ninety seconds. Compressed. Like a whole week squeezed into one breath.
  astrid.s: It started three weeks ago. It always comes from the direction of the Conference Quarter. And the last one ended with a word I could actually decode.
  > What word?
  astrid.d: "{h}." She says it carefully, like a word in a language she's learning. Is that... you?
  * You haven't said your handle out loud today. You check. You haven't.
  [clue echo_sky]
 astrid.s: If you come to the Aerospace Village, I'll show you how to listen. It takes a radio that costs less than a pizza.
? Smile, nod, and look out of the window.
 ~ She smiles back and puts the headphones on again. For the rest of the journey she listens to the sky and you watch the backs of houses go by.
 * Later you'll wonder what she was listening to.
~ Twenty minutes later, the train slows. A neon sign the height of a building slides into the window: THE HALCYON. Beyond it, a vast slab of dark glass and steel with a magenta line of light running round every storey.
~ CTRL+ALT+CON.
[bg plaza]
[cut pan plaza]
~ The station spits you out into the Conference Quarter. A plaza. Plane trees in pots. A coffee cart. A taxi rank. The sky's going orange.
~ To your left, the Halcyon Hotel: twenty-five storeys of lit windows and a garden behind glass. Ahead, the convention centre's entrance, under letters taller than you: CTRL+ALT+CON.
* Four thousand people. Seven days. You.
[sum The train to the Conference Quarter.]
`;
SC.d1_doors=`
[bg vestibule]
[cut pan vestibule]
[hide]
[flag d1v]
~ The convention doors slide open. It smells of new carpet, energy drinks and four thousand people's nerves.
~ The Foyer: a glass atrium four storeys high, escalators climbing into the light, a giant rotating Lumen logo hanging in the middle of it all like a moon. Banners everywhere. Lanyards everywhere. Somebody is soldering on the floor.
~ Ahead, a velvet rope, a queue, and a desk on the west wall marked REGISTRATION. Nobody gets past the rope without a badge.
* Okay. You're here. You're actually here. Act normal.
* What is normal? Nobody here is normal. That's the whole point.
[sum The convention centre.]
`;
SC.d1_badge=`
[hide]
~ Over the registration desk hangs a banner the size of a tennis court: LUMEN ANALYTICS PRESENTS CTRL+ALT+CON 20. Underneath, smaller: "Protect yourself this week. SafeSphere is free for all attendees."
"Volunteer": Name for your badge? You write it yourself, marker's there. People usually write their handle. Some people write their legal name. Some people write nothing. Up to you.
* The badge. A blank white space on a little circuit board. Whatever you write here, four thousand people will read all week.
? Write your handle: {h}
 [fx skill:2]
 ~ Clean. Anonymous. The volunteer nods, like you've passed a test you didn't know you were taking.
? Write your full legal name. For networking!
 [fx foot:12 clout:3]
 [flag leak_name]
 ~ The volunteer looks at you for a long second. "Bold," they say, in the voice of someone filing an incident report.
? Draw a skull. Let them wonder.
 [fx clout:4]
 [flag skull]
 ~ It looks less like a skull and more like a worried potato. People will certainly wonder.
~ The lanyard goes over your head. The badge is a real circuit board: a little screen, eight tiny LEDs round the edge, a coin battery, and on the back, in tiny white letters, "DESIGNED BY T. MARSH · BADGE LAB · HALL C".
"Volunteer": It blinks. It plays a little game. It's got a radio in it so badges can say hi to each other. Don't lick it. You'd be surprised.
"Con PA": Welcome to CTRL+ALT+CON! Reminder: the official Wi-Fi is called CTRLALTCON. There is also a fake one called CTRLALTCON. Good luck, everyone.
* A fake one with the same name. An "evil twin": a hotspot that pretends to be the real network, so your phone joins it and sends everything through a stranger's laptop. They warned four thousand people about it like a weather report.
? Turn Wi-Fi off. Mobile data only, all week.
 [fx skill:3]
 [flag wifi_off]
? Join "CTRLALTCON". It's probably the real one.
 [fx foot:4 phish:1]
 [flag joined_twin]
 ~ Your phone joins a network called CTRLALTCON. It's very fast. Suspiciously fast. Something inside you says "that's the bad one". You stay on it anyway, because you need to look at the map.
~ A man in sunglasses, indoors, at six in the evening, slides up beside you holding a SafeSphere tote bag.
dave.h: Yo! New guy! MegaHax. Hacker. You've probably heard of me.
* You have not heard of him.
dave.s: I hacked my ex's Netflix. Five times. She changed the password every time. Rookie mistake. I just kept guessing her birthday.
dave.h: Also I basically work for Lumen. Intern. Social media team. I run the SafeSphere TikTok. Ten million downloads, bro. Ten. Million. Some of those are because of my dance.
? "What does SafeSphere actually do?"
 [fx skill:2]
 dave.o: It... protects you? From... the internet? It's got a shield icon. And a VPN. And "smart insights".
 dave.s: Don't worry about it. I don't. That's the beauty of it. It's free, so it's, like, a gift.
 * If something's free, you're not the customer. You read that on a forum. It's the most useful thing you've ever read on a forum.
? "Can you get me free merch?"
 [fx clout:2]
 dave.h: Bro. I AM free merch.
 ~ He gives you a SafeSphere stress ball with a QR code on it. You do not scan it. You squeeze it once. It wheezes.
dave.h: Stick with me, bro. I'm gonna be famous by Sunday. The opening ceremony's in Hall A. Big room, north side, can't miss it. Go go go.
* You recognise in Dave something you're afraid of in yourself. The sunglasses. The bit about being famous by Sunday.
[flag d1_badge]
[unlock map]
~ The volunteer unclips the rope. The Foyer opens up: escalators, glass on every side and, through the glass to the east, a courtyard with one enormous tree, lit from below.
~ Your phone buzzes. The con app. "Opening ceremony starts in 10 minutes · Hall A. Your seat: Block C, Row 4, Seat 12. Look for the light."
[sum You picked up your badge, designed by someone called T. Marsh, and met Dave, a Lumen intern called "MegaHax" who runs the SafeSphere TikTok.]
`;
SC.d1_ceremony=`
[bg hallA]
[hide]
[cut pan hallA]
~ Hall A. You stop in the doorway and just look.
~ A bowl of two thousand seats rising into the dark on three sides, a stage the width of a street, and over it a screen the size of a house. The seats are filling with hoodies. Somewhere a DJ is playing something that sounds like a modem falling in love.
~ Block C, Row 4, Seat 12. You find it. You sit. The person on your left is eating noodles. The person on your right is asleep.
* Two thousand people. Some of them wrote the tools you've only read about. Some of them broke things you thought couldn't be broken. And you're in Row 4, with a bag of sausage rolls.
[cut hallA_crane marge]
~ The lights go down. One spotlight. A woman in her sixties with silver hair cropped short and reading glasses on a chain walks to the podium like she owns the building, which, for this week, she basically does.
marge.h: Welcome to CTRL+ALT+CON number twenty! I'm Marge, your con chair. I've been doing this since it was thirty people in a pub basement and a router we weren't supposed to have.
~ A roar from the seats. Marge waits for it with the patience of someone who's waited for it nineteen times before.
marge.n: Three rules. Same three rules as every year.
marge.n: One. Be excellent to each other. Two. Only hack what you're allowed to hack. Three. Do not trust the Wi-Fi.
marge.s: And a fourth rule, new this year, because some of you are animals. No photos of people's badges without asking. Your badge is your face here. Treat it like one.
* No photos of badges. You think about the forum post, the ticket photo, the hotel name. You quietly decide it's fine. It's probably fine.
marge.n: This year's a big one. Seven days. A hundred and forty talks. Twenty-two villages. The world's longest-running Capture the Flag, final on Saturday. And a closing keynote on Sunday that I've been told, repeatedly, by its speaker, will "change everything".
marge.s: Speaking of whom. A word from our headline sponsor. He insisted. Twice.
[cut hallA_stage victor marge]
~ A man walks on to applause he seems to have expected. Fifties, silver hair swept back, a suit that costs more than your rent, a smile with a lot of practice in it.
victor.h: Thank you, Marge. Thank you, everyone. Victor Hale, CEO of Lumen Analytics. When I was your age, I was in a pub basement too.
* Somewhere behind you someone mutters "no you weren't".
victor.n: At Lumen, we believe privacy is a human right. Which is why SafeSphere is, and always will be, free.
[cut hallA_podium victor marge delphine]
~ Behind him, to the side of the stage, a woman in a sharp navy suit with a sleek blond chignon watches the audience, not the speaker. She mouths the next line half a second before he says it.
victor.s: This week, we're proud to give every attendee something special: your badge is "SafeSphere-enabled". It keeps you connected, and it keeps you safe.
* Keeps you connected. To what?
victor.h: Join me on Sunday at the closing keynote. We'll be announcing something that changes how people connect, forever.
~ Applause, mostly. Somebody boos. Somebody claps the boo. Most people are looking at their phones.
[cut hallA_wing marge victor owen]
~ As Victor walks off, a bearded man in a brown cardigan and glasses shakes his hand at the edge of the stage, a little too long, a little too gratefully. His lanyard says OWEN PRYCE · DEPUTY CHAIR.
[cut hallA_stage marge]
marge.n: Right. Go. Be excellent. Badge Lab's in Hall C if your badge is broken, the CTF kicks off tomorrow morning, and the hotel bar is open from seven. Hydrate.
[flag d1_open]
[cut off]
~ The lights come up. Your phone buzzes twice.
sms Ellie: did you get there ok?? is it all hoodies? send a pic of the hoodies (not of you, I know, opsec, I'm learning)
~ And from the con app: "Halcyon Hotel: check-in for CTRL+ALT+CON guests is now open. Through the Link off the Foyer's north-west corner, then the Promenade to reception."
[sum The opening ceremony. Marge's three rules. Victor Hale said every badge was "SafeSphere-enabled" and promised a keynote on Sunday that would change everything.]
`;
SC.d1_checkin=`
[bg lobby]
[hide]
~ The Link: a glass bridge-building across the lane between the con and the hotel. Through it, the Halcyon. Marble floor, palms in brass pots, a lobby four storeys high with a glass front onto a garden full of little lights.
"Receptionist": Welcome to the Halcyon! Checking in? Name on the booking?
? Give the booking reference instead of your name
 [fx skill:3]
 "Receptionist": Oh, a reference person. Very tidy. We've had a lot of reference people today. Here we are.
? Say your full name, loudly, to the whole lobby
 [fx foot:4]
 ~ Three people in the queue behind you look up. One of them writes something down. Probably nothing. Probably.
"Receptionist": Would you like to join Halcyon Rewards? Just your email, phone number, date of birth, home address and your mother's maiden name, and you earn points!
* Every one of those is a password reset question somewhere. This is a form designed by a burglar.
? "No thanks."
 [fx skill:2]
 "Receptionist": Of course. Honestly, nobody at this conference has said yes. It's been very refreshing.
? "Sure, free points!"
 [fx foot:8 clout:1]
 [flag rewards]
 ~ You fill in the form. All of it. The receptionist looks genuinely sad for you, in the way of someone who has seen what happens to the forms.
"Receptionist": Room 1337. Thirteenth floor. Lifts are behind you. Enjoy your stay. And... the bed is a bit crunchy. It's a feature. We're told.
~ The key card is in your hand. Your badge is round your neck. Your phone is already on the camera app, somehow, without you deciding.
? Post a selfie with your badge and your room key
 [fx foot:10 clout:6]
 [flag leak_photo]
 ~ Twelve likes. One of them is from an account called whisper_____.
 * Cool. Cool cool cool.
? Put the phone away
 [fx skill:2]
 ~ Restraint. The rarest stat at any hacker con.
[flag d1_checkin]
[sum You checked into the Halcyon. Room 1337, thirteenth floor.]
`;
SC.d1_room=`
[bg hotel]
[hide]
~ Room 1337. A corner room with two windows, a seating area, a bathroom with an alarming amount of marble, and a bed that crunches when you sit on it.
* 1337. Leet. Hacker for "elite". Someone at the hotel has a sense of humour, or the con booked it on purpose, or the universe is laughing at you specifically.
~ You drop the bag. You put Ellie's loaf on the desk like an offering. You put the plastic plant on the windowsill, if you brought it.
if f('plant')
 ~ The plant looks out over the city. It's been through a lot. It deserves the view.
~ Thirteen floors below, the whole con glows: the courtyard tree, the glass Foyer, the Lumen logo on the roof turning and turning.
* From up here the logo looks less like a shield and more like an eye.
~ Your phone buzzes. "CTRL+ALT+CON · Day 1 social: the Hotel Bar, from 9 PM. Everyone welcome. Be excellent."
[flag d1_room]
[wake room1337]
[sum Room 1337. From the window, the Lumen logo on the con roof looks like an eye.]
`;
SC.d1_bar=`
[bg bar]
[cut pan bar]
[hide]
~ The Hotel Bar, off the Promenade. Dark wood, brass, low green lamps, a long marble counter and a terrace door through to fairy lights and heaters.
~ Half the con is here, arguing about tabs versus spaces, and the other half is arguing about whether that argument is still funny. It is not. They're having it anyway.
~ You squeeze up to the bar. The bartender has red hair in a messy bun, freckles, a black waistcoat, and the expression of someone who has heard the word "blockchain" four hundred times today.
bea.s: You're blocking the bar, hoodie. Order or move.
[meet bea]
? "Club-Mate, please."
 [fx bea:4]
 bea.n: Of course. You lot drink it like it's a personality. Two hundred today. We're nearly out. There's going to be a riot.
? "Whatever's strongest. I'm a hacker."
 [fx bea:-2 clout:3]
 bea.s: Strongest thing we've got is the guest Wi-Fi password. It's "password1". Here's a lemonade.
? "Water, please. Long week."
 [fx bea:6]
 bea.h: A sensible one. Hang on, let me alert the press.
bea.n: Bea. I work here. No, I don't want to see your GitHub. Yes, I've heard of Linux. No, I don't want to install it.
* You hadn't been going to ask. You'd thought about asking.
~ At the end of the bar, a cluster of men in identical navy blazers and Lumen lanyards. Victor Hale is in the middle, holding court, telling a story with his hands. The woman in the navy suit from the stage stands at his shoulder with a phone, typing every time he finishes a sentence.
~ She looks up once, straight at you, the way you'd check a smoke alarm. Then back down.
victor.s: Bea, darling. Another round. On the company.
~ He snaps his fingers at her. Twice.
~ Bea's smile doesn't move at all. But her eyes do something very cold, and very quick, and then they're fine again.
bea.n: ...Coming right up, Mr Hale.
? Say something to Victor
 [fx bea:6 clout:3]
 > She's got a name. And she's not a dog.
 ~ Victor turns. The smile stays on. He looks at your badge first, then your face, in that order.
 victor.s: Of course. Forgive me. Long day. Bea, thank you, when you have a moment.
 ~ The woman at his shoulder types something. You'd give a lot to know what.
 [flag stood_up_victor]
 bea.a: I didn't need rescuing, hoodie. But... ta.
? Say nothing. Watch.
 [fx skill:2]
 ~ You watch how they stand: Victor in the middle, the blazers in a ring, and one man who never drinks and never laughs and never stops looking at the doors. Tall, grey buzz cut, a scar through one eyebrow, a grey overcoat over the back of his stool.
 * The man from the station kiosk. The six phones.
 [flag saw_krall_bar]
~ Then every screen in the bar goes black. The TVs. The menu boards. The jukebox. The little screen on the card machine.
[bg void]
whisper: GOOD EVENING, CTRL+ALT+CON. LET'S PLAY A GAME. IT'S CALLED EXPOSURE.
whisper: TONIGHT'S CONTESTANT: "MEGAHAX". REAL NAME: DAVID PRICE. HOMETOWN, EMPLOYER, FAVOURITE PIZZA, AND HIS MUM'S MAIDEN NAME.
whisper: ALL OF IT FROM HIS OWN PUBLIC POSTS. HE SHARED HIS BOARDING PASS. THE BARCODE DID THE REST.
whisper: NO ADDRESS. I'M NOT AN ANIMAL. BUT ANYONE COULD HAVE FOUND IT.
[bg bar]
~ Across the bar, Dave is standing very still with a drink in his hand and his sunglasses pushed up on his head.
dave.o: That's... that's not even... BRO. I'm an INTERN. I post TikToks!
[bg void]
whisper: P.S. LUMEN KNOWS MORE ABOUT YOU THAN I DO. ASK THEM WHAT SAFESPHERE DOES.
[bg bar]
~ The screens snap back to the cocktail menu. And then, all at once, four hundred people silently open their own social media accounts and start scrolling backwards.
[clue daveonly]
victor.a: Ridiculous stunt. Somebody find out who that is.
~ The tall man with the scar has already left his stool. You didn't see him go.
if S.foot>=20
 * You think about your own posts. Your ticket. Your hotel. Your face. You feel a cold draught that isn't the air conditioning.
bea.s: Is this a normal hacker thing? Should I be charging extra?
? "It's called doxxing. Putting someone's private details together and publishing them."
 [fx bea:4 skill:2]
 bea.n: Doxxing. Sounds like a cough. Looks like a mugging.
 > This one only used things he posted himself. That's the point it was making. He did it to himself, one post at a time.
 bea.a: Bit cruel, though. Making the point on a person.
 * She's right. It was cruel. It was also correct. You don't know what to do with both of those at once.
? "Not normal. But not new."
 [fx bea:2]
 bea.n: Lovely. Four thousand of you, and one of you can turn my telly into a crime scene.
bea.n: Go on. Get some sleep. You've got that look people get on the first night, when they realise everyone here is cleverer than them.
> Is everyone here cleverer than me?
bea.h: No. But most of them think they are. That's worse. Ta-ra, hoodie.
~ On the way to the lifts, a flash of long silver hair disappears into the stairwell door by the Promenade. When you look again, it's gone.
[msg ellie omg is your conference on the news?? someone put a guy's whole life on the screens?? are you ok?? do you have the loaf??]
[msg dave bro my mum just called me "david". she has never called me david. she knows. everyone knows]
[flag d1_bar]
[sum The Day 1 social. Bea the bartender. Victor snapped his fingers at her. Then WHISPER took over every screen and doxxed Dave using only his own posts. "Lumen knows more about you than I do."]
`;
SC.sleep1=`
[bg hotel]
[hide]
~ Room 1337. You lie on the crunchy bed with the lights off and the city coming in through both windows.
* Day one. A badge. A bartender. A man who snaps his fingers. A woman who mouths his lines. A man with a scar who buys phones for cash. And someone called WHISPER who can turn every screen in a building into a stage.
* And Lumen, everywhere. On the banners. On the badges. On Brindle's phones. In Ellie's inbox.
if f('posted_ticket')||f('leak_photo')||f('leak_name')
 * You think about what you've put out there today. It felt like nothing at the time. It always feels like nothing at the time.
~ The Lumen logo turns on the con's roof. Round and round. You fall asleep watching it.
`;
SC.sleep=`
[bg hotel]
[hide]
~ Room 1337. The crunchy bed, the city in both windows, the Lumen logo turning on the roof across the lane.
* {=pick(['You lie there replaying the day. The good parts get longer every time.','Tomorrow. Whatever tomorrow is.','You\\'re asleep before you finish deciding whether to set an alarm.'])}
`;
SC.doxxed=`
[bg void]
[hide]
wh1sper: EXPOSURE: 100.
~ Your phone won't stop buzzing. Your name. Your face. Your hometown. Your room number. Screenshots of things you posted years ago, in a thread that's being shared faster than you can read it.
~ Somewhere, someone has put all the small things together. Every one of them, you handed over yourself.
* You can't undo this. Not this version of today.
~ ...
~ You wake up with a start. Morning. Room 1337. Your phone is quiet.
* A dream. It felt like a warning. It felt like a memory of something that hasn't happened yet.
* Today. Again. More carefully this time.
`;
SC.caught=`
~ "Can I help you?"
~ Somebody has seen you. Somebody with a lanyard, and a radio, and a good memory for faces. They take a photo of your badge before you can turn it round.
* That photo is going somewhere. You don't know where. That's the worst part.
`;
function d1QueueRes(ok,n){if(ok>=4)S.f.office_good=1}

/* ============ DAY 3 · WEDNESDAY: Ellie arrives, two whispers, Saoirse, the roof ============ */
SC.d3_ellie=`
[bg lobby]
[hide]
[flag ellie_here]
~ The Halcyon lobby at nine in the morning: marble, palms, a glass wall onto the garden, and a man dressed as a cardboard robot asking the concierge where the nearest charging point is.
~ A woman in a cream cardigan, a red beret and a stripy scarf is holding three enormous paper bags and staring at the robot with deep suspicion.
~ It takes you a second. You've never seen Ellie without her apron. You've never seen her in a beret. She looks like someone from a film about a nicer city.
ellie.h: {h}! You're real! You're here! I brought forty-eight pastries!
ellie.o: Is that a robot? Is he allowed to be a robot? Is everyone here like this?
? "Everyone here is exactly like this. Welcome."
 [fx ellie:4]
 ellie.h: I love it. I'm terrified. I love it.
? Hug her
 [fx ellie:7]
 ~ She smells of butter and train. The pastry bags crunch between you.
 ellie.b: Oh! Hi. Okay. Hello. Careful of the croissants. Hello.
? "You look different."
 [fx ellie:5]
 ellie.b: I'm wearing clothes! Normal clothes! I own normal clothes, I'll have you know. I just don't let them near the ovens.
 ellie.s: Mrs Okafor said I should "look like a person who goes places". So I'm a person who goes places. In a beret. Is the beret too much? Tell me the truth. No. Don't.
[adv ellie 2]
ellie.n: Okay. Rules. You're the expert. Tell me the rules before I embarrass you.
* The expert. Two days ago you didn't know what a beacon was. But she's looking at you like you'll know.
? "Phone on mobile data. No Wi-Fi, no Bluetooth, all week."
 [fx ellie:3 skill:2]
 ellie.n: Mobile data. No Wi-Fi. No Bluetooth. That's three things. I can do three things.
 [flag ellie_rules]
? "Don't put your name on your badge. Draw something instead."
 [fx ellie:4 skill:1]
 ellie.h: I'm drawing a croissant. Obviously.
 [flag ellie_rules]
? "Just be yourself. People here will love you."
 [fx ellie:4]
 ellie.b: That's not a rule, that's a fridge magnet. But okay.
~ She takes her day pass from her coat pocket. Blank badge. She draws a croissant on it with the volunteer's marker, quickly, perfectly, like she's done it a thousand times on paper bags.
~ The badge lights blink: blue, blue, blue.
ellie.n: Why is it blue? The one on the poster's a rainbow.
> That's... a long story. I'll tell you later. Leave it in your bag when you can.
ellie.a: You've got your serious face on. You've got your "I found a forwarding rule" face on.
* She can read you. That's either very good or very dangerous, and you're not sure it isn't both.
ellie.n: Okay. I'm going to set up in the café, the nice manager said I can sell from a table until lunch. Hackers will follow the smell. You go and do your thing. Come and find me.
~ She picks up her bags, then puts them down again, and looks over at the lifts, at the stairwell door beside them.
ellie.o: {h}. That door. It says roof access. A woman with long silver hair just went up it. Like a ghost. A ghost with great hair.
* Silver hair. The flash in the stairwell on the first night.
[flag roof_known]
ellie.n: Is that normal? People going on the roof?
> At this con? Nothing's normal.
ellie.h: I'm going to sell pastries to scared hackers. You go and do... whatever this is. Be careful.
[sum Ellie arrived, in a beret, with forty-eight pastries. She saw a silver-haired woman go up the stairwell to the hotel roof.]
`;
SC.d3_whispers=`
[bg hallA]
[hide]
[cut hallA_stage]
~ Midday. Hall A is packed for the day's big talk: "The State of Privacy", given by a professor with an enormous beard and a nervous laugh. Two thousand people. Ten minutes in, he's explaining cookies.
~ Then every screen in the hall goes black. The house lights dip. A hush, the way a room goes quiet before a storm.
[bg void]
whisper: GOOD AFTERNOON. TODAY'S CONTESTANT: VICTOR HALE, CEO, LUMEN ANALYTICS.
whisper: HOME ADDRESS: [REDACTED. I'M NOT AN ANIMAL.]
whisper: INSTEAD, HERE IS WHAT HIS APP SENDS HOME. YOUR CONTACTS. YOUR LOCATION, EVERY SIXTY SECONDS. EVERY WEBSITE YOU VISIT, THROUGH ITS "PRIVACY VPN".
whisper: TEN MILLION PEOPLE. ASK HIM. I'LL WAIT.
[bg hallA]
[cut hallA_front victor delphine]
~ A spotlight swings. Victor Hale is in the front row, in a reserved seat. Two thousand faces turn to him.
~ He stands. He buttons his jacket. He smiles. Delphine, two seats along, has gone very still.
victor.a: Fabricated. Defamatory. SafeSphere is independently audited by Bastion Security. Lumen's lawyers will be in touch with this... WHISPER.
[cut hallA_stage marge]
~ From the side of the stage, Marge, who wasn't on the programme, takes the professor's microphone.
marge.n: Victor. Is any of it true?
victor.s: Marge. Please. Would a privacy company lie about privacy?
~ A ripple through the hall: half laughter, half something nastier. The professor is holding his beard.
[cut off]
~ In the crowd you spot a lilac hoodie. Rin has gone completely white.
* Every sixty seconds. Astrid said that number on the train. Everyone who looks knows.
~ The screens come back. The professor tries to restart. Nobody's listening.
~ Forty minutes later, in the Foyer, phones start buzzing. Everyone's. Yours. A new post, on every con channel and every social feed at once. Same black background. Same capitals. But the name at the top is different.
[bg void]
wh1sper: WH1SPER HERE. WHISPER WAS TOO SOFT. HERE'S A REAL LESSON.
wh1sper: CONTESTANT: "PACKET_PAM". REAL NAME. HOME ADDRESS. A PHOTO OF HER FRONT DOOR. HER DAUGHTER'S SCHOOL.
wh1sper: SHE WORKS ON PRIVACY TOOLS. SHE SHOULD HAVE BEEN MORE CAREFUL. INSTALL SAFESPHERE. SHIELD MODE PROTECTS YOU FROM PEOPLE LIKE ME.
[bg foyer]
* packet_pam. The person who replied "source?" to your forum post. Real. Here. Somewhere in this building, finding out her daughter's school is on four thousand phones.
* And the post ends with an advert.
[clue realaddr]
[sum Midday: WHISPER exposed what SafeSphere really collects, live, in front of Victor. Forty minutes later a copycat, "WH1SPER", posted a real person's home address and her daughter's school, and told everyone to install SafeSphere.]
~ The Foyer has changed key. People are in clumps. A volunteer is crying. Somebody's pulling the battery out of their badge with a screwdriver. Lumen staff in navy lanyards are handing out SafeSphere cards: "Shield Mode: protect yourself from doxxers. Free."
~ A woman with a mass of auburn curls, a long camel trench coat, a notebook in one hand and a pencil behind her ear is moving through the crowd the wrong way, towards the trouble instead of away from it.
~ She stops in front of you, looks at your badge, then at your face.
saoirse.n: You were in Hall A. Third row of block C, on the aisle. You didn't take a photo when the screens went black. Everyone else took a photo.
[meet saoirse]
saoirse.n: Saoirse Quinn. The Ledger. I'm a journalist. Investigations. I've got four minutes before my editor asks why I haven't filed, and I'd like to spend two of them on you.
? "Why me?"
 [fx saoirse:4]
 saoirse.s: Because you didn't take a photo. People who don't take photos are thinking. I like talking to people who are thinking.
? "I don't talk to journalists."
 [fx saoirse:3 skill:2]
 saoirse.h: Good. Hold on to that. Most people would kill to be quoted. Most people shouldn't be.
 saoirse.n: Then don't talk. Listen. I'll do the talking.
? "Off the record?"
 [fx saoirse:6 skill:2]
 saoirse.o: You know what that means. Good. Off the record means I can't print it or say who said it. Background means I can use it but not your name. On the record means everything. Always ask which one you're in.
 saoirse.n: Off the record. Go.
saoirse.n: Two different people did those two posts. Look at them side by side.
saoirse.n: The first one, WHISPER: capitals, no address, "I'm not an animal", aimed at a company. It's showing what's already public. A lesson. Cruel, maybe, but careful.
saoirse.a: The second one: a real address, a child's school, aimed at a private person, and it ends with an advert. "Install SafeSphere." That's not a lesson. That's a sales pitch with a body count.
* She's right. You saw it, but you didn't see it.
? "Someone wants people scared, so they install the shield."
 [fx saoirse:8 skill:3]
 [flag copycat_idea]
 saoirse.h: There it is. Thinking. You'd be wasted in insurance.
 > How do you know I work in insurance?
 saoirse.s: Your lanyard's from last year's Brindle & Co charity fun run. It's in your back pocket. I notice lanyards.
? "Maybe WHISPER just got angrier."
 [fx saoirse:3]
 saoirse.n: Maybe. People do. But people change their minds. They don't usually change their spelling, and their politics, and their business model, overnight.
saoirse.n: I'm in the press room, Con Ops corridor, upstairs off the north-east concourse. If you see anything, anything at all, you come to me before you post it. Posting it gets it buried. Bringing it to me gets it checked.
saoirse.d: I learned that the hard way. Once.
~ Her phone rings. She looks at it like it owes her money.
saoirse.n: Editor. Four minutes. Told you. Think, {h}. Keep thinking.
* She knew your handle. She never looked at your badge after the first glance. She'd read it in one.
[sum In the chaos, Saoirse Quinn, an investigative journalist from The Ledger, found you. Two different people wrote those posts, she said: one is a lesson, the other is a sales pitch with a body count.]
`;
SC.d3_roof=`
[bg stairwell]
[hide]
~ The thirteenth floor. The fire stairs at the end of the corridor, past Room 1337, go up one more flight to a door marked ROOF · STAFF ONLY. The door's propped open with a folded beer mat.
* Someone wanted to be able to get back in.
[bg plantdeck]
~ The roof. Wind, city lights in every direction, the hum of the big air-con units and, far below, the con: the courtyard tree lit like a lantern, the glass Foyer, the Lumen logo turning slowly on the convention centre's roof.
~ On top of the biggest air-con unit, legs crossed, laptop open, perfectly calm, sits a woman with long silver hair.
mira.s: You followed the breadcrumbs. Most people just eat them.
[meet mira]
mira.n: Call me Mira. It isn't my name. That's rather the point.
* Silver hair. The stairwell. The roof. The DM from the top floor.
mira.n: Everyone at this con thinks they're invisible. They post boarding passes, room keys, their dog's name. Then they act surprised.
if f('leak_hometown')
 mira.s: Lovely hometown, by the way. You told fifty thousand strangers on a livestream. I was one of them.
 [flag mira_tell]
elif f('leak_photo')
 mira.s: Your selfie had Room 1337 in the reflection of your key card. Cute.
 [flag mira_tell]
elif f('leak_name')
 mira.s: You wrote your legal name on your badge. Badges are for handles, {h}. Handles are for exactly this.
 [flag mira_tell]
elif f('posted_ticket')
 mira.s: You posted your ticket two weeks ago. Forum, three in the morning. You should sleep more.
 [flag mira_tell]
else
 mira.s: You, on the other hand, are almost boring. Almost. I had to work for you. I don't usually have to work.
 [fx mira:6]
[clue mirasays]
mira.n: So. A question. What is privacy, to you?
? "Control. Choosing what you share, and with whom."
 [fx mira:10 skill:3]
 mira.h: Good answer. Most people think it's hiding.
? "If you've got nothing to hide, you've got nothing to fear."
 [fx mira:-6]
 mira.s: Oh, sweet summer packet. Everyone has something to hide. Their salary. Their diagnosis. Their ex. Their vote. That's not guilt. That's being a person.
? "I'm untraceable. Seven proxies."
 [fx mira:-3 clout:3]
 mira.s: Seven. Wow. I counted four.
mira.n: Today, in Hall A, somebody told two thousand people what SafeSphere sends home. That was a public service. And then, at 12:47, somebody posted a woman's front door.
mira.a: Those are not the same. Do you understand? They are not the same.
* She says it to the city, not to you. Her hands have stopped on the keyboard.
? "I know. The first one never posts addresses."
 [fx mira:8]
 [flag told_mira_copycat]
 mira.o: ...You noticed.
 mira.n: The second one wants a monster. Monsters sell shields. And whoever WHISPER is just got a twin they never asked for.
? "Are you WHISPER?"
 [fx mira:4 skill:1]
 mira.s: I'm a woman on a roof with a laptop. There are six of us in this building at any given moment. It's that kind of week.
 mira.n: But if I were WHISPER, I'd be furious today. Somebody's wearing my face to sell the thing I hate.
if f('path_report')
 mira.a: One more thing. You forwarded my message to Owen Pryce. Owen gave it to Silas Krall in four minutes. I know because I was watching Krall's phone.
 mira.d: I can't talk to someone who hands me to them. Not tonight. Maybe not again.
 [flag mira_burned]
 * Owen. Con Ops. "The right people."
elif f('drop_got')||f('path_whisper')||f('told_mira_copycat')
 if f('drop_missed')
  mira.d: You didn't pick up the drop. I waited. I said I wouldn't wait, and I waited anyway. Don't tell anyone that.
  [fx mira:-4]
 mira.n: The box is called LANTERN-01. It's in the MDF closet under the con. Everything the badges hear goes into it.
 mira.n: Thursday night. Two in the morning. I need ten minutes with it, and someone who can get me past the NOC. Someone the cameras already know.
 ~ ⚑ This choice will change your week.
 ? "Yes. Thursday night."
  [flag heist_yes]
  [fx mira:8]
  mira.h: Service tunnel. Two AM. Wear something boring.
 ? "No. We do this the slow way."
  [flag heist_no]
  mira.s: The slow way. Fine. It's yours. I'll be up here when it fails.
 ?(f('informant')) Say yes. Then text Krall.
  [flag heist_yes betray_mira]
  mira.h: Service tunnel. Two AM. Wear something boring.
  * You smile at her. Then, in the stairwell on the way down, you take out your phone.
mira.n: Come back, if you want. Bring a better question. I'm up here most nights. The wind can't be logged.
~ You look down at the con for a moment. When you look back, the air-con unit is empty. Only a folded beer mat left on top of it, with three words written on it in neat pencil.
~ "DON'T TRUST BLUE."
[flag roof_open]
[sum On the hotel roof you met Mira: silver hair, a laptop, and a better question. She was furious about the copycat. "Somebody's wearing my face to sell the thing I hate."]
`;

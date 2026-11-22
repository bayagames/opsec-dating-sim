/* ============ MORE OF THE WEEK: packet_pam, the Lumen booth, Owen ============ */
SC.d3_pam=`
[bg quiet]
[hide]
~ A message from a con volunteer: "Someone's asking for you in the Quiet Room. Says you'll know her handle."
~ The Quiet Room. Dim lights, bean bags, a sign that says THIS ROOM IS FOR BRAINS THAT ARE FULL. In the corner, a woman in her fifties with grey hair in a neat bob, round glasses and a cardigan is sitting very upright with a laptop she isn't looking at.
pam.n: You're {h}. From the forum. "Most firewalls are a joke if you know what you're doing."
* packet_pam. The person who replied "source?". The person whose front door went out on four thousand phones three hours ago.
pam.n: Pamela. Pam. I build privacy tools. Open source ones. For nineteen years. I installed SafeSphere on a test phone in March to study it. That's how they had my location, every minute. I studied it, and it studied me back.
pam.d: My daughter's at school forty miles from here. Her school's name is on every phone in this building. I've called the head. I've called the police. The police said "has anyone actually come to the house?"
? "I'm so sorry. That wasn't WHISPER. It was someone wearing WHISPER's name."
 [fx skill:3]
 pam.o: ...You know that?
 > I know who doesn't post addresses. And who does.
 pam.n: Then you know more than the police. That's a low bar, but you're over it.
? "Why did you want to see me?"
 [fx skill:1]
 pam.s: Because I've been staring at that forum thread for a week, waiting for you to answer me. And today I thought: life's short. I'll ask in person.
pam.s: So. "Source?"
* There it is. The question you've been not answering for a week. From the one person on Earth with the right to ask it today.
? "I didn't have one. I made it up. I'm sorry."
 [fx skill:5 clout:-2]
 pam.h: ...Thank you. Do you know how rare that is? In nineteen years, you're the fourth person to ever say that to me.
 pam.n: Here's what I tell everyone who says it: good. Now go and find one. Then you'll know something.
 [flag pam_honest]
? "I've got one now. This week. LANTERN-01, the badges, all of it."
 [fx skill:3 clout:2]
 pam.o: ...Show me.
 ~ You show her what you can. She reads fast, the way people read who've read a lot of code.
 pam.a: Oh, that's bad. That's very, very bad. That's a graph built by people who know exactly what a graph is for.
 [flag pam_shown]
pam.n: I'm going home tonight. My daughter wants me home and I want to be home. But I've left something for you.
~ She turns her laptop round. A folder: "pam_tools". Little open-source programs. One to check any app for trackers. One to check whether your phone is talking to anything it shouldn't. One, freshly written today, titled "who_is_wh1sper.py", that compares the two kinds of posts, word by word.
pam.n: It's yours. It's everyone's. That's the point of open source.
[fx skill:6]
[clue locdata]
pam.h: And {h}? Answer the thread. Tell them where your source was. It'll be the best post you ever write.
[sum In the Quiet Room you met packet_pam, the woman WH1SPER doxed. She'd installed SafeSphere to study it, and it studied her back. She asked "source?" in person.]
`;
SC.d4_booth=`
[bg foyer]
[hide]
~ Thursday morning, and the Foyer is loud in a new way. A crowd round the Lumen booth under the giant turning logo. A queue for something. And a second crowd, facing the first, holding hand-made signs.
~ The booth: "SAFESPHERE 2 · BETA · BE THE FIRST TO CONNECT". Lumen staff in navy lanyards hand out cards with download codes and free T-shirts. The queue is long. People are scared. WH1SPER has spent two days teaching them to be.
~ The signs: "NO GRAPHS". "MY FRIENDS DIDN'T CONSENT". "SOURCE?". One just says "BLUE LIGHTS LISTEN" with a drawing of a badge.
if met('dave')
 ~ In the middle, between the two crowds, holding a box of T-shirts and looking like he wants to be swallowed by the carpet: Dave.
 dave.d: Bro. They put me on the booth. "You're the face of the TikTok, Dave." I can't. I can't do the dance. Not today.
? Take a beta card. Know your enemy.
 [fx skill:2]
 [flag beta_card]
 ~ The card is thick and glossy. "SafeSphere 2: Connect what matters." On the back, a code, and in small print: "By activating you consent to relationship insights."
 * A beta to take apart, later, on a laptop that's never touched your real contacts.
? Stand with the signs
 [fx clout:6 foot:2]
 ~ Somebody hands you a sign. It says "SOURCE?". You hold it up. A photographer from a newspaper takes your picture. You turn your face away just in time. Mostly.
? Help Dave get out of there
 [fx skill:1]
 ~ You take the box of T-shirts off him and put it on the booth. "Toilet break," you tell the Lumen supervisor. Dave follows you out like a man walking out of a fire.
 dave.n: Thanks, bro. I'm quitting. Today. Maybe. Tomorrow. Soon.
 [flag dave_out]
~ Delphine appears from behind the booth, phone up, face calm, and in thirty seconds she has the protesters and the queue somehow on the same side of a rope, both feeling listened to. It's the most frightening thing you've seen all week.
if met('delphine')
 ~ She catches your eye over the crowd and, very slightly, shakes her head. Not at you. At all of it.
~ And at the back, by the Hall C doors, Silas Krall is photographing the protesters' faces, one by one, on his phone.
[sum Thursday morning: Lumen launched a SafeSphere 2 "beta" at its booth. Hackers protested with signs. Krall photographed their faces.]
`;
SC.d6_owen=`
[bg conops]
[hide]
~ Con Ops, Saturday morning. Whiteboards, radios, a fridge full of Club-Mate and a volunteer asleep under a desk. Owen Pryce is at his own desk, in his brown cardigan, with two coffees, one of which he slides across to you.
owen.n: Sit. Please. I've been meaning to talk to you all week. Marge says you're... involved. In whatever Rin Takahashi's doing tomorrow.
owen.n: I'm the deputy chair. I do the running order. If there's something happening in Victor's slot, I really need to know the timing. For the AV. For safety. You understand.
if solved('m6')
 * You know. The firmware, the box, the debt, 1313 at two in the morning. And he's fishing.
 ? Tell him you know. Quietly.
  [fx skill:4]
  > Lantern Consulting paid off eighty thousand pounds for you in March, Owen. You signed the badges over. You go to 1313 every night.
  ~ He doesn't deny it. He puts the coffee down very carefully, like it might go off.
  owen.d: ...They said it was analytics. Sponsors always want analytics. They said it'd save the con. I'd have lost my house.
  owen.d: Then they wanted the running order. Then they wanted names. Who's meeting who. I didn't... I didn't know what the graph was for. I do now. Since Thursday. I haven't slept.
  > Then help us. Tell them what we want them to hear.
  owen.o: ...You want me to lie to Silas Krall?
  > I want you to lie to Silas Krall.
  ~ A very long pause. Then he nods, once.
  [flag mole_fed owen_turned]
  [sum Owen Pryce admitted it: Lumen paid his debts, and he'd been feeding them the con's plans. He agreed to feed them a false one.]
 ? Give him a fake timing and say nothing else
  [fx skill:3]
  > 4:30. After the reveal. Ten minutes.
  owen.h: 4:30. Perfect. That's... perfect. Thank you.
  * It's 4:09. He'll tell Krall 4:30. And you'll know, by five past four, whether your mole is still a mole.
  [flag mole_fed]
else
 ? "I don't know what you mean. Ask Marge."
  [fx skill:2]
  owen.a: Of course. Of course. Sorry. Long week.
  * He's sweating. In a room that's cold enough for the Club-Mate.
 ? Tell him the timing. He's the deputy chair.
  [fx clout:1]
  > 4:09. Ten minutes.
  owen.h: 4:09. Lovely. Thank you. I'll make sure the AV's ready.
  [flag told_owen_time]
 [sum Owen Pryce asked you for the timing of whatever was happening in Victor's slot.]
`;

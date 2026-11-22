/* ============ ROUTES, SCENES 5 AND 6: Ellie, Nyx, Ada, Priya, Juno, Kit, Rin ============ */
rsum('ellie',5,'At 2 AM in the hotel kitchen, Ellie taught you Halmeoni\'s recipe, and decided what she\'d say if anyone asked her to speak.');
rsum('ellie',6,'Linden Street rallied round Proof. Ellie asked you a question about after, and you answered it.');
SC.ellie5=`
[bg hkitchen]
~ The Halcyon's kitchen at two in the morning. Stainless steel, hanging pans, one strip light on. Ellie talked the night porter into it with a box of pastries and the word "please" said very sincerely.
ellie.n: I can't sleep. When I can't sleep, I bake. When I can't bake, I can't sleep. It's a loop. You'd call it a bug.
~ She's got flour, butter, yeast and her grandmother's tin open on the steel counter, the cards spread out in a fan. One of them is soft with handling, the ink nearly gone.
ellie.n: Kkwabaegi. Twisted doughnuts. Halmeoni made them every morning for forty years. Wash your hands. You're helping. You're terrible at this. You're helping anyway.
~ She shows you. Flour, a well, the yeast frothing in warm milk like it's thinking about something. You knead. You are terrible at it. She puts her hands over yours to show you, and her hands are much stronger than yours.
ellie.n: Push with the heel. Fold. Turn. Push. You're not punishing it. You're persuading it.
* You're not punishing it. You're persuading it. You think about Priya's long careful letter to the regulator. You think it's the same thing.
~ While it proves, she sits on the counter swinging her feet, and talks.
ellie.n: Halmeoni's bakery got bought out. In the end. A big chain. They offered her a lot of money and she said no three times, and the fourth time they bought the building and doubled her rent.
ellie.d: She didn't fight it. She said she was tired. She closed, and moved in with us, and made kkwabaegi in our kitchen every morning for the rest of her life. For free. For anyone.
ellie.n: I always thought she lost. I think now maybe she didn't. She just stopped selling it.
? "Rin's going on stage on Sunday. Someone's going to have to tell people why it matters."
 [fx ellie:8]
 ellie.o: ...You want me to talk? On a stage? To hackers?
 > Not to hackers. To people. You're the only one of us whose account got stolen and who got sold the cure.
 ellie.d: I'd shake. I'd shake so much they'd hear my knees on the microphone.
 > You'd shake and you'd still say it. That's the whole point.
 ellie.a: ...Okay. If someone asks me, I'll say yes. Don't make me promise. I'll say yes.
 [flag ellie_speaks]
? "Your grandma would be proud of you. Proof's yours. Nobody's buying it."
 [fx ellie:8]
 ellie.b: Nobody's buying it. Say that on the train home on Monday, when I'm crying about the back door again.
~ You fry them in a pan of oil, twist by twist, and roll them in cinnamon sugar on a baking tray. They're lopsided. Yours are a different, worse lopsided.
ellie.h: Look at them. Look at your terrible doughnuts. I'm keeping one. I'm keeping it forever in a drawer, like you keep my bags.
[fx ellie:6]
`;
SC.ellie6=`
[bg cafe]
~ The hotel café, Saturday. Ellie's at her table with her phone on the cloth in front of her, and she's been crying, and she's smiling, which is a combination you haven't seen on her before.
ellie.b: Look. Look at this.
~ A fundraiser page. "PUT PROOF'S BACK DOOR BACK". Started by Mr Demir, the barber. Shared by Mrs Okafor from the flower shop. Two hundred and six people have given money. The target was four hundred pounds. It's at three thousand one hundred.
ellie.d: The woman who sent two hundred pounds to the fake yacht account. She gave fifty. Fifty. She said "we look after our own on Linden Street".
ellie.n: Mr Demir's put a sign in his window. "PROOF IS OPEN. TELL YOUR FRIENDS." He's never put anything in his window except a photo of a haircut from 1987.
* The whole street. People who've never been to a hacker con, who don't know what a forwarding rule is, who just know the bakery and the woman in it.
* That's a graph too. Nobody had to steal it.
ellie.n: Can I ask you something? About after. After Sunday.
> Ask.
ellie.n: When this is over, and you come home. Upstairs. Are you going to keep pretending you don't come down every morning for me? Because I'm tired of pretending I don't make the cinnamon knots for you.
? "No more pretending. I come down for you. I always have."
 [fx ellie:12]
 ellie.h: Good. Good. I'm going to start charging you double out of spite.
? "After Sunday, I'd like to take you somewhere that isn't the bakery or my flat."
 [fx ellie:12]
 ellie.o: Like a date? A date-date? With a reservation?
 > With a reservation.
 ellie.b: I've never been on a date with a reservation. I've been on dates with a meal deal.
? "Ask me again on Sunday night."
 [fx ellie:6]
 ellie.s: Mysterious. Fine. Sunday night. I'll wear the beret.
[flag ellie_ready]
`;
rsum('nyx',5,'Nyx\'s firm fired her for walking away from Lumen. You helped her write her own first report, as herself.');
rsum('nyx',6,'Nyx planned how to keep Rin out of Krall\'s hands on Sunday, with a binder of paperwork.');
SC.nyx5=`
[bg lockpick]
~ Nyx is sitting on the floor behind the Lockpick Village tables, back against the wall, phone in her lap. The pegboard of locks behind her looks like a wall of tiny shut faces.
nyx.a: My firm fired me. By email. "In light of your unilateral withdrawal from a client engagement." Seven years. By email. With a typo.
nyx.d: Lumen called them. Of course Lumen called them. Lumen is a very important client.
? Sit down next to her
 [fx nyx:8]
 ~ The floor's cold. She leans her shoulder against yours, which for Nyx is a hug.
? "Then start your own."
 [fx nyx:8 clout:2]
 nyx.o: My own firm. With what clients?
 > Everyone you've ever made cry in a report. They know you're good.
nyx.n: You know the worst part? I agree with the email. I did withdraw unilaterally. I'd do it again. I just thought someone would say thank you.
> Thank you.
nyx.b: ...Shut up. Don't. I'll cry, and I don't cry at lockpicking villages, it's bad for the brand.
~ You spend two hours writing a report with her. Not for a client. For the con. Every weakness she's found in the building this week: the propped fire door at the dock, the network closet with the shared key, the 13th floor's "refurbishment" wing with its own access point. Plain, careful, her name at the top.
nyx.n: "Security Review of CTRL+ALT+CON. Author: Nyx. Client: everyone." I'm sending it to Marge. Free.
nyx.h: First report as myself. Feels weird. Feels good. Feels like picking a lock you made.
[fx skill:4]
`;
SC.nyx6=`
[bg security]
~ The con's security office, which Nyx has somehow been given the key to. Monitors, radios, a coffee machine, a whiteboard. On it, in her neat capitals: "SUNDAY. KEEP RIN. KEEP THE DRIVE."
nyx.n: Krall's going to come for Rin before the keynote. That's what I'd do. Grab the person, grab the evidence, call it theft, let the lawyers sort it out next week, after it doesn't matter.
nyx.n: So we make it not work. Paperwork. Always carry the paperwork.
~ She opens a binder. Tabs. A letter from the con's lawyer saying Rin is a guest speaker. A copy of Bastion's audit contract showing Rin is allowed to discuss his findings with "venue safety staff". A timestamped log from Wren, if you know Wren, or from the hotel CCTV, of Krall going in and out of 1313.
nyx.s: Nobody wins an argument with a binder. People argue with people. Nobody argues with a binder.
? "Where do you want me?"
 [fx nyx:8 skill:2]
 nyx.n: Not near Rin. Near the stage. If they come for Rin, they'll come for you next, and I can only carry one binder.
? "You've thought of everything."
 [fx nyx:8]
 nyx.s: I've thought of everything I'd do if I were the bad guy. That's the whole job. It's very lonely, thinking like the bad guy for a living.
 nyx.b: It's less lonely with someone who doesn't.
[flag nyx_ready]
`;
rsum('ada',5,'You and Ada built a verification page: one command anyone can run to check the evidence themselves.');
rsum('ada',6,'After the finals, the CTF organisers offered Ada a job. She asked you what you thought, and listened.');
SC.ada5=`
[bg ctf]
~ The CTF Arena, Friday night. Ada's laptop is plugged into a projector pointed at the wall, and on the wall is a web page with one line on it.
ada.n: I've been thinking about Sunday. When Rin says "SafeSphere does this", two thousand people will think "says who?". Victor's lawyers will say "says one disgruntled employee".
ada.n: So we don't ask them to trust us. We give them a way to check.
~ The page: "VERIFY IT YOURSELF". Underneath: one command. Run it, and it downloads the published SafeSphere app, takes its fingerprint, the hash, and compares it with the one Rin and Ada tested. Then it runs the capture and shows you, on your own machine, what the app sends home.
[game pipe n=3 only=10,11,7 title="Building the verifier"]
ada.n: Every claim, reproducible. That's science. That's the difference between an accusation and a fact: anyone, anywhere, can get the same answer.
? "You've made the truth into a command."
 [fx ada:10 skill:4]
 ada.b: ...That's going in the README. That's the best README sentence anyone's ever said to me.
? "What if Lumen pull the app before Sunday?"
 [fx ada:6 skill:3]
 ada.n: Then the command checks against our copy, signed and hashed and mirrored in four countries. Pulling the app would just prove they're scared.
~ She runs it on three different laptops. Same answer, three times. She does a small, private victory dance in her chair.
`;
SC.ada6=`
[bg ctf]
~ After the finals. The CTF Arena is half packed up, cables coiled, the scoreboard frozen on the last result. Ada is sitting on a table with a business card in her hand, turning it over and over.
ada.n: The CTF organisers. They want me to help run next year's. Design challenges. Write the hard ones. Be on the other side of the board.
ada.d: And a company that came to watch offered me a job. A real one. With a salary and a chair that isn't a beanbag.
ada.n: I don't know what to do. I always know what to do. I know what to do with a segfault at 4 AM. I don't know what to do with a business card.
? "What do you want to do? Not what you should."
 [fx ada:10]
 ada.o: ...Nobody asks that. Everybody asks what I'm going to do.
 ada.n: I want to write the challenge that makes some twelve-year-old cry with joy at their first flag. That's what I want.
 > Then that's the answer.
? "Take the job. You deserve a real chair."
 [fx ada:5]
 ada.s: A real chair. With lumbar support. Tempting. Very tempting.
? "Ask me after Sunday."
 [fx ada:7]
 ada.n: After Sunday. Yes. Everything after Sunday.
ada.h: Okay. Okay. One thing at a time. Sunday first. Then the card.
[flag ada_ready]
`;
rsum('priya',5,'Someone sent Priya a photo of her own front door again. This time she wasn\'t alone when it came.');
rsum('priya',6,'At 11:42, Priya pressed send on the disclosure to the regulator. Timestamped. Signed. Received.');
SC.priya5=`
[bg soc]
~ The Blue Team SOC. Priya's at the centre desk, very still, both phones face up for once. On one of them: a photo. A front door. Her front door, in another city.
priya.d: It came twenty minutes ago. No number. No name. Just the door.
* WH1SPER doesn't post Priya's door. Somebody sent it to her privately. Someone who wants her to stop.
priya.n: It's not him. My old one. He'd have written something. This is cleaner. This is a message from someone who knows I'm helping Rin.
? "Then we trace it. Together. Right now."
 [fx priya:10 skill:4]
 [game pipe n=2 only=3,7 title="Tracing the photo"]
 ~ The photo's metadata is stripped, professionally. But the message came through the con's network, and Priya has the con's logs. One sender. The access point outside Suite 1313.
 priya.a: Krall. It's Krall. He's trying to scare me off Sunday.
 [flag priya_threat]
? "Do you want to stop? Nobody would blame you."
 [fx priya:8]
 priya.a: I would. I'd blame me. For the rest of my life.
? Turn her phone face down, gently, and stay
 [fx priya:12]
 ~ You turn it over. She lets you. You sit with her until her hands stop shaking, and then a bit longer.
priya.n: Four years ago I was on my own when the first photo came. I'm not on my own now. That changes the threat model. More than you'd think.
`;
SC.priya6=`
[bg library]
~ The hotel library, Saturday, 11:41 AM. Priya has the disclosure open on her laptop: twenty-two pages, every claim sourced, every source dated. Her finger is over the trackpad.
priya.n: Sixty seconds. I always send important things at an odd time. 11:42. Nobody else uses it. Easy to find in a log, years later, when someone asks "when did you tell them".
priya.n: This is the moment that makes Sunday a disclosure, not an attack. If anyone says we went public without warning, this is the receipt.
~ 11:42. She clicks.
~ The progress bar. The confirmation. Then, three minutes later, an automatic reply from the regulator: "Your report has been received. Reference DPA-7731-Q. A caseworker will be in touch."
[flag reg_sent priya_ready]
priya.h: Received. Reference number. Timestamp. Done.
priya.b: I want to frame it. Is that sad? I want to frame an automatic email.
? "Frame it. Put it next to the thank-you letter you're going to get."
 [fx priya:10]
 priya.o: ...You think they'll write?
 > I think they'll have to.
? "You did it properly. Like you always do."
 [fx priya:10]
 priya.n: We did it properly. Your name's on page twenty-two. As a witness. I didn't ask. I'm sorry. I'm not sorry.
`;
rsum('juno',5,'Lumen\'s lawyers sent Juno a letter. She read it out loud to you, then tore it into very small pieces.');
rsum('juno',6,'Juno planned Sunday\'s broadcast: every platform at once, backups for the backups.');
SC.juno5=`
[bg creator]
~ Juno's booth, lights off. She's holding a letter on thick cream paper with a blue shield at the top.
juno.d: "Breach of contract. Disparagement. We reserve all rights." From Lumen's lawyers. Couriered. To my hotel room. They know my hotel room.
juno.a: They want me to "retract" what I said on stream and post an apology video. Script attached. They wrote my apology for me. In my voice. With my catchphrases. They used "chat" three times.
? "Don't sign anything. Talk to Noor Haddad first."
 [fx juno:8 skill:3]
 if met('noor')
  ~ You take her to the Speaker Lounge. Noor reads the letter in forty seconds and laughs, once, sharply.
  noor.s: This is a threat dressed as a contract. You told the truth about a product to your own audience. Let them sue. I'd enjoy it.
  [fx juno:6]
 else
  juno.n: Noor who? A lawyer? A real one? Okay. Okay. I'll find her.
? "Read me the apology."
 [fx juno:6]
 ~ She reads it. In her stream voice. It's horrible. "Chat, I made a mistake, SafeSphere has always been a great partner." Halfway through she starts laughing and can't stop.
~ Then she tears the letter in half. Then quarters. Then she keeps going until it's confetti, and throws it over both of you.
juno.h: That's going in a video. Not today. One day. "The day I tore up a lawyer."
`;
SC.juno6=`
[bg creator]
~ Juno's got three laptops open and a whiteboard covered in arrows. Platform names. Backup accounts. Friends' channels. A diagram that looks like a spider's web drawn by someone on a lot of coffee.
juno.n: Sunday. If someone's going to say something true in Hall A, it can't just stay in Hall A. Lumen will say it was taken out of context. So: context. Everyone, everywhere, live.
juno.n: My channel. Six friends' channels who've promised. Three backup accounts in case Lumen gets mine taken down mid-stream. And a clip team: four kids from my Discord who'll have it cut and posted on every short-video app within ninety seconds.
? "That's an operation."
 [fx juno:8]
 juno.h: It's a stream. Streams are operations. Nobody believes that until they see a raid.
? "Will you be okay? On camera, saying this?"
 [fx juno:10]
 juno.d: No. Yes. I'll be June, holding a camera, pointing it at someone braver than me. That's the best job I've ever had.
[flag juno_ready]
`;
rsum('kit',5,'The man from last year was here. Kit didn\'t hide. You stood next to her while she reported him.');
rsum('kit',6,'Kit mass-produced Tilly\'s reflashing clips. Forty of them, one for every volunteer.');
SC.kit5=`
[bg cosplay]
~ Kit grabs your arm in the Cosplay Hall, out of the armour, in a hoodie, very white.
kit.d: He's here. Him. The one from last year. Grey coat, photography badge. By the photo backdrop. He's taking pictures of the queue.
? "Do you want to leave? I'll come with you."
 [fx kit:8]
 kit.n: ...No. No. I'm tired of leaving. I've left four cons because of him.
? "Let's go and tell the con. Right now. Together."
 [fx kit:10 skill:2]
 ~ The con's Code of Conduct desk, in the Foyer. A volunteer in a yellow lanyard who listens, writes everything down, and calls someone on a radio.
 ~ Ten minutes later, two volunteers and Marge herself walk up to the photographer by the backdrop. You can't hear what Marge says. You can see his face. He leaves. His badge doesn't.
 marge.n: Banned. This year and every year. Thank you for telling us, Kit. It's never your fault, and it's always worth telling.
 kit.d: ...I told. I actually told. I've never told.
~ Afterwards, Kit sits on the edge of the catwalk, shaking, laughing a little.
kit.n: You know what was different? You were there. I didn't have to be Vex. I could just be scared, and somebody stood next to me while I was scared.
[fx kit:6]
`;
SC.kit6=`
[bg hwv]
~ The Hardware Hacking Village, Saturday night. Kit has commandeered a whole bench, three soldering irons, a heat gun and a crate of spring clips.
kit.n: Tilly's clip works. Clip it on a badge, press, eight seconds, rainbow. But we've got one clip. And four thousand badges.
kit.h: So: forty clips. One for every volunteer. Mass production. I am a factory. Hand me the flux.
[game timing kind=solder n=4 who=kit mult=2 title="Forty clips"]
~ By one in the morning there are forty clips in a cardboard box with a label: "RAINBOWS · HANDLE WITH LOVE". Kit's fingers are covered in tiny burns and she's never looked happier.
kit.n: Tomorrow, at the keynote, every volunteer in the building clips every badge they can reach. Every blue light that goes rainbow is one less dot on Victor's graph.
[flag counterfw kit_ready]
`;
rsum('rin',5,'Graham Pike came to the Chill-out Lounge to threaten Rin. You recorded every word.');
rsum('rin',6,'Rin called his mum. He told her about Sunday, and about the skirts. She said she\'d watch.');
SC.rin5=`
[bg lounge]
~ Rin's bean bag. A man in a very good suit is standing over it. Graham Pike. Up close he has a fixed smile and very cold hands; he's resting one on Rin's shoulder.
pike.n: Rin. I'm here as a friend. Bastion can make this all go away. A quiet resignation. A reference. A generous settlement. All you need to do is hand over the drive and not stand on any stages.
pike.s: Or we can talk about the confidential client data you've removed from our systems. Theft is such an ugly word. So is prison.
~ Rin doesn't move. He's holding a gummy worm like it's a lifeline.
? Start recording on your phone, openly, and sit down
 [fx rin:10 skill:4]
 ~ You sit on the other bean bag and put your phone on your knee, screen up, the red record dot visible.
 pike.a: Are you... recording this?
 > You're here as a friend. Friends don't mind.
 ~ Pike takes his hand off Rin's shoulder. He says three more sentences, all of them very careful, none of them careful enough, and leaves.
 [flag pike_recorded]
 [clue pikereport]
? "Mr Pike, you need to leave. Now."
 [fx rin:8 clout:3]
 pike.s: Of course. Think about it, Rin. Think about your mother.
 ~ He goes. Rin's hands are shaking so hard the worm is shaking.
rin.d: He knows my mum's name. He said it like... like it was a threat.
rin.n: Thank you. For sitting there. I've imagined that conversation a hundred times and in every version I was alone.
`;
SC.rin6=`
[bg corridor]
~ The 13th floor, outside Rin's door. He opens it with his phone in his hand.
rin.n: Can you... be here? While I make a call? Just be in the room. Don't say anything. I'll need to look at someone who isn't the phone.
~ He calls his mum. You sit on the end of his bed. He stands by the window in a pink jumper and a black skirt.
rin.n: Mum? Hi. Sorry it's late. No, nothing's wrong. Well. Something's very wrong, but not with me.
~ He tells her about Sunday. About Bastion. About standing on a stage. And then, after a long pause, about the clothes.
rin.d: I wear skirts, Mum. A lot. I'm wearing one now. I'm going to wear one on Sunday, on a stage, on the news. I wanted you to hear it from me first.
~ A very long silence on the line. You watch his face. Then, very small, through the phone, a voice says something you can't make out.
~ Rin's face crumples, and then it opens like a window.
rin.b: ...She said "what colour". She said "what colour is it, so I know what to look for on the telly".
? Hug him
 [fx rin:12]
 ~ He hugs you so hard your ribs creak, still holding the phone, while his mum asks if he's eating properly.
? "Tell her lilac."
 [fx rin:10]
 rin.h: Lilac, Mum. It'll be the lilac one.
[flag rin_ready]
`;

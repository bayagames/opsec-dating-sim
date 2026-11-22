/* ============ THE CON PROGRAMME: optional events. Each takes the part of the day it's on. ============ */
event('karaoke',{d:2,s:4,w:'bar',n:'Hacker Karaoke'});
event('film',{d:3,s:3,w:'film',n:'Film night: a very bad hacker film'});
event('lockcomp',{d:3,s:2,w:'lockpick',n:'The Lockpicking Contest'});
event('jeopardy',{d:3,s:5,w:'hallB',n:'Hacker Jeopardy'});
event('badgehunt',{d:4,s:0,w:'badgelab',n:'The Badge Hunt'});
event('sectf',{d:4,s:2,w:'soceng',n:'Social Engineering CTF: the phone booth'});
event('noortalk',{d:4,s:5,w:'hallB',n:'Noor Haddad: "Consent You Can\'t Refuse"'});
event('piketalk',{d:3,s:3,w:'hallC',n:'Graham Pike (Bastion): "Trust, Verified"',ws:['hallC']});
event('poolparty',{d:5,s:4,w:'pool',n:'Lumen\'s pool party',ws:['pool','hotelL2']});
event('arcadecup',{d:5,s:5,w:'arcade',n:'The Retro Arcade Cup'});
event('parade',{d:6,s:0,w:'cosplay',n:'The Cosplay Parade'});
event('isspass',{d:6,s:2,w:'aero',n:'Watching the space station go over',ws:['aero','conroof']});
event('pubquiz',{d:2,s:1,w:'food',n:'Village Row pub quiz (food court)'});
event('bonfire',{d:6,s:5,w:'roof',n:'The night before: the roof terrace',ws:['roof']});
const cameo=(g,line,a)=>met(g)?[L(lookOf(g),'h',line),FX({[g]:a||4})]:[];
SC.ev_karaoke=`
[bg bar]
~ Hacker Karaoke. Someone has wired the bar's jukebox into a laptop and the laptop into a projector, and the lyrics come up in green on black like a terminal.
~ The first act is three people from the ICS Village singing a power ballad about industrial control systems. Nobody knows how it got into the song list. Everyone knows the words.
if met('bea')
 bea.s: Every year. Every year I say I'll book the night off. Every year I'm here, pouring Club-Mate for people singing about firewalls.
 bea.h: Your turn's coming, hoodie. I've put your name down. Don't look at me like that.
if met('juno')
 juno.h: OH I am streaming this. Chat. CHAT. They're doing the duet. Someone sing with me!
if met('nyx')
 nyx.s: I will not be singing. I will be holding everyone's drinks and judging. It's a public service.
~ Then the laptop says your name. In green. The whole bar turns to look.
? Sing something loud and terrible, and commit
 [fx clout:8]
 ~ You sing a song from 2009 that you have no business singing, at a volume that makes the glasses hum. It is not good. It is, somehow, a triumph. Two hundred people sing the chorus back at you.
 [call cameo('bea','Okay. Okay! That was horrible and I loved it.',6)]
 [call cameo('juno','Chat says ten out of ten. Chat is lying, but lovingly.',6)]
? Pick a duet and drag someone up with you
 [fx clout:5]
 if met('bea')
  ~ You point at Bea. She shakes her head. The bar chants her name. She comes round from behind the counter, throws her tea towel at you and grabs the second microphone.
  bea.h: If you tell anyone about this, I'll water your Club-Mate.
  [fx bea:8]
 elif met('juno')
  ~ Juno is up before you've finished pointing, twin-tails flying, harmonising in a way that suggests years of practice in her bedroom.
  [fx juno:8]
 else
  ~ A stranger from the CTF Arena volunteers. You never learn his name. You'll remember his falsetto forever.
? Do the quiet one. The sad one. Actually sing.
 [fx clout:3 skill:1]
 ~ You pick something slow. You've got a better voice than you thought, when you're not trying to be loud. The bar goes quiet in the right way.
 if met('vesper')
  ~ At the end of the bar, a woman with dark red hair you didn't see come in claps, slowly, three times, and leaves.
  [fx vesper:6]
? "No, thank you." Hold your ground.
 [fx skill:1]
 ~ The laptop skips you. A man in a cape takes your slot. He is spectacular.
~ It goes on till two. At some point someone sings the con's unofficial anthem, a song about a router, and four hundred people in a hotel bar put their arms round each other.
* For three minutes nobody here is watching anybody. They're just singing about a router.
`;
SC.ev_film=`
[bg film]
~ The Film Room, upstairs on Village Row: beanbags, a projector, popcorn in buckets, and a hand-made sign: "FILM NIGHT · A VERY BAD HACKER FILM · HECKLING MANDATORY".
~ The film is from 1995. Everyone in it hacks by flying through a city made of glowing towers, and typing very fast while someone shouts "I'm in".
~ The audience shouts along with every line. Someone has made bingo cards: "ENHANCE", "rollerblades", "the Gibson", "a password that's just 'GOD'".
if met('ada')
 ada.h: That's not how anything works. That's not how ANYTHING works. I love it so much.
 [fx ada:4]
if met('rin')
 rin.s: That virus has a face. Viruses don't have faces. I'd know. I've met many viruses.
 [fx rin:4]
if met('kit')
 kit.b: Look at the jackets. Look at those JACKETS. I'm making that jacket. I'm making it tonight.
 [fx kit:4]
? Shout "ENHANCE" at the right moment
 [fx clout:4]
 ~ You get it exactly on cue. The room cheers. A man in the front row gives you his bingo card.
? Count every real security mistake in the film, out loud
 [fx skill:4]
 ~ Forty-one by the end. Passwords on sticky notes, an admin account called "admin", a server room with the door propped open. It's educational, in a terrible way.
? Just watch. It's actually quite sweet.
 [fx skill:1]
 * It is quite sweet. Everyone in it believes computers can change the world. Twenty years later, half of the people in this room still do. You're one of them.
~ When "I'm in" comes for the last time, two hundred people say it together, like a prayer.
`;
SC.ev_lockcomp=`
[bg lockpick]
~ The Lockpicking Contest. Sixteen competitors, sixteen padlocks of rising difficulty on a pegboard, a big countdown clock and, at the judges' table, wearing a paper crown somebody insisted on, Nyx.
if met('nyx')
 nyx.s: You signed up? You actually signed up? Okay. No mercy. I don't do mercy. I do points.
else
 ~ The judge has a black bob with a magenta streak, and the face of someone who has seen every possible way to fail at a padlock.
"Volunteer": Three locks. Fastest total time wins. Tension wrench, pick, no raking, no bump keys, no "I pick them with my mind".
[game timing kind=pins n=3 mult=0 title="Lock one: a cheap brass padlock"]
[game timing kind=pins n=4 mult=0 title="Lock two: a padlock with security pins"]
if rank('skill')>=2||f('nyx_quit')
 ~ The third lock is a serious one: spool pins, the kind that pretend to set and then don't. You feel the false click, back off, try again. It opens with eleven seconds on the clock.
 ~ You come third. Third, in a room full of people who've done this for years.
 [fx skill:8 clout:6 cred:30]
 [call cameo('nyx','Third. Not bad. Not bad at all. Don\\'t let it go to your head. Let it go a little bit to your head.',8)]
else
 ~ The third lock is a serious one. It beats you. It beats twelve other people too. You come ninth, which you decide is a good, honest number.
 [fx skill:4 clout:2]
 [call cameo('nyx','Ninth. You didn\\'t rake. You didn\\'t cheat. That\\'s worth more than the ribbon.',5)]
~ The winner is a seventy-year-old woman in a cardigan who opens the last lock in four seconds and goes back to her knitting.
`;
SC.ev_jeopardy=`
[bg hallB]
~ Hacker Jeopardy, Hall B, close to midnight. A game show set made of cardboard, a host in a sequinned jacket, buzzers made out of old keyboards, and categories like "PORTS OF CALL", "FAMOUS BREACHES" and "THINGS THAT ARE ALWAYS DNS".
~ Teams of three. The host points at you. You're on a team now.
if met('ada')&&met('priya')
 ~ Ada and Priya, it turns out. Ada is vibrating. Priya has her buzzer hand flat on the table like a gunslinger.
 ada.h: I've been training for this my whole life. Literally. I did this at twelve. I lost to a man who knew every port number. I know every port number now.
 priya.n: I know every breach since 2005, with dates. Don't speak to me. I'm in the zone.
elif met('ada')
 ~ Ada, and a stranger from the CTF Arena who apologises every time he buzzes.
elif met('rin')
 ~ Rin, eating gummy worms between questions, and a woman from the ICS Village who only answers questions about water treatment.
else
 ~ Two strangers. One knows everything about cryptography. One knows everything about 1990s video game consoles.
[game quiz who=ada n=4]
"Host": Final Jeopardy! The category is: THINGS THAT ARE ALWAYS DNS. The clue: "It's not DNS. There's no way it's DNS. It was..."
? "DNS."
 [fx skill:4 clout:6]
 ~ The whole hall shouts it with you. Your team wins by two hundred points.
 if met('ada')
  ada.b: We won. We WON. Twelve-year-old me is screaming.
  [fx ada:8]
 if met('priya')
  priya.h: I smiled. Did anybody see me smile? Nobody saw that.
  [fx priya:6]
? Overthink it and write "BGP"
 [fx skill:2]
 ~ It was DNS. It's always DNS. You come second, which in Hacker Jeopardy is the most dignified place to come.
`;
SC.ev_badgehunt=`
[bg badgelab]
~ The Badge Hunt. A tradition: every year the badge has a secret hidden in it, and the first person to find it wins a hand-made trophy and a year of bragging. This year, nobody has found it. It's Thursday.
~ Tilly's at the Badge Lab with a magnifier and a sign: "THE SECRET IS STILL IN THERE. I PROMISE. BERNARD PROMISED."
if met('tilly')
 tilly.n: Oh, you're hunting! Good. Nobody's found it. Not even with the sponsor firmware on top. It's in the hardware, not the code. Bernard put it there. He never told me where.
* Bernard: the man who made the con's badges for nineteen years, and died at his bench.
~ You look at your badge under the big magnifier. The eight LEDs. The coin battery. The tiny radio. The silkscreen on the back, tiny white letters. And, along the edge of the board, a row of dots that aren't solder pads. They don't connect to anything.
? Read the dots as binary: big dot one, small dot zero
 [fx skill:6]
 [game pipe n=1 only=4 title="Decoding the edge of the board"]
 ~ Forty dots. Five letters. K, E, E, P, space. Then the dots continue round the back: L, I, G, H, T, S. KEEP LIGHTS.
 ~ And on the battery holder, scratched so small you need the biggest magnifier in the room: "ON".
 * Keep the lights on. The note in Bernard's badge box. He hid it in every badge, four thousand times.
 if met('tilly')
  tilly.d: ...He put it in every one. He put it in every single one. "Keep the lights on." That's what he wrote on my box.
  tilly.b: You found it. You found Bernard's secret. The first person in twenty years to find one on a Thursday.
  [fx tilly:14 clout:10]
 else
  ~ The woman running the hunt goes very quiet, then hugs you, then apologises for hugging you, then hugs you again.
  [fx clout:10]
 [flag found_bernard]
? Ask around. Someone must have a theory.
 [fx clout:2]
 ~ Everyone has a theory. One man is convinced it's in the radio. Another thinks it's audio, if you hold the badge to your ear. You hold it to your ear. It is not audio.
 ~ You don't find it. Nobody does today.
`;
SC.ev_sectf=`
[bg soceng]
~ The Social Engineering CTF. A soundproof booth with a glass front, a real phone, a script, and a real (briefed, consenting) company on the other end, whose staff have agreed to be tested. Forty people watch through the glass. Points for every piece of information you get without lying about anything you couldn't be.
"Volunteer": Rules. You can play a role. You can't threaten anyone, impersonate the police, or claim an emergency. If they say no, you thank them and you hang up. That's the point: we're testing whether they say no.
~ You sit in the booth. Headphones. A dial tone. Your heart doing a drum solo.
? Play a new IT contractor who's "just checking the Wi-Fi name for the install"
 [fx skill:4]
 ~ The receptionist is lovely. She tells you the Wi-Fi name, the printer model and that the IT manager is on holiday till Monday. Then she says: "Sorry, who did you say you were with?" You tell her. She says, "I'll just call them to check." That's the right answer. You thank her and hang up.
 ~ The room applauds both of you.
 [fx clout:4]
? Be honest from the start: "I'm doing a security test. Would you report this call?"
 [fx skill:6]
 ~ It's not how you score points. It is how you get the best answer anyone's had all day: "Yes. We'd report it. We had training last month because of a call just like this." The organisers give you a special mention for "pointing out the obvious, which nobody does".
? Lay it on thick. Rush them. Make them panic.
 [fx clout:6 skill:-2]
 ~ You get the Wi-Fi password in ninety seconds. Then the volunteer gently takes the headphones off you. "That was effective. It was also exactly how Ellie got phished. Think about that for a bit."
 * You do think about it. For a long time.
if met('vesper')
 ~ As you leave the booth, Vesper is in the crowd outside the glass. She's watched the whole thing. She doesn't clap. She looks at you like she's taking notes.
 vesper.s: Not bad, darling. You listen more than you talk. That's the whole trick, you know.
 [fx vesper:5]
if met('delphine')
 ~ Delphine's at the back with her phone, watching. Afterwards she says, to nobody in particular, "Everything I do is a long version of that phone call."
 [fx delphine:5]
`;
SC.ev_noortalk=`
[bg hallB]
~ Hall B, late. "Consent You Can't Refuse Isn't Consent", by Noor Haddad, Open Rights Collective. Thirty people. Four of them, by the look of them, lawyers. One of them, very obviously, Noor's mother, in the front row with a flask of tea.
if met('noor')
 ~ Noor sees you come in. She doesn't smile. She does stand up slightly straighter.
noor.n: Every app on your phone asked you a question once. "Do you agree?" You said yes. You said yes because the other answer was not using the app.
noor.n: That's not consent. That's a toll booth. And the toll is everyone you know.
~ She puts up a slide: SafeSphere's terms of service, all forty-one thousand words, as a single scrolling wall of grey. It takes two minutes to scroll past. Nobody in the room says anything the whole time.
noor.a: Somewhere in there, you agreed that SafeSphere can share "relationship insights" with "trusted partners for safety and research purposes". Your contacts. Their contacts. Scored. Sold.
noor.n: The law says consent must be freely given, specific, informed and as easy to take back as to give. Show me the button that takes this back.
~ There's no button. She leaves the slide up for a long, long time.
? Ask a question at the end: "What can people actually do?"
 [fx skill:6]
 noor.n: Ask for your data. You've a legal right to a copy of everything a company holds on you. Ask Lumen. Ask everyone. Then send it to me.
 [call cameo('noor','Good question. Better than the four lawyers\\'. Don\\'t tell them.',8)]
? Just listen
 [fx skill:5]
~ Noor's mother claps first and longest.
`;
SC.ev_piketalk=`
[bg hallC]
~ Hall C, Track 3. "Trust, Verified: How Independent Audits Keep Apps Honest", by Graham Pike, CEO of Bastion Security. A slick man in a slick suit with a slick deck. Two hundred people, which is a lot for an audit talk. They've heard the rumours.
~ Slide four: "SafeSphere: independently audited by Bastion". A green tick the size of a car.
pike.n: An audit is a promise. When Bastion signs, you can sleep at night.
if met('rin')
 ~ In the third row, Rin is sitting very still in a lilac hoodie, hood up, holding a gummy worm so hard it's lost its shape.
~ Questions. A hand goes up at the back. Then another.
? Stand up and ask: "How long did the SafeSphere audit take?"
 [fx skill:3 clout:6]
 pike.n: Our audits are thorough and proportionate.
 > How many days?
 pike.a: I'm not going to discuss client engagements.
 ~ A murmur through the hall. Somebody at the back laughs. Pike moves on to the next question too fast.
 [flag asked_pike]
 if met('rin')
  ~ Rin looks round at you, and something in his face unclenches.
  [fx rin:8]
? Ask nothing. Watch who leaves early.
 [fx skill:4]
 ~ Two men in navy Lumen lanyards leave before the end, talking into phones. And a woman with auburn curls and a notebook, Saoirse, writes something down every time Pike says "independent".
 [flag watched_pike]
`;
SC.ev_poolparty=`
[bg pool]
~ Lumen's pool party. The hotel pool on Level 2 has been turned into a blue-lit dream: inflatable shields floating on the water, a DJ, waiters with trays of drinks shaped like padlocks. Everyone has a free SafeSphere towel. Half the con is here for the free bar and pretending not to be.
~ Victor works the edge of the pool like a politician. Krall stands by the gym window, not drinking.
if met('wren')
 wren.n: Psst. I'm "on duty". I'm actually watching the man with the scar. He's been looking at his phone every four minutes. Every four minutes. Like a schedule.
 [fx wren:4]
if met('vesper')
 ~ Vesper sings two songs from a little stage by the shallow end. Between them, she touches her ear, says something to nobody, and looks at Krall.
? Drift towards Krall and listen
 [call riskRoll(2)]
 ~ You get close enough to hear one side of a phone call: "...after the keynote. 1313. He wants the graph live in the room when he signs. Yes. The whole con. Every badge."
 [fx skill:4]
 [flag heard_signing]
? Enjoy the party. You're allowed.
 [fx clout:6]
 ~ You float on an inflatable shield for twenty minutes. It's absurd. It's also the most relaxed you've been all week.
 if met('juno')
  ~ Juno floats past on a giant inflatable padlock, waving. "Don't tell my chat I'm at a Lumen party!" she shouts. Then, quieter: "I'm here to see what they say when they're drunk."
? Take a free towel and look at the label
 [fx skill:2]
 ~ The towel's tag has a QR code. "Scan to activate your SafeSphere Shield." Even the towels want your contacts.
`;
SC.ev_arcadecup=`
[bg arcade]
~ The Retro Arcade Cup. Thirty-two players, one cabinet, a bracket drawn on a whiteboard, and a crowd that knows every frame of every game.
if met('yuki')
 yuki.h: You entered! Oh no. Oh no, I'm going to have to destroy you. Respectfully.
[game timing kind=pins n=3 mult=0 title="Round one"]
if rank('skill')>=3||scn('yuki')>=2
 ~ You make it to the quarter-finals. Then the semi-finals. Then you meet Yuki, and she beats you in a way that's so precise it's almost polite.
 [fx clout:8]
 [call cameo('yuki','Semi-final! You were nearly good! You were actually good! Don\\'t tell anyone I said that.',8)]
else
 ~ You're knocked out in round two by a twelve-year-old who doesn't look up from the screen once.
 [fx clout:3]
 [call cameo('yuki','He\\'s going to be a monster. You did fine. You did better than fine. You lasted forty seconds.',5)]
~ The final is Yuki against a man who's held the cabinet's high score since 1998. The crowd goes silent. She wins on the last frame. The man shakes her hand and tells her she's the best he's ever seen.
`;
SC.ev_parade=`
[bg cosplay]
~ The Cosplay Parade. A catwalk down the middle of the Cosplay Hall, a crowd three deep, people in armour, wings, capes and one very convincing sentient vending machine.
if met('kit')
 ~ Kit walks it in full Vex armour, the cyan light running down her arm, sword over her shoulder. She stops at the end, strikes the pose from season two, episode nine, and the hall loses its mind.
 kit.h: Did you see? Did you see the arm? It held! The arm HELD!
 [fx kit:8]
~ Halfway through, someone in a home-made costume walks out: a giant cardboard phone with a blue shield on it, chasing people down the catwalk shouting "SHARE YOUR CONTACTS". The crowd chants "NO" in unison.
? Cheer for the cardboard phone
 [fx clout:4]
? Count the photographers with location turned on in their cameras
 [fx skill:4]
 ~ You check the public posts going up in real time. Nineteen photos so far, eleven with location data in them. You find the posters and quietly tell them. Most of them say thank you.
 [fx foot:-2]
`;
SC.ev_isspass=`
[bg conroof]
~ The Aerospace Village has taken over the con roof: telescopes, radios, a crowd of forty people lying on camping mats with their phones off, waiting.
if met('astrid')
 astrid.h: Twenty-one fourteen. Three minutes. Look south-west. Low. It'll come up out of the hotel tower's shadow.
"Volunteer": The space station! Four hundred kilometres up, twenty-eight thousand kilometres an hour, seven people inside. Everybody wave.
~ It comes up out of the dark, brighter than any star, steady, silent, crossing the whole sky in four minutes. Forty adults wave at it.
~ On a radio on the gravel, very faint, through the hiss: a voice. An astronaut, talking to a school somewhere. "...and yes, from up here you can see the lights of every city. All of them, all at once."
? Lie still and just watch it go
 [fx skill:2]
 * All of them at once. Every lit window, every phone, every badge. From up there, nobody's watching anybody. It's just light.
 [call cameo('astrid','That\\'s my favourite part. When people go quiet. Thank you for going quiet.',8)]
? Ask how the radio works
 [fx skill:5]
 [call cameo('astrid','Amateur radio. Anyone with a licence can talk to the space station. Anyone. Isn\\'t that the most hopeful thing you\\'ve ever heard?',8)]
`;
SC.ev_pubquiz=`
[bg food]
~ The Village Row pub quiz, in the Food Court, over lunch. Teams named things like "Ctrl Alt Defeat" and "The SQL to the Prequel". The quizmaster is a retired cryptographer with a bell.
"Quizmaster": Round one. What year was the first computer worm? What does HTTP stand for? And what is the name of the cat on the con's official mug?
? Answer the real questions properly
 [fx skill:4]
 ~ 1988. Hypertext Transfer Protocol. And the cat is called Segfault, which you only know because Ada told you, or because it's on the mug in front of you.
? Join the table that's clearly cheating with phones
 [fx clout:3 exp:4]
 ~ They are cheating with phones on the con Wi-Fi. You realise halfway through that half their searches are going through the fake network. You tell them. They go white.
~ You come fourth. The prize for fourth is a sticker that says "FOURTH". It's the best sticker you've ever been given.
if met('ellie')
 * Ellie would love this sticker. You put it in your wallet for her.
`;
SC.ev_bonfire=`
[bg roof]
~ The Halcyon's roof terrace, the night before. Not a bonfire, it turns out, because fire codes: a ring of patio heaters round the pool, fairy lights, and everyone who's still awake.
~ Whoever you've got close to this week is up here. Nobody planned it. It just happened, the way the best things do at cons.
if met('ellie')
 ellie.h: I brought the last of the cinnamon knots. There are nine. There were forty-eight on Wednesday. Hackers are animals and I love them.
 [fx ellie:3]
if met('rin')
 rin.n: Tomorrow. Tomorrow. I keep saying it so it stops being scary. It's not working, but I keep saying it.
 [fx rin:3]
if met('sunny')
 sunny.n: Network's holding. I set an alarm on my radio for every ten minutes. Don't tell anyone I'm up here.
 [fx sunny:3]
if met('nyx')
 nyx.s: Somebody's propped the roof door open with a brick. I've decided it's fine. Just for tonight.
 [fx nyx:3]
if met('ada')
 ada.b: I've never stayed up the night before something with people. Usually I stay up with a compiler.
 [fx ada:3]
~ Someone has a speaker. Someone has a guitar, badly. For an hour nobody talks about LANTERN, or Lumen, or four o'clock.
? Make a toast
 [fx clout:5]
 > To everybody who did it the slow way.
 ~ Everybody drinks to that. Even the people holding lemonade.
? Sit at the edge and watch them all
 [fx skill:2]
 * A week ago you didn't know any of these people. Now you'd trust them with your life. Tomorrow you might have to.
`;

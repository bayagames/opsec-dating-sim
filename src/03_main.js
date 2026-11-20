/* ============ DATA ============ */
const CLUE={
 lumen_dm:'Lumen Growth Partners offered Ellie a paid "recovery" minutes after her account was stolen',
 device:'A Wi-Fi sniffer taped under the rooftop door, labelled "W", one silver hair caught in the tape',
 cipher:'An injected CTF challenge signed "—M": EXPOSURE_IS_ART',
 evil_twin:'The fake "CTRLALTCON" Wi-Fi network is registered to a Lumen device',
 rooftop:'WHISPER\'s uploads line up with traffic from the rooftop access point',
 silver:'Juno\'s VOD: a silver-haired woman at the stairwell router',
 dm:'WHISPER\'s DM to you came from a phone on the top floor',
 sponsor:'Lumen\'s sponsor contract asks streamers to say SafeSphere "never collects personal data"',
 bastion:'Rin\'s employer, Bastion, "audits" SafeSphere and is paid by Lumen',
 runsheet:'Victor\'s keynote run-sheet: "SafeSphere 2: contact graph. Launch all regions Monday."',
 intern:'Dave\'s intern onboarding deck: "Never say \'data\'. Say \'insights\'."',
 metadata:'The creep who followed Kit used the location data in her photos'
};
const ITEMS={
 yubi:{n:'Hardware security key',d:'Blocks the Exposure from one bad click.',p:35},
 faraday:{n:'Faraday pouch',d:'Phone goes in, signals stay out. Halves all future Exposure. Someone will be impressed you own one.',p:45},
 banneton:{n:'Rattan proofing basket',d:'Gift. For a baker who\'s far from her oven.',p:20,g:'ellie'},
 picks:{n:'Clear practice lock set',d:'Gift. Someone in Lockpick Village would love this.',p:25,g:'nyx'},
 keycap:{n:'Artisan "ESC" keycap',d:'Gift. For someone who lives in the CTF room.',p:25,g:'ada'},
 screen:{n:'Laptop privacy screen',d:'Gift. For the most careful person you know.',p:25,g:'priya'},
 stickers:{n:'Holo sticker bundle',d:'Gift. Laptop lid real estate for a content creator.',p:20,g:'juno'},
 leds:{n:'Reel of addressable LEDs',d:'Gift. For someone whose costume glows.',p:25,g:'kit'},
 worm:{n:'Metre-long gummy worm',d:'Gift. For someone who\'s always snacking in the lounge.',p:15,g:'rin'},
 zine:{n:'Hand-drawn hacker zine',d:'Gift. For someone who\'s curious but would never admit it.',p:15,g:'bea'},
 cipher:{n:'Brass cipher wheel',d:'Gift. For someone who talks in puzzles.',p:30,g:'mira'}
};

/* ============ CHAPTER 0 ============ */
const CH0=()=>[
 {chapter:0},{bg:'flat'},{hide:1},
 N('Monday. 7:12 AM. Your flat smells of cold pizza and ambition.'),
 N('On your monitor, a forum post you wrote at 3 AM: "honestly most firewalls are a joke if you know what you\'re doing." Fourteen upvotes.'),
 N('You do not know what you are doing.'),
 N('Online, you are {h}. A legend. Offline, you work the IT helpdesk at an insurance company and own one houseplant, which is plastic.'),
 SMS('CTRL+ALT+CON','Your ticket is confirmed! Badge pickup Day 1, 9am. Be excellent to each other.'),
 N('You bought the ticket at 3 AM as well. It seemed cool at 3 AM.'),
 C({t:'Screenshot the ticket and post it. Let the forum know.',fx:{clout:3,exp:5,flag:'posted_ticket'},then:[N('Thirty seconds later: "see u there king". You feel like a king. A king whose travel dates are now public.')]},
  {t:'Put the phone down. Breakfast first.',fx:{skill:1},then:[N('The forum can wait. The cinnamon knots cannot.')]}),
 ];
const CH0B=()=>[{bg:'bakery'},
 N('Directly beneath your flat is Proof, a bakery so small that three customers count as a queue.'),
 L('ellie','h','Morning, computer guy! The usual?'),FX({flag:'met_ellie'}),
 N('Ellie Park. Owner, head baker, only baker. There is flour on her cheek every single day, as if it\'s part of the uniform.'),
 {unlock:'aff'},
 L('ellie','s','One cinnamon knot and a coffee strong enough to debug with. Did I say that right? I\'m learning your language.'),
 C({t:'"You said it perfectly."',fx:{ellie:5},then:[L('ellie','h','I\'ve been practising. I also know "have you tried turning it off and on again".')]},
  {t:'"Technically you debug with a debugger, not coffee."',fx:{ellie:2},then:[L('ellie','s','Wow. Okay. Your coffee is now decaf.'),L('ellie','h','Kidding. Mostly.')]},
  {t:'"I don\'t need coffee. I run on pure code."',fx:{ellie:3},then:[L('ellie','b','You run on cinnamon knots. I have the receipts. Literally. I print them.')]}),
 L('ellie','n','Quick question while you\'re here. My card reader keeps saying "update required". Is it going to explode?'),
 C({t:'"It\'s fine. Update it through the official app, not a link someone sends you."',fx:{ellie:6},then:[L('ellie','o','Oh! That\'s actually useful. You\'re actually useful.')]},
  {t:'"Could be hackers. I\'ll take a look later. I\'m kind of a big deal online."',fx:{ellie:1},then:[L('ellie','s','A big deal. Online. Mm-hm.')]},
  {t:'"Turn it off and on again."',fx:{ellie:4},then:[N('She does. It updates. She stares at you like you just raised the dead.'),L('ellie','h','You\'re a wizard.')]}),
 N('She hands you the knot in a paper bag with a tiny croissant drawn on it in biro. She draws one on every bag.'),
 N('You\'ve kept all of them. You will never tell anyone this.'),
 ];
/* the office, as an explorable day at work */
const CH0OFFICE=()=>[{bg:'office'},{hide:1},
 N('Brindle & Co Insurance. Third floor. The IT helpdesk is you, a stapler, and the Accounts printer, which hates you personally.'),
 L('linda','n','{h}! Half of Claims got weird emails this morning. Before anyone clicks anything, can you go through the queue?'),
 N('Finally. A chance to be the hacker you say you are.')
];
const CH0QUEUE=()=>[{bg:'office'},{hide:1},
 N('You sit down at the helpdesk. Forty-seven tickets. A suspicious number of them have the subject line "URGENT!!!".'),
 {unlock:'skill'},
 {game:'phish',pool:[3,10,4,8,11],title:'Helpdesk queue',noexp:1,res:(ok,n)=>{if(ok>=4)S.f.office_good=1}},
 ()=>S.f.office_good?[L('linda','h','Brilliant. Honestly, you\'re wasted on us.'),N('You are, for one second, a legend offline too.')]:[L('linda','a','Hm. Gary already clicked the gift-card one. Gary bought eleven gift cards.')],
 N('Across the office, Gary from Accounts is waving at you. Hard. With both arms.')
];
const CH0GARY=()=>[{bg:'office'},
 L('gary','h','Mate. Are you, like, a hacker? A real one?'),
 {unlock:'clout'},
 C({t:'"Yeah. I could take this building\'s network down from my phone."',fx:{clout:6},then:[L('gary','o','No way. Sick. Don\'t, though.')]},
  {t:'"I\'m learning. I read a lot."',fx:{skill:2},then:[L('gary','h','Respect. Can you un-buy eleven gift cards?')]}),
 N('The clock says five. The lift says "going home".')
];
const CH0EVE=()=>[{bg:'flat'},{hide:1},
 N('Evening. You\'re halfway through a video called "HACKING IN 10 MINUTES (REAL)" when someone hammers on your door.'),
 L('ellie','d','{h}! Sorry. Sorry. Are you busy? You\'re not busy. Can you hack?'),
 L('ellie','d','My Instagram. The bakery one. Someone\'s taken it. They changed the password, and my face is on there selling... crypto?'),
 N('Proof\'s account, twelve thousand followers built over five years of bread photos, has a brand new post: Ellie\'s face, badly pasted onto a yacht. "I MADE £40K WITH BAKECOIN. DM ME."'),
 L('ellie','d','Half my orders come through that account. People are already messaging it. Someone\'s aunt sent money.'),
 C({t:'"Don\'t worry. I\'ll hack it back. Give me five minutes."',fx:{clout:5},then:[
   N('You open a terminal. You type: hack instagram'),
   N('The terminal says: command not found.'),
   N('Ellie watches you type it again, slower, as though the computer is hard of hearing.'),
   L('ellie','s','...Is that how it works?'),
   ME('...No. No, it isn\'t.'),
   N('A long, quiet moment. You could keep pretending.'),
   C({t:'Keep bluffing: "Their encryption is military-grade. It needs time."',fx:{clout:3,ellie:-4,flag:'bluffed'},then:[
     L('ellie','d','Okay. I\'ll just... try their support page, then.'),
     N('She leaves. The door clicks shut very politely, which is worse.'),
     N('An hour later, a knock. She\'s back, eyes red.'),
     L('ellie','d','Support is a robot that sends me to other robots. Please. Whatever you actually know. Just the real stuff.')]},
    {t:'Come clean: "I\'m not that kind of hacker. But I know how to do this properly."',fx:{ellie:8,skill:2,flag:'clean0'},then:[L('ellie','o','Oh thank god. I was worried you were about to say "enhance".')]})]},
  {t:'"I can\'t hack it back. But I know how to recover it properly. Sit down."',fx:{ellie:10,skill:2,flag:'clean0'},then:[L('ellie','o','Properly? There\'s a properly?'),ME('There\'s always a properly. It\'s just more boring than the films.')]}),
 ME('First: how did they get in? Let\'s look at your email.'),
 N('She hands you her laptop. Her inbox is a mess of order confirmations and flour-supplier newsletters.'),
 {game:'phish',pool:[12,13,11,8],title:'Ellie\'s inbox',noexp:1,who:'ellie'},
 L('ellie','d','The copyright one. I clicked it. It had the logo and everything.'),
 C({t:'"Logos are free. Anyone can copy one. Check the actual address."',fx:{ellie:4,skill:1}},
  {t:'"Don\'t feel bad. Smart people get phished every day."',fx:{ellie:6},then:[L('ellie','b','...Thanks. I feel like an idiot.'),ME('You\'re not. They\'re professionals. That\'s their whole job.')]}),
 N('Next problem: her email password is her Instagram password. And her bank password. And the bakery website password.'),
 L('ellie','o','It\'s my cat\'s name and my birth year! It\'s memorable!'),
 C({t:'"Get a password manager. One long, unique password per site."',fx:{ellie:6,skill:2},then:[L('ellie','n','So I only have to remember one password. The one for the manager. Okay. Okay, I can do that.')]},
  {t:'"Just add a dollar sign. Hackers hate dollar signs."',fx:{clout:3,flag:'dollar'},then:[L('ellie','h','Mochi1994$. Done! Thank you!'),N('Something in you dies a little.')]},
  {t:'"Use your cat\'s name backwards."',fx:{ellie:2},then:[L('ellie','s','Ihcom. Sounds like a sneeze. No.')]}),
 N('You walk her through the platform\'s official recovery: an ID check, a code to her verified email, and a video selfie of Ellie holding a baguette "for scale". That last part was her idea.'),
 N('It takes two hours. It\'s boring. It works.'),
 N('One last thing. You check her email settings. There\'s a forwarding rule nobody made: every email with "password" in it is silently copied to an address you don\'t recognise.'),
 L('ellie','o','They were reading my email? This whole time?'),
 ME('They were. Not any more.'),
 N('You delete the rule. You turn on two-factor with an authenticator app. Ellie names it "BREAD SHIELD".'),
 N('Then, out of habit, you search her name. Her home address is on the bakery\'s About page. And under one of her posts: "thanks to my neighbour {h} for fixing the oven timer!" with a photo of you, your building, and your window.'),
 {unlock:'exp'},
 FX({exp:10}),
 C({t:'Help her take her address off the site and the photo down',fx:{exp:-6,ellie:5,skill:1},then:[L('ellie','n','I never thought about it. It\'s just... the internet. I thought nobody reads About pages.'),ME('Nobody does. Except the people you don\'t want reading them.')]},
  {t:'Leave it. Nobody reads About pages.',fx:{exp:5}}),
 N('One more unread message in the recovered account. A DM from a profile with no picture and no posts. Username: whisper_____.'),
 W('THEY BOUGHT YOUR PASSWORD FROM A BREACH LIST. THE "RECOVERY SERVICE" THAT MESSAGED YOU IS THE SAME PEOPLE. LOOK UP WHO OWNS LUMEN GROWTH PARTNERS.'),
 L('ellie','o','Who is that? Is that a hacker? A good one?'),
 ME('...I don\'t know.'),
 N('You look it up. Lumen Growth Partners is a subsidiary of Lumen Analytics, a data company. Their flagship product: SafeSphere, a free privacy app. Ten million downloads.'),
 N('Lumen Analytics is also the headline sponsor of CTRL+ALT+CON.'),
 FX({flag:'lumen_known',clue:'lumen_dm'}),
 L('ellie','a','So the people who stole my account are also selling the fix, and they\'re sponsoring your hacker party?'),
 C({t:'"It might be a coincidence."',then:[L('ellie','s','Mm. Coincidences don\'t usually DM you with a price list.')]},
  {t:'"I don\'t know yet. But I\'m going to find out."',fx:{ellie:4},then:[L('ellie','b','Look at you. Main character.')]}),
 N('She sits on your floor among the cables, eating a pain au chocolat she brought "for emergencies".'),
 L('ellie','n','Can I ask you something? Why do you pretend? Online. The "firewalls are a joke" stuff.'),
 L('ellie','n','You\'re so much cooler when you\'re actually helping.'),
 C({t:'"Because the real me is a helpdesk guy who\'s scared he isn\'t good enough."',fx:{ellie:10,flag:'honest_ellie'},then:[L('ellie','b','...Oh.'),L('ellie','n','For the record, the real you just saved my business. With a baguette.')]},
  {t:'"I\'m not pretending. I\'m modest offline."',fx:{clout:3},then:[L('ellie','s','Sure. Very modest. Hacking instagram. Command not found.')]},
  {t:'"Because it\'s fun?"',fx:{ellie:3},then:[L('ellie','h','Fair. I tell customers the sourdough is "a family recipe". It\'s from YouTube.')]}),
 L('ellie','n','Go to your conference. Learn the real stuff. Then come back and teach me. Deal?'),
 L('ellie','b','And {h}? Thank you. Really.'),
 {hide:1},
 N('The next morning, your cinnamon knot comes in a bag with a new drawing: a tiny person at a laptop, wearing a cape.')
];
/* two weeks later: you walk into Central Station */
const CH0STATION=()=>[{bg:'train'},{hide:1},
 N('Two weeks later. Central Station. Your hoodie, your sticker-covered laptop, and a plan: stop pretending. Mostly.'),
 N('The departures board says it in yellow: 09:12 · CONFERENCE QUARTER · PLATFORM 4.')
];
const CH0TRAIN=()=>[{bg:'train'},{hide:1},
 N('The doors hiss shut. The train pulls out past back gardens, warehouses and one enormous billboard: SAFESPHERE · PRIVACY ON THE MOVE.'),
 {unlock:'phone'},
 {msg:['ellie','good luck at hacker camp!! learn everything. don\'t get hacked. bring me a sticker']},
 SMS('Ellie','good luck at hacker camp!! learn everything. don\'t get hacked. bring me a sticker'),
 N('Your phone buzzes again. Unknown sender.'),
 W('SEE YOU AT THE CON, {H}.'),
 N('You stare at it until your stop. Then a taxi. Then a pair of glass doors with a neon sign above them.')
];
const CH0C=()=>[...CH0OFFICE(),...CH0QUEUE(),...CH0GARY(),...CH0EVE(),...CH0STATION(),...CH0TRAIN()];
const CH0ALL=()=>[...CH0(),...CH0B(),...CH0C()];

/* ============ CHAPTER 1 ============ */
const OPEN={};const CLOSE={};
/* Day 1 is played, not narrated: badge at Registration → opening ceremony in Hall A → hotel check-in → Room 1337 → the bar */
OPEN[1]=()=>[
 {chapter:1},{tp:'vestibule'},{bg:'con'},{hide:1},FX({flag:'d1v'}),
 N('The convention doors slide open. A sign taller than you spells it out in neon outside: CTRL+ALT+CON. Inside it smells of new carpet, energy drinks and four thousand people\'s nerves.'),
 N('Four days. Four thousand hackers. One hotel Wi-Fi network nobody sane would touch.'),
 N('Ahead, a velvet rope, a queue, and a desk marked REGISTRATION. Nobody gets past the rope without a badge.'),
 ()=>G.ok&&S.inWorld?[]:[...D1_BADGE(),...D1_CEREMONY(),...D1_CHECKIN(),...D1_ROOM()]
];
const D1_BADGE=()=>[{bg:'con'},{hide:1},
 N('Over the registration desk hangs a banner the size of a tennis court: LUMEN ANALYTICS PRESENTS CTRL+ALT+CON. Underneath, smaller: "Protect yourself with SafeSphere. Free for attendees."'),
 T('Volunteer','Name for your badge? You write it yourself. Marker\'s there.'),
 C({t:'Write your handle: {h}',fx:{skill:1},then:[N('Clean. Anonymous. The volunteer nods, like you passed a test you didn\'t know you were taking.')]},
  {t:'Write your full legal name. For networking!',hint:'You can\'t un-write a badge',fx:{exp:15,clout:2,flag:'leak_name'},then:[N('The volunteer looks at you for a long second. "Bold," they say, in the voice of someone filing an incident report.')]},
  {t:'Draw a skull. Let them wonder.',fx:{clout:4},then:[N('It looks less like a skull and more like a worried potato. People will certainly wonder.')]}),
 N('A lanyard goes over your head. The badge has a tiny circuit board on the back and a QR code on the front. You decide not to think about the QR code.'),
 T('Con PA','Reminder: the official Wi-Fi is called CTRLALTCON. There is also a fake one called CTRLALTCON. Good luck, everyone.'),
 N('A man in sunglasses, indoors, slides up holding a SafeSphere tote bag.'),
 L('dave','h','Yo! New guy! MegaHax. Hacker. You\'ve probably heard of me.'),
 L('dave','s','I hacked my ex\'s Netflix. Five times. She changed the password every time. Rookie.'),
 L('dave','h','Also I basically work for Lumen. Intern. Social media. I run the SafeSphere TikTok. Ten million downloads, bro. Ten. Million.'),
 C({t:'"What does SafeSphere actually do?"',fx:{skill:1},then:[L('dave','o','It... protects you? From... the internet? It\'s got a shield icon.'),L('dave','s','Don\'t worry about it. I don\'t.')]},
  {t:'"Can you get me free merch?"',fx:{dave:5},then:[L('dave','h','Bro. I AM free merch.'),N('He gives you a SafeSphere stress ball. It has a QR code on it. You do not scan it.')]}),
 L('dave','h','Stick with me, bro. I\'m gonna be famous by Sunday. Opening ceremony\'s in Hall A. North side. Go go go.'),
 N('You recognise in Dave something you fear in yourself.'),
 FX({flag:'d1_badge'}),
 N('The volunteer unclips the rope. The Foyer opens up: escalators, a giant rotating Lumen logo, glass on every side and, beyond it, a courtyard with one enormous tree.')
];
const D1_CEREMONY=()=>[{bg:'stage'},{hide:1},
 N('The opening ceremony. Two thousand people on a rake of seats rising into the dark, one spotlight on the stage.'),
 L('marge','h','Welcome to CTRL+ALT+CON number twenty! I\'m Marge, your con chair. Three rules.'),
 L('marge','n','Be excellent to each other. Only hack what you\'re allowed to hack. And do NOT trust the Wi-Fi.'),
 L('marge','s','And now, a word from our headline sponsor. He insisted.'),
 L('victor','h','Thank you, Marge. Victor Hale, CEO of Lumen. We believe privacy is a human right.'),
 L('victor','s','Which is why SafeSphere is, and always will be, free.'),
 N('Somewhere in the crowd, someone boos. Someone else claps. Most people are looking at their phones.'),
 L('victor','h','Join me at the closing keynote on Sunday. We\'ll be announcing something that changes everything.'),
 {hide:1},
 N('The lights come up. Four days. A whole con. People to meet.'),
 FX({flag:'d1_open'}),
 {msg:['ellie','did you get there ok?? is it all hoodies? send a pic of the hoodies (not of you, I know, opsec, I\'m learning)']},
 {unlock:'notes'},{unlock:'map'},
 N('Your phone buzzes: "Halcyon Hotel: check-in for CTRL+ALT+CON guests is now open. Reception is through the Foyer, west side."')
];
const D1_CHECKIN=()=>[{bg:'lobby'},{hide:1},
 T('Receptionist','Welcome to the Halcyon! Checking in? Name on the booking?'),
 C({t:'Give the booking reference instead of your name',fx:{skill:2},then:[T('Receptionist','Oh, a reference person. Very tidy. Here we are.')]},
  {t:'Say your full name, loudly, to the whole lobby',fx:{exp:4},then:[N('Three people in the queue behind you look up. One of them writes something down. Probably nothing. Probably.')]}),
 T('Receptionist','Would you like to join Halcyon Rewards? Just your email, phone number, date of birth, home address and your mother\'s maiden name.'),
 C({t:'"No thanks."',fx:{skill:1},then:[T('Receptionist','Of course. Nobody at this conference has said yes. It\'s been very refreshing.')]},
  {t:'"Sure, free points!"',fx:{exp:8,clout:1,flag:'rewards'},then:[N('You fill in the form. All of it. The receptionist looks genuinely sad for you.')]}),
 T('Receptionist','Room 1337. Thirteenth floor. Lifts are behind you. Enjoy your stay.'),
 N('The key card to Room 1337 is in your hand. Your badge is round your neck. Your phone is already on the camera app.'),
 C({t:'Post a selfie with your badge and room key',fx:{exp:12,clout:6,flag:'leak_photo'},then:[N('Twelve likes. One of them is from an account called whisper_____. Cool. Cool cool cool.')]},
  {t:'Put the phone away',fx:{skill:2},then:[N('Restraint. The rarest stat at any hacker con.')]}),
 FX({flag:'d1_checkin'})
];
const D1_ROOM=()=>[{bg:'hotel'},{hide:1},
 N('Room 1337. A corner room: two windows, a seating area, a bathroom with an alarming amount of marble, and a bed that crunches when you sit on it.'),
 N('You drop your bag. Thirteen floors below, the whole con glows: the courtyard, the glass Foyer, the Lumen logo turning and turning.'),
 N('Your phone buzzes. "CTRL+ALT+CON · Day 1 social: the Hotel Bar, from 7pm. Everyone welcome. Be excellent."'),
 FX({flag:'d1_room'})
];
CLOSE[1]=()=>[
 {bg:'bar'},{hide:1},
 N('Night. The hotel bar. Half the con is here, arguing about tabs versus spaces at a volume that suggests real stakes.'),
 N('You squeeze up to the bar. The bartender has red hair in a messy bun, freckles, and the expression of someone who has heard the word "blockchain" four hundred times today.'),
 L('bea','s','You\'re blocking the bar, hoodie. Order or move.'),
 C({t:'"Club-Mate, please."',fx:{bea:4},then:[L('bea','n','Of course. You lot drink it like it\'s a personality.')]},
  {t:'"Whatever\'s strongest. I\'m a hacker."',fx:{bea:-2,clout:3},then:[L('bea','s','Strongest thing we\'ve got is the guest Wi-Fi password. It\'s "password1". Here\'s a lemonade.')]},
  {t:'"Water. I\'ve got talks in the morning."',fx:{bea:6},then:[L('bea','h','A sensible one. Hang on, let me alert the press.')]}),
 L('bea','n','Bea. I work here. No, I don\'t want to see your GitHub. Yes, I\'ve heard of Linux. No, I don\'t want to install it.'),
 FX({flag:'met_bea'}),
 N('At the end of the bar, a cluster of men in identical navy blazers and Lumen lanyards. Victor Hale is among them, holding court.'),
 L('victor','s','Bea, darling. Another round. On the company.'),
 N('He snaps his fingers at her. Twice. Bea\'s smile doesn\'t move, but her eyes do something very cold.'),
 L('bea','n','...Coming right up, Mr Hale.'),
 {hide:1},
 N('Then every screen in the bar goes black. The TVs. The menu boards. The jukebox.'),
 {bg:'void'},
 W('GOOD EVENING, CTRL+ALT+CON. LET\'S PLAY A GAME CALLED EXPOSURE.'),
 W('TONIGHT\'S CONTESTANT: "MEGAHAX". REAL NAME DAVID. HOMETOWN. EMPLOYER. HIS MUM\'S MAIDEN NAME.'),
 W('ALL FROM HIS OWN PUBLIC POSTS. HE SHARED HIS BOARDING PASS. THE BARCODE DID THE REST.'),
 {bg:'bar'},
 L('dave','o','That\'s— that\'s not even— BRO. I\'m an INTERN. I post TikToks!'),
 {bg:'void'},
 W('P.S. LUMEN KNOWS MORE ABOUT YOU THAN I DO. ASK THEM WHAT SAFESPHERE DOES.'),
 {bg:'bar'},
 N('The screens snap back to the cocktail menu. Four hundred people silently open their own social media at the same time.'),
 L('victor','a','Ridiculous stunt. Somebody find out who that is.'),
 ()=>S.exp>=35?[N('You think about your own posts. You feel a cold draft that isn\'t the air conditioning.')]:[],
 ()=>S.f.met_priya?[L('priya','a','Told you. Bluetooth. Off. All of it.')]:[],
 L('bea','s','Is this a normal hacker thing? Should I be charging extra?'),
 {hide:1},
 N('On your way to the lifts, a flash of long silver hair disappears into the stairwell. When you look again, it\'s gone.'),
 {msg:['ellie','omg is your conference on the news?? someone put a guy\'s whole life on the screens?? are you ok??']},
 {msg:['dave','bro my mum just called me by my full name. i didnt know she knew it was public']}
];

/* ============ CHAPTER 2 ============ */
OPEN[2]=()=>[
 {chapter:2},{bg:'con'},{hide:1},
 N('Day 2. Overnight, the con app updated itself. A new banner: "Install SafeSphere for secure con Wi-Fi!"'),
 N('Dave is sitting on the floor by the registration desk. No sunglasses. He looks younger without them.'),
 L('davex','d','Bro. My bank called. Three times. I\'ve had forty pizzas delivered I didn\'t order. The pizzas are all pineapple. Someone knows I hate pineapple.'),
 L('davex','d','I thought I was a hacker. I\'m not even a person who knows his own passwords.'),
 C({t:'"Come find me in the Vendor Hall. I\'ll help you lock everything down."',fx:{dave:10,flag:'dave_ask'},then:[L('davex','o','For real? You\'d do that? I was a massive tool to you.'),ME('You were. Vendor Hall. Bring your phone.')]},
  {t:'"Maybe stop posting boarding passes."',fx:{dave:2,flag:'dave_ask'},then:[L('davex','d','Yeah. Yeah. Thanks, bro. I\'ll be in the Vendor Hall. Hiding behind the sticker table.')]}),
 N('You duck into the Chill-out Lounge to escape the crowd.'),
 {bg:'chill'},
 N('Lava lamps. Bean bags. Ambient music that sounds like a modem having a nice dream.'),
 N('Behind the biggest bean bag, someone in a lilac hoodie, a pleated skirt and pink thigh-highs is hunched over a laptop, eating gummy worms with the focus of a surgeon.'),
 L('rin','o','Are you with Lumen? You\'re not wearing a navy lanyard. Lumen people wear navy lanyards.'),
 C({t:'"No. Are you hiding from them?"',fx:{rin:5},then:[L('rin','s','I prefer "strategically positioned behind soft furniture".')]},
  {t:'"Who\'s asking?"',fx:{rin:1,clout:2},then:[L('rin','s','Oh, a mysterious one. Very cool. Very "I watched a hacker film on the train".')]}),
 L('rin','n','Rin. He/him. Malware analyst at Bastion Security. I take apart apps to see what they\'re really doing.'),
 L('rin','d','A man from Lumen keeps finding me to ask how my research is going. My research is not going. My research has been asked to stop going.'),
 L('rin','n','...Sorry. I don\'t know you. I\'m oversharing. That\'s ironic, given my job.'),
 L('rin','h','Come back later, if you want. It\'s nice to talk to someone who isn\'t on a payroll. Have a worm.'),
 FX({flag:'met_rin'}),
 {bg:'con'},{hide:1},
 N('Your phone buzzes. The con\'s official bug bounty board is live: real bugs in con systems, paid in con credits, spendable in the Vendor Hall.'),
 N('Starter bonus for every attendee: thirty credits. Sponsored, the small print says, by Lumen.'),
 FX({cred:30}),
 {unlock:'cred'},
 {msg:['ellie','how\'s day 2!! the guy from the screens, is he ok? also a man came in asking if I wanted "account protection" for £9.99 a month. I said no and gave him a scone. was that right']}
];
CLOSE[2]=()=>{
 const st=[{bg:'hotel'},{hide:1},N('Room 1337. The bed is suspiciously crunchy. Your phone buzzes. Unknown sender.'),W('HELLO, {H}.')];
 const lk=[];
 if(S.f.leak_name)lk.push(W('YOUR BADGE TOLD ME YOUR NAME. THANK YOU FOR MAKING IT EASY.'));
 if(S.f.leak_photo)lk.push(W('YOUR SELFIE. ROOM 1337. THE KEY CARD WAS A NICE TOUCH.'));
 if(S.f.leak_hometown)lk.push(W('YOUR HOMETOWN, LIVE, TO FIFTY THOUSAND VIEWERS.'));
 if(S.f.posted_ticket)lk.push(W('YOUR TICKET POST. YOUR TRAVEL DATES. YOUR FORUM HANDLE. SAME AS YOUR BADGE.'));
 if(S.exp>=55)lk.push(W('YOU CLICK WHAT YOU\'RE TOLD TO CLICK. I ADMIRE THE CONSISTENCY.'));
 if(lk.length)st.push(...lk,FX({exp:3*lk.length}));
 else st.push(W('I LOOKED. I FOUND ALMOST NOTHING. INTERESTING.'),FX({mira:5,skill:2,flag:'whisper_respect'}));
 st.push(W('YOU HELPED THE BAKER. THAT WAS KIND. NOW HELP YOURSELF: DON\'T INSTALL THE SHIELD.'));
 st.push(C({t:'Reply: "who is this"',then:[W('SOMEONE WHO READS WHAT YOU POST.')]},
  {t:'Screenshot it, send it to Priya',if:()=>S.f.met_priya,fx:{priya:6},then:[N('Priya replies in nine seconds: "Traced it. A phone on the top floor, near the roof. Don\'t reply. Sleep."'),{unlock:'clues'},FX({clue:'dm'})]},
  {t:'Phone in the Faraday pouch. Sleep.',if:()=>S.inv.faraday,fx:{exp:-10,skill:1},then:[N('Silence. Beautiful, signal-free silence.')]},
  {t:'Phone in the minibar. Sleep.',fx:{exp:-3},then:[N('A minibar is not a Faraday cage. But the gesture counts.')]}));
 st.push({bg:'hotel'},N('Ten minutes later, the phone buzzes again. This time it\'s Ellie.'),
  SMS('Ellie','ok so. I closed the bakery tomorrow. I booked a day pass. I\'m coming to your conference. is that weird. don\'t answer. I\'m bringing pastries'),
  C({t:'Reply: "Not weird. I\'d love that."',fx:{ellie:8},then:[SMS('Ellie','!!!! ok. 48 pastries. is that enough for hackers. how much do hackers eat')]},
   {t:'Reply: "Bring cinnamon knots or don\'t come."',fx:{ellie:5},then:[SMS('Ellie','rude. bringing 20.')]}),
  N('And then one more, at 2:14 AM. From Rin.'),
  SMS('Rin','can\'t sleep. pulled the new SafeSphere update apart. it\'s worse than I thought. can we talk tomorrow. in person. no phones'),
  {msg:['rin','can\'t sleep. pulled the new SafeSphere update apart. it\'s worse than I thought. can we talk tomorrow. in person. no phones']},
  N('You don\'t sleep much either.'));
 return st;
};

/* ============ CHAPTER 3 ============ */
OPEN[3]=()=>[
 {chapter:3},{bg:'lobby'},{hide:1},
 N('Day 3. 9 AM. The hotel lobby.'),
 N('A woman in a red bandana is holding three enormous paper bags and staring with deep suspicion at a man dressed as a cardboard robot.'),
 L('ellie','h','{h}! You\'re real! You\'re here! I brought forty-eight pastries.'),
 L('ellie','o','Is that a robot? Is he allowed to be a robot? Is everyone here like this?'),
 C({t:'"Everyone here is exactly like this. Welcome."',fx:{ellie:4},then:[L('ellie','h','I love it. I\'m terrified. I love it.')]},
  {t:'Hug her',fx:{ellie:7},then:[N('She smells like butter and train. The pastry bags crunch between you.'),L('ellie','b','Oh! Hi. Okay. Hello. Careful of the croissants.')]}),
 FX({flag:'met_ellie'}),
 L('ellie','n','Show me everything later. I\'ll set up in the lobby. Apparently hackers will follow the smell.'),
 {bg:'stage'},{hide:1},
 N('Midday. The main hall is packed for a talk, when every screen goes black.'),
 {bg:'void'},
 W('TODAY\'S CONTESTANT: VICTOR HALE, CEO, LUMEN ANALYTICS.'),
 W('HOME ADDRESS: [REDACTED. I\'M NOT AN ANIMAL.]'),
 W('INSTEAD, HERE\'S WHAT HIS APP SENDS HOME: YOUR CONTACTS. YOUR LOCATION, EVERY SIXTY SECONDS. EVERY WEBSITE YOU VISIT.'),
 W('TEN MILLION PEOPLE. ASK HIM. I\'LL WAIT.'),
 {bg:'stage'},
 L('victor','a','Fabricated. Defamatory. SafeSphere is independently audited by Bastion Security. Lumen\'s lawyers will be in touch with this... WHISPER.'),
 L('marge','n','Victor. Is any of it true?'),
 L('victor','s','Marge. Please. Would a privacy company lie about privacy?'),
 N('In the crowd, you spot a lilac hoodie. Rin has gone completely white.'),
 N('By lunch, men in navy blazers are posted at every door, scanning badges. A new sign at the Lumen booth: "Information on WHISPER? Reward: 10,000 credits."'),
 {bg:'lobby'},
 L('ellie','o','{h}. That stairwell over there says Roof Access. A woman with long silver hair just went up it. Like a ghost. A ghost with great hair.'),
 FX({flag:'roof_open'}),
 {unlock:'clues'},
 L('ellie','n','I\'m going to sell pastries to scared hackers. You go do... whatever this is. Be careful.'),
 {msg:['rin','chill-out lounge. whenever you can. bring nobody. actually, bring a snack']},
 ()=>S.f.met_priya?[{msg:['priya','Lumen just asked me to "share my WHISPER research" with them. I said no. They asked again. Something is very wrong.']}]:[]
];
CLOSE[3]=()=>{
 const met=g=>S.f['met_'+g];
 const st=[{bg:'hotel'},{hide:1},
  N('Night 3. Room 1337. You did something you have never done in your life: you invited people over.'),
  N('Rin sits cross-legged on the crunchy bed with his laptop. Everyone else squeezes in wherever they can.')];
 if(met('ellie'))st.push(L('ellie','h','I brought the leftover pastries. There are twelve. There were forty-eight. Hackers are animals.'));
 if(met('nyx'))st.push(L('nyx','s','Your room is called 1337. You know that\'s embarrassing, right? It\'s incredibly embarrassing.'));
 if(met('ada'))st.push(L('ada','b','I\'ve never been in a hotel room with this many people. Is this a party? Am I at a party?'));
 if(met('priya'))st.push(L('priya','n','Phones in the bathtub, everyone. The bathtub is now a Faraday-adjacent zone.'));
 if(met('juno'))st.push(L('juno','h','Not streaming! Look. Camera off. Ring light off. Personality... mostly off.'));
 if(met('kit'))st.push(L('kit','b','Sorry, is it weird I\'m not in costume? I feel naked. Not literally. Normal amount of clothes. Okay.'));
 if(met('bea'))st.push(L('bea','s','I came straight from closing. If anyone says "blockchain" I\'m leaving.'));
 if(S.f.dave_helped)st.push(L('davex','n','Hey everyone. I\'m Dave. I used to be MegaHax. I\'m... in recovery.'));
 st.push(L('rin','n','Okay. Here\'s what I found.'),
  L('rin','n','SafeSphere uploads your whole address book to Lumen. It tracks your exact location every minute, even in the background. The "privacy VPN" copies every site you visit.'),
  L('rin','d','And the new version, SafeSphere 2, goes further. It builds a graph of everyone you know, buys extra data about them, and scores them. People who never installed the app.'),
  L('rin','d','My company, Bastion, "audits" SafeSphere. Lumen pays Bastion. When I wrote this up, my boss told me to delete it. I didn\'t.'),
  N('Silence. Somebody\'s phone buzzes in the bathtub.'),
  L('rin','n','Victor\'s announcing SafeSphere 2 at the closing keynote tomorrow. After that, it ships worldwide on Monday.'));
 if(met('priya'))st.push(L('priya','n','If we dump this online, Lumen\'s lawyers bury it and Rin loses his job, or worse. We do it properly. Verified evidence, a regulator, a journalist, and the public, in that order.'));
 else st.push(ME('If we just dump this online, Lumen\'s lawyers bury it. We need to do it properly.'));
 if(met('ada'))st.push(L('ada','a','I can reproduce every finding from scratch. Independently. So it isn\'t just Rin\'s word.'));
 st.push(N('A knock. Everyone freezes. You open the door.'),
  L('marge','n','You said, and I quote, "big, urgent, not a joke, bring no phone". I\'m sixty-one. This had better be worth the stairs.'),
  N('Rin shows her. It takes twenty minutes. Marge doesn\'t say a word the entire time.'),
  L('marge','a','...Lumen paid for my whole con. Every badge. Every lanyard. Every sandwich.'),
  L('marge','n','Give me evidence I can verify by four tomorrow, with a disclosure already sent to the regulator, and you get ten minutes of Victor\'s keynote slot.'),
  L('marge','a','If you\'re wrong, Lumen sues this con into dust. So don\'t be wrong.'),
  {hide:1},
  N('After everyone leaves, there\'s a note under the door. Typed. Folded once.'),
  W('YOU\'RE DOING IT THE SLOW WAY. I RESPECT IT. I HAVE THE REST OF THE DATA. ROOF. —W'),
  FX({flag:'plan'}),
  {msg:['marge','4PM. Hall A. Ten minutes. Don\'t be wrong. —M (the other M)']});
 return st;
};

/* ============ CHAPTER 4 ============ */
OPEN[4]=()=>[
 {chapter:4},{bg:'lobby'},{hide:1},
 N('Day 4. The final day. Seven hours until the closing keynote.'),
 N('Everyone has a job to do. And, it turns out, everyone has something they want to say to you first.'),
 ()=>S.f.met_ellie?[L('ellie','n','Hey. Big day. Whatever happens at four, come and find me before. Okay? Okay.')]:[],
 N('There\'s no clock on any of it except the one on the wall. Go and find them.'),
 {msg:['rin','backed up the evidence in three places. none of them the cloud. I\'m fine. I\'m not fine. come say hi']}
];
const GOALS={
 1:['End Day 1','Head to the hotel bar for the night'],
 2:['End Day 2','Back to Room 1337 for the night'],
 3:['Night 3','Gather everyone in Room 1337'],
 4:['The Keynote','Hall A, 4 PM. Routes you haven\'t finished will close.']
};
const SUBS={1:'Explore the con. Meet people. Nobody\'s timing you.',2:'Lumen is everywhere. So is WHISPER. Somebody knows something.',3:'WHISPER hit Victor. Lumen is hunting. Ellie is here.',4:'The last day. Finish what you started.'};

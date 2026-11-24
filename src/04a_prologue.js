/* ============ PROLOGUE: Hello, World. A Friday, two weeks before the con ============
   Morning in the flat, breakfast at Proof, a day at Brindle & Co, Underwriting's new telly, and then, that night,
   Ellie at your door. It runs on the same calendar as the con (DAYS[0]).
   The frame: a log. A few terse lines, all day, of a machine writing down your Friday, which you never see. At the
   end of the night it turns out whose log it is. Ellie's bakery is a dot on the LifeScore map at work, flagged for
   getting up at 03:52 like every baker alive, with one flagged contact: you. Bread is the metaphor all the way
   through: crumbs are exposure, and some things have to prove before they go in the oven. */
SC.p_wake=`
[chapter 0]
[bg flat]
[hide]
[wake flat]
sms LOG: 07:12:04 · alarm dismissed (3rd attempt) · subject awake
sms LOG: 07:12:09 · screen unlocked · face match 98% · location: Linden St, Flat 1A
~ You don't see any of that. Nobody meant you to.
~ Friday, Flat 1A, above Proof bakery on Linden Street. Two weeks to the day before CTRL+ALT+CON.
~ Your alarm is a dial-up modem connecting. You picked it because it's the one noise you can't sleep through, and because some part of you thinks of waking up as logging on.
~ Three monitors glow on the desk like a fish tank nobody remembers to feed. The left one has a forum thread you started at three in the morning, a week ago:
~ "honestly most firewalls are a joke if you know what you're doing"
~ Fourteen upvotes. One reply, from packet_pam: "source?"
* You never answered. You check every morning in case somebody's answered for you.
* Online, you're {h}. You've had the handle since you were fourteen. It's on four forums, two Discords and a Git account whose only repository is a list of better repositories.
* Offline, you're the IT helpdesk at Brindle & Co Insurance. You reset passwords. You tell people, kindly, that the printer isn't haunted, and you're almost sure.
~ The middle monitor has an email you've opened eleven times, the way you'd reread a text from someone you fancy.
~ "CTRL+ALT+CON 20 · Your ticket is confirmed. Seven days of talks, villages, workshops and the longest-running Capture the Flag in the country. Badge pickup: Monday the 14th, 6 PM, Halcyon Convention Centre. Be excellent to each other."
* Four thousand people who really know what they're doing, in one building for a week, and you've got a ticket.
* You bought the ticket at 3 AM as well. Most of the big decisions in your life have a timestamp starting with a 3.
? Post about it on the forum.
 ~ "see you all at CTRL+ALT+CON 😎 room's booked at the Halcyon". You attach a photo of the ticket, barcode and all, and hit post before your judgement is awake.
 [fx clout:3 foot:3]
 [flag posted_ticket]
 ~ A minute later: "see u there king".
 * You are a king. Your travel dates, hotel and badge number are now public, but you're a king.
? Close the laptop. It's a work day.
 [fx skill:2]
 ~ The forum has waited three years for you to say something true. It can wait till tonight.
[unlock move]
~ Up through the floorboards: cinnamon. It's been rising since four, like warm air, like gossip.
[sum A Friday, two weeks before the con. Your ticket confirmed. Fourteen upvotes, and packet_pam's "source?".]
`;
SC.p_bakery=`
[bg bakery]
~ Proof is small enough that three customers make a queue and four make a fire hazard. The radio's on low, and the coffee machine hisses like a cat with opinions.
ellie.h: Morning, computer person! The usual?
[meet ellie]
~ Ellie Park: owner, head baker, only baker. She's been up since four. There's flour on her cheek every day, in about the same place, like a watermark.
[unlock aff]
ellie.s: One cinnamon knot and a coffee strong enough to debug with. Did I say that right? I'm learning your language. Next week I'm doing "it works on my machine".
? "Perfect. Native speaker."
 [fx ellie:5]
 ellie.h: I've been practising on the oven. It doesn't work on my machine either.
? "Technically you debug with a debugger, not coffee."
 [fx ellie:2]
 ellie.s: Wow. Okay. Decaf for you.
 ellie.h: Joking. Mostly. That machine doesn't do decaf. It would rather die.
? "I don't need coffee. I run on pure code."
 [fx ellie:3]
 ellie.b: You run on cinnamon knots. I have the receipts. I literally print them.
ellie.n: Quick question while I've got a professional in. The card reader keeps saying "update required". Is it going to explode?
? "Update it from the official app. Never from a link someone sends you."
 [fx ellie:6 skill:2]
 ellie.o: Oh. That's actually useful. You're actually useful.
 * For about four seconds you feel like someone who knows things.
? "Could be hackers. I'll look later. I'm sort of a big deal online."
 [fx ellie:1 clout:2]
 ellie.s: A big deal. Online. Mm-hm. Like the yoga studio that keeps emailing me.
? "Turn it off and on again."
 [fx ellie:4]
 ~ She does. It updates. She looks at you as if you've brought a pigeon back from the dead.
 ellie.h: You're a wizard. A wizard who doesn't ask any follow-up questions.
ellie.n: Also. My bank keeps telling me to install this. Some shield thing.
~ She turns her phone round. There's a banner inside her banking app: a blue shield and "SafeSphere: your free privacy shield. Recommended by your bank."
* Free. It's the one rule of the internet you actually follow: if it's free, find out what it eats.
? "Don't install it till I've had a look."
 [fx ellie:3 skill:1]
 [flag ellie_no_ss]
 ellie.n: Okay. I trust you more than a banner. Low bar, but you cleared it.
? "Everyone's got it. It's probably fine."
 [fx clout:1]
 ellie.h: Shields on everything! Like a knight!
 * You'll remember saying that, and not fondly.
~ She hands you the knot in a paper bag with a tiny croissant drawn on it in biro. She draws one on every bag. Nobody asked her to, and nobody's asked her to stop.
* You've kept all of them, in a drawer. You'll take that to your grave, or at least to your next flat.
[sum Breakfast at Proof. Ellie's bank had started recommending something called SafeSphere.]
`;
SC.p_door=`
[hide]
~ Linden Street at half seven: Mr Demir rolling up the barber's shutter, a van unloading flour, a pigeon eating a croissant flake with real violence.
sms LOG: 07:41:22 · subject left home · walking · 4.8 km/h · route matches weekday pattern (91%)
[bg office]
~ Forty minutes later, the lift opens onto the third floor of the Brindle & Co tower and your day turns into other people's problems.
`;
SC.p_office=`
[hide]
~ Brindle & Co Insurance, third floor. Grey carpet, grey desks, and a poster of a rowing team with the word TEAMWORK that's older than anyone in the room.
~ The IT helpdesk is you, a stapler, and the Accounts printer, which has hated you since the day you met.
linda.n: {h}. Good, you're in. Half of Claims got the same email at nine, and Claims will click anything that promises a refund. Clear the queue before somebody buys something.
~ Linda Ashworth, Head of Operations. She runs forty people, a budget, and a three-page document called "Things {h} Has Fixed That Were Not Broken".
linda.a: Then come and find me. Underwriting have got a new toy and I don't understand it. In this building, when I don't understand something, it's usually because somebody's paid for me not to.
* At last. A chance to be the hacker you say you are on the internet.
[sum A day at Brindle & Co. Linda wanted you to look at Underwriting's new toy.]
`;
SC.p_queue=`
[hide]
~ Forty-seven tickets. Thirty-one of them say "URGENT!!!" and arrived in the same minute.
* Thirty-one people don't all panic at 9:02. One person makes thirty-one people panic at 9:02.
[unlock skill]
[game phish pool=3,10,4,8,11 title="Helpdesk queue" noexp=1 res=d1QueueRes]
if f('office_good')
 linda.h: Every single one. Honestly, you're wasted on us. Don't repeat that, they'll want a raise.
 * For one second you're a legend offline too.
 [fx skill:4]
else
 linda.a: Gary's already clicked the gift-card one. Gary has bought eleven gift cards. He doesn't know who for. He seems quite happy about it.
~ Across the office, Gary from Accounts is waving at you with both arms, like a man doing semaphore.
`;
SC.p_gary=`
[hide]
gary.h: Mate. MATE. Are you a hacker? Like, a real one? Linda says you're going to a hacker thing.
~ Gary Pugh, Accounts. Thirty-four. He owns a jet ski, lives nowhere near water, and is wearing a T-shirt that says "I PAUSED MY GAME TO BE HERE".
[unlock clout]
? "Yeah. I could take this building's network down from my phone."
 [fx clout:6]
 gary.o: No way. Sick. Don't, though. My fantasy football's on it.
? "I'm learning. I read a lot."
 [fx skill:2]
 gary.h: Respect. Can you un-buy eleven gift cards? Asking for me.
? "It's a convention. It's mostly talks."
 [fx skill:1]
 gary.s: Talks. Right. "Talks."
 ~ He winks so hard his whole face gets involved.
gary.n: Anyway, I've sorted the gift-card thing. I've ordered that shield app for all the work phones. SafeSphere. The Lumen bloke said it stops exactly this. It rolls out in two weeks.
gary.h: And it's free. Free! And we get "insights". Underwriting are already using the data side. Go and look at their telly, it's got a little map. Everyone loves the little map.
[clue gary_mdm]
`;
SC.p_underwriting=`
[bg office]
[hide]
~ Underwriting is the corner of the floor with the good chairs. On the wall there's a new sixty-inch television showing a dashboard with a cheerful blue logo: LIFESCORE · powered by Lumen.
~ It's a map of the city, freckled with dots: green, amber, red. Linda's standing in front of it with her arms folded, the way people stand in front of modern art.
linda.n: They put it up on Monday. Underwriting say it "scores" people for their premiums. I asked what the score's made of and they said "insights". I asked what an insight is and they said "data, but nicer".
~ You lean in and hover over a red dot. A box pops up.
~ "Policyholder 44817 · Risk: elevated · Frequent late-night travel · Licensed premises: 6/month · Social graph: 2 contacts flagged."
* Late-night travel. Licensed premises, six a month. That's somebody's Friday at the pub, on a map, in an insurance office.
~ Out of habit, the way you'd look for your own house on a satellite map, you scroll to Linden Street.
~ There's a dot on your building. Amber. You hover.
~ "Policyholder 20931 · Business: PROOF (bakery) · Risk: rising · Leaves home 03:52 daily (anomalous) · Social graph: 1 contact flagged."
* Ellie's bakery is insured here. Of course it is. You told her about the staff discount.
* "Leaves home 03:52 daily (anomalous)". She's a baker. Being up at four is the job. It's the least anomalous thing about her.
* And one flagged contact. Ellie doesn't have the kind of contacts that get flagged. Ellie has a flour supplier, a yoga studio and you.
? "Where does this come from? Who's collecting it?"
 [fx skill:3]
 linda.a: That's my question. The contract's with Lumen. "Mobility and relationship insights from opted-in users". I didn't opt in to anything. Did you?
 * You think about the banner in Ellie's banking app. Recommended by your bank.
 [flag heard_lifescore]
? "Linda, that's where people's phones go at night."
 [fx skill:2]
 linda.d: I know what it looks like. I'm asking you because you'll say it out loud, and nobody in Underwriting will.
 [flag heard_lifescore]
linda.n: I'm not doing anything yet. I'm going to watch it. When you're back from your con you're going to help me understand it, and then I'm going to have a very polite meeting with somebody who'll regret it for the rest of their career.
* Lumen made the shield in Ellie's bank app, and the app going on Brindle's phones, and now the dots on this map. It's all the same shade of blue. You're starting to think of it as a uniform.
~ The clock says five, and Underwriting are already putting their coats on.
[sum Underwriting's new dashboard, LifeScore, "powered by Lumen", scores policyholders from where their phones go at night. Ellie's bakery was on it, with one flagged contact.]
`;
SC.p_lift=`
[hide]
linda.n: Go home, {h}. Two weeks and you're free. Don't hack anything I'd have to explain to legal.
~ The lift says going down. So does the sun.
sms LOG: 17:06:40 · subject left work · time at desk 7h 51m · mood (from typing rhythm): restless
[bg flat]
`;
SC.p_home=`
[bg flat]
[hide]
~ Evening. You eat something that didn't come in a box and then, to be fair to the box, something that did.
~ You're halfway through a video called "HACKING IN 10 MINUTES (REAL) (NOT CLICKBAIT)", presented by a man wearing sunglasses indoors, when someone hammers on your door. It's the kind of knock that ran up the stairs.
[sum Two weeks before CTRL+ALT+CON, Ellie hammered on your door: someone had stolen her bakery's account.]
[meet ellie]
ellie.d: {h}! Sorry. Sorry, sorry. Are you busy? You're not busy. You're never busy, you're always just... doing that.
~ It's nearly ten. Ellie's still in her apron, still floury, holding her phone in both hands as if it's bleeding.
ellie.d: Can you hack? You can hack. You told me you could hack. At the Christmas thing, after the mulled wine, you said "I could hack this whole street".
* You did say that. You remember saying it. You remember the mulled wine better.
ellie.d: Someone's taken the Instagram. The bakery one. They changed the password and the email, and now my face is on there selling... crypto?
[unlock phone]
~ She turns the screen round. Proof's account: twelve thousand followers, five years of crumb shots and a video of a croissant being laminated that went slightly viral in 2021.
~ The newest post is Ellie's face, very badly cut out, pasted onto the deck of a yacht next to a glass of champagne. "I MADE £40K WITH BAKECOIN IN ONE WEEK!! DM ME TO LEARN HOW 🚀🥐"
ellie.d: I don't own a yacht. I own a van with a dent in it. And I'd never put a rocket next to a croissant. That's not how croissants work.
ellie.o: Half my orders come through that account. Weddings. The café on Mill Lane. People are messaging it right now, and whoever's in there is answering them.
ellie.d: Mrs Okafor from the flower shop just texted to say she's "invested". She sent them two hundred pounds. Mrs Okafor. She irons her tea towels.
* Your stomach drops three floors. Someone is driving Ellie's whole life round town like a stolen car, and you're the one she came to.
? "Don't worry. I'll hack it back. Give me five minutes."
 [fx clout:4]
 ~ You sit down at the left monitor with enormous confidence and open a terminal. Ellie hovers at your shoulder, smelling faintly of butter.
 ~ You type: hack instagram
 ~ The terminal says: command not found.
 ~ You type it again, slower, the way people talk to tourists.
 ellie.s: ...Is that how it works?
 > ...No. No, it isn't.
 * A long silence. The fan in your PC whirrs sympathetically, like a friend who saw that.
 ? Keep bluffing: "Their encryption's military-grade. It needs time."
  [fx clout:3 ellie:-4]
  [flag bluffed]
  ellie.d: Okay. Okay. I'll try their support page, then. Thanks anyway.
  ~ She leaves. The door clicks shut very politely, which is worse than a slam. A slam would have been about the door.
  * You sit in the glow of three monitors and a man in sunglasses, paused mid-sentence.
  ~ Forty minutes later there's a softer knock. She's back, and her eyes are red.
  ellie.d: Support is a robot that sends me to other robots. The last one wanted me to prove who I am by logging in. To the account I can't log in to.
  ellie.d: Please. Whatever you actually know. Just the real stuff. I don't care if it's boring.
  > ...The real stuff. Okay. I'm sorry. Sit down.
 ? Come clean: "I'm not that kind of hacker. But I know how to do this properly."
  [fx ellie:8 skill:3]
  [flag clean0]
  ellie.o: Oh, thank god. I thought you were about to say "enhance".
  > There's no enhance. There's the boring way, and the boring way works.
? "I can't hack it back. Nobody can. But I know how to get it back properly. Sit down."
 [fx ellie:10 skill:3]
 [flag clean0]
 ellie.o: Properly? There's a properly?
 > There's always a properly. It's just slower than in films.
 ellie.h: I like slow. Bread's slow. Okay. Properly.
[unlock aff]
~ Ellie sits on the arm of your sofa, looks at the sofa, and moves to the floor.
* The first question is how they got in. You don't fix a leak with a mop.
> Before anything else: how did they get in? Let's look at your email.
ellie.n: My email? It's the Instagram that's broken.
> Your email is the key to everything else. Every "forgot password" link goes there. Whoever has your inbox can open every door it opens.
ellie.o: ...It opens all of them.
> Yeah.
~ She hands you her laptop. The lid is a sticker collage: a cat, a baguette in sunglasses, KNEAD TO KNOW. Her inbox is a landslide of order confirmations, flour-supplier newsletters, and four hundred unread emails from a yoga studio she went to once, in 2019, for one class.
* Somewhere in here is the email that started it. There's always one.
> Anything in the last fortnight that asked you to log in somewhere. Anything that made you panic.
[game phish pool=12,13,11,8 title="Ellie's inbox" noexp=1 who=ellie]
ellie.d: That one. The copyright one. "Your account will be deleted in 24 hours." I panicked. I clicked it. It had the logo and everything.
* Of course it had the logo. Logos are free. Anyone can right-click a logo.
? "Logos are free. Check the address it actually came from."
 [fx ellie:4 skill:2]
 ~ You show her. The name says "Instagram Support". The real address underneath says support@instaqram-help.co. A q where the g should be.
 ellie.o: A Q. They used a Q. That's so petty.
 > That's phishing: a fake message that looks like the real thing, so you hand over the password yourself. Nobody broke in. They asked, and they made it feel too urgent to check.
 ellie.n: Phishing. Like fishing. With a ph. Because hackers can't spell.
 > Because hackers think they're funny.
? "Don't feel bad. Clever people get phished every day."
 [fx ellie:6 skill:1]
 ellie.b: ...Thanks. I can laminate dough. I do maths in grams in my head. And I fell for a Q.
 > They do this for a living. Making you panic for ten seconds is the entire job. It's called phishing: a fake message, so you hand over the password yourself.
 * You don't mention that you nearly clicked one last month. It was about a parcel, and you were genuinely expecting a parcel.
> Next question. What's your email password?
ellie.o: I can't tell you my password! You're always telling me not to tell people my password!
* You are always telling her that. She does listen. She just listens in the wrong order.
> Fair. Very fair. Then tell me this: is it the same one as the Instagram?
ellie.n: ...
ellie.n: And the bank. And the bakery website. And the flour people. And the yoga studio.
ellie.o: It's my cat's name and the year I was born. It's memorable! You can't forget it!
> That's the problem. Nobody else can either. Every site leaks in the end, and when one does, robots try that password on everything else. It's called credential stuffing, and they do it millions of times a minute.
ellie.d: Robots are trying Mochi1994 on my bank?
> Robots are trying Mochi1994 on everyone's bank.
? "Get a password manager. One long password you remember, and a different random one for every site."
 [fx ellie:6 skill:3]
 ellie.n: So it's a cupboard. A locked cupboard with all my keys in it, and I only need the key to the cupboard.
 > Exactly. And the cupboard key is a long sentence nobody could guess. Not Mochi.
 ellie.h: "Mochi has never once caught a mouse." It's long, it's true, and nobody would guess it, because nobody knows how disappointing she is.
 * You set it up together, site by site. It takes forty minutes. She names the vault THE CUPBOARD.
? "Just add a dollar sign on the end. Hackers hate dollar signs."
 [fx clout:3 ellie:2]
 [flag dollar]
 ellie.h: Mochi1994$. Look at that. Military grade!
 * Something inside you dies a little. The robots will have it in about four seconds.
 * You'll fix it later. It goes on the list of things you'll fix later, which is now longer than your life.
? "Use your cat's name backwards."
 [fx ellie:2]
 ellie.s: Ihcom1994. That sounds like a sneeze. Try again, computer person.
 > ...Okay. A password manager. One strong password you remember, and it makes a different random one for every site.
 [fx skill:2]
 ellie.n: That sounds like more work, which is how I know it's right. Everything right is more work. Ask any sourdough.
~ Then the actual recovery, which is mostly forms.
~ You find the platform's real recovery page, typed in by hand, not clicked from an email. An ID check. A code sent to her old verified address. A video selfie, turning her head left, then right.
ellie.h: Should I hold up a baguette? For scale? So they know it's me?
> They really don't need...
~ She's already holding up a baguette.
~ It takes two hours and it's boring. You drink three cups of tea, and she eats most of a packet of your biscuits, which you'll bring up for a week.
~ At 12:11 AM the page refreshes and Proof's real profile picture loads. A loaf. The good one, with the ear.
ellie.b: It's back. It's back. Oh my god. You did it.
> We did it. You did the baguette.
* She hugs you. It's quick, she smells of butter and adrenaline, and you don't know what to do with your arms, so you do the wrong thing with them, and she laughs.
[fx ellie:6]
* Most people would stop there. But something's bothering you. She changed her email password an hour after it happened, and they still kept her out.
~ You open her email settings. Filters. Forwarding.
~ And there it is: a rule she never made. Any email containing "password" or "code" gets copied to relay-77@lgp-mail.net and then deleted from her inbox before she sees it.
[clue fwdrule]
ellie.o: They were reading my email? This whole time? Every time I asked for a reset code, they got it first?
> They were. That's why changing the password didn't save you. Every new key was being copied before it reached you.
> Not any more.
~ You delete the rule. Then you turn on two-factor authentication: after the password, a six-digit code from an app on her phone, a new one every thirty seconds. Someone who has her password still can't get in without her phone in their hand.
ellie.n: So the password's my front-door key, and this is the door also asking a question only my phone knows the answer to. A new question every thirty seconds.
> That's a better explanation than mine.
ellie.h: I'm calling it BREAD SHIELD.
* You'll never be able to un-hear BREAD SHIELD.
[unlock skill]
~ Then, out of habit, you do what you always do afterwards: you search her name, to see what the robots can see.
~ The bakery's About page: "Proof was started by Ellie Park in the flat she still lives in, above the shop on Linden Street." That's her address, give or take a door.
~ And under one of Proof's posts from last spring, there's a photo of you, squinting, in a dressing gown, holding a screwdriver. "Huge thanks to my neighbour {h} from upstairs for fixing the oven timer!!" Your face, your handle, your building, and the window of the room you're sitting in.
[unlock exp]
[fx foot:8]
* A cold feeling settles in that has nothing to do with the heating.
* Exposure. That's the word for it: how easy you are to find. Each post or photo drops a crumb, and one crumb is nothing, but enough of them make a trail to your door.
ellie.n: Crumbs. I sweep them up every night at eight. Every night. Otherwise you get mice.
> That's... exactly it.
ellie.o: So the internet has mice.
? Help her take the address off the site and the photo down. Tonight.
 [fx foot:-5 ellie:5 skill:2]
 ellie.n: I never thought about it. It's just the internet. Nobody reads About pages.
 > Nobody does. Except the people you don't want reading them.
 ellie.d: That's a horrible sentence. Put it on a mug.
? Leave it. Nobody reads About pages.
 [fx foot:4]
 ~ Ellie nods, relieved it's over. The photo of you in your dressing gown stays up. Somebody, somewhere, will like it.
~ There's one more thing in the recovered account: an unread message from a profile with no picture, no posts and no followers, called whisper_____.
whisper: THEY BOUGHT YOUR PASSWORD FROM A BREACH LIST. THE "RECOVERY SERVICE" THAT MESSAGED YOU TEN MINUTES AFTER IT HAPPENED IS THE SAME PEOPLE. LOOK UP WHO OWNS LUMEN GROWTH PARTNERS.
ellie.o: Who's that? Is that a hacker? Is it a good one?
> I... don't know.
ellie.n: The recovery thing, though. That's real. They messaged me right after. "We can restore your account for £149, guaranteed in 24 hours." I nearly paid. I had my card out.
~ She shows you. "Lumen Growth Partners · Account Recovery Specialists", sent eleven minutes after the yacht.
[clue recovery]
* Eleven minutes after the yacht. Somebody had the sales pitch written before the robbery.
~ You look them up. It doesn't take long.
~ Lumen Growth Partners belongs to Lumen Analytics, a data company with a glass tower in the city. Their flagship product is SafeSphere, the free privacy app: "Your shield on the internet." Ten million downloads. It's the blue shield on bus stops, on taxis, behind the till at the corner shop, and in Ellie's banking app this morning.
~ The fourth result says Lumen Analytics is the headline sponsor of CTRL+ALT+CON 20.
[flag lumen_known]
ellie.a: Hang on. So the people who stole my account are selling the fix, and they're paying for your hacker party?
? "It might be a coincidence."
 ellie.s: Mm. Coincidences don't usually come with a price list.
? "I don't know yet. But I'm going to find out."
 [fx ellie:4 clout:2]
 ellie.h: Look at you. "I'm going to find out." Like a detective. A detective in a hoodie with a biscuit crumb on it.
? "It's not called a hacker party."
 ellie.h: What's it called, then?
 > A convention. CTRL+ALT+CON. Four thousand people, a week of talks, and a competition called Capture the Flag that's been running for twenty years.
 ellie.o: Four thousand people like you?
 > Four thousand people better than me.
 ellie.b: Not better. Just more of them.
[fx ellie:3]
~ It's nearly one. Ellie gets up, stretches, and picks the biscuit crumb off your hoodie as if that's a normal thing for one person to do to another.
ellie.n: Two weeks, isn't it? Your con?
> Monday after next. The whole week.
ellie.n: Be careful. Promise me. If the people who did this are paying for the party...
> I'll be careful. I'll be so careful.
ellie.h: Bring me back a sticker. A good one. Not a crypto one.
* At the door she stops and looks back, and for a second it seems she's going to say something else.
ellie.b: Thank you, {h}. Really. You were real tonight, not like on your forum. I liked you better.
~ Then she's gone: down the stairs, the bakery's back door, a click. It's you, three monitors and a man in sunglasses paused mid-sentence.
* You close the video. You don't need HACKING IN 10 MINUTES. You've just done two hours of the boring kind, and it worked.
`;
SC.p_night=`
[bg flat]
[hide]
~ The flat is very quiet after Ellie. Mostly it's the fridge.
* You keep adding it up. Ellie's bank, Brindle's phones and Underwriting's map all lead to Lumen. So does a "recovery service" that turned up eleven minutes after a robbery, and so does the sponsor of the week you've looked forward to all year.
? Look Lumen up properly. Tonight.
 [fx skill:3]
 ~ Lumen Analytics, founded nine years ago. CEO: Victor Hale. Flagship: SafeSphere, ten million downloads. Headline sponsor of CTRL+ALT+CON 20, "proudly protecting attendees".
 ~ There's a news story from last year: a researcher called Jonah Reyes accused Lumen of something, was accused of stealing code, and retracted. The story is two paragraphs long. The retraction is longer.
 [flag saw_jonah_news]
? Go to bed. It's one in the morning.
 ~ You go to bed. It's a long time before you sleep.
~ On the left monitor, your thread. Fourteen upvotes. packet_pam: "source?"
* A week ago you didn't have one. Tonight you've got a forwarding rule, a fake recovery service and an amber dot over your best friend's bakery, and you still couldn't prove a thing.
~ You type a reply: "working on it." You read it four times, then save it to drafts.
* Dough has to prove before it goes in the oven. Ellie told you that once, at length, while you were trying to leave.
sms LOG: 00:58:13 · subject awake · screen time today 11h 02m
sms LOG: 00:58:13 · contact of policyholder 20931 (PROOF) identified · handle: {h} · keywords: "firewall", "hack" · flagged
if f('posted_ticket')
 sms LOG: 00:58:13 · travel: Halcyon Hotel, Mon 14th to Sun 20th · source: public post · noted
sms LIFESCORE · POWERED BY LUMEN: 00:58:14 · record updated · hello, {h}
`;
SC.sleep0=`
[bg flat]
[hide]
~ The fortnight goes the way fortnights do. You pack in your head forty times. Ellie's account stays hers. Every morning BREAD SHIELD asks her for a code, and she tells you about it over the counter as if it's the weather.
~ The reply to packet_pam stays in drafts.
~ And then it's Monday.
`;

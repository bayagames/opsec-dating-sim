/* ============ PROLOGUE: a Friday, two weeks before the con ============
   Morning in the flat, breakfast at Proof, a day at Brindle & Co, Underwriting's big telly, and then, that evening,
   Ellie at your door. It runs on the same calendar as the con (DAYS[0]). */
SC.p_wake=`
[chapter 0]
[bg flat]
[hide]
[wake flat]
~ Friday. 7:12 AM. Flat 1A, above Proof bakery, Linden Street.
~ Your alarm goes off for the third time. You've snoozed it twice. The third time it plays a sound you chose specifically because it's unbearable: a dial-up modem connecting.
* Two weeks. Two weeks today, and you'll be on a train to CTRL+ALT+CON.
~ Three monitors on your desk, glowing in the half-dark like an aquarium nobody feeds. On the left one, a forum thread you started at three in the morning, a week ago.
~ "honestly most firewalls are a joke if you know what you're doing"
~ Fourteen upvotes. One reply, from a user called packet_pam: "source?"
* You never answered packet_pam. You check every morning to see if anyone else has.
* Online, you're {h}. You've had the handle since you were fourteen. It's on four forums, two Discords and a Git account with one repository in it, which is a list of other people's repositories.
* Offline, you work the IT helpdesk at Brindle & Co Insurance. You reset passwords. You explain, gently, that the printer is not haunted. You own one houseplant, and it's plastic.
~ On the middle monitor, an email you've read eleven times.
~ "CTRL+ALT+CON 20 · Your ticket is confirmed. Hack Week: seven days of talks, villages, workshops and the world's longest-running Capture the Flag. Badge pickup opens Monday the 14th, 6 PM, at the Halcyon Convention Centre. Be excellent to each other."
* CTRL+ALT+CON. The biggest hacker convention in the country. Four thousand people who actually know what they're doing, in one building, for a week.
* You bought the ticket at 3 AM too. It seemed like a very good idea at 3 AM. It cost the same as two months of your gas bill.
? Post about it on the forum.
 ~ You type: "see you all at CTRL+ALT+CON 😎 room's booked at the Halcyon". You add a photo of the ticket. You hit post before you can think about it.
 [fx clout:3 foot:3]
 [flag posted_ticket]
 ~ Within a minute: "see u there king". You feel like a king.
 * A king whose travel dates, hotel and badge number are now public. But a king.
? Close the laptop. It's a work day.
 [fx skill:2]
 ~ The forum can wait. It has waited three years for you to say something true. It can wait a bit longer.
[unlock move]
~ Downstairs, through the floor, you can smell cinnamon. It's been coming up through the boards since four.
[sum A Friday, two weeks before the con. Your ticket confirmed. Fourteen upvotes, and packet_pam's "source?".]
`;
SC.p_bakery=`
[bg bakery]
~ Directly beneath your flat is Proof, a bakery so small that three customers count as a queue. The bell over the door. The radio on low. A coffee machine that hisses like a cat with opinions.
ellie.h: Morning, computer guy! The usual?
[meet ellie]
~ Ellie Park. Owner, head baker, only baker. There is flour on her cheek every single day, as if it's part of the uniform.
[unlock aff]
ellie.s: One cinnamon knot and a coffee strong enough to debug with. Did I say that right? I'm learning your language.
? "You said it perfectly."
 [fx ellie:5]
 ellie.h: I've been practising. I also know "have you tried turning it off and on again".
? "Technically you debug with a debugger, not coffee."
 [fx ellie:2]
 ellie.s: Wow. Okay. Your coffee is now decaf.
 ellie.h: Kidding. Mostly.
? "I don't need coffee. I run on pure code."
 [fx ellie:3]
 ellie.b: You run on cinnamon knots. I have the receipts. Literally. I print them.
ellie.n: Quick question while you're here. My card reader keeps saying "update required". Is it going to explode?
? "It's fine. Update it through the official app, not a link someone sends you."
 [fx ellie:6 skill:2]
 ellie.o: Oh! That's actually useful. You're actually useful.
 * You feel, for about four seconds, like someone who knows things.
? "Could be hackers. I'll take a look later. I'm kind of a big deal online."
 [fx ellie:1 clout:2]
 ellie.s: A big deal. Online. Mm-hm.
? "Turn it off and on again."
 [fx ellie:4]
 ~ She does. It updates. She stares at you like you just raised the dead.
 ellie.h: You're a wizard.
ellie.n: Also. My bank's started asking me to install this. Some shield thing. They say it keeps you safe.
~ She holds up her phone: a banner ad inside her banking app. A blue shield. "SafeSphere: your free privacy shield. Recommended by your bank."
? "Don't install it till I've had a look."
 [fx ellie:3 skill:1]
 [flag ellie_no_ss]
 ellie.n: Okay. I trust you more than a banner.
? "Everyone's using it. It's probably fine."
 [fx clout:1]
 ellie.h: Shield on everything! Like a knight!
 * You'll remember you said that.
~ She hands you the knot in a paper bag with a tiny croissant drawn on it in biro. She draws one on every bag.
* You've kept all of them. You will never tell anyone this.
[sum Breakfast at Proof. Ellie's bank had started recommending something called SafeSphere.]
`;
SC.p_door=`
[hide]
~ Linden Street at half seven: the barber unrolling his shutter, a van unloading flour, a pigeon eating a croissant flake with real violence.
[bg office]
~ Forty minutes later, the lift doors open on the third floor of the Brindle & Co tower.
`;
SC.p_office=`
[hide]
~ Brindle & Co Insurance. Third floor. Grey carpet, grey desks, a motivational poster of a rowing team that says TEAMWORK and has been there since before anyone can remember.
~ The IT helpdesk is you, a stapler and the Accounts printer, which hates you personally.
linda.n: {h}! Good, you're in. Half of Claims got weird emails this morning. Before anyone clicks anything, can you go through the queue?
~ Linda Ashworth, Head of Operations. She manages forty people, a budget, and a three-page document called "Things {h} Has Fixed That Were Not Broken".
linda.a: And then come and see me. Underwriting have got a new toy and I don't understand it, and when I don't understand something it's usually because someone doesn't want me to.
* Finally. A chance to be the hacker you say you are.
[sum A day at Brindle & Co. Linda wanted you to look at Underwriting's new toy.]
`;
SC.p_queue=`
[hide]
~ You sit down at the helpdesk. Forty-seven tickets. A suspicious number of them have the subject line "URGENT!!!" and were sent in the same minute.
* Same minute, same subject. That's not forty-seven people with problems. That's one person with forty-seven targets.
[unlock skill]
[game phish pool=3,10,4,8,11 title="Helpdesk queue" noexp=1 res=d1QueueRes]
if f('office_good')
 linda.h: Brilliant. That's every single one. Honestly, you're wasted on us.
 * For one second, you are a legend offline too.
 [fx skill:4]
else
 linda.a: Hm. Gary has already clicked the gift-card one. Gary has bought eleven gift cards. Gary does not know who for.
~ Across the office, Gary from Accounts is waving at you. Hard. With both arms.
`;
SC.p_gary=`
[hide]
gary.h: Mate. MATE. Are you, like, a hacker? A real one? Linda says you're going to a hacker thing.
~ Gary Pugh, Accounts. Thirty-four. He owns a jet ski and a T-shirt that says "I PAUSED MY GAME TO BE HERE".
[unlock clout]
? "Yeah. I could take this building's network down from my phone."
 [fx clout:6]
 gary.o: No way. Sick. Don't, though. My fantasy football's on it.
? "I'm learning. I read a lot."
 [fx skill:2]
 gary.h: Respect. Can you un-buy eleven gift cards?
? "It's a convention. It's mostly talks."
 [fx skill:1]
 gary.s: Talks. Right. "Talks". Wink.
gary.n: Anyway, listen. I've ordered that shield app for everyone's work phones. SafeSphere. The Lumen bloke said it'd stop exactly this kind of thing. The gift card thing. Rolls out in two weeks.
gary.n: And it's free, and it gives us "insights". Underwriting are already using the data side. Come and look at their telly. It's got a little map.
[clue gary_mdm]
`;
SC.p_underwriting=`
[bg office]
[hide]
~ Underwriting is the corner of the floor with the good chairs. On the wall, a new TV, sixty inches, showing a dashboard with a cheerful blue logo: LIFESCORE · powered by Lumen.
~ A map of the city, covered in little dots. Each dot has a colour: green, amber, red. Linda's standing in front of it with her arms folded.
linda.n: This. They put it up on Monday. Underwriting say it "scores" people for their premiums. I asked what the score is made of, and they said "insights". I asked what an insight is, and they said "data, but nicer".
~ You lean in. Hover over a red dot. A pop-up: "Policyholder 44817 · Risk: elevated · Frequent late-night travel · Visits: licensed premises (6/month) · Social graph: 2 contacts flagged."
* Late-night travel. Licensed premises. Six a month. That's someone's Friday at the pub, on a map, in an insurance office.
? "Where does this come from? Who's collecting this?"
 [fx skill:3]
 linda.a: That's my question. The contract's with Lumen. "Mobility and relationship insights from opted-in users". I didn't opt in to anything. Did you?
 [flag heard_lifescore]
? "Linda, this is people's location. Every night."
 [fx skill:2]
 linda.d: I know. I know what it looks like. I'm asking you because you'll say it out loud.
 [flag heard_lifescore]
linda.n: I'm not going to do anything yet. I'm going to watch it. And when you're back from your con, you're going to help me understand it, and then I'm going to have a very polite meeting with someone who'll regret it.
* Lumen. The shield on Ellie's bank. The app on Brindle's phones. The dots on Underwriting's map. It's the same blue everywhere.
~ The clock says five. The lift says "going down".
[sum Underwriting's new dashboard, LifeScore, "powered by Lumen", scores policyholders from where their phones go at night.]
`;
SC.p_lift=`
[hide]
linda.n: Go home, {h}. Two weeks and you're free. Don't hack anything I'd have to explain to legal.
~ The lift says "going down". So does the sun.
[bg flat]
`;
SC.p_home=`
[bg flat]
[hide]
~ Evening. Your flat. You eat something that isn't from a box, then you eat something that is.
~ You're halfway through a video called "HACKING IN 10 MINUTES (REAL) (NOT CLICKBAIT)" when it happens.
~ Then someone hammers on your door. Not a knock. A hammering. The kind of knock that has been running up the stairs.
[sum Two weeks before CTRL+ALT+CON, Ellie hammered on your door: someone had stolen her bakery's account.]
[meet ellie]
ellie.d: {h}! Sorry. Sorry, sorry. Are you busy? You're not busy. You're never busy, you're always just... doing that.
~ Ellie Park. She owns Proof, the bakery downstairs. She bakes every loaf in it herself, starting at four every morning, and there's flour on her cheek every single day, as if it's part of the uniform.
~ It's nearly ten at night. There's still flour on her cheek. She's holding her phone in both hands like it's bleeding.
ellie.d: Can you hack? You can hack. You told me you could hack. You said it at the Christmas thing, after the mulled wine, you said "I could hack this street".
* You did say that. You remember saying it. You remember the mulled wine better.
ellie.d: Someone's taken the Instagram. The bakery one. They changed the password and the email, and now my face is on there selling... crypto?
[unlock phone]
~ She turns the phone round. Proof's account: twelve thousand followers, five years of bread photos, sourdough crumb shots, a video of a croissant being folded that went sort of viral in 2021.
~ At the top, a brand new post. Ellie's face, very badly cut out, pasted onto the deck of a yacht. A glass of champagne. A caption: "I MADE £40K WITH BAKECOIN IN ONE WEEK!! DM ME TO LEARN HOW 🚀🥐"
ellie.d: I don't own a yacht. I own a van with a dent in it. And I'd never put a rocket next to a croissant. That's not even how croissants work.
ellie.o: Half my orders come through that account. Weddings. The café on Mill Lane. People are messaging it right now, and whoever's in there is answering them.
ellie.d: Mrs Okafor from the flower shop just texted me to say she "invested". She sent them two hundred pounds. Mrs Okafor.
* Your stomach drops. This isn't a forum thread. This is somebody's whole life, and it's being driven like a stolen car.
? "Don't worry. I'll hack it back. Give me five minutes."
 [fx clout:4]
 ~ You sit down at the left monitor with enormous confidence. You open a terminal. Ellie hovers at your shoulder.
 ~ You type: hack instagram
 ~ The terminal says: command not found.
 ~ Ellie watches you type it again, slower, as though the computer might be hard of hearing.
 ellie.s: ...Is that how it works?
 > ...No. No, it isn't.
 * A long, quiet moment. The fan in your PC whirrs, sympathetically.
 ? Keep bluffing: "Their encryption's military-grade. It needs time."
  [fx clout:3 ellie:-4]
  [flag bluffed]
  ellie.d: Okay. Okay. I'll... try their support page, then. Thanks anyway.
  ~ She leaves. The door clicks shut very politely, which is somehow worse than a slam.
  * You sit in the glow of three monitors and the man in sunglasses, paused, mid-sentence, forever.
  ~ Forty minutes later: a softer knock. She's back. Her eyes are red.
  ellie.d: Support is a robot that sends me to other robots. One of them asked me to verify my identity by logging in. To the account I can't log into.
  ellie.d: Please. Whatever you actually know. Just the real stuff. I don't care if it's boring.
  > ...Okay. The real stuff. I'm sorry. Sit down.
 ? Come clean: "I'm not that kind of hacker. But I know how to do this properly."
  [fx ellie:8 skill:3]
  [flag clean0]
  ellie.o: Oh thank god. I was so worried you were about to say "enhance".
  > There's no enhance. There's just the boring way, and the boring way works.
? "I can't hack it back. Nobody can. But I know how to get it back properly. Sit down."
 [fx ellie:10 skill:3]
 [flag clean0]
 ellie.o: Properly? There's a properly?
 > There's always a properly. It's just slower than the films.
 ellie.h: I like slow. Bread's slow. Okay. Okay. Properly.
[unlock aff]
~ Ellie sits on the arm of your sofa, then, after a look at the sofa, on the floor.
* First question. Not "how do we get in". How did THEY get in. You don't fix a leak by mopping.
> First things first. How did they get in? Let's look at your email.
ellie.n: My email? Why my email? It's the Instagram that's broken.
> Because your email is the key to everything else. Password resets go to your email. If someone has your email, they have everything that resets through it.
ellie.o: ...Everything resets through it.
> Yeah.
~ She hands you her laptop. Its lid is covered in stickers: a cat, a baguette with sunglasses, "KNEAD TO KNOW". Her inbox is a landslide of order confirmations, flour-supplier newsletters and four hundred unread emails from a yoga studio she went to once.
* Somewhere in here is the email that started it. There always is one.
> We're looking for anything in the last two weeks that asked you to log in somewhere. Anything urgent, anything scary.
[game phish pool=12,13,11,8 title="Ellie's inbox" noexp=1 who=ellie]
ellie.d: That one. The copyright one. "Your account will be deleted in 24 hours for copyright violation." I panicked. I clicked it. It had the logo and everything.
* Of course it had the logo. Logos are free. Anyone can right-click and save a logo.
? "Logos are free. Anyone can copy one. Always check the address it really came from."
 [fx ellie:4 skill:2]
 ~ You show her: the sender's name says "Instagram Support". The actual address underneath says support@instaqram-help.co. A q, not a g.
 ellie.o: A Q. They used a Q. That's so petty.
 > That's phishing. A fake message that looks like the real thing, so you hand over your password yourself. Nobody hacked anything. They just asked, and the message made it feel urgent enough that you didn't stop to check.
 ellie.n: Phishing. Like fishing. With a ph. Because hackers can't spell.
 > Because hackers think they're funny.
? "Don't feel bad. Smart people get phished every day."
 [fx ellie:6 skill:1]
 ellie.b: ...Thanks. I feel like such an idiot. I make laminated dough. I can do maths in grams in my head. And I fell for a Q.
 > You're not an idiot. They're professionals. Making you panic for ten seconds is their whole job. It's called phishing: a fake message, so you hand over your password yourself.
 * You don't say: you've almost clicked one yourself. Last month. It was about a parcel.
> Next question. What's your email password?
ellie.o: I can't just tell you my password! You're always telling me not to tell people my password.
* You are always telling her that. She does listen. She just listens in the wrong order.
> Fair. Very fair. Then tell me this: is it the same password as the Instagram?
ellie.n: ...
ellie.n: And the bank. And the bakery website. And the flour supplier. And the yoga studio.
ellie.o: It's my cat's name and the year I was born! It's memorable! You can't forget it!
> That's the problem. Neither can anyone else. Once one of those sites leaks, and they all leak eventually, people try that password on everything else. It's called credential stuffing. Robots do it, millions of times a minute.
ellie.d: Robots are trying Mochi1994 on my bank?
> Robots are trying Mochi1994 on everyone's bank.
? "Get a password manager. One long, random, different password for every site. You only remember one."
 [fx ellie:6 skill:3]
 ellie.n: So it's like... a cupboard. A locked cupboard. With all the keys in it. And I only need the key for the cupboard.
 > Exactly that. And the cupboard key should be a long sentence nobody could guess. Not Mochi.
 ellie.h: "Mochi has never once caught a mouse." That's long. That's true. Nobody would guess that, because nobody knows how disappointing she is.
 * You install it with her, site by site. It takes forty minutes. She names the vault "THE CUPBOARD".
? "Just add a dollar sign on the end. Hackers hate dollar signs."
 [fx clout:3 ellie:2]
 [flag dollar]
 ellie.h: Mochi1994$. Done! Look at that! Military grade!
 * Something inside you dies a little. It will be found by robots in roughly four seconds.
 * Later. You'll fix it later. You add it to the list of things you'll fix later, which is now longer than your actual life.
? "Use your cat's name backwards."
 [fx ellie:2]
 ellie.s: Ihcom1994. That sounds like a sneeze. No. Try again, computer person.
 > ...Okay. Password manager. One strong password you remember, and it makes a different random one for every site.
 [fx skill:2]
 ellie.n: That sounds like more work. Which is how I know it's the right answer. Everything right is more work.
~ Then the actual recovery. Not hacking. Forms.
~ You find the platform's real recovery page: typed in by hand, not clicked from any email. An ID check. A code to her old, verified address. And a video selfie, turning her head left and right.
ellie.h: Should I hold up a baguette? For scale? So they know it's me?
> They really don't need...
~ She's already holding up a baguette.
~ It takes two hours. It's boring. You drink three cups of tea and she eats most of a packet of your biscuits, which you will be bringing up for a week.
~ At 12:11 AM the screen refreshes, and Proof's real profile picture loads. A loaf. The good loaf, the one with the ear.
ellie.b: It's back. It's back. Oh my god. You did it.
> We did it. You did the baguette.
* She hugs you. It's quick, and she smells of butter and anxiety, and you don't know where to put your arms, so you put them in the wrong place, and she laughs.
[fx ellie:6]
* You should stop there. Normal people would stop there. But you check one more thing, because something is bothering you. How did they keep her locked out for so long, even after she changed her email password?
~ You open her email settings. Filters. Forwarding.
~ There it is. A rule she never made: every email with "password" or "code" in it is silently copied to relay-77@lgp-mail.net, then deleted from her inbox.
[clue fwdrule]
ellie.o: They were reading my email? This whole time? Every time I asked for a reset code, they got it first?
> They were. That's why changing the password didn't save you. They had a copy of the key arriving in the post.
> Not any more.
~ You delete the rule. Then you turn on two-factor authentication: a second step after the password, a six-digit code from an app on her phone that changes every thirty seconds. Even someone with her password can't get in without her phone in their hand.
ellie.n: So a password is my front door key, and this is... the door also asks me a question only my phone knows the answer to. Every thirty seconds. A different question.
> That's... actually a better explanation than mine.
ellie.h: I'm calling the app BREAD SHIELD.
* You will never be able to un-hear BREAD SHIELD.
[unlock skill]
~ Then, out of habit, the thing you always do: you search her name. Just to see what the robots can see.
~ The bakery's About page: "Proof was started by Ellie Park in the flat she still lives in, above the shop on Linden Street." Her address, in effect, to the door.
~ And under one of Proof's posts from last spring, a photo: you, squinting, in your dressing gown, holding a screwdriver. "Huge thanks to my neighbour {h} from upstairs for fixing the oven timer!!" Your face. Your handle. Your building. The window of the flat you're sitting in.
[unlock exp]
[fx foot:8]
* There's a cold feeling that has nothing to do with the heating.
* Exposure. That's the word for it: how findable you are. Every post, every photo, every About page adds a little. Each one is harmless. Together, they're a map to your door.
? Help her take her address off the site and the photo down. Tonight.
 [fx foot:-5 ellie:5 skill:2]
 ellie.n: I never thought about it. It's just... the internet. I thought nobody reads About pages.
 > Nobody does. Except the people you don't want reading them.
 ellie.d: That's a horrible sentence. Write it on a mug.
? Leave it. Nobody reads About pages.
 [fx foot:4]
 ~ Ellie nods, relieved to be done. The photo of you in your dressing gown stays up. Somebody, somewhere, will like it.
~ One more thing in the recovered account: an unread DM, from a profile with no picture, no posts and no followers. Username: whisper_____.
whisper: THEY BOUGHT YOUR PASSWORD FROM A BREACH LIST. THE "RECOVERY SERVICE" THAT MESSAGED YOU TEN MINUTES AFTER IT HAPPENED IS THE SAME PEOPLE. LOOK UP WHO OWNS LUMEN GROWTH PARTNERS.
ellie.o: Who's that? Is that a hacker? Is that a good one?
> I... don't know.
ellie.n: The recovery thing. That's real. They messaged me. Right after. "We can restore your account for £149, guaranteed in 24 hours." I nearly paid it. I had my card out.
~ She shows you the message. "Lumen Growth Partners · Account Recovery Specialists". Sent eleven minutes after the yacht post.
[clue recovery]
* Eleven minutes. That isn't a coincidence. That's a sales funnel.
~ You look them up. It doesn't take long.
~ Lumen Growth Partners is a subsidiary of Lumen Analytics, a data company with a glass office tower in the city. Their flagship product is SafeSphere, a free privacy app: "Your shield on the internet." Ten million downloads. A blue shield icon you've seen on bus stops, on the sides of taxis, on the back of the till at the corner shop.
~ And then the fourth search result. Lumen Analytics is the headline sponsor of CTRL+ALT+CON 20.
[flag lumen_known]
ellie.a: Wait. Wait. So the people who stole my account are also selling the fix. And they're sponsoring your hacker party?
? "It might be a coincidence."
 ellie.s: Mm. Coincidences don't usually DM you with a price list.
? "I don't know yet. But I'm going to find out."
 [fx ellie:4 clout:2]
 ellie.h: Look at you. "I'm going to find out." You sounded like a detective. A detective in a hoodie with a biscuit crumb on it.
? "Hacker party is not what it's called."
 ellie.h: What's it called, then?
 > A convention. A con. CTRL+ALT+CON. Talks, workshops, villages for different kinds of hacking. A big competition called Capture the Flag. Four thousand people.
 ellie.o: Four thousand people like you?
 > Four thousand people better than me.
 ellie.b: Not better. Just more. There's a difference.
[fx ellie:3]
~ It's nearly one in the morning. Ellie stands up, stretches, and picks a biscuit crumb off your hoodie as if it's the most normal thing in the world.
ellie.n: Two weeks, right? Your con? The big one?
> Monday after next. A whole week.
ellie.n: You'll be careful. Promise me. If the people who did this are paying for the party...
> I'll be careful. I'll be so careful.
ellie.h: Bring me back a sticker. A good one. Not a crypto one.
* At your door she stops, and looks back, and for a second it seems like she's going to say something else.
ellie.b: Thank you, {h}. Really. You were... you were real tonight. Not the forum you. The real you. I liked the real you.
~ Then she's gone, down the stairs, and the bakery's back door clicks, and you're alone with three monitors and a man in sunglasses paused mid-sentence.
* You close the video. You don't need HACKING IN 10 MINUTES. You just did two hours of the boring kind, and it worked.
* On the forum, packet_pam's reply is still sitting there. "source?"
* You don't answer it. For the first time, you think you might know what the honest answer is.
`;
SC.p_night=`
[bg flat]
[hide]
~ Nearly one in the morning. Your flat is very quiet after Ellie's gone.
* Lumen. The shield on her bank app. The shield on Brindle's phones. The dots on the LifeScore map. The "recovery" eleven minutes after the yacht. The sponsor of the con you've been looking forward to for a year.
? Look up Lumen properly. Tonight.
 [fx skill:3]
 ~ Lumen Analytics. Founded nine years ago. CEO: Victor Hale. Flagship: SafeSphere. Ten million downloads. Headline sponsor of CTRL+ALT+CON 20, "proudly protecting attendees".
 ~ A news story from last year: a researcher called Jonah Reyes accused Lumen of something, was accused of stealing code, and retracted. The story's two paragraphs long. The retraction is longer.
 [flag saw_jonah_news]
? Go to bed. It's one in the morning.
 ~ You go to bed. You don't sleep for a long time.
~ Two weeks.
`;
SC.sleep0=`
[bg flat]
[hide]
~ The fortnight goes the way fortnights do. You pack in your head forty times. Ellie's account stays hers. BREAD SHIELD asks her for a code every morning, and she gives it, every morning.
~ And then it's Monday.
`;

/* ============ AFTERMATHS (2/2) ============ */
SC.after_blackout=`
[bg basement]
~ EIGHT DAYS LATER. THE CON CENTRE BASEMENT.
~ Lumen is calling the blackout "sabotage by extremists". The venue has suspended Sunny "pending investigation". And on Thursday the venue will hand the MDF's contents back to "their rightful owner", meaning LANTERN-01, meaning Lumen. Unless somebody gets the logs off it first.
sunny.n: I still have a badge. Technically. They forgot to cancel it. They forgot because I built the system that cancels badges.
~ The plant room door. A new padlock on it, cheap and shiny.
if met('nyx')
 nyx.s: Oh, that's insulting. Hold my torch.
 ~ Nyx has it open in eleven seconds. She looks almost disappointed.
else
 [game timing kind=pins n=3 mult=0 title="A cheap new padlock"]
 ~ It's cheap. You have it open in a minute. Sunny watches with her arms folded and the look of someone deciding whether to be impressed.
~ LANTERN-01 hums in the rack, still running on battery backup. Sunny plugs in a laptop.
sunny.n: The logs are encrypted. The key's on the box. If we pull the power, the key's gone. If we copy it live, the box sends an alert to Krall's phone. We've got four minutes after it alerts.
? Copy it live. Four minutes is enough.
 [game pipe n=1 only=7 title="Pull the logs before the alert lands"]
 ~ Three minutes forty. You're out of the plant room door and up the service stairs as two men in Lumen fleeces come down the main ones.
 [flag aft_logs]
? Photograph the screen instead: the routing table only
 ~ Less. Much less. Just enough to prove where the data went: one IP address, in a Halberd data centre in Frankfurt.
 [flag aft_logs]
~ Saoirse runs it on Monday: "LANTERN'S LOST LOGS". Every badge, every meeting, every minute, mapped by a box that Lumen swore did not exist.
~ Lumen withdraws the "extremists" statement. The venue reinstates Sunny with an apology and a pay rise she uses to buy a nap pod for the NOC.
sunny.h: It stopped the sale. Now it's stopped the lie. That's both. I'd like my nap now.
[sum Aftermath: you went back into the basement with Sunny and pulled LANTERN-01's logs before Lumen got the box back. That ended the lie as well as the sale.]
`;
SC.after_graph=`
[bg cafe]
~ SIX MONTHS LATER.
~ A café across the city. A table at the back. A woman you've never met sits down opposite you with her coat still on. She's a civil servant. She found something in her department's contracts she wasn't supposed to find.
"Source": They said you'd know what to do. A friend of a friend. They said you were at the con. They said you were "the one who knows about the graph".
* LANTERN is running. You know it's running. Every meeting she's had this month is already a line on somebody's map. Including, probably, this one.
? "Turn your phone off. No, properly. Give it to me."
 [flag aft_teach]
 ~ You put it in a crisp packet. Then you put the crisp packet in the café's freezer, with the owner's blessing, because the owner is Ellie's cousin.
 "Source": Is that... does that work?
 > Well enough. For now.
? "We should leave. Separately. Different directions."
 ~ You leave first, through the kitchen. She leaves ten minutes later, by the front. You meet again a week later in the reading room of a library with no Wi-Fi.
~ For an hour you teach her the things nobody taught you until it was nearly too late: how to meet, how to talk, what not to carry, who not to tell. She writes nothing down. Good.
"Source": Does this ever get easier?
? "No. But you get better at it."
? "Yes. When there are enough of us."
~ That night you post on the old forum, the one from when you were fourteen. A long post. Practical. Boring. Correct. "How to meet someone when everyone's watching."
~ The next morning it has four hundred replies. The first one is from packet_pam.
pam.n: "source: me, and everyone else here. keep going."
* You tried. That has to count for something. It's starting to feel like it does.
[sum Aftermath: LANTERN shipped. Six months later you were teaching a stranger in a café how to stay off the graph.]
`;
SC.after_scapegoat=`
[bg office]
~ THREE WEEKS LATER. AN INTERVIEW ROOM.
~ Interview under caution. Two detectives, a tape recorder that's actually a laptop, and a folder with your face on the front, printed off WH1SPER's post.
"Detective": You see the problem. Every place WHISPER posted from, you were there. Every time. Your badge says so.
if met('noor')
 noor.n: My client's badge says so because the badge was built by the people who wrote the posts. Next question, please.
 ~ Noor, beside you, with her fountain pen and her dreadful calm. She came on the first day. She's not charging you.
else
 "Duty solicitor": You don't have to answer that.
? "Ask Lumen's Trust and Safety team who logged in to the WH1SPER account."
 [flag aft_ask]
 "Detective": We have asked. They've declined to provide access.
 > Then ask a judge to make them.
 ~ The detective writes something down. For the first time, she looks like she might be on a different side.
? "No comment."
 ~ "No comment." Twenty-two times. It's the most boring three hours of your life. It's also correct.
~ That evening, Ellie's waiting outside the station in her apron with a box of pastries for the custody sergeant, because she's Ellie.
ellie.n: I told them you were in my bakehouse at four on Thursday morning folding dough. They asked if I had proof. I said, "I'm literally called Proof."
~ The charges are dropped in March. Krall's team is charged in May. The internet doesn't notice. Your name still comes up first when you search for "WHISPER".
? Write your own account, and post it
 [flag aft_post]
 ~ Ten thousand words. Dates. Evidence. "I am not WHISPER, and this is how they made you think I was." It gets fewer clicks than the lie. It gets read by everyone who matters.
? Let it go
 * You change your name on everything. You keep the old one for Ellie.
[sum Aftermath: interviewed under caution, with Ellie as your alibi. The charges were dropped in March and Krall's team were charged in May.]
`;
SC.after_soldout=`
[bg office]
~ ONE YEAR LATER. LUMEN TOWER, FLOOR 31.
~ "Head of Community". Glass desk. A view of the river you never look at. Your shield-shaped business cards are on their third reprint.
~ An email arrives at 11:48 PM to your personal address. Not your Lumen one. Nobody at Lumen knows your personal address.
~ "You don't know me. I work in data. They're using LANTERN to find the people who talk to unions. I'm scared. Somebody said you used to be one of the good ones. —D"
? Reply. Help them.
 [flag aft_help]
 ~ You reply from a library computer. You meet in a park. You give them a USB stick with everything you've seen in a year on the 31st floor, which turns out to be a great deal.
 ~ Saoirse's byline. "INSIDE LUMEN: THE HEAD OF COMMUNITY SPEAKS". Your name is in it, because you asked for it to be.
 ~ Lumen fires you by courier. Ellie puts the sign back in the window: WE DO THINGS PROPERLY HERE.
 * It's not a lot of money. You keep saying that too. It feels better.
? Delete it.
 ~ You delete it. Then you empty the bin. Then you sit there for an hour in the dark, on the 31st floor, with the river you never look at.
 ~ In the morning, the data team has one fewer member. Nobody tells you why. You don't ask.
 * It's a lot of money. You say it to yourself in the lift. You've stopped believing it.
? Forward it to Krall.
 [flag aft_krall]
 ~ Krall replies with a thumbs-up emoji. Nothing else. Three weeks later you get a bonus.
 * You don't sleep for a while after that. Then you do, which is worse.
[sum Aftermath: a year as Lumen's Head of Community, then an email from someone who said you used to be one of the good ones.]
`;
SC.after_proof=`
[bg bakery]
~ THREE MONTHS LATER. PROOF.
~ The news ran its course. LANTERN shipped, or didn't, depending on which week you asked. You stopped checking. The bakery opened at six every day, and you were there for every one of them.
~ You can do a proper fold now. You can do a laminated dough. You can tell when sourdough's ready by the smell.
~ On a Tuesday morning the bell goes, and it's someone in an oversized hoodie with the sleeves pulled over his hands. Rin.
rin.n: Hi. Sorry. I didn't call. I don't call people. Can I have a... whatever that is? The one with the twist.
ellie.h: Cinnamon knot! It's the best one. On the house. You're the one from the photos!
rin.d: We're starting again. A few of us. It got worse after the con. We could use someone who reads the permissions.
? "I'm a baker now."
 rin.s: I can see that. You've got flour on your eyebrow. It suits you.
 rin.n: Bakers can read permissions too. One evening a week. In the back room. You don't even have to leave.
? "Tell me everything."
 [flag aft_back]
 rin.h: I was hoping you'd say that. I brought slides.
 ~ He did. He brought slides. On a laptop he sets up on the flour bin.
ellie.n: The back room's free on Thursdays. I'll make tea. I'm putting a sign up. "Proof Security Club". I'll draw a croissant on it.
* You went home. The fight went on without you. Now it's coming in the front door asking for a cinnamon knot.
[sum Aftermath: months of folding dough at Proof, until Rin came in for a cinnamon knot and asked you back. Thursdays, in the back room.]
`;
SC.after_larp=`
[bg flat]
~ FOUR MONTHS LATER.
~ The clip has eleven million views. Someone made a remix. Someone made a remix of the remix. "Quantum-encrypted blockchain telemetry" is on a T-shirt you saw in a shop window in town.
~ You haven't posted since. You haven't been back to the forum. You've been doing something else: starting again. Properly.
~ A small, quiet CTF, online. Beginners' bracket. You enter under a new handle.
[game pipe n=2 only=12,4 title="Beginners' bracket"]
~ You come eighth out of forty. You write up every challenge, carefully, honestly, with every mistake you made left in. You post it.
~ A reply arrives within the hour. packet_pam.
pam.n: "this is good. you got #3 wrong, here's why. but this is good. source: me."
? Thank her and ask for help with #3
 [flag aft_learn]
 pam.s: "now you're getting it. 'I don't know' is the most powerful thing a hacker can say."
? Tell her who you are
 pam.h: "i know who you are. i've always known. the bluff was bad. this is much better."
~ Next year, at CTRL+ALT+CON, you sit in the audience for the beginners' track, with a notebook, at the back. Nobody recognises you. Then someone does: Rin, two rows in front. He turns round and holds up a little handwritten sign. "PROUD OF YOU."
* You should have handed over the microphone. Next time you will.
[sum Aftermath: after the bluff went viral you started again, properly, in a beginners' CTF. packet_pam replied to your write-up.]
`;
SC.after_opensource=`
[bg hotel]
~ SIX MONTHS LATER. ROOM 1337, BOOKED UNDER EVERYONE'S NAME.
~ The planning meeting for next year's con. Marge says it's a "small informal meeting". There are twenty-three people in a hotel room built for two.
marge.n: No headline sponsor. Four thousand people paying their own way. A programme run by the people who were in this room. I need a theme. You lot pick it.
~ Everyone looks at you. You didn't fall in love this week. You did something else: you became the person everyone looks at when a decision has to be made.
? "Trust nobody."
 rin.h: Classic. It'll look great on a lanyard.
 [flag aft_theme1]
? "Read the back."
 ~ Tilly makes a sound like a kettle and has to sit on the bed.
 [flag aft_theme2]
? "Source: everyone."
 ~ Across the room, packet_pam, who came in late and is sitting on the radiator, raises her mug and doesn't say anything at all.
 [flag aft_theme3]
marge.h: Done. Decided. Nobody argue. Next item: who's running the village nobody wants to run?
~ Twenty-two hands point at you.
? Accept, with dignity
 ~ You accept, with dignity. Everyone cheers, without any.
? Point at Rin
 rin.d: Absolutely not. I'll help. I'll bring the worms. I'll make a slide. One slide.
~ They're the people you'd call at three in the morning. They're the people who'd pick up. That turned out to be the whole point.
[sum Aftermath: you helped plan next year's con, with no sponsor, in a hotel room with twenty-three people in it.]
`;
SC.after_notfound=`
[bg train]
~ MONDAY. THE 09:12.
~ A bag of stickers for Ellie on your lap. The carriage is half empty. Your phone's off. The city slides away behind you.
~ At the next stop, a woman gets on with a cardigan, a canvas bag of books, and a laptop covered in stickers from privacy projects you've heard of. She sits opposite you. You know who she is before she says anything.
pam.n: You were going to go home without saying goodbye.
> I didn't know you were on this train.
pam.s: I wasn't. I got on it because you were. That's a joke. I'm going to my daughter's. Same line.
~ For two hours, she talks to you about the things that don't make the news. Small projects. Libraries that need someone to set up the Wi-Fi properly. Women's refuges that need someone who knows what stalkerware is. Schools whose names shouldn't be on four thousand phones.
pam.n: The con's once a year. The work is every Tuesday. Nobody gets on stage for it. Nobody falls in love at it. It's mostly checking someone's router.
? "Can I help?"
 [flag aft_pam]
 pam.h: I was hoping you'd ask. There's a refuge near you. Thursday evenings. Bring a screwdriver.
? "That sounds lonely."
 pam.d: It isn't. That's the secret. You do it alone, and it turns out everyone else is doing it alone, at the same time, and that's not alone at all.
~ She gets off two stops early. On the platform she raises one hand, not waving, just there.
* You did the right thing. You did most of it alone. Now it turns out you didn't have to.
[sum Aftermath: packet_pam sat opposite you on the 09:12 and offered you Thursday evenings at a refuge near home.]
`;
SC.after_lasttrain=`
[bg flat]
~ ONE YEAR LATER.
~ Flat 1A. A wet Tuesday. Proof's ovens humming downstairs. You're eating toast standing up when the news alert comes in, and this time you don't swipe it away.
~ "LANTERN: HOW A PRIVACY APP MAPPED A NATION". A year of fallout in one headline. Arrests in three countries. A whistleblower's photo. A list of names of people who were "identified through routine analysis".
~ One of the names you recognise. Somebody from the con. Somebody you could have met.
~ The website for CTRL+ALT+CON is still in your bookmarks. Twenty-first year. Tickets on sale. A line at the bottom of the homepage that wasn't there last year: "In memory of the ones who were mapped."
? Buy a ticket
 [flag aft_ticket]
 ~ It costs more than you'd like. You buy it anyway. The confirmation email has a small line at the bottom: "Welcome back."
 ~ Downstairs, Ellie sees the email on your phone over your shoulder and says nothing at all. She just hands you a cinnamon knot, with a tiny croissant drawn on the bag.
? Close the laptop
 ~ You close the laptop. You finish your toast. You do the washing up.
 ~ Later that night, you open it again. You buy the ticket at 2 AM, when nobody's watching, which is the only way you know how to do brave things.
 [flag aft_ticket]
* It wasn't your fight. It is now.
[sum Aftermath: a year later, a headline about LANTERN. You bought a ticket to next year's con.]
`;
SC.after_harem=`
[bg ballroom]
~ ONE YEAR LATER. CTRL+ALT+CON, TWENTY-FIRST YEAR.
~ The Grand Ballroom again. Purple chandeliers. Tilly's new badges on four thousand lanyards, rainbow round the edges, firmware open source, a hidden mode nobody's found yet.
~ They're all here again. Some of them came a long way.
~ Ellie's opened a second Proof by the station. Pia plays outside it on Thursdays, and Jonah sells coffee next to her and talks to everyone.
~ Nyx quit red-teaming and teaches locksport at a school for girls. Ada won the international CTF. Priya switched her phone on, once, in March, for a wedding. Juno has a cooking show under her real name. Kit's new suit has no helmet.
~ Rin runs Lamplight. Bea's in second year at art school, and her degree show is all drawings of the same hotel bar. Mira grew a second potato. Saoirse's book is out. Sunny took a holiday and has not stopped talking about it.
~ Petra's car finally died, and she gave it a funeral. Astrid's CubeSat launched in April. Yuki holds the world record, by two frames. Vesper sings under her own name. Delphine's book is called "My Own Words". Noor is a judge's favourite barrister. Fern's bees won a ribbon. Wren hit episode one hundred and fifty. Tilly's badge is in a museum.
~ And they've all turned round, all at once, because you just walked in.
? Wave
 ~ Twenty-one people wave back. Somebody's crying. It's Ellie. It's also Rin. It's also, very discreetly, Mira.
? Say "same time next year?"
 ~ Twenty-one people, at once: "SAME TIME NEXT YEAR."
* Every thread. Every person. You, somehow, in the middle of it, still.
[sum Aftermath: a year later, at the twenty-first con, they all turned round at once when you walked in.]
`;
/* hook: every ending plays its aftermath just before the ending card */
for(const k of Object.keys(ENDINFO)){const e='end_'+k,a='after_'+k;if(SC[e]!==undefined&&SC[a]!==undefined&&!SC[e].includes('[scene '+a+']'))SC[e]=SC[e].replace('[end '+k+']','[scene '+a+']\n[end '+k+']')}

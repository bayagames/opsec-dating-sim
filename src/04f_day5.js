/* ============ DAY 5 · FRIDAY: home, framed, the offer ============ */
SC.d5_home=`
[bg lobby]
[hide]
~ Eight in the morning. Ellie's waiting by the revolving door in her coat and beret with no bags at all. She looks smaller without the bags.
ellie.n: Hi. You came. Okay. Train.
[bg station]
~ Central Station. The departures board clatters. The 08:22 to Linden Street.
if met('pia')
 ~ By the old piano, Pia is unpacking her violin. She sees you, sees Ellie's face, and doesn't play anything bright. She plays something slow and steady instead, like a hand on a shoulder.
 ellie.n: That's lovely. Who's that?
 > A friend. I think.
[bg train]
~ Ellie doesn't talk on the train. She holds a paper cup of station coffee and doesn't drink it, and watches the backs of houses go past.
~ Halfway, without looking away from the window, she reaches over and holds your hand. Just holds it. As if it's a railing.
[bg bakery]
~ Linden Street. Blue tape across the bakery's back door. A police car, half on the pavement. Mr Demir from the barber's, in his apron, arms folded, guarding the front like a bouncer.
~ Inside, Proof is wrong. Flour across the floor in a long white fan where a sack was slit. Every drawer pulled out. The shelf behind the counter, where Ellie kept her laptop and her grandmother's recipe tin, emptied onto the tiles.
~ The tin is on its side. Ellie picks it up first, before anything else, and opens it, and breathes out.
ellie.d: They're all here. Halmeoni's recipes. All of them. They didn't want them.
ellie.n: My grandma's. Halmeoni. She had a bakery in Busan for forty years. That's where the cinnamon knot's from. It's not a cinnamon knot, actually, it's a "kkwabaegi", but nobody here can say it, so.
* You've eaten four hundred and twelve of them and you never once asked where they came from.
"Police officer": Ms Park? Sorry. Just to confirm, the only thing missing is the laptop? Not the till, not the cash?
ellie.n: Just the laptop.
"Police officer": Odd. Kids usually go for the till. You'd be amazed what people steal, though. We'll be in touch.
~ He leaves a card. The card has a reference number on it and nothing else.
? "It wasn't kids. They wanted the forwarding rule off that laptop."
 [fx ellie:3 skill:2]
 ellie.a: I know. I know it wasn't kids. Kids would've taken the coffee machine. Everyone wants that coffee machine.
? Start sweeping up the flour
 [fx ellie:6]
 ~ You find the broom in its cupboard where it's always been. You sweep. After a minute, Ellie finds the mop.
 * It's the most useful thing you've done all week.
~ Ellie stands in the middle of her bakery with flour on her boots and her grandmother's tin in her arms.
ellie.n: I'll put the kettle on. The kettle's fine. They didn't care about the kettle.
* Your phone buzzes. Linda.
sms Linda: Sorry to bother you on your week off. Need to ask something. Not a printer thing. Claims has been denying people based on something called "LifeScore" and I don't like what I'm seeing. Are you in town? Can you come in? I'll let you in the back.
[clue linda_call]
[flag office_open]
[sum You went home with Ellie. Proof had been ransacked, and only her old laptop was gone. Her grandmother's recipe tin was safe. Then Linda asked you to come into the office: Brindle has been denying claims using "LifeScore".]
`;
SC.d5_framed=`
[hide]
~ Afternoon. It starts with one buzz. Then twenty. Then your phone doesn't stop.
[bg void]
wh1sper: WH1SPER HERE. YOU WANTED TO KNOW WHO WHISPER IS.
wh1sper: HERE: {H}. ROOM 1337, THE HALCYON. IT HELPDESK, BRINDLE & CO INSURANCE. LIVES ABOVE A BAKERY.
wh1sper: HERE IS {H} ON THE ROOF WHERE THE SNIFFER WAS. HERE IS {H} AT THE NETWORK CLOSET THE DAY THE CON WENT DOWN.
[hide]
~ There's a photo. You, at the door of MDF-1, yesterday, from a camera in the ceiling. A map of your week: where you stood, who you stood next to, minute by minute.
* Nobody could know where you stood, minute by minute. Except something listening to every badge in the building.
[clue framepost]
[fx exp:25 foot:8]
if f('informant')
 * Krall promised you'd be on the right list. You are. It's this one.
 if f('informant_real')
  * You gave him three days of names. He gave you this. Of course he did. People who build machines to find sources don't keep sources. They spend them.
 else
  * You fed him nothing for three days. He noticed. This is what noticing looks like.
if f('lantern_dump')
 * The map in WH1SPER's post is LANTERN-01's map. The same one you copied on Thursday night. Badge 1337-0001, the first dot, the decoy. They didn't need to frame you. They'd been drawing you all week.
~ Lumen's official account reposts it within four minutes: "We're aware of reports identifying the individual known as WHISPER. Lumen is cooperating fully with venue security. Install SafeSphere: Shield Mode keeps you safe."
~ Then the con channels. Then your forum. Then a message from an account you don't know, with your mother's maiden name in it and nothing else.
if met('priya')
 sms Priya: Don't reply to anything. Don't post. Turn location off. If you're at home, stay off the con network entirely. I'm already working on proving it's fake.
if met('saoirse')
 sms Saoirse: Don't make a statement. Statements get quoted. Let me find who made this. Their mistakes are in the photo.
if met('mira')
 whisper: THAT WASN'T ME. YOU KNOW THAT WASN'T ME. I'M SORRY. THEY'RE WEARING MY FACE TO HURT YOU NOW.
sms Marge: Lumen security have asked for your badge to be deactivated. I've told them no, for now. Lie low until I can stop it. And don't you dare quit on me.
~ Ellie's watching you read. She's read it too, on her own phone. Of course she has. It's everywhere.
ellie.d: They put Linden Street in it. "Lives above a bakery." They put my bakery in it.
ellie.n: {h}. Listen to me. We could just... stay. Here. Close the shop for a week. Let them have their con, and their keynote, and their stupid shield. They'd forget about us.
ellie.b: You don't owe anyone this. You're not a superhero. You're a man who fixed my Instagram with a baguette.
* She means it. She's not testing you. She's offering you a door out, and it's a good door. A kettle, a bakery that smells of cinnamon, and her.
* And on the other side: Rin, who'd be standing alone on a stage. Packet_pam's daughter's school. Ten million phones. The black box in Sunny's rack.
? "Okay. Let's stay. Let's close the shop and let them have it."
 [flag went_home]
 [scene end_proof]
? "If we stay, they win. And they'll still know where the bakery is."
 [fx ellie:6 clout:2]
 ellie.d: ...I know. I know. I just wanted to say it out loud, so I'd know I'd said it.
 ellie.a: Okay. Then we go back. Both of us. They don't get to put my bakery in a post and win.
 [flag ellie_fights]
? "I have to go back. But you don't have to come. Stay safe here."
 [fx ellie:3 skill:1]
 ellie.a: Safe here? They were in here last night. Here isn't safe. Here is just closer to the ovens.
 ellie.n: I'm coming. Don't argue. You'll lose. I've been arguing with ovens since I was nine.
 [flag ellie_fights]
~ Mr Demir lends you a hat and a scarf "for disguise purposes" and walks you both to the station himself, like a bodyguard in a barber's apron.
[bg train]
~ On the train back, Ellie puts her badge in her coat pocket, wrapped in a crisp packet. The blue light still glows faintly through the foil.
ellie.n: Did I do that right? Foil?
> You did that exactly right.
[bg plaza]
[sum Afternoon: WH1SPER named you as WHISPER, with a minute-by-minute map of your week that only the badges could have made. Lumen reposted it in four minutes. Ellie offered you a way out. You went back to the con together.]
`;
SC.end_proof=`
[hide]
~ You stay.
~ That evening you board up the back door with Mr Demir. You fix the till's broken drawer. You turn your phone off, all the way off, and put it in the bread bin, which Ellie insists is "basically a Faraday cage, it's metal".
~ The next morning, at four, you're in the bakehouse with her, folding dough you don't understand into shapes she does.
~ On Sunday afternoon, at four o'clock, you're icing buns. You don't watch the keynote. You find out afterwards, like everyone else, from a news alert.
[end proof]
`;
SC.d5_offer=`
[bg grill]
[hide]
~ The Grill, on the hotel's ground floor. Dark leather, low brass lamps, an open kitchen with flames in it. A booth at the back has been cleared for you.
~ The invitation came an hour after you got back: a card under your door, heavy paper, embossed shield. "Dinner. 7 PM. The Grill. Let's talk about your future. —V.H."
* Everyone you trust told you not to come. You came anyway, because you want to see his face when he says it.
~ Victor Hale is already sitting. Delphine is beside him, a tablet face down on the table. In the shadows by the kitchen door, standing, not eating: Silas Krall.
victor.h: {h}. Sit. Please. Order anything. The steak is excellent. The steak is always excellent.
? Sit. Order the steak.
 [fx clout:2]
 ~ You order the steak. If you're going to be bought, you might as well find out what it tastes like.
? Sit. Order nothing.
 [fx skill:2]
 victor.s: Disciplined. I respect discipline. Delphine, he's disciplined.
 delphine.n: I noticed.
victor.n: Let me be direct. You've had a difficult afternoon. Somebody said terrible things about you online. I don't believe a word of it. Nobody at Lumen does.
victor.n: But the internet does. The con does. Marge can't protect you much longer. And this sort of thing follows a person. Jobs. Flats. Banks. You'd be amazed what a bank finds out.
* Banks. Insurers. LifeScore. He's not threatening you. He's describing his product.
victor.h: So. An offer. Lumen is launching something very big on Sunday. We need people who understand this community. Who speak its language. Head of Community. A real salary. A real title. Your name cleared by morning: WH1SPER will "retract", the posts will vanish, and we'll put out a lovely statement about cyber-bullying.
victor.n: All you need to do is stop. Stop helping Marge's little project. Hand over what Rin Takahashi gave you, so we can "review" it. And stand next to me on Sunday and smile.
delphine.n: It's a generous offer. I wrote the statement already. It's very moving.
* She says it flatly. She doesn't look at you. She looks at her own hands on the table.
victor.s: And if you'd rather not, then on Sunday the con finds out a great deal more about WHISPER. About you. About the bakery. About the baker.
? "Deal. Head of Community."
 [flag took_offer]
 [fx clout:12 skill:-6]
 victor.h: Wonderful. Delphine, the paperwork.
 ~ Delphine slides a tablet across. Her finger shows you where to sign. Her hand is very steady. Her face isn't.
 delphine.n: ...Welcome to Lumen.
 * It's a lot of money. It's a lot of money. You keep saying it to yourself, because the other thing you could say to yourself is quieter and worse.
? Pretend to take it. "I'll think about it. Give me till Sunday."
 [flag fake_accept]
 [fx skill:3]
 victor.s: Till Sunday. A negotiator. Fine. Sunday morning, then. Delphine will expect your call.
 ~ Krall, by the kitchen door, looks at you the way you'd look at a lock you know you'll be picking later.
? "No."
 [flag refused_offer]
 [fx clout:4 skill:2]
 victor.a: ...That's a shame. That's a real shame. Silas, see our guest out.
 ~ Krall walks you to the door of the Grill. He doesn't touch you. He doesn't need to.
 krall.n: You've got a nice handwriting, {h}. On the badge. Very clear. Easy to read from a distance.
 * You've never heard a compliment that felt like a hand on your neck.
~ On your way out, Delphine catches up with you in the corridor for exactly four seconds.
delphine.n: The statement I wrote. About cyber-bullying. I wrote it on Tuesday. Before you were "identified".
~ Then she's gone, heels on marble, back towards the Grill, phone up.
* Tuesday. Three days before you were framed. They had the apology ready before they'd done the thing they'd be apologising for.
[flag delphine_tip]
[sum Victor Hale offered you a job: Head of Community, your name cleared, if you stopped helping Marge and stood beside him on Sunday. Otherwise, the con would find out more about you, and the bakery. Delphine whispered that the apology was written on Tuesday, before you were framed.]
`;
/* the night before Friday: you can't be everywhere */
SC.sleep4=`
[bg hotel]
[hide]
~ Room 1337, late. The plastic plant on the windowsill. The Lumen logo turning across the lane.
* Three days left. Friday, Saturday, Sunday. You count the hours you've got, and then you count the people, and the numbers don't fit.
if ROM.filter(g=>scn(g)>=2).length
 * {=ROM.filter(g=>scn(g)>=2).map(g=>CH[g].name).join(', ')}. The people you've got close to. The ones who'd notice if you weren't there.
 * You can't be everywhere. You're starting to understand that every hour you spend is a kind of promise. The ones you've already started making are the ones to keep.
else
 * You've met a lot of people this week. You haven't let many of them close. There isn't much time left to change that.
~ You fall asleep before you decide anything. Your phone, face down on the bedside table, stays quiet.
`;
SC.sleep5=`
[bg hotel]
[hide]
~ Room 1337. Friday night. Your name's been everywhere today, and none of it was true.
* Tomorrow is the CTF final. Tomorrow night is the last night before the keynote. Whatever you're going to do, whoever you're going to do it with, tomorrow is when it gets decided.
if romCount()
 * And there's someone you'd like to spend the very last part of tomorrow with. You already know who.
`;

/* ============ LEADS: investigations that take part of a day ============ */
SC.lead_trace=`
[bg hotel]
~ Your laptop, on the desk in Room 1337, on your phone's hotspot, not the hotel's Wi-Fi. The address from Ellie's forwarding rule on a sticky note: relay-77@lgp-mail.net.
* Who owns lgp-mail.net? Every domain on the internet is registered to someone. Usually through an agent, so the owner's hidden. But agents leave fingerprints.
[game pipe n=2 only=11,8 title="Tracing a domain"]
~ The public registration records: lgp-mail.net, registered fourteen months ago through an agent called NetShield Registrations. Same day, same agent, same name servers: lumen-cdn.io. The server SafeSphere talks to.
* Same agent. Same day. Same servers. The mail address that stole Ellie's codes and the app that tracks ten million phones sleep in the same bed.
[clue lgpdomain]
[fx skill:6]
`;
SC.lead_roofdoor=`
[bg stairwell]
~ The fire stairs on the 13th floor, after dark. The door at the top says ROOF · STAFF ONLY. You go up slowly, like Nyx would: like you're lost.
[call riskRoll(1)]
~ Under the door frame, taped into the corner where nobody looks: a small black box with blinking lights and a stubby antenna. A Wi-Fi sniffer: a little computer listening to every wireless network in range.
~ A strip of tape on it reads "W". Caught in the tape: one long silver hair.
[clue sniffer]
* You photograph it. You don't touch it. Whoever left it here wanted to hear everything on this floor. Including you.
`;
SC.lead_vods=`
[bg creator]
~ Creator Corner keeps an archive of every stream from the week on a screen by the door, for anyone to browse. Hours and hours of hoodies talking at cameras.
* WHISPER took over the bar on Monday night. Someone, somewhere, was streaming nearby. Look at backgrounds. Nobody looks at backgrounds.
[game pipe n=2 only=1,3 title="Searching the archive"]
~ Monday, 21:52. CyberJuno, streaming from the Promenade. Behind her shoulder, blurred: a woman with long silver hair, kneeling at the router cupboard in the stairwell, unplugging something. One person in chat typed "who's the ghost?". Nobody answered.
[clue vod]
`;
SC.lead_dmtrace=`
[bg soc]
~ The Blue Team SOC has loaner kit and a volunteer who loves nothing more than being asked how to trace something.
"Volunteer": A DM? Through an anonymiser? You won't get the sender. But you'll get the envelope. When it left the building, and through which access point.
[game pipe n=2 only=3,7 title="Tracing the envelope"]
~ 00:04, Tuesday. One device on the hotel network connected to an anonymising service at that minute. On one access point: HALCYON-F13-ROOF.
[clue dmtrace]
* The top floor. By the roof. Thirty metres from your bed.
`;
SC.lead_doxcompare=`
[bg press]
~ The press room has a big table and nobody who'll ask what you're doing. You lay the two posts side by side on your laptop: WHISPER's on Monday and Wednesday, and WH1SPER's.
* Saoirse said it: two different people. Prove it.
~ WHISPER: public posts only. No addresses. Never a private person after Dave. Capitals, but careful grammar.
~ WH1SPER: a home address, a door, a child's school. And a timeline: packet_pam's movements on Tuesday, minute by minute. Where she had coffee. When she went home. When she left again.
[game spot keys=onboard title="What's in the dox"]
~ Minute by minute. Not from her posts: she hadn't posted all day. From her phone's location. Only something on her phone, collecting location every sixty seconds, could know that.
[clue locdata]
* packet_pam works on privacy tools. Of course she'd installed SafeSphere, to study it. And it studied her back.
`;
SC.lead_watch1313=`
[bg corridor]
~ The 13th floor's refurbishment wing. A sign: CLOSED · NO GUEST ACCESS. Fresh carpet, no dust sheets. You walk it like someone looking for the ice machine.
[call riskRoll(2)]
~ Outside 1313: a little white box on the ceiling with a green light. Not the hotel's. A private access point. Through the door: fans, like a server room. And a man's voice on the phone, calm: "...WH1SPER's next post goes at four. Make sure it's the room number."
[clue r1313]
* Krall's voice. You'd know it anywhere now. Like a hand on the back of your neck.
`;
SC.lead_kiosk=`
[bg station]
~ The kiosk by the ticket barriers. Newspapers, crisps, phone chargers, and prepaid phones in plastic boxes behind the counter.
"Kiosk owner": Burners? Sure, sell loads. Cash only, no questions, that's the deal.
? Show him a photo of Krall from the con's website
 [fx skill:2]
 "Kiosk owner": Him. Monday afternoon. Six of them, cash. Counted his change twice, like I'd rob him. Tipped me nothing. I remember the ones who tip nothing.
 [clue burner]
? Ask if anyone bought a lot on Monday
 [fx skill:1]
 "Kiosk owner": Big bloke, grey coat, scar on his face. Six phones. Cash. Weird, because he had a very nice watch. People with nice watches don't buy burners. Unless they do.
 [clue burner]
if f('saw_krall_kiosk')
 * You saw him. On Monday. On your way to the train. You didn't know what you were looking at.
`;
SC.lead_decompile=`
[bg hotel]
~ The Lumen booth was handing out SafeSphere 2 "beta" codes on little cards. You took one. On a spare old phone, in airplane mode, in Room 1337, you install it, pull the installer off and take it apart like Rin showed you.
[game spot keys=graph,onboard title="SafeSphere 2 beta"]
~ It's all there. For every contact in your phone, the app sends a request to "Lumen Data Exchange" and gets back an enriched profile: address, job, estimated income, "relationship strength". Then it scores them. People who've never installed anything, scored.
[clue graphcode]
[fx skill:8]
`;
SC.lead_loungepapers=`
[bg lumenlounge]
~ The Lumen Lounge in the late afternoon: half the staff on a break, a folder left on the end of the bar like a coaster.
[call riskRoll(2)]
~ "CLOSING KEYNOTE · RUN-SHEET · CONFIDENTIAL". 4:00 welcome. 4:06 "the room's own graph". 4:10 LANTERN reveal. And at the bottom, in handwriting: "Then we sign. 1313. Ashgrove has the pen."
[clue runsheet]
* You photograph it in four seconds and leave it exactly where it was.
`;
SC.lead_badgedump=`
[bg badgelab]
~ The Badge Lab's programmer is free. A volunteer shows you how to clip it onto the pins on the back of your badge and read out everything on its chip.
[game pipe n=2 only=10,4 title="Dumping the badge"]
~ The firmware's fingerprint doesn't match the one Tilly published on the con website before the week started. Not even close. Different file. Signed with a different key.
[clue fwhash]
`;
SC.lead_radioscan=`
[bg aero]
~ The Aerospace Village lends you a software-defined radio: a USB stick with an antenna, cheaper than a pizza. A volunteer shows you the waterfall: the radio spectrum, live, colour scrolling down the screen.
~ One band is crowded with tiny bright pulses. Every two seconds, thousands of them. The badges.
[game pipe n=2 only=11,7 title="Listening to the badges"]
~ Decoded: each badge broadcasts its own ID, and then a list of every other badge ID it can hear nearby, with how loud each one is. Loud means close.
[clue beacons]
* A list of who's standing next to whom, broadcast every two seconds by four thousand necks.
`;
SC.lead_mdf=`
[bg mdf]
~ The network closet behind Hall A. Staff only. You walk in behind a catering trolley like Nyx taught you.
[call riskRoll(2)]
~ LANTERN-01, between Sunny's switches. You follow its second cable with your phone torch: up through a hole in the ceiling tiles, along a tray, and into a little grey box that isn't on any of Sunny's diagrams. A 4G modem. A way out that doesn't go through the con's network at all.
~ On its screen, a log: an upload every hour, on the hour, to lantern-ingest.lumen-cdn.io.
[clue uplink]
`;
SC.lead_owendesk=`
[bg conops]
~ Con Ops after hours. Dark, except the glow of a screensaver. Owen's desk is the tidy one with the photo of a golden retriever and a mug that says WORLD'S OKAYEST DEPUTY.
[call riskRoll(3)]
~ The top drawer: sponsor contracts. The sign-off log, with his signature on the badge firmware: "Designer consulted: NO." The bottom drawer: letters. County court judgements. A bailiff's notice. And a letter from "Lantern Consulting Ltd", on Lumen's own headed paper: "Further to our agreement, your outstanding liabilities of £80,412 have been settled in full."
[clue owensign owendebt]
* A man who was drowning, and someone threw him a rope. The rope had a hook in it.
`;
SC.lead_canary=`
[bg conops]
~ Owen's at his desk. You tell him, quietly, like a secret, that everyone's meeting in the hotel's Grand Ballroom at nine tonight to "go over Sunday". You tell nobody else. Not one other person.
owen.n: Oh! Right. Right, thank you for telling me. Very good. I'll... I won't be able to come. Busy. Very busy.
~ At 8:55 you're in the gallery above the ballroom with the lights off.
~ At 9:00 exactly, two men in navy blazers walk into the empty ballroom, look round, and one of them says into his radio: "Nobody here. Pryce said nine."
[clue leaktest]
* A canary trap. You tell one person one detail, and see whose detail comes back. It came back.
`;
SC.lead_bastionbooth=`
[bg vendor]
~ The Bastion Security booth in the Expo Hall: dark blue, a big green tick, glossy brochures. "SafeSphere: independently audited by Bastion." A salesman with very white teeth.
"Bastion salesman": Interested in an audit? We're the best in the business. Very thorough.
? "Can I have a copy of the SafeSphere audit?"
 [fx skill:2]
 ~ He gives you one, glossy, forty pages, delighted. You read it on a bench outside. "Contact handling meets industry standards." "Location is used responsibly."
 if met('rin')
  * Rin's draft said the opposite of every line. Same app. Same version.
  [clue auditcopy]
 else
  * It reads like a brochure. Every finding is "meets standards". Nothing is a number.
? "How long does an audit take?"
 [fx skill:3]
 "Bastion salesman": A proper one? Six to eight weeks. Two days would be a joke.
 * Rin said SafeSphere's was two days. For one point two million.
 if met('rin')
  [clue auditcopy]
`;
SC.lead_jet=`
[bg aero]
~ The Aerospace Village. Every plane shouts where it is twice a second: position, height, an ID. It's called ADS-B, and the radio on the table can hear all of it.
[game pipe n=2 only=11,1 title="Listening for a jet"]
~ A Gulfstream jet, registered through a trust to Corvid Holdings. Landed at the city airport's private terminal at 06:12 on Friday. Before that, four trips this year to an airfield next to a building with no name on it, which everyone in this village seems to know belongs to Halberd.
[clue jet]
`;
SC.lead_corvid=`
[bg library]
~ The hotel library's terminals, and the public company register. The most boring treasure map in the world.
[game pipe n=2 only=8,1 title="Following the filings"]
~ Corvid Holdings Ltd: incorporated two months ago, share capital one pound. Three directors. Every one of them also a director of Halberd Strategic Intelligence Ltd.
[clue corvid]
* A shell company. A one-pound box, with a spy firm inside it.
`;
SC.lead_register=`
[bg backoffice]
~ The hotel's back office. A desk, a printer, a whiteboard of room numbers, and a terminal left logged in, because hotel staff work twelve-hour shifts and never lock anything.
[call riskRoll(2)]
~ The 13th floor, closed wing. 1313: "Lumen Analytics · long stay · no housekeeping". 1314: "Mr J. Ashgrove · arrived Fri · account: Corvid Holdings · VIP · do not disturb".
[clue ashgrove]
`;
SC.lead_locker=`
[bg station]
~ Left luggage, down the ramp behind the ticket hall. Locker 44. The tune in Pia's song had numbers in it: two, zero, one, nine.
~ The door clunks open. A padded envelope. A USB drive in a sandwich bag. An old paperback with a train ticket in it.
~ The drive: LANTERN's first design documents, three years old, with Victor Hale's initials on every page. "Primary market: government and private intelligence. Source detection is the product."
~ The envelope: a note, folded once, in handwriting with a backwards J. "P. If you're reading this, you remembered the numbers. I'm alive. I'm all right. I can't come in until LANTERN is public. Keep playing. I can hear you on Thursdays. J."
[clue locker jonahnote]
if met('pia')
 * Pia. You have to tell Pia.
`;
SC.lead_archive=`
[bg press]
~ The press room has a terminal with The Ledger's archive on it, for visiting journalists. You search for Jonah Reyes.
~ A year ago: "LUMEN'S SECRET PROJECT: THE APP THAT MAPS WHO YOU KNOW", by Saoirse Quinn. Front page.
~ A week later: "CORRECTION AND APOLOGY". Page two. "Following a forensic report by Bastion Security... we accept that the documents were obtained unlawfully... we apologise unreservedly to Lumen Analytics."
~ The report is attached. You read it. Halfway down, a paragraph about "code exfiltration patterns" looks familiar. You search for the phrase. It's in a different Bastion report, about a different person, from four years before. Word for word.
[clue retraction pikereport]
`;
SC.lead_office=`
[bg office]
~ Brindle & Co, on a weekday you're supposed to be off. Linda lets you in the back, past the post room, and walks you to the claims server in her office like it's a crime scene.
linda.n: I didn't know who else to ask. I've had three claims this month denied by "LifeScore". I didn't know what LifeScore was. I don't think anyone in Claims does.
[call riskRoll(1)]
~ The contract, in a folder on the claims server: "LIFESCORE DATA SERVICES · Lumen Analytics Ltd · Brindle & Co Insurance". Premiums priced on "mobility and relationship insights". Source: "SafeSphere telemetry, opted-in users".
[clue lifescore]
~ And a claim. A widow, sixty-one. Her husband's life insurance, denied. The reason, in the system: "LifeScore risk flag: subject's device visited licensed premises (pub) 14 times in the 30 days before death." He'd been the pub's darts captain. He died of a heart condition he was born with.
[clue claim]
linda.d: Fourteen times. They counted. They counted a man going to darts.
linda.a: I'm sending this to the regulator. Today. With my name on it. Gary can explain the shield app to them himself.
[ach office]
`;
SC.lead_booking=`
[bg bar]
~ Bea's polishing the same glass she's been polishing all week. You ask, quietly, who booked the singer in the Lumen Lounge.
bea.n: Funny you should ask. Invoices for the Lounge come through the bar, because of the drinks. Hers doesn't say Lumen. It says Corvid Holdings. For the whole week. Paid in advance. And there's a line for "additional services" with no explanation.
[clue booking]
[flag heard_corvid]
bea.s: Singers don't usually come with additional services. Not ones I'd invoice, anyway.
`;
SC.lead_watchset=`
[bg lumenlounge]
~ The second set in the Lumen Lounge. You sit at the back, with a lemonade, and you don't watch Vesper. You watch how she watches.
~ She sings to the room. Every few bars her eyes stop on a face, the way a camera does, and move on. She stops on Krall twice. She stops on you four times. Once, between songs, her hand goes to her right ear. Under the red waves of hair: a skin-coloured earpiece, the kind newsreaders wear.
[clue earpiece]
* Singers don't need an earpiece in a room this size. People who are being told things do.
`;
SC.lead_roofrig=`
[bg plantdeck]
~ The hotel roof at night, behind the biggest air-con unit, where Mira sits. She isn't here tonight.
[call riskRoll(2)]
~ Tucked under a tarp, weighted with bricks: a laptop in a waterproof case, a big battery and a small dish antenna on a tripod, aimed out over the city at nothing you can see.
[clue rig]
* Not a sniffer. Not listening. This is built to talk. To something a long way away.
`;
SC.lead_goodnight=`
[bg plantdeck]
~ The rig under the tarp. The laptop's locked. But the case has a USB drive taped inside its lid, labelled in neat pencil: "IN CASE".
[call riskRoll(2)]
~ A script called goodnight.sh, and a key file. You read the script. It signs a SafeSphere update, version 9.9.9, with the key, and pushes it out through the dish to a ground station, and from there to every SafeSphere install on Earth.
~ The update's changelog, in the script's comments: "Switch off: contact upload. Switch off: location. Switch off: VPN copies. Delete: everything collected. Message to user: 'This app has been switched off by its original author. You shouldn't have trusted it.'"
[clue deadman]
* Ten million phones. One command. A kill switch.
`;
SC.solved_m2=`
[hide]
* Mira. The silver hair, the sniffer, the —M, the DM from the roof. WHISPER is the woman on the air-con unit.
* You don't tell anyone. Somebody's paying ten thousand credits for that name. You fold it up very small in your head and leave it there.
`;
SC.solved_m6=`
[hide]
* Owen Pryce. The firmware, the box in Sunny's rack, the debt, the 2 AM visits to 1313. The con's own deputy chair.
* You don't confront him. You don't tell him you know. A mole who doesn't know he's been found is the most useful thing you can have: on Saturday night, he can be told whatever you want Lumen to believe.
`;
SC.solved_m3=`
[hide]
* Silas Krall. WH1SPER is Lumen's own Head of Trust and Safety, running a fear campaign from a hotel suite to sell shields. With proof.
* If you can get that in front of the right person at the right moment, the whole thing turns inside out.
`;
/* ---- Dave: the intern who got doxxed ---- */
const DAVEOK=[()=>day()>=2,()=>day()>=4&&f('dave_helped')];
SC.dave0=`
[bg vendor]
~ Dave is hiding behind the sticker table in the Expo Hall, holding his phone at arm's length like it might bite. No sunglasses. He looks about nineteen without them.
dave.d: Bro. Help. Please. My bank called three times. I've had forty pizzas delivered I didn't order. All pineapple. Someone knows I hate pineapple. I don't know what's real any more. Everything in my inbox looks like a scam.
> That's actually the right instinct. Let's go through it together.
[game phish pool=0,2,7,11,14 title="Dave's inbox" who=dave noexp=1]
~ Then: new passwords, a password manager, two-factor on everything, and deleting four years of posts, including eleven photos of boarding passes.
dave.o: Eleven. I posted eleven boarding passes. Why did I do that?
> To feel like somebody.
dave.d: ...Yeah.
dave.n: Thanks, bro. Seriously. You didn't have to. I was the worst.
dave.n: I've still got access to the Lumen intern drive, you know. They never turned it off. Their security is, like, really bad. Which is funny. For a privacy company.
[flag dave_helped]
[ach dave]
[fx skill:4]
`;
SC.dave1=`
[bg vendor]
dave.a: Bro. BRO. I need to show you something. I didn't hack anything. It was just in my intern onboarding folder.
~ An internal Lumen slide deck. Slide 3: "Never say 'data'. Say 'insights'." Slide 14: "SafeSphere 2: monetise the relationship graph. Users won't read the update notes."
[clue intern]
dave.d: I made TikToks telling people this thing protects them. Ten million downloads. Some of those are because of me. Because of my dance.
? "Then help undo it. Tell people what you saw."
 [fx skill:2]
 dave.n: On stage? Me? I'd be... I'd actually be famous by Sunday.
 dave.h: Just, like, for the right reason.
? "Hand it to someone who'll know what's safe to use."
 [fx skill:3]
 dave.n: Yeah. Yeah, the scary blue-team lady. She's right about everything.
[flag dave_inside]
`;

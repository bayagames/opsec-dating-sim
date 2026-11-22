/* ============ ENDINGS ============ */
/* where everyone you got close to ends up: [after a good ending, after a bad one] */
const FATE={
 ellie:['Proof reopens on Tuesday with a new back door, a new laptop that has never been anywhere near a phishing email, and a sign in the window: "WE DO THINGS PROPERLY HERE."','Proof reopens on Tuesday. Ellie bakes. She keeps the laptop in a drawer now, and the drawer locked.'],
 nyx:['Nyx writes the best report of her career, about Lumen, for free, and sends it to everyone who ever hired her.','Nyx turns down three Lumen contracts in the following month, loudly, in public.'],
 ada:['Ada is offered four jobs before Monday. She takes none of them. She takes a week off, for the first time in her life, and sleeps.','Ada goes back to her lecture hall ceiling. She keeps the ESC keycap on her laptop. She knows she isn\'t a fraud now, whatever else happened.'],
 priya:['Priya gets a thank-you letter from the regulator. She frames it. It\'s the only thing on her wall.','Priya files the disclosure anyway. Slow, proper, with receipts. It will matter later. These things always matter later.'],
 juno:['CyberJuno\'s stream of the keynote is watched three million times. She posts one video afterwards: her, no ring light, saying thank you.','Juno loses her Lumen sponsorship and gains forty thousand followers who were waiting for her to say something true.'],
 kit:['Kit wins best craftsmanship at next year\'s con, in armour with a little blue light in the chest that she says is "a reminder".','Kit strips the metadata from every photo she ever posts, forever, and teaches a workshop on it.'],
 rin:['Rin quits Bastion on Monday morning by email, with Graham Pike\'s invoice attached and the regulator in CC.','Rin is released without charge on Monday. He walks out of the police station in a lilac hoodie and doesn\'t look back.'],
 bea:['Bea is offered her job back by the hotel, with an apology. She says no. Her first exhibition opens in March: "Last Orders", forty portraits drawn on bar napkins.','Bea keeps pouring. She keeps drawing. Somewhere there\'s a napkin with your face on it.'],
 mira:['WHISPER never posts again. In the spring, a new privacy app appears, free, open source, with no shield icon at all. Its author is anonymous. Its code is perfect.','Mira disappears. The roof is empty on Monday night. A folded beer mat on the air-con unit says "SLOWLY, THEN".'],
 saoirse:['Saoirse\'s series on Lumen runs for six weeks. The last part is a correction, to her own paper, from a year ago, about Jonah Reyes.','Saoirse keeps digging. She has a notebook now, waterproof, full of things she can prove.'],
 sunny:['Sunny sleeps for nineteen hours. Then she builds next year\'s network with no sponsor equipment in it whatsoever.','Sunny pulls LANTERN-01 out of her rack with her own hands, contract or no contract, and puts it in a bin with a label: "NOT MINE".'],
 tilly:['Tilly\'s rainbow comes back. Four thousand badges, updated over the air at midnight, signed with her own key.','Tilly makes next year\'s badge with no radio in it at all. It just has a rainbow.'],
 petra:['Petra gives a talk next year: "Your Car Is Snitching". It\'s the most attended talk of the con.','Petra drives out of the car park with the windows down and the one working speaker on full.'],
 astrid:['Astrid gets a letter from the space agency that let her go. They\'d like to talk. She tells them she\'ll think about it, and goes up onto the roof to listen to the sky instead.','Astrid keeps listening. Satellites, planes, the city. The honest things that say what they are.'],
 yuki:['Yuki breaks the world record a month later. On stream, she thanks "my player two".','Yuki goes back to the arcade. Nine minutes forty. Still two seconds off. She\'ll get it.'],
 vesper:['Vesper Lane is booked for a residency at a jazz bar nobody important goes to. She has never been happier.','Vesper disappears from the Lumen Lounge without a forwarding address. Halberd, it turns out, has lost an asset.'],
 delphine:['Delphine Vos resigns on Monday. Her resignation letter is the best thing she\'s ever written, and it\'s entirely in her own words.','Delphine stays at Lumen for exactly two more weeks. Then she leaves quietly and starts writing a book.'],
 noor:['Noor wins the case. Not this year: the year after. Lumen settles for an amount with nine zeroes.','Noor files anyway. The law is slow. So is erosion. Both get there.'],
 fern:['Fern\'s bees make their best honey in years. She sends you a jar with a label: "FROM THE ROOF. NOBODY ELSE KNOWS."','Fern keeps the garden. She notices everything. She has a list now, of who comes and goes.'],
 wren:['Wren\'s podcast episode on Suite 1313 gets a hundred thousand listeners. Her sister the solicitor is very proud and slightly worried.','Wren\'s podcast gets a new episode: "The Thirteenth Floor". It has forty-four listeners now. All very invested.'],
 pia:['Pia plays at Central Station every day. On Thursdays, a thin man with a beard brings her coffee and requests, every time, "that one".','Pia keeps playing at Central Station. She still won\'t play that one. Not yet.']
};
/* one paragraph for the person whose story ended with you */
const ROMEPI={
 ellie:'Later, much later, Ellie finds you on the terrace with two cinnamon knots in a paper bag with a tiny croissant drawn on it. "I worked it out," she says. "Why I kept drawing them. It was so you\'d keep the bags." You tell her you kept every one. She already knew.',
 nyx:'Nyx finds you by the fire exit, where she always is. "I don\'t do this," she says, and takes your hand anyway, like picking a lock she already knows the combination to.',
 ada:'Ada finds you and says, very fast, all in one breath, "I calculated it and the probability that I\'m in love with you is one, which is a weird number for a probability, it means certain." Then she has to sit down.',
 priya:'Priya hands you her phone. It\'s off. "That\'s for you," she says. "An hour. Then I\'m turning it back on. Probably." It\'s still off at midnight.',
 juno:'Juno finds you away from every camera in the building. "Juno\'s not my name," she says. "You know that. Say the real one." You do. She closes her eyes like she\'s hearing a song.',
 kit:'Kit arrives in full armour, then takes the helmet off in the middle of the dance floor, in front of everyone, which for Kit is louder than shouting. "Hi," she says. "It\'s me. Just me."',
 rin:'Rin offers you the last gummy worm. Then he takes it back, bites it in half, and gives you half. "That\'s how you know it\'s serious," he says. "I don\'t share worms."',
 bea:'Bea\'s off shift. She\'s never off shift. She\'s sitting at the end of the bar on the wrong side of it, a sketchbook in her lap, drawing you while you walk towards her.',
 mira:'Mira doesn\'t come to the party. You knew she wouldn\'t. When you go up to the roof at one in the morning, she\'s there, and for once there\'s no laptop at all.',
 saoirse:'Saoirse files her last story at 11:58 PM and closes the laptop. "Off the record," she says, and kisses you. "Don\'t print that."',
 sunny:'Sunny turns her radio off. Actually off. The NOC can manage for one hour. She falls asleep on your shoulder in the middle of the dance floor, and nobody dares wake her.',
 tilly:'Tilly presses something into your hand: a badge. Not blue. A tiny rainbow running round its edge, and on the back, in her tiny writing, "for {h}, who read the back".',
 petra:'Petra drives you to the top of the car park in a car held together with love and cable ties. Engine off. City lights. "I practised this," she says. "Out loud. To the car." She says it anyway.',
 astrid:'Astrid takes you up to the con roof. "There\'s a satellite going over at 23:51," she says. "I\'ve asked it to take our picture." It doesn\'t. You don\'t mind.',
 yuki:'Yuki hands you player two\'s controller. "First to three," she says. She lets you win. She will deny this forever.',
 vesper:'Vesper sings one more song, very quietly, to the empty bar after the party. There\'s no earpiece. There\'s no one listening but you.',
 delphine:'Delphine takes her hair down and leaves the Lumen lanyard on the bar. "I\'ve never once said anything I meant at one of these," she says. Then she says something she means.',
 noor:'Noor caps her fountain pen and puts it away. "No more paperwork tonight," she says. "Just this." She means you.',
 fern:'Fern takes you out into the garden, among the little lights, and shows you where the purple beans are going to go. Then she stops showing you things and just stands there with you.',
 wren:'Wren dives into the pool fully clothed. Then she looks up at you from the water. "Lifeguard\'s off duty," she says. "You\'re on your own." You jump in.',
 pia:'Pia plays you "that one". The song she never plays for money. It\'s short, and a bit sad, and when it\'s finished she puts the violin down and holds your hand.'
};
function epilogueCast(good){const r=[];const ppl=ROM.filter(g=>met(g)&&scn(g)>=2&&g!==S.partner);for(const g of ppl)r.push(N(FATE[g][good?0:1]));if(f('dave_helped'))r.push(N(good?'Dave deletes the SafeSphere TikTok account live on stream. Two million people watch. His mum calls him "David" again, but nicely.':'Dave quits Lumen on Monday. He doesn\'t post about it. That\'s how you know he means it.'));return r}
function romanceEpi(){if(!S.partner)return[N(pick(['You don\'t end up with anyone tonight. That\'s all right. You did something that mattered with people who mattered.','At two in the morning you\'re on the hotel steps on your own, with a cold cinnamon knot and a strange, quiet feeling that might be pride.']))];
 return SC['epi_'+S.partner]!==undefined?scr('epi_'+S.partner):[N(ROMEPI[S.partner])]}
SC.end_disclosure=`
[hide]
~ It's on every front page by midnight. Not as WHISPER's stunt, or as a rumour, or as a leak. As a disclosure: careful, dated, verified, handed to the regulator a day before anyone said a word in public.
~ SafeSphere 2 doesn't launch on Monday. On Tuesday, the regulator opens an investigation into Lumen Analytics. On Wednesday, Victor Hale "steps back to focus on his family". On Thursday, SafeSphere is pulled from both app stores.
~ The slow way. The boring way. It worked.
[call epilogueCast(1)]
[call romanceEpi()]
~ Marge finds you at the end of the night and hands you a lanyard. Not attendee red. Volunteer yellow.
marge.h: Next year. You're on the crew. Don't argue. You'll lose.
[end disclosure]
`;
SC.end_half=`
[hide]
~ It's on the news by midnight, but it's messier than it should have been. Half the room saw the evidence. Half saw a con chair interrupting a sponsor. Lumen's statement is out by eleven: "deeply irresponsible", "taken out of context", "we welcome scrutiny".
~ SafeSphere 2 is "paused for further review" on Monday. Not cancelled. Paused. Lumen's share price drops, and recovers half of it by Friday.
* It's not nothing. It's a dent. Dents become cracks if you keep hitting them.
[call epilogueCast(1)]
[call romanceEpi()]
~ On the way out, Rin finds you, or texts you, or both. "Same time next year," he writes. "We'll bring more."
[end half]
`;
SC.end_frontpage=`
[hide]
~ "LUMEN'S LANTERN". Saoirse's byline. Every front page on Monday, and the ones that weren't first are furious about it.
~ The story doesn't need the keynote. The keynote just made it a show. By the time Victor walked off, the story had been read four million times, and three lawyers' worth of fact-checking meant there wasn't a single thing in it Lumen could deny.
~ Halberd's statement is one line long and says they have "no current relationship" with Lumen Analytics. Corvid Holdings dissolves itself on Wednesday.
[call epilogueCast(1)]
[call romanceEpi()]
~ Saoirse sends you a photo at 2 AM: the front page, and her notebook, open, with one line in it in big letters. "SOURCE: PROTECTED."
[end frontpage]
`;
SC.end_injunction=`
[hide]
~ The judge's order is four pages long and very grumpy. No launch. No transfer. No "demonstration" of any data collected from the attendees of CTRL+ALT+CON, pending a full hearing.
~ At the full hearing, three months later, Delphine Vos gives evidence for six hours. Noor doesn't lose a single point.
~ LANTERN never ships. It just stops, in a courtroom, in daylight, the way things are supposed to stop.
[call epilogueCast(1)]
[call romanceEpi()]
~ Noor sends you a photo of the judgment's last page. Her signature, in fountain pen ink, slightly smudged where she pressed too hard.
[end injunction]
`;
SC.end_killswitch=`
[hide]
~ Ten million phones go quiet at 4:15 PM on a Sunday.
~ Every SafeSphere install switches itself off. No contacts uploaded. No location. No copies of anything. LANTERN's graph freezes mid-turn on the screen in Hall A, and never moves again.
~ It's the biggest unauthorised software update in history. The news calls it vigilantism, then heroism, then vigilantism again. Lumen's servers fall silent. Halberd walks away from a product that no longer exists.
~ And somewhere a lawyer starts building a case against whoever did it. Because nobody asked ten million people. Mira was right about that part.
[call epilogueCast(1)]
[call romanceEpi()]
~ The roof is empty that night. A folded beer mat is weighted down by a stone on the air-con unit. "IT WORKED. I'M SORRY. BOTH THINGS."
[end killswitch]
`;
SC.end_ghost=`
[hide]
~ The update goes out at 4:15. Ten million phones go quiet. By 4:30 you're in the back of Petra's car, or a taxi, or a train, it doesn't matter which, with Mira's hand in yours and both your phones in a crisp packet at the bottom of a canal.
~ Somewhere north there's a cottage with no Wi-Fi, no signal and no neighbours. The kettle's ancient. The view is enormous.
mira.b: My name's {=S.f.miraname||'...'}. You know that. I just wanted to hear myself say it somewhere nobody's listening.
~ The news finds out who sent the update, eventually. It never finds out where you went.
[call epilogueCast(1)]
[end ghost]
`;
SC.end_double=`
[hide]
~ On Monday morning you have a new email address, a Halberd lanyard, and an office in a building that doesn't have a name on the door.
~ Vesper is at the next desk. She smiles at everyone. She smiles at you too, but differently.
~ Lumen collapses without you. LANTERN is dead. Halberd has lost its prize, and gained two new analysts with excellent references and an interest in its files.
vesper.s: Slowly, darling. Beautifully. For years.
~ Nobody knows you're there. That's the whole point.
[call epilogueCast(1)]
[end double]
`;
SC.end_whistle=`
[hide]
~ "I wrote every word Victor has said this week." The clip of Delphine Vos on stage is the most-watched video in the country by midnight.
~ She reads WH1SPER's posts aloud from Lumen's own Trust and Safety folder, with the dates they were written, days before they went up. She reads the cyber-bullying statement she wrote on Tuesday. She reads the sales deck. She doesn't raise her voice once.
~ Victor Hale is arrested on Tuesday. Silas Krall on Wednesday. LANTERN is evidence now, in a sealed box in a police station.
[call epilogueCast(1)]
[call romanceEpi()]
~ Delphine sends you one message, late. "My own words. Finally. Thank you for standing next to me."
[end whistle]
`;
SC.end_found=`
[hide]
~ Jonah Reyes walks off the stage and into his sister's arms, in the wings, while two thousand people are still on their feet.
~ His documents prove what Rin proved, a year earlier, with Victor's signature on every page. Graham Pike's forensic report is withdrawn by Tuesday. Bastion loses its accreditation by Friday. The Ledger prints a correction to a story it got wrong a year ago, under Saoirse's name.
~ LANTERN doesn't survive a single week of daylight.
[call epilogueCast(1)]
[call romanceEpi()]
~ On Thursday, at Central Station, Pia plays a song she has never played for money. Jonah stands next to her and doesn't say anything at all.
[end found]
`;
SC.end_signal=`
[hide]
~ They cut the microphones. They couldn't cut the sky.
~ Astrid's broadcast goes up from the con roof, through a satellite, to a ground station, to everywhere. Rin's voice, the evidence, the receipts, out over every amateur frequency in Europe and then onto every feed in the world while Victor was still talking to a room that couldn't hear anyone else.
~ By the time Owen Pryce realised what had happened, three hundred thousand people had heard it. LANTERN dies of exposure, which is the kind of irony WHISPER would appreciate.
[call epilogueCast(1)]
[call romanceEpi()]
~ Astrid sends you a picture at midnight: a weather satellite image of the city, grey and white swirls, and somewhere in it, too small to see, you.
[end signal]
`;
SC.end_blackout=`
[hide]
~ Four thousand people in the dark. And in the dark, LANTERN's uplink, LANTERN-01, the demo, the signing, all of it, gone.
~ Halberd's man leaves by the fire stairs with a torch. Without a working proof of concept, there's nothing to sign.
~ But the evidence went dark too. Nobody saw the code. Nobody heard Rin. On Monday, Lumen calls it "sabotage by extremists" and nobody can prove them wrong, yet.
* It stopped the sale. It didn't stop the lie.
[call epilogueCast(0)]
[call romanceEpi()]
~ Sunny finds you at the end of the night, in the dark, by the light of four thousand blue badges. "I'd do it again," she says. "I'd also like a very long nap."
[end blackout]
`;
SC.end_graph=`
[hide]
~ LANTERN ships on Monday. Ten million phones update overnight. Nobody reads the update notes.
~ The signing goes ahead in Suite 1313. Four hundred million pounds. Halberd gets its proof of concept: the con's own graph, every line, every meeting, including the one in Room 1337 on Thursday night.
~ In six months, a journalist in another country is arrested after a meeting in a café. In nine months, a regulator's whistleblower is identified "through routine analysis". Nobody can prove it was LANTERN. Everybody knows.
[call epilogueCast(0)]
[call romanceEpi()]
* You tried. That has to count for something. It doesn't feel like it does.
[end graph]
`;
SC.end_scapegoat=`
[hide]
~ They keep you for nine hours. Nobody charges you with anything. They don't need to.
~ By the time you walk out of the police station, the keynote's over. LANTERN launched to a standing ovation. WHISPER, the internet has decided, is you: a helpdesk worker from an insurance company who lives above a bakery. Brindle & Co "parts ways" with you by email on Monday morning.
~ They needed a monster. You were standing closest to the door.
[call epilogueCast(0)]
if S.partner
 ~ {=CH[S.partner].name} is waiting outside the police station when you come out. They don't say anything. They don't need to. They take your hand, and you walk to the station together.
[end scapegoat]
`;
SC.end_soldout=`
[hide]
~ Your name is clean. Your salary is very good. Your title is "Head of Community", and your business cards have a little shield on them.
~ LANTERN ships on Monday. You do a lot of interviews. You say "insights" a lot. You never say "data".
~ Rin doesn't answer your messages. Neither does anyone else from Room 1337. Ellie's bakery gets a five-star review from a "Lumen Growth Partners" account, and she takes the sign out of her window that said "WE DO THINGS PROPERLY HERE".
* It's a lot of money. You keep saying it.
[end soldout]
`;
SC.end_larp=`
[hide]
~ "Quantum-encrypted blockchain telemetry." It's a clip by 4:20. It's a meme by 5. By Monday it's a sound on every short-video app in the country, set to music.
~ Victor doesn't even need to answer. He just smiles, and lets the room laugh, and the evidence you were supposed to present gets lost in the noise of your own voice.
~ LANTERN ships on Monday. Your forum handle trends for a week. packet_pam's reply is still at the bottom of your old post, from two weeks ago. "source?"
* You should have handed over the microphone.
[call epilogueCast(0)]
[end larp]
`;
SC.end_opensource=`
[hide]
~ No one hero. No one face on the front page. A room full of people who each did one thing well, at the same time.
~ The disclosure lands. LANTERN dies. Lumen is investigated, then gutted, then quietly sold for parts. And next year, CTRL+ALT+CON has no headline sponsor at all: just four thousand people who paid for their own badges, and a programme that says "brought to you by everyone".
[call epilogueCast(1)]
~ You don't fall in love this week. You do something else, which is rarer: you find a lot of people you'd call at three in the morning, and who'd pick up.
[end opensource]
`;
SC.end_notfound=`
[hide]
~ It works. LANTERN doesn't ship. Lumen is investigated. The disclosure lands, careful, dated, verified.
~ You go home on Monday on the 09:12 with a bag of stickers for Ellie and nobody's number in your phone that wasn't there before.
* You did the right thing. You did most of it alone. That's a kind of strength. It's also a kind of tired.
[call epilogueCast(1)]
~ packet_pam DMs you on Tuesday. "saw the keynote. source: you, apparently. well done." You don't know why that makes you cry on a train, but it does.
[end notfound]
`;
SC.end_lasttrain=`
[bg station]
[hide]
~ The last train. You take it on Sunday morning, actually, the 09:12, so it's not the last train. It just feels like one.
~ The carriage is nearly empty. You put your badge, still blue, in the bin on the platform.
~ At 4 PM you're on the sofa in Flat 1A. You don't watch the keynote. You find out what happened the next morning, from a news alert you swipe away before you finish reading it.
* It wasn't your fight. You tell yourself that a lot, that week. It gets quieter every time, but it never quite goes.
[end lasttrain]
`;
SC.end_harem=`
[hide]
~ They're all here.
~ Every single one of them. In the Grand Ballroom of the Halcyon, under purple chandeliers, with four thousand blue badges going dark one by one as Tilly's real firmware rolls out over the air.
~ It clicks, all of it, all at once. Ellie's stolen account was LANTERN's first test: small businesses, hijacked, then sold the cure. Brindle's LifeScore was LANTERN's first customer. Jonah found LANTERN first, and Pike buried him. The badges were the proof of concept. The copycat was the advertising campaign. Owen was the open door. Halberd was the buyer. And WHISPER was the one person who built it, and spent three years trying to take it back.
~ Every thread. Every person. Every secret. And you, somehow, in the middle of all of it.
ellie.h: Okay. Okay! Everyone! Everyone has a cinnamon knot! I made a hundred! I knew!
nyx.s: Nobody has ever successfully picked every lock in a building. You did it with people.
ada.b: I calculated the probability of this. It was zero. Zero. And yet. Here we all are.
priya.n: All our phones are in the fountain. I'm counting that as a Faraday cage.
juno.h: Not streaming. For once. This one's just ours.
kit.b: The armour's off. Everyone's armour's off. Look at us.
rin.h: I brought twenty-one gummy worms. I counted. One each. And one for you, because you're the reason.
bea.s: Free bar. Don't get used to it. Get a little used to it.
mira.n: I came to a party. Write that down somewhere. Then burn it.
saoirse.h: Front page, every paper. And this is the only story I'm not writing.
sunny.n: Network's up. I'm not looking at it. Look at me, not looking at it.
tilly.b: Rainbows. All of them. Four thousand. Mine again.
petra.h: Car's outside. It fits eight. We'll make it fit twenty-two.
astrid.h: The ISS is going over at 23:51. I've told it to wave.
yuki.s: New record. Fastest anyone's ever got everyone. Unbeatable.
vesper.b: No earpiece. No song for anyone else. Just this room.
delphine.h: My own words. All night. I'm a little drunk on them.
noor.n: Every case closed. Every one. I've never said that before. I'll never say it again.
fern.h: The bees would like you all. I'm sure of it.
wren.h: Episode one hundred. Season finale. The case of everyone, solved.
pia.b: I'll play that one. For all of you. Just this once.
~ Pia plays. Everyone stops talking. And for three minutes, in a hotel ballroom full of the best people you have ever met, nobody is watching anybody at all. They're just listening.
* {h}. A forum handle you chose at fourteen. It was never a mask. It was a door.
~ Mira finds you at the edge of the room, just as the song ends. She looks at all of them, and then at you, as if she's seen this exact moment somewhere before.
mira.s: You've done this before, haven't you. I can tell. People who've been here before look at the exits last.
[ach harem]
[end harem]
`;
SC.restore=`
[bg hotel]
[hide]
~ A file on your laptop that you don't remember putting there. session.bak. Last modified: a date that hasn't happened yet.
~ Inside, in plain text: every name. Every scene. Every clue, every lead, every answer. In your own words, as if you wrote it after a week you haven't had.
* It should feel impossible. Instead it feels like remembering.
? Restore it
 [call S.restore=true]
 [ach restore]
 ~ The screen flickers. You feel faster. Your days feel longer, as if each part of them has room for twice as much. The people in this file feel like people you already know.
 * Whatever this is, you're not going to waste it.
? Close the laptop
 ~ You close it. Some things you should earn the slow way.
`;

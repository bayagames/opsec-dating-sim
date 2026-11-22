/* ============ ROUTES: MIRA, SAOIRSE ============ */
SC.mira1=`
[bg plantdeck]
~ The roof. Mira's on the air-con unit with her laptop closed for once, watching the con.
mira.n: You came back. I said bring a better question. Here's mine instead.
mira.n: If you could show everyone at this con exactly how exposed they are, would you? Even if it hurt them?
? "Not by hurting them. Teach with consent. Let people opt in."
 [fx mira:14 skill:2]
 mira.o: ...You sound like my conscience. I muted her years ago.
 mira.b: She was usually right. It was very annoying.
? "Yes. People only learn when it hurts."
 [fx mira:6]
 [flag mira_agree]
 mira.s: Spoken like someone who's never been the lesson.
 mira.d: Ask Dave. He learned. He also didn't sleep for two nights.
? "Only if I got the credit."
 [fx mira:-8 clout:4]
 mira.a: Ah. A Dave with better hair.
mira.n: Consent. Funny word. Every app has a consent screen now. "I agree". Forty-one thousand words of terms nobody reads, and one button.
mira.n: That's not consent. That's a toll booth with a smile painted on it.
* That's almost exactly what Noor said. You don't tell her that. You suspect she'd like Noor.
if clue('sniffer')||clue('cipher')||clue('vod')||clue('dmtrace')
 > The sniffer under the roof door. The challenge signed —M. The silver hair on the stream. The DM from up here. It's you. You're WHISPER.
 mira.o: ...
 mira.h: Well. Someone finally read the metadata.
 [fx mira:10 skill:4]
 [flag named_whisper]
else
 mira.s: You're working something out. I can see it on your face. Don't rush it. The best answers take a few clues.
`;
SC.mira2=`
[bg plantdeck]
if f('named_whisper')||solved('m2')
 mira.n: You already know what I am. Let me tell you why.
else
 mira.n: I'll save you the detective work, since you're clearly busy being decent. I'm WHISPER.
 ~ She says it like a weather report.
mira.n: Three years ago I was Lumen's lead data scientist. I built SafeSphere's first version. A real privacy app. It blocked trackers. It didn't keep anything. I was proud of it.
mira.d: Then Victor needed growth. And growth, it turns out, is data. Version two kept everything. Version three sold it. And SafeSphere 2, LANTERN, the graph? That's my model. I built it for fraud detection. They're selling it to find whistleblowers.
mira.n: I saw the sales deck. "Relationship insights for advertisers, insurers and landlords." I quit. I signed an NDA I can't break without losing everything I own.
mira.a: So I made WHISPER. If I couldn't tell people, I'd show them. Public information only. No addresses. Lessons, not crimes.
mira.d: Dave was collateral. I told myself he'd learn something. He learned that strangers can order him pineapple pizza.
? "You were right about Lumen. You're wrong about how."
 [fx mira:12]
 mira.o: ...How, then?
 > Properly. The regulator, the slow journalist, the lawyers. With your evidence. Your sales deck.
 mira.b: You really think the slow way works?
 > I think it's the only way that lasts.
? "You hurt innocent people. That makes you no better than Victor."
 [fx mira:5]
 mira.a: ...
 mira.d: That's fair. That's the thing I've been trying not to hear for three years.
~ She opens her laptop and hands you a drive. The old Lumen sales deck. Internal emails. The LANTERN spec, with her name on the first page.
[clue salesdeck]
[flag mira_data]
mira.n: Give it to your careful friends. Not to me. I'm not to be trusted with it. I'd make it a show.
`;
SC.mira3=`
[bg plantdeck]
~ Mira's pacing. You've never seen her move faster than a stroll. She's walking the length of the roof and back like she's trying to wear a hole in it.
mira.a: WH1SPER. With a one. They couldn't even be bothered to spell it differently with letters.
mira.a: A woman's front door. A child's school. And then {h}, with your whole week on a map. In my name. Wearing my face.
mira.n: I know who. I've known since Wednesday. The uploads come from the 13th floor. Same floor as you. Same floor as me. Suite 1313, the "refurbishment" wing. Silas Krall's floor.
[clue r1313]
mira.d: Krall was intelligence, once. Government. He did this for a living to people far more dangerous than packet_pam. Now he does it for Victor, to sell shields.
? "Then we prove it. Properly."
 [fx mira:10 skill:2]
 mira.s: Properly. There it is again. You'd make a terrible WHISPER.
 mira.b: ...You'd make a good something else.
? "Let's go down there. Right now."
 [fx mira:4 clout:2]
 mira.a: And do what? Knock? He'd love that. He'd have your badge photographed before the door closed.
 mira.n: No. We let him keep making mistakes. Men like Krall always think they're the only one watching.
mira.n: Do you want to know the worst part? I'm jealous. Of how well he's doing it. That's who I was becoming. That's who I'd be, in three more years of this.
`;
SC.mira4=`
[bg plantdeck]
~ Mira has a thing in her hand you've never seen before: a USB key on a cord, old, scratched, the kind you'd find in a drawer.
mira.n: When I quit, there was one thing I didn't hand back. SafeSphere's original update signing key.
mira.n: Every app update is signed, like a wax seal. Phones only install updates with the right seal. This is the seal. Lumen never rotated it. Too much work. Every SafeSphere install in the world still trusts this key.
[clue signkey]
mira.d: With this, I could push an update to ten million phones tonight. One that switches off everything SafeSphere collects. Contacts. Location. The VPN copies. All of it. Gone, at once, everywhere.
* Ten million phones. One command. One person deciding.
mira.n: I've written it. It's called goodnight.sh. It's on a rig on this roof, aimed at a ground station outside the city, in case they cut the con's network.
? "That's the most dangerous thing I've ever heard."
 [fx mira:8 skill:2]
 mira.s: It is. That's why I'm telling you instead of doing it.
? "Then do it. Tonight."
 [fx mira:4]
 mira.a: Nobody asked those ten million people. That's the part I can't get past. I'd be doing the thing I hate Lumen for. Deciding for everyone, because I know best.
? "Why are you telling me?"
 [fx mira:10]
 mira.n: Because you're the only person I've met in three years who'd tell me not to, for the right reasons.
mira.n: Keep it in your head. That it exists. If Sunday goes wrong, it's the last door out.
`;
SC.mira7=`
[bg plantdeck]
~ Midnight. No laptop. No rig. Mira's on the edge of the roof with her legs over the side, the city below, wind in her hair. When she sees you, she pats the parapet beside her.
mira.n: I deleted WHISPER this morning. Every account. Every script. The sniffer's in the bin. Nyx can have it as a trophy.
mira.d: It felt like taking off armour I forgot I was wearing.
~ You sit next to her. Below: the con, the courtyard tree, the Lumen logo turning, the badges, the people.
mira.n: You asked for my real name once. I told you it wasn't Mira. That's rather the point, I said.
mira.n: Zero-knowledge proof: I can prove I trust you without telling you anything. That's a real thing, in cryptography. You prove you know a secret without ever saying it.
mira.b: ...But I'm tired of proofs.
~ She leans close and says it. Just once. Very quietly, so even the wind doesn't get it.
~ Clare. It's a soft, ordinary name. It suits her better than Mira ever did.
[call S.f.miraname='Clare']
? "I'll never write it down."
 [fx mira:15]
 mira.h: I know. That's why I said it.
? Say it back to her, quietly
 [fx mira:15]
 ~ She closes her eyes, as if hearing it in someone else's voice is something she'd forgotten was possible.
? Kiss her
 [fx mira:15]
 ~ The wind can't be logged. Neither can this.
mira.n: After Sunday, if you want, come back up here. I'll be the one not watching anybody.
mira.b: Except you. I'll make an exception for you.
`;
SC.saoirse1=`
[bg press]
~ The press room, upstairs off the Con Ops corridor. Long tables, power strips, a coffee machine that sounds like it's dying, and journalists typing with the specific fury of people on deadline.
~ Saoirse's at the end of the table, coat still on, three phones, two notebooks, one laptop.
saoirse.n: Sit. I'm going to teach you something nobody teaches anyone, and then you're going to be insufferable about it.
saoirse.n: How a story gets checked. Every claim needs a source. Every source needs a reason to be trusted. And for anything big, you need two sources, independent of each other, who don't know each other, saying the same thing.
saoirse.n: Then a lawyer reads it. Then an editor reads it. Then we call the company and ask for their side. Then we wait. Then we publish.
> That's slow.
saoirse.s: It's slow so that it lands. Fast stories are easy to deny. Slow ones are hard to kill.
~ She flips to a clean page in her notebook.
saoirse.n: And sources. You protect them like they're made of glass. You never say their name. You don't write it down in the notebook, you write it in your head. You meet them somewhere with no cameras. You don't text them on a phone your employer gave you.
saoirse.d: Because if anyone finds out who told you, it's not you who pays. It's them.
? "Who are your sources at this con?"
 [fx saoirse:4 skill:1]
 saoirse.s: Nice try.
 saoirse.h: That's exactly the right question, though. Ask it of everyone. Never answer it yourself.
? "What happens if a source gets found?"
 [fx saoirse:8 skill:3]
 saoirse.d: ...Then you carry it. For the rest of your life. Ask me about it one day. Not today.
[fx skill:5]
`;
SC.saoirse2=`
[bg press]
~ Saoirse's waiting for you with two coffees from somewhere better than the press room machine.
saoirse.n: You asked me what happens when a source gets found. I'm going to tell you, because you're about to need to know.
saoirse.d: A year ago, a researcher called Jonah Reyes came to me. He'd found something inside Lumen, a project with a lantern for a logo. He had documents. He was careful. I was careful.
saoirse.n: We ran the story. Front page. And a week later, Bastion Security published a "forensic report" saying Jonah had stolen the documents. Stolen code, from a client. Graham Pike signed it.
saoirse.d: My paper panicked. Lawyers. They retracted my story. Printed an apology to Lumen on page two.
saoirse.d: And Jonah disappeared. His flat was empty. His phone was off. Nobody's heard from him in eleven months.
[clue retraction]
[flag heard_jonah]
* Jonah Reyes. The name Rin said Bastion's staff aren't allowed to mention.
saoirse.n: I've read that report four hundred times. There's something wrong with it. I can feel it. I've never been able to prove it.
? "Rin says Pike rewrote his audit. Maybe he rewrote Jonah's report too."
 [fx saoirse:10 skill:3]
 saoirse.o: ...Say that again. Slowly.
 > Pike signs whatever Lumen pays for.
 saoirse.n: Then the report's a fake. Then Jonah's story was true. Then I...
 ~ She puts her coffee down very carefully.
 saoirse.d: Then I got a man disappeared for telling the truth, and apologised to the people who did it.
? "It wasn't your fault."
 [fx saoirse:6]
 saoirse.a: It was my byline. That's what a byline is. It's where the fault goes.
`;
SC.saoirse3=`
[bg press]
~ Saoirse's spread a dozen printouts across the table: company filings, a land registry search, a court record.
saoirse.n: Owen Pryce. Deputy chair. I did what I do. Followed the money.
saoirse.n: Two years ago, Owen's company went under. A small event-production business. He owed eighty thousand pounds. There are county court judgements against him. Bailiffs. The lot.
saoirse.n: And then, in March, every judgement is satisfied. Paid off. In one day. By a company called Lantern Consulting Ltd. Registered address: Lumen Analytics' head office.
[clue owendebt]
* LANTERN Consulting. They didn't even bother to hide the name.
saoirse.a: He's not a villain. He's a man who was drowning, and somebody threw him a rope, and the rope had a hook in it.
? "Can you print it?"
 [fx saoirse:6 skill:2]
 saoirse.n: Not yet. A debt paid off isn't a crime. It's a motive. I need what he did with it.
? "Poor Owen."
 [fx saoirse:8]
 saoirse.d: Yeah. Poor Owen. Who let a sponsor put a listening box in the con's network. Both things. Always both things.
saoirse.n: You're good at this, {h}. You don't jump. You let a fact sit until it tells you what it means. That's the whole job.
`;
SC.saoirse4=`
[bg skybridge]
~ The Skybridge, after dark. A glass tube across the lane between the con and the hotel, empty, lit from the floor. No cameras up here, Saoirse says. She checked.
saoirse.n: I'm writing it. The whole thing. Lumen, LANTERN, the badges, Bastion, Jonah. It runs when it's ready. Could be Sunday. Could be next month.
saoirse.n: And I'd like you to be one of my sources.
* A source. Glass. The thing she protects with her whole career.
saoirse.n: Which means rules. For your sake. You don't text me about it. You don't email me about it. We use an app that encrypts everything end to end, so that even the company that runs it can't read what we say, and it deletes itself after a day.
saoirse.n: We never meet at the press room again. If anyone asks, you've never spoken to me except on Wednesday. And if this goes wrong, I go to prison before I say your name.
? "Yes. I'll be your source."
 [fx saoirse:12]
 [flag saoirse_source]
 saoirse.b: ...Thank you. I didn't think I'd be able to do this again. After Jonah.
? "Would you really go to prison?"
 [fx saoirse:10]
 saoirse.n: Journalists have. It's rare. It happens. It's the only promise a journalist can make that means anything.
 saoirse.d: I made it to Jonah. I'm still keeping it. I don't even know where he is to tell him.
~ She sets up the app on your phone, checks it twice, then turns her own phone round so you can see the screen: a new contact, saved under a name that isn't yours. "BAKER".
saoirse.h: Because you'd have to be very boring, or very brave, to talk to a journalist at this con. You're both.
`;
SC.saoirse7=`
[bg plaza]
~ The Arrival Plaza at midnight. The coffee cart's shuttered. The plane trees in their pots rustle. The con's huge sign, CTRL+ALT+CON, buzzes faintly in the dark.
~ Saoirse's walking slowly with her hands in her trench coat pockets. Her notebook isn't in her hand. You've never seen her without it.
saoirse.n: It's in my bag. The notebook. I left it there. On purpose. Do you know how hard that is?
saoirse.n: Everything I do is on the record or off the record. Every conversation's one or the other. I can't remember the last time I talked to someone and wasn't working out which.
? "What's this one?"
 [fx saoirse:10]
 saoirse.d: ...That's what I've been trying to work out for three days.
? "Then don't decide. Just walk."
 [fx saoirse:10]
 saoirse.h: Just walk. Imagine that.
~ You walk the length of the plaza and back. Past the taxi rank, the bus stop with the Lumen ad, the coffee cart. She talks about the first story she ever wrote, at fifteen, about a school dinner lady who was being underpaid. It got the dinner lady a raise. She still sends her a card every Christmas.
saoirse.n: That's why I do it. Not the front pages. The dinner lady.
~ She stops under the big sign. The letters buzz above you both.
saoirse.n: Off the record, {h}. Completely. Not for print, not for background, not for anything.
saoirse.b: I'm in love with you. It's a terrible idea. You're a source. There are rules. I'm breaking all of them.
? "Off the record: me too."
 [fx saoirse:15]
 saoirse.h: Good. Don't print that.
? Kiss her
 [fx saoirse:15]
 ~ Under the sign, at midnight, with nobody writing anything down.
? "On the record: me too."
 [fx saoirse:15]
 saoirse.o: ...On the record?
 > Print it.
 saoirse.b: You idiot. You absolute idiot. I'm going to frame that.
`;

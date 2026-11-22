/* ============ ROUTES: DELPHINE, NOOR ============ */
SC.delphine1=`
[bg cafe]
~ The Halcyon Café, mid-morning. Delphine's at a corner table with a flat white, a croissant she isn't eating and a tablet face down. She sees you and moves her bag off the other chair without looking up.
delphine.n: Sit. I've got nine minutes. You're going to try to work out what I know, and I'm going to try to work out what you know, and we'll both pretend this is a coffee.
? "What do you know?"
 [fx delphine:4 skill:1]
 delphine.s: Direct. Victor would hate you. I'm warming to you.
? "It is a coffee. I just wanted a coffee."
 [fx delphine:6]
 delphine.o: ...Nobody at this con has ever just wanted a coffee with me.
 delphine.h: Fine. A coffee. Eight minutes.
? Order her a fresh one. Hers has gone cold.
 [fx delphine:8]
 delphine.o: You noticed it had gone cold.
 delphine.n: I notice people noticing things. That's my whole job. I'm off duty for seven and a half minutes.
delphine.n: Communications. You know what that means? Every word Lumen says in public, I wrote, or approved, or rewrote at 2 AM. "Privacy is a human right." "Insights, not data." "Shield mode."
delphine.d: I'm very good at it. I can make anything sound like a gift. That's the problem with me.
delphine.n: Tell me something. Off the record, as your journalist friend would say. Do you think SafeSphere is what WHISPER says it is?
? "Yes. I've seen the code."
 [fx delphine:6 skill:2]
 delphine.d: ...So have I. Not the code. The slides about the code. They're very honest, the slides. Nobody thinks anyone outside will see the slides.
? "Do you?"
 [fx delphine:8]
 delphine.n: I think I'm paid not to have an opinion. And I think I've had one since Tuesday.
~ Her phone buzzes. She turns it over, reads it and her face closes like a door.
delphine.n: Victor. I'm needed. I'm always needed.
delphine.s: Same time tomorrow? I'll pretend it's a coffee again.
`;
SC.delphine2=`
[bg lumenlounge]
~ The Lumen Lounge, morning, before it opens. Delphine's at a booth with a laptop open, a printed draft covered in red pen, and an expression like a migraine.
delphine.n: Sit. Read this. Tell me what's wrong with it. You won't. Nobody can. It's perfect. That's what's wrong with it.
~ Sunday's keynote. Forty-five minutes of Victor, written by Delphine. It's very good. It's warm, and funny, and makes LANTERN sound like a hug.
~ On page eleven, a paragraph with a line through it in red, and in the margin, in her handwriting: "can't".
~ The paragraph: "And for our partners in public safety, LANTERN's relationship mapping can help identify individuals at risk of sharing sensitive information with unauthorised parties."
delphine.d: Unauthorised parties. Journalists. Lawyers. Regulators. People who talk to them. That's what that sentence means. I've been asked to write it so it sounds like protection.
delphine.d: I've written a thousand sentences like that. I can't write that one. I've tried eleven times.
? "Then don't. That's the line."
 [fx delphine:10]
 delphine.n: Easy for you to say. You don't have a mortgage and a CEO who calls you at 3 AM.
 > No. But you've already decided. That's why it's crossed out.
 delphine.o: ...Damn you.
? "Who asked you to write it?"
 [fx delphine:6 skill:2]
 delphine.n: Silas Krall. Trust and Safety. He said the buyer "needs to hear it said". I don't know who the buyer is. I'm not supposed to know there is a buyer.
 [flag heard_buyer]
delphine.n: My mother was a translator. In courts. She used to say the worst thing you can do with language is make a lie comfortable.
delphine.d: I've been making lies comfortable for six years.
`;
SC.delphine3=`
[bg lumenlounge]
~ Delphine isn't in the Lounge. A message from her, from a number you didn't know she had: "Grill. Private dining room. Now. Bring nobody." You go.
[bg pdining]
~ The private dining room behind the Grill. Curtains drawn. Delphine's on the floor against the wall with her laptop on her knees and her shoes off, and she's been crying, and she's furious about having been crying.
delphine.a: Trust and Safety has a shared folder. Silas thinks only his team can see it. I've had access since I set up their press templates two years ago. Nobody ever revokes access. Nobody.
~ She turns the laptop round. A folder: "WH1SPER_CAMPAIGN". Inside, drafts. The packet_pam post, with the address, dated Monday, two days before it went up. The post naming you, dated Tuesday. A spreadsheet of "targets" with columns for "fear impact" and "projected installs".
[clue tsfolder]
delphine.d: And my statement. About cyber-bullying. "Lumen condemns these attacks." In the same folder. Written by me, on Tuesday, for an attack that was planned on Monday.
delphine.a: I wrote the apology for a crime my own company committed. Before it committed it.
? "Copy everything. Now. Before he notices."
 [fx delphine:8 skill:3]
 delphine.n: Already done. Three copies. One's sewn into the lining of my coat. I'm very good at my job.
? "Are you okay?"
 [fx delphine:10]
 delphine.d: No. Not even slightly. But I'm the most okay I've been in six years, which is horrifying.
delphine.n: Do you know what's strange? For six years I've thought I was the person who makes Lumen sound good. Tonight I found out I was the person who makes Lumen sound sorry. In advance. On a schedule.
`;
SC.delphine4=`
[bg grill]
~ The Grill, after service. The kitchen's dark. Delphine's at the bar with two glasses and a bottle of something old she says she "requisitioned".
delphine.n: I've decided. I wanted to tell you before I told anyone. Including me.
delphine.n: On Sunday, I'm going to walk onto that stage. In front of Victor. And read out what's in that folder. In my own words. For once.
delphine.d: I'll lose my job before I've finished the first paragraph. Lumen will sue me for breach of contract, confidentiality, everything. My name will be a search result for the rest of my life.
? "You won't be on your own. I'll be there."
 [fx delphine:12]
 delphine.o: ...You'll stand next to me?
 > Right next to you.
 delphine.b: Nobody's ever stood next to me. They stand next to Victor. I stand behind him with a phone.
? "You'll need a lawyer. Noor Haddad. She's here."
 [fx delphine:8 skill:3]
 delphine.n: The Open Rights woman. She sued us last year. She lost. She was right.
 delphine.h: She'll enjoy this enormously. Introduce us.
 [flag delphine_noor]
[flag delphine_testify]
delphine.n: My mother would have liked you. She liked people who said things plainly. She said I spoke like a contract.
delphine.b: I'm trying to speak like a person. Bear with me. I'm out of practice.
`;
SC.delphine5=`
[bg pdining]
~ The private dining room, the night before. Candles. Delphine's dismissed the waiter, locked the door, and taken off her Lumen lanyard and laid it on the table like a dead thing.
delphine.n: My last night as Lumen's Head of Communications. I thought I'd spend it with the only person this week I didn't have to manage.
~ She reaches up and takes the pins out of her chignon, one by one, and her hair falls to her shoulders. She shakes it out and looks, for a second, about twenty.
delphine.h: Six years I've worn it up. Victor said it looked "trustworthy". I've had a headache since 2019.
? "It suits you down."
 [fx delphine:12]
 delphine.b: Flatterer. Keep going.
? "You don't need to look trustworthy. You are."
 [fx delphine:12]
 delphine.d: ...That's not a sentence anyone in my industry has heard in a decade.
delphine.n: Do you know what I've realised? Every word I've written for six years was somebody else's. Every speech. Every apology. Every "privacy is a human right". I can't remember the last thing I said that was only mine.
delphine.n: So. Here's one. Entirely mine. No edits. No approvals.
delphine.b: I'm in love with you. It's very inconvenient. It's not on message at all.
? "I love you too. That one's mine."
 [fx delphine:15]
 delphine.h: Off message. Both of us. Victor would have a stroke.
? Kiss her
 [fx delphine:15]
 ~ The candles gutter. The lanyard sits on the table between the glasses, and neither of you looks at it again.
? "Say it again. In your own words."
 [fx delphine:15]
 delphine.n: Those were my own words. That's why they were so short.
`;
SC.noor0=`
[bg speakers]
~ The Speaker Lounge. Free coffee, good chairs and a sign that says SPEAKERS ONLY, which nobody enforces. A woman in a deep green hijab and tortoiseshell glasses is at the corner table behind a wall of case files, a fountain pen in her hand, reading a printout with the expression of someone being personally insulted by it.
~ She looks up.
noor.n: You're not a speaker. You're standing like someone who's not a speaker. It's fine. Neither is half this room. Sit, if you're going to stare.
? "What are you reading?"
 [fx noor:6 skill:1]
 noor.a: SafeSphere's privacy policy. Version eleven. Forty-one thousand words. I've read it twice. It's a horror novel with a very slow start.
? "Are you a speaker?"
 [fx noor:4]
 noor.n: Tomorrow at two. Hall B. "Consent You Can't Refuse Isn't Consent". About twelve people will come. Four will be lawyers. One will be my mother.
? "Can I help?"
 [fx noor:7]
 noor.o: ...People don't usually offer. They usually ask what I charge.
noor.n: Noor Haddad. I'm a lawyer. Open Rights Collective. We sue companies that take things from people who didn't really agree to give them.
noor.d: Last year I sued Lumen. On behalf of a man who said SafeSphere was spying on him. I lost. The judge said he'd "clicked I agree". Forty-one thousand words, and one button.
`;
SC.noor1=`
[bg speakers]
noor.n: Sit. I'll explain the law in four minutes. Most people need four years. You'll get the version that matters.
noor.n: In this country, your personal data, anything that identifies you, can only be collected for a reason. Consent is one reason. Another is "legitimate interest", which means a company decides it's legitimate. That's the hole they drive the lorries through.
noor.n: Consent has to be freely given, specific, informed, and as easy to withdraw as to give. Forty-one thousand words is not informed. A button in the way of the app you need is not freely given.
noor.n: There's a regulator whose job is to enforce this. It's understaffed, underfunded and drowning. But when you bring it something properly prepared, it moves. Slowly. Like a glacier. Glaciers carve valleys.
* Glaciers carve valleys. You'll think about that one for days.
? "So why did you lose?"
 [fx noor:8 skill:3]
 noor.d: Because I had one witness. A man who said what he'd found. And Lumen had an audit from Bastion saying everything was fine. Judges trust audits. Auditors are supposed to be neutral.
? "What would win it?"
 [fx noor:8 skill:3]
 noor.n: Someone from inside. Under oath. Saying what they saw. An insider is worth a hundred outside experts. They can't be dismissed as "not understanding the context".
 noor.d: I've never had one. Insiders have mortgages.
[fx skill:5]
`;
SC.noor2=`
[bg library]
~ The hotel library, late. Noor's taken over the reading table with three laptops and a spreadsheet the size of a duvet.
noor.n: Company filings are public. Every director, every shareholder, every address. It's the most boring treasure map in the world. Sit. We're going to follow a name.
if f('heard_corvid')
 > Corvid Holdings.
 noor.o: Where did you hear that?
 > Around.
 noor.h: Around. Excellent. My favourite source.
else
 noor.n: Lumen's accounts mention a pending "asset transfer" to a company called Corvid Holdings. Let's see who Corvid is.
[game pipe n=2 only=8,1 title="Following the filings"]
~ Corvid Holdings: registered in this country two months ago. Share capital: one pound. Three directors. Each of them, in other filings, a director of something called Halberd Strategic Intelligence Ltd.
noor.a: Halberd. Private intelligence. They do "due diligence" for governments that don't want to be seen doing it themselves. I've sued their clients. Never them. They're very careful.
[clue corvid]
[flag heard_corvid]
noor.d: Why would a spy firm be buying anything from a privacy app?
* A graph of who knows who. Who talks to journalists. That's why.
noor.n: You know something. I can see it. When you're ready, tell me. Lawyers are very good at keeping things.
`;
SC.noor3=`
[bg library]
~ Noor's not reading anything. She's sitting with her fountain pen capped, turning it over and over.
noor.n: You asked why I lost. I told you: one witness. I didn't tell you who.
noor.d: Jonah Reyes. A researcher. He found something inside Lumen called LANTERN, a year before anyone else, and he came to me. I took the case for free. I believed him completely.
noor.d: Then Bastion published their report. "Forensic evidence of theft." The judge read it and threw out his testimony. And Jonah stopped answering my calls. His flat was cleared. His phone went dead.
[flag heard_jonah]
noor.n: I've written to him every month. Letters, to an old address. They come back. I keep writing them.
? "We think the report was faked. Rin says Pike rewrites whatever Lumen pays for."
 [fx noor:10 skill:2]
 noor.o: ...Then the judgement's unsafe. Then it can be reopened. Then Jonah...
 noor.d: Then I can tell him he was right. If I can find him.
? "You did everything you could."
 [fx noor:8]
 noor.a: That's what everyone says. I don't believe them. I'd like to.
~ She opens a drawer of her case and shows you: eleven letters, unopened, returned to sender, in a neat stack. The twelfth is half-written.
noor.n: "Dear Jonah. This month..."
`;
SC.noor4=`
[bg library]
~ Noor has a new document on the table. Thirty pages. Heading: APPLICATION FOR AN INTERIM INJUNCTION.
noor.n: An injunction is a court order. It tells someone: stop. Not after a trial. Now. Until we can have the trial.
noor.n: If I can get one before Sunday at four, Lumen can't launch LANTERN, can't transfer it to Corvid, and can't "demonstrate" the data they've taken from four thousand people at this con without asking.
noor.d: But I need two things. Evidence a judge can check overnight. And a witness from inside. Under oath. Someone who'll say "I saw it" with their name on it.
if scn('delphine')>=4||f('delphine_testify')
 > Delphine Vos. Lumen's head of communications. She found WH1SPER's drafts in their own folder. She's going to say it on stage. She'd say it to a judge.
 noor.o: ...The woman who wrote "privacy is a human right"?
 > The same woman.
 noor.h: Oh, that's poetry. That's legal poetry. Introduce me.
 [flag delphine_noor]
elif solved('m7')
 > Bastion's audit is fake. Rin can prove it line by line, and the invoice proves why. Rin will swear to it.
 noor.n: An insider from the auditor. That's almost as good. That's very good.
else
 noor.d: I don't have one yet. Find me one, and I'll find a judge.
[flag inj_ready]
noor.n: You realise what you're doing? You're making the slow way fast. That's the hardest thing in law.
`;
SC.noor5=`
[bg library]
~ The library at midnight, the night before. Every case file closed and stacked. The fountain pen, capped, laid across the top. Noor's sitting in the window seat with her shoes off and her knees up, looking at the garden lights.
noor.n: I always close every file the night before something big. Then I sit here and don't open them again. It's a superstition. My father did it before exams.
~ You sit at the other end of the window seat. Your feet nearly touch.
noor.n: Can I tell you something that isn't law? I've forgotten how. I've been a lawyer since I was twenty-four.
noor.d: I came into this because my father's shop was ruined by a council database that got his name confused with someone else's. Fines, letters, a court date, for a man who'd never done anything. It took me eleven years to clear his name. He died two years before I did.
noor.n: Every case since has been him. Every Jonah. Every person who clicked "I agree" and lost something.
noor.b: And this week I met someone who isn't a case. Who asked "can I help" before "what do you charge". I don't have a file for you.
? "Then don't open one. Just be here."
 [fx noor:15]
 noor.h: No file. No pen. No precedent.
 > No precedent.
 noor.b: ...That's terrifying. I like it.
? "I'm in love with you."
 [fx noor:15]
 noor.o: That's not admissible.
 > Off the record, then.
 noor.b: No. On it. Put it on the record. I want it on the record.
? Take her hand
 [fx noor:15]
 ~ Her hand's cool and steady, and has a callus where the fountain pen sits, and she holds yours like she's signing something.
noor.n: Whatever happens tomorrow, I'll write to you. Every month. And these won't come back.
`;

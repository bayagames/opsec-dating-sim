/* ============ ROUTES: RIN, BEA ============ */
SC.rin1=`
[bg lounge]
~ Rin's bean bag. Two bean bags, actually: he's pulled a second one round for you. Gummy worms in a bowl between them like a peace offering.
rin.h: You came back. People don't usually come back. I'm a lot. Worm?
rin.n: Okay. Lesson. You want to know how I take an app apart? It's called static analysis. You don't run the app. You read it. Like reading the recipe instead of eating the cake.
~ He opens SafeSphere's installer on his laptop and unzips it like it's a parcel. Inside: thousands of files. He scrolls to one.
rin.n: Every app has a list of permissions. What it's allowed to touch. This is SafeSphere's. Read it with me. Tell me which ones a "privacy shield" actually needs.
[game spot keys=sponsor,onboard title="Reading the recipe"]
rin.h: You're good at this! You found the microphone. Everyone misses the microphone. "Always-on voice tips." Nobody needs always-on voice tips.
~ Then he goes quieter. He pulls up another document.
rin.n: And this. This is Bastion's invoice to Lumen. For the SafeSphere audit. I'm not supposed to have it. It was in the shared drive. Nobody in finance knows how shared drives work.
~ "Two-day review of SafeSphere privacy controls · £1,200,000."
[clue pikeinv]
rin.d: Two days. One point two million. My salary for thirty years, for two days. You don't pay that for an audit. You pay that for a signature.
? "Rin, this is evidence. Keep it safe."
 [fx rin:8 skill:2]
 rin.n: It's in four places. None of them the cloud. One of them is a microSD card inside a gummy worm packet. Nobody steals gummy worms. Well. Everybody steals gummy worms. Nobody steals the empty packet.
? "Aren't you scared?"
 [fx rin:6]
 rin.d: All the time. I'm scared all the time. I'm scared in this bean bag right now.
 rin.h: But I'm less scared when people come back.
`;
SC.rin2=`
[bg lounge]
~ Rin's phone is buzzing on the bean bag. He's staring at it like it's a wasp. The screen says "GRAHAM PIKE".
rin.d: My boss. He's called six times. If I answer, he'll ask where the audit draft is. If I don't answer, he'll know.
? "Don't answer. Put it face down."
 [fx rin:8]
 ~ He puts it face down. It keeps buzzing against the bean bag, muffled, like something trapped. Then it stops.
? "Answer it. Find out what he knows."
 [fx rin:4 skill:2]
 ~ He answers, on speaker, very quietly. A smooth voice: "Rin. Just checking in. Lumen are a little concerned you've been... sharing. You haven't been sharing, have you?" Rin says no. His voice doesn't shake. His hands do.
rin.n: I want to show you something. Then you'll understand why I'm scared of him.
~ Two documents, side by side. On the left: Bastion's published audit of SafeSphere, glossy, with a green tick. On the right: Rin's draft of the same audit, written three months ago.
rin.n: Same app. Same version. Same tests. On every finding, they disagree. Mine says "uploads full contact list without consent". Theirs says "contact handling meets industry standards". Mine says "location every 60 seconds". Theirs says "location is used responsibly".
[clue auditcopy]
rin.d: He rewrote my audit. Every line. Put my name in the acknowledgements. I'm in the acknowledgements of a lie.
* An audit is supposed to be the one honest voice. Somebody bought it.
rin.a: And there's something else. A year ago Bastion did a "forensic report" on a researcher who said bad things about Lumen. Jonah Reyes. It said he stole code. He disappeared. Everyone at Bastion knows not to mention his name.
[flag heard_jonah]
rin.d: I think about Jonah Reyes a lot. I think about whether I'm next.
? "You're not next. You've got us."
 [fx rin:10]
 rin.n: "Us." I like "us". I haven't had an "us" since uni.
? "We'll find out what happened to Jonah."
 [fx rin:8 skill:2]
 rin.n: ...You'd do that?
`;
SC.rin3=`
[bg corridor]
~ Rin asked you to his room on the 13th floor. Room 1322. He opens the door in a soft pink jumper and a black skirt, and has clearly changed three times.
rin.n: Hi. Come in. Sorry about the... everything. I don't usually let people in. It's very me in here.
[bg hotel]
~ It's very him. A laptop on the desk, two more on the bed. A clothes rail with skirts and hoodies in pastels. A mirror with photos tucked round the frame: Rin at uni, Rin at a con, Rin with a cat.
rin.n: Can I tell you something? It's not about malware. It's going to be the least technical thing I've ever said.
rin.n: At work I wear navy. Every day. Navy trousers, navy jumper, navy lanyard. Like everyone at Bastion. I look like a Lumen intern. I look like nobody.
rin.d: And here, I wear this. And people look. Some of them are nice about it. Some of them aren't. But they look at me, not through me.
rin.n: I've been thinking that if I'm going to stand up on Sunday and say Bastion lied, I want to be in this. In me. Not in navy.
* He's not asking permission. He's telling you something he's decided, and seeing whether you'll still be standing there.
? "You should. Be you on that stage."
 [fx rin:12]
 rin.b: You really think so?
 > They'll remember the person who told the truth. Let them remember you.
? "You look really good, by the way."
 [fx rin:12]
 rin.o: ...I changed three times.
 > It shows. In a good way.
 rin.b: Shut up. Thank you. Shut up.
? "Is that what you're scared of? Not Pike. Being looked at."
 [fx rin:10 skill:1]
 rin.n: ...Both. Being looked at, and being found. They're the same thing in my job.
rin.n: Do you want a worm? I've got the good ones in here. The ones I don't share.
~ He shares them.
`;
SC.rin4=`
[bg lounge]
~ The Chill-out Lounge at closing time. The lava lamps are slowing down. Rin's sitting very upright on his bean bag with his hands in his lap.
rin.n: I've decided. I'm going to do it. Sunday. On the stage. In front of everyone. With Victor in the room.
rin.d: I'm going to lose my job. Bastion will sue me. Pike will say I stole their client data. My mum will see it on the news. My mum doesn't know I wear skirts.
rin.n: But if I don't, SafeSphere 2 ships on Monday, and everyone who's ever met a journalist gets a score next to their name. And the next Jonah Reyes doesn't get to disappear quietly, because the graph already knew who he was talking to.
? Hold his hand
 [fx rin:12]
 ~ His hand's cold. He grips yours so hard it hurts, then laughs at himself and loosens it, and then doesn't let go.
? "You won't be on your own up there."
 [fx rin:10]
 rin.n: Promise?
 > Promise.
 rin.b: Okay. Then I can do it. I can do anything with someone within ten metres. That's been scientifically tested. By me.
? "You don't have to. We can find another way."
 [fx rin:6]
 rin.n: There isn't one. Not a good one. I've thought about it for three months. This is the good one. It's just the scary one.
[flag rin_testify]
rin.n: Will you help me practise? I've written it out. It's twenty minutes long. Marge says I've got four.
~ You practise until the lava lamps turn off. By the end, it's four minutes long, and his voice only shakes on the first sentence.
`;
SC.rin5=`
[bg naps]
~ The nap pods. A row of white capsules with sliding doors, humming softly, glowing faint blue inside. Rin's lying in one with the door open, a metre-long gummy worm draped across his chest like a sash.
rin.h: Hi. Get in. There's room. There's not really room. Get in anyway.
~ There's not really room. You get in anyway. The pod hums. It's very small and very warm and smells faintly of strawberry.
rin.n: Tomorrow at four. I keep running it in my head like a test suite. Every possible failure.
rin.n: But there's one test I haven't run. I keep not running it, because if it fails, I don't think I can stand up tomorrow.
> What's the test?
rin.d: ...This.
~ He turns his head on the tiny pillow so he's looking at you, about four centimetres away.
rin.n: I like you. A lot. More than a lot. More than gummy worms, which you know is a big number.
rin.b: I don't know if you see me that way. In the skirt. Or out of it. Or at all. That's the test.
? "Test passed."
 [fx rin:15]
 rin.o: ...Passed?
 > Every case.
 rin.b: Oh. Oh no. I'm going to cry in a nap pod. That's so undignified.
? Kiss him
 [fx rin:15]
 ~ It's four centimetres. It doesn't take long to close.
 rin.h: Test passed. Definitely passed. I'm writing it up.
? "I see you. Exactly the way you are."
 [fx rin:15]
 rin.b: ...That's the nicest thing anyone's ever said to me in a capsule.
~ He bites the gummy worm in half and gives you the other half. Then he falls asleep, very suddenly, the way people do after they stop being scared, with his head on your shoulder and half a worm in his hand.
`;
SC.bea1=`
[bg bar]
~ After closing. The chairs are up on the tables. The jukebox is off. Bea's sitting on the wrong side of the bar with her shoes off and a sketchbook open, drawing the empty room.
bea.n: Bar's shut, hoodie. Unless you're here to mop. You're not here to mop.
> I can mop.
bea.s: Ha. Nobody can mop like me. Sit down. Water? On the house. Don't tell anyone the house has water.
~ She keeps drawing. Quick lines. The bottles behind the bar, the lamps, the beer taps, all slightly too tall, like a dream of a bar.
? "You're really good."
 [fx bea:8]
 bea.a: Don't. I'm not. I'm a bartender who doodles.
 > That's not a doodle.
 bea.d: ...Shut up.
? Watch her draw, without saying anything
 [fx bea:9]
 ~ It's comfortable. The pen scratching. The fridges humming. After a while she turns a page and starts on something new, and keeps glancing up at you.
bea.n: Do you know what it's like back here? Behind the bar? People forget you're there. They tell each other everything. Affairs. Debts. Passwords. I've heard eleven people say their PIN out loud this week. Eleven. To each other. While I'm standing right there.
bea.s: Bartenders are the best spies in the world. We're furniture with ears.
~ She tears a napkin off the stack, draws on it for about two minutes, folds it in half and slides it into your top pocket.
bea.n: Don't look till you're in the lift.
~ In the lift you look. It's you, at the bar, in about thirty lines. You look more tired than you thought. You also look kinder than you thought.
`;
SC.bea2=`
[bg bar]
~ Bea's polishing glasses that don't need polishing, which you've learned means she's thinking.
bea.n: Sit. I've got something. I don't know what it is. You'll know what it is.
bea.n: The end of the bar. The Lumen lot. Every night. They talk like I'm a coat stand. Last night, the tall one with the scar and the man in the nice suit with the silver hair. Never seen him before. Got off a plane, by the look of him.
bea.a: Scar says: "Proof of concept's on track. Badge telemetry's at ninety-four per cent." Silver hair says: "And the sources feature?" Scar says: "Best in the industry. You'll have a list of every journalist's friend in the building by Sunday."
* Sources. Journalists' friends. Saoirse, at the con. Everyone who's talked to her.
bea.n: And then silver hair asks for "the singer's bill to go to Corvid, as usual". The singer. The one upstairs in the Lounge. Corvid. That's the name on the tab.
[flag heard_corvid]
if met('vesper')
 [clue booking]
? "Bea, this is huge. Write it down. Times, words, everything."
 [fx bea:8 skill:2]
 bea.h: Already did. On napkins. I'm a professional.
 ~ She slides over a stack of napkins, every one with a date, a time and a quote in neat capitals, and a tiny sketch of whoever said it.
? "Be careful. If they think you're listening..."
 [fx bea:6]
 bea.s: They don't think I'm listening. That's the whole trick. They think I'm the bar.
bea.d: The scar one snapped his fingers at me again tonight. Twice. Like Victor. They learn it off each other.
bea.a: I've been snapped at for six years. I'm good at it. I'm sick of being good at it.
`;
SC.bea3=`
[bg terrace]
~ The bar terrace, between shifts. Fairy lights, heaters, a planter of herbs Bea's been quietly growing for cocktails nobody orders. She's sitting on the low wall with a cigarette she isn't smoking and an old sketchbook, bigger than the one she usually carries, with a cracked spine.
bea.n: You asked once. If I'd ever done anything with the drawing. This is what I did with it.
~ She hands it over. It's full. Life drawings, buildings, portraits, a whole series of hands. The pages have a stamp in the corner: a school of art, a year, a student number.
bea.n: Two years. I got in on a scholarship. I was good. Proper good. And then my mum got ill, and somebody had to pay the rent, and bar work pays cash on the night.
bea.d: I was going to go back. I told myself every year I'd go back. That was six years ago.
? "You could still go back."
 [fx bea:8]
 bea.s: At thirty? With a bar tab and a back that hurts?
 > Yes.
 bea.d: ...You say that like it's simple.
 > It's not simple. It's just still true.
? "These are better than anything in the hotel."
 [fx bea:10]
 bea.h: The hotel has a painting of a horse in a hat.
 > These are better than a horse in a hat.
 bea.b: High praise. I'll put it on my CV.
? "Your mum must be proud of you."
 [fx bea:9]
 bea.d: She was. She's better now. She keeps asking when I'm going back to "the drawing". Like it's a holiday I'm on.
~ She takes the sketchbook back and, without asking, turns to a clean page and starts drawing you. Not on a napkin this time. Properly. Twenty minutes.
bea.n: Don't move. You've got a good face for keeping still. That's not a compliment. It's an observation.
~ It's a compliment.
`;
SC.bea4=`
[bg terrace]
~ Bea's on the terrace in her coat, not her waistcoat. Her name badge is in her hand.
bea.a: Suspended. Pending "a review". A guest complained I was "overly familiar" and "eavesdropping on private business". Guess which guest.
bea.d: Six years. Never had a complaint. One week with Lumen in the building.
? "That's on me. They saw you talking to me."
 [fx bea:4]
 bea.s: Don't. Don't make it about you. They did it because they know I hear things. You just gave me a reason to write them down.
? "We'll make them regret it."
 [fx bea:6 clout:2]
 bea.h: Oh, I already started.
~ She takes a folded document from inside her coat. Glossy. "LUMEN · CLOSING KEYNOTE · RUN-SHEET · CONFIDENTIAL".
bea.n: Left it on the Lounge bar. Victor's assistant. While I was "eavesdropping" on my last shift. I didn't steal it. I picked it up to give it back. And then I got suspended before I could. Shame.
~ The run-sheet: Victor's keynote to the minute. 4:00 welcome. 4:06 "the room's own graph". 4:10 LANTERN reveal. And at the bottom, in Victor's handwriting: "Then we sign. 1313. Ashgrove has the pen."
[clue runsheet]
bea.n: 4:10. That's when he shows them the graph. If anyone was going to interrupt, I'd do it at 4:09.
? "Bea, you're incredible."
 [fx bea:12]
 bea.b: I'm a suspended bartender with a stolen run-sheet.
 > Like I said.
? "Are you going to be okay? Without the job?"
 [fx bea:10]
 bea.n: I've got savings. I've got a sketchbook. I've got a man who keeps saying "you could still go back".
 bea.d: Maybe I'll listen to him. Don't tell him.
`;
SC.bea5=`
[bg bar]
~ The bar, after midnight. Bea's suspension hasn't stopped her having a key. The chairs are up, the lights are down to one green lamp, and there's an easel set up where the jukebox should be.
bea.n: Sit there. On the stool. No, the other stool. The light's better. Don't smile. Don't not smile. Just be.
~ She paints you. Actual paint, a little travel set, on a board the size of a menu. Forty minutes. She doesn't talk. You've never been looked at so hard by anyone, or so gently.
* You think about the first night. "You're blocking the bar, hoodie." You think about how far it is from there to here.
~ She puts the brush down.
bea.n: Done. Don't look yet.
bea.d: I haven't painted anyone in six years. I've drawn a thousand people on napkins. But I haven't painted anyone, because painting's for people you want to look at for longer than a drink.
bea.n: I wanted to look at you for longer than a drink.
? "Can I see it?"
 [fx bea:12]
 ~ She turns the board round. It's you, on a bar stool, in green light. You look like someone who stopped pretending. You don't know how she saw that.
 bea.b: Well? Say something. I'm dying.
 > It's the best thing anyone's ever made of me.
 bea.h: It's the only thing anyone's ever made of you.
 > Still true.
? "I want to look at you for longer than a drink too."
 [fx bea:15]
 bea.b: ...Oh, you smooth idiot.
 ~ She comes round from behind the easel, and from behind the bar, which she never does, and kisses you with paint on her fingers.
? Kiss her
 [fx bea:15]
 ~ She has paint on her fingers. You'll find blue on your jaw tomorrow and never wash it off on purpose.
bea.n: I've applied. To go back. I did it this afternoon. The deadline's Friday. If I get in, I'll be thirty-one, in a room full of nineteen-year-olds, drawing hands.
bea.h: You said I could still go back. You said it like it was simple. So I did the simple thing.
`;

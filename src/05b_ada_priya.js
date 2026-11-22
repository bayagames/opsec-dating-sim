/* ============ ROUTES: ADA, PRIYA ============ */
SC.ada1=`
[bg ctf]
~ The CTF Arena on Village Row, at midnight. The room's half empty and twice as intense: forty people who will not sleep until the scoreboard does. The only light is laptop screens and the scoreboard on the wall.
~ Ada's at the end table by the window, as promised, with two energy drinks, a bag of satsumas and a laptop covered in a single enormous sticker of a cat in a spacesuit.
ada.h: You came back! After midnight! That's... that's commitment. Sit. We've got a binary.
> A what?
ada.n: A program. Compiled. No source code. It asks for a password, and if you give it the right one, it prints a flag. The password's inside it somewhere. We have to read the program to find it. That's reverse engineering.
ada.n: Think of it like... a locked box that has the key inside, but the key's been taken apart into pieces and scattered round the box, and you have to rebuild it.
[game pipe n=3 only=0,2,8 title="Reversing at midnight"]
~ Forty minutes later, the password's on the screen: "hunter2". Ada laughs so hard she has to put her head on the desk.
ada.h: HUNTER2. It's a joke. It's an ancient internet joke. Somebody spent four hours making a binary so they could make that joke. I love this community so much.
ada.n: Okay. Flag in. Fifty points. Satsuma?
~ You eat satsumas in the dark while the scoreboard ticks over. Somewhere around 2 AM, she stops typing.
ada.n: Can I ask you a question? Not a CTF question.
> Sure.
ada.a: Why did you join my team? Honestly. People don't. I'm... a lot. I talk about kernels at parties. I don't go to parties. I talk about kernels at the idea of parties.
? "Because you showed me the first flag. You didn't have to."
 [fx ada:8]
 ada.b: ...It was an easy flag.
 > It was the first one anyone's ever shown me.
? "Because you're the best person in the building at this."
 [fx ada:5 clout:1]
 ada.o: I'm not. I'm really not. There are people here who...
 > Eleven seconds. First blood.
 ada.b: ...That was an easy one.
? "Because I like talking about kernels at the idea of parties."
 [fx ada:9]
 ada.h: You don't know anything about kernels.
 > Teach me.
 ada.b: That's... the nicest thing anyone's said to me this year. Okay. Okay. Pull up a terminal.
~ She teaches you about kernels until four. You understand about a third. She doesn't mind. She seems to mostly want someone to say it to.
`;
SC.ada2=`
[bg ctf]
~ Ada waves you over to the end table so fast she knocks over a satsuma.
ada.o: Look at this. Look at this. Tell me I'm not imagining it.
~ On the scoreboard, between "baby-rev" and "warmup_04", a challenge you haven't seen. No category. No author. Title: "WHO'S WATCHING". Points: 0.
ada.n: The CTF team didn't write it. I asked. Twice. They checked their repo. It isn't in it. Someone injected a challenge into the scoreboard. That's... that's hard. That's really hard.
ada.n: Open it with me.
~ Inside: a single image. A photo of the con's Foyer from above, from somewhere high, with every visible badge circled in blue, and lines drawn between people standing near each other.
* It looks exactly like the galaxy from Lumen's reception. Done by hand. Like a warning.
ada.n: There's something in it. Hidden. In the least significant bits of the pixels. Steganography: hiding a message inside an image by changing each pixel's colour by an amount too small to see.
[game pipe n=2 only=4,12 title="Who's watching"]
~ The hidden message decodes, letter by letter, onto the screen:
~ "THE BLUE LIGHTS ARE LISTENING. EXPOSURE IS ART. EXPOSURE IS ALSO A WARNING. —M"
~ And the flag: CTRL{EXPOSURE_IS_ART}.
[clue cipher]
ada.n: "—M". It's signed. Who signs a CTF challenge? Who signs anything?
* WHISPER signed a note on the roof. Not with an M. But with a beer mat, which is worse.
? "Someone who wants us to know they're watching the watchers."
 [fx ada:6 skill:3]
 ada.a: That's... poetic. I don't like poetic. Poetic is how you end up with a flag hidden in a sonnet.
? "Submit it. Take the points."
 [fx ada:3 clout:2]
 ada.n: It's worth zero points. That's the point. It's not for points. It's a message.
~ Ada screenshots everything, timestamps it and saves it in three places, one of which is a USB stick shaped like a frog.
ada.n: I've been doing CTFs for nine years. Nobody has ever used the scoreboard to send a message before. This is the most exciting thing that's ever happened to me, and I'm scared, and I don't know which one I am more.
`;
SC.ada3=`
[bg quiet]
~ The Quiet Room. No phones, no talking above a whisper, beanbags and dimmers and a sign that says "THIS ROOM IS FOR BRAINS THAT ARE FULL". Ada's lying on the floor with her glasses on her chest, staring at the ceiling.
ada.n: Hi. Sorry. I'm full. My brain's full.
ada.d: Someone on the CTF channel said I only got first blood on Monday because I "must have seen it before". They said maybe I cheat. I've never cheated. I've never needed to. And I still read it eleven times.
~ You lie down on the floor next to her. The ceiling has glow-in-the-dark stars on it, the old cheap kind, half of them unstuck.
ada.n: Do you know what imposter syndrome is? It's when you're good at something, and you're absolutely, completely sure you're not, and that any minute someone will find out.
ada.d: I've had it since I was twelve. I won my first CTF at twelve and cried for a week because I thought I'd fooled everyone.
* A week ago you were a forum account that had never answered "source?". If anyone's an imposter, it's you.
? Tell her about packet_pam and "source?"
 [fx ada:12]
 > I posted that firewalls were a joke. Someone replied "source?". I never answered. Because I didn't have one. I was the imposter, Ada. A real one. You're just a person who's good at something and scared of it.
 ada.o: ...You never answered "source?"
 > Never.
 ada.h: That's so bad. That's so, so bad. Oh, I feel so much better. Is that awful? I feel amazing.
? "Imposters don't cry for a week. They don't care enough."
 [fx ada:10]
 ada.b: ...That's a really good point. That's annoyingly good.
? "Want me to go and find whoever posted that?"
 [fx ada:5 clout:2]
 ada.h: No! No. Violence is not the answer. Unless the answer is a buffer overflow.
ada.n: Can I tell you why I picked my team name? Null Pointers. A null pointer points at nothing. It's supposed to point at something, and there's nothing there, and the whole program crashes.
ada.d: That's what I feel like. A thing that should point at something real and doesn't.
> You pointed at me. On Tuesday. "Paste it, paste it."
ada.b: ...I did, didn't I.
~ The glow-in-the-dark stars are fading. Ada reaches over in the dark and finds your hand, and holds onto it like she's checking it's real.
ada.n: Not a null pointer, then. Just a pointer. Pointing.
`;
SC.ada4=`
[bg ctf]
~ Ada hasn't slept. Three laptops are open on the end table. She's built a little lab: a phone in a cradle, a network tap, a screen of scrolling packets.
ada.n: I did it. I did it. I reproduced Rin's findings. From scratch. Independently. I didn't look at his notes. I installed SafeSphere on a clean phone, captured every packet, and decoded them.
ada.n: Contacts: uploaded, all of them, on first launch. Location: every sixty seconds, even with the app closed. The VPN: copies every website you visit to a server called logs.lumen-cdn.io.
ada.a: And the beta. SafeSphere 2. It does the graph. For every contact, it queries a data broker. Address, job, income bracket. Then it scores them. People who never installed anything, scored.
[clue graphcode]
* Two people, independently, getting the same answer. That's the difference between an accusation and evidence.
ada.n: I wrote it up. Every step. With hashes. A hash is a fingerprint of a file: anyone can check that what I captured is exactly what I captured, and that nobody changed a byte. Anyone can run it tonight and get the same answer.
ada.n: That's the thing about this kind of proof. You don't have to trust me. You just have to run it.
? "You just made this impossible to deny."
 [fx ada:10 skill:3]
 ada.b: ...I did, didn't I. I made something undeniable. That's... that's the opposite of a null pointer.
? "Are you okay? You haven't slept."
 [fx ada:8]
 ada.n: I'm not okay. I'm the best I've ever been. Those are different things and both true.
 ada.d: Will you stay while I sleep? Here. On the bean bag. Just... somebody here. I don't sleep well in rooms on my own.
 ~ She sleeps for three hours on a bean bag in the CTF Arena with her glasses still on. You don't move the whole time.
? "You should be the one on stage on Sunday."
 [fx ada:7 clout:2]
 ada.o: Me? On stage? In front of everyone?
 ada.a: ...Only if you're there. Within ten metres. Five. Three.
`;
SC.ada7=`
[bg conroof]
~ The con roof, after the finals. Gravel, skylights, the Lumen logo turning on its frame. Ada's lying on her back on a tarpaulin she brought, specifically, for lying on her back under stars.
ada.n: Nobody else knows I come up here. I found the hatch on Monday. I've been coming up every night to not think.
ada.n: It's the only place in the building where my laptop gets no signal at all. It's very peaceful. Like being switched off.
~ You lie down next to her. The stars, here, are real ones.
if f('ctf_won')
 ada.b: We won. We won the CTF. I keep saying it out loud to check it's still true.
else
 ada.h: Third. Or second. Or whatever. I don't care. I don't care! That's new. I've never not cared before.
ada.n: Can I tell you something? I've compiled it. I've run it through tests. It passes every test.
? "Tell me."
 [fx ada:6]
? "Is it a kernel thing?"
 [fx ada:4]
 ada.h: It's not a kernel thing. Well. It's a bit of a kernel thing. A kernel's the core of an operating system. The part everything else runs on top of.
ada.n: I spent my whole life thinking I was faking it. And this week I met someone who actually was faking it, two weeks ago, and stopped. And it made me realise I never was.
ada.b: You're my kernel. That's the... that's the kernel thing. Everything else runs on top of you now. That's either the most romantic thing a computer scientist has ever said, or a crash report.
? "It's the most romantic thing anyone's ever said to me."
 [fx ada:15]
 ada.o: Really?
 > Really.
 ada.h: I'm writing that down. I'm writing it in a comment. In my code. Forever.
? Kiss her
 [fx ada:15]
 ~ Her glasses go crooked. She doesn't fix them. A satellite goes over, very slowly, and neither of you points it out.
? "Null Pointers forever."
 [fx ada:15]
 ada.b: Not null. Never null. Just... pointers. Pointing at each other.
~ She takes something out of her hoodie pocket and presses it into your hand: the ESC keycap. Or a copy of it. She's had a second one made, she says, at the badge lab, at 3 AM, out of solder.
ada.n: So you've always got a way out. And so you know you don't need it.
`;
SC.priya1=`
[bg soc]
~ The Blue Team SOC on Village Row: a mock security operations centre, walls of dashboards, people with headphones watching graphs for things that shouldn't be there. It's quiet in the way a hospital is quiet.
~ Priya's at the centre desk with her two phones and a third screen showing the con's network, live.
priya.n: Sit. You're going to learn the only thing in security that actually matters, and most people learn it last.
priya.n: Threat modelling. Four questions. What are you protecting? Who from? What happens if you fail? And how much effort is it worth?
priya.n: Everything else is detail. Encryption, firewalls, passwords. Detail. If you don't know what you're protecting from whom, you'll put a steel door on a tent.
> Can we do one for Ellie?
priya.h: The baker? Yes. Good. Let's.
~ She draws it on a whiteboard as you talk. What: the bakery, her orders, her money, her address. Who from: scammers with breach lists, and now, apparently, a data company with a forwarding rule. What happens: she loses her livelihood. Effort: enough. Not a bunker. A good lock, a password manager, two-factor, and not putting her home address on an About page.
priya.n: See? Not paranoia. Proportion. Paranoia is protecting everything from everyone forever. That's not security, it's anxiety with a budget.
? "Now do yours."
 [fx priya:8]
 priya.a: ...Mine?
 > Your threat model. What you're protecting.
 priya.d: That's a very personal question.
 priya.n: Ask me again sometime. When there's fewer dashboards.
? "And the con? What's the con's threat model this week?"
 [fx priya:6 skill:3]
 priya.n: Four thousand people. Protecting: their identities, their devices, their relationships. Who from: each other, a little. And the sponsor, a lot. What happens if we fail: ask the woman whose daughter's school went out on Wednesday.
[fx skill:5]
priya.n: You're good at this. You ask the second question. Most people stop at the first.
`;
SC.priya2=`
[bg soc]
~ Priya has WHISPER's message to you on one screen and a lot of numbers on another.
priya.n: Every message on the internet leaves tracks. Not the words. The envelope. Where it came from, which network, which tower, roughly when.
priya.n: WHISPER's DM came through an anonymising service, which is smart. But it came through it at 00:04 on Tuesday. And at 00:04, the hotel's access points logged exactly one new device connecting to an outside service like that.
priya.n: On one access point. Help me check which.
[game pipe n=2 only=3,7 title="Tracing the envelope"]
~ The access point's name scrolls up: HALCYON-F13-ROOF. The thirteenth floor. The one by the roof door.
[clue dmtrace]
priya.n: Top floor, by the roof. Someone sent you a message from about thirty metres from your bed.
* The roof. The silver hair. The beer mat.
priya.a: I'm not going to tell anyone this. Not Lumen, not con security. Because whoever WHISPER is, they're not who's dangerous this week. And the people who want them found are.
? "Thank you. For not handing it over."
 [fx priya:8]
 priya.n: Don't thank me. It's proportion. Remember? Who are we protecting, from whom.
? "You could have handed it over. Lumen's offering a reward."
 [fx priya:4 skill:2]
 priya.s: Ten thousand credits. I've seen the posters. I'm not for sale. Neither is anything I find.
~ She closes the screen. Then, after a moment, she takes off her headphones, which she never does.
priya.n: You asked for my threat model. The other day.
priya.d: ...Not yet. Soon. You asked the right question, though. I noticed.
`;
SC.priya3=`
[bg hotel]
~ Priya came to Room 1337 and asked to sit somewhere away from the window. She's in the armchair in the corner, her back to the wall, both phones face down on the arm.
priya.n: My threat model. You asked.
priya.n: Four years ago, I gave a talk at a smaller con. About stalkerware: apps people put on their partners' phones to track them. A man in the audience didn't like it.
priya.d: He found my flat from a photo I'd posted of my coffee. The window behind it. The tree outside. The bus stop. He worked it out from a bus stop.
priya.d: He sent me a photo of my own front door. Then another. Every week. For a year. The police said he "hadn't technically done anything". I moved twice.
* The photo of a front door. Like the one WH1SPER posted on Wednesday. No wonder she looked like that.
priya.n: So. What I'm protecting: my address. My routine. My face. Who from: him, still, probably, somewhere. What happens if I fail: he sends another photo. How much effort it's worth: all of it. Every day. Forever.
priya.n: That's why I'm like this. Not paranoid. Proportional. My threat is just bigger than most people's.
? "Thank you for telling me."
 [fx priya:10]
 priya.n: I've told four people. You're the fourth. The other three are a solicitor, a therapist and my mum.
? "Is he still out there?"
 [fx priya:6]
 priya.a: He's out there. He's in another city. I check. Every month. That's part of the effort.
? Take her hand, if she wants it
 [fx priya:12]
 ~ You offer your hand, palm up, on the arm of the chair, and don't move it. After a long time she puts hers on top of it.
 priya.d: I don't really... do this.
 > I know.
 priya.n: ...Don't move.
~ She stays for an hour. At some point, she turns one of her phones face up again, checks it, and turns it face down. Then she doesn't check it again.
`;
SC.priya4=`
[bg library]
~ The hotel library, late. Priya's taken over the long table with a laptop, a printed timeline, three highlighters and a mug of tea she's let go cold.
priya.n: Responsible disclosure. We're going to write it properly. Everything, in order, with dates. To the regulator first: the people whose actual job is to stop this.
priya.n: It's not glamorous. It's a long, careful letter. If you do it right, it's the most dangerous letter in the world.
~ You write it together. What SafeSphere collects. Rin's findings. Ada's independent reproduction. The hashes. The LANTERN-01 box. The badge firmware. Every claim with a source. Every source with a date.
[game spot keys=onboard,vpn,graph title="Checking the evidence"]
priya.n: Look at this line. "We believe." Delete it. We don't believe anything. We observed. We captured. We verified. Believing is for people without evidence.
* By midnight it's twenty-two pages long, and you understand every word of it, and you didn't, a week ago.
priya.n: We send it tomorrow at 11:42. I always send important things at an odd time. Nobody else does, so it's easy to find in a log.
[flag reg_draft]
priya.h: You did good. You really did. You never once tried to make it sound more exciting than it is. That's rare.
? "You make it look easy."
 [fx priya:6]
 priya.n: It's not easy. It's just practised. Like everything.
? "I want to do this. For a living. Like you."
 [fx priya:10]
 priya.o: ...Really?
 priya.b: The pay's bad, the hours are worse, and nobody thanks you when nothing happens, because nothing happening is the job.
 > I know.
 priya.h: Then you'll be good at it.
`;
SC.priya7=`
[bg quiet]
~ The Quiet Room, late. Glow-in-the-dark stars on the ceiling, half of them unstuck. Priya's on a bean bag with her knees up.
~ She holds up her phone so you can see the screen. Then she holds down the power button, and you watch it go black.
priya.n: That's for you. An hour. My phone, off. Nobody watching it. Nobody able to reach me. If he sends a photo, I won't see it for an hour.
priya.d: I haven't done that in four years. Not even to sleep.
* Four years of checking. Of proportion. Of effort, every day, forever. And she's turned it off.
? "Are you sure?"
 [fx priya:8]
 priya.n: No. That's what makes it mean something.
? Turn yours off too
 [fx priya:12]
 ~ You hold down the power button. Your screen goes black next to hers. Two dead phones on a bean bag in a room full of fake stars.
 priya.h: Now nobody knows where either of us are.
 > Except each other.
 priya.b: Except each other.
priya.n: My threat model's changed. Did you know that? It changed on Wednesday. I added something.
> What?
priya.n: What I'm protecting. I added you.
priya.d: It makes everything harder. More to protect. More to lose. Every security person knows: the more you care about, the bigger your attack surface.
priya.b: I don't care. I've decided I don't care. It's worth the effort. You're worth the effort.
? "So are you. All of it."
 [fx priya:15]
 ~ She leans her head on your shoulder. An hour, she said. It's two before either of you turns anything back on.
? Kiss her
 [fx priya:15]
 ~ She's careful about it, the way she's careful about everything. Then, for once, she isn't.
`;

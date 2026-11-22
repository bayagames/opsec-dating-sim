/* ============ ROUTES: YUKI, VESPER ============ */
SC.yuki0=`
[bg arcade]
~ The Retro Arcade: a dark room of old cabinets, glowing, beeping, smelling of warm dust. A crowd round one machine. In the middle of the crowd, a girl in an oversized red varsity jacket with a big white Y on it, short black hair with blue tips and headphones round her neck is playing a game you vaguely remember from childhood. Very, very fast.
~ She runs straight through a wall. The crowd gasps. She doesn't even look up.
yuki.s: Wall clip. Frame four hundred and twelve. Nobody breathe.
~ She finishes the level in a time that makes a man in the crowd put his hands on his head. Then she turns round and points at you.
yuki.h: You. You're the only one who didn't gasp at the wall clip. Why?
? "I didn't know you couldn't do that."
 [fx yuki:8]
 yuki.o: ...That's the best answer anyone's ever given. You're right. Why can't you? Who decided?
? "I was watching your hands, not the screen."
 [fx yuki:6 skill:1]
 yuki.s: Ooh. Watching the input, not the output. Hacker brain. I respect it.
? "I gasped on the inside."
 [fx yuki:5]
 yuki.h: Ha! Okay. Inside gasps count.
yuki.n: Yuki. I speedrun. That's: finishing a game as fast as possible, any way possible, including ways the people who made it never imagined. Every game has bugs. I find the ones that are useful.
yuki.n: That's what a glitch is. A rule the designers forgot to write down. Come back sometime. I'll teach you to walk through a wall.
`;
SC.yuki1=`
[bg arcade]
yuki.h: You came! Okay. Cabinet three. Today you walk through a wall.
~ She stands behind you with her hands over yours on the joystick. It's an old platformer. A long corridor. A solid wall at the end.
yuki.n: Games don't really know where walls are. They check, every frame, "is the player inside a wall?" And if you're inside one, they push you out. The question is which way they push.
yuki.n: Run at it. Jump. On exactly the right frame, crouch. For one sixtieth of a second, the game thinks you're half inside, and pushes you... through.
[game timing kind=pins n=3 who=yuki mult=3 title="Frame-perfect"]
~ On the third try, you're through. The wall's behind you. On the other side: the end of the level, ten minutes early.
yuki.h: YES. You clipped! You're a speedrunner now! It's a curse! You'll see walls differently forever!
* You will. You already do. Every system's a building with walls that only exist because something checks for them.
yuki.n: That's the secret, by the way. Hacking, speedrunning, same thing. You don't break the rules. You find out what the rules actually are, not what everyone thinks they are.
? "That's the best explanation of hacking I've ever heard."
 [fx yuki:10 skill:3]
 yuki.b: ...Really? I've never said it out loud before. Usually I just say "it's a skip".
? "Can you find a glitch in anything?"
 [fx yuki:7 skill:2]
 yuki.s: Anything with rules. Which is everything. People too. People have the best glitches.
`;
SC.yuki2=`
[bg hallA]
~ Yuki's dragged you to Hall A between talks, up to the back of the bowl, by the AV booth's window. She's pointing at a cable.
yuki.n: I was bored during the keynote rehearsal yesterday. So I watched the screens. The big one and the six side ones. And they all glitched at the same time. One frame. Black.
yuki.n: A glitch on all seven, at once, means they share something. One source. So I followed the cables.
~ Behind the AV booth: a rack, a media server, a mess of cables, and one fat cable running to a little box with "MATRIX SWITCH" on it.
yuki.n: Every screen in Hall A goes through that switch. One input, seven outputs. And the switch has a little web page for controlling it. With the password... still the default. "admin". On the sticker. On the side.
* "admin". Like your router at home. You know. You KNOW.
? "So if someone logged into that switch..."
 [fx yuki:8 skill:3]
 yuki.h: They'd own every screen in Hall A. One click. Frame-perfect, if they practised.
 [flag yuki_switch]
? "We should tell the AV team."
 [fx yuki:6 skill:2]
 yuki.n: I did. They said "thanks, we'll change it after Sunday". After Sunday. After the biggest keynote of the week.
 [flag yuki_switch]
 yuki.s: People always fix the glitch after the speedrun.
yuki.n: I'm not saying anything. I'm just saying it's there. Glitches are there whether you use them or not.
`;
SC.yuki3=`
[bg arcade]
~ The arcade, quiet. Yuki's not playing. She's sitting on the floor with her back against a cabinet, headphones on, nothing in them.
yuki.n: Two years ago, at a big speedrun marathon. On stage. Livestream. Two hundred thousand people watching. I was going for the world record in this game. This exact one. Cabinet three.
yuki.d: And I was ahead. By four seconds. On the last level. And then I missed one frame. One sixtieth of a second. And everything fell apart. Two hundred thousand people watched me fall into a pit I've cleared ten thousand times.
yuki.d: I didn't play for six months. I still can't play in front of people without my hands shaking. You saw them on Monday. You were watching my hands.
? "You walked through a wall in front of fifty people on Monday."
 [fx yuki:10]
 yuki.o: ...I did, didn't I.
 > Your hands were shaking. You did it anyway.
 yuki.b: I didn't know anyone could see that.
? "One frame doesn't make you."
 [fx yuki:10]
 yuki.n: It does, in speedrunning. That's the whole sport. One frame.
 > Then speedrunning's wrong about you.
 yuki.h: That's... a glitch in my logic. A good one.
~ She pulls herself up, puts a coin in cabinet three and hands you player two.
yuki.n: Play with me. Not for time. Just play.
~ You play for an hour. She doesn't look at the timer once.
`;
SC.yuki4=`
[bg hallA]
~ Hall A, after hours, empty, every seat folded up, the screen a dark grey wall. Yuki's up in the AV booth with a laptop and a stopwatch.
yuki.n: Sunday. If anyone needed every screen at exactly the right moment. Hypothetically. I've timed it.
yuki.n: The switch takes eight frames to change input. That's a third of a second. Victor's run-sheet says the LANTERN reveal is at 4:10, which means the switch to his graph will happen at about 4:09 and 58 seconds. If you send a different input at 4:09 and 57, you win the race. Frame-perfect.
? "You've practised this."
 [fx yuki:8 skill:2]
 yuki.s: Forty times. On the empty screens. In the dark. It's the best route I've ever planned.
? "Your hands. In front of two thousand people."
 [fx yuki:10]
 yuki.d: ...I know. That's why I've practised it forty times.
 yuki.h: But this time I'm not falling into a pit. This time I'm the wall clip.
[flag yuki_ready]
yuki.n: Will you be in the hall? Where I can see you from the booth? So I've got something to look at that isn't the timer.
`;
SC.yuki7=`
[bg arcade]
~ The Retro Arcade after closing. Yuki has a key she shouldn't have. Every cabinet's on, glowing, beeping to itself in the dark, attract modes looping.
yuki.h: Ours. The whole arcade. For an hour. Pick a game. Any game. Two-player.
~ You play everything. You lose at everything. On the last one, a fighting game with very loud sound effects, you win. She makes a noise like she's been shot.
yuki.a: You... cheated. You must have cheated. Did you find a glitch?
> You let me win.
yuki.s: I did NOT let you win. I would never let anyone win. I'm a professional.
yuki.b: ...Okay, I dropped one input. One frame. On purpose. You'll never prove it.
~ She sits on the edge of cabinet three, swinging her legs.
yuki.n: I've spent my whole life going fast. Getting to the end as fast as possible. Skipping everything in the middle.
yuki.d: This week I didn't want to skip anything. Every hour with you, I wanted to go slower. That's never happened before. I don't know how to play it slow.
? "Then let's go slow. No timer."
 [fx yuki:15]
 yuki.h: No timer. Any percent. No skips.
 > No skips.
 yuki.b: That's the hardest category there is.
? Kiss her
 [fx yuki:15]
 ~ The cabinets loop their attract modes. GAME OVER, says one of them. INSERT COIN, says another. PLAYER TWO HAS JOINED, says cabinet three, which she swears was a coincidence.
? "I'm in love with you. No glitch."
 [fx yuki:15]
 yuki.o: ...Frame-perfect. That was frame-perfect.
`;
SC.vesper1=`
[bg pool]
~ The hotel pool, early. Steam on the water, the smell of chlorine and eucalyptus from the spa next door. Vesper's on a lounger in a black robe and enormous sunglasses, with an espresso.
vesper.s: Darling. You're up early. I'm always up early. Singers sleep in the afternoon. Like cats.
~ She pats the lounger next to hers. It's not a question.
vesper.n: Tell me everything. About this week. About WHISPER. Everyone's talking about WHISPER. You seem like someone who listens to what everyone's talking about.
* Again. Lightly. Like someone checking a door handle in passing. Second time.
? "I don't know anything about WHISPER."
 [fx vesper:6 skill:2]
 vesper.h: Of course you don't. Nobody does. That's the fun.
 * She sips her espresso and watches you over the top of her sunglasses, the way she watches a room.
? "Why do you keep asking about WHISPER?"
 [fx vesper:4 skill:3]
 [flag vesper_wary]
 vesper.s: Do I keep asking? I suppose I do. I'm drawn to people who can make a room go quiet. Professional jealousy.
 vesper.a: You notice what people ask twice. That's a rare thing in a man.
? "Tell me about you instead."
 [fx vesper:8]
 vesper.o: Me? Nobody asks about me. They ask about the song.
 vesper.n: I grew up in Lisbon, and then Paris, and then a lot of hotel rooms. I sing in lounges because lounges are where people tell the truth after midnight. I like hearing it.
vesper.n: Come to the second set tonight. I'll sing something slower than you've ever heard.
~ She stands, drops the robe and dives into the pool in one movement, barely a splash. When she comes up, she doesn't look back.
`;
SC.vesper2=`
[bg lumenlounge]
~ The Lumen Lounge after closing. The chairs are up. One lamp by the piano. Vesper's at the piano bench in her black dress, shoes off, playing chords to nobody.
vesper.n: Sit, darling. The last set's for whoever stays. Tonight, that's you.
~ She sings. Not one of the jazz standards. Something in Portuguese, slow, low, the kind of song you understand without the words. She doesn't watch the room this time. There's no room to watch. She watches you.
~ Halfway through, she reaches up to her ear without thinking, as if to adjust something. There's nothing there. She lets her hand fall.
if clue('earpiece')
 * The earpiece. She isn't wearing it tonight. Her hand went to where it usually is.
vesper.n: That song's about a woman who sings for a living in a city that isn't hers. She doesn't know who she's singing for. Every night someone different. Every night, nobody.
vesper.d: I've sung it four hundred times. Tonight's the first time I knew who it was for.
? "Who are you, Vesper?"
 [fx vesper:8 skill:2]
 vesper.s: A singer, darling.
 vesper.d: ...Ask me again in two days. Ask me somewhere with no Lumen logo in it.
? "That was beautiful."
 [fx vesper:10]
 vesper.b: It was a sad song sung slowly.
 > It was more than that.
 vesper.d: ...Yes. It was, wasn't it. That's dangerous.
? Sit next to her on the bench
 [fx vesper:10]
 ~ She shifts over. You sit. She plays the last chords with one hand, and the other finds yours on the bench, and stays there.
`;
SC.vesper3=`
[bg spa]
~ The hotel spa. Low light, warm stone, the sound of water. Vesper's in the steam room's doorway in a white robe, and she pulls you in without a word and shuts the door.
vesper.n: No cameras in here. No microphones. The steam ruins them. I checked.
vesper.a: Listen to me. Silas Krall. You've met him. He's been asking about you. Not WHISPER. You. Who you meet. Where you go. What time you go to bed.
vesper.a: He has your schedule. He has everyone's schedule. The badges. And he has people who aren't Lumen, watching people who aren't Lumen.
~ She holds up her hand. A signet ring, heavy, old gold. On the face of it, engraved: a long pole with an axe head and a spike. A halberd.
[clue ring]
vesper.n: You don't know what that is. You will. Don't trust anyone who wears one. Including me.
* Including me. She said it in the steam, where nothing can record it.
? "Are you warning me, or threatening me?"
 [fx vesper:6 skill:3]
 vesper.d: I'm warning you. I've never warned anyone before. It's against every rule I was given.
? "Then why tell me?"
 [fx vesper:10]
 vesper.b: Because you asked about me. At the pool. Nobody asks about me.
~ She leaves first. You count to sixty, like she told you to, before you follow.
`;
SC.vesper4=`
[bg garden]
~ The Halcyon Garden at night. Little lights in the trees. Vesper on a bench in a dark coat, no pearls, no ring, no earpiece. Her hair's tied back. She looks like someone else. She looks like someone.
vesper.n: Sit. I'm going to tell you the truth. Then you're going to decide what to do with it, and I'll accept whatever you decide.
vesper.n: I work for Halberd. A private intelligence firm. Governments, companies, rich men with problems. I'm what they call an asset. I make friends with people, and listen to them, and write it down.
vesper.n: They sent me here to find WHISPER. Because Halberd is buying LANTERN from Lumen, and WHISPER is the only person who could ruin the sale. And their graph said: WHISPER sent a message to {h}. Start with {h}.
[clue vconfess]
vesper.d: So I sang a song for the new face by the bar. And I asked you about WHISPER. Twice. And I wrote down your answers.
vesper.d: And then you asked about me. And I stopped writing things down.
* Every moment. The pool. The piano. The steam room. Some of it was a job. She's telling you which parts weren't.
? "Did you tell them anything about me?"
 [fx vesper:6 skill:2]
 vesper.n: The first two days. Your schedule. Who you sat with. Nothing since Wednesday. I've been sending them nothing, beautifully, in long reports.
? "Why are you telling me?"
 [fx vesper:10]
 vesper.b: Because I don't want to be an asset any more. I want to be a person who sang a song for you. Just that.
? "I don't know if I can trust you."
 [fx vesper:6]
 vesper.d: You shouldn't. Not yet. I'm asking you to anyway.
vesper.n: The signing is Sunday. Suite 1313. A man called Ashgrove. If you want to stop it, I can tell you everything I know. If you want me gone, I'll be on a train in an hour.
vesper.n: Choose, darling. I've never let anyone choose for me before.
`;
SC.vesper7=`
[bg roof]
~ The hotel's roof terrace, the night before. The pool lights are off. Vesper's standing at the parapet, in a plain black dress, no pearls, no ring. And no earpiece. You can see the little red mark where it used to sit.
vesper.n: I took it out. This afternoon. I dropped it in the pool. Halberd will notice in about an hour. Then I'm a loose end.
vesper.s: I've never been a loose end. It's rather exciting.
~ She turns to face you.
vesper.n: Four hundred times I've sung that song for nobody. Tonight I'd like to sing it for somebody. No room. No one listening. Just you.
~ She sings. Up here, in the wind, with no microphone, her voice is smaller than in the Lounge, and rougher, and more real. The city doesn't hear it. You do.
? "I trust you."
 [fx vesper:15]
 vesper.b: ...Say it again. Slowly. Like a song.
 > I trust you.
 vesper.d: Nobody's said that to me since I was nineteen.
? Kiss her
 [fx vesper:15]
 ~ No earpiece. No report. Nobody writing it down.
? "I'm in love with you. The real one. Whoever she is."
 [fx vesper:15]
 vesper.n: She's from Lisbon. Her name's not Vesper. She's tired, and she sings in the bath, and she's never been in love before.
 vesper.b: Until about Wednesday.
`;

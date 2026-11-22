/* ============ ROUTES: PETRA, ASTRID ============ */
SC.petra0=`
[bg carhack]
~ The Car Hacking Village on Village Row. Half a car on a stand, its dashboard torn out and wired to three laptops. A row of steering wheels bolted to a bench. Somebody is making a car door unlock and lock by typing.
~ Under the half-car, a pair of boots, a grubby set of coveralls tied at the waist, and a voice swearing beautifully in what you think is Czech.
petra.a: Kurva! Okay. Okay. Come on, you little... there.
~ The car's hazard lights start flashing in time to a song. She rolls out from under it on a creeper board: black hair in a high ponytail, an earring, a smear of grease across her cheek like warpaint.
petra.h: Ha! Did you see? Hazards on the beat! I've been trying for an hour. Hello! You're standing in my light.
? "How did you do that?"
 [fx petra:8 skill:2]
 petra.n: Cars are just computers with wheels and anxiety. Inside every car there's a network called the CAN bus. Every part shouts what it's doing to every other part. "I'm the brake!" "I'm the indicator!" And everyone listens.
 petra.h: So if you plug in and shout "I'm the indicator!" at the right time, the car believes you. Nobody checks who's shouting. Fifty years of cars, and nobody checks.
? "Is that legal?"
 [fx petra:5 skill:1]
 petra.s: It's MY car. Well. It's this car's front half, which I bought from a scrapyard for forty quid. I can do what I like to my own front half.
? "Sorry. I'll move."
 [fx petra:4]
 petra.h: No, stay! Hold this. Don't lick it.
petra.n: Petra. Petra Novak. I rebuilt my dad's Škoda from scrap when I was sixteen. Then I started wondering what it was thinking. Now I wonder what every car's thinking. Most of them are thinking about where you are.
`;
SC.petra1=`
[bg carhack]
petra.h: You're back! Good. Today we're going to make a car think it's going ninety while it's sitting on a stand. It's very funny. The dashboard gets so scared.
~ She hands you a laptop with a cable running into the half-car's dashboard. A stream of numbers scrolls up the screen: every message on the CAN bus, in hex.
petra.n: Each line is a message. The first bit says what it's about: speed, revs, doors, lights. The rest is the value. Find the speed one. It changes when I spin this wheel.
[game pipe n=2 only=0,7 title="Listening to the car"]
~ You find it. You change it. On the stand, the dashboard's speedometer swings to ninety, and an alarm pings, and Petra laughs so hard she has to sit on the floor.
petra.h: Look at it! It's terrified! It thinks we're on the motorway! It's a front half in a convention centre!
~ Then she goes serious.
petra.n: This is the funny part. The not-funny part is that newer cars don't just talk to themselves. They talk to the manufacturer. Over the phone network. Where you drive, how fast, how hard you brake, when you're at the pub car park.
petra.a: And then the manufacturer sells it. To data brokers. To insurers. Your car's a snitch, {h}. Every new car's a snitch.
* Insurers. Gary's voice: "Underwriting can see where customers drive". LifeScore.
? "My company's an insurer. They've got a dashboard called LifeScore."
 [fx petra:8 skill:3]
 [flag heard_lifescore]
 petra.o: LifeScore? Oh, I know LifeScore. LifeScore's the worst one. Where does LifeScore get its data, do you know?
 > I think I'm finding out.
? "Can you stop a car snitching?"
 [fx petra:6 skill:2]
 petra.n: You can pull a fuse. The telematics box. Then it can't phone home. The manufacturer will send you angry letters. Frame them.
`;
SC.petra2=`
[bg carpark]
~ The car park. Petra's sitting in the open boot of a battered green Škoda estate with three hundred thousand miles on the clock and a single working speaker playing Czech punk.
petra.n: Dad's car. Rebuilt it from a shell. Every bolt. The radio's original. The speaker isn't, it's from a washing machine. Long story.
petra.n: Look at this. I was poking at car apps last night. The ones where you can unlock your car from your phone. Six of the big ones.
~ Her laptop: the inside of a car app, decompiled, the way Rin does it.
petra.a: Five of them have the same little library inside. A chunk of code that every one of them includes. Guess what it's called.
~ libsafesphere_sdk. Version 2.1. "Lumen Analytics. Relationship and mobility insights."
petra.n: SafeSphere. Inside the car apps. Your car's location, and your phone's contacts, going to the same company. They don't just know where you drive. They know who's in the car with you.
* It's everywhere. The privacy shield is a fishing net, and they've hung it from everything.
? "That's how LifeScore knows where people drive."
 [fx petra:8 skill:3]
 petra.o: ...Your insurer. Your actual insurer is buying this.
 > My actual employer.
 petra.a: Kurva.
? "Can you write this up? Properly?"
 [fx petra:6 skill:2]
 petra.n: I'm writing it up so properly they'll frame it in the regulator's office. With a little drawing of a snitching car.
[flag petra_sdk]
`;
SC.petra3=`
[bg carpark]
~ Midnight. Petra's in the driver's seat of the Škoda with the engine running and the passenger door open.
petra.h: Get in. Windows down. We're going for a drive.
~ The Conference Quarter at night, slow, windows down, the washing-machine speaker playing something with a lot of accordion. Round the plaza. Down the boulevard, past the closed-off ends with their police tape and the city blocks with all their lights on. Round again.
petra.n: When I was little, Dad would drive me round Brno at night when I couldn't sleep. Just round and round. He said the car was the only place nobody could phone him.
petra.d: He drove a taxi. Twenty years. And then the taxi company put a box in every car that told the office where it was every second, and how fast it was going, and when it stopped. They fired him for a "pattern of unauthorised stops".
petra.d: The unauthorised stops were me. Picking me up from school. Every day at three. The box didn't know that. The box just knew he stopped.
* A box that knows where you stop and never asks why.
? "That's why you do this. All of it."
 [fx petra:12]
 petra.n: That's why. Every car I take apart, I'm finding the box that fired my dad.
? Put your hand on hers, on the gearstick
 [fx petra:12]
 ~ She doesn't say anything. She changes gear with your hand still on hers, very carefully, and laughs, and does it again.
~ Back in the car park she sits with the engine off for a long time.
petra.b: You're the first person I've driven round at night since Dad. Just so you know. It's a thing.
`;
SC.petra4=`
[bg carpark]
~ Petra grabs your arm the second you come out of the lift.
petra.a: Come. Look. Quietly. Car hacker quietly, not normal quietly.
~ Level B, the far corner, behind a pillar. A long black car with tinted windows, foreign plates and a parking permit on the dash from "Corvid Holdings · Executive Transport".
petra.n: It came in at six this morning. Nobody's got out. Then at nine a man with silver hair got out, and another man with a scar took him up in the service lift.
petra.n: And look. It's a new one. Telematics. It's snitching right now, to its own company. And I know that company's API. Badly written. Anyone can ask it where the car's been, if you know the plate.
? "Ask it."
 [fx petra:8 skill:3]
 [call riskRoll(1)]
 [game pipe n=2 only=11,7 title="Asking a car"]
 ~ The car's been to three places in the last day. The city airport's private terminal. This car park. And the back entrance of the Halcyon, by the service lift, four times.
 [flag heard_corvid]
 petra.a: Private terminal. Somebody flew in. Somebody important enough to have a jet and a car and a man with a scar.
? "We shouldn't. That's not our car."
 [fx petra:6]
 petra.n: ...You're right. You're annoying, but you're right. We watch, then. We don't touch.
 ~ You watch. At noon the silver-haired man comes back with a leather folder, gets in, and the car doesn't move.
 [flag heard_corvid]
petra.n: Corvid Holdings. Write that down. Somebody you know will know what it means.
`;
SC.petra5=`
[bg carpark]
~ The top deck of the car park, open to the sky. The Škoda's parked facing the city, engine off, all four windows down. Petra's sitting on the bonnet.
petra.n: Come up. Bonnet's warm. Best seat in the Conference Quarter.
~ From up here you can see everything: the hotel tower, the con's glass roof, the Lumen logo turning, the boulevard, the far shops, the city going on forever.
petra.n: I practised this. Out loud. To the car. The car was very supportive. Its one speaker agreed with everything.
petra.n: Okay. Here.
petra.d: I don't trust people. I trust engines. Engines tell you what's wrong. People say "I'm fine" and then they fire your dad for picking you up from school.
petra.b: But you... you're like an engine. You say what you mean. You show your workings. You asked before you looked at that car. Nobody asks before they look at anything.
petra.h: I'm in love with you. Like a car in love with the open road. That's the line. I practised it. It's terrible. Is it terrible?
? "It's perfect."
 [fx petra:15]
 petra.h: It's not perfect. It's from a song. A Czech one. About a tractor.
 > Still perfect.
? Kiss her
 [fx petra:15]
 ~ The bonnet's warm. The city's loud. The one speaker plays the tractor song very quietly in the background, which she swears she didn't plan.
? "I love you too. Drive me round at night? When I can't sleep?"
 [fx petra:15]
 petra.b: ...Every night. Round and round. No phones.
~ She takes the spark plug keyring, if you gave her one, or her own, and hangs it from your finger.
petra.n: Spare key. To the Škoda. Don't lose it. There's only two in the world, and the other one's in my boot.
`;
SC.astrid0=`
[bg aero]
~ The Aerospace Village. A satellite dish on a tripod, a model of the space station hanging from the ceiling, people with radios listening to things that aren't on Earth.
~ A woman with a long platinum braid, round gold glasses and a starry cardigan is sitting cross-legged on a table with headphones on, smiling at nothing.
astrid.n: Shh. Sorry. Listen. That's a satellite. It's saying hello.
astrid.h: I'm Astrid. I listen to the sky. It's mostly weather and planes and satellites saying "I'm here". It's very honest, the sky. Everything up there announces itself.
[fx astrid:5]
astrid.n: Put these on.
~ She puts the headphones on you. A hiss. Then a tick-tock, tick-tock, like a clock dreaming. A weather satellite, eight hundred kilometres up, drawing a picture of the clouds one line at a time.
astrid.n: Everything with a radio talks. Satellites, planes, ships, phones, badges. Most of it you're not meant to listen to. Some of it you are. The trick is knowing which is which, and being polite.
`;
SC.astrid1=`
[bg aero]
astrid.h: You came back! Good. Today I'm going to teach you to listen. Properly.
~ She hands you a little USB stick with an antenna on it. A software-defined radio: a radio that's mostly a computer program, she explains, so it can tune to almost anything.
astrid.n: It costs less than a pizza. It can hear planes, weather satellites, the space station, and anything with a little radio in it. Including...
~ She tunes it. A waterfall of colour scrolls down her screen: the radio spectrum, live. One band is crowded with tiny bright dots, pulsing, constantly.
astrid.n: ...badges.
astrid.d: Every badge in the building. Every two seconds. And each one's saying a list of the others. Listen.
[game pipe n=2 only=11,7 title="Listening to the badges"]
[clue beacons]
astrid.n: It's beautiful, in a horrible way. Like a flock of starlings, and each starling's telling on all the others.
? "Can you tell who's next to who? From here?"
 [fx astrid:6 skill:3]
 astrid.a: If I wanted to. In about an hour. With a laptop and no conscience. That's what frightens me. It's so easy.
? "It's still beautiful. The waterfall."
 [fx astrid:9]
 astrid.b: ...You think so? Most people see noise. I see the sky full of voices.
`;
SC.astrid2=`
[bg conroof]
~ The convention centre's roof, after dark. Astrid's set up a little telescope on a tripod and a camping mat, and a flask of hot chocolate. The Lumen logo turns thirty metres away, but she's turned her back to it.
astrid.n: The best sky in the city. The hotel's in the way of the light from the east. Sit. Look up.
~ You lie on the mat. She points.
astrid.n: That's Jupiter. Not a star, a planet. Steady light. Stars twinkle, planets don't.
astrid.n: That's Vega. Twenty-five light years. The light you're seeing left it when you were small.
astrid.h: And that, moving, slowly, see it? That's not a star. That's a satellite. Pretending. It's catching the sun up there even though it's dark down here.
~ You watch it cross the whole sky in four minutes, silent, steady.
astrid.n: There are eight thousand of them now. Most of them looking down. Counting things. Cars, crops, ships, people.
astrid.d: I used to think space was the one place nobody was watching. Turns out it's where all the watching happens from.
? "Then why do you love it?"
 [fx astrid:10]
 astrid.n: Because it doesn't lie. A satellite says what it is, on a frequency anyone can hear. It's the people down here who hide what they are.
? Hold her hand under the stars
 [fx astrid:10]
 ~ Her hand is cold from the telescope. She doesn't pull it away. She names constellations with your hands, tracing them across the sky.
`;
SC.astrid3=`
[bg aero]
~ Astrid's taken down the space station model to dust it, carefully, like an heirloom.
astrid.n: I worked at the Swedish space agency. Ground station. In the north, above the Arctic Circle, where the satellites come down to talk. I was twenty-three. It was the best job in the world.
astrid.d: And then they started selling the data. Pictures of people's fields to insurance companies. Pictures of fishing boats to whoever paid. Pictures of protests to... people who wanted pictures of protests.
astrid.d: I asked who the protest pictures went to. Twice. In writing. The third time, they said my contract wasn't being renewed.
* The same story. Every person here has the same story with a different logo on it.
astrid.n: So now I listen. For free. To things that say what they are. And I teach people to listen too, because the more people can hear the sky, the harder it is for anyone to own it.
? "You were right to ask."
 [fx astrid:12]
 astrid.b: I know. It still cost me the aurora. You can't see the aurora from here. Too much light.
? "One day you'll go back north."
 [fx astrid:10]
 astrid.h: One day. With someone. To show them the aurora. It looks like the sky's being played like a violin.
`;
SC.astrid4=`
[bg aero]
~ Astrid's got a map of the sky on one screen and a map of the city on the other, and they're both full of little moving aircraft.
astrid.n: Every plane shouts where it is. Twice a second. Position, height, speed, an ID. It's called ADS-B, and anyone can hear it, on the radio you're holding. Planes are very honest.
astrid.n: Including private jets. They can ask not to be shown on the public websites. But they still have to shout. The radio doesn't care what they asked.
if f('heard_corvid')
 > Can you find a plane belonging to Corvid Holdings?
 astrid.h: Can I? Watch.
else
 astrid.n: I've been playing a game. Finding interesting jets. Look at this one: registered to a company called Corvid Holdings. Arrived this morning.
[game pipe n=2 only=11,1 title="Listening to a jet"]
~ A Gulfstream. Registered to Corvid Holdings via a trust in an island nobody can find on a map. Landed at the city airport's private terminal at 06:12 this morning. Before that: four trips this year to the same airport outside the capital, next door to a building with no name on it.
astrid.n: That's Halberd's building. Everyone in my old job knew it. The private intelligence people. The ones who bought the protest pictures.
[clue jet]
[flag heard_corvid]
astrid.d: They're here. The people I wouldn't sell pictures to. They're here, at a hacker con, for something.
`;
SC.astrid5=`
[bg conroof]
~ The con roof, the night before. Astrid's checked a forecast. It's the peak of a meteor shower, and the sky's clear, and she's laid out two camping mats and one very large blanket.
astrid.n: The Perseids. Well, not the Perseids, it's the wrong month. These are much smaller. But they're here. Lie down. Look north-east.
~ You lie down. For a while, nothing. Then one: a thin bright scratch across the dark. Then another.
astrid.h: That's dust from a comet. Burning up a hundred kilometres above your face. Nobody owns it. Nobody's watching it. It's just beautiful and then gone.
~ You count them together. Eleven. Twelve. At fifteen she stops counting.
astrid.n: I've spent years listening to everything up there that says what it is. And I met someone who says what they are too.
astrid.b: You said, on the train, "is that legal? Listening?" And I thought: oh. He worries about the right things.
astrid.n: I'd like to take you north. To the ground station. Not to work. To see the aurora. The sky played like a violin. I've never wanted to show it to anyone before.
? "Yes. Show me the aurora."
 [fx astrid:15]
 astrid.b: ...Yes? Really?
 > Really.
 astrid.h: In February. It's best in February. It's minus thirty. You'll hate it. You'll love it.
? Kiss her
 [fx astrid:15]
 ~ Meteor sixteen goes past while neither of you is counting.
? "I'm in love with you."
 [fx astrid:15]
 astrid.b: Oh. That's... louder than a satellite. I heard it on every frequency.
~ She takes a tiny glass vial out of her cardigan pocket, with a fleck of dark rock inside. If you gave her a meteorite, it's that one. If you didn't, it's her own.
astrid.n: Something that fell from the sky. So you've got a bit of it, down here.
`;

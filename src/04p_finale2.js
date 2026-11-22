/* ============ THE NEW WAYS SUNDAY GOES: keynotes, the roof, six more endings ============ */
SC.key_dump=`
[bg hallA]
~ 4:00 PM. Victor walks out into the light. "Privacy is a human right," he says, and the screen behind him turns blue.
~ At 4:01, on every phone in the hall, a link. Then on every phone in the country. "LANTERN-01: FOUR DAYS OF CTRL+ALT+CON."
if met('mira')&&!f('mira_taken')
 ~ Mira's on the roof with a laptop and a satellite modem. She doesn't look at the hall. She looks at the upload bar.
if f('dump_redact')
 ~ Priya and Ada worked through the night. No names. No badge numbers. Just the shape: four thousand dots, every meeting, every minute, and the box that was watching them all. The machine, in public, with the people taken out.
 ~ It's still enough. Journalists find the dot that met a regulator twice. Lawyers find the cluster around the press room. Nobody needs names to see what it was for.
 [call S.f.lantern_dead=1]
else
 ~ All of it. Raw. Four thousand badges with four thousand names. Who met whom, for how long, where. Affairs. Sources. A regulator's lunch. A teenager who spent four hours in the Quiet Room crying.
 ~ It kills LANTERN in one afternoon: nobody will buy a machine whose whole output is now public. It also does to four thousand people exactly what LANTERN was built to do.
 [flag dump_raw]
 [call S.f.lantern_dead=1]
victor.a: That's... that's stolen property. Security! That is stolen...
~ Nobody's listening. Two thousand people are reading about themselves.
[call S.f.end='dump']
`;
SC.key_trojan=`
[bg hallA]
~ 4:11 PM. "And here's someone who knows this community better than anyone." Victor turns to the wings. To you.
~ You walk out in a grey GUEST lanyard into a light so bright the hall disappears. The screen shows the graph. One dot, enormous, in the middle, pulsing. You.
victor.h: Tell them how SafeSphere made you feel.
> It made me the most watched person in this building.
~ You take the clicker out of his hand. It's very easy. Nobody expects the demo to move.
> Monday, 18:02, Badge 1337-0001. That's me. Tuesday, Hall C, forty minutes next to a student. Wednesday, the roof, a woman nobody's supposed to know about. Thursday, Room 1337, twelve people. That's my week. LANTERN has everyone's.
~ Two thousand people look down at the badges on their chests.
if f('rack_known')
 > And at 16:00, this demo was running on a box upstairs with a label that says "do not reboot".
 ~ Upstairs, Petra or Sunny or whoever you trusted pulls two power cables. The graph on the house-sized screen freezes with your dot in the middle, then goes black.
 [flag uplink_cut]
if clue('termsheet')
 > And this is the contract. Four hundred million pounds. Corvid Holdings. Here's the page with the price.
 [flag buyer_named]
[call S.f.lantern_dead=1]
[call S.f.end='trojan']
~ Victor doesn't try to take the clicker back. He just stands in the light, as if he's waiting for someone to tell him what his face should do.
`;
SC.key_rollback=`
[bg hallA]
~ 4:09 PM. "And this," Victor says, "is LANTERN." The graph blooms across the screen: four thousand dots, threads between them, breathing in time with the badges in the room.
~ In the NOC, Sunny says "go" into a radio. In the Badge Lab, Tilly presses enter.
~ The first row of the hall goes dark. Then rainbow. Then the second row. A wave, staggered, ten seconds front to back, every badge in the building rebooting to honest firmware, one row at a time.
~ On the screen behind Victor, the dots go out. Row by row. In the same order. Until there's nothing on the house-sized screen but a slowly turning blue shield and the words NO SIGNAL.
victor.a: What... Silas? Silas!
~ Two thousand people look down at their chests. Four thousand rainbows look back.
if met('tilly')
 tilly.h: (in your earpiece, sobbing) They're mine. They're all mine again.
> That was the demo. It needed your badges to work. It doesn't have them any more.
[flag uplink_cut]
[call S.f.lantern_dead=1]
[call S.f.end='rollback']
`;
SC.key_doublecross=`
[bg hallA]
~ 4:11 PM. "Someone who knows this community better than anyone." Victor puts his hand on your shoulder like a father at a wedding.
~ You're wearing the blue HEAD OF COMMUNITY lanyard. Your face is on the standee in the Foyer. Delphine's card is in your pocket: "I was sceptical. Then I saw what LANTERN can do for us."
if met('delphine')&&scn('delphine')>=2
 ~ In the wings, Delphine catches your eye, and slides a different card across the floor with her foot. It's in her handwriting. It's just one word long.
 * "Everything."
> I was sceptical. Then I saw what LANTERN can do. For them.
~ You point at Victor. And then you tell the hall what you saw from inside: the standee, the steak, the job offer, the term sheet, the box upstairs, the graph with your face in the middle.
~ Victor laughs for the first ten seconds, because he thinks it's a bit. Then he stops.
victor.d: ...You were never going to take it.
> I took it. I just took it somewhere else.
[flag buyer_named paper_out]
[call S.f.lantern_dead=1]
[call S.f.end='doublecross']
`;
SC.key_informant=`
[bg lumenlounge]
~ 4:00 PM. You watch the keynote from Suite 1313, on a screen, next to Silas Krall, with a coffee you didn't ask for.
~ Your friends move into position on the graph exactly where you told him they would be. The AV booth. The basement. The wings. One by one, a man in a grey suit arrives beside each dot, and the dot stops moving.
krall.n: You see? Nobody gets hurt. They just get... stopped. Before they do something they'll regret.
~ Victor finishes his keynote to a standing ovation. The demo is flawless. Mr Ashgrove, on the sofa, nods once.
* You did this. Every dot that stopped, you put there.
[call S.f.end='informant']
`;
SC.roof_loose=`
[bg plantdeck]
~ Evening. Krall asks you to come up to the roof "to talk about next steps". The wind's strong. The rig Mira used to sit beside is gone.
krall.n: You've been very useful. That's the problem with useful people. Afterwards they know exactly how useful they were. And to whom.
~ The man who came up with him walks to the edge of the plant deck and waits. Not looking at you. Looking at the drop.
krall.s: People fall off roofs at conventions, {h}. They drink, they climb, they want a photo of the city. It's very sad. I'll write something kind.
if romCount()>0
 [call S.f.saver=ROM.filter(loved).sort((a,b)=>aff(b)-aff(a))[0]]
 ~ The stairwell door bangs open.
 ~ {=CH[S.f.saver].name}. Out of breath. Furious. And behind them, two police officers who look like they took the stairs at a run because somebody wouldn't stop shouting at them.
 if S.f.saver==='bea'
  bea.a: I watched him walk you up here. I've watched men walk people places for six years. Not tonight.
 elif S.f.saver==='nyx'
  nyx.a: Fire door alarm. I disabled it last Tuesday. I enabled it again five minutes ago. They're coming.
 elif S.f.saver==='ellie'
  ellie.a: I don't care what you did. I DON'T CARE. You come here. NOW.
 elif S.f.saver==='mira'
  mira.a: You thought I wouldn't watch this roof? This is MY roof.
 else
  ~ They don't say anything. They just walk straight past Krall's man and take your hand, and hold on to it, and don't let go.
 ~ Krall looks at the police. Then at the person holding your hand. Then he smiles, very slightly, the way people smile at a game they've lost.
 krall.n: Love. I never could model it.
 * You did the worst thing you've ever done this week. Somebody still came up the stairs for you.
 [call S.f.end='informant']
else
 ~ Nobody comes up the stairs.
 ~ You think about Ellie. About cinnamon knots. About a forum post you wrote at fourteen, and the only reply it ever got.
 [call (S.f.end='lastlogin',S.endK='lastlogin')]
 [scene end_lastlogin]
`;
SC.end_dump=`
[hide]
if f('dump_raw')
 ~ LANTERN dies that afternoon. Nobody will pay four hundred million pounds for a machine whose output is on every phone in the country.
 ~ By Monday there are three divorces, two resignations, one journalist's source in hiding, and a teenager's afternoon in the Quiet Room trending under a hashtag.
 * You killed the machine by doing exactly what it does. It worked. You'll be thinking about the Quiet Room for a long time.
 [call epilogueCast(0)]
else
 ~ LANTERN dies that afternoon. The redacted graph is the most-shared image of the year: four thousand anonymous dots, and one box in a basement watching all of them.
 ~ The regulator calls it "the clearest evidence of covert surveillance we have ever been handed". Lumen calls it theft. Nobody's listening to Lumen any more.
 [call epilogueCast(1)]
[call romanceEpi()]
[end dump]
`;
SC.end_trojan=`
[hide]
~ "THE DEMO WAS ME." Your face, on stage, under a house-sized graph with your dot in the middle, is the photo every paper runs on Monday.
~ Halberd walks. Corvid Holdings dissolves itself by Wednesday. Victor is filmed leaving the Halcyon by the kitchen door with a coat over his head, which is a very old trick and nobody falls for it.
[call epilogueCast(1)]
[call romanceEpi()]
~ Marge finds you after. She takes the grey GUEST lanyard off your neck, looks at it, and puts it in her pocket. "For the museum," she says.
[end trojan]
`;
SC.end_rollback=`
[hide]
~ Four thousand rainbows in one dark hall. The clip is everywhere by five o'clock: a wave of colour running back through two thousand people, row by row, and a CEO pointing at an empty screen.
~ Without the badges, the proof of concept never existed. Halberd's man leaves before the applause stops. Tilly's firmware goes up on the internet that night, open source, with a note on the first line: "made with love and solder, and nobody else's code".
[call epilogueCast(1)]
[call romanceEpi()]
~ Sunny falls asleep in the NOC at 7 PM with her radio on her chest. Somebody puts a blanket on her. It might be Priya. It might be you.
[end rollback]
`;
SC.end_doublecross=`
[hide]
~ "LUMEN'S OWN HEAD OF COMMUNITY: 'I WAS INSIDE.'" The clip of Victor's hand on your shoulder, smiling, while you tell two thousand people what his company is, is played on every news channel for a week.
~ Your Lumen contract has a clause about "conduct". Your lawyer, if it's Noor, laughs at it for a full minute. Lumen never tries to enforce it.
[call epilogueCast(1)]
[call romanceEpi()]
~ The standee with your face on it ends up in Ellie's bakery, wearing a paper crown. She won't say who put it there.
[end doublecross]
`;
SC.end_informant=`
[hide]
~ LANTERN ships on Monday. Your name is not on any list. Your name is on a very short list, kept by a man who has since left Lumen for a firm with no name on the door.
~ Rin isn't arrested. Nobody is. They just... stop. Rin's report disappears from the internet. Priya's job offer is withdrawn. Ada's university receives a letter. Room 1337 never meets again.
if f('saver')
 ~ {=CH[S.f.saver].name} stays. You don't know why. You ask, once, and they say "because somebody has to stand next to you while you fix it", and you spend the next year trying.
 [call romanceEpi()]
else
 [call epilogueCast(0)]
* You were on the right list. It turns out to be a very lonely one.
[end informant]
`;
SC.end_lastlogin=`
[bg bakery]
[hide]
~ The news says a conference-goer fell from the roof of the Halcyon on Sunday evening. Alcohol is mentioned. A photo of the city is mentioned. Silas Krall's statement is very kind.
~ On Tuesday morning, at six, Proof opens. Ellie bakes forty-one cinnamon knots, puts them in forty-one paper bags, and draws a tiny croissant on every one.
~ She doesn't sell any of them. She stands at the window with the sign that says WE DO THINGS PROPERLY HERE, and she waits for someone who isn't coming.
if met('mira')&&!f('mira_taken')
 ~ That night, every phone in the city with SafeSphere on it shows the same notification, once, for one second, from an app that's about to stop working forever: "{H} WASN'T AN ACCIDENT."
* Krall doesn't keep sources. He spends them.
[end lastlogin]
`;
SC.after_dump=`
[bg office]
~ TWO MONTHS LATER.
if f('dump_raw')
 ~ A woman from the Quiet Room finds you. She's nineteen. Her afternoon is still the top result for her name.
 "The girl from the Quiet Room": You didn't mean it. I know you didn't. I just wanted you to see me. Once.
 ? "I'm sorry. Let me help you get it taken down."
  [flag aft_help]
  ~ It takes Noor four months and eleven letters. It comes down. It never fully goes away.
 ? "I'm sorry." Nothing else. There isn't anything else.
  ~ She nods, and goes. You think about her every time someone says "transparency".
else
 ~ The redacted graph is in a textbook now. Chapter nine, "Covert surveillance at scale". Priya sends you a photo of the page with your redaction notes visible in the margin.
 priya.n: The shape without the people. That's how you show a machine without becoming it.
[sum Aftermath: two months after the Dump.]
`;
SC.after_trojan=`
[bg hallA]
~ ONE YEAR LATER. CTRL+ALT+CON, TWENTY-FIRST YEAR.
~ Marge has put the grey GUEST lanyard in a glass case in the Foyer, next to a plaque. You walk past it eleven times before you can bring yourself to read it.
~ "Badge 1337-0001. The most watched person at CTRL+ALT+CON 20. They used it."
? Stand next to it for a photo
 ~ Rin takes it. In the photo, you're laughing, because Rin is doing a face.
? Walk on. Go to a talk. Be nobody for a day.
 ~ You sit at the back of Hall C for a beginners' CTF. Nobody looks at you twice. It's wonderful.
[sum Aftermath: a year later, your lanyard is in a glass case in the Foyer.]
`;
SC.after_rollback=`
[bg badgelab]
~ SIX MONTHS LATER.
~ Tilly's firmware has eight hundred contributors. Badges at other cons run it now. On the back of every one, in tiny writing, there's a line you've never seen anyone notice except you.
tilly.h: Read it. Out loud.
> "For the people who read the back."
tilly.b: There are thousands of you now. I put it there so you'd find each other.
[sum Aftermath: Tilly's firmware runs on badges all over the world.]
`;
SC.after_doublecross=`
[bg bakery]
~ THREE MONTHS LATER.
~ Victor Hale writes you a letter from his lawyer's office. It's two pages long. It's mostly about loyalty. At the bottom, in his own handwriting: "I did think you were very good at it."
? Frame it
 ~ It goes up in Proof's back room, next to the standee in the paper crown.
? Burn it
 ~ Ellie lets you do it in the bread oven. "It's a good oven," she says. "It's seen worse."
[sum Aftermath: Victor wrote you a letter.]
`;
SC.after_informant=`
[bg flat]
~ ONE YEAR LATER.
~ You've written to every person whose dot stopped moving that Sunday. Most don't answer. Rin answers, after nine months, with one line: "What do you want me to do with this?"
? "Nothing. I just wanted you to know I know."
 rin.d: (a week later) ...ok. I'm still angry. I'll be angry for a while. But I read it.
? "Let me fix what I can."
 [flag aft_fix]
 rin.n: (a month later) There's a list. Everyone they stopped. Start at the top.
[sum Aftermath: a year of letters to the people you sold.]
`;
SC.after_lastlogin=`
[bg station]
~ ONE YEAR LATER.
~ Central Station, a Thursday. Pia plays a song she's never played before, to a concourse that doesn't stop. It's short, and a bit sad, and it's called by your handle.
~ A woman in a cardigan stands at the back and listens to all of it. When it's finished she drops a note in the violin case. "source: everyone who knew them."
`;
/* clues the branches turn up */
Object.assign(CLUE,{
 dropmap:{s:'The dead drop',t:'WHISPER\'s drop: "The blue lights go to a box. The box has a name."',m:['m2','m5']},
 jonahcode:{s:'The man who built it',t:'Jonah Reyes wrote LANTERN\'s graph engine at Lumen, thinking it was for fraud detection, then tried to take it back.',m:['m9','m4']},
 lanterndump:{s:'Badge 1337-0001',t:'The first badge LANTERN-01 tracked at the con was yours. WHISPER had made you its decoy.',m:['m4','m2']},
 termsheet:{s:'The term sheet',t:'£400,000,000. Corvid Holdings. Signing after the keynote, Suite 1313.',m:['m8']},
 sellout:{s:'Two folders',t:'Victor has a folder with Krall\'s name on it. Krall has a phone Victor never sees. Each is ready to sell the other.',m:['m3']},
 vleak:{s:'Thursday night at the bar',t:'Vesper asked Bea which room the "hacker party" was in, the night before the raid.',m:['m6','m11']}});
for(const c of['dropmap','jonahcode','lanterndump','termsheet','sellout','vleak'])for(const m of CLUE[c].m)if(MYST[m]&&!MYST[m].ev.includes(c))MYST[m].ev.push(c);
/* people you can lose this week */
const GONE={mira:()=>f('mira_taken')||f('mira_gone'),vesper:()=>f('vesper_cut')||f('vesper_gone')};
const ROUTEBLOCK={mira:()=>f('mira_taken')?'Krall has her':f('mira_burned')&&!f('mira_amends')?'she doesn\'t trust you any more':f('mira_gone')?'she\'s gone':null,
 sunny:()=>f('sunny_burned')?'she remembers you lied to her':null,vesper:()=>f('vesper_cut')?'you sent her away':f('vesper_gone')?'she left without saying goodbye':null};
/* whoever you love is still with you after, unless you aren't */
const ROMAFTER={ellie:['Ellie\'s still drawing tiny croissants on paper bags. Now they say "ours".','Ellie keeps the bakery open, and a stool by the till for you.'],nyx:['Nyx still won\'t say "girlfriend". She says "the one I don\'t pick".','Nyx stayed. She says she\'s "between jobs". She\'s not looking for one.'],ada:['Ada enters every CTF as a team of two. You lose most of them. She keeps every scoreboard.','Ada visits on weekends with a whiteboard and a new problem.'],priya:['Priya switches her phone off every Sunday now. For you.','Priya still checks your Bluetooth every morning. It\'s how she says I love you.'],juno:['Juno streams under her real name now. Sometimes you\'re in the back of the shot.','Juno keeps the camera off when you visit.'],kit:['Kit made the jacket. One pocket. You know whose hand.','Kit still builds armour. She doesn\'t wear the helmet around you.'],rin:['Rin shares his gummy worms now. Only with you.','Rin\'s still angry at the world. Not at you.'],bea:['Bea got into Glasgow. You take the train up every Friday.','Bea draws you every week. The drawings get softer.'],mira:['Mira has a name now. You\'re one of three people who know it.','Mira still sits on roofs. You sit next to her.'],saoirse:['Saoirse never prints the word "partner". She does keep your name out of every story.','Saoirse calls at 3 AM with a scoop and then just talks.'],sunny:['Sunny took her first holiday in six years. You went too.','Sunny\'s radio is off on Sundays.'],tilly:['Tilly\'s next badge has a hidden mode. It only works next to yours.','Tilly hides notes for you in everything she makes.'],petra:['Petra\'s car died. The new one has a passenger seat with your name on it. Literally. She engraved it.','Petra still drives you to the top of car parks to look at the city.'],astrid:['Astrid\'s CubeSat launched. It takes a picture of your street every ninety minutes.','Astrid still knows when the satellites go over. You wave at all of them.'],yuki:['Yuki lets you have player two. Forever.','Yuki plays to relax. You watch. It\'s enough.'],vesper:['Vesper sings under her real name now. You\'re in the front row.','Vesper stayed out of the shadows. Mostly.'],delphine:['Delphine writes only true things now. Some of them are about you.','Delphine says what she means. You\'re still getting used to it.'],noor:['Noor\'s letters don\'t come back any more. You answer every one.','Noor brings you case law to read in bed. You read it.'],fern:['The purple beans came up in March. You planted them together.','Fern still feeds people who hide on roofs. Now she feeds you too.'],wren:['Wren\'s podcast has a co-host. It\'s you. You say almost nothing.','Wren still pulls people out of the water. You stand on the side and hold the towel.'],pia:['Pia plays a new song on Thursdays. It\'s happy. It\'s yours.','Pia still plays "that one". Now there\'s a second one after it.']};
function romAfter(){if(!S)return[];const k=S.ending||S.endK,good=k&&ENDINFO[k]&&ENDINFO[k][2]!=='bad';return ROM.filter(loved).map(g=>N((ROMAFTER[g]||['',''])[good?0:1])).filter(n=>n.n)}
/* hook the new endings' aftermaths in, and a line for everyone you love, after every aftermath except the one you don't live through */
for(const k of Object.keys(ENDINFO)){const e='end_'+k,a='after_'+k;if(SC[e]===undefined)continue;
 if(SC[a]!==undefined&&!SC[e].includes('[scene '+a+']'))SC[e]=SC[e].replace('[end '+k+']','[scene '+a+']\n[end '+k+']');
 if(k!=='lastlogin'&&k!=='harem'&&!SC[e].includes('romAfter'))SC[e]=SC[e].replace('[end '+k+']','[call romAfter()]\n[end '+k+']')}

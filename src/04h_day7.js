/* ============ DAY 7 · SUNDAY: positions, Krall's move, the keynote, the thirteenth floor ============ */
const KTX=(k,best,good,self)=>{const a=taskOf(k);if(!a)return self;return a===TASKS.find(t=>t.k===k).best?best(a):good(a)};
SC.d7_positions=`
[hide]
if S.plan==='walk'
 [scene end_lasttrain]
elif S.plan==='informant'
 [bg hotel]
 ~ Sunday. Your phone buzzes all morning with messages from people getting into position. You read every one. You forward every one.
 * Eight in the morning, and you've already done the worst thing you'll ever do. The rest of the day is just waiting to find out what it costs.
elif S.plan==='soldout'
 [bg lumenlounge]
 ~ Sunday. The Lumen green room, which this morning is the Lumen Lounge with the curtains drawn. Make-up. Coffee. A man with a clipboard who calls you "talent".
 delphine.n: You'll walk on at 4:11, after the LANTERN reveal. Victor will say "and here's someone who knows this community better than anyone". You smile. You say the line on the card. You walk off.
 ~ The card says: "I was sceptical. Then I saw what LANTERN can do for us."
 delphine.n: You don't have to mean it. Nobody in this building means anything at four o'clock on a Sunday.
 * She hasn't looked at you once this morning.
else
 [bg hotel]
 ~ Sunday. Five past eight. You've been awake since four, staring at the ceiling, running it all again.
 ~ Your phone, the one that isn't in a biscuit tin, fills up with short messages from people who are already in position.
 if taskOf('uplink')
  sms {=CH[taskOf('uplink')].name}: In the basement. LANTERN-01's uplink goes through three cables. I know which three.
 if taskOf('screens')
  sms {=CH[taskOf('screens')].name}: In the AV booth by 3. They think I'm a volunteer. I am a volunteer.
 if taskOf('verify')
  sms {=CH[taskOf('verify')].name}: Verification page is built. One command, anyone can run it. Please don't let me throw up on stage.
 if taskOf('broadcast')
  sms {=CH[taskOf('broadcast')].name}: Streams lined up. Every platform. If Lumen pulls one, three more go up.
 if taskOf('legal')
  sms {=CH[taskOf('legal')].name}: Paperwork in a folder. The folder is in my bag. The bag is on my body. Nobody is getting the folder.
 if taskOf('protect')
  sms {=CH[taskOf('protect')].name}: Got Rin. Got the drive. Nobody touches either without going through me.
 if taskOf('buyer')
  sms {=CH[taskOf('buyer')].name}: I'll know Halberd's man when I see him. I always know.
 if taskOf('story')
  sms {=CH[taskOf('story')].name}: I wrote it down so I don't forget it. Then I tore it up so I'd have to remember it.
 if S.plan==='kill'
  sms Mira: The rig's on the roof. The key's in my head. At 4:15 I decide. Come up if you want to be there when I do.
 if S.plan==='front'
  sms Saoirse: Story's locked. 4:01. Don't be late to your own revolution.
 if S.plan==='inj'
  sms Noor: In front of a judge at 10. Wish me grumpy.
 * Eight hours. You look at the plastic plant on the windowsill, still there after the raid. You water it. It's a ritual now.
[sum Sunday morning. Everyone in position.]
`;
SC.d7_krall=`
[bg foyer]
[hide]
~ Midday. The Foyer is heaving: closing day, everyone in, everyone loud. The Lumen logo turns overhead.
~ Then a hole opens in the crowd. Silas Krall, two men in navy blazers and two police officers who look like they'd rather be anywhere else. They're heading for the Chill-out Lounge corridor. For Rin.
"Police officer": Rin Takahashi? We've a complaint from Bastion Security. Theft of confidential client material. We'd like you to come with us while we sort it out.
krall.n: And the drive. He has a drive. Lumen's property.
if S.plan==='soldout'
 ~ You're standing beside Delphine at the edge of the Foyer, in a Lumen lanyard. Rin sees you across the crowd. He doesn't say anything. He doesn't need to.
 ~ They walk him out through the revolving door. The drive goes into Krall's coat pocket.
 [flag rin_taken]
 delphine.d: ...Breathe. It's nearly four.
else
 if taskOK('protect')
  ~ {=CH[taskOf('protect')].name} steps into the gap before you've moved.
  if taskOf('protect')==='nyx'
   nyx.s: Officers. Lovely day. Before anyone does anything they'll regret: here is a letter from the con's legal counsel, here is Bastion's own audit contract, which Mr Takahashi is allowed to discuss with the venue, and here is a recording of Mr Krall telling hotel staff on Friday that he "needed a reason" to search a room.
   nyx.h: Always carry the paperwork.
  elif taskOf('protect')==='wren'
   wren.n: Hi! Hello. Wren, hotel lifeguard, also a podcast, also a witness. I've logged Mr Krall going in and out of Suite 1313 forty-one times this week at night, and I've got timestamps, and my sister's a solicitor, and she's on the phone right now.
  elif taskOf('protect')==='bea'
   bea.s: Officers. This man has been in my bar every night this week telling people he'd "make the problem go away". I wrote it down. I write everything down. Want the napkins?
  elif taskOf('protect')==='petra'
   petra.a: Hey. Officers. My car is parked across the revolving door. It is a very heavy car. It will not move until somebody shows me a warrant with a name spelled right.
  else
   ~ They talk fast and stand firm, and the officers start to look at each other.
  "Police officer": ...We'll need to speak to Bastion again. Sorry for the trouble, Mr Takahashi.
  ~ Krall doesn't argue. Krall never argues. He just looks at you, once, and walks away.
  [flag rin_safe]
 elif solved('m3')
  > Officers. Before you take anyone: the man next to you has been posting as WH1SPER all week. Doxxing your own city's residents. From Suite 1313 upstairs.
  ~ You hold up your phone. The evidence, in order: the burner phones, the access point outside 1313, the drafts, the location data only SafeSphere has.
  ~ The officers look at Krall. Krall looks at the evidence. A long pause.
  "Police officer": ...Mr Krall, could we have a word? Over here?
  ~ Krall goes with them. He goes calmly. His eyes don't leave you the whole way.
  [flag krall_exposed rin_safe]
 elif S.exp>=60
  ~ You step forward. That's your mistake. Krall's eyes land on you like he's been waiting all week.
  krall.n: Officers. That's the other one. That's WHISPER. It's been all over the news.
  ~ Your face, on the officer's phone, from the WH1SPER post. Your room number. Your map.
  "Police officer": Would you mind coming with us as well? Just while we clear things up.
  [flag scapegoat]
 else
  ~ It happens too fast. Rin looks back at you once as they walk him to the doors, and the drive goes into Krall's pocket.
  [flag rin_taken]
  * You have backups. Of course you have backups. But Rin is the one who can explain them, and Rin is in the back of a car.
if f('scapegoat')
 [scene end_scapegoat]
[sum Midday: Krall came for Rin, with police and a complaint from Bastion.]
`;
SC.d7_keynote=`
[bg hallA]
[hide]
~ 3:58 PM. Hall A. Every seat full, people standing in the aisles, sitting on the stairs. The screen the size of a house shows a slowly turning blue shield.
~ Backstage, the air smells of hot lights and other people's nerves. Marge is in the wings with her reading glasses on her head and her arms folded.
if S.plan==='soldout'
 [scene key_sold]
elif S.plan==='kill'
 [scene key_kill]
elif ['dump','trojan','rollback','doublecross','informant'].includes(S.plan)
 [call scr('key_'+S.plan)]
else
 [scene key_main]
`;
SC.key_main=`
if S.plan==='front'
 ~ 4:01 PM. Victor walks out. "Good afternoon, CTRL+ALT+CON." And in the same second, two thousand phones buzz at once.
 ~ The Ledger. Front page, live. "LUMEN'S LANTERN: THE APP THAT MAPS WHO TALKS TO JOURNALISTS, SOLD TO A SPY FIRM FOR £400M". By Saoirse Quinn.
 ~ Victor keeps talking. Nobody's listening. They're reading. He can see them reading.
 [flag paper_out]
if f('press_court')&&(S.plan==='front'||S.plan==='inj')&&met('noor')&&met('saoirse')
 ~ And because Noor and Saoirse finally stopped arguing on Thursday night, both happen at once: the story goes live as the order is served.
 [flag paper_out injunction_served]
if S.plan==='inj'
 ~ 3:59 PM. Noor comes through the stage door at a run, a folder over her head, her hijab coming loose, the pen in her hand still uncapped.
 noor.h: Granted. Interim injunction. No launch, no transfer, no "demonstration" of the data. Signed eleven minutes ago by a very grumpy judge.
 ~ She serves it on Lumen's head of legal in the wings. He reads it twice. His face does a very slow thing.
 [flag injunction_served]
if f('decoy_plan')&&!f('mira_taken')
 ~ Somewhere on the fourth floor, two of Krall's men are following your badge down a corridor. Mira has it in her pocket, and is walking it very slowly towards the car park.
 [flag rin_safe]
~ 4:00. The lights go down. Victor Hale walks out into a single spotlight to a wall of noise.
victor.h: Good afternoon, CTRL+ALT+CON. This week, you've been connected. Today, I'm going to show you just how connected.
~ The screen behind him blooms into a galaxy: four thousand dots, every badge in the building, and lines between them, thick where people stood together for hours, thin where they passed.
victor.h: This is you. This room. This week. Who you met. Who you trusted. This is LANTERN.
~ A gasp. Then a few people laugh, nervously. Then somebody in the third row finds their own dot, a label floating over it, and stops laughing.
* You can see your dot. And the thick line to Ellie's. And Rin's. And all of them.
if !solved('m6')&&!f('mole_fed')
 ~ And then, in the wings, Owen Pryce reaches past the stage manager and pulls a fader down. Your microphone. Marge's microphone. Every microphone except Victor's.
 ~ He knew the plan. He knew all of it.
 [flag mole_struck]
 if taskOK('screens')
  ~ {=KTX('screens',a=>CH[a].name+' is already in the AV booth. "Nope," you hear over the comms. Three switches, a cable you didn\\'t know existed, and the faders come back up. Owen stares at the desk like it bit him.',a=>CH[a].name+' scrambles at the desk and gets one microphone back. One is enough.','')}
 elif f('van_ready')
  ~ Your phone buzzes. Petra: "Car park roof. Dish is up. Astrid says you're live to half of Europe. Keep talking." The car on the roof, the one they drove up the ramp on its rims, is broadcasting you to the sky.
  [flag signal]
 elif met('astrid')&&scn('astrid')>=3
  ~ Your phone buzzes. Astrid. "They cut the room. They can't cut the sky. Going out by satellite. Keep talking."
  [flag signal]
 elif met('sunny')&&scn('sunny')>=3&&taskOf('uplink')==='sunny'
  ~ Your earpiece crackles. Sunny. "They've got the room. Fine. Then nobody gets anything." And the whole building goes dark.
  [flag blackout]
 else
  ~ Silence. Victor's voice fills Hall A, warm and unstoppable, and nobody can hear anything else.
  [flag silenced]
if f('blackout')
 ~ Darkness. Four thousand people in the dark, and four thousand blue badges, glowing, suddenly very visible, like a field of fireflies that have just realised what they are.
 ~ And on the screen, nothing. No galaxy. No LANTERN. The uplink's dead with everything else. The proof of concept just went out like a candle.
elif f('silenced')
 ~ The demo runs to the end. LANTERN's galaxy turns and turns. Victor takes a bow. The applause is uncertain, then louder. On Monday, ten million phones will update.
else
 ~ 4:09 PM. Marge walks out of the wings into Victor's spotlight, with her reading glasses on and a microphone in her hand.
 marge.n: Sorry, Victor. Ten minutes. We agreed. Well. I agreed. You'll agree in a second.
 if f('larp_risk')||(rank('skill')<2&&rank('clout')>=3)
  ~ And she hands the microphone to you.
  * You have Clout. You have a name people know this week. You don't have the words for what's in the code.
  ? Bluff it. Big words, big voice.
   [flag larp]
   > This app is a military-grade surveillance botnet using quantum-encrypted blockchain telemetry to...
   ~ Somewhere in the second row, someone laughs. Then someone else. Victor smiles, very slowly.
   [scene end_larp]
  ? Hand it to someone who knows. "I'm not the right person to explain this. They are."
   [fx skill:4]
   ~ You hand the microphone on. It's the best thing you've done all week.
 ~ The galaxy on the screen freezes.
 if taskOK('uplink')
  ~ {=KTX('uplink',a=>'In the basement, '+CH[a].name+' pulls three cables in the right order. LANTERN-01\\'s uplink dies mid-sentence. On screen, the galaxy stops turning. Every line goes grey.',a=>CH[a].name+' gets to LANTERN-01 a minute late, and pulls everything. The galaxy stutters, and stops.','')}
  [flag uplink_cut]
 elif f('redblue')
  ~ In the basement, Nyx opens the MDF door in nine seconds while Priya reads the cable labels off her phone. Red team in, blue team knows which cable. The galaxy on the screen stops turning.
  [flag uplink_cut]
 else
  ~ The galaxy keeps turning behind you. LANTERN's still live, still collecting. Every second, more lines.
 if taskOK('screens')
  ~ And then every screen in Hall A changes at once: {=KTX('screens',a=>'frame-perfect, on the beat, the way only '+CH[a].name+' could time it.',a=>CH[a].name+' gets the feed across with a stutter, but it\\'s there.','')} Rin's findings, the size of a house.
 else
  ~ You get the evidence onto one side screen, small, half the room squinting at it.
 if f('kit_cam')
  ~ Then a clip nobody expected: Lumen's own booth, filmed from inside a cosplay helmet. Krall's team, on Tuesday, laughing about "the WHISPER posts" before there were any WHISPER posts. Kit's visor saw everything.
  [flag paper_out]
 if f('juno_audience')&&met('juno')
  ~ Juno's stream is carrying all of it. Twelve thousand people. Then a hundred thousand. Then Juno says "Chat, this isn't content, this is real," and they believe her more than they'd ever believe a newspaper.
 if f('rin_safe')
  ~ Rin walks on. Lilac hoodie. Pleated skirt. A gummy worm in one fist like a stress ball. He takes SafeSphere apart, line by line, in front of two thousand people, and his voice doesn't shake once.
  if f('mira_source')&&met('mira')&&!f('mira_taken')
   rin.n: Three years ago someone sent me the documents that started all of this. She's here. She doesn't have to stand up.
   ~ At the back of the hall, a woman with silver hair stands up anyway.
 else
  ~ Rin isn't here. Rin's in a police station across the city. You explain his work for him, as best you can, and it's not as good as him, and it has to be enough.
 if taskOK('verify')
  ~ {=KTX('verify',a=>CH[a].name+' puts one command on screen. "Don\\'t trust us. Run this tonight. Trust the maths." A thousand laptops open at once.',a=>CH[a].name+' puts the verification steps on screen and dares anyone to check them.','')}
 if taskOK('legal')||f('reg_sent')
  ~ {=taskOf('legal')?CH[taskOf('legal')].name+' puts the regulator\\'s receipt on screen: received yesterday, 11:42 AM.':'You read out the regulator\\'s reference number.'} "This isn't an attack. It's a disclosure. They had it first."
 if taskOK('broadcast')
  ~ {=KTX('broadcast',a=>CH[a].name+' has it streaming everywhere at once. Fifty thousand people. Then a hundred thousand. Lumen\\'s lawyers can\\'t pull them all.',a=>CH[a].name+' gets it out on every account they can reach.','')}
 if taskOK('story')
  if taskOf('story')==='ellie'
   ~ And then Ellie walks out, in her beret, with flour still on one sleeve. "My name's Ellie. I make bread." She tells it exactly the way she told you: the yacht, the Q instead of a g, the man with nice teeth, the laptop, the tin. You can hear a pin drop. Then you can hear two thousand people get angry.
  elif taskOf('story')==='pia'
   ~ Pia walks out with her violin case and no violin. "My brother found this a year ago. Bastion called him a thief. He's been hiding ever since." Two thousand people look at Graham Pike in the third row.
  elif taskOf('story')==='delphine'
   ~ Delphine Vos walks out of the wings. Victor's face does something you'll remember for the rest of your life.
   [flag delphine_stage]
  elif taskOf('story')==='dave'
   ~ Dave takes the mic. "I was MegaHax. I made the TikTok. Ten million downloads. I didn't know. Now I do. Delete it." It's the most honest thing anyone in a Lumen T-shirt has ever said.
  else
   ~ {=CH[taskOf('story')].name} tells the human part. It lands.
 if (scn('delphine')>=3||f('delphine_on_record')&&scn('delphine')>=2)&&!f('delphine_stage')
  ~ And then Delphine Vos walks out of the wings, in her navy suit, with her hair down. Victor's face does something you'll remember for the rest of your life.
  delphine.n: I'm Lumen's VP of Communications. I wrote every word Victor has said this week. I also found WH1SPER's posts in our own Trust and Safety folder, written days before they went up. I'd like to read you some.
  [flag delphine_stage]
 if solved('m9')&&scn('pia')>=3||f('jonah_met')
  ~ And from the back of the hall, a thin man with a beard and a hoodie walks all the way down the centre aisle. Nobody knows who he is. Then Saoirse, in the front row, stands up.
  saoirse.d: That's Jonah Reyes.
  ~ He climbs onto the stage beside you. He has LANTERN's first design documents in a carrier bag, with Victor's signature on every page.
  [flag jonah_stage]
  if clue('jonahcode')
   jonah.n: My name's Jonah Reyes. Three years ago I wrote the core of what you're looking at. I thought it was for catching fraud. I'm here to tell you exactly how to break it.
   ~ The hall goes so quiet you can hear the projector fans.
 if (f('vesper_forgiven')||f('vesper_delphine'))&&met('vesper')&&!taskOK('buyer')
  ~ At the back of the hall, a silver-haired man in a very good suit is quietly leaving. Vesper Lane is in the doorway, no earpiece, singing the first line of his favourite song. "Mr Ashgrove. I'm afraid I've resigned."
  [flag buyer_named]
 if taskOK('buyer')
  ~ {=KTX('buyer',a=>'At the back of the hall, a silver-haired man in a very good suit is quietly leaving. '+CH[a].name+' is standing in the doorway, smiling. "Mr Ashgrove. Leaving before the end? You\\'ll miss your signing."',a=>CH[a].name+' spots Halberd\\'s man leaving and follows him all the way to the lifts.','')}
  [flag buyer_named]
 ~ When it's done, Victor is still standing at the edge of the stage. He doesn't say anything. For the first time all week, nobody has written him anything to say.
[sum The closing keynote.]
`;
SC.key_kill=`
~ 4:00. Victor walks out to a wall of noise. LANTERN's galaxy blooms on the screen: four thousand dots, every badge, every line.
~ Your phone buzzes. Mira. "Roof. Now. Last chance to tell me not to."
[bg plantdeck]
~ The hotel roof. Wind. Mira on the air-con unit with the rig beside her: a laptop, a battery, a dish aimed over the city. On the screen, a single command, waiting.
mira.n: SafeSphere version 9.9.9. Signed with the original key. When it installs, it switches off every line of collection. Contacts, location, the VPN copies. Everything. On ten million phones. At once.
mira.d: And nobody asked them. That's the part I can't get past. I'm doing to ten million people the thing I hate Lumen for. Deciding for them.
? "Do it."
 [flag kill_go]
 ~ She presses enter.
 ~ Far below, through the con's glass roof, two thousand phones in Hall A buzz at once. Then the whole city's do.
 ~ "SafeSphere has been updated by its original author. Data collection: off. Thank you for trusting us. You shouldn't have."
?(scn('mira')>=3) "Come with me instead. After. Leave all of this."
 [flag kill_go ghost]
 ~ She looks at you for a long time. Then she presses enter, closes the laptop, and holds out her hand.
 mira.b: ...Yes. After. Somewhere with no Wi-Fi at all.
? "Don't. Do it the slow way. Stand on that stage with me."
 [fx mira:6]
 mira.d: ...The slow way.
 mira.n: All right. All right. One more time, the slow way. Run.
 [call S.plan='disc']
 [bg hallA]
 [scene key_main]
`;
SC.key_sold=`
~ 4:11 PM. "And here's someone who knows this community better than anyone."
~ You walk out into the light. Two thousand faces. Somewhere in them, people you had dinner with. People who sat on your crunchy bed. Rin's seat in the front row is empty.
~ You read the card. "I was sceptical. Then I saw what LANTERN can do for us."
~ Behind you, the galaxy turns. Somebody in the third row stands up and walks out. Then somebody else. Then a whole row.
~ Victor smiles and puts a hand on your shoulder. It's warm. It's heavy.
[scene end_soldout]
`;
SC.d7_roof=`
[bg corridor]
[hide]
if S.plan==='informant'||f('betray_mira')&&!f('lantern_dead')&&!['trojan','doublecross','rollback'].includes(S.plan)
 [scene roof_loose]
else
 [scene roof_main]
`;
SC.roof_main=`
~ Evening. The 13th floor. The door at the end of the refurbishment wing, the one that's always shut, is open. Suite 1313. Light, voices, and the smell of very expensive coffee.
if f('kill_go')||f('injunction_served')||f('blackout')||f('signal')||f('uplink_cut')&&(f('paper_out')||f('buyer_named')||f('delphine_stage')||f('jonah_stage'))
 [call S.f.lantern_dead=1]
~ Inside: Victor, his tie off. Krall at the window. And a man you've never seen, silver hair, very good suit, very calm, a leather folder closed on the coffee table in front of him. Mr Ashgrove.
if f('lantern_dead')
 ashgrove.n: Victor. You said the proof of concept would be live. It is, as far as I can tell, on the front page of every paper in the country.
 ashgrove.n: Halberd buys capabilities. We don't buy scandals. Good evening.
 ~ He picks up the folder, nods to you on his way past like a stranger in a lift, and is gone.
 victor.a: ...Silas. Do something.
 krall.n: It's done, Victor. It's been done since four.
 if f('krall_exposed')||solved('m3')
  ~ Footsteps behind you. Real police, this time, with a warrant Saoirse watched them get. They're not here for Rin. They're here for the man by the window.
  "Police officer": Silas Krall? We'd like to talk to you about a series of posts made under the name WH1SPER.
  ~ Krall turns from the window. For the first time all week, he looks surprised.
  [flag krall_arrested]
 if scn('vesper')>=3&&clue('vconfess')
  ~ Vesper is in the corridor behind you. You didn't hear her arrive. No earpiece.
  vesper.n: Halberd will want someone inside who understands what happened here today. Someone who knows Lumen's mistakes, and LANTERN's code, and the people in it.
  vesper.s: Come with me, darling. Inside. We could take them apart from the middle, slowly, beautifully, for years.
  ? "Yes. Inside. Together."
   [flag double]
   vesper.h: Then smile at Mr Ashgrove on the way out. You're going to be very good at this.
  ? "No. Stay out here with me. In the light."
   [fx vesper:8]
   vesper.b: ...In the light. All right. I've never tried that. Let's see if I burn.
else
 ashgrove.n: Victor. The graph's live. The demo was flawless. Shall we?
 ~ Victor uncaps a pen. You're standing in the doorway of the room where four hundred million pounds is about to change hands, and nobody has even noticed you.
 if solved('m8')&&met('saoirse')
  > Mr Ashgrove. Saoirse Quinn at The Ledger has the Corvid filings, the jet, your name on 1314, and the contract summary from the CTF. It runs tonight whether you sign or not.
  ~ Ashgrove looks at you properly for the first time. Then he closes the folder.
  ashgrove.n: Then I'm afraid we'll be passing. Good evening, Victor.
  [call S.f.lantern_dead=1]
 else
  ~ The pen moves. That's all. A signature, and the lights of the city outside the window, and ten million phones that will update on Monday.
  [flag signed]
if S.plan==='kill'&&f('ghost')
 [scene end_ghost]
[sum Evening, Suite 1313.]
`;
SC.d7_party=`
[bg ballroom]
[hide]
~ Night. The Grand Ballroom of the Halcyon, turned into 0xFF: the afterparty. Chandeliers dimmed to purple. A DJ playing something that sounds like a dial-up modem falling in love. Four thousand badges, all blue, all still beaconing, to nothing now.
[call S.endK=endingKey()]
if S.endK==='harem'
 [scene end_harem]
else
 [call choosePartner()]
 [scene end_main]
`;
/* who you find at the afterparty, if more than one person's story ended with you */
function choosePartner(){const L=ROM.filter(loved).sort((a,b)=>aff(b)-aff(a));S.partner=L[0]||null}
SC.end_main=`
[call scr('end_'+S.endK)]
`;

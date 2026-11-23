/* ============ THE WEEK BRANCHES ============
   Five big decisions change which beats you get, not just a flag at the end:
   A. Day 2, late: WHISPER's message. Answer her (path_whisper), hand it to Con Ops (path_report), or keep it to
      yourself (path_alone). Reporting it puts you in front of Silas Krall on Day 3; answering it gets you a dead drop
      and Mira's trust.
   B. Day 3, the roof: Mira asks you to get her into LANTERN-01 on Thursday night. Yes, no, or (if you're Krall's
      informant) yes and then tell Krall.
   C. Who leaked Room 1337: Owen, or Vesper (if you never won her over), or you (if you reported, or informed).
   D. Day 5, Victor's offer: refuse, fake it (and get inside Suite 1313 on Saturday), or take it (and get one chance
      to turn back, if anyone you love comes to find you).
   E. Day 6, the plan: the old five, plus the ones your week opened: the Dump, the Trojan Horse, the Rollback,
      the Double-Cross, and Krall's way.
   Routes open whole paths: Sunny and Tilly's rollback, Petra and Astrid's van, Fern's chute, Kit's camera,
   Juno's audience, Vesper's warning. And whoever you love comes with you into the ending, if you live. */

/* ---- the calendar's branches ---- */
DAYS[3][3]=()=>f('path_report')?'d3_krall':null;
DAYS[4][5]=()=>f('heist_yes')?'d4_heist':null;
DAYS[6][2]=()=>f('fake_accept')?'d6_inside':f('took_offer')?'d6_lumen':null;
beat('d3_krall',{t:'Silas Krall would like a word: the 13th floor corridor',w:'corridor',sc:'d3_krall'});
beat('d4_heist',{adv:1,t:'Meet Mira: the service tunnel, under the con',w:'tunnel',ws:['tunnel','plant','noc','mdf','tunnelN'],sc:'d4_heist'});
beat('d6_inside',{t:'Your new Lumen lanyard opens Suite 1313: the 13th floor',w:'corridor',sc:'d6_inside'});
beat('d6_lumen',{t:'Victor wants his new Head of Community at the Lumen booth: the Foyer',w:'foyer',sc:'d6_lumen'});

/* ---- time-limited: miss them and they're gone ---- */
event('drop',{d:3,s:2,w:'lounge',n:'⏳ WHISPER\'s dead drop (this afternoon only)',when:()=>f('path_whisper'),miss:'drop_missed',sc:'ev_drop'});
event('amends',{d:4,s:3,w:'roof',ws:['roof','plantdeck'],n:'⏳ Mira is on the roof. One chance to make it right',when:()=>f('mira_burned')&&!f('informant'),miss:'mira_gone',sc:'ev_amends'});
event('vsorry',{d:6,s:5,w:'lumenlounge',n:'⏳ Vesper is waiting at the piano',when:()=>f('vesper_leaked'),miss:'vesper_gone',sc:'ev_vsorry'});
event('jonahwin',{d:5,s:4,w:'station',n:'⏳ Thursday came early: a man in a hood at Central Station',when:()=>met('pia')&&scn('pia')>=3&&!f('jonah_met'),miss:'jonah_late',sc:'ev_jonahwin'});
/* missed ones leave their mark */
function evMissCheck(){if(!S)return;for(const e of Object.values(EVENTS)){if(!e.miss||S.f[e.miss]||(S.evs&&S.evs[e.id]))continue;if((S.day>e.d||S.day===e.d&&S.slot>e.s)&&(!e.when||e.when()))S.f[e.miss]=1}}
function evSoonToast(){if(!S||!S.unl.phone)return;for(const e of eventsNow())if(e.miss)toast('Only now: '+e.n.replace('⏳ ',''),'var(--butter)')}

SC.d3_krall=`
[bg corridor]
[hide]
~ The 13th floor corridor. A man in a grey suit is waiting outside Suite 1313 as if he's been standing there all day. Perhaps he has.
krall.n: {h}. Silas Krall, Trust and Safety, Lumen. Thank you for reporting the message. Most people don't. Most people reply.
* Owen Pryce took your screenshot to Krall in, you'd guess, about four minutes.
krall.n: WHISPER is a criminal. She's hurt people. She'll hurt more. And she's chosen you. That makes you valuable. To her, and to us.
krall.s: I'd like you to be our community liaison for the rest of the week. Informal. Tell me who she talks to. Where she goes. In return, you're protected. Whatever happens on Sunday, your name is on the right list.
* The right list. He means the graph.
~ ⚑ This choice will change your week.
? "I'll do it." (And mean it.)
 [flag informant informant_real]
 krall.h: Excellent. A number. Text it anything. Day or night.
 * You've just become a source. For the man who builds machines to find sources.
? "I'll do it." (And feed him nothing.)
 [flag informant]
 krall.h: Excellent. A number. Text it anything. Day or night.
 * A double game. On the thirteenth floor. With a man who used to do this for a government.
 [fx skill:3]
? "No."
 [flag krall_enemy]
 [fx exp:10]
 krall.n: That's a pity. Lists are very hard to get off, once you're on them.
 ~ He holds the door of the service lift for you, politely, all the way down.
[sum Silas Krall offered to make you Lumen's "community liaison". An informant, in other words.]
`;
SC.ev_drop=`
[bg lounge]
[cut pan lounge]
~ The Chill-out Lounge. Third bean bag from the left, exactly as the message said. Under it, taped flat: a padded envelope, and inside it, a phone with no SIM and a USB stick.
~ On the phone, one note: "THE BLUE LIGHTS GO TO A BOX. THE BOX HAS A NAME. COME TO THE ROOF TONIGHT AND I'LL TELL YOU IT. BURN THIS PHONE."
[clue dropmap]
[flag drop_got]
[fx mira:8 skill:2]
* She trusted you with a physical object. In a building where everything is watched, that's practically a love letter.
`;
SC.ev_amends=`
[bg plantdeck]
~ The roof. Mira's on the air-con unit, packing. The antenna's already in the bag.
mira.n: You sent my message to Owen Pryce. He gave it to Krall in four minutes. I've had men in grey suits on every floor since.
? "I thought I was doing the right thing. I was wrong."
 mira.d: ...Most people don't say "wrong". They say "complicated".
 [flag mira_amends]
 [fx mira:6]
? "I didn't know Owen was theirs. Nobody did."
 mira.a: I did. That's the point. You asked the wrong person because you didn't know who the right one was.
 > Then tell me.
 mira.o: ...Fine. Start with me.
 [flag mira_amends]
 [fx mira:4]
mira.n: I'm staying. For now. Don't make me regret it.
`;
SC.ev_vsorry=`
[bg lumenlounge]
~ The Lumen Lounge, empty. Vesper at the piano, not playing.
vesper.n: It was me. Thursday. I reported your meeting to Halberd. Halberd told Lumen. That's how Krall knew who was in your room.
vesper.d: I did it on Thursday because on Thursday I didn't know you yet. I'm telling you on Saturday because now I do.
? "Why tell me now?"
 vesper.n: Because tomorrow you're going to stand in front of everyone, and you should know exactly who's standing behind you. I'd like it to be me. I'll understand if it isn't.
? "Get out."
 [flag vesper_cut]
 vesper.o: ...Yes. That's fair. Goodbye, darling.
 ~ She leaves the lid of the piano open. Nobody plays it again all night.
? "Then stand behind me tomorrow. Properly."
 [flag vesper_forgiven]
 [fx vesper:10]
 vesper.b: Properly. No earpiece. No report. All right. I'll learn how.
`;
SC.ev_jonahwin=`
[bg station]
~ Central Station, night. Pia's not playing. She's standing by the piano, and next to her, hood up, is a man who looks like her with less sleep.
pia.d: He came early. He never comes early.
jonah.n: Because the thing I've been waiting a year for is happening on Sunday, and my sister says you're the person to talk to.
jonah.d: There's something you need to know first. Before you trust me. LANTERN's core, the graph engine. I wrote it. At Lumen. Three years ago. I thought it was for fraud detection.
* The missing man, the smeared researcher, the victim. He built it.
jonah.n: When I saw what Victor wanted it for, I tried to take it back. That's when Pike wrote the report. I'm not a hero. I'm the man who made the gun and then ran.
? "Then come back and help us take it apart."
 jonah.o: ...You still want me? Knowing that?
 > Especially knowing that. You know where its weak spots are.
 [flag jonah_met jonah_ready]
 [fx pia:8]
? "Why should anyone believe you now?"
 jonah.d: They shouldn't, on my word. That's why I kept everything. Every commit. Every email. Every date.
 [flag jonah_met]
 [clue jonahcode]
[sum At Central Station, Jonah Reyes came early, and told you he built LANTERN's core before he ran.]
`;
SC.d4_heist=`
[bg tunnel]
[hide]
~ The service tunnel, 2 AM. Orange lights every twelve metres. Somewhere above you, four thousand people asleep with their badges on the bedside table, breathing blue.
if f('fern_mira')
 ~ Mira comes down the laundry chute feet first, lands on a cage of towels, and stands up as if she does this every night. Fern was right about the chute.
else
 ~ Mira's already there, sitting on a pipe, in a hi-vis vest that says HALCYON MAINTENANCE that she has absolutely stolen.
mira.n: Ten minutes in the MDF. Copy the logs off LANTERN-01, everything it's ever heard. Then we're gone.
if f('betray_mira')
 ~ You walk with her to the end of the tunnel. You know what's waiting there. You texted the number at midnight.
 ~ The MDF door is open. Krall is inside, with two men, and a cable already pulled out of LANTERN-01 so it can't be touched.
 krall.n: Good evening, Mira. It's been a long time. You used to work on my floor.
 mira.o: ...
 ~ She doesn't run. She looks at you. Just once. Then she holds her wrists out to the men in grey, as if she always knew it would end like this, with someone she trusted.
 mira.d: Don't trust blue. I should have listened to myself.
 [flag mira_taken]
 [fx mira:-60 exp:-20]
 * Krall nods at you on his way out. A colleague's nod.
 [sum You took Mira to the MDF. Krall was waiting. You had told him.]
else
 ~ The MDF. LANTERN-01 hums in the rack, a box with no asset tag and a label in someone's neat handwriting.
 if f('flood_traced')||scn('sunny')>=2
  ~ Sunny's left the closet door on the latch for you. A sticky note on the frame: "you were never here. -S"
 else
  ~ The closet's locked. Mira picks it in eleven seconds, which she'd like you to notice.
 mira.n: Copy, don't pull. If we pull it, they know. If we copy it, they don't know for days.
 [game pipe n=2 hard=1 title="Copy LANTERN-01's logs before the alert lands"]
 ~ It works. A progress bar. Four days of everyone at the con, who stood next to whom, for how long, and where. Ninety seconds. Done.
 [flag lantern_dump]
 [clue lanterndump]
 ~ And then you read the first line of the log, because you can't help it. The first node LANTERN ever tracked at this con. Day 1, 18:02. Badge 1337-0001.
 * Yours.
 mira.d: ...I know. I should have told you.
 mira.n: LANTERN flagged you on the first night, because WHISPER had messaged you before the con. My message. I didn't know it would do that. When I found out, I kept messaging you. I needed someone the graph was watching, so it would stop watching me.
 * WHISPER used you as a decoy. All week.
 ~ ⚑ This choice will change your week.
 ? "You used me."
  mira.o: Yes. And then I got to know you, and I couldn't stop. That's worse, isn't it.
  [flag mira_used]
  [fx mira:-8]
  > It is. We're going to finish this anyway. And then we're going to talk.
 ? "I'd have done the same."
  mira.s: No you wouldn't. You'd have asked first. That's why I like you.
  [fx mira:6]
 ? "Then let's give the graph something to watch."
  mira.h: ...Oh. Oh, I like that. A decoy that knows it's a decoy is just a trap.
  [flag decoy_plan]
  [fx mira:8 skill:3]
 if !f('flood_traced')&&scn('sunny')<2
  ~ On the way out, a torch in the tunnel. Sunny, in her pyjamas, with her radio.
  sunny.a: Somebody just copied four days of traffic off a box I'm not allowed to touch. Was it you?
  if met('sunny')
   ? Tell her the truth
    sunny.d: ...I should report this. I'm going to pretend I didn't see you. Don't make me regret it.
    [fx sunny:-4]
   ? Lie
    sunny.n: Okay. Then I'll log it as a fault. And I'll remember I asked.
    [flag sunny_burned]
    [fx sunny:-10 exp:10]
  else
   ~ She doesn't know you. She writes down your badge number. Mira pulls you into the dark before she can read it twice.
   [fx exp:12]
 [sum Under the con at 2 AM, you and Mira copied everything LANTERN-01 had heard. The first badge it ever tracked was yours. WHISPER had used you as a decoy.]
`;
SC.d6_inside=`
[bg corridor]
[hide]
~ The 13th floor. The lanyard Victor gave you at dinner is grey, not red, and it says GUEST · LUMEN in very small letters. The man outside 1313 reads it, and steps aside.
[bg hotel]
~ Suite 1313. A rack of grey cases in the bedroom: LANTERN-02, the live copy, the one they'll demonstrate tomorrow. On the coffee table, a leather folder. A term sheet. £400,000,000. Corvid Holdings.
victor.h: There they are. My Head of Community. Coffee? It's always excellent. Silas, show them the graph.
~ Krall turns a screen. The con, as a web. Thousands of dots. One, in the middle, labelled with your badge number.
krall.n: That's you. You've met everyone. You're the most connected person at CTRL+ALT+CON. That's why Victor wants you. You're the proof that it works.
* You're the demo. Tomorrow, at four, Victor is going to show four hundred million pounds' worth of buyer your whole week.
~ Victor's phone rings. He steps out. Krall goes to the window to take a call of his own. For ninety seconds, nobody's looking at the folder.
? Photograph the term sheet
 [flag inside_1313]
 [clue termsheet]
 [fx skill:3 exp:6]
 ~ Six pages. Six photos. The phone goes back in your pocket as Victor walks back in.
? Look at LANTERN-02's rack: where's the off switch?
 [flag inside_1313 rack_known]
 [clue lantern02]
 [fx skill:4 exp:6]
 ~ Two power supplies. A management port. A label: "DEMO 16:00 · DO NOT REBOOT". So that's when it's most fragile.
krall.n: (without turning round) Victor tells me you're going to say a few words tomorrow. About how SafeSphere made you feel safe.
krall.s: I'll be watching the graph while you do.
* Two men in this room are planning to sell each other out tomorrow. You can see it in how they stand. Victor has a folder with Krall's name on the cover. Krall has a phone he never lets Victor see.
[clue sellout]
[sum Your fake "yes" to Victor got you into Suite 1313. LANTERN-02 is in the bedroom. The demo, tomorrow at four, is you.]
`;
SC.d6_lumen=`
[bg foyer]
[hide]
~ The Lumen booth. A new lanyard, blue. HEAD OF COMMUNITY in silver. Victor's people have printed your face on a standee. It's a good photo. You don't remember them taking it.
~ People walk past. Some of them you know. They don't stop.
if romCount()>0||ROM.some(g=>dating(g))
 [call S.f.turn_who=ROM.filter(g=>loved(g)||dating(g)).sort((a,b)=>aff(b)-aff(a))[0]]
 ~ Then someone does stop. {=CH[S.f.turn_who].name}. In front of the standee. Not looking at it. Looking at you.
 [call S.f.turn_line=1]
 if S.f.turn_who==='ellie'
  ellie.d: I took the sign out of the window today. "We do things properly here." I couldn't look at it. Is this properly? Is this you?
 elif S.f.turn_who==='rin'
  rin.d: I saw your face on a standee and I had to sit down. On the floor. In the Foyer. People stepped over me.
 else
  ~ They don't say anything for a long time. Then: "I didn't fall for this person." And they wait.
 ~ ⚑ This choice will change your week.
 ? "I haven't signed anything real. I can still turn."
  [flag turncoat]
  [fx exp:8]
  ~ You take the lanyard off. You don't throw it away. You put it in your pocket. It opens doors.
  * Tomorrow, Victor's Head of Community walks on stage. He has no idea which side she's on.
 ? "It's a lot of money."
  ~ They nod, slowly, like they're memorising your face. Then they walk away, and they don't look back.
  [call S.aff[S.f.turn_who]=Math.max(0,S.aff[S.f.turn_who]-40)]
else
 ~ Nobody stops. Nobody at all.
 * Of course not. You made sure of that.
[sum Saturday on the Lumen booth, as Head of Community.]
`;

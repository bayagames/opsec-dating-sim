/* ============ DAY 6 · SATURDAY: the CTF finals, the raid, the war council ============ */
SC.d6_finals=`
[bg hallA]
[hide]
~ Hall A, set for the CTF finals. The stage is a row of desks under the giant screen, ten teams, two people each. The scoreboard fills the screen, every challenge a tile, every flag a tick. Two thousand people in the seats, eating, shouting, live-commentating to each other.
if f('ctf_team')
 ~ Ada's waiting at desk four, under a hand-written sign: NULL POINTERS. She's laid out two laptops, two keyboards, two bottles of water and a single ESC keycap like a lucky charm.
 ada.n: You came. Good. I was eleven per cent sure you wouldn't. Sit. Don't touch anything until I say. Touch everything when I say.
 * Your name is on the board. In Hall A. On the biggest screen you've ever seen. NULL POINTERS · ada · {h}.
else
 ~ Ada's at desk four with a partner from her university who keeps apologising. You watch from the front row. She sees you, and does a tiny wave with two fingers, without stopping typing.
"CTF organiser": Finals rules. Ninety minutes. Twenty challenges. The board's live. Points drop the more teams solve something, so the hard ones are worth the most. Go!
~ The room explodes. Typing like rain.
if f('ctf_team')
 [game pipe n=3 hard=1 title="CTF finals"]
 [game spot keys=graph,vpn title="CTF finals"]
 ada.h: That's two! That's two flags! Keep going, keep going!
~ Seventy minutes in, a new tile appears on the board. It wasn't there before. No author. No points value. Just a title.
~ "LAST LIGHT · —M"
~ The organisers look at each other. One of them shrugs and leaves it up, because this is the CTF, and a challenge that shouldn't exist is the most CTF thing that can happen.
if f('ctf_team')
 ada.o: That's her. The —M. Like the one on Tuesday. Open it. Open it, open it.
 ~ Inside: a single encrypted file. And a key, hidden in the title tile's colour code, the kind of thing Ada sees in four seconds and you'd never see in four years.
 ada.n: It decrypts to... a document. An internal one. From Lumen.
else
 ~ Up on stage, Ada opens it. On the big screen, because the finals are mirrored for the crowd, the whole of Hall A watches the file decrypt.
~ On the big screen: a contract summary. "PROJECT LANTERN · Asset transfer to Corvid Holdings Ltd (for and on behalf of Halberd Strategic Intelligence) · Consideration: £400,000,000 · Signing: Sunday, following keynote · Proof of concept: CTRL+ALT+CON live graph."
~ And a second page. A feature list. Halfway down: "SOURCE DETECTION: identifies individuals in regular contact with journalists, lawyers, regulators and NGO staff. Priority: HIGH (buyer requirement)."
[clue halberd sources deal]
[flag heard_corvid]
* Source detection. Who talks to journalists. Who talks to lawyers. Who talks to regulators.
* Every whistleblower who ever met a reporter in a café. Every person in Room 1337 on Thursday night. That's what the con's graph is for. That's what's being sold.
~ Hall A goes quiet. Then very loud. Then someone at the back starts booing, and it spreads.
~ The screen goes black. Somebody in the AV booth has pulled the feed. Too late. Two thousand phones were already filming.
~ The flag at the bottom of the document: CTRL{l1ght_1s_th3_b3st_d1s1nf3ct4nt}. On the board, the tile shows one solve.
if f('ctf_team')
 if rank('skill')>=3
  ~ Somehow, in all of it, the Null Pointers finish first. Ada stares at the board for a long time without saying anything, and then puts her face in her hands and makes a sound that might be laughing.
  ada.b: We won. We won the CTF. I'm not a fraud. Am I a fraud? We won.
  [ach ctf_win]
  [fx ada:10 skill:10 clout:15]
  [flag ctf_won]
 else
  ~ The Null Pointers finish third. Third, in the finals, in Hall A. Ada is shaking.
  ada.h: Third! Third is a medal. Third is a real number. I'm a real number.
  [fx ada:6 skill:6 clout:8]
else
 ~ Ada's team finishes second. She looks at the board, then at the black screen, then at you in the front row, and mouths: "that was HER".
[sum The CTF finals. A challenge signed —M appeared on the board and put Lumen's secret on the big screen: LANTERN is being sold to Halberd, a private intelligence firm, for £400 million. Its main feature finds people who talk to journalists, lawyers and regulators.]
`;
SC.d6_raid=`
[bg corridor]
[hide]
~ The 13th floor corridor. Something's wrong before you get there. Your door is open. A housekeeping trolley is outside it, and nobody from housekeeping.
[bg hotel]
~ Room 1337. Two men in navy blazers are going through your suitcase. A third is holding your laptop. The hotel's duty manager is in the doorway looking at the carpet.
"Duty manager": I'm so sorry. They had a... letter. A security concern. About WHISPER. They said it was urgent.
~ Silas Krall is standing by the window, looking at your plastic plant.
krall.n: {h}. Good. We're nearly done. There's been a credible report of stolen Lumen property in this room. Source code. Internal documents.
krall.n: You were having a meeting here on Thursday. With Rin Takahashi. And others. We know who. Every one of them.
[clue raid]
* Every one of them. Nobody outside this room knew about Thursday. Except Marge. And whoever Marge told.
if f('warned_marge')
 * You told Marge not to tell Owen. She did the running order herself. So how...
 * The badges. The badges in the bathtub, beaconing to each other through a door. Someone didn't need to be told. The graph already knew.
if S.leads.canary||clue('leaktest')
 * Like the time and place you told only Owen. Same trick. Same people turning up.
if f('evidence_safe')||met('priya')
 ~ They won't find anything. Priya made you move everything on Thursday night: the files are on an encrypted drive in Sunny's rack, behind a label that says "SPARE PSU".
 krall.a: ...Nothing. Clean laptop. Clean bag. Very tidy, {h}. Unusually tidy.
 * Priya's paranoia, sitting in a rack in the basement, saving your life.
 [flag evidence_safe]
else
 ~ The third man plugs something into your laptop. A progress bar. They're copying everything.
 [fx exp:15]
 [flag evidence_copied]
 * Rin's findings. The photos of LANTERN-01. Everything you had. Copied onto a Lumen drive in front of you.
krall.n: We'll be on our way. Enjoy the rest of the con. There's not much of it left.
~ On the way out he stops at the door.
krall.s: You should get a better plant.
~ The duty manager apologises nine more times and leaves you with your suitcase upside down on the bed.
[sum Lumen security searched Room 1337. Silas Krall knew exactly who had been at Thursday's meeting.]
`;
SC.d6_council=`
[bg library]
[hide]
if f('took_offer')
 [scene council_sold]
else
 [scene council]
`;
SC.council_sold=`
~ The hotel library, ten at night. You were supposed to be here. You'd told them you would.
~ Instead your phone shows a calendar invite from Delphine: "Sunday · Keynote rehearsal · Lumen green room · 10 AM". And a message from Rin: "where are you". And another: "are you coming". And then nothing.
* You took the job. Your name is clean. The posts are gone. WH1SPER "retracted" this afternoon, with an apology about cyber-bullying that made people cry.
* It's a lot of money. You keep saying it to yourself.
[flag soldout]
[call S.plan='soldout']
`;
SC.council=`
~ The hotel library, after hours. Leather chairs, green lamps, a fire nobody has lit in years. Fern let you in through the garden door with a key from her apron. Sunny swept the room for anything that beacons. The badges are in a biscuit tin on the landing, wrapped in foil.
~ Whoever trusts you is here.
if met('rin')
 rin.n: Tomorrow at four. Forty-five minutes of Victor. Ten minutes of us, if Marge keeps her word. And then a signing on the thirteenth floor, and then Monday, ten million phones.
if met('ellie')
 ellie.n: I brought tea. And a plan. My plan is tea. Your plan's better. Tell us your plan.
* Everyone looks at you. Not at Rin, not at Priya. At you.
* A week ago you typed "hack instagram" into a terminal.
~ What you can do tomorrow depends on what you know, and who you have.
? Disclosure. Marge's ten minutes, the evidence on Victor's screen, the regulator already notified. The slow, proper way.
 [call S.plan='disc']
 if met('priya')&&scn('priya')>=2
  priya.n: The regulator has it. I sent it at 11:42 this morning. Timestamped, signed, with Rin's findings and Ada's reproduction. Tomorrow isn't an attack. It's a disclosure with a receipt.
  [flag reg_sent]
 else
  > I'll send the regulator everything tonight. Timestamped. It's not as clean as it should be. It'll have to do.
?(met('saoirse')&&scn('saoirse')>=3) Front Page. Saoirse's story runs the second the keynote starts, with everything in it.
 [call S.plan='front']
 saoirse.n: My editor's signed it off. Three lawyers have read it. It goes live at 4:01 PM, the minute Victor says hello. He'll be standing on stage while everyone in the room reads it on their phone.
?(met('noor')&&scn('noor')>=3&&(scn('delphine')>=3||solved('m7'))) Injunction. Noor goes to a judge in the morning to stop the launch.
 [call S.plan='inj']
 noor.n: I need a judge, a sworn statement from inside, and three hours. A Sunday judge is a grumpy judge. Grumpy judges read faster.
?(met('mira')&&scn('mira')>=3&&clue('signkey')) Kill Switch. Mira's way. The update that switches SafeSphere off, on every phone, at once.
 [call S.plan='kill']
 mira.n: I didn't come here to be the plan. But here I am. Ten million phones. One signed update. Nobody asked them. That's the bit I can't get past.
? Walk away. Take the last train tomorrow. It isn't your fight.
 [call S.plan='walk']
 ~ Nobody says anything. Ellie, if she's here, looks at her tea.
if S.plan==='walk'
 ~ You get up. You don't look at anyone. The library door closes behind you very quietly.
else
 ~ Then the hard part. Who does what.
 if !solved('m6')
  * You still don't know for sure who's been feeding Lumen. Whoever it is, they'll know your plan by morning.
 else
  > One more thing. Owen Pryce has been feeding Lumen all week. Tomorrow, he gets a different plan from the rest of us.
  [flag mole_fed]
 [game plan]
 ~ It's past midnight when the last person leaves. The fire still isn't lit. Nobody ever lit it. You sit in the green light of the lamps and think about four o'clock.
[sum The war council in the hotel library. You chose how to fight tomorrow, and who would stand where.]
`;

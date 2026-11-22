/* ============ THE WEEK: which part of which day belongs to the story ============ */
/* where the "use something" steps are, for the goal light */
const INTPOS={door:['home',-302.6,10.9,0],desk:['office',526.6,21,0],lift:['office',497.7,12,0],train:['station',734,4.4,0],reg:['con',-105.2,53.4,0],seat:['con',-5,-79.5,2.75],reception:['con',-218.4,22.5,0],bed:['f13',273.6,14.2,0]};
/* The prologue: a Friday, two weeks before */
beat('p_morning',{adv:1,t:'Morning',steps:[
 {auto:1,sc:'p_wake',t:'Morning'},
 {who:'ellie',sc:'p_bakery',t:'Breakfast at Proof, downstairs',lbl:'Morning, Ellie'},
 {int:'door',sc:'p_door',t:'Off to work: the bakery\'s front door',lbl:'Head to work'}]});
beat('p_work',{adv:1,t:'Work',steps:[
 {auto:1,sc:'p_office',t:'Work'},
 {int:'desk',sc:'p_queue',t:'Clear the helpdesk queue at your desk'},
 {who:'gary',sc:'p_gary',t:'Gary from Accounts is waving at you',lbl:'See what Gary wants'}]});
beat('p_after',{adv:1,t:'Underwriting',steps:[
 {who:'linda',sc:'p_underwriting',t:'Linda wants you to look at Underwriting\'s new dashboard',lbl:'Look at the dashboard with Linda'},
 {int:'lift',sc:'p_lift',t:'Home time: the lifts',lbl:'Go home'}]});
beat('p_evening',{adv:1,t:'Evening',auto:1,sc:'p_home'});
beat('p_night',{adv:'day',t:'Night',auto:1,sc:'p_night'});
/* Day 1: Monday. Home, the station, the train, the con */
beat('d1_home',{adv:1,t:'Morning',steps:[
 {auto:1,sc:'d1_wake',t:'Pack for the con'},
 {who:'ellie',sc:'d1_ellie',t:'Say goodbye to Ellie at Proof, downstairs',lbl:'Say goodbye to Ellie'},
 {int:'door',sc:'d1_leave',t:'Time to go: the bakery\'s front door',lbl:'Leave for the station'}]});
beat('d1_station',{adv:1,t:'Central Station',steps:[
 {auto:1,sc:'d1_concourse',t:'Central Station'},
 {who:'pia',sc:'d1_pia',t:'Someone is playing the violin on the concourse',lbl:'Listen to the violinist'}]});
beat('d1_train',{adv:1,t:'The train',steps:[{int:'train',sc:'d1_train',t:'Board the 16:12 at Platform 4'}]});
beat('d1_arrival',{adv:1,t:'Arrival',steps:[
 {w:'vestibule',ws:['vestibule','foyer'],sc:'d1_doors',t:'Go into the convention centre'},
 {int:'reg',sc:'d1_badge',t:'Pick up your badge at Registration, on the Foyer\'s west wall'},
 {int:'seat',sc:'d1_ceremony',t:'The opening ceremony: your seat in Hall A is lit up'},
 {int:'reception',sc:'d1_checkin',t:'Check in at the Halcyon: the Link off the Foyer, then the Promenade to reception'},
 {int:'bed',sc:'d1_room',t:'Drop your bag in Room 1337: the hotel lifts, 13th floor',lbl:'Drop your bag'}]});
beat('d1_bar',{t:'The Day 1 social at the Hotel Bar',steps:[{who:'bea',sc:'d1_bar',t:'The Day 1 social: the Hotel Bar, off the Promenade',lbl:'Order a drink'}]});
/* Day 2: Tuesday */
beat('d2_ctf',{t:'CTF 101 in Hall C',w:'hallC',sc:'d2_ctf'});
beat('d2_rin',{t:'Somewhere quiet: the Chill-out Lounge',w:'lounge',sc:'d2_rin'});
beat('d2_badge',{t:'Your badge is acting strange: the Badge Lab',w:'badgelab',sc:'d2_badge'});
beat('d2_reception',{t:'Lumen\'s sponsor reception: the Lumen Lounge, hotel mezzanine',w:'lumenlounge',sc:'d2_reception'});
beat('d2_late',{adv:'day',t:'Back to Room 1337',steps:[{int:'bed',sc:'d2_late',t:'Back to Room 1337 for the night',lbl:'Go to bed'}]});
/* Day 3: Wednesday */
beat('d3_ellie',{t:'Ellie\'s train gets in: meet her in the hotel lobby',w:'lobby',sc:'d3_ellie'});
beat('d3_whispers',{t:'The midday keynote in Hall A',w:'hallA',sc:'d3_whispers'});
beat('d3_roof',{t:'Follow the silver hair: the hotel roof, up the 13th floor fire stairs',w:'roof',ws:['roof','plantdeck'],sc:'d3_roof'});
beat('d3_pam',{t:'Someone is asking for you in the Quiet Room',w:'quiet',sc:'d3_pam'});
/* Day 4: Thursday */
beat('d4_booth',{t:'Something is happening at the Lumen booth in the Foyer',w:'foyer',sc:'d4_booth'});
beat('d4_noc',{t:'The con network is down',steps:[{auto:1,sc:'d4_call',t:'Your phone'},{w:'noc',sc:'d4_noc',t:'The con network is down: the NOC, under the con (lifts to B, or the car park)'}]});
beat('d4_gathering',{t:'Everyone is meeting in Room 1337',w:'room1337',sc:'d4_gathering'});
beat('d4_burglary',{adv:1,t:'Your phone',auto:1,sc:'d4_burglary'});
/* Day 5: Friday */
beat('d5_home',{adv:1,t:'Ellie needs to go home: meet her in the hotel lobby',w:'lobby',sc:'d5_home'});
beat('d5_framed',{adv:1,t:'Your phone',auto:1,sc:'d5_framed'});
beat('d5_offer',{t:'Victor Hale has asked you to dinner: The Grill, in the hotel',w:'grill',sc:'d5_offer'});
/* Day 6: Saturday */
beat('d6_owen',{t:'Owen Pryce wants a word in Con Ops',w:'conops',sc:'d6_owen'});
beat('d6_finals',{t:'The CTF finals: Hall A',w:'hallA',sc:'d6_finals'});
beat('d6_raid',{t:'Back to Room 1337',w:'room1337',sc:'d6_raid'});
beat('d6_council',{adv:1,t:'The war council: the hotel library, after hours',w:'library',sc:'d6_council'});
/* Day 7: Sunday */
beat('d7_positions',{adv:1,t:'Positions',auto:1,sc:'d7_positions'});
beat('d7_krall',{adv:1,t:'Something is wrong in the Foyer',w:'foyer',ws:['foyer','foyerG','link','hallC'],sc:'d7_krall'});
beat('d7_keynote',{adv:1,t:'The closing keynote: Hall A, 4 PM',w:'hallA',ws:['hallA','backstage'],sc:'d7_keynote'});
beat('d7_roof',{adv:1,t:'The thirteenth floor',w:'corridor',ws:['corridor','roof','plantdeck','stairwell'],sc:'d7_roof'});
beat('d7_party',{t:'The 0xFF afterparty: the Grand Ballroom',w:'ballroom',sc:'d7_party'});
DAYS[0]=['p_morning','p_work','p_after','p_evening','p_night'];
DAYS[1]=['d1_home','d1_station','d1_train','d1_arrival','d1_bar',null];
DAYS[2]=['d2_ctf','d2_rin','d2_badge','d2_reception',null,'d2_late'];
DAYS[3]=['d3_ellie','d3_whispers','d3_pam',null,'d3_roof',null];
DAYS[4]=['d4_booth','d4_noc',null,'d4_gathering','d4_burglary',null];
DAYS[5]=['d5_home',null,'d5_framed','d5_offer',null,null];
DAYS[6]=['d6_owen','d6_finals',null,'d6_raid','d6_council',null];
DAYS[7]=['d7_positions','d7_krall','d7_keynote','d7_roof','d7_party'];

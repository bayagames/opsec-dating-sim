/* ============ THE WORLD MAP ============
   The city, drawn: Linden Street (home and Proof), Central Station, Brindle & Co, and the Conference Quarter (the con
   and the Halcyon), with the river, the parks, the railway and the roads between them. Three versions:
     phone    look around: pick a place to see what's there and open its map. No travelling from here: you get there
              yourself (walk to the station, take the train, a taxi from the con).
     station  the departures board at Platform 4: pick a destination and board. The train is a playable ride.
     taxi     the rank outside the con: the driver only does the station this week ("event traffic").
   You never fast-travel between places on this map; only inside the place you're in (the building map). */
const WLOC={
 home:{n:'Linden Street',sub:'Your flat · Proof bakery',x:205,y:455,reg:['home'],area:'bakery',ic:'home',
  d:'Two rooms over a bakery. Ellie downstairs, Mr Demir\'s barber next door, the viaduct at the end of the road.',how:'Walk from Central Station (ten minutes), or two stops on the Quarterline.'},
 station:{n:'Central Station',sub:'Quarterline · every 20 minutes',x:500,y:345,reg:['station'],area:'station',ic:'train',
  d:'A Victorian train shed: iron ribs, glass, pigeons, a departures board that clatters. Platform 4 for the Conference Quarter.',how:'Walk from Linden Street or from Brindle & Co. A taxi from the Conference Quarter.'},
 office:{n:'Brindle & Co',sub:'Work · the printer',x:575,y:150,reg:['office'],area:'office',ic:'work',
  d:'Insurance, third floor, the IT helpdesk you run. Linda made you promise not to come in this week.',how:'A short walk from Central Station, or one stop on the Quarterline.'},
 con:{n:'Conference Quarter',sub:'CTRL+ALT+CON · the Halcyon',x:835,y:250,reg:['con','f13'],area:'plaza',ic:'con',
  d:'The convention centre, the Halcyon Hotel and its tower, the plaza and the boulevard. Four thousand hackers for seven days.',how:'The Quarterline from Central Station, twenty minutes. A taxi back to the station from the rank on the plaza.'}};
const WRAIL=[['station','home','M500 345 C 420 360 330 420 205 455'],['station','office','M500 345 C 520 270 560 210 575 150'],['station','con','M500 345 C 600 330 700 280 835 250']];
const WV={mode:'phone',sel:null,from:'phone'};
function wHere(){if(WD.reg==='train')return'train';for(const k in WLOC)if(WLOC[k].reg.includes(WD.reg))return k;return null}
/* the drawing */
function worldSVG(){const here=wHere(),sel=WV.sel,mode=WV.mode,trip=S&&S.trip;
 const ic={home:'<path d="M-9 2 0-7 9 2v8H-9z" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linejoin="round"/><path d="M-3 10V4h6v6" stroke="currentColor" stroke-width="2.2" fill="none"/>',
  train:'<rect x="-8" y="-9" width="16" height="15" rx="4" fill="none" stroke="currentColor" stroke-width="2.4"/><path d="M-8-1h16M-4 10l-3 3M4 10l3 3" stroke="currentColor" stroke-width="2.2"/><circle cx="-4" cy="3" r="1.6" fill="currentColor"/><circle cx="4" cy="3" r="1.6" fill="currentColor"/>',
  work:'<rect x="-8" y="-6" width="16" height="13" rx="2" fill="none" stroke="currentColor" stroke-width="2.4"/><path d="M-4-6v-3h8v3M-8 0h16" stroke="currentColor" stroke-width="2.2" fill="none"/>',
  con:'<path d="M-9 8V-2l9-7 9 7V8z" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linejoin="round"/><path d="M-4 8V1h8v7" stroke="currentColor" stroke-width="2.2" fill="none"/><circle cy="-3" r="1.6" fill="currentColor"/>'};
 const active=k=>mode==='station'?WDEP().some(d=>d.k===k&&d.ok):mode==='taxi'?k==='station':true;
 const railOn=r=>mode==='station'&&(sel===r[1]||!sel)||mode==='phone'&&(sel===r[0]||sel===r[1])||trip&&(trip.dest===r[1]);
 const tp=trip&&WRAIL.find(r=>r[1]===trip.dest);
 return`<svg class="wsvg" viewBox="0 0 1000 620" preserveAspectRatio="xMidYMid meet" role="img" aria-label="Map of the city">
 <defs><pattern id="wgrid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M40 0H0V40" fill="none" stroke="#ffffff08" stroke-width="1"/></pattern>
  <radialGradient id="wvig" cx="50%" cy="45%" r="70%"><stop offset="60%" stop-color="#000" stop-opacity="0"/><stop offset="100%" stop-color="#000" stop-opacity=".55"/></radialGradient>
  <filter id="wglow" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="4" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
  <linearGradient id="wriver" x1="0" x2="1"><stop offset="0" stop-color="#103a4c"/><stop offset="1" stop-color="#164a5e"/></linearGradient></defs>
 <rect width="1000" height="620" fill="#0c0912"/><rect width="1000" height="620" fill="url(#wgrid)"/>
 <g class="wdist" font-family="VT323,monospace" font-size="20" fill="#ffffff22" letter-spacing="6">
  <path d="M60 380 L330 360 L360 560 L40 590Z" fill="#ffffff05"/><text x="70" y="575">LINDEN</text>
  <path d="M380 240 L640 230 L660 420 L400 440Z" fill="#ffffff06"/><text x="420" y="430">OLD TOWN</text>
  <path d="M470 60 L700 50 L700 200 L480 210Z" fill="#ffffff05"/><text x="560" y="80">THE CITY</text>
  <path d="M700 140 L980 120 L990 360 L720 380Z" fill="#ff5d7308"/><text x="760" y="370">CONFERENCE QUARTER</text></g>
 <g fill="#2a4a2e" opacity=".55"><ellipse cx="320" cy="250" rx="70" ry="38"/><ellipse cx="760" cy="440" rx="90" ry="40"/><ellipse cx="130" cy="300" rx="40" ry="26"/></g>
 <text x="300" y="255" font-family="VT323,monospace" font-size="16" fill="#8affc155" letter-spacing="3">THE COMMON</text>
 <path d="M-10 520 C 160 500 260 560 420 530 C 580 500 640 420 760 400 C 860 384 920 330 1010 300" stroke="url(#wriver)" stroke-width="34" fill="none" stroke-linecap="round"/>
 <path d="M-10 520 C 160 500 260 560 420 530 C 580 500 640 420 760 400 C 860 384 920 330 1010 300" stroke="#2a7a9a44" stroke-width="2" fill="none"/>
 <text x="470" y="548" font-family="Georgia,serif" font-style="italic" font-size="17" fill="#5ab4d488">the River Wend</text>
 <g stroke="#ffffff16" stroke-width="7" fill="none" stroke-linecap="round"><path d="M0 330 H1000"/><path d="M500 0 V620"/><path d="M205 455 L360 330 L500 345"/><path d="M500 345 L660 300 L835 250"/><path d="M575 150 L500 345"/><path d="M835 250 L980 200"/></g>
 <path d="M835 250 C 760 300 640 300 500 345" stroke="#ffd166" stroke-width="3" stroke-dasharray="2 9" stroke-linecap="round" fill="none" opacity="${mode==='taxi'?1:.45}" class="${mode==='taxi'?'wflow':''}"/>
 <g fill="none" stroke-linecap="round">${WRAIL.map(r=>`<path d="${r[2]}" stroke="#ff5d73" stroke-width="${railOn(r)?7:4}" opacity="${railOn(r)?1:.4}" ${railOn(r)?'filter="url(#wglow)"':''}/><path d="${r[2]}" stroke="#0c0912" stroke-width="${railOn(r)?3:1.6}" stroke-dasharray="3 7" opacity=".9"/>`).join('')}</g>
 <g stroke="#8affc1" stroke-width="2.4" stroke-dasharray="1 7" stroke-linecap="round" fill="none" opacity=".5"><path d="M205 455 L360 330 L500 345"/><path d="M575 150 L500 345"/></g>
 ${tp?`<circle r="9" fill="#ffd166" stroke="#0c0912" stroke-width="3" filter="url(#wglow)"><animateMotion dur="5s" repeatCount="indefinite" path="${tp[2]}"/></circle>`:''}
 ${Object.entries(WLOC).map(([k,L])=>{const on=active(k),isHere=here===k,isSel=sel===k;return`<g class="wnode ${on?'':'off'} ${isSel?'sel':''} ${isHere?'here':''}" data-w="${k}" transform="translate(${L.x} ${L.y})" tabindex="0" role="button" aria-label="${esc(L.n)}">
  ${isHere?'<circle r="34" class="wpulse"/>':''}<circle r="27" class="wring"/><circle r="21" class="wdot"/><g class="wic" style="color:${isHere?'#1b1026':'#f6eefc'}">${ic[L.ic]}</g>
  <text y="${L.y>400?50:-38}" text-anchor="middle" class="wlbl">${esc(L.n)}</text><text y="${L.y>400?68:-20}" text-anchor="middle" class="wsub">${esc(L.sub)}</text>
  ${isHere?`<g transform="translate(0 ${L.y>400?-52:52})"><rect x="-72" y="-13" width="144" height="26" rx="13" fill="#ffd166"/><text y="5" text-anchor="middle" font-family="VT323,monospace" font-size="17" fill="#1b1026" letter-spacing="2">YOU ARE HERE</text></g>`:''}</g>`}).join('')}
 <g transform="translate(940 560)" font-family="VT323,monospace" font-size="16" fill="#bba8cf"><circle r="22" fill="none" stroke="#ffffff22"/><path d="M0-18 5 0 0-4-5 0z" fill="#ff5d73"/><text y="-26" text-anchor="middle">N</text></g>
 <rect width="1000" height="620" fill="url(#wvig)" pointer-events="none"/></svg>`}
/* where the train goes from here, and whether it will take you */
function WDEP(){const story=typeof stepIs==='function'&&stepIs('train'),off=f=>typeof f==='function'?f():f;
 // a story ride names its train (the step's dest); every other train waits for another day
 const sd=story?(beatStep(curBeat()).dest||'con'):null,mine='Your train\'s the '+(sd&&WLOC[sd]?WLOC[sd].n:'')+'.';
 const T=SLOTT[clamp(S.slot||0,0,5)].split(':').map(Number),tm=add=>{let m=T[0]*60+T[1]+add;m=(m+1440)%1440;return String(Math.floor(m/60)).padStart(2,'0')+':'+String(m%60).padStart(2,'0')};
 const officeOK=f('office_open')||(typeof leadOpen==='function'&&leadOpen('office'));
 return[{k:'con',t:tm(6),pf:4,ok:story?sd==='con':S.day>=1,why:story&&sd!=='con'?mine:S.day<1?'Not this week. Not yet.':'',st:'ON TIME'},
  {k:'home',t:tm(13),pf:2,ok:story?sd==='home':true,why:story&&sd!=='home'?mine:'',st:'ON TIME'},
  {k:'office',t:tm(19),pf:6,ok:story?sd==='office':officeOK,why:story&&sd!=='office'?mine:officeOK?'':'Linda made you promise not to come in this week.',st:officeOK||sd==='office'?'ON TIME':'NOT TODAY'}]}
/* ---- opening ---- */
function worldOpen(mode,from){if(!S)return;WV.mode=mode||'phone';WV.from=from||(mode==='phone'?'phone':'world');
 WV.sel=WV.mode==='station'?null:WV.mode==='taxi'?'station':(WV.sel||wHere()||'con');
 if(document.pointerLockElement&&WV.mode==='phone'){WD.selfUnlock=true;try{document.exitPointerLock()}catch(e){}}
 WD.active=false;if(typeof sfx==='function')sfx('phoneOpen');worldDraw()}
function worldClose(){const o=$('ov');o.classList.remove('wmapov');if(WV.mode==='phone'){closePhone();return}delete o.dataset.app;delete o.dataset.from;closeOv();o.classList.remove('phoneov','mapov','appov');hub()}
function worldDraw(){const m=WV.mode,o=ov(`<div class="wmap wm-${m}"><div class="wtop">${m==='phone'?'<button class="pback" id="wback" aria-label="Back">‹</button>':''}
  <div class="wtitle">${m==='station'?'<span class="wk">PLATFORM 4 · QUARTERLINE</span><b>Departures</b>':m==='taxi'?'<span class="wk">TAXI RANK · CONFERENCE QUARTER</span><b>Where to?</b>':'<span class="wk">MAP</span><b>The city</b>'}</div>
  <span class="wclock">${esc(SLOTT[clamp(S.slot||0,0,5)])}</span><button class="pback" id="wclose" aria-label="Close">✕</button></div>
 <div class="wbody"><div class="wstage">${worldSVG()}</div><aside class="wside" id="wside">${worldSide()}</aside></div>
 <div class="wfoot">${m==='phone'?'<span><i class="wl rail"></i>Quarterline</span><span><i class="wl taxi"></i>Taxi</span><span><i class="wl walk"></i>On foot</span><span class="wnote">Pick a place to see it. You can\'t jump between places from here: take the train, a taxi, or walk.</span>':m==='taxi'?'<span class="wnote">Event traffic: the rank only runs to Central Station this week.</span>':'<span class="wnote">Trains every 20 minutes. Please mind the gap.</span>'}</div></div>`);
 o.classList.add('phoneov','wmapov');o.classList.toggle('mapov',true);o.dataset.app='world';o.dataset.from=WV.from==='phone'?'phone':'';updBlur();
 o.onclick=e=>{if(e.target===o)worldClose()};
 $('wclose').onclick=worldClose;if($('wback'))$('wback').onclick=()=>{if(WV.from==='phone'&&MAPV&&MAPV.fromWorld===false){phoneBack()}else phoneBack()};
 o.querySelectorAll('.wnode').forEach(n=>{n.onclick=()=>{WV.sel=n.dataset.w;if(typeof sfx==='function')sfx('hover');worldDraw()};n.onkeydown=e=>{if(e.key==='Enter'){e.preventDefault();n.onclick()}}});
 worldWire()}
function worldSide(){const m=WV.mode,here=wHere();
 if(m==='station'){const D=WDEP();return`<div class="wboard"><div class="wbh"><span>TIME</span><span>DESTINATION</span><span>PLAT</span><span></span></div>
  ${D.map(d=>`<button class="wrow ${WV.sel===d.k?'sel':''} ${d.ok?'':'no'}" data-k="${d.k}"><span class="wt">${d.t}</span><span class="wd">${esc(WLOC[d.k].n)}<small>${d.ok?(d.k==='con'?'Calling at Conference Quarter only':d.k==='home'?'Calling at Linden Street':'Calling at Brindle & Co'):esc(d.why)}</small></span><span class="wp">${d.pf}</span><span class="ws ${d.ok?'':'bad'}">${d.ok?d.st:d.st==='NOT TODAY'?'NOT TODAY':'—'}</span></button>`).join('')}</div>
  ${(()=>{const d=D.find(x=>x.k===WV.sel);return d?`<div class="wcard"><b>${esc(WLOC[d.k].n)}</b><p>${esc(WLOC[d.k].d)}</p>${d.ok?`<button class="btn pri wgo" id="wgo">Board the ${d.t} <span class="kn">Enter</span></button>`:`<p class="wwhy">${esc(d.why)}</p>`}</div>`:'<p class="small wpick">Pick a train.</p>'})()}`}
 if(m==='taxi'){return`<div class="wmeter"><div class="wmh"><span>FARE</span><b>£0.00</b><small>event shuttle · free with a con badge</small></div>
  ${Object.keys(WLOC).filter(k=>k!=='con').map(k=>`<button class="wrow ${k==='station'?'sel':'no'}" data-k="${k}" ${k==='station'?'':'disabled'}><span class="wd">${esc(WLOC[k].n)}<small>${k==='station'?'About fifteen minutes':'"Station only, mate. Event traffic."'}</small></span></button>`).join('')}</div>
  <div class="wcard"><b>Central Station</b><p>The driver looks at you in the mirror. "Station? Lovely. Belt on."</p><button class="btn pri wgo" id="wgo">Go <span class="kn">Enter</span></button></div>`}
 const k=WV.sel,L=WLOC[k];if(!L)return'';const isHere=here===k,seen=Object.values(AREAS).filter(a=>L.reg.includes(a.reg)&&S.visited&&S.visited[a.k]).length;
 return`<div class="wcard big"><span class="wk">${isHere?'YOU ARE HERE':here==='train'?'ON THE TRAIN':'ELSEWHERE'}</span><b>${esc(L.n)}</b><p>${esc(L.d)}</p>
  <div class="wkv"><span>Places you've been</span><b>${seen}</b></div><div class="wkv"><span>Getting there</span><b>${esc(L.how)}</b></div>
  ${G.ok?`<button class="btn ${isHere?'pri':''} wgo" id="wview">${isHere?'Open the map here':'Look at its map'}</button>`:''}</div>`}
function worldWire(){const o=$('ov');
 o.querySelectorAll('.wrow').forEach(b=>b.onclick=()=>{if(b.disabled)return;WV.sel=b.dataset.k;if(typeof sfx==='function')sfx('hover');worldDraw()});
 if($('wgo'))$('wgo').onclick=()=>{if(WV.mode==='station'){const d=WDEP().find(x=>x.k===WV.sel);if(!d||!d.ok)return;const story=stepIs('train');if(typeof sfx==='function')sfx('select');tripStart(d.k,story?{story:stepGo}:{})}
  else if(WV.mode==='taxi'){taxiGo()}};
 if($('wview'))$('wview').onclick=()=>{const L=WLOC[WV.sel];mapOpen(true,L.reg[0]);MAPV.fromWorld=true}}
function taxiGo(){closeOv();const o=$('ov');o.classList.remove('phoneov','mapov','wmapov');delete o.dataset.app;delete o.dataset.from;fadeTp(()=>{teleportArea('station');run([{bg:'station'},{hide:1},N(pick(['Fifteen minutes of the driver explaining why he doesn\'t trust contactless. Then Central Station: commuters, pigeons, and the departures board clattering.','The taxi smells of pine air freshener and ambition. The driver drops you at Central Station and wishes you luck "with the hacking".']))],hub)})}
/* the station and the taxi rank call these */
function stationBoard(){worldOpen('station','world')}
function taxiRank(){worldOpen('taxi','world')}

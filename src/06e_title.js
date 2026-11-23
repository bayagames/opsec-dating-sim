/* ============ TITLE ============
   Three beats. Boot: the convention is built and lit (the first time, that's a real wait; after that it's cached).
   Press any key: the logo over a slow camera tour of the empty con at dusk. The menu: the logo glides up into the
   corner and the options come in down the left, big, one after another. Everything on it works with the mouse,
   the arrow keys and Enter, and Esc goes back.
   Views: files (choose a save file) · main · name (your handle) · load (your saves). The camera itself is titleCam
   (09c_cut.js); the 3D loop draws it while the title is up. */
const TS={stage:'boot',view:'main',pressed:false,t0:0,boot:null,focus:{}};
const TPLACE={plaza:'Arrival Plaza',hallA:'Hall A · Main Stage',foyer:'The Foyer',courtyard:'The Courtyard',vendor:'Expo Hall',skygarden:'Sky Garden',conroof:'The Roof'};
const TSLOT=['Morning','Morning','Afternoon','Afternoon','Evening','Night'];
function titleScreen(){
 show('title');closeOv();const t=$('title');
 if(!$('heads').children.length){const fl=['ellie2','nyx','ada','priya','juno','kitc','rin','bea','mira','saoirse','sunny','tilly','petra','astrid','yuki','vesper','delphine','noor','fern','wren','pia'],ex=['h','s','h','n','h','s','b','s','n','s','h','b','h','n','s','s','n','n','h','h','n'];
  $('heads').innerHTML=fl.map((g,i)=>`<span>${head(g,ex[i])}</span>`).join('')}
 // the test harness and machines without WebGL skip straight to the menu, over a drawn background
 if(window.__test){TS.pressed=true;t.classList.add('flat')}
 titleStage(TS.pressed?'menu':'boot');
 titleView(PROF?'main':'files');
 if(!TS.pressed)titleBoot();else titleCamOn(G.ok);
}
/* the logo's lines change alignment and size between stages; measure them before and after and glide each one
   from where it was (FLIP), so nothing jumps before it moves */
function titleStage(s){const t=$('title'),L=$('tlogo'),prev=t.dataset.stage;
 const kids=[...L.children],flip=prev&&prev!=='boot'&&prev!==s&&t.classList.contains('on');
 const first=flip?kids.map(k=>k.getBoundingClientRect()):null;
 TS.stage=s;t.dataset.stage=s;
 if(flip){L.style.transition='none';L.getAnimations().forEach(a=>a.cancel());kids.forEach(k=>k.getAnimations().forEach(a=>a.cancel()));void L.offsetWidth;
  kids.forEach((k,i)=>{const a=first[i],b=k.getBoundingClientRect();if(!b.width||!a.width)return;const sc=b.width/(k.offsetWidth||1),dx=(a.left-b.left)/sc,dy=(a.top-b.top)/sc,z=a.width/b.width;
   k.style.transformOrigin='0 0';k.animate([{transform:`translate(${dx}px,${dy}px) scale(${z})`},{transform:'none'}],{duration:1100,easing:'cubic-bezier(.7,0,.2,1)'})});
  requestAnimationFrame(()=>{L.style.transition=''})}
 if(s==='menu')setTimeout(()=>titleFocus(),40)}
/* boot: wait for the world, then for the convention's light; then "press any key" */
function titleBoot(){if(TS.boot)return;TS.t0=performance.now();
 const tick=()=>{if(!$('title').classList.contains('on')){TS.boot=null;return}
  const t=$('title'),el=$('tbootT'),bar=$('tbootBar');let p=.06,msg='Loading';
  if(G.inited&&G.ready){
   if(!G.ok){t.classList.add('flat');return titleReady()}
   titleCamOn(true);const R=G.regions.con;
   const lit=!G.baked||!R||R.lmTex||R.lmSkip;
   if(lit&&!G.lmBusy){p=1;msg='Ready'}
   else{const f=G.lmBusy?(G.bakeP||0):0;p=.15+.85*f;msg=G.lmBusy==='con'?'Lighting the convention':'Getting ready'}
  }else msg='Building the convention';
  bar.style.width=Math.round(p*100)+'%';el.textContent=msg+(p<1&&p>.15?' · '+Math.round(p*100)+'%':'');
  if(p>=1&&performance.now()-TS.t0>900){setTimeout(titleReady,350);TS.boot=null;return}
  TS.boot=requestAnimationFrame(tick)};
 TS.boot=requestAnimationFrame(tick)}
function titleReady(){if(TS.stage!=='boot')return;titleStage('press');$('tfade').classList.remove('on');$('tpress').querySelector('.tpk').textContent=WD.touch?'Tap to start':'Press any key'}
function titlePress(){if(TS.stage!=='press')return;TS.pressed=true;if(typeof sfx==='function')sfx('select');titleStage('menu')}
/* views */
function titleView(v){TS.view=v;const t=$('title');t.dataset.view=v;
 const kick={main:'',files:'Choose a file',name:'New game',load:'Load game'}[v];
 if(v==='files')titleFiles();if(v==='main')titleMain();if(v==='load')titleLoad();
 if(v==='name'){setTimeout(()=>{if(!WD.touch)$('hIn').focus()},450)}
 $('tkick').textContent=v==='main'?(META.name||'File '+PROF):kick;
 // stagger: each line comes in a beat after the one above
 t.querySelectorAll('#'+{main:'tmain',files:'tprof',name:'tname',load:'tload'}[v]+' .ti').forEach((b,i)=>{b.style.setProperty('--i',i);b.style.transition='none';b.style.opacity='0';b.style.transform='translateX(-46px)';void b.offsetWidth;b.style.transition='';b.style.opacity='';b.style.transform=''});
 titleCorner();if(TS.stage==='menu')titleFocus()}
function titleItems(){const id={main:'tmain',files:'tprof',name:'tname',load:'tload'}[TS.view];return[...$(id).querySelectorAll('.ti')].filter(b=>!b.disabled&&b.offsetParent!==null)}
function titleFocus(b){const it=titleItems();if(!it.length)return;if(!b)b=it.includes(TS.focus[TS.view])?TS.focus[TS.view]:it[0];
 $('title').querySelectorAll('.ti.on,.pfrow.on').forEach(x=>x.classList.remove('on'));b.classList.add('on');const r=b.closest('.pfrow');if(r)r.classList.add('on');TS.focus[TS.view]=b;
 const d=$('tdesc');d.textContent=b.dataset.d||'';d.classList.toggle('on',!!b.dataset.d)}
function titleMove(k){const it=titleItems();if(!it.length)return;let i=it.indexOf(TS.focus[TS.view]);i=(i+k+it.length)%it.length;titleFocus(it[i]);if(typeof sfx==='function')sfx('hover')}
function titleBack(){if($('tconf').classList.contains('on')){tconfClose();return}
 if(TS.view==='name'||TS.view==='load')titleView('main');else if(TS.view==='main')titleView('files')}
function titleMain(){
 const e=Object.keys(META.ends).length;
 $('bLoad').disabled=!['auto',1,2,3,4,5].some(k=>readSlot(k));
 $('bPost').style.display=pgOpen()?'':'none';
 // numbers follow what's on screen
 let n=0;$('tmain').querySelectorAll('.ti').forEach(b=>{if(b.style.display!=='none')b.querySelector('em').textContent=String(++n).padStart(2,'0')});
 $('bLoad').dataset.d=$('bLoad').disabled?'No saves in this file yet.':'Pick up a run where you saved it.';
}
/* the file's numbers, bottom right. Runs and endings stay hidden until the postgame is open */
function titleCorner(){const el=$('tfile');if(TS.view==='files'||!PROF){el.classList.remove('on');return}
 const e=Object.keys(META.ends).length,pg=pgOpen();
 el.innerHTML=`<span class="tfp">${achPct()}%</span><b>${esc(META.name||'File '+PROF)}</b><small>${META.play?fmtDur(META.play)+' played':'New file'}${pg?' · '+e+'/'+ENDORDER.length+' endings · '+(META.runs||0)+' runs':''}</small>`;el.classList.add('on')}
function titleFiles(){PROF=0;const el=$('tprof');
 const row=n=>{const p=readProf(n);
  if(!p)return`<div class="pfrow"><button class="ti pfile empty" data-n="${n}" data-d="An empty file. Start here."><em>F${n}</em><span>Empty</span></button></div>`;
  const m=p.meta||{},a=achPct(m),pg=Object.keys(m.ends||{}).length>0;
  const meta=[m.play?fmtDur(m.play)+' played':'',pg?Object.keys(m.ends).length+'/'+ENDORDER.length+' endings':'',pg&&m.runs?m.runs+' runs':'',p.last?'last played '+fmtTime(p.last):''].filter(Boolean).join(' · ');
  return`<div class="pfrow"><button class="ti pfile" data-n="${n}" data-d="${esc(meta)}"><em>F${n}</em><span class="pfn">${esc(p.name||'File '+n)}<small class="pfp">${a}%</small></span></button><button class="tfdel" data-del="${n}">Delete file</button></div>`};
 el.innerHTML=[1,2,3].map(row).join('');
 el.querySelectorAll('.pfile').forEach(b=>b.onclick=()=>{const n=+b.dataset.n;if(!readProf(n)){loadProf(n);saveMeta()}else loadProf(n);if(typeof sfx==='function')sfx('select');titleView('main')});
 el.querySelectorAll('.tfdel').forEach(b=>b.onclick=e=>{e.stopPropagation();tconfDelete(+b.dataset.del)});
 el.querySelectorAll('.pfrow').forEach(r=>r.onmouseenter=()=>titleFocus(r.querySelector('.ti')))}
/* deleting a file asks first, properly: what goes, and that it can't come back */
function tconfDelete(n){const p=readProf(n);if(!p)return;const m=p.meta||{},c=$('tconf'),pg=Object.keys(m.ends||{}).length>0;
 c.innerHTML=`<div class="tconfc" role="dialog" aria-modal="true"><h3>Delete ${esc(p.name||'File '+n)}?</h3><p>Everything in File ${n} goes:</p><ul><li>${achPct(m)}% of achievements${m.play?' and '+fmtDur(m.play)+' of play':''}</li><li>every saved game in this file</li>${pg?`<li>${Object.keys(m.ends).length} endings found, hints and the postgame</li>`:''}</ul><p><b style="color:var(--coral)">This can't be undone.</b></p>
  <div class="row"><button class="btn" id="tcNo">Keep it</button><button class="btn danger" id="tcYes" disabled>Delete forever</button></div></div>`;
 c.classList.add('on');$('tcNo').focus();
 // a moment's pause before the red button works, so a double-click can't get through
 setTimeout(()=>{const y=$('tcYes');if(y)y.disabled=false},700);
 $('tcNo').onclick=tconfClose;c.onclick=e=>{if(e.target===c)tconfClose()};
 $('tcYes').onclick=()=>{try{for(const k of Object.keys(localStorage))if(k===profKey(n)||k.startsWith(profKey(n)+'_'))localStorage.removeItem(k)}catch(e){}tconfClose();toast('File '+n+' deleted','var(--coral)');titleFiles();titleView('files')}}
function tconfClose(){const c=$('tconf');c.classList.remove('on');c.innerHTML='';titleFocus()}
function titleLoad(){const P=$('tloadP');const draw=()=>{savesPanel(P,'title',draw)};draw()}
/* buttons */
$('bNew').onclick=()=>{titleView('name')};
$('bBack').onclick=()=>titleView('main');
$('bLBack').onclick=()=>titleView('main');
$('bFiles').onclick=()=>titleView('files');
$('bLoad').onclick=()=>titleView('load');
$('bAch').onclick=()=>achScreen();
$('bPost').onclick=()=>{PGV.fit=true;postgame('map','title')};
$('bGo').onclick=()=>{
 const h=($('hIn').value||'').trim().replace(/[<>&"{}]/g,'')||'n00b';
 titleCamOn(false);
 S=fresh(h);META.lastH=h;saveMeta();if(META.runs)ach('newgame');
 // the loop: once you know, you can say the word at the very start
 if(META.secret)S.f.canrewind=1;
 S.resume='pro';startPrologue();
};
$('hIn').addEventListener('keydown',e=>{if(e.key==='Enter'){e.preventDefault();$('bGo').click()}else if(e.key==='Escape'){e.preventDefault();$('hIn').blur();titleBack()}else if(e.key==='ArrowDown'){e.preventDefault();$('hIn').blur();titleFocus($('bGo'))}});
/* input: any key/click/tap gets past "press any key"; then arrows, Enter and Esc */
const titleOn=()=>$('title').classList.contains('on')&&!$('ov').classList.contains('on')&&!$('pgx');
addEventListener('keydown',e=>{if(!titleOn())return;const k=e.key,tag=(document.activeElement&&document.activeElement.tagName)||'';
 if(TS.stage==='boot')return;
 if(TS.stage==='press'){if(['Shift','Control','Alt','Meta','Tab'].includes(k))return;e.preventDefault();titlePress();return}
 if($('tconf').classList.contains('on')){if(k==='Escape'){e.preventDefault();tconfClose()}return}
 if(tag==='INPUT'||tag==='TEXTAREA')return;
 if(k==='ArrowDown'||k==='s'||k==='S'){e.preventDefault();titleMove(1)}
 else if(k==='ArrowUp'||k==='w'||k==='W'){e.preventDefault();if(TS.view==='name'&&TS.focus.name===$('bGo')){$('hIn').focus();return}titleMove(-1)}
 else if(k==='Enter'||k===' '){e.preventDefault();const b=TS.focus[TS.view];if(b&&!b.disabled&&b.offsetParent)b.click()}
 else if(k==='Escape'||k==='Backspace'){e.preventDefault();titleBack()}
 else if((k==='Delete')&&TS.view==='files'){const b=TS.focus.files;if(b&&b.dataset.n&&readProf(+b.dataset.n))tconfDelete(+b.dataset.n)}});
$('title').addEventListener('pointerdown',e=>{if(TS.stage==='press'){e.preventDefault();titlePress()}});
$('title').addEventListener('mouseover',e=>{const b=e.target.closest&&e.target.closest('.ti');if(b&&!b.disabled&&TS.stage==='menu'&&TS.focus[TS.view]!==b){titleFocus(b);if(typeof sfx==='function')sfx('hover')}});
/* the place on screen, top right, as the camera moves on */
function titlePlace(k,slot){const el=$('tplace');if(!el)return;el.classList.remove('on');setTimeout(()=>{$('tplaceN').textContent=(TPLACE[k]||'')+' · '+TSLOT[slot||0];el.classList.add('on')},500)}

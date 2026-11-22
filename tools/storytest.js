// Plays the whole story many times with no 3D, in a few minutes. Reports errors, missing scenes, endings reached,
// and how far routes get. Usage: node tools/storytest.js [runs=12] [url=http://localhost:8123/index.html]
// node tools/storytest.js ends   plays every ending with every possible partner (and none) to its ending card.
// Needs: npm i playwright (or a global playwright), and the folder served over http (python3 -m http.server 8123).
const {chromium}=require('playwright');
(async()=>{const mode=process.argv[2]==='ends'?'ends':'story',FORCE=process.argv[2]==='routes'?[4,5,6,4,5,6]:null,runs=mode==='ends'?0:FORCE?FORCE.length:+(process.argv[2]||12),url=(process.argv[3]||'http://localhost:8123/index.html')+'?test';
const b=await chromium.launch();const p=await b.newPage();const errs=[];
p.on('pageerror',e=>errs.push('ERR '+e.message+' | '+(e.stack||'').split('\n')[1]));
p.on('console',m=>{const t=m.text();if(m.type()==='error'||m.type()==='warning')errs.push(m.type()+' '+t.slice(0,240))});
await p.goto(url);await p.waitForFunction(()=>window.__dbg&&__dbg.evalIn,null,{timeout:60000});
const t0=Date.now();
const ENDS=async()=>{
 const $=id=>document.getElementById(id);const out={lint:scLint(),runs:[],bad:[]};
 for(const k in GAMES)if(!GAMES['_'+k])GAMES['_'+k]=GAMES[k];
 for(const k in GAMES)if(!k.startsWith('_'))GAMES[k]=(st,done)=>{try{if(st.res)st.res(4,5)}catch(e){console.error('res',e)}done()};
 let n=0;
 for(const k of Object.keys(ENDINFO))for(const g0 of [null,...ROM,'multi']){const g=g0==='multi'?'ada':g0;
  if(k==='harem'&&g)continue;
  localStorage.removeItem('opsec3_save');$("hIn").value="ender";$('bGo').click();
  await new Promise(r=>setTimeout(r,0));
  closeOv();S.day=7;S.slot=4;for(const x of ROM){S.met[x]=1;S.r=S.r||{}}
  for(const x of ROM)if(ROUTES[x])for(let i=scn(x);i<4;i++)adv(x,i);
  if(g){for(let i=scn(g);i<ROUTES[g].n;i++)adv(g,i)}if(g0==='multi')for(const x of['nyx','bea'])for(let i=scn(x);i<ROUTES[x].n;i++)adv(x,i);
  S.endK=k;S.partner=g;const seen=new Set();let steps=0,stuck=0,last='';
  run(scr('end_'+k),()=>{});
  for(;steps<20000&&!S.ending;steps++){
   const ov=$('ov'),card=$('card');
   if(card.classList.contains('on')){card.click();continue}
   if(ov.classList.contains('on')){const bt=ov.querySelector('#tutok,#qd,#gd,#sd,#xd,#pgo,#cok,#eT,.btn.pri');if(bt){bt.click();continue}closeOv();continue}
   if($('vn').classList.contains('on')){const ch=[...$('chs').querySelectorAll('.ch')];if(ch.length){ch[(steps+n)%ch.length].click();continue}const t=$('txt').textContent;if(/^\[[a-z0-9_]+\]$/.test(t))seen.add(t);if(t===last){if(++stuck>50)break}else{stuck=0;last=t}tapBox();continue}
   break}
  n++;if(!S.ending||S.ending!==k||seen.size)out.bad.push({k,g,got:S.ending||null,missing:[...seen],at:$('txt').textContent.slice(0,80)});
  S=null}
 out.n=n;return out};
const BOT=async(runs,FORCE)=>{
 const out={lint:scLint(),runs:[]};
 const $=id=>document.getElementById(id);
 for(let ri=0;ri<runs;ri++){
  let r=ri*7919+13;const rnd=()=>{r=(r*16807)%2147483647;return r/2147483647};
  // strategies: 0 random, 1 focus on two people, 2 focus on one person + leads, 3 investigator
  // 4 the secret route, 5 the crew's heist, 6 the loop (everyone, everything)
  const strat=FORCE?FORCE[ri%FORCE.length]:ri%4;
  for(const k in GAMES)if(!GAMES['_'+k])GAMES['_'+k]=GAMES[k];
  for(const k in GAMES)if(!k.startsWith('_'))GAMES[k]=(st,done)=>{try{if(st.res)st.res(4,5)}catch(e){console.error('res',e)}
   if(k==='plan'){S.assign={};const al=ROM.concat(['dave']).filter(allyReady);for(const t of TASKS){const g=[t.best,...t.good].find(x=>al.includes(x)&&!Object.values(S.assign).includes(x))||al.find(x=>!Object.values(S.assign).includes(x));if(g)S.assign[t.k]=g}S.pscore=TASKS.reduce((s,t)=>s+taskScore(t,S.assign[t.k]),0)}
   if(k==='quiz'&&st.who)fx({[st.who]:6,skill:2});done()};
  localStorage.removeItem('opsec3_save');
  $("hIn").value="tester"+ri;$('bGo').click();
  if(strat===6){S.loop=1;S.unl.echo=1}
  const fav=strat===5?['nyx','petra','kit']:strat===6?ROM.filter(g=>g!=='ellie'):shuffle(ROM.filter(g=>g!=='ellie')).slice(0,strat===1?2:1);
  const want=strat===4?/anything else up there|pull the plug/i:strat===5?/i'm in|pull the cables|the big score/i:strat===6?/i'm listening|^1?disclosure/i:null;
  const missing=new Set();let steps=0,guard=0,lastKey='',stall=0;
  const choose=list=>{ // prefer choices that sound careful, sometimes random
   if(want){const w=list.find(b=>want.test(b.textContent));if(w)return w}
   if(strat===0)return list[Math.floor(rnd()*list.length)];
   const bad=/sell|deal\.|walk away|bluff|stay\. let|military|seven proxies|nothing to hide|i'm a hacker|legal name|post a selfie|join "ctrlaltcon"|sure, free points/i;
   const ok=list.filter(b=>!bad.test(b.textContent));return (ok.length?ok:list)[Math.floor(rnd()*(ok.length?ok.length:list.length))]};
  for(;steps<(strat===6?600000:200000);steps++){
   if(steps%400===0)await new Promise(r=>setTimeout(r,0));
   if(!S){continue}
   if(S.ending)break;
   const key=S.day+':'+S.slot+':'+(S.inBeat||'')+':'+$('txt').textContent.length;
   if(key===lastKey){if(++stall>3000){out.runs.push({run:ri,stuck:key,where:$('txt').textContent.slice(0,80)});break}}else{stall=0;lastKey=key}
   const ov=$('ov'),card=$('card');
   if(card.classList.contains('on')){card.click();continue}
   if(ov.classList.contains('on')){const bt=ov.querySelector('#tutok,#qd,#gd,#sd,#xd,#pgo,#cok,#eT,.btn.pri');if(bt){bt.click();continue}closeOv();continue}
   if($('vn').classList.contains('on')){const ch=[...$('chs').querySelectorAll('.ch')];if(ch.length){choose(ch).click();continue}const t=$('txt').textContent;if(/^\[[a-z0-9_]+\]$/.test(t))missing.add(t);tapBox();continue}
   // free roam
   const bt=curBeat();if(bt){startBeat(bt);continue}
   if(strat===4&&S.day>=3&&S.slot===5&&!S.f.badge0){run(scr('pool_badge'),hub);continue}
   if(strat===5&&S.day>=2){const u=CREW.find(g=>!met(g)&&SC[g+'0']!==undefined);if(u){hangMenu(u,ROUTES[u].loc);continue}}
   if(!isFree()){if(S.slot===5)endDay();else spend('wait');continue}
   for(const m of allMyst())if(canSolve(m)){const M=MYST[m];solveMyst(m,M.a,mystClues(m).filter(c=>M.ev.includes(c)).slice(0,3))}
   // meet whoever is around and unmet
   const unmet=ROM.filter(g=>!met(g)&&SC[g+'0']!==undefined&&WHERE[g]&&WHERE[g](S.day,S.slot));
   if(unmet.length&&rnd()<.5){hangMenu(unmet[0],ROUTES[unmet[0]].loc);continue}
   const ready=ROM.filter(sceneReady),leads=Object.keys(LEADS).filter(k=>leadOpen(k)&&(!LEADS[k].need||LEADS[k].need()));
   let pickG=null;
   if(strat===1||strat===2||strat>=5){pickG=[...fav,'ellie'].find(g=>ready.includes(g))}
   if(!pickG&&strat===0&&ready.length&&rnd()<.6)pickG=ready[Math.floor(rnd()*ready.length)];
   if(!pickG&&strat===3&&ready.includes('ellie'))pickG='ellie';
   // talk shop with the people you're after, once a day (free)
   for(const g of fav)if(met(g)&&!S.hang[g+':'+S.day]&&strat){S.hang[g+':'+S.day]=1;seen(g);fx({[g]:6})}
   const hang=g=>{const i=scn(g),tones=Object.keys(TONES);S.taste=S.taste||{};S.taste[g]=S.taste[g]||{};
    const known=tones.find(t=>S.taste[g][t]>0),tried=tones.filter(t=>S.taste[g][t]===undefined);
    const tone=strat===0?tones[Math.floor(rnd()*4)]:known||tried[Math.floor(rnd()*tried.length)]||tones[0];
    const v=tasteOf(g,tone);S.taste[g][tone]=v;S.amult=S.amult||{};S.amult[g]=v>0?1.6:v<0?.45:1;
    run([...scr(g+i),()=>{fx({[g]:8});delete S.amult[g];adv(g,i);seen(g);spend('hang');return[]}],hub)};
   if(strat===6&&leads.length&&rnd()<.35){leadStart(leads[Math.floor(rnd()*leads.length)]);continue}
   if(pickG){hang(pickG);continue}
   if(leads.length&&(strat===3||strat===2||rnd()<.5)){leadStart(leads[Math.floor(rnd()*leads.length)]);continue}
   if(ready.length&&strat!==1&&strat!==2){hang(ready[0]);continue}
   if(rnd()<.5){attendTalk();continue}
   if(S.slot===5)endDay();else spend('wait');
  }
  out.runs.push({run:ri,strat,ending:S.ending,day:S.day,slot:S.slot,fav,loved:ROM.filter(loved),routes:Object.fromEntries(ROM.filter(met).map(g=>[g,scn(g)])),solved:Object.keys(S.solved).length,clues:S.clues.length,skill:RANKS.skill[rank('skill')],clout:RANKS.clout[rank('clout')],fails:S.fails||0,acts:S.acts,texts:S.msgs.filter(m=>m.q).length,favAff:fav.map(g=>aff(g)+':'+(sceneWhy(g)||'ready')),missing:[...missing]});
  S=null;
 }
 out.ends=Object.keys(META.ends);return out};
if(mode==='ends'){const res=await p.evaluate(src=>__dbg.evalIn('('+src+')')(),ENDS.toString());console.log('lint:',res.lint.length?res.lint.join('\n'):'ok');console.log('ending playthroughs:',res.n,'problems:',res.bad.length);for(const r of res.bad.slice(0,30))console.log(JSON.stringify(r));console.log('time',((Date.now()-t0)/1000).toFixed(1)+'s');const ue=[...new Set(errs)];console.log(ue.length?ue.slice(0,40).join('\n'):'no errors');await b.close();return}
const res=await p.evaluate(([src,n,F])=>__dbg.evalIn('('+src+')')(n,F),[BOT.toString(),runs,FORCE]);
console.log('lint:',res.lint.length?res.lint.join('\n'):'ok');
for(const r of res.runs)console.log(JSON.stringify(r));
console.log('endings seen:',res.ends.join(', '));
console.log('time',((Date.now()-t0)/1000).toFixed(1)+'s');
const ue=[...new Set(errs)];console.log(ue.length?ue.slice(0,40).join('\n'):'no errors');
await b.close()})();

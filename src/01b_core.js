/* ============ CORE SYSTEMS: calendar, ranks, closeness, exposure, clues, summary, achievements, meta ============ */
const SLOTN=['Morning','Midday','Afternoon','Evening','Night','Late night'];
const SLOTT=['08:40','12:10','15:20','18:30','21:40','00:30'];
const DAYN=['Two weeks earlier','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
const RANKS={skill:['Script Kiddie','Novice','Practitioner','Specialist','Expert','Elite'],clout:['Nobody','Lurker','Known Face','Notable','Con Famous','Legend']};
const RANKXP=[0,30,80,150,250,380];
const STAGEN=['Met','Acquaintance','Friend','Close','Dating','In love'];
const rankOf=v=>{let r=0;for(let i=0;i<RANKXP.length;i++)if(v>=RANKXP[i])r=i;return r};
/* expression helpers for scripts and requirements */
const met=g=>!!(S&&S.met[g]);
const aff=g=>S?S.aff[g]||0:0;
const scn=g=>S?S.sc[g]||0:0;
const f=k=>!!(S&&S.f[k]);
const clue=c=>!!(S&&S.clues.includes(c));
const rank=k=>S?rankOf(S[k]):0;
const has=i=>!!(S&&S.inv[i]);
const solved=m=>!!(S&&S.solved[m]);
const day=()=>S?S.day:0;
const slot=()=>S?S.slot:0;
const done=b=>!!(S&&S.done[b]);
/* how close you are: scenes seen (routes have six: meeting, four hangouts, and the last one) */
const stageOf=g=>STAGEN[clamp(scn(g)-1,0,5)];
const dating=g=>scn(g)>=5;
const loved=g=>!!ROUTES[g]&&scn(g)>=ROUTES[g].n;
/* who someone looks like right now (Ellie changes out of her apron for the con, Kit wears her armour some days) */
const lookOf=g=>{if(!S)return g;if(g==='ellie')return S.day>=3&&!S.f.ellie_apron?'ellie2':'ellie';if(g==='kit')return S.f.kit_armour?'kitc':'kit';if(g==='dave')return S.day>=2?'davex':'dave';return g};
const romCount=()=>ROM.filter(loved).length;
/* persistent across runs: achievements, endings, finished routes, solved mysteries */
/* Three save files (profiles). Each holds everything that lasts across runs: achievements, endings and how you got them,
   hints, scenes seen, finished routes and mysteries, the loop, and its own run saves. */
let PROF=0;
const META_DEF=()=>({ach:{},ends:{},endv:{},hints:[],seenSc:{},routes:{},solved:{},runs:0,restored:0,loop:0,secret:0,stats:{},play:0});
const META=META_DEF();
const profKey=n=>'opsec5_p'+n;
function readProf(n){try{const t=localStorage.getItem(profKey(n));return t?JSON.parse(t):null}catch(e){return null}}
function loadProf(n){PROF=n;const p=readProf(n)||{name:'File '+n,made:Date.now(),meta:{}};for(const k in META)delete META[k];Object.assign(META,META_DEF(),p.meta||{});META.name=p.name;META.made=p.made;try{localStorage.setItem('opsec5_last',String(n))}catch(e){}}
const saveMeta=()=>{if(!PROF)return;try{const p=readProf(PROF)||{name:META.name||'File '+PROF,made:META.made||Date.now()};p.meta=META;p.name=META.name||p.name;p.last=Date.now();localStorage.setItem(profKey(PROF),JSON.stringify(p))}catch(e){}};
/* the files from before there were three: they become File 1 */
(function(){try{if(localStorage.getItem('opsec5_p1')||!localStorage.getItem('opsec4_meta'))return;const m=JSON.parse(localStorage.getItem('opsec4_meta'));localStorage.setItem('opsec5_p1',JSON.stringify({name:'File 1',made:Date.now(),meta:m}));
 for(const k of['save','slot_1','slot_2','slot_3','slot_4','slot_5']){const v=localStorage.getItem('opsec3_'+k);if(v)localStorage.setItem('opsec5_p1_'+(k==='save'?'auto':k),v)}}catch(e){}})();
function ach(id){if(!ACH[id]||S&&S.replay)return;if(S)S.ach=S.ach||{};if(S&&S.ach[id])return;if(S)S.ach[id]=1;const first=!META.ach[id];META.ach[id]=META.ach[id]||Date.now();saveMeta();
 if(first){toast('Achievement: '+ACH[id][0],'var(--butter)');if(typeof sfx==='function')sfx('unlock')}}
function addSum(t){if(!S)return;S.sum.push({d:S.day,s:S.slot,t})}
function addClue(c){if(!S||!CLUE[c]||S.clues.includes(c))return;S.clues.push(c);if(S.unl.clues)toast('Clue: '+CLUE[c].s,'var(--butter)');if(typeof sfx==='function')sfx('discover');
 if(S.clues.length>=10)ach('clues10');if(S.clues.length>=30)ach('clues30');if(Object.keys(CLUE).every(k=>S.clues.includes(k)))ach('clues_all')}
function clockLabel(){if(!S)return'';if(S.day===0)return DAYN[0];if(S.epilogue)return'The week after · '+SLOTN[S.slot];return'Day '+S.day+' · '+DAYN[S.day]+' · '+SLOTN[S.slot]}
function fresh(h){const z={};ROM.forEach(g=>z[g]=0);
 return{v:4,h,day:0,slot:0,ch:0,skill:0,clout:0,exp:5,foot:5,money:40,aff:{...z},sc:{...z},met:{},hang:{},gifted:{},inv:{},f:{},clues:[],solved:{},leads:{},done:{},msgs:[],log:[],unl:{},sum:[],ach:{},room:{},fast:false,ending:null,visited:{},ftRecent:[],restore:false,oc:0,fails:0,acts:0,look:{}}}
/* effects: affection, exposure (with the day's fail), skill/clout XP and ranks, credits, flags, clues, items */
function fx(e){
 if(!e)return;
 for(const k in e){
  const v=e[k];
  if(k in S.aff){
   let g=v;
   if(S.aff[k]>=100&&g>0)continue;
   const raw=g;if(typeof affGain==='function')g=affGain(k,g);
   S.aff[k]=clamp(S.aff[k]+g,0,100);
   // words, not numbers: you feel it, you don't count it
   const capT=!g&&raw>0;if(capT){S.capT=S.capT||{};if(S.capT[S.day+k]){continue}S.capT[S.day+k]=1}
   if(S.unl.aff&&raw){const nm=CH[k].name,t=raw<0?nm+' didn\'t like that':!g?nm+' has had a lot of you today':g>=9?nm+' ♥♥♥ loved that':g>=5?nm+' ♥♥ liked that':nm+' ♥ noticed';toast(t,raw<0?'var(--dim)':CH[k].col);if(typeof sfx==='function')sfx(raw>=0?'heartUp':'heartDown')}
   if(S.aff[k]>=100)ach('maxlove');
  }
  else if(k==='exp'){
   let g=v;
   if(g>0&&S.inv.faraday)g=Math.ceil(g*.6);
   if(g>0&&e.phish&&S.inv.yubi){S.inv.yubi--;if(!S.inv.yubi)delete S.inv.yubi;toast('Security key blocked it','var(--mint)');continue}
   S.exp=clamp(S.exp+g,0,100);if(S.unl.exp&&g)toast(`Exposure ${g>=0?'+':''}${g}`,'var(--coral)');
   S.expPeak=S.expPeak||{};S.expPeak[S.day]=Math.max(S.expPeak[S.day]||0,S.exp);
  }
  else if(k==='foot'){(S.footLog=S.footLog||[]).push({d:S.day,s:S.slot,v,w:S.inBeat?(BEATS[S.inBeat]||{}).t||S.inBeat:((S.log[S.log.length-1]||[])[1]||'').slice(0,90)});S.foot=clamp(S.foot+v,0,60);S.exp=clamp(S.exp+v,0,100);if(S.unl.exp&&v)toast(`Footprint ${v>=0?'+':''}${v} (permanent)`,'var(--coral)')}
  else if(k==='skill'||k==='clout'){
   const r0=rankOf(S[k]);S[k]=Math.max(0,S[k]+v);const r1=rankOf(S[k]);
   if(S.unl[k]&&v)toast(`${k==='skill'?'Skill':'Clout'} ${v>=0?'+':''}${v}`,k==='skill'?'var(--mint)':'var(--butter)');
   if(r1>r0&&S.unl[k]){setTimeout(()=>toast(`${k==='skill'?'Skill':'Clout'} rank: ${RANKS[k][r1]}`,k==='skill'?'var(--mint)':'var(--butter)'),400);ach(k+'_r'+r1)}
  }
  else if(k==='cred'||k==='money'){earn(v)}
  else if(k==='flag'){[].concat(v).forEach(f=>S.f[f]=1)}
  else if(k==='clue'){[].concat(v).forEach(addClue)}
  else if(k==='item'){if(!ITEMS[v])continue;S.inv[v]=(S.inv[v]||0)+1;toast('Got: '+ITEMS[v].n,'var(--mint)')}
  else if(k==='met'){meet(v)}
 }
 hud();
}
function meet(g){if(!S||S.met[g])return;S.met[g]=1;S.f['met_'+g]=1;
 const n=ROM.filter(x=>S.met[x]).length;if(n>=5)ach('met5');if(n>=12)ach('met12');if(n>=ROM.length)ach('met_all');
 if(S.unl.aff)toast('New contact: '+CH[g].name,CH[g].col)}
/* the morning snapshot a failed day goes back to */
function snapDay(){const keep=S.snap;S.snap=null;const t=JSON.stringify(Object.assign({},S,{log:[],snap:null}));S.snap=t}
function failDay(){
 const s=S.snap?JSON.parse(S.snap):null;const fails=(S.fails||0)+1;ach('doxxed');if(fails>=3)ach('doxxed3');
 const steps=scr('doxxed');
 run(steps,()=>{beatBusy=false;if(!s){S.exp=S.foot;hub();return}const log=S.log;S=s;S.snap=null;S.log=log;S.fails=fails;snapDay();save();
  if(G.ok&&S.inWorld)fadeTp(()=>{teleportArea(S.wakeAt||'room1337');S.pos=null;hub()});else hub()});
}

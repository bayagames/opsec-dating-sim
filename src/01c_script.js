/* ============ SCRIPT: scenes are written as plain text and parsed on first use ============
   ~ narration          * inner thought           > you say it
   ellie.h: line        "Receptionist": line      whisper: LINE   wh1sper: LINE   sms Ellie: text
   [bg key] [hide] [fx ellie:5 skill:4] [flag a b] [clue id] [item id] [msg id text] [game kind k=v ...]
   [sum text] [ach id] [unlock k] [tp area] [goto label] [call fn] [end key]
   ? choice || hint     ?(expr) choice only when expr is true      (indented block below each)
   if expr / elif expr / else (indented blocks)      # label
   {h} is your handle, {=expr} is evaluated when the line is shown. See docs/STORY_BIBLE.md. */
const SC={};const SCAST={};const EXF={};
/* the game's code sits in one block, so expressions are compiled with a direct eval here, where they can see it */
function ev(e){if(!EXF[e]){try{EXF[e]=eval('()=>('+e+')')}catch(err){console.error('bad expression',e,err);EXF[e]=()=>false}}try{return EXF[e]()}catch(err){console.error('expression failed',e,err);return false}}
function scParse(src,id){
 const lines=src.split('\n').map(l=>l.replace(/\s+$/,'')).filter(l=>l.trim()&&!/^\s*\/\//.test(l));
 const ind=l=>l.length-l.trimStart().length;let i=0;
 const err=m=>{throw new Error('script '+id+': '+m+' at "'+(lines[i]||'').trim()+'"')};
 function block(min){const out=[];
  while(i<lines.length){const l=lines[i],d=ind(l);if(d<min)break;const t=l.trim();
   if(t[0]==='?'){const opts=[];while(i<lines.length&&ind(lines[i])===d&&lines[i].trim()[0]==='?'){let s=lines[i].trim().slice(1),cond=null;
     if(s[0]==='('){let k=1,j=1;for(;j<s.length&&k;j++){if(s[j]==='(')k++;else if(s[j]===')')k--}cond=s.slice(1,j-1);s=s.slice(j)}
     s=s.trim();let hint=null;const h=s.indexOf('||');if(h>=0){hint=s.slice(h+2).trim();s=s.slice(0,h).trim()}
     i++;const body=i<lines.length&&ind(lines[i])>d?block(ind(lines[i])):[];opts.push({t:s,cond,hint,body})}
    out.push({k:'choice',opts});continue}
   if(/^if\s/.test(t)){const br=[];let els=null;br.push({cond:t.slice(3).trim()});i++;br[0].body=i<lines.length&&ind(lines[i])>d?block(ind(lines[i])):[];
    while(i<lines.length&&ind(lines[i])===d){const u=lines[i].trim();if(/^elif\s/.test(u)){i++;br.push({cond:u.slice(5).trim(),body:i<lines.length&&ind(lines[i])>d?block(ind(lines[i])):[]})}else if(u==='else'){i++;els=i<lines.length&&ind(lines[i])>d?block(ind(lines[i])):[]}else break}
    out.push({k:'if',br,els});continue}
   if(d>min)err('unexpected indent');
   i++;out.push(lineNode(t,id))}
  return out}
 const top=block(0);if(i<lines.length)err('could not parse');return top;
}
function lineNode(t,id){
 let m;
 if(t[0]==='#')return{k:'label',n:t.slice(1).trim()};
 if(t[0]==='~')return{k:'say',s:{t:t.slice(1).trim()}};
 if(t[0]==='*')return{k:'say',s:{w:'think',t:t.slice(1).trim()}};
 if(t[0]==='>')return{k:'say',s:{w:'me',t:t.slice(1).trim()}};
 if(t[0]==='['){const e=t.lastIndexOf(']');const body=t.slice(1,e).trim(),sp=body.indexOf(' ');return{k:'cmd',c:sp<0?body:body.slice(0,sp),a:sp<0?'':body.slice(sp+1).trim()}}
 if((m=t.match(/^"([^"]+)":\s*(.*)$/)))return{k:'say',s:{w:m[1],np:1,t:m[2]}};
 if((m=t.match(/^sms ([^:]+):\s*(.*)$/)))return{k:'say',s:{w:'sms',from:m[1],t:m[2]}};
 if((m=t.match(/^([a-z0-9_]+)(?:\.([a-z]))?:\s*(.*)$/))){const w=m[1];if(w==='whisper'||w==='wh1sper')return{k:'say',s:{w,t:m[3]}};
  if(!CH[w])console.warn('script '+id+': unknown speaker '+w);return{k:'say',s:{w,x:m[2]||'n',t:m[3]}}}
 return{k:'say',s:{t}};
}
/* k=v args: numbers, comma lists, quoted strings */
function scArgs(a){const o={};const re=/(\w+)=("([^"]*)"|\S+)/g;let m;while((m=re.exec(a))){let v=m[3]!==undefined?m[3]:m[2];if(m[3]===undefined){if(/^-?[\d.]+$/.test(v))v=+v;else if(v.includes(','))v=v.split(',').map(x=>/^-?[\d.]+$/.test(x)?+x:x);else if(v==='true')v=true}o[m[1]]=v}return o}
function scFx(a){const o={};for(const p of a.split(/\s+/).filter(Boolean)){const j=p.indexOf(':');const k=p.slice(0,j),v=p.slice(j+1);if(k==='flag')o.flag=v.split(',');else o[k]=/^-?[\d.]+$/.test(v)?+v:v}return o}
function scCmd(n,ctx){const a=n.a;
 switch(n.c){
  case'bg':return[{bg:a}];
  case'hide':return[{hide:1}];
  case'chapter':return[{chapter:+a}];
  case'hold':{const p=a.split(/\s+/);return[()=>{S.hold=S.hold||{};if(p[1]==='off')delete S.hold[p[0]];else if(p[1]==='none')S.hold[p[0]]=null;else S.hold[p[0]]=p.length>2?[p[1],+p[2],+p[3],+(p[4]||0)]:[p[1],+(p[2]||0)];placeChars()}]}
  case'meet':return[()=>{const p=a.split(/\s+/);meet(p[0]);adv(p[0],0)}];
  case'adv':{const p=a.split(/\s+/);return[()=>{adv(p[0],+p[1])}]}
  case'wake':return[()=>{S.wakeAt=a}];
  case'noadvance':return[()=>{S.noAdvance=1}];
  case'fx':return[{fx:scFx(a)}];
  case'flag':return[{fx:{flag:a.split(/\s+/)}}];
  case'unflag':return[()=>{a.split(/\s+/).forEach(f=>delete S.f[f])}];
  case'clue':return[()=>{a.split(/\s+/).forEach(c=>addClue(c))}];
  case'item':return[{fx:{item:a}}];
  case'msg':{const sp=a.indexOf(' ');return[{msg:[a.slice(0,sp),a.slice(sp+1)]}]}
  case'game':{const sp=a.indexOf(' ');const o=scArgs(sp<0?'':a.slice(sp+1));const g=Object.assign({game:sp<0?a:a.slice(0,sp)},o);if(typeof o.res==='string'){const fn=o.res;g.res=(...r)=>ev(fn)(...r)}return[g]}
  case'sum':return[()=>{addSum(sub(a))}];
  case'ach':return[()=>{ach(a)}];
  case'unlock':return[{unlock:a}];
  case'tp':return[{tp:a}];
  case'end':return[{end:a}];
  case'call':return[()=>{const r=ev(a.includes('(')?a:a+'()');return Array.isArray(r)?r:undefined}];
  case'scene':return[()=>scr(a)];
  case'goto':return[()=>{const k=ctx.labels[a];if(k===undefined){console.error('no label',a);return}const at=Q.indexOf(ctx.mark);if(at>0)Q.splice(0,at);return scCompile(ctx.top.slice(k+1),ctx)}];
  case'wait':return[];
  default:console.warn('unknown command',n.c);return[];
 }}
function scCompile(nodes,ctx){const out=[];
 for(const n of nodes){
  if(n.k==='say')out.push(Object.assign({},n.s));
  else if(n.k==='label'){}
  else if(n.k==='cmd')out.push(...scCmd(n,ctx));
  else if(n.k==='choice')out.push({choice:n.opts.map(o=>({t:o.t,hint:o.hint,if:o.cond?()=>!!ev(o.cond):undefined,then:()=>scCompile(o.body,ctx)}))});
  else if(n.k==='if')out.push(()=>{for(const b of n.br)if(ev(b.cond))return scCompile(b.body,ctx);return n.els?scCompile(n.els,ctx):undefined});
 }
 return out}
/* a scene's steps, fresh each time (choices and conditions are evaluated as they're reached) */
function scr(id){
 if(!SCAST[id]){if(SC[id]===undefined){console.error('no scene',id);return[N('['+id+']')]}SCAST[id]=scParse(SC[id],id)}
 const top=SCAST[id],labels={};top.forEach((n,k)=>{if(n.k==='label')labels[n.n]=k});
 const ctx={top,labels,mark:()=>{}};return scCompile(top,ctx).concat([ctx.mark]);
}
/* development check: parse every scene, report unknown speakers, commands, scenes and bad expressions */
function scLint(){const bad=[];for(const id in SC){try{const t=scParse(SC[id],id);(function walk(ns){for(const n of ns){
  if(n.k==='cmd'&&n.c==='scene'&&SC[n.a]===undefined)bad.push(id+': no scene '+n.a);
  if(n.k==='cmd'&&n.c==='clue'&&n.a.split(/\s+/).some(c=>!CLUE[c]))bad.push(id+': no clue '+n.a);
  if(n.k==='cmd'&&n.c==='item'&&!ITEMS[n.a])bad.push(id+': no item '+n.a);
  if(n.k==='cmd'&&n.c==='ach'&&!ACH[n.a])bad.push(id+': no achievement '+n.a);
  if(n.k==='cmd'&&n.c==='bg'&&!BG[n.a]&&!(typeof AREAS!=='undefined'&&AREAS[n.a]))bad.push(id+': no bg '+n.a);
  if(n.k==='say'&&n.s.w&&!['think','me','sms','whisper','wh1sper'].includes(n.s.w)&&!n.s.np&&!CH[n.s.w])bad.push(id+': speaker '+n.s.w);
  for(const e of [].concat(n.k==='if'?n.br.map(b=>b.cond):[],n.k==='choice'?n.opts.map(o=>o.cond).filter(Boolean):[]))try{eval('()=>('+e+')')}catch(x){bad.push(id+': expr '+e)}
  if(n.k==='choice')n.opts.forEach(o=>walk(o.body));if(n.k==='if'){n.br.forEach(b=>walk(b.body));if(n.els)walk(n.els)}}})(t)}catch(e){bad.push(String(e.message||e))}}return bad}

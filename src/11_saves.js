/* ============ SAVE SLOTS ============ */
const NSLOT=5;
const slotKey=i=>i==='auto'?'opsec3_save':'opsec3_slot_'+i;
function readSlot(i){try{const t=LS.get(slotKey(i));return t?JSON.parse(t):null}catch(e){return null}}
function delSlot(i){try{localStorage.removeItem(slotKey(i))}catch(e){}}
function stamp(){if(G.ok&&S.inWorld)S.pos=[WD.reg,WD.x,WD.z,WD.yaw,WD.y];S.savedAt=Date.now();S.where=(WD.area&&AREAS[WD.area])?AREAS[WD.area].n:(S.ch===0?'Home':'')}
function writeSlot(i){stamp();LS.set(slotKey(i),JSON.stringify(S))}
function canSave(){return S&&!S.ending&&!$('vn').classList.contains('on')&&($('world').classList.contains('on')||$('hub').classList.contains('on'))}
function fmtTime(t){if(!t)return'';const d=new Date(t);return d.toLocaleDateString(undefined,{day:'numeric',month:'short'})+' '+d.toLocaleTimeString(undefined,{hour:'2-digit',minute:'2-digit'})}
function slotLine(s){if(!s)return'<b>Empty slot</b><small>Nothing saved here yet.</small>';const met=ROM.filter(g=>s.f&&s.f['met_'+g]).length;return`<b>${esc(s.h)} · Ch.${s.ch} ${esc(CHAP[s.ch]?CHAP[s.ch][0]:'')}</b><small>${esc(s.where||'')}${s.where?' · ':''}${met} people met · ${fmtTime(s.savedAt)}</small>`}
const encodeSave=o=>btoa(unescape(encodeURIComponent(JSON.stringify(o))));
function decodeSave(t){t=(t||'').trim();let o=null;try{o=JSON.parse(t)}catch(e){try{o=JSON.parse(decodeURIComponent(escape(atob(t))))}catch(e2){}}if(!o||typeof o!=='object'||!o.h||o.ch===undefined||!o.aff||!o.stage)throw new Error('That doesn\'t look like an OPSEC Dating Simulator save.');return o}
function exportSave(o){
 const name=`opsec-${String(o.h).replace(/[^a-z0-9_-]/gi,'')||'save'}-ch${o.ch}.json`;
 try{const b=new Blob([JSON.stringify(o,null,1)],{type:'application/json'});const a=document.createElement('a');a.href=URL.createObjectURL(b);a.download=name;document.body.appendChild(a);a.click();setTimeout(()=>{URL.revokeObjectURL(a.href);a.remove()},800)}catch(e){}
 return name;
}
/* renders the saves panel into el; mode 'title' or 'phone' */
function savesPanel(el,mode,rerender){
 const live=mode==='phone';const can=live&&canSave();
 const rows=[['auto','Autosave']].concat(Array.from({length:NSLOT},(_,i)=>[String(i+1),'Slot '+(i+1)]));
 el.innerHTML=`${live?`<p class="small">${can?'Save to any slot. Loading replaces your current game.':'You can save while exploring, not in the middle of a conversation.'}</p>`:'<p class="small">Saves live in this browser. Export them to a file to keep them safe or move them to another device.</p>'}
 <div id="saveList">${rows.map(([k,n])=>{const s=readSlot(k);return`<div class="slot"><div class="info"><small style="color:var(--butter);font:15px VT323,monospace">${n}</small>${slotLine(s)}</div><div class="acts">${live&&k!=='auto'?`<button class="btn" data-a="save" data-k="${k}" ${can?'':'disabled'}>${s?'Overwrite':'Save here'}</button>`:''}${s?`<button class="btn pri" data-a="load" data-k="${k}">Load</button><button class="btn" data-a="exp" data-k="${k}">Export</button><button class="btn" data-a="del" data-k="${k}">Delete</button>`:''}</div></div>`}).join('')}</div>
 <p style="margin:16px 0 6px"><b>Import a save</b></p>
 <label class="btn" style="display:inline-flex;align-items:center;cursor:pointer">Choose a save file<input type="file" id="impFile" accept=".json,.txt,application/json,text/plain" style="display:none"></label>
 <textarea class="codebox" id="impCode" placeholder="...or paste a save code here"></textarea>
 <div class="row"><button class="btn" id="impGo">Load pasted code</button></div><p class="small" id="impMsg"></p><div id="expBox"></div>`;
 const confirmBtn=(b,fn)=>{if(b.dataset.c){fn();return}b.dataset.c=1;const t=b.textContent;b.textContent='Tap again to confirm';setTimeout(()=>{if(b.isConnected){b.textContent=t;delete b.dataset.c}},2500)};
 el.querySelectorAll('#saveList .btn').forEach(b=>b.onclick=()=>{const k=b.dataset.k,a=b.dataset.a;
  if(a==='save'){const go=()=>{writeSlot(k);toast('Saved to slot '+k,'var(--mint)');rerender()};readSlot(k)?confirmBtn(b,go):go()}
  if(a==='load'){const go=()=>{const s=readSlot(k);if(s)resumeGame(s)};live?confirmBtn(b,go):go()}
  if(a==='del')confirmBtn(b,()=>{delSlot(k);toast('Save deleted','var(--coral)');rerender()});
  if(a==='exp'){const s=readSlot(k);if(!s)return;const n=exportSave(s);$('expBox').innerHTML=`<p class="small" style="margin-top:12px">Downloading <b>${esc(n)}</b>. If nothing downloaded (some embedded viewers block downloads), copy this save code and keep it somewhere safe:</p><textarea class="codebox" readonly id="expCode">${encodeSave(s)}</textarea><div class="row"><button class="btn" id="expCopy">Copy code</button></div>`;$('expCopy').onclick=()=>{const t=$('expCode');t.select();try{navigator.clipboard.writeText(t.value).then(()=>toast('Copied','var(--mint)'),()=>{try{document.execCommand('copy');toast('Copied','var(--mint)')}catch(e){}})}catch(e){try{document.execCommand('copy')}catch(e2){}}};$('expBox').scrollIntoView({block:'nearest'})}
 });
 const takeImport=txt=>{try{const o=decodeSave(txt);o.ending=null;$('impMsg').textContent='Save found: '+o.h+', chapter '+o.ch+'. Loading...';setTimeout(()=>resumeGame(o),250)}catch(e){$('impMsg').textContent=e.message}};
 $('impFile').onchange=e=>{const f=e.target.files[0];if(!f)return;const r=new FileReader();r.onload=()=>takeImport(String(r.result));r.readAsText(f)};
 $('impGo').onclick=()=>takeImport($('impCode').value);
}
function savesScreen(){
 const draw=()=>{ov(`<div class="card"><h3>Load game</h3><div id="spanel"></div><div class="row"><button class="btn pri" id="sx2">Back</button></div></div>`);savesPanel($('spanel'),'title',draw);$('sx2').onclick=closeOv};draw();
}
function resumeGame(s){
 S=s;closeOv();$('ov').classList.remove('phoneov');
 if(!S.msgs)S.msgs=[];if(!S.log)S.log=[];
 // saves from before the map rebuild: positions point at the old layout, and Day 1 was a cutscene
 if(S.mapv!==2){S.pos=null;if(S.ch>=1&&S.resume!=='open')for(const k of['badge','open','checkin','room'])S.f['d1_'+k]=1;if(S.ch===0)S.resume='ch0';S.mapv=2}
 if(S.ch===0&&(!G.ok||!S.f.ch0intro)){const h=S.h;S=fresh(h);S.resume='ch0';startCh0();return}
 initWorld();
 if(S.pos&&G.ok&&G.regions[S.pos[0]])teleport(S.pos[0],S.pos[1],S.pos[2],S.pos[3],S.pos[4]||0);else if(G.ok)teleportArea(S.ch===0?'flat':S.ch===1&&!S.f.d1_badge?'vestibule':'foyer');
 WD.area=null;save();
 if(S.resume==='open'){run(OPEN[S.ch](),hub);return}
 hub();
}


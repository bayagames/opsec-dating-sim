/* ============ DEVICE + KEYBOARD ============ */
(()=>{const coarse=matchMedia&&matchMedia('(pointer:coarse)').matches&&!matchMedia('(pointer:fine)').matches;document.body.classList.add(coarse?'touchui':'desk');if(coarse)WD.touch=true})();
addEventListener('touchstart',()=>{if(!WD.touch)setTouch(true)},{passive:true});
/* no pinch or double-tap zoom on phones: the game owns every touch */
for(const ev of['gesturestart','gesturechange','dblclick'])addEventListener(ev,e=>{if(e.cancelable)e.preventDefault()},{passive:false});
addEventListener('mousemove',e=>{if(WD.touch&&e.movementX!==undefined&&(Math.abs(e.movementX)+Math.abs(e.movementY))>3&&!e.sourceCapabilities?.firesTouchEvents)setTouch(false)});
addEventListener('keydown',e=>{
 // the postgame sits over everything: Esc leaves it (closing a drawer first), and the phone keys do nothing under it
 if($('pgx')){const k=e.key;if(k==='Escape'||k==='Backspace'&&!/INPUT|TEXTAREA/.test((document.activeElement||{}).tagName||'')){e.preventDefault();e.stopImmediatePropagation();pgEsc()}else if(k==='Tab'||k==='p'||k==='P'){e.preventDefault();e.stopImmediatePropagation()}return}
 if(!S)return;
 const tag=(document.activeElement&&document.activeElement.tagName)||'';if(tag==='INPUT'||tag==='TEXTAREA')return;
 const k=e.key,ovOn=$('ov').classList.contains('on'),isPhone=$('ov').classList.contains('phoneov');
 // phone toggle / escape
 if((k==='p'||k==='P'||k==='Tab')&&!$('title').classList.contains('on')&&!$('card').classList.contains('on')){
  if(isPhone){e.preventDefault();closePhone();return}
  if(!ovOn){e.preventDefault();phone();return}
 }
 if(k==='Escape'&&isPhone){e.preventDefault();if($('ov').dataset.app)phoneBack();else closePhone();return}
 // Esc opens the phone (in the world the browser also uses Esc to release the mouse, which opens it too)
 if(k==='Escape'&&!ovOn&&!$('title').classList.contains('on')&&!$('card').classList.contains('on')){e.preventDefault();phone();return}
 if($('card').classList.contains('on')&&(k===' '||k==='Enter')){e.preventDefault();$('card').click();return}
 if(ovOn&&!isPhone){
  const ans=[...$('ov').querySelectorAll('.ans .ch:not([disabled])')];
  if(ans.length&&/^[1-9]$/.test(k)){const b=ans[+k-1];if(b){e.preventDefault();b.click()}return}
  if($('pP')&&!$('pP').disabled){if(k==='1'||k.toLowerCase()==='p'){e.preventDefault();$('pP').click();return}if(k==='2'||k.toLowerCase()==='l'){e.preventDefault();$('pL').click();return}}
  if($('gt')&&!$('gt').disabled&&(k===' '||k==='Enter')){e.preventDefault();$('gt').click();return}
  if((k==='Enter'||k===' ')){const p=[...$('ov').querySelectorAll('.btn.pri:not([disabled])')].pop();if(p){e.preventDefault();p.click()}}
  if(k==='Backspace'&&$('xu')&&!$('xu').disabled){e.preventDefault();$('xu').click()}
  return;
 }
 if($('vn').classList.contains('on')&&!ovOn){
  const chs=[...$('chs').querySelectorAll('.ch')];
  if(chs.length){if(/^[1-9]$/.test(k)&&chs[+k-1]){e.preventDefault();chs[+k-1].click()}return}
  if(k===' '||k==='Enter'||k==='ArrowRight'){e.preventDefault();tapBox()}
 }
});
/* click anywhere on the dialogue scene to advance (desktop convenience) */
$('vn').addEventListener('click',e=>{if(e.target.closest('#chs')||e.target.closest('#box'))return;tapBox()});

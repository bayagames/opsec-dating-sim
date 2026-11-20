/* ============ VIRTUAL CURSOR ============ */
/* On desktop the mouse stays captured (pointer-locked) the whole time you're in the 3D world, including
   conversations and minigames, so you never have to click your way back in. While a conversation or
   overlay is up, mouse movement drives this drawn cursor instead of the camera, and clicks, hovers,
   sliders and the wheel are forwarded to whatever is under it. Only the phone (Esc/P) frees the real mouse. */
const VC={x:0,y:0,on:false,hover:null,drag:null};
const lockEl=()=>$('app');
const locked=()=>document.pointerLockElement===lockEl();
function vcActive(){return locked()&&S&&S.inWorld&&!worldLive()}
function vcShow(on){if(on===VC.on)return;VC.on=on;$('vcur').style.display=on?'block':'none';if(on){if(!VC.placed){VC.placed=1;VC.x=innerWidth/2;VC.y=innerHeight*.62}vcMove(0,0)}else vcHover(null)}
function vcMove(dx,dy){VC.x=clamp(VC.x+dx,0,innerWidth-2);VC.y=clamp(VC.y+dy,0,innerHeight-2);$('vcur').style.transform=`translate(${VC.x}px,${VC.y}px)`;
 if(VC.drag){vcSlide(VC.drag);return}
 vcHover(vcTarget())}
function vcTarget(){const c=$('vcur');c.style.visibility='hidden';const el=document.elementFromPoint(VC.x,VC.y);c.style.visibility='';return el}
function vcHover(el){const b=el&&el.closest?el.closest('button,input,.loc,#box,.app,.chat,label'):null;if(b===VC.hover)return;if(VC.hover)VC.hover.classList.remove('vhover');VC.hover=b;$('vcur').classList.toggle('hot',!!(b&&!b.disabled));if(b){b.classList.add('vhover');if(b.tagName==='BUTTON'&&!b.disabled&&typeof sfx==='function')sfx('hover')}}
function vcSlide(r){const R=r.getBoundingClientRect(),t=clamp((VC.x-R.left)/R.width,0,1),mn=+r.min||0,mx=+r.max||100,st=+r.step||1;const v=Math.round((mn+t*(mx-mn))/st)*st;if(+r.value!==v){r.value=v;r.dispatchEvent(new Event('input',{bubbles:true}))}}
document.addEventListener('mousemove',e=>{if(!e.isTrusted||!vcActive())return;vcMove(e.movementX,e.movementY)});
document.addEventListener('mousedown',e=>{if(!e.isTrusted||!vcActive()||e.button!==0)return;const el=vcTarget();if(!el)return;
 const r=el.closest&&el.closest('input[type=range]');if(r){VC.drag=r;vcSlide(r);return}
 el.dispatchEvent(new MouseEvent('mousedown',{bubbles:true,cancelable:true,clientX:VC.x,clientY:VC.y}));VC.down=el});
document.addEventListener('mouseup',e=>{if(!e.isTrusted||!vcActive()||e.button!==0)return;
 if(VC.drag){VC.drag.dispatchEvent(new Event('change',{bubbles:true}));VC.drag=null;return}
 const el=vcTarget();if(!el||!VC.down)return;VC.down=null;
 if(el.closest('button')){const b=el.closest('button');if(!b.disabled)b.click();return}
 el.dispatchEvent(new MouseEvent('click',{bubbles:true,cancelable:true,clientX:VC.x,clientY:VC.y,view:window}))});
document.addEventListener('wheel',e=>{if(!vcActive())return;let el=vcTarget();while(el&&el!==document.body){const cs=getComputedStyle(el);if(/(auto|scroll)/.test(cs.overflowY)&&el.scrollHeight>el.clientHeight){el.scrollBy(0,e.deltaY);break}el=el.parentElement}},{passive:true});

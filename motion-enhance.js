/* Motion.dev progressive enhancement; requires only basic motion APIs. */
let motionApi;
try {
  // Official Motion package, imported using the documented ESM CDN approach.
  motionApi = await import('https://cdn.jsdelivr.net/npm/motion@12.23.12/+esm');
} catch (error) {
  console.info('Motion animations unavailable; using CSS/accessibility fallbacks.', error);
}
const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
function applyCardTilt(){
  if (reduced.matches || matchMedia('(pointer: coarse)').matches) return;
  document.querySelectorAll('.tilt-card').forEach(card => {
    card.addEventListener('pointermove', event => {
      const r=card.getBoundingClientRect();
      const dx=(event.clientX-r.left)/r.width-.5;
      const dy=(event.clientY-r.top)/r.height-.5;
      card.style.transform=`perspective(900px) rotateY(${dx*4}deg) rotateX(${-dy*4}deg)`;
      card.style.setProperty('--light-x',`${(dx+.5)*100}%`);
      card.style.setProperty('--light-y',`${(dy+.5)*100}%`);
    });
    card.addEventListener('pointerleave',()=>{card.style.transform='perspective(900px) rotateY(0deg) rotateX(0deg)';});
  });
}
function enterView(){
  applyCardTilt();
  if (!motionApi || reduced.matches) return;
  const {animate, stagger} = motionApi;
  const header = document.querySelector('.page-header');
  if (header) animate(header,{opacity:[0,1],y:[12,0]},{duration:.5,ease:'easeOut'});
  const group = [...document.querySelectorAll('[data-reveal]')];
  group.forEach((node)=>{node.style.opacity = 0;});
  if (group.length) animate(group,{opacity:[0,1],y:[22,0]},{duration:.55,delay:stagger(.065),ease:'easeOut'});
  const counters = [...document.querySelectorAll('[data-counter]')];
  counters.forEach(node=>{
    const target = Number(node.dataset.counter||0); if(!Number.isFinite(target))return;
    const obj={value:0};
    const formatter=node.dataset.format==='money'?v=>'$'+Math.round(v).toLocaleString():v=>Math.round(v).toLocaleString();
    node.textContent=formatter(0);
    const controls=animate(obj,{value:target},{duration:1.3,ease:'easeOut',onUpdate:()=>{ if(node.isConnected) node.textContent=formatter(obj.value);}});
    node._countAnim=controls;
  });
}
function openDialog(){
  if (!motionApi || reduced.matches)return;
  const modal=document.querySelector('.modal-window');const veil=document.querySelector('.modal-veil');
  if(modal)motionApi.animate(modal,{opacity:[0,1],scale:[.96,1],y:[16,0]},{duration:.33,ease:'easeOut'});
  if(veil)motionApi.animate(veil,{opacity:[0,1]},{duration:.2});
}
function highlightParcel(){
  if(!motionApi || reduced.matches)return;
  const node=document.querySelector('.parcel.selected');
  if(node)motionApi.animate(node,{scale:[.94,1.07,1]},{duration:.52,ease:'easeOut'});
}
function pulseSave(){
  if(!motionApi||reduced.matches)return;
  const node=document.querySelector('.toast');
  if(node)motionApi.animate(node,{opacity:[0,1],x:[20,0]},{duration:.28,ease:'easeOut'});
}
window.addEventListener('blockos:render',enterView);
window.addEventListener('blockos:dialog',openDialog);
window.addEventListener('blockos:parcel',highlightParcel);
window.addEventListener('blockos:toast',pulseSave);
if(document.querySelector('.shell'))enterView();

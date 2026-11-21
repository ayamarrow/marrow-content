/* Marrow ink board: loaded into every lecture by the app. Stylus draws, fingers scroll/zoom. */
(function(){
if(window.__inkLoaded||document.getElementById('inkw'))return;window.__inkLoaded=1;
/* in-page links (#section) scroll inside the lecture instead of leaving it */
document.addEventListener('click',function(e){var a=e.target.closest&&e.target.closest('a[href^="#"]');if(!a)return;e.preventDefault();var id=a.getAttribute('href').slice(1);try{id=decodeURIComponent(id)}catch(x){}var t=id&&document.getElementById(id);if(t)t.scrollIntoView({behavior:'smooth',block:'start'})},true);
function boot(){
var st=document.createElement('style');st.textContent=".inkc{position:absolute;left:0;top:0;pointer-events:none;mix-blend-mode:multiply;z-index:6}\n.inking .inkc{pointer-events:none!important;touch-action:auto!important;cursor:auto!important}\nbody.inking{-webkit-user-select:none;user-select:none;-webkit-touch-callout:none}\n#inkw{position:fixed;right:12px;bottom:78px;z-index:2147483000;direction:rtl;font-family:inherit}\n#inkT{width:50px;height:50px;border-radius:50%;border:1px solid #d9c690;background:#fff7df;font-size:22px;box-shadow:0 6px 18px rgba(120,100,40,.25);cursor:pointer}\n#inkT.on{background:#b89a5a;color:#fff}\n#inkP{position:absolute;right:0;bottom:60px;width:262px;background:#fffdf6;border:1px solid #e1d3a8;border-radius:20px;padding:10px;box-shadow:0 12px 30px rgba(90,70,30,.28)}\n#inkP[hidden]{display:none}\n#inkP .r{display:flex;flex-wrap:wrap;gap:6px;align-items:center;margin:6px 0}\n#inkP button{font-family:inherit;font-size:12.5px;font-weight:800;border:1px solid #dccd9c;background:#fff;border-radius:12px;padding:6px 9px;cursor:pointer}\n#inkP button.sel{background:#6b5a2f;color:#fff;border-color:#6b5a2f}\n#inkP .sw button{width:28px;height:28px;border-radius:50%;padding:0;border:2px solid #fff;box-shadow:0 0 0 1px #cbbb8a}\n#inkP .sw button.sel{box-shadow:0 0 0 3px #6b5a2f;background-clip:padding-box}\n#inkP input[type=color]{width:38px;height:28px;border:0;background:none;padding:0}\n#inkP input[type=range]{flex:1;min-width:90px}\n#inkP label{font-size:12px;font-weight:700;display:flex;align-items:center;gap:6px;flex:1}\n#inkPrev{height:34px;flex:1;display:flex;align-items:center;justify-content:center;background:repeating-linear-gradient(#fff 0 33px,#f3ecd8 33px 34px);border-radius:10px;border:1px solid #eadfba}\n@media print{#inkw{display:none}.inkc{mix-blend-mode:multiply}}\n";document.head.appendChild(st);
var w=document.createElement('div');w.innerHTML="<div id=\"inkw\"><button type=\"button\" id=\"inkT\" aria-label=\"\u0623\u0642\u0644\u0627\u0645\">\u270f\ufe0f</button><div id=\"inkP\" hidden><div class=\"r\"><button type=\"button\" data-t=\"pen\">\ud83d\udd8a\ufe0f \u0642\u0644\u0645 (\u0623\u0633\u0648\u062f)</button><button type=\"button\" data-t=\"hi\">\ud83d\udd8d\ufe0f \u0647\u0627\u064a\u0644\u0627\u064a\u062a</button><button type=\"button\" data-t=\"er\">\ud83e\uddfd \u0645\u0645\u062d\u0627\u0629</button><button type=\"button\" data-t=\"off\">\u270b \u062a\u0645\u0631\u064a\u0631</button></div><div class=\"r\"><button type=\"button\" data-o=\"ruler\">\ud83d\udccf \u062e\u0637 \u0645\u0633\u062a\u0642\u064a\u0645 (\u0645\u0633\u0637\u0631\u0629)</button><span style=\"font-size:11.5px;font-weight:700;color:#6b5a2f\">\u270d\ufe0f \u0627\u0644\u0642\u0644\u0645 \u0628\u0633 \u0628\u064a\u0631\u0633\u0645. \u0627\u0644\u0625\u0635\u0628\u0639 \u0644\u0644\u062a\u0645\u0631\u064a\u0631 \u0648\u0627\u0644\u062a\u0643\u0628\u064a\u0631. \u0627\u0644\u0643\u062a\u0627\u0628\u0629 \u062c\u0646\u0628 \u0627\u0644\u062c\u0645\u0644\u0629 \u0628\u062a\u0635\u064a\u0631 \u0646\u0648\u062a.</span></div><div class=\"r sw\"><button type=\"button\" data-c=\"#000000\" style=\"background:#000000\" aria-label=\"\u0623\u0633\u0648\u062f\"></button><button type=\"button\" data-c=\"#ffd84d\" style=\"background:#ffd84d\" aria-label=\"\u0644\u0648\u0646\"></button><button type=\"button\" data-c=\"#9be37d\" style=\"background:#9be37d\" aria-label=\"\u0644\u0648\u0646\"></button><button type=\"button\" data-c=\"#ff9ec7\" style=\"background:#ff9ec7\" aria-label=\"\u0644\u0648\u0646\"></button><button type=\"button\" data-c=\"#7cc8ff\" style=\"background:#7cc8ff\" aria-label=\"\u0644\u0648\u0646\"></button><button type=\"button\" data-c=\"#ffb35c\" style=\"background:#ffb35c\" aria-label=\"\u0644\u0648\u0646\"></button><button type=\"button\" data-c=\"#c4a3ff\" style=\"background:#c4a3ff\" aria-label=\"\u0644\u0648\u0646\"></button><button type=\"button\" data-c=\"#ff5a5a\" style=\"background:#ff5a5a\" aria-label=\"\u0644\u0648\u0646\"></button><button type=\"button\" data-c=\"#2b2b2b\" style=\"background:#2b2b2b\" aria-label=\"\u0644\u0648\u0646\"></button></div><div class=\"r\"><label>\u0644\u0648\u0646 \u062e\u0627\u0635 <input type=\"color\" id=\"inkC\" value=\"#000000\"></label><div id=\"inkPrev\"></div></div><div class=\"r\"><label>\u0627\u0644\u0633\u0645\u0627\u0643\u0629 <input type=\"range\" id=\"inkS\" min=\"1\" max=\"6\" step=\".5\" value=\"2.6\"></label></div><div class=\"r\"><button type=\"button\" id=\"inkU\">\u21a9\ufe0f \u062a\u0631\u0627\u062c\u0639</button><button type=\"button\" id=\"inkX\">\ud83d\uddd1\ufe0f \u0645\u0633\u062d \u0627\u0644\u0643\u0644</button></div></div></div>";while(w.firstChild)document.body.appendChild(w.firstChild);
var dbg=document.createElement('div');dbg.id='inkDbg';dbg.style.cssText='font-size:11px;color:#6b5a2f;margin-top:4px;font-weight:700';dbg.textContent='نسخة 2 · آخر لمسة: -';document.getElementById('inkP').appendChild(dbg);
(function(){
var KEY=window.INK_KEY||('marrow-ink-'+(location.pathname.split('/').pop()||'page')),data={},tool='off',color='#000000',W={pen:2.6,hi:18},hist=[],ruler=false,smooth=true;
try{data=JSON.parse(localStorage.getItem(KEY)||'{}')||{}}catch(e){data={}}
function save(){try{localStorage.setItem(KEY,JSON.stringify(data))}catch(e){}}
var SEL='p,li,h3,h4,td,th,summary,.qq,.qwa,.ct,.cl,.simple';
var hosts=[].slice.call(document.querySelectorAll('section')).filter(function(s){return !s.parentElement.closest('section')}),cv={},BL={};
hosts.forEach(function(h,i){if(!h.id)h.id='h'+i;if(getComputedStyle(h).position==='static')h.style.position='relative';var c=document.createElement('canvas');c.className='inkc';h.appendChild(c);cv[h.id]=c;BL[h.id]=[].slice.call(h.querySelectorAll(SEL))});
function dpr(){return window.devicePixelRatio||1}
function size(h){var c=cv[h.id],r=h.getBoundingClientRect(),d=Math.min(dpr(),30000/Math.max(1,r.height));if(!r.width)return;c._d=d;c.width=Math.round(r.width*d);c.height=Math.round(r.height*d);c.style.width=r.width+'px';c.style.height=r.height+'px';draw(h)}
/* y offset of the sentence a note is attached to, so the note follows that sentence */
function offOf(h,a){if(a==null)return 0;var b=BL[h.id][a];if(!b)return 0;var br=b.getBoundingClientRect();if(!br.width&&!br.height)return 0;return br.top-h.getBoundingClientRect().top}
function rr(x,a,b,w,h,r){x.beginPath();x.moveTo(a+r,b);x.arcTo(a+w,b,a+w,b+h,r);x.arcTo(a+w,b+h,a,b+h,r);x.arcTo(a,b+h,a,b,r);x.arcTo(a,b,a+w,b,r);x.closePath()}
function draw(h){var c=cv[h.id],x=c.getContext('2d'),d=c._d||dpr(),w=c.width/d;x.setTransform(d,0,0,d,0,0);x.clearRect(0,0,c.width,c.height);
 var arr=data[h.id]||[],oc={};function O(s){if(s.a==null)return 0;if(!(s.a in oc))oc[s.a]=offOf(h,s.a);return oc[s.a]}
 var gs={};arr.forEach(function(s){if(s.t!=='pen'||s.g==null)return;var o=O(s),g=gs[s.g]=gs[s.g]||{x0:1e9,y0:1e9,x1:-1e9,y1:-1e9};s.p.forEach(function(q){var X=q[0]*w,Y=q[1]+o;if(X<g.x0)g.x0=X;if(X>g.x1)g.x1=X;if(Y<g.y0)g.y0=Y;if(Y>g.y1)g.y1=Y})});
  arr.forEach(function(s){one(x,s,w,O(s))})}
function wd(s,q){return s.w*(0.65+0.9*(q[2]!=null?q[2]:.5))}
function one(x,s,w,o){var p=s.p;if(!p.length)return;x.save();x.lineCap='round';x.lineJoin='round';x.strokeStyle=s.c;x.fillStyle=s.c;x.globalAlpha=s.t==='hi'?0.42:1;
 function X(q){return q[0]*w}function Y(q){return q[1]+o}
 if(p.length===1){x.beginPath();x.arc(X(p[0]),Y(p[0]),Math.max(.8,wd(s,p[0])/2),0,6.3);x.fill();x.restore();return}
 if(s.t==='hi'||s.r){x.lineWidth=s.w;x.beginPath();x.moveTo(X(p[0]),Y(p[0]));for(var i=1;i<p.length;i++)x.lineTo(X(p[i]),Y(p[i]));x.stroke();x.restore();return}
 var m0=[X(p[0]),Y(p[0])];
 for(var i=1;i<p.length-1;i++){var m1=[(X(p[i])+X(p[i+1]))/2,(Y(p[i])+Y(p[i+1]))/2];x.lineWidth=wd(s,p[i]);x.beginPath();x.moveTo(m0[0],m0[1]);x.quadraticCurveTo(X(p[i]),Y(p[i]),m1[0],m1[1]);x.stroke();m0=m1}
 var l=p[p.length-1];x.lineWidth=wd(s,l);x.beginPath();x.moveTo(m0[0],m0[1]);x.lineTo(X(l),Y(l));x.stroke();x.restore()}
function hostOf(t){var s=t&&t.closest?t.closest('section'):null;while(s&&hosts.indexOf(s)<0)s=s.parentElement?s.parentElement.closest('section'):null;return s}
function absPos(h,e){var r=h.getBoundingClientRect();return [(e.clientX-r.left)/r.width,e.clientY-r.top,r.width]}
var cur=null,curH=null,curO=0,erasing=false,lastEnd=null;
function allowed(e){return e.pointerType==='pen'||(e.pointerType==='mouse'&&!(navigator.maxTouchPoints>0))}
document.addEventListener('pointerdown',function(e){var d=document.getElementById('inkDbg');if(d)d.textContent='نسخة 2 · آخر لمسة: '+e.pointerType+(allowed(e)?' (يرسم)':' (ما يرسم)')},true);
function skip(t){return t&&t.closest&&t.closest('#inkw,nav,.bnav,button,a,input,label,select,summary,.fz')}
/* only the stylus draws; fingers keep scrolling and pinch-zooming */
document.addEventListener('touchstart',function(e){if(tool==='off'||skip(e.target))return;var st=false;for(var i=0;i<e.changedTouches.length;i++)if(e.changedTouches[i].touchType==='stylus')st=true;if(st&&e.cancelable)e.preventDefault()},{passive:false});
document.addEventListener('touchmove',function(e){if(cur&&e.cancelable)e.preventDefault()},{passive:false});
document.addEventListener('contextmenu',function(e){if(tool!=='off'&&e.pointerType!=='touch'&&(cur||e.button===2||true)&&!skip(e.target)&&hostOf(e.target)&&cur)e.preventDefault()});
document.addEventListener('pointerdown',function(e){
 if(tool==='off'||!allowed(e)||skip(e.target))return;
 var h=hostOf(e.target);if(!h)return;e.preventDefault();
 var p=absPos(h,e),w=p[2],now=Date.now();erasing=(tool==='er')||(e.buttons&32)||e.button===5;curH=h;
 if(erasing){cur='er';erase(h,p);return}
 var blk=e.target.closest(SEL),a=blk?BL[h.id].indexOf(blk):-1,g=null;if(a<0)a=null;
 if(tool==='pen'){
  if(lastEnd&&lastEnd.h===h.id&&now-lastEnd.t<3500&&Math.hypot((p[0]-lastEnd.x)*w,p[1]-lastEnd.y)<280){a=lastEnd.a;g=lastEnd.g}
  else g=now;
 }
 curO=offOf(h,a);
 var s={t:tool,c:color,w:W[tool],r:ruler?1:0,a:a,g:g,p:[[p[0],p[1]-curO,e.pointerType==='mouse'?.5:(e.pressure||.5)]]};
 (data[h.id]=data[h.id]||[]).push(s);hist.push(h.id);cur=s;draw(h)});
document.addEventListener('pointermove',function(e){
 if(!cur||!allowed(e))return;e.preventDefault();var h=curH;
 var evs=e.getCoalescedEvents?e.getCoalescedEvents():[e];if(!evs.length)evs=[e];
 evs.forEach(function(ev){var p=absPos(h,ev),w=p[2];
  if(cur==='er'){erase(h,p);return}
  var q=[p[0],p[1]-curO,e.pointerType==='mouse'?.5:(ev.pressure||.5)],l=cur.p[cur.p.length-1];
  if(cur.r){cur.p=[cur.p[0],q];return}
  if(Math.hypot((q[0]-l[0])*w,q[1]-l[1])<1.2)return;cur.p.push(q)});
 draw(h)});
function end(e){if(!cur)return;if(cur!=='er'){var h=curH,l=cur.p[cur.p.length-1],w=h.getBoundingClientRect().width;lastEnd={h:h.id,t:Date.now(),x:l[0],y:l[1]+curO,a:cur.a,g:cur.g}}cur=null;save();if(curH)draw(curH)}
document.addEventListener('pointerup',end);document.addEventListener('pointercancel',end);
function erase(h,p){var a=data[h.id]||[],w=p[2],n=a.length,oc={};function O(s){if(s.a==null)return 0;if(!(s.a in oc))oc[s.a]=offOf(h,s.a);return oc[s.a]}
 data[h.id]=a.filter(function(s){var o=O(s);return !s.p.some(function(q){return Math.hypot((q[0]-p[0])*w,q[1]+o-p[1])<14})});if(data[h.id].length!==n){draw(h);save()}}
var ro=window.ResizeObserver?new ResizeObserver(function(es){es.forEach(function(e){size(e.target)})}):null;
hosts.forEach(function(h){if(ro)ro.observe(h);size(h)});
window.addEventListener('resize',function(){hosts.forEach(size)});window.addEventListener('load',function(){hosts.forEach(size)});
var P=document.getElementById('inkP'),T=document.getElementById('inkT'),S=document.getElementById('inkS'),prev=document.getElementById('inkPrev'),C=document.getElementById('inkC');
function dark(hx){var n=parseInt(hx.slice(1),16),r=n>>16,g=(n>>8)&255,b=n&255;return (.299*r+.587*g+.114*b)<130}
function paint(){var t=tool==='er'||tool==='off'?'pen':tool;if(prev){var w=W[t];prev.innerHTML='<span style="display:block;width:70%;height:'+w+'px;border-radius:'+w+'px;background:'+color+';opacity:'+(t==='hi'?.5:1)+'"></span>'}
 if(S){var hi=tool==='hi';S.min=hi?8:1;S.max=hi?30:6;S.step=hi?1:.5;S.value=W[hi?'hi':'pen']}
 T.classList.toggle('on',tool!=='off');document.body.classList.toggle('inking',tool!=='off');
 [].forEach.call(P.querySelectorAll('[data-t]'),function(b){b.classList.toggle('sel',b.dataset.t===tool)});
 [].forEach.call(P.querySelectorAll('[data-o]'),function(b){b.classList.toggle('sel',b.dataset.o==='ruler'?ruler:false)});
 [].forEach.call(P.querySelectorAll('[data-c]'),function(b){b.classList.toggle('sel',b.dataset.c.toLowerCase()===color.toLowerCase())})}
T.addEventListener('click',function(){P.hidden=!P.hidden;if(!P.hidden&&tool==='off'){tool='pen';color='#000000';paint()}});
P.addEventListener('click',function(e){var b=e.target.closest('button');if(!b)return;
 if(b.dataset.t){tool=b.dataset.t;if(tool==='hi'&&W.hi<8)W.hi=18;if(tool==='pen'&&dark(color)===false&&false)color='#000000'}
 if(b.dataset.o==='ruler'){ruler=!ruler}
 if(b.dataset.c){color=b.dataset.c;if(tool==='off'||tool==='er'||tool==='pen'||tool==='hi')tool=dark(color)?'pen':'hi'}
 if(b.id==='inkU'){var id=hist.pop();if(id&&data[id]&&data[id].length){data[id].pop();draw(document.getElementById(id));save()}}
 if(b.id==='inkX'){if(b.dataset.ask){data={};hist=[];save();hosts.forEach(draw);b.textContent='🗑️ مسح الكل';delete b.dataset.ask}else{b.dataset.ask=1;b.textContent='متأكدة؟ دوسي مرة تانية';setTimeout(function(){if(b.dataset.ask){delete b.dataset.ask;b.textContent='🗑️ مسح الكل'}},3000)}}
 paint()});
S.addEventListener('input',function(){var k=tool==='hi'?'hi':'pen';W[k]=+S.value;paint()});
C.addEventListener('input',function(){color=C.value;tool=dark(color)?'pen':'hi';paint()});
paint()})();

}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot);else boot();
})();


const navToggle=document.querySelector('.nav-toggle'),mainNav=document.querySelector('.main-nav');if(navToggle&&mainNav){navToggle.addEventListener('click',()=>{const isOpen=mainNav.classList.toggle('open');navToggle.setAttribute('aria-expanded',String(isOpen));});}const year=document.getElementById('year');if(year){year.textContent=new Date().getFullYear();}const revealItems=document.querySelectorAll('.reveal');if('IntersectionObserver'in window){const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}});},{threshold:.12});revealItems.forEach(item=>observer.observe(item));}else{revealItems.forEach(item=>item.classList.add('visible'));}const track=document.getElementById('reviewTrack'),prev=document.getElementById('reviewPrev'),next=document.getElementById('reviewNext');let reviewIndex=0;function visibleSlides(){if(window.innerWidth<=600)return 1;if(window.innerWidth<=980)return 2;return 3;}function updateCarousel(){if(!track)return;const slides=[...track.querySelectorAll('.review-slide')];if(!slides.length)return;const maxIndex=Math.max(0,slides.length-visibleSlides());reviewIndex=Math.min(reviewIndex,maxIndex);const slideWidth=slides[0].getBoundingClientRect().width;const gap=22;track.style.transform=`translateX(-${reviewIndex*(slideWidth+gap)}px)`;}if(track&&prev&&next){prev.addEventListener('click',()=>{reviewIndex=Math.max(0,reviewIndex-1);updateCarousel();});next.addEventListener('click',()=>{const slides=[...track.querySelectorAll('.review-slide')];const maxIndex=Math.max(0,slides.length-visibleSlides());reviewIndex=Math.min(maxIndex,reviewIndex+1);updateCarousel();});window.addEventListener('resize',updateCarousel);updateCarousel();}document.querySelectorAll('form.js-web3form').forEach(form=>{const status=form.querySelector('.form-status');form.addEventListener('submit',async event=>{event.preventDefault();const endpoint=form.getAttribute('action');if(status){status.textContent='Submitting...';status.className='form-status';}try{const formData=new FormData(form);const response=await fetch(endpoint,{method:'POST',body:formData,headers:{Accept:'application/json'}});if(!response.ok)throw new Error('Form submission failed');form.reset();if(form.id==='crashForm'&&window.updateCrashPrice)window.updateCrashPrice();const rv=form.getAttribute('data-reveal');if(rv){const t=document.getElementById(rv);if(t){t.hidden=false;t.scrollIntoView({behavior:'smooth',block:'nearest'});}}if(status){status.textContent='Thank you. We have received your submission and will be in touch by email shortly.';status.className='form-status success';}}catch(error){if(status){status.textContent='Something went wrong. Please email Topmarktutors99@gmail.com directly.';status.className='form-status error';}}});});


const founderCards=document.querySelectorAll('.founder-preview-card');const founderModal=document.getElementById('founderModal');const profilePanels=document.querySelectorAll('.profile-panel');function openFounderProfile(id){if(!founderModal)return;profilePanels.forEach(panel=>panel.classList.toggle('active',panel.id===`profile-${id}`));founderModal.classList.add('open');founderModal.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';}function closeFounderProfile(){if(!founderModal)return;founderModal.classList.remove('open');founderModal.setAttribute('aria-hidden','true');document.body.style.overflow='';}founderCards.forEach(card=>{card.addEventListener('click',()=>openFounderProfile(card.dataset.founder));card.addEventListener('keydown',event=>{if(event.key==='Enter'||event.key===' '){event.preventDefault();openFounderProfile(card.dataset.founder);}});});document.querySelectorAll('[data-close-profile]').forEach(btn=>btn.addEventListener('click',closeFounderProfile));document.addEventListener('keydown',event=>{if(event.key==='Escape')closeFounderProfile();});


/* V17: Crash Course live pricing */
(function(){const form=document.getElementById('crashForm');if(!form)return;
const PRICING={1:{e:349,s:399,save:50},2:{e:599,s:699,save:100},3:{e:799,s:949,save:150},4:{e:949,s:1149,save:200}};
const EARLY_END=new Date('2026-09-06T23:59:59+09:30');
const money=n=>'$'+n.toLocaleString('en-AU');
const boxes=form.querySelectorAll('.js-subject');
const el=id=>document.getElementById(id);
function update(){
 const picked=[...boxes].filter(b=>b.checked).map(b=>b.value);
 const n=Math.min(picked.length,4);
 const isEarly=new Date()<=EARLY_END;
 const windowName=isEarly?'Early bird':'Standard';
 const pr=n?PRICING[n]:null;const shown=pr?(isEarly?pr.e:pr.s):0;
 el('subjectCount').innerHTML=n?`<strong>${n} subject${n>1?'s':''} selected:</strong> ${picked.join(', ')} <span class="inline-price">${isEarly?'<s>'+money(pr.s)+'</s> ':''}${money(shown)}${isEarly?' · save '+money(pr.save):''}</span>`:'No subjects selected yet';
 el('sumWindow').textContent=isEarly?'Early bird pricing applies until 6 September.':'Standard pricing applies. Enrolments close 25 September.';
 if(!n){el('sumPkg').textContent='Select your subjects';el('sumOld').textContent='';el('sumNew').textContent='$0';el('sumSave').textContent='';el('fldPackage').value='';el('fldPrice').value='';el('fldWindow').value=windowName;return;}
 const p=PRICING[n];const price=isEarly?p.e:p.s;
 el('sumPkg').textContent=(n===4?'All 4 subjects':n+' subject'+(n>1?'s':''));
 el('sumOld').textContent=isEarly?money(p.s):'';
 el('sumNew').textContent=money(price);
 el('sumSave').textContent=isEarly?('You save '+money(p.save)):'';
 el('fldPackage').value=(n===4?'All 4 subjects':n+' subject'+(n>1?'s':''))+' ('+picked.join(', ')+')';
 el('fldPrice').value=money(price);
 el('fldWindow').value=windowName;
}
window.updateCrashPrice=update;
boxes.forEach(b=>b.addEventListener('change',update));
const pay=document.getElementById('payDetails');
form.querySelectorAll('.js-intent').forEach(r=>r.addEventListener('change',()=>{
 const booking=form.querySelector('.js-intent:checked').value.indexOf('Book')===0;
 pay.classList.toggle('is-dim',!booking);
}));
update();})();


/* V18: early bird countdown on the homepage hero */
(function(){const box=document.getElementById('crashCountdown');if(!box)return;
const END=new Date('2026-09-06T23:59:59+09:30');
function tick(){const diff=END-new Date();
 if(diff<=0){box.classList.add('is-over');box.innerHTML='<div><strong>Standard pricing now applies</strong><span>Enrolments close 25 September</span></div>';return;}
 const d=Math.floor(diff/86400000),h=Math.floor(diff/3600000)%24,m=Math.floor(diff/60000)%60;
 box.innerHTML=`<div><strong>${d}</strong><span>days</span></div><div><strong>${h}</strong><span>hrs</span></div><div><strong>${m}</strong><span>mins</span></div>`;}
tick();setInterval(tick,30000);})();

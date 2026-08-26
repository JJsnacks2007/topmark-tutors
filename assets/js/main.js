
const navToggle=document.querySelector('.nav-toggle'),mainNav=document.querySelector('.main-nav');if(navToggle&&mainNav){navToggle.addEventListener('click',()=>{const isOpen=mainNav.classList.toggle('open');navToggle.setAttribute('aria-expanded',String(isOpen));});}const year=document.getElementById('year');if(year){year.textContent=new Date().getFullYear();}const revealItems=document.querySelectorAll('.reveal');if('IntersectionObserver'in window){const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}});},{threshold:.12});revealItems.forEach(item=>observer.observe(item));}else{revealItems.forEach(item=>item.classList.add('visible'));}const track=document.getElementById('reviewTrack'),prev=document.getElementById('reviewPrev'),next=document.getElementById('reviewNext');let reviewIndex=0;function visibleSlides(){if(window.innerWidth<=600)return 1;if(window.innerWidth<=980)return 2;return 3;}function updateCarousel(){if(!track)return;const slides=[...track.querySelectorAll('.review-slide')];if(!slides.length)return;const maxIndex=Math.max(0,slides.length-visibleSlides());reviewIndex=Math.min(reviewIndex,maxIndex);const slideWidth=slides[0].getBoundingClientRect().width;const gap=22;track.style.transform=`translateX(-${reviewIndex*(slideWidth+gap)}px)`;}if(track&&prev&&next){prev.addEventListener('click',()=>{reviewIndex=Math.max(0,reviewIndex-1);updateCarousel();});next.addEventListener('click',()=>{const slides=[...track.querySelectorAll('.review-slide')];const maxIndex=Math.max(0,slides.length-visibleSlides());reviewIndex=Math.min(maxIndex,reviewIndex+1);updateCarousel();});window.addEventListener('resize',updateCarousel);updateCarousel();}document.querySelectorAll('form.js-web3form').forEach(form=>{const status=form.querySelector('.form-status');form.addEventListener('submit',async event=>{event.preventDefault();const endpoint=form.getAttribute('action');if(status){status.textContent='Submitting...';status.className='form-status';}try{const formData=new FormData(form);const response=await fetch(endpoint,{method:'POST',body:formData,headers:{Accept:'application/json'}});if(!response.ok)throw new Error('Form submission failed');if(window.trackMetaLead)window.trackMetaLead(form,formData);form.reset();if(form.id==='crashForm'&&window.updateCrashPrice)window.updateCrashPrice();const rv=form.getAttribute('data-reveal');if(rv){const t=document.getElementById(rv);if(t){t.hidden=false;t.scrollIntoView({behavior:'smooth',block:'nearest'});}}if(status){status.textContent='Thank you. We have received your submission and will be in touch by email shortly.';status.className='form-status success';}}catch(error){if(status){status.textContent='Something went wrong. Please email Topmarktutors99@gmail.com directly.';status.className='form-status error';}}});});


const founderCards=document.querySelectorAll('.founder-preview-card');const founderModal=document.getElementById('founderModal');const profilePanels=document.querySelectorAll('.profile-panel');function openFounderProfile(id){if(!founderModal)return;profilePanels.forEach(panel=>panel.classList.toggle('active',panel.id===`profile-${id}`));founderModal.classList.add('open');founderModal.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';}function closeFounderProfile(){if(!founderModal)return;founderModal.classList.remove('open');founderModal.setAttribute('aria-hidden','true');document.body.style.overflow='';}founderCards.forEach(card=>{card.addEventListener('click',()=>openFounderProfile(card.dataset.founder));card.addEventListener('keydown',event=>{if(event.key==='Enter'||event.key===' '){event.preventDefault();openFounderProfile(card.dataset.founder);}});});document.querySelectorAll('[data-close-profile]').forEach(btn=>btn.addEventListener('click',closeFounderProfile));document.addEventListener('keydown',event=>{if(event.key==='Escape')closeFounderProfile();});


/* V17: Crash Course live pricing (V25: per-hour rate) */
(function(){const form=document.getElementById('crashForm');if(!form)return;
const PRICING={1:{e:349,s:399,save:50,h:12},2:{e:599,s:699,save:100,h:24},3:{e:799,s:949,save:150,h:36},4:{e:949,s:1149,save:200,h:48}};
const EARLY_END=new Date('2026-09-06T23:59:59+09:30');
const money=n=>'$'+n.toLocaleString('en-AU');
const perHour=(total,hours)=>'$'+Math.ceil(total/hours);
const boxes=form.querySelectorAll('.js-subject');
const el=id=>document.getElementById(id);
function update(){
 const picked=[...boxes].filter(b=>b.checked).map(b=>b.value);
 const n=Math.min(picked.length,4);
 const isEarly=new Date()<=EARLY_END;
 const windowName=isEarly?'Early bird':'Standard';
 el('sumWindow').textContent=isEarly?'Early bird pricing applies until 6 September.':'Standard pricing applies. Enrolments close 25 September.';
 if(!n){el('subjectCount').innerHTML='No subjects selected yet';el('sumPkg').textContent='Select your subjects';el('sumNew').textContent='$0';el('sumPerHr').textContent='';el('sumTotal').innerHTML='';el('sumSave').textContent='';el('fldPackage').value='';el('fldPrice').value='';el('fldWindow').value=windowName;return;}
 const p=PRICING[n];const price=isEarly?p.e:p.s;const rate=perHour(price,p.h);
 const label=(n===4?'All 4 subjects':n+' subject'+(n>1?'s':''));
 el('subjectCount').innerHTML=`<strong>${n} subject${n>1?'s':''} selected:</strong> ${picked.join(', ')} <span class="inline-price">${rate}<em>/hr</em> <span>${money(price)} total</span></span>`;
 el('sumPkg').textContent=label+', '+p.h+' hours of teaching';
 el('sumNew').textContent=rate;
 el('sumPerHr').textContent='per hour';
 el('sumTotal').innerHTML=`<strong>${money(price)}</strong> total${isEarly?' <s>'+money(p.s)+'</s>':''}`;
 el('sumSave').textContent=isEarly?('You save '+money(p.save)):'';
 el('fldPackage').value=label+' ('+picked.join(', ')+')';
 el('fldPrice').value=money(price)+' total, '+rate+' per hour across '+p.h+' hours';
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


/* V26: Meta Pixel events.
   The base pixel lives in the <head> of each page and sets window.TM_PIXEL_ID.
   Everything below fires on top of it. All four forms submit by fetch with no
   page reload, so Lead has to fire in the success path, not on a thank-you page. */
(function(){
  var FORMS={
    guideForm:    {name:'Free SACE Guide',      category:'Lead magnet'},
    guideFormDark:{name:'Free SACE Guide',      category:'Lead magnet'},
    crashForm:    {name:'Crash Course booking', category:'Crash Course'},
    contactForm:  {name:'General enquiry',      category:'Tutoring'}
  };

  function ready(){return typeof window.fbq==='function'&&!!window.TM_PIXEL_ID;}

  /* Meta hashes advanced matching values itself, but only normalised values match
     well: lower case, trimmed, phone as digits in international format. */
  function norm(v){return (v==null?'':String(v)).trim().toLowerCase();}

  function auPhone(v){
    var d=(v==null?'':String(v)).replace(/[^0-9]/g,'');
    if(!d)return '';
    if(d.charAt(0)==='0')d='61'+d.slice(1);
    else if(d.slice(0,2)!=='61')d='61'+d;
    return d;
  }

  /* Meta wants names as letters only: lower case, no punctuation. */
  var NAME_STRIP;
  try{NAME_STRIP=new RegExp('[^\\p{L}\\s]','gu');}catch(e){NAME_STRIP=/[^a-z\s]/g;}
  function splitName(v){
    var p=norm(v).replace(NAME_STRIP,'').replace(/\s+/g,' ').trim().split(' ').filter(Boolean);
    if(!p.length)return {};
    return {fn:p[0],ln:p.length>1?p[p.length-1]:''};
  }

  /* One id per event so a browser event and its Conversions API twin collapse
     into a single conversion instead of being counted twice. */
  function eventId(){
    if(window.crypto&&window.crypto.randomUUID)return window.crypto.randomUUID();
    return 'tm-'+Date.now()+'-'+Math.random().toString(16).slice(2);
  }

  function meta(form){
    return FORMS[form.id]||{name:form.id||'Form',category:'Lead'};
  }

  window.trackMetaLead=function(form,data){
    if(!ready()||!data)return;

    /* Where a form asks for both, the parent is the contactable adult and the
       student is a minor. Match on the parent. */
    var contact=data.get('parent_name')||data.get('name')||data.get('student_name');
    var name=splitName(contact);

    var match={ct:'adelaide',st:'sa',country:'au'};
    if(data.get('email'))match.em=norm(data.get('email'));
    if(data.get('phone'))match.ph=auPhone(data.get('phone'));
    if(name.fn)match.fn=name.fn;
    if(name.ln)match.ln=name.ln;

    /* Re-initialising attaches the match keys to everything sent after it. */
    window.fbq('init',window.TM_PIXEL_ID,match);

    var m=meta(form);
    var params={content_name:m.name,content_category:m.category};

    var pkg=data.get('package');
    if(pkg)params.content_ids=[pkg];

    /* price_applied reads "$949 total, $20 per hour across 48 hours", so take
       the first dollar figure only. */
    var price=String(data.get('price_applied')||'').match(/\$([\d,]+)/);
    if(price){params.value=parseFloat(price[1].replace(/,/g,''));params.currency='AUD';}

    /* Only the Crash Course form picks a package of subjects, so num_items
       means something there and nowhere else. */
    if(pkg&&data.getAll){
      var subjects=data.getAll('subjects');
      if(subjects.length)params.num_items=subjects.length;
    }

    var intent=data.get('enquiry_type');
    if(intent)params.enquiry_type=intent;

    window.fbq('track','Lead',params,{eventID:eventId()});
  };

  /* Higher-funnel events, for while Lead volume is under ~50/week per ad set. */
  document.addEventListener('DOMContentLoaded',function(){
    if(!ready())return;

    /* Anyone who reaches the Crash Course pricing block. */
    if(document.getElementById('pricing')){
      window.fbq('track','ViewContent',{
        content_name:'Crash Course pricing',content_category:'Crash Course'
      });
    }

    /* Fires once per form, the moment someone starts filling it in. */
    Array.prototype.forEach.call(document.querySelectorAll('form.js-web3form'),function(form){
      var started=false;
      form.addEventListener('focusin',function(){
        if(started||!ready())return;
        started=true;
        window.fbq('trackCustom','FormStarted',{content_name:meta(form).name});
      });
    });
  });
})();

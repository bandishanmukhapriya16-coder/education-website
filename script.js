/ Mobile menu
document.addEventListener('DOMContentLoaded',()=>{
  const btn=document.querySelector('.menu-btn');
  const links=document.querySelector('.nav-links');
  if(btn)btn.addEventListener('click',()=>links.classList.toggle('open'));
  // Active link
  const path=location.pathname.split('/').pop()||'index.html';
  document.querySelectorAll('.nav-links a').forEach(a=>{
    if(a.getAttribute('href')===path)a.classList.add('active');
  });
  // Slider
  const slides=document.querySelector('.slides');
  if(slides){
    const total=slides.children.length;let i=0;
    const go=n=>{i=(n+total)%total;slides.style.transform=`translateX(-${i*100}%)`};
    document.querySelector('.slider-btn.prev')?.addEventListener('click',()=>go(i-1));
    document.querySelector('.slider-btn.next')?.addEventListener('click',()=>go(i+1));
    setInterval(()=>go(i+1),5000);
  }
  // Form validation
  const form=document.getElementById('registerForm');
  if(form){
    form.addEventListener('submit',e=>{
      e.preventDefault();let ok=true;
      const set=(id,msg)=>{document.getElementById('err-'+id).textContent=msg;if(msg)ok=false};
      const name=form.name.value.trim();
      const email=form.email.value.trim();
      const phone=form.phone.value.trim();
      const course=form.course.value;
      const message=form.message.value.trim();
      set('name',name.length<2?'Please enter your full name':'');
      set('email',/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)?'':'Enter a valid email');
      set('phone',/^\d{10}$/.test(phone)?'':'Enter a 10-digit phone number');
      set('course',course?'':'Please select a course');
      set('message',message.length<10?'Message must be at least 10 characters':'');
      if(ok){
        document.getElementById('formStatus').classList.add('ok');
        document.getElementById('formStatus').textContent='Thanks! Your application has been received. We will contact you soon.';
        form.reset();
      }
    });
  }
});

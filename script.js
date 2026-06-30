// Mobile menu
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

  // Contact form
  const contactForm=document.getElementById('registerForm');
  if(contactForm){
    contactForm.addEventListener('submit',e=>{
      e.preventDefault();let ok=true;
      const set=(id,msg)=>{document.getElementById('err-'+id).textContent=msg;if(msg)ok=false};
      const name=contactForm.name.value.trim();
      const email=contactForm.email.value.trim();
      const phone=contactForm.phone.value.trim();
      const course=contactForm.course.value;
      const message=contactForm.message.value.trim();
      set('name',name.length<2?'Please enter your full name':'');
      set('email',/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)?'':'Enter a valid email');
      set('phone',/^\d{10}$/.test(phone)?'':'Enter a 10-digit phone number');
      set('course',course?'':'Please select a course');
      set('message',message.length<10?'Message must be at least 10 characters':'');
      if(ok){
        document.getElementById('formStatus').classList.add('ok');
        document.getElementById('formStatus').textContent='Thanks! Your application has been received. We will contact you soon.';
        contactForm.reset();
      }
    });
  }

  // Booking form
  const bookingForm=document.getElementById('bookingForm');
  if(bookingForm){
    bookingForm.addEventListener('submit',e=>{
      e.preventDefault();let ok=true;
      const set=(id,msg)=>{document.getElementById('err-'+id).textContent=msg;if(msg)ok=false};
      const name=bookingForm.name.value.trim();
      const email=bookingForm.email.value.trim();
      const phone=bookingForm.phone.value.trim();
      const pkg=bookingForm.package.value;
      const program=bookingForm.program.value;
      const start=bookingForm.start.value;
      const message=bookingForm.message.value.trim();
      set('name',name.length<2?'Please enter your full name':'');
      set('email',/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)?'':'Enter a valid email');
      set('phone',/^\d{10}$/.test(phone)?'':'Enter a 10-digit phone number');
      set('package',pkg?'':'Please select a package');
      set('program',program?'':'Please select a program');
      set('start',start?'':'Please select a preferred start date':'');
      set('message',message.length<10?'Message must be at least 10 characters':'');
      if(ok){
        document.getElementById('formStatus').classList.add('ok');
        document.getElementById('formStatus').textContent='Your seat has been provisionally reserved. Our admissions team will confirm shortly.';
        bookingForm.reset();
      }
    });
  }
});

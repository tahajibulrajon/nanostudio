const menuButton=document.querySelector('.menu-toggle');
const navigation=document.querySelector('.nav');
if(menuButton&&navigation){
  menuButton.addEventListener('click',()=>{
    const open=navigation.classList.toggle('open');
    menuButton.setAttribute('aria-expanded',String(open));
    menuButton.setAttribute('aria-label',open?'Close navigation':'Open navigation');
  });
  navigation.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{
    navigation.classList.remove('open');
    menuButton.setAttribute('aria-expanded','false');
    menuButton.setAttribute('aria-label','Open navigation');
  }));
}
const revealObserver=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){entry.target.classList.add('visible');revealObserver.unobserve(entry.target);}
  });
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(element=>revealObserver.observe(element));
const year=document.querySelector('#year');
if(year)year.textContent=new Date().getFullYear();
const form=document.querySelector('#contact-form');
const status=document.querySelector('#form-status');
if(form&&status){
  form.addEventListener('submit',event=>{
    event.preventDefault();
    if(!form.reportValidity())return;
    status.textContent='Thanks — the enquiry form is currently a visual prototype and is not connected to email or a database. Connect a form service before accepting live enquiries.';
    status.classList.add('form-notice');
  });
}
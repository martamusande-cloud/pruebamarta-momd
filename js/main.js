const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('.nav');
toggle?.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',open)});
document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
const toast=document.querySelector('.toast');
document.querySelectorAll('[data-ticket]').forEach(btn=>btn.addEventListener('click',()=>{toast.textContent=`${btn.dataset.ticket}: venta online próximamente`;toast.classList.add('show');setTimeout(()=>toast.classList.remove('show'),2600)}));

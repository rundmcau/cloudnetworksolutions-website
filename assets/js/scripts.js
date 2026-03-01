(function(){
  const btn = document.querySelector('[data-menu-btn]');
  const nav = document.querySelector('[data-nav]');
  if(btn && nav){
    btn.addEventListener('click', ()=>{
      nav.classList.toggle('open');
    });
  }
  // Set active nav link by path
  const path = (location.pathname || '/').split('/').pop() || 'index.html';
  document.querySelectorAll('.nav a').forEach(a=>{
    const href = (a.getAttribute('href')||'').split('/').pop();
    if(href === path){ a.classList.add('active'); }
  });
})();

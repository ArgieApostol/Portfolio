(function(){
  var root=document.documentElement, tb=document.getElementById('themeBtn');
  function setTheme(t){
    root.setAttribute('data-theme',t);
    tb.textContent=t==='dark'?'Light':'Dark';
    tb.setAttribute('aria-label','Switch to '+(t==='dark'?'light':'dark')+' mode');
    try{localStorage.setItem('theme',t)}catch(e){}
  }
  var s='light';try{s=localStorage.getItem('theme')||'light'}catch(e){}
  setTheme(s);
  tb.onclick=function(){setTheme(root.getAttribute('data-theme')==='dark'?'light':'dark')};
  var nav=document.getElementById('nav'), mb=document.getElementById('menuBtn');
  mb.onclick=function(){var o=nav.classList.toggle('open');mb.setAttribute('aria-expanded',o)};
  nav.addEventListener('click',function(e){if(e.target.tagName==='A'){nav.classList.remove('open');mb.setAttribute('aria-expanded',false)}});
  document.getElementById('yr').textContent=new Date().getFullYear();
})();

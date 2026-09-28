const toggle=document.querySelector('.menu-toggle');const nav=document.querySelector('#nav');toggle?.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',open)});document.querySelectorAll('#nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));

const themeButton=document.querySelector('#themeToggle');
function syncThemeButton(){
 const isDark=document.documentElement.dataset.theme==='dark';
 themeButton.querySelector('.theme-icon').textContent=isDark?'☀':'☾';
 themeButton.querySelector('.theme-label').textContent=isDark?'Light':'Dark';
 themeButton.setAttribute('aria-label',isDark?'Switch to light mode':'Switch to dark mode');
 themeButton.setAttribute('aria-pressed',String(!isDark));
}
syncThemeButton();
themeButton.addEventListener('click',()=>{
 const next=document.documentElement.dataset.theme==='dark'?'light':'dark';
 document.documentElement.dataset.theme=next;
 try{localStorage.setItem('bavly-theme',next)}catch(e){}
 syncThemeButton();
});

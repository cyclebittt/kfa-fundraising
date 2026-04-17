// Simple progress numbers – change here
const GOAL = 50000;
const CURRENT = 13750;

const fmt = n => new Intl.NumberFormat('de-DE',{style:'currency',currency:'EUR',maximumFractionDigits:0}).format(n);

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('goal').textContent = fmt(GOAL);
  document.getElementById('cur').textContent = fmt(CURRENT);
  const bar = document.getElementById('bar');
  requestAnimationFrame(()=>{
    bar.style.transition = 'width .9s ease';
    bar.style.width = (CURRENT/GOAL*100).toFixed(1)+'%';
  });
  document.getElementById('year').textContent = new Date().getFullYear();
});

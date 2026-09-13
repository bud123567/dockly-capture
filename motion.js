/* Motion is enhancement only; content stays readable without JavaScript. */
(() => {
 const preference = matchMedia('(prefers-reduced-motion: reduce)');
 let paused = preference.matches;
 try { paused ||= localStorage.getItem('dockly-motion') === 'off'; } catch {}
 const control = document.createElement('button');
 control.className = 'motion-control';
 control.type = 'button';
 document.body.append(control);
 const progress = document.createElement('div');
 progress.className = 'site-progress';
 progress.setAttribute('aria-hidden','true');
 document.body.prepend(progress);
 const update = () => {
  document.body.classList.toggle('motion-paused',paused);
  control.textContent = paused ? 'Motion off' : 'Pause motion';
  control.setAttribute('aria-label',paused ? 'Enable website animations' : 'Pause website animations');
  control.setAttribute('aria-pressed',String(paused));
 };
 control.addEventListener('click',() => { paused = !paused; update(); try {localStorage.setItem('dockly-motion',paused ? 'off' : 'on');} catch {} });
 preference.addEventListener('change',e => {paused=e.matches;update();});
 update();
 if ('IntersectionObserver' in window && !paused) {
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
   if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target);}
  }),{threshold:.08});
  document.querySelectorAll('.section-heading,.pricing>div,.about,.faq,.store-principles article,.store-steps li,.app-showcase,.detail-section,.more-apps').forEach(el=>{
   el.classList.add('reveal-ready');observer.observe(el);
  });
 }
 document.querySelectorAll('.voice-bars i').forEach((bar,i)=>bar.style.setProperty('--i',i));
 let scheduled=false;
 const onScroll=()=>{if(scheduled)return;scheduled=true;requestAnimationFrame(()=>{
  const height=document.documentElement.scrollHeight-innerHeight;
  progress.style.transform=`scaleX(${height>0 ? Math.min(1,scrollY/height) : 0})`;scheduled=false;
 });};
 addEventListener('scroll',onScroll,{passive:true});onScroll();
})();

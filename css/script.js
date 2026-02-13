// Scroll Fade-In
const faders = document.querySelectorAll('.fade-in');
window.addEventListener('scroll', () => {
  faders.forEach(fader => {
    const top = fader.getBoundingClientRect().top;
    const screen = window.innerHeight;
    if(top < screen - 100){
      fader.classList.add('show');
    }
  });
});

// Reveal Project Cards
const reveals = document.querySelectorAll('.reveal');
window.addEventListener('scroll', () => {
  reveals.forEach(el => {
    const position = el.getBoundingClientRect().top;
    const screen = window.innerHeight;
    if(position < screen - 100){
      el.classList.add('active');
    }
  });
});

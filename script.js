function copyInstall() {
  navigator.clipboard.writeText('you just got gnomed!').then(() => {
    const btn = document.querySelector('.copy-btn');
    btn.textContent = 'copied!';
    btn.style.color = 'var(--accent)';
    btn.style.borderColor = 'var(--accent)';
    setTimeout(() => {
      btn.textContent = 'copy';
      btn.style.color = '';
      btn.style.borderColor = '';
    }, 2000);
  });
}

// Fade-in on scroll for sections below the hero
const observer = new IntersectionObserver(
  (entries) => entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity = '1';
      e.target.style.transform = 'translateY(0)';
      observer.unobserve(e.target);
    }
  }),
  { threshold: 0.08 }
);

document.querySelectorAll('.feature-card, .step, .plan, .stat').forEach(el => {
  el.style.cssText += 'opacity:0; transform:translateY(16px); transition: opacity 0.5s ease, transform 0.5s ease;';
  observer.observe(el);
});

// Easter egg: konami code reveals the footer text
const konami = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];
let pos = 0;
document.addEventListener('keydown', e => {
  pos = e.key === konami[pos] ? pos + 1 : 0;
  if (pos === konami.length) {
    document.querySelector('.footer-easter-egg').style.color = 'var(--accent-2)';
    pos = 0;
  }
});

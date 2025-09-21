// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior:'smooth' });
  });
});

// Dark/Light Mode Toggle
const toggleBtn = document.getElementById('theme-toggle');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('light');
  toggleBtn.textContent = document.body.classList.contains('light') ? '🌞' : '🌙';
});

// Animate skill bars
const skills = document.querySelectorAll('.skill-progress');
window.addEventListener('scroll', () => {
  skills.forEach(skill => {
    const rect = skill.getBoundingClientRect();
    if(rect.top < window.innerHeight - 50){
      skill.style.width = skill.getAttribute('style').match(/width:(\d+%)/)[1];
    }
  });
});

// Testimonials carousel
let index = 0;
const testimonials = document

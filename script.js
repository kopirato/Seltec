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
const testimonials = document.querySelectorAll('.testimonial');
setInterval(() => {
  testimonials[index].classList.remove('active');
  index = (index + 1) % testimonials.length;
  testimonials[index].classList.add('active');
}, 4000);

// Back to top button
const backToTop = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
  if(window.scrollY > 300){
    backToTop.style.display = 'block';
  } else {
    backToTop.style.display = 'none';
  }
});
backToTop.addEventListener('click', () => {
  window.scrollTo({ top:0, behavior:'smooth' });
});

// Fade-in sections
const sections = document.querySelectorAll('section');
const reveal = () => {
  sections.forEach(sec => {
    const rect = sec.getBoundingClientRect();
    if(rect.top < window.innerHeight - 100){
      sec.classList.add('show');
    }
  });
};
window.addEventListener('scroll', reveal);
reveal();

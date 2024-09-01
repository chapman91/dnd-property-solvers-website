// Import the Algolia places package


const navTriggerBtn = document.querySelector('#nav_trigger_btn');
const navMenu = document.querySelector('#nav_menu');
const accordionHeader = document.querySelectorAll('.accordion-header');




// event listener
navTriggerBtn.addEventListener('click', () => {
  navMenu.classList.toggle('nav-is-open');
});

accordionHeader.forEach((accordionHeader) => {
  accordionHeader.addEventListener('click', (event) => {
    accordionHeader.classList.toggle('active');
    const accordionBody = accordionHeader.nextElementSibling;
    if (accordionHeader.classList.contains('active')) {
      accordionBody.style.maxHeight = accordionBody.scrollHeight + 'px';
    } else {
      accordionBody.style.maxHeight = 0;
    }
  });
});

// Swiper or similar slider setup
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 3,
  spaceBetween: 20,
  breakpoints: {
    320: {
      slidesPerView: 2,
    },
    960: {
      slidesPerView: 2, // Fixed typo
    },
    1200: {
      slidesPerView: 3,
    },
  },
});

// Scroll reveal animations
const sr = ScrollReveal({
  origin: 'bottom',
  distance: '60px',
  duration: 3000,
  delay: 600,
  // Uncomment if you want the animation to reset on scroll
});

// Specific reveal settings
sr.reveal('.hero__text', { origin: 'top' });

// steps
sr.reveal('.steps__step', { distance: '100px', interval: 100 });

// about text & image
sr.reveal('.about__text', { origin: 'left' });
sr.reveal('.about__img', { origin: 'right', delay: 800 });

// faqs
sr.reveal('.accordion__section', { delay: 800 });
sr.reveal('.accordion__title', { delay: 800 });

// contact form
sr.reveal('.contact__form', { delay: 800 });


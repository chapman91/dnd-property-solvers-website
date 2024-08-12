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

// const hamburger = document.querySelector('.nav-hamburger');
// const navMenu = document.querySelector('.nav-menu');

// console.log('SCRIPT LOADED YO');

// hamburger.addEventListener('click', mobileMenu);

// function mobileMenu() {
//   hamburger.classList.toggle('active');
//   navMenu.classList.toggle('active');
// }

// const navLink = document.querySelectorAll('.nav ul li');

// navLink.forEach((link) => link.addEventListener('click', closeMenu));

// function closeMenu() {
//   hamburger.classList.remove('active');
//   navMenu.classList.remove('active');
// }

const hamburger = document.querySelector('.nav-hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// TODO: Must be a way to do this in CSS!
window.onresize = () => {
  if (window.innerWidth > 880) {
    navMenu.classList.remove('active');
  }
};

// Element selection
const MENU_TOGGLE = document.querySelector('.menu-toggle');
const MENU_CLOSE = document.querySelector('.menu-close');
const MAIN_NAV = document.querySelector('.main-nav');

// Open menu
MENU_TOGGLE.addEventListener('click', () => {
  MAIN_NAV.classList.add('open');
  MENU_TOGGLE.classList.add('open'); // Hide hamburger button
});

// Close menu
MENU_CLOSE.addEventListener('click', () => {
  MAIN_NAV.classList.remove('open');
  MENU_TOGGLE.classList.remove('open'); // Show hamburger button
});


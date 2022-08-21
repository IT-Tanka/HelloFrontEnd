const burger = document.querySelector('.header__menu-burger');
const headerMenu = document.querySelector('.header__menu');
const headerNav = document.querySelector('.header__menu-ul');
const heroSelect = document.querySelector('.hero__select');

burger.addEventListener('click', () => {
  burger.classList.toggle('header__menu-burger-active');
  headerMenu.classList.toggle('header__menu-active');
  headerNav.classList.toggle('header__menu-ul-active');

  if (burger.classList.contains('header__menu-burger-active')) {
    heroSelect.style.display = 'block';
  } else { heroSelect.style.display = 'none'; }
});
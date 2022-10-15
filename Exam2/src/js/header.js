const header = document.querySelector('.header');
let headerLinks = document.querySelectorAll('.header__menu-link');
const headerBtn = document.querySelector('.header__arrow-btn');
const headerPanel = document.querySelector('.header__panel');
const burger = document.querySelector('.burger__btn');
const nav = document.querySelector('.header__menu');
const headerHight = header.offsetHeight;

headerLinks = Array.from(headerLinks);
headerLinks.push(headerBtn);
headerLinks[0].classList.add('hover-link', 'active-link');

headerLinks.forEach((headerLink, index) => {

  headerLink.addEventListener('mouseover', (event) => {

    headerLinks.forEach(headerLink => {
      headerLink.classList.remove('hover-link');
    });
    headerLinks[index].classList.add('hover-link');
    headerLink.addEventListener('click', (e) => {

      e.preventDefault();
      headerLinks.forEach(headerLink => {
        headerLink.classList.remove('active-link');
      });
      if (burger.classList.contains('active')) {
        burger.classList.remove('active');
        closeBurgerMenu();
      }
      const blockID = headerLink.getAttribute('href');
      const scrollTarget = document.querySelector(blockID);
      const elementPosition = scrollTarget.getBoundingClientRect().top;
      const offsetPosition = elementPosition - 54;

      window.scrollBy({
        top: offsetPosition,
        behavior: 'smooth'
      });
      headerLinks[index].classList.add('active-link', 'hover-link');
    });
  });
  headerLink.addEventListener('mouseout', (event) => {

    headerLinks.forEach(headerLink => {
      headerLink.classList.remove('hover-link');
      if (headerLink.classList.contains('active-link')) {
        headerLink.classList.add('hover-link');
      }
    });
  });
});

window.addEventListener('scroll', event => {
  let fromTop = window.scrollY;
  if (fromTop > headerHight) {

    headerPanel.style.position = 'fixed';
    headerPanel.style.top = '0';
    headerPanel.style.background = 'linear-gradient(243.43deg, #7E5AFF 16.9%, #55B7FF 83.27%)';
  }
  else {
    headerPanel.style.position = 'absolute';
    headerPanel.style.background = 'transparent';
    headerPanel.style.top = '53px';
  }
  headerLinks.forEach(link => {
    let section = document.querySelector(link.hash);
    if (
      (section.offsetTop) <= (fromTop + 55) &&
      (section.offsetTop) + section.offsetHeight > (fromTop)
    ) {
      link.classList.add('active-link', 'hover-link');
    } else {
      link.classList.remove('active-link', 'hover-link');
    }
  });
});
function closeBurgerMenu() {
  nav.style.left = '-100px';
  nav.style.top = '74px';
  headerPanel.style.height = '54px';
  headerPanel.style.top = '0';
  headerPanel.style.paddingTop = '0';
  let fromTop = window.scrollY;
  if (fromTop <= headerHight) {
    headerPanel.style.background = 'transparent';
    headerPanel.style.top = '53px';
  }
}

function openBurgerMenu() {
  nav.style.left = '25px';
  nav.style.top = '127px';
  headerPanel.style.height = '100vh';
  headerPanel.style.top = '0';
  headerPanel.style.paddingTop = '53px';
  headerPanel.style.background = 'linear-gradient(243.43deg, #7E5AFF 16.9%, #55B7FF 83.27%)';
}

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  if (burger.classList.contains('active')) {
    openBurgerMenu();
  }
  else {
    closeBurgerMenu();
  }
});

window.addEventListener('resize', () => {
  if (window.innerWidth > '768') {
    closeBurgerMenu();
    burger.classList.remove('active');
  }
});



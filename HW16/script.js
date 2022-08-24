const arrow = document.querySelector('.sidebar__arrow');
const sidebar = document.querySelector('.sidebar');

arrow.addEventListener('click', () => {
  sidebar.classList.toggle('light');
});
window.addEventListener("resize", function () {
  if (window.matchMedia("(max-width: 768px)").matches) {
    sidebar.classList.add('light');
  } else {
    sidebar.classList.remove('light');
  }
});
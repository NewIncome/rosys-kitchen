import 'bootstrap';
import './style.scss';

// Fix for Bootstrap navmenu not collapsing after click
document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('.navbar-toggler');
  const navmenu = document.querySelector('.navbar-collapse');
  const navlink = document.querySelectorAll('.nav-link');

  navlink.forEach(link => {
    link.addEventListener('click', () => {
      button.className = 'navbar-toggler collapsed';
      navmenu.className = 'navbar-collapse collapse';
    });
  });
});

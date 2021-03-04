import 'bootstrap';
import './style.scss';

// Fix for Bootstrap navmenu not collapsing after click
document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('.navbar-toggler');
  const navmenu = document.querySelector('.navbar-collapse');
  const navlink = document.querySelectorAll('.nav-link');

  console.log(button.attributes[5]);
  button.setAttribute('aria-expanded', 'true');
  // button.attributes[aria-expanded] = 'true';
  console.log(button.attributes["aria-expanded"]);

  navlink.forEach(link => {
    link.addEventListener('click', () => {
      button.className = 'navbar-toggler collapsed';
      button.setAttribute('aria-expanded', 'false');
      navmenu.className = 'navbar-collapse collapse';
    });
  });
});

import { createNavbar } from "/frontend/js/components/navBar.js";
import { createFooter } from "./components/footer.js";
//import { createProjectCard }
import { projects } from "./data/projects.js";

// Mobile nav toggle
// const navToggle = document.getElementById('navToggle');
// const navLinks = document.getElementById('navLinks');
// navToggle.addEventListener('click', () => {
//     navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
//     navLinks.style.flexDirection = 'column';
// });

// // Smooth scroll
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//   anchor.addEventListener('click', function(e) {
//     e.preventDefault();
//     document.querySelector(this.getAttribute('href')).scrollIntoView({
//       behavior: 'smooth'
//     });
//   });
// });

let navBar = document.getElementById('header');
navBar.innerHTML = createNavbar();

let footer = document.getElementById('footer');
footer.innerHTML = createFooter();

window.addEventListener('scroll', () => {
    if (window.scrollY > 75)
        navBar.classList.add('scrolled');
    else
        navBar.classList.remove('scrolled');
})


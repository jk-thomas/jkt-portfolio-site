import { createNavbar } from "./components/navBar.js";
import { createFooter } from "./components/footer.js";

// Mobile nav toggle
// const navToggle = document.getElementById('navToggle');
// const navLinks = document.getElementById('navLinks');
// navToggle.addEventListener('click', () => {
//     navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
//     navLinks.style.flexDirection = 'column';
// });

let navBar = document.getElementById('header');
navBar.innerHTML = createNavbar();

let footer = document.getElementById('footer');
footer.innerHTML = createFooter();

initSmoothScroll();

// Smooth scroll
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target)
                target.scrollIntoView({behavior: 'smooth'});
        });
    });
}

window.addEventListener('scroll', () => {
    if (window.scrollY > 75)
        navBar.classList.add('scrolled');
    else
        navBar.classList.remove('scrolled');
})


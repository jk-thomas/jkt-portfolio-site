import { createNavbar } from "./components/navBar.js";
import { createFooter } from "./components/footer.js";
import { createProjectCard } from "./components/projectCard.js";
import { projects } from "./data/projects.data.js";

let navBar = document.getElementById('header');
navBar.innerHTML = createNavbar();

const container = document.getElementById("projects-grid");
projects.forEach(project => {
    container.innerHTML += createProjectCard(project);
    // const card = createProjectCard(project);
    // container.appendChild(card);
})

let footer = document.getElementById('footer');
footer.innerHTML = createFooter();

window.addEventListener('scroll', () => {
    if (window.scrollY > 75)
        navBar.classList.add('scrolled');
    else
        navBar.classList.remove('scrolled');
})

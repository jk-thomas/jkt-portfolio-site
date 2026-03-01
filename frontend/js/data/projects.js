// create new branch for new front end design
// buttons with semi circle sides
// themes:
// 	k background
// 	t text colors

// chatgpt:
// portfolio site system:
// ctrl f:
// fetch
// json

import { createNavbar } from "/frontend/js/components/navBar.js";
import { createFooter } from "/frontend/js/components/footer.js";

let navBar = document.getElementById('header');
navBar.innerHTML = createNavbar();

let footer = document.getElementById('footer');
footer.innerHTML = createFooter();

export const projects = [
    {
        title: "Portfolio Site",
        description: "multiplayer",
        tech: ["HTML/CSS", "Javascript", "Docker", "Nginx"],
        github: "#",
        live: "#"
    },
    {
        title: "ValetConnect",
        description: "Real-time multiplayer game using Socket.io",
        tech: ["Node", "Express", "Docker", "Socket.io"],
        github: "#",
        live: "#"
    },
    {
        title: "Mission EMR",
        description: "Real-time multiplayer game using Socket.io",
        tech: ["Node", "Express", "Docker"],
        github: "#",
        live: "#"
    },
    {
        title: "Silent Space Locator",
        description: "Real-time multiplayer game using Socket.io",
        tech: ["Node", "Express", "Docker"],
        github: "#",
        live: "#"
    },
    {
        title: "UOMe",
        description: "multiplayer",
        tech: ["Node", "Express", "Docker"],
        github: "#",
        live: "#"
    },
    {
        title: "BlogSystem",
        description: "multiplayer",
        tech: ["Node", "Express", "Docker"],
        github: "#",
        live: "#"
    },
    {
        title: "Database Systems",
        description: "multiplayer",
        tech: ["Node", "Express", "Docker"],
        github: "#",
        live: "#"
    },
    {
        title: "Artificial Intelligence",
        description: "multiplayer",
        tech: ["Node", "Express", "Docker"],
        github: "#",
        live: "#"
    },
    {
        title: "Stay Safe Project",
        description: "multiplayer",
        tech: ["Node", "Express", "Docker"],
        github: "#",
        live: "#"
    },
    {
        title: "Threaded HTTP Server",
        description: "Real-time multiplayer game using Socket.io",
        tech: ["Node", "Express", "Docker"],
        github: "#",
        live: "#"
    },
    {
        title: "Networked Poker",
        description: "Real-time multiplayer game using Socket.io",
        tech: ["Node", "Express", "Docker"],
        github: "#",
        live: "#"
    },
    {
        title: "Networked Chatroom",
        description: "Real-time multiplayer game using Socket.io",
        tech: ["Node", "Express", "Docker"],
        github: "#",
        live: "#"
    },
    {
        title: "Keno",
        description: "Real-time multiplayer game using Socket.io",
        tech: ["Node", "Express", "Docker"],
        github: "#",
        live: "#"
    },
    {
        title: "Openstreet Maps",
        description: "Real-time multiplayer game using Socket.io",
        tech: ["Node", "Express", "Docker"],
        github: "#",
        live: "#"
    },
    {
        title: "File Compression",
        description: "Real-time multiplayer game using Socket.io",
        tech: ["Node", "Express", "Docker"],
        github: "#",
        live: "#"
    },
    {
        title: "Data Analysis",
        description: "Real-time multiplayer game using Socket.io",
        tech: ["Node", "Express", "Docker"],
        github: "#",
        live: "#"
    },
    {
        title: "BitTorrent",
        description: "Real-time multiplayer game using Socket.io",
        tech: ["Node", "Express", "Docker"],
        github: "#",
        live: "#"
    },
    {
        title: "RPS Multiplayer Game",
        description: "Real-time multiplayer game using Socket.io",
        tech: ["Node", "Express", "Docker"],
        github: "#",
        live: "#"
    },
    {
        title: "Candy Crush",
        description: "multiplayer",
        tech: ["Node", "Express", "Docker"],
        github: "#",
        live: "#"
    },
    {
        title: "FinDash",
        description: "multiplayer",
        tech: ["Node", "Express", "Docker"],
        github: "#",
        live: "#"
    },
    {
        title: "TheOdinProject",
        description: "multiplayer",
        tech: ["Node", "Express", "Docker"],
        github: "#",
        live: "#"
    },
    {
        title: "FullStackOpen",
        description: "multiplayer",
        tech: ["Node", "Express", "Docker"],
        github: "#",
        live: "#"
    }
];

export function createNavbar() {
    return `
        <nav id="nav" class="container">
            <div class="logo" style="font-family: 'Tahoma'"><a href="index.html"><strong>JT</strong></a></div>
            <div class="nav-links" id="navLinks">
                <a href="/frontend/index.html#about">About</a>
                <a href="projects.html">Projects</a>
                <a href="#footer">Contact</a>
            </div>
            <div class="nav-toggle" id="navToggle">☰</div>
        </nav>
    `;
}
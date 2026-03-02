export function createProjectCard(project) {
    const githubLink = project.github
        ? `<a href="${project.github}" target="_blank">GitHub↗</a>`
        : `<span class="disabled">GitHub↗</span>`;

    const liveLink = project.live
        ? `<a href="${project.live}" target="_blank">Live↗</a>` 
        : "";
    return `
        <div class="card">
            <div class="card-content">
                <h3>${project.title}</h3>
                <p class="tech">${project.tech.join(" | ")}</p>
                <p>${project.description}</p>
                <div class='project-links'>
                    ${githubLink}
                    ${liveLink}
                </div>
                <!-- <a href="#">View Details</a> -->
            </div>
        </div>
    `;
}
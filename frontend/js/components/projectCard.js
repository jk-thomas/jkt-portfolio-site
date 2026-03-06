const getStatusIcon = (status) => {
    const statuses = {
        'planned': '○',      // Empty Circle
        'in-progress': '◐', // Half Circle
        'complete': '●'     // Filled Circle
    };
    return statuses[status.toLowerCase()] || '';
}

export function createProjectCard(project) {
    const githubLink = project.github
        ? `<a href="${project.github}" target="_blank">GitHub↗</a>`
        : `<span class="disabled">GitHub↗</span>`;

    const liveLink = project.live
        ? `<a href="${project.live}" target="_blank">Live↗</a>` 
        : "";

    const status = project.status
        ? `<span title=${project.status} class="status-icon">
            ${getStatusIcon(project.status)}
           </span>`
        : ''
    
    return `
        <div class="card">
            <div class="card-content">
                <div class='project-header'>
                    <h3>${project.title}</h3>
                    <div class="progess">
                        ${project.version ? `<span class="version">${project.version}</span>` : ''}
                        ${status}
                    </div>
                </div>
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
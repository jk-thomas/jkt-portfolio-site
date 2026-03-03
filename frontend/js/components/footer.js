export function createFooter() {
    const year = new Date().getFullYear;

    return `
        <div class="contact">
            <div class="container">
                <h2>Contact & Resume</h2>
                <p>joshkthom@gmail.com</p>
                <p><a href="linkedin.com/in/joshua-thomas-29b1b9164/">LinkedIn</a></p>
                <p><a href="https://github.com/jk-thomas">GitHub</a></p>
                <!-- <form action="mailto:you@example.com" method="post" enctype="text/plain">
                <input type="text" name="name" placeholder="Your Name" required>
                <input type="email" name="email" placeholder="Your Email" required>
                <textarea name="message" rows="5" placeholder="Your Message..." required></textarea>
                <button type="submit">Send</button>
                </form> -->
                <a href="/jkt-portfolio-site/assets/Joshua_Thomas_Resume_CS.pdf" class="resume-btn" style="margin-right: 4px;" download="Joshua_Thomas_Resume.pdf">Resume</a>
                <!-- <a href="assets/Joshua_Thomas_Resume_CS.pdf" class="resume-btn" download>Download Resume</a> -->
                <!--<a href="[google drive link] class="resume-btn" target="_blank">-->
            </div>
        </div>
    `;
}
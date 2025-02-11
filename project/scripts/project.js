document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('currentyear').textContent = new Date().getFullYear();
    document.getElementById('lastModified').textContent = 'Last Modified: ' + document.lastModified;

    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('nav ul');

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('show');
        hamburger.textContent = navMenu.classList.contains('show') ? '✖' : '☰';
    });

    const projects = [
        {
            title: "Web Frontend Project",
            description: "A web application for managing tasks.",
            technologies: "HTML, CSS, JavaScript, React",
            link: "#"
        },
        {
            title: "Mobile App Project",
            description: "A mobile app for tracking fitness activities.",
            technologies: "Flutter, Dart",
            link: "#"
        }
    ];

    const skills = [
        {
            title: "Frontend Development",
            description: "Proficient in front-end development using HTML, CSS, and JavaScript.",
            experience: "3 years of experience building responsive web applications.",
            projects: "Developed multiple web applications including e-commerce sites and personal blogs."
        },
        {
            title: "Backend Development",
            description: "Experienced in back-end development with Node.js and Express.",
            experience: "2 years of experience creating RESTful APIs and server-side applications.",
            projects: "Built several APIs for mobile and web applications, including authentication and data management systems."
        },
        {
            title: "Mobile App Development",
            description: "Skilled in mobile app development using Flutter and Dart.",
            experience: "1 year of experience developing cross-platform mobile applications.",
            projects: "Created fitness tracking and social networking apps with real-time data synchronization."
        }
    ];

    const projectsContainer = document.getElementById('projects');
    const skillsContainer = document.getElementById('skills');

    if (projectsContainer) {
        projects.forEach(project => {
            const projectDiv = document.createElement('div');
            projectDiv.classList.add('card');
            projectDiv.innerHTML = `
                <h3>${project.title}</h3>
                <ul>
                    <li>Description: ${project.description}</li>
                    <li>Technologies: ${project.technologies}</li>
                    <li>Link: <a href="${project.link}" target="_blank">View ${project.title}</a></li>
                </ul>
            `;
            projectsContainer.appendChild(projectDiv);
        });
    }

    if (skillsContainer) {
        skills.forEach(skill => {
            const skillDiv = document.createElement('div');
            skillDiv.classList.add('card');
            skillDiv.innerHTML = `
                <h3>${skill.title}</h3>
                <ul>
                    <li>Description: ${skill.description}</li>
                    <li>Experience: ${skill.experience}</li>
                    <li>Projects: ${skill.projects}</li>
                </ul>
            `;
            skillsContainer.appendChild(skillDiv);
        });
    }

    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            localStorage.setItem('contactName', name);
            localStorage.setItem('contactEmail', email);
            localStorage.setItem('contactMessage', message);

            const formData = new FormData(this);

            fetch(this.action, {
                method: this.method,
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            }).then(response => {
                if (response.ok) {
                    document.getElementById('name').value = '';
                    document.getElementById('email').value = '';
                    document.getElementById('message').value = '';

                    window.location.href = 'post-form.html';

                } else {
                    alert('There was a problem with the submission.');
                }
            });
        });
    }
});
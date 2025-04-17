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
            title: "日本の気候",
            description: "javascriptを用いた日本の気候情報の表示",
            technologies: "HTML, CSS, JavaScript",
            link: "https://daijir.github.io/wdd131/place.html"
        },
        {
            title: "フォーム",
            description: "ECサイトのフォームを簡易的に表現",
            technologies: "HTML, CSS, JavaScript",
            link: "https://daijir.github.io/wdd131/form.html"
        }
    ];

    const skills = [
        {
            title: "フロントエンド",
            description: "HTML, CSS, and JavaScriptを使用した開発が得意である",
            experience: "学校の課題での開発経験あり",
            projects: "日本の気候, フォーム, など"
        },
        {
            title: "バックエンド開発",
            description: "これからバックエンド開発を経験する予定です。",
            experience: "経験なし",
            projects: "プロジェクトなし"
        },
        {
            title: "CTF (Capture The Flag)",
            description: "Hack The BoxやVulnHubなどを通じて20台以上の仮想マシンを攻略した経験があります。",
            experience: "6カ月",
            projects: "プロジェクトなし"
        },
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
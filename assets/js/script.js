const company = 'HelaDev XR Labs';
const currentWorking = 'Time based game';
const skills = ['Java', 'Flutter', 'Unity'];

const frameworks = [
    {
        title: "Unity",
        emoji: "🎮",
        level: "Intermediate"
    },
    {
        title: "Flutter",
        emoji: "📱",
        level: "Intermediate"
    },
    {
        title: "Bootstrap",
        emoji: "🅱️",
        level: "expert"
    },
]

const programmingLanguages = [
    {
        title : "Java",
        emoji : "☕",
        level : "Intermediate",
    },
    {
        title : "Dart",
        emoji : "🎯",
        level : "Intermediate"
    },
    {
        title : "C#",
        emoji : "#️⃣",
        level : "Intermediate"
    },
    {
        title : "JavaScript",
        emoji : "⚡",
        level : "Intermediate"
    }
]

const devTools = [
    {
        title : "Vs-Code",
        emoji : "👨‍💻",
        level : "Expert"
    },
    {
        title : "Git",
        emoji : "📝",
        level : "Expert"
    },
    {
        title : "Blender",
        emoji : "🎭",
        level : "Beginner"
    },
    {
        title : "Figma",
        emoji : "🎨",
        level : "Intermediate"
    },
    {
        title : "Davinci-Resolve",
        emoji : "🎥",
        level : "Intermediate"
    }
]

const projects = [
    {
        title: "robot-outline",
        technology: "unity",
        tags: ['unity', 'c#', '3D'],
        source: '#',
        code: [
            '// Mobile AR game for collecting and battling virtual creatures',
            ' ',
            'public class ARCreatureSpawner : MonoBehaviour {',
            '    [SerializeField] private GameObject creaturePrefab;',
            '    private ARRaycastManager raycastManager;',
            '    private Camera arCamera;',
            '    void Update() {',
            '        if (Input.touchCount > 0) {',
            '            Touch touch = Input.GetTouch(0);',
            '            if (touch.phase == TouchPhase.Began) {',
            '                SpawnCreatureAtTouch(touch.position);',
            '            }',
            '        }',
            '    }',
            '}'
        ]
    },
    {
        title: "robot-outline",
        technology: "unity",
        tags: ['unity', 'c#', '3D'],
        source: '#',
        code: [
            '// Mobile AR game for collecting and battling virtual creatures',
            ' ',
            'public class ARCreatureSpawner : MonoBehaviour {',
            '    [SerializeField] private GameObject creaturePrefab;',
            '    private ARRaycastManager raycastManager;',
            '    private Camera arCamera;',
            '    void Update() {',
            '        if (Input.touchCount > 0) {',
            '            Touch touch = Input.GetTouch(0);',
            '            if (touch.phase == TouchPhase.Began) {',
            '                SpawnCreatureAtTouch(touch.position);',
            '            }',
            '        }',
            '    }',
            '}'
        ]
    },
    {
        title: "robot-outline",
        technology: "unity",
        tags: ['unity', 'c#', '3D'],
        source: '#',
        code: [
            '// Mobile AR game for collecting and battling virtual creatures',
            ' ',
            'public class ARCreatureSpawner : MonoBehaviour {',
            '    [SerializeField] private GameObject creaturePrefab;',
            '    private ARRaycastManager raycastManager;',
            '    private Camera arCamera;',
            '    void Update() {',
            '        if (Input.touchCount > 0) {',
            '            Touch touch = Input.GetTouch(0);',
            '            if (touch.phase == TouchPhase.Began) {',
            '                SpawnCreatureAtTouch(touch.position);',
            '            }',
            '        }',
            '    }',
            '}'
        ]
    },
    {
        title: "robot-outline",
        technology: "unity",
        tags: ['unity', 'c#', '3D'],
        source: '#',
        code: [
            '// Mobile AR game for collecting and battling virtual creatures',
            ' ',
            'public class ARCreatureSpawner : MonoBehaviour {',
            '    [SerializeField] private GameObject creaturePrefab;',
            '    private ARRaycastManager raycastManager;',
            '    private Camera arCamera;',
            '    void Update() {',
            '        if (Input.touchCount > 0) {',
            '            Touch touch = Input.GetTouch(0);',
            '            if (touch.phase == TouchPhase.Began) {',
            '                SpawnCreatureAtTouch(touch.position);',
            '            }',
            '        }',
            '    }',
            '}'
        ]
    },
    {
        title: "robot-outline",
        technology: "unity",
        tags: ['unity', 'c#', '3D'],
        source: '#',
        code: [
            '// Mobile AR game for collecting and battling virtual creatures',
            ' ',
            'public class ARCreatureSpawner : MonoBehaviour {',
            '    [SerializeField] private GameObject creaturePrefab;',
            '    private ARRaycastManager raycastManager;',
            '    private Camera arCamera;',
            '    void Update() {',
            '        if (Input.touchCount > 0) {',
            '            Touch touch = Input.GetTouch(0);',
            '            if (touch.phase == TouchPhase.Began) {',
            '                SpawnCreatureAtTouch(touch.position);',
            '            }',
            '        }',
            '    }',
            '}'
        ]
    },

];

// renderProjects(projects, "projects");



function homeWindow() {
    const titleText = 'const developer = "Malaka Madhubhashana"';
    const words = titleText.split(" ");
    const title = document.querySelector('#window-content-title');

    title.innerHTML = words.map((word, index) => {
        let color = "";

        if (index === 0) {
            color = "#51a2ff";
        } else if (index === 1) {
            color = "#fdc700";
        } else if (index === 2) {
            color = "white";
        } else if (index >= words.length - 2) {
            color = "#05df72";
        } else {
            color = "black";
        }

        return `<span style="color:${color};">${word}</span>`;
    }).join(" ");

}

homeWindow();

const texts = [
    "// Software Engineer",
    "// Game Developer"
];

const typewriter = document.getElementById("typewriter");
let textIndex = 0;
let charIndex = 0;

function typeLetters() {
    const currentText = texts[textIndex];

    if (charIndex === 0) {
        typewriter.textContent = ""; // clear line
    }

    if (charIndex < currentText.length) {
        typewriter.textContent += currentText.charAt(charIndex);
        charIndex++;
        setTimeout(typeLetters, 100); // typing speed per letter
    } else {
        setTimeout(() => {
            charIndex = 0;
            textIndex = (textIndex + 1) % texts.length; // loop
            typeLetters();
        }, 1500); // pause between texts
    }
}

typeLetters();

function homeOtherText() {
    const companyText = document.querySelector('#company');
    companyText.innerHTML = `// Former Game Programmer at <span class="company-name">${company}</span>`;

    const currentProjectText = document.querySelector('#current-project');
    currentProjectText.innerHTML = `Currently working on : <span class="current-project">${currentWorking}</span>`;

    const skillElement = document.querySelector('#skills');
    skillElement.innerHTML = `Specializing in: ` + skills.map((skill, index) => {
        return `<span class = "skill">${skills[index]}</span>`
    }).join(", ");

}

homeOtherText();

function renderProjects(projects) {

    const projectContainer = document.querySelector('.project-windows-content');
    // const container = document.querySelector('.project-pannel');
    // container.innerHTML = ""; // Clear previous content

    projects.forEach(project => {

        const projectWindow = document.createElement('div');
        projectWindow.className = 'project-window';

        projectWindow.innerHTML = `
        <div class="window-top-bar">
                        <div class="project-window-top-bar-item d-flex align-items-center justify-content-center gap-3">
                            <div class="window-dot-container">
                                <div class="window-dot purple"></div>
                            </div>
                            <div class="window-title">
                                <p>${project.title}</p>
                            </div>
                        </div>
                        <span class="chip">
                            <p class="chip-text">${project.technology}</p>
                        </span>
                    </div>
                    <div class="window-content">
                        <div class="project-pannel">
                             
                        </div>
                        <div class="project-tags"></div>
                        <div class="project-sources d-flex justify-content-start align-items-center gap-1">
                            <a href="${project.source}">
                                <img src="assets/images/github_light.png" alt="github-logo"
                                    style="width: 18px; height: 18px;">
                            </a>
                            <p>source</p>
                        </div>
                    </div>
        `;

        // Create and style the title
        // const titleEl = document.createElement("p");
        // titleEl.textContent = project.title;
        // titleEl.style.fontFamily = "monospace";
        // titleEl.style.color = "#6a9955"; // comment-style green
        // container.appendChild(titleEl);

        if (project.code) {
            const container = projectWindow.querySelector('.project-pannel');
            const codeBlock = document.createElement("pre");
            //   codeBlock.style.background = "#1e1e1e";
            codeBlock.style.color = "#d4d4d4";
            codeBlock.style.padding = "10px";
            codeBlock.style.borderRadius = "6px";
            codeBlock.style.overflowX = "auto";
            codeBlock.style.fontFamily = "Fira Code, monospace";

            codeBlock.innerHTML = project.code.map(line => `<div>${line}</div>`).join("");
            container.appendChild(codeBlock);
        }

        const container = projectWindow.querySelector('.project-tags');
        project.tags.forEach(tag => {
            const chip = document.createElement("span");
            chip.classList.add('chip');

            const chipText = document.createElement("p");
            chipText.classList.add('chip-text');
            chipText.textContent = tag;
            chip.appendChild(chipText);

            container.appendChild(chip);
        });

        projectContainer.appendChild(projectWindow)
    });
}

renderProjects(projects);

function renderSkills() {
    const frameworkElement = document.querySelector(".frameworks");

    frameworks.forEach(framework => {
        const card = document.createElement("div");
        card.classList.add("w-card");
        card.innerHTML = `
            <div class="w-card-content">
                            <h6 class="title">${framework.title}</h6>
                            <div class="w-card-center d-flex align-items-center">
                                <h4>${framework.emoji}</h4>
                                <span class="chip">
                                    <p class="chip-text">${framework.level}</p>
                                </span>
                            </div>
                            <p>1. "${framework.title}" : "${framework.level}"</p>
            </div>
        `;
        frameworkElement.appendChild(card);
    });

    const programmingLanElement = document.querySelector(".p-languages");

    programmingLanguages.forEach(language => {
        const card = document.createElement("div");
        card.classList.add("w-card");
        card.innerHTML = `
            <div class="w-card-content">
                            <h6 class="title">${language.title}</h6>
                            <div class="w-card-center d-flex align-items-center">
                                <h4>${language.emoji}</h4>
                                <span class="chip">
                                    <p class="chip-text">${language.level}</p>
                                </span>
                            </div>
                            <p>1. "${language.title}" : "${language.level}"</p>
            </div>
        `;
        programmingLanElement.appendChild(card);
    });

    const devToolElement = document.querySelector(".dev-tools");

    devTools.forEach(devTool => {
        const card = document.createElement("div");
        card.classList.add("w-card");
        card.innerHTML = `
            <div class="w-card-content">
                            <h6 class="title">${devTool.title}</h6>
                            <div class="w-card-center d-flex align-items-center">
                                <h4>${devTool.emoji}</h4>
                                <span class="chip">
                                    <p class="chip-text">${devTool.level}</p>
                                </span>
                            </div>
                            <p>1. "${devTool.title}" : "${devTool.level}"</p>
            </div>
        `;
        devToolElement.appendChild(card);
    });
}

renderSkills();

console.log('script is loaded');
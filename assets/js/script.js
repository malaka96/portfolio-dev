const company = 'HelaDev XR Labs';
const currentWorking = 'Time based game';
const skills = ['Java', 'Flutter', 'Unity'];

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

console.log('script is loaded');
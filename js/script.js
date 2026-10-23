const welcomeButton = document.getElementById("welcomeButton");
const message = document.getElementById("message");

welcomeButton.addEventListener("click", function () {
    message.textContent = "I am becoming a professional web developer!";
    message.style.color = "blue";

message.classList.toggle("highlight-message");});

const themeButton = document.getElementById("themeButton");

// Load the saved theme when the page opens
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
}

themeButton.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});
function multiplyNumbers(a, b) {
    return a * b;
}

let result = multiplyNumbers(4, 6);
console.log(result);

const toggleButton = document.getElementById("toggleButton");
const extraInfo = document.getElementById("extraInfo");

toggleButton.addEventListener("click", function () {
    if (extraInfo.hidden) {
        extraInfo.hidden = false;
        toggleButton.textContent = "Show Less";
    } else {
        extraInfo.hidden = true;
        toggleButton.textContent = "Show More";
    }
});








const projectInput = document.getElementById("projectInput");
const addProjectButton = document.getElementById("addProjectButton");
const projectList = document.getElementById("projectList");

// Load saved projects, or start with an empty list.
let projects = JSON.parse(localStorage.getItem("projects")) || [];

function saveProjects() {
    localStorage.setItem("projects", JSON.stringify(projects));
}

function displayProjects() {
    projectList.innerHTML = "";

    projects.forEach(function (project, index) {
        const item = document.createElement("li");
        const name = document.createElement("span");
        const editButton = document.createElement("button");
        const deleteButton = document.createElement("button");

        name.textContent = project;
        editButton.textContent = "Edit";
        deleteButton.textContent = "Delete";

        editButton.addEventListener("click", function () {
            const updatedName = prompt("Enter the new project name:", project);

            if (updatedName !== null && updatedName.trim() !== "") {
                projects[index] = updatedName.trim();
                saveProjects();
                displayProjects();
            }
        });

        deleteButton.addEventListener("click", function () {
            projects.splice(index, 1);
            saveProjects();
            displayProjects();
        });

        item.append(name, editButton, deleteButton);
        projectList.appendChild(item);
    });
}

addProjectButton.addEventListener("click", function () {
    const projectName = projectInput.value.trim();

    if (projectName === "") {
        alert("Please enter a project name!");
        return;
    }

    projects.push(projectName);
    saveProjects();
    displayProjects();

    projectInput.value = "";
});

displayProjects();

const contactForm = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();

    if (name === "" || email === "") {
        formMessage.textContent = "Please fill in all fields.";
        formMessage.style.color = "red";
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        formMessage.textContent = "Please enter a valid email address.";
        formMessage.style.color = "red";
        return;
    }

    formMessage.textContent = "Thank you, " + name + "! Your form is valid.";
    formMessage.style.color = "green";

    contactForm.reset();
});

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {
    const isOpen = navLinks.classList.toggle("active");

    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );

    menuToggle.textContent = isOpen ? "✕" : "☰";
});

// Close the menu after a navigation link is selected.
navLinks.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("active");
        menuToggle.textContent = "☰";
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation menu");
    });
});


const themeToggle = document.getElementById("themeToggle");

// Load the saved theme when the page opens.
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
}

function updateThemeButton() {
    const darkModeEnabled =
        document.body.classList.contains("dark-mode");

    themeToggle.textContent = darkModeEnabled
        ? "☀️ Light Mode"
        : "🌙 Dark Mode";
}

// Display the correct button label on page load.
updateThemeButton();

// Change and save the theme when clicked.
themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    const darkModeEnabled =
        document.body.classList.contains("dark-mode");

    localStorage.setItem(
        "theme",
        darkModeEnabled ? "dark" : "light"
    );

    updateThemeButton();
});


const backToTop = document.getElementById("backToTop");

// Show the button after scrolling down.
window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
});

// Scroll smoothly to the top when clicked.
backToTop.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("theme-toggle");
    const themeIcon = document.getElementById("theme-icon");

    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        document.documentElement.setAttribute("data-theme", savedTheme);
        themeIcon.className = savedTheme === "dark" ? "fas fa-sun" : "fas fa-moon";
    }

    themeToggle.addEventListener("click", (event) => {
        event.preventDefault();
        const currentTheme = document.documentElement.getAttribute("data-theme");
        const newTheme = currentTheme === "dark" ? "light" : "dark";
        document.documentElement.setAttribute("data-theme", newTheme);

        localStorage.setItem("theme", newTheme);

        themeIcon.className = newTheme === "dark" ? "fas fa-sun" : "fas fa-moon";
    });
});
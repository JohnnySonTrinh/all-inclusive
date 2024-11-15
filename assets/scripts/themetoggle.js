document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("theme-toggle");
    const themeIcon = document.getElementById("theme-icon");
    const logo = document.getElementById("logo");

    // Get the saved theme from localStorage
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        document.documentElement.setAttribute("data-theme", savedTheme);
        themeIcon.className = savedTheme === "dark" ? "fas fa-sun" : "fas fa-moon";

        // Change logo based on saved theme
        updateLogo(savedTheme);
    }

    themeToggle.addEventListener("click", (event) => {
        event.preventDefault();
        
        // Get the current theme
        const currentTheme = document.documentElement.getAttribute("data-theme");
        const newTheme = currentTheme === "dark" ? "light" : "dark";
        document.documentElement.setAttribute("data-theme", newTheme);

        // Save the new theme in localStorage
        localStorage.setItem("theme", newTheme);

        // Change the theme icon
        themeIcon.className = newTheme === "dark" ? "fas fa-sun" : "fas fa-moon";

        // Update the logo based on the new theme
        updateLogo(newTheme);
    });

    // Function to update the logo based on the theme
    function updateLogo(theme) {
        if (theme === "dark") {
            logo.src = "assets/images/logo-dark.png"; // Dark mode logo
        } else {
            logo.src = "assets/images/logo-light.png"; // Light mode logo
        }
    }
});
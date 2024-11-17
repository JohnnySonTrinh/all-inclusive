document.addEventListener("DOMContentLoaded", function () {
    const fontToggleLink = document.getElementById("font-toggle");
    const bodyElement = document.body;

    // Check if the user has a saved font preference
    const isDyslexicFontEnabled = localStorage.getItem("dyslexicFontEnabled");

    if (isDyslexicFontEnabled === "true") {
        bodyElement.classList.add("dyslexic-font");
    }

    // Toggle Dyslexic Font Class and Save Preference
    fontToggleLink.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default anchor link behavior
        bodyElement.classList.toggle("dyslexic-font");

        // Save the font preference to localStorage
        const fontEnabled = bodyElement.classList.contains("dyslexic-font");
        localStorage.setItem("dyslexicFontEnabled", fontEnabled);
    });
});
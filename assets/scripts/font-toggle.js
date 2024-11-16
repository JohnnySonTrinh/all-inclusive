document.addEventListener("DOMContentLoaded", function () {
    const fontToggleLink = document.getElementById("font-toggle");
    const bodyElement = document.body;

    // Toggle Dyslexic Font Class
    fontToggleLink.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default anchor link behavior
        bodyElement.classList.toggle("dyslexic-font");
    });
});
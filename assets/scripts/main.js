// Dark Mode Toggle
document
  .getElementById("darkModeToggle")
  .addEventListener("change", function () {
    document.body.classList.toggle("dark-mode");
  });

$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});

// Smooth Scrolling for Internal Links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

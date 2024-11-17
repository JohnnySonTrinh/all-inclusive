document.addEventListener("DOMContentLoaded", function () {
  const navbarLinks = document.querySelectorAll(".navbar-nav .nav-link");
  
  // Store the active link index
  let currentIndex = 0;

  // Set the focus to the first item in the navbar
  if (navbarLinks.length > 0) {
    navbarLinks[0].setAttribute("tabindex", "0");  // Set first item to be focusable
    navbarLinks[0].focus();
  }

  // Handle keydown events to enable keyboard navigation
  document.addEventListener("keydown", function (e) {
    // Handle navigation using the Tab key
    if (e.key === "Tab") {
      e.preventDefault(); // Prevent default tab behavior

      if (e.shiftKey) {
        // Shift + Tab: Navigate backward
        currentIndex = (currentIndex - 1 + navbarLinks.length) % navbarLinks.length;
      } else {
        // Tab: Navigate forward
        currentIndex = (currentIndex + 1) % navbarLinks.length;
      }

      // Focus the next or previous link
      navbarLinks[currentIndex].setAttribute("tabindex", "0");
      navbarLinks[currentIndex].focus();
    }

    // Handle activation of the current link with Enter or Space
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      navbarLinks[currentIndex].click(); // Simulate a click on the focused link
    }
  });
});
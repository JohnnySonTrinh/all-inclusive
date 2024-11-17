function loadNavbar() {
    // Get the current page path (relative to the root of the site)
    const currentPage = window.location.pathname.split("/").pop();

    const navbarHtml = `
        <nav class="navbar navbar-expand-lg navbar-dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="index.html">
                    <img src="assets/images/logo-light.png" id="logo" alt="Website Logo" class="logo-img" style="width: 120px;">
                </a>
                <button class="navbar-toggler" tabindex="0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                            <a class="nav-link ${currentPage === "index.html" ? "active" : ""
        }" href="index.html">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link ${currentPage === "profiling.html" ? "active" : ""
        }" href="profiling.html">Profiling</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link ${currentPage === "core-concepts.html"
            ? "active"
            : ""
        }" href="core-concepts.html">Core Concepts</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link ${currentPage === "about.html" ? "active" : ""
        }" href="about.html">About Us</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link ${currentPage === "contact.html" ? "active" : ""
        }" href="contact.html">Contact</a>
                        </li>
                        <li class="nav-item dropdown-center">
                            <button class="nav-link dropdown-toggle" id="settings-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false" title="Settings">
                                <i class="fas fa-cog"></i>
                                Settings
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="settings-toggle">
                                <li class="nav-item" data-toggle="tooltip" data-placement="bottom" title="Toggles colour scheme between light mode and dark mode">
                                    <a id="theme-toggle" href="#" class="nav-link">
                                        <i id="theme-icon" class="fas fa-moon"></i>
                                        Toggle Theme
                                    </a>
                                </li>
                                <li class="nav-item" data-toggle="tooltip" data-placement="bottom" title="Toggles font to a dyslexic friendly font">
                                    <a href="#" id="font-toggle" class="nav-link"><i class="fas fa-font"></i> Toggle Font</a>
                                </li>
                                <li class="nav-item" data-toggle="tooltip" data-placement="bottom" title="Adjust the audio volume">
                                    <div class="nav-link d-flex align-items-center">
                                        
                                        <label for="volume-control"></label>
                                        <input
                                            type="range"
                                            id="volume-control"
                                            min="0"
                                            max="1"
                                            step="0.1"
                                            value="1"
                                            aria-label="Adjust volume"
                                            style="width: 100px;"
                                            />
                                    </div>
                                </li>
                            </ul>
                        </li>    
                  </ul>
              </div>
          </div>
      </nav>`;

    document
        .getElementById("navbar-placeholder")
        .insertAdjacentHTML("afterbegin", navbarHtml);
}

// Function to load the Footer
function loadFooter() {
    const footerHtml = `
    <footer class="footer">
        <div class="container">
            <div class="footer-links">
                <!-- Contact link -->
                <a href="contact.html" class="link text-decoration-none">
                    <i class="fas fa-envelope"></i> Contact Us
                </a>

                <!-- GitHub Link -->
                <div>
                    <a href="https://github.com/JohnnySonTrinh/all-inclusive" class="link text-decoration-none" target="_blank" rel="noopener">
                        <i class="fab fa-github"></i> Visit Us on GitHub
                    </a>
                </div>
            </div>

            <!-- Copyright -->
            <small>© ${new Date().getFullYear()} All-Inclusive. All Rights Reserved.</small>
        </div>
    </footer>
`;

    document
        .getElementById("footer-placeholder")
        .insertAdjacentHTML("beforeend", footerHtml);
}

// Call the functions when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    loadNavbar();
    loadFooter();
});

// This function closes the navbar menu when the user clicks outside of it
document.addEventListener("click", function (event) {
    const navbarCollapse = document.querySelector("#navbarNav");
    const navbarToggler = document.querySelector(".navbar-toggler");

    const isNavbarOpen = navbarCollapse.classList.contains("show");

    // Check if the click is outside the navbar and toggler button
    if (
        isNavbarOpen &&
        !navbarCollapse.contains(event.target) &&
        !navbarToggler.contains(event.target)
    ) {
        const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
            toggle: true,
        });
        bsCollapse.hide();
    }
});

const currentRootUrl = window.location.origin;
let rootUrl = '';

if (currentRootUrl.includes('localhost') || currentRootUrl.includes('127.0.0.1')) {
    rootUrl = currentRootUrl;
} else {
    rootUrl = currentRootUrl + "/your_project_folder";
}

function onHomeButtonClick() {
    window.location.href = rootUrl + '/index.html';
}

function onServicesButtonClick() {
    window.location.href = rootUrl + '/services.html';
}

function onDemoButtonClick() {
    window.location.href = rootUrl + '/demo.html';
}

function onAboutButtonClick() {
    window.location.href = rootUrl + '/about.html';
}

function onContactButtonClick() {
    window.location.href = rootUrl + '/contact.html';
}

// Ensure DOM is loaded before adding event listeners
document.addEventListener('DOMContentLoaded', () => {
    const homeBtn = document.getElementById('home-btn');
    const servicesBtn = document.getElementById('services-btn');
    const demoBtn = document.getElementById('demo-btn');
    const aboutBtn = document.getElementById('about-btn');
    const contactBtn = document.getElementById('contact-btn');

    if (homeBtn) homeBtn.addEventListener('click', onHomeButtonClick);
    if (servicesBtn) servicesBtn.addEventListener('click', onServicesButtonClick);
    if (demoBtn) demoBtn.addEventListener('click', onDemoButtonClick);
    if (aboutBtn) aboutBtn.addEventListener('click', onAboutButtonClick);
    if (contactBtn) contactBtn.addEventListener('click', onContactButtonClick);
});
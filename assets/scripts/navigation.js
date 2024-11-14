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

document.getElementById('home-btn').addEventListener('click', onHomeButtonClick);
document.getElementById('services-btn').addEventListener('click', onServicesButtonClick);
document.getElementById('demo-btn').addEventListener('click', onDemoButtonClick);
document.getElementById('about-btn').addEventListener('click', onAboutButtonClick);
document.getElementById('contact-btn').addEventListener('click', onContactButtonClick);
# Testing Documentation for All-Inclusive

This document outlines the testing procedures and results for the website All-Inclusive.<br>

For development documentation, please refer to the [README.md](README.md)<br>

**View the [live project here](https://johnnysontrinh.github.io/all-inclusive/index.html).**<br>
(To open in a new window, press "ctrl" (or ⌘ for Mac) + click on the link)

## Manual Testing

### Navbar

The navigation bar has been fully tested and is working as intended. It consistently indicates the user's current location on the site, and all navigation elements are prominently positioned and clearly labeled. 

### Font Toggle Feature

I've verified that the font toggle feature is functioning properly. Users can successfully switch between the default font and OpenDyslexic font across the entire website, enhancing readability for users with dyslexia. 

### Light/Dark Mode

The Light/Dark Mode toggle has been tested and is working flawlessly. Users can easily switch between light and dark color schemes, improving accessibility and accommodating different visual preferences. 

### Error Page:

The custom 404 error page has been thoroughly tested and is functioning as expected. It maintains a consistent design with the rest of the website, provides clear explanations without technical jargon, and includes appropriate visuals. The OpenDyslexic font toggle also works correctly on this page. 

### Core Concepts Page

I've tested the Core Concepts page, and it's working as intended. All guidelines and anchored references are correctly implemented and accessible, providing users with a comprehensive introduction to the main guidelines for accessible web design. 

### Audio Functionality

I've tested the audio functionality on every page, including the "Listen" buttons for each persona (David Chambers, Tom McLaughlin, Emily Carter, and Alexandra Olivia). All audio elements are working correctly, providing an additional layer of accessibility for users who prefer or require auditory content.

## Automated Testing

All validator testing was performed on the deployed website.

### HTML Validator Testing

The HTML code passed through the [World Wide Web Consortium's validator](https://validator.w3.org/) with no errors.

<details>
<summary>Click for Image HTML Validator Testing</summary>

![html-validator](/documentation/validation/validator-html.png)

</details>

### CSS Validator Testing

No errors were detected when passing through the official [World Wide Web Consortium (W3C) validator](https://jigsaw.w3.org/css-validator/) for CSS.

<details>
<summary>Click for Image CSS Validator Testing</summary>

![css-validator](/documentation/validation/validator-css.png)

</details>

### JavaScript Validator Testing

The JavaScript passed without errors through the [JSHint Validator](https://jshint.com/), a JavaScript Code Quality Tool.

<details>
<summary>Click for Image JavaScript Validator Testing</summary>

![js-validator](/documentation/validation/validator-main.js.png)

</details>

### Lighthouse Report

![Lighthouse report desktop](/documentation/validation/lighthouse-desktop-home.png)
![Lighthouse report desktop](/documentation/validation/lighthouse-desktop-profiling.png)
![Lighthouse report desktop](/documentation/validation/lighthouse-coreconcept.png)
![Lighthouse report desktop](/documentation/validation/lighthouse-about.png)
![Lighthouse report desktop](/documentation/validation/lighthouse-desktop-contact.png)

![Lighthouse report mobile](/documentation/validation/lighthouse-mobile-home.png)
![Lighthouse report mobile](/documentation/validation/lighthouse-mobile-profiling.png)
![Lighthouse report mobile](/documentation/validation/lighthouse-mobile-coreconcept.png)
![Lighthouse report mobile](/documentation/validation/lighthouse-mobile-about.png)
![Lighthouse report mobile](/documentation/validation/lighthouse-mobile-contact.png)

## Color Contrast

[Coolors Color Contrast Light Mode](https://coolors.co/contrast-checker/333333-f5f5f5)

![Coolors Color Contrast Light Mode](/documentation/validation/validator-colorcontrast-lightmode.png)

[Coolors Color Contrast Dark Mode](https://coolors.co/contrast-checker/e0e0e0-121212)

![Coolors Color Contrast Light Mode](/documentation/validation/validator-colorcontrast-darkmode.png)

## Bugs

### Known Bugs

There are no known bugs in the deployed project.

### Resolved Bugs

| Bug                                                  | Description                                                                                                                                                                                            | Solution Applied                                                                                                                                | Result |
|------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------|--------|
| Merge conflicts                                      | Forking the repository and cloning it to the local machine caused time consuming merge conflicts.                                                                                                      | Create a branch for each feature and to merge it into the main branch. Allows a complete overview and access to each team members current task. | Solved |
| Text-to-Speach, Toggle for Light-/Dark-Mode feature. | Users experienced an issue where their personalized settings for specifically dark mode, font toggling, and volume control—were not maintained when navigating between different pages of the website. | Use local storage to save the key value for Volume and Light-/Dark-Mode darkmode to enable it.                                                  | Solved |

## Programs Used

A comprehensive list of all tools, validators, and programs used throughout the testing process and for this testing documentation. This section provides links and brief descriptions of each tool, helping readers understand the testing methodology and potentially replicate the tests.

-	[World Wide Web Consortium's Validation Service for Markup](https://validator.w3.org/) for HTML code.
-	[World Wide Web Consortium (W3C) validator for CSS](https://validator.w3.org/) validator for the CSS stylesheet.
-	[JSHint Validator]( https://jshint.com/) for JavaScript scripts.
-	[Google Chrome Developer Tools Lighthouse](https://developer.chrome.com/docs/lighthouse/overview) for performance report.
-	[Wave WebAIM Validator](https://wave.webaim.org/) to validate web accessibility.
-	[Coolors Color Contract Checker](https://coolors.co/contrast-checker/333333-f5f5f5) to assess contrast for accessibility.
-	[Table-magic](https://stevecat.net/table-magic/) to create markdown tables for this TESTING.md.

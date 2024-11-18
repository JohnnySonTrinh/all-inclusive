# Testing Documentation for All-Inclusive

This document outlines the testing procedures and results for the website All-Inclusive.<br>

For development documentation, please refer to the [README.md](README.md)<br>

**View the [live project here](https://johnnysontrinh.github.io/all-inclusive/index.html).**<br>
(To open in a new window, press "ctrl" (or ⌘ for Mac) + click on the link)

##### Manual Testing



##### Automated Testing

All validator testing was performed on the deployed website.

##### HTML Validator Testing

The HTML code passed through the [World Wide Web Consortium's validator](https://validator.w3.org/) with no errors.

<details>
<summary>Click for Image HTML Validator Testing</summary>

![html-validator](to-do)

</details>

##### CSS Validator Testing

No errors were detected when passing through the official [World Wide Web Consortium (W3C) validator](https://jigsaw.w3.org/css-validator/) for CSS.

<details>
<summary>Click for Image CSS Validator Testing</summary>

![css-validator](to-do)

</details>

##### JavaScript Validator Testing

The JavaScript passed without errors through the [JSHint Validator](https://jshint.com/), a JavaScript Code Quality Tool.

<details>
<summary>Click for Image JavaScript Validator Testing</summary>

![js-validator](/documentation/validation/validator-main.js.png)

</details>

##### Lighthouse Report

![Lighthouse report desktop](/documentation/validation/lighthouse-desktop-home.png)
![Lighthouse report desktop](/documentation/validation/lighthouse-desktop-profiling.png)
![Lighthouse report desktop](/documentation/validation/lighthouse-coreconcept.png)
![Lighthouse report desktop](/documentation/validation/lighthouse-about.png)
![Lighthouse report desktop](/documentation/validation/lighthouse-desktop-contact.png)

![Lighthouse report mobile](/documentation/validation/lighthouse-mobile-home.png)
![Lighthouse report mobile](/documentation/validation/lighthouse-mobile-profiling.png)
![Lighthouse report mobile](/documentation/validation/lighthouse-mobile-coreconcept.png.png)
![Lighthouse report mobile](/documentation/validation/lighthouse-mobile-about.png)
![Lighthouse report mobile](/documentation/validation/lighthouse-mobile-contact.png)


## Bugs

### Known Bugs

There are no known bugs in the deployed project.

### Resolved Bugs

| Bug                                                  | Description                                                                                                                                                                                            | Solution Applied                                                                                                                                | Result |
|------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------|--------|
| Merge conflicts                                      | Forking the repository and cloning it to the local machine caused time consuming merge conflicts.                                                                                                      | Create a branch for each feature and to merge it into the main branch. Allows a complete overview and access to each team members current task. | Solved |
| Text-to-Speach, Toggle for Light-/Dark-Mode feature. | Users experienced an issue where their personalized settings for specifically dark mode, font toggling, and volume control—were not maintained when navigating between different pages of the website. | Use local storage to save the key value for Volume and Light-/Dark-Mode darkmode to enable it.                                                  | Solved |

### Programs Used

A comprehensive list of all tools, validators, and programs used throughout the testing process and for this testing documentation. This section provides links and brief descriptions of each tool, helping readers understand the testing methodology and potentially replicate the tests.

-	[World Wide Web Consortium's Validation Service for Markup](https://validator.w3.org/) for HTML code.
-	[World Wide Web Consortium (W3C) validator for CSS](https://validator.w3.org/) validator for the CSS stylesheet.
-	[JSHint Validator]( https://jshint.com/) for JavaScript scripts.
-	[Google Chrome Developer Tools Lighthouse](https://developer.chrome.com/docs/lighthouse/overview) for performance report.
-	[Wave WebAIM Validator](https://wave.webaim.org/) to validate web accessibility.
-	[Coolors Color Contract Checker](https://coolors.co/contrast-checker/333333-f5f5f5) to assess contrast for accessibility.
-	[Table-magic](https://stevecat.net/table-magic/) to create markdown tables for this TESTING.md.

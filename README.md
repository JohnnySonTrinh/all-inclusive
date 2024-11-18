# All-Inclusive

![Mockup All-Inclusive](/documentation/features/mockup-all-inclusive.png)

**View the [live project here](https://johnnysontrinh.github.io/all-inclusive/index.html).**<br>
(To open in a new window, press "ctrl" (or ⌘ for Mac) + click on the link)

[![GitHub commit activity](https://img.shields.io/github/commit-activity/t/JohnnySonTrinh/all-inclusive)](https://github.com/JohnnySonTrinh/all-inclusive/commits/main)
[![GitHub last commit](https://img.shields.io/github/last-commit/JohnnySonTrinh/all-inclusive)](https://github.com/JohnnySonTrinh/all-inclusive/commits/main)
[![GitHub repo size](https://img.shields.io/github/repo-size/JohnnySonTrinh/all-inclusive)](https://github.com/JohnnySonTrinh/all-inclusive)

## User Experience

### Target Audience

People who embrace inclusivity and accessible web design. The website offers users the opportunity to try using assistive technology without knowing how to use it or having to download any apps to explore it.

### First Time Visitors Goals

As a firs time user,

- I want to understand the principles of inclusive web design.
- I want to learn how to implement these principles in my own projects.
- I want to find resources and tools that can help me get started.
- I want to see examples of how the principles will look like on a rendered website.
- I can experiement with accessible features without having access to assistive technology or know how to use it.

### Returning Visitors Goals

As a returning visitor,

- I want to explore advanced techniques for accessible web design.
- I want to check for updates on new techniques in accessible web design.
- I want to have the chance to ask questions by email about the implementation.

### Frequent Visitors Goals

As a frequent visitor,

- I want to ask the team questions or give feedback of my own implementation of accessible web principles.
- I want access the main guidelines for web accessibility in one place in a pleasing design.

### Site Goals

The site goal are to provide valuable resources and information on inclusive web design and promote online accessibility and inclusivity.

## Design

### Colour Scheme

A limited color palette was chosen to avoid visual clutter, well in line with the topic of accessibility.<br>

The website offers lightmode and darkmode. Both are easy on the eye and well readable.

![color-palette](/documentation/features/color-palette.png)

[Coolors Color Contrast Light Mode](https://coolors.co/contrast-checker/333333-f5f5f5)

![Coolors Color Contrast Light Mode](/documentation/validation/validator-colorcontrast-lightmode.png)

[Coolors Color Contrast Dark Mode](https://coolors.co/contrast-checker/e0e0e0-121212)

![Coolors Color Contrast Light Mode](/documentation/validation/validator-colorcontrast-darkmode.png)

CSS ':root' variables were used to easily update the global colour scheme by changing only one value instead of everywhere in the CSS file.
```css
/* root variables */
:root {
  /* Accessible Color Palette */
  --primary-color: #1A5F7A;
  /* Deep Blue */
  --secondary-color: #10514E;
  /* Teal */
  --background-color: #F5F5F5;
  /* Soft White */
  --text-color: #333333;
  /* Charcoal Gray */
  --accent-color: #FF7F50;
  --button-hover-color: #690000;
  /* Warm Orange */
  --muted-color: #4F4E4E;
  --links-color: #fff;
  --nav-hover-color: #D6D5D5;
  --nav-active-color: #FFE6BD;
  /* White/black color shades */
  --white-color: #fff;
  --black-color: #222;
}
[data-theme="dark"] {
  /* Accessible Dark Mode Variables */
  --primary-color: #83B7C9;
  /* Brighter Blue */
  --secondary-color: #2BD4CB;
  /* Vivid Teal */
  --background-color: #121212;
  /* True Dark Gray */
  --text-color: #E0E0E0;
  /* Light Gray */
  --accent-color: #FF6347;
  /* Vibrant Red-Orange */
  --muted-color: #B3B2B2;
  --links-color: #000;
  --nav-hover-color: #373636;
  --button-hover-color: #D6D5D5;
  --nav-active-color: #690000;
  --white-color: #FFFFFF;
  --black-color: #000000;
}
```

### Typography

For our inclusive project, we've chosen the Inter font to create an engaging and readable user interface. This font was selected for its clarity and legibility, enhancing the overall user experience for a diverse audience. Additionally, we've implemented the OpenDyslexic font as an optional setting that users can toggle in the accessibility settings. This allows individuals with dyslexia to switch to a font designed to improve readability for them.

#### Inter

[Inter](https://fonts.google.com/specimen/Inter) is a modern, open-source sans-serif typeface designed by Rasmus Andersson. It is crafted specifically for computer screens, with features that improve legibility at small sizes and on low-resolution displays. Key characteristics of Inter include:
- Tall x-height: Improves readability by making lower-case letters more distinguishable.
- Open letterforms: Enhances clarity by preventing letters from blending together.
- Clear distinctions: Between similar characters like I, l, and 1, reducing confusion.
- Extensive Language Support: Covers a wide range of languages and scripts.
By using Inter, we ensure that our text content is easily readable across various devices and screen sizes, contributing to a better user experience for all visitors.

#### Merriweather

[Merriweather](https://fonts.google.com/specimen/Merriweather?query=Merriweather) is a serif typeface that is also designed for readability for headings.

#### OpenDyslexic

[OpenDyslexic](https://opendyslexic.org/) is an open-source typeface designed to increase readability for readers with dyslexia. Created by Abelardo Gonzalez, it incorporates unique design features:
- Heavy weighted bottoms: Helps anchor the letters to the baseline, reducing letter flipping and inversion.
- Distinct letter shapes: Differentiates commonly confused characters, such as b and d, or p and q.
- Consistent spacing: Provides uniform spacing between letters and words to improve readability.
By offering OpenDyslexic as a font option in our settings, we aim to make our content more accessible and inclusive, aligning with our commitment to support users with diverse needs.

#### Implementation in CSS

The fonts are included at the beginning of our main CSS file using the @import rule from Google Fonts and reliable font repositories. This method ensures that the fonts are available as soon as the CSS is loaded, maintaining a consistent typographic experience throughout the site.

```css
/* import google fonts */
@import url("https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap");

/* Define OpenDyslexic Font */
@import url("https://fonts.cdnfonts.com/css/open-dyslexic");
```

## Wireframes

The wireframes were created using [Balsamiq](https://balsamiq.com/wireframes/).

![Wireframe Landing Page](/documentation/wireframes/Landing%20Page.png)

![Wireframe Core Concepts](/documentation/wireframes/Core%20Concepts.png)

![Wireframe ](/documentation/wireframes/Contact%20Page.png)

![Wireframe About Us](/documentation/wireframes/About%20us%20Page.png)

## Agile Methodology

This project employs Agile Development Methods to oversee the development process and ensure efficient delivery.

### Kanban Board

The project's Kanban Board can be viewed [here]( https://github.com/users/JohnnySonTrinh/projects/8/views/1

### EPICS (Milestones) to-do or delete

The epics outline the high-level objectives and functionalities of the project. These can be further broken down into more granular tasks, as specified in the user stories.

### User Stories Issues to-do or delete

User stories provide detailed descriptions that define the project's functionalities from the user's perspective.

For details to the Epics and User Stories, please visit the project's [Kanban Board](https://github.com/users/JohnnySonTrinh/projects/8/views/1).

### The MoSCoW Prioritization Method

The acronym represents Must Have, Should Have, Could Have, and Won't Have. To efficiently manage resources and development flow according to urgency and necessity, the MoSCoW prioritization method was utilized. This structured approach helps identify which features are essential for the current phase (Must Have), which can be included if time permits (Should Have), which may be postponed for future iterations (Could Have), and which will be excluded from this iteration or are unlikely to be implemented (Won't Have).
The priorities are reflected on each task with **labels** on each user story on [this project's Kanban board](https://github.com/users/JohnnySonTrinh/projects/8/views/1)

## Features

### Navbar

The website features a clean layout and a clear visual hierarchy to facilitate easy navigation. The navigation bar always indicates the user's current location on the site. Navigation elements, including links and buttons, are prominently positioned and clearly labeled.

The navbar features a few custom settings.

The user can toggle all text content to a different font, Opendyslexic, which is often preferred by persons with dislexia.

![Font toggle feature](/documentation/features/feature-togglefont.png)

The user can toggle between Lightmode and Darkmode.

![Light / Dark Mode feature](/documentation/features/feature-toggle-mode.png)

### Footer

The footer contains a link to the user-friendly contact form and copyrights information.

![feature footer](/documentation/features/feature-footer.png)

### Home

The Home page serves as an attractive introduction to the website, featuring a concise overview of its offerings.

![feature-home](/documentation/features/feature-home.png)

### Profiling

The Profiling page offers case study details on why accessibility matters by introducing people who use or even rely on it.

![feature-profiling](/documentation/features/feature-profiling.png)

### Core Concepts

The Core Concepts page introduces some of the main guidelines for accessible web with anchored references to the details on implementation and further details.

![feature-core-concepts](/documentation/features/feature-core-concepts.png)

### About Us

The About Us page offers details about the team responsible for the project.

![feature-about](/documentation/features/feature-core-concepts.png)

### Contact

The Contact page offers the user the chance to contact the All-Inclusive team via a user-friendly contact form.

![feature-contact](/documentation/features/feature-contact.png)

### Error Pages

The project implements a custom HTML error page for the 404 (Not Found) status code to enhance user experience. This error page features a consistent design with the website, provides a clear, user-friendly explanation of the error without technical jargon, and uses straightforward language. Additionally, it includes a visually appealing image that aligns with the website's theme.

![error-page](to-do)

##### Future Features

## Testing

For comprehensive information on testing procedures and results, please refer to our [TESTING.md](TESTING.md) document.

### Future Features

- A choice between different voices so the user can customize their experience.
- Resize text by toggling a button on the website.

## Technologies Used

### Languages Used

- HTML
- CSS
- JavaScript
- Markdown for this README.md

### Technologies and Programs Used

- [World Wide Web Consortium's HTML validator](https://validator.w3.org/) to validate HTML
- [World Wide Web Consortium's CSS validator](https://validator.w3.org/) to validate CSS
- [JSHint Validator](https://jshint.com/) to validate JavaScript
- [The A11y Project Checklist](https://www.a11yproject.com/checklist/) for accessibility guidelines
- [Balsamiq](https://balsamiq.com/wireframes/) to create the wireframes
- [Canva](https://www.canva.com/) to create the website logo
- [Leonardo.ai](https://leonardo.ai/) to create images
- [favicon.io](https://favicon.io/favicon-converter/) to create the favicon
- [Photoroom](https://www.photoroom.com/tools/background-remover) to remove background from images
- [Pixelied](https://pixelied.com/convert) to convert images to webp format
- [TinyPNG](https://tinypng.com/) to compress images
- [Color Contrast Checker](https://coolors.co/contrast-checker/112a46-acc8e5) for color contrast check
- [Techsini.com](https://techsini.com/multi-mockup/index.php) to create the mockup for this README
- [Fontawesome](https://fontawesome.com/) for icons
- [Balsamiq](https://balsamiq.com/wireframes/) for wireframes

## Deployment and Local Development

### Cloning Repository

To clone the repository:

- Log in to GitHub and navigate to the repository of this project.
- Click on the green button "Code" to open the dropdown menu, select "Clone with HTTPS, SSH or GitHub CLI" and copy the link provided.
- Open "Terminal" (or "Git Bash") in your code editor.
- Change the current working directory to the location where you want the cloned directory to be made.
- Type "git clone" in the terminal and then paste the URL copied on GitHub in step 2, above.
- Press "Enter" and your local clone will be created.

### Creating A Fork

To fork the repository:

- Log in to Github and navigate to the repository of this project.
- Click the button "Fork" in the top right corner to open dropdown menu and select "Create a new fork".

### Deployment

To deploy the repository using GitHub Pages:

- Navigate to settings of the repository on the top navigation menu.
- Navigate to Pages on the left sidebar navigation menu.
- In the section "Build and deployment”, go to Source and select "Deploy from a branch" from the navigation dropdown menu.
- In the section "Branch", select the following from the dropdown menus: "Main", "Root" and click "Save".
- The link to the deployed website will appear at the top of the section as soon as processed.
- The link is accessible from the main page of the depository on the right navigation menu under "Deployments".

## Credits

### Media

- [Leonardo.ai](https://leonardo.ai/) to create images
- [Canva](https://www.canva.com/) for the website logo
- [favicon.io](https://favicon.io/favicon-converter/) for the favicon
- [UnDraw.co](https://undraw.co/) was used as the main source for illustrational images. 

### Content

- [The A11y Project Checklist](https://www.a11yproject.com/checklist/) for guidelines on web accessibility

## The Dream Team

Connect with our caffeinated coders behind project **All-Inclusive**:

### Alina 🧠

- [GitHub](https://github.com/TeodoraAlina) | [LinkedIn](https://www.linkedin.com/in/alina-teodora-brinzac/)

### Max ⚡

- [GitHub](https://github.com/d0bledore) | [LinkedIn](https://www.linkedin.com/)

### Gudrun 🖱️

- [GitHub](http://github.com/g-omarsdottir) | [LinkedIn](http://linkedin.com/in/gudrun-omarsdottir/)

### Kristian 🔗

- [GitHub](https://github.com/KC-85) | [LinkedIn](https://www.linkedin.com/in/kristian-cross-4976622b7/)

### Daisy 👁️

- [GitHub](https://github.com/Dee-McG) | [LinkedIn](https://www.linkedin.com/in/mcgirr-daisy/)

### Johnny 🐛

- [GitHub](https://github.com/JohnnySonTrinh) | [LinkedIn](https://www.linkedin.com/in/johnny-trinh-dev/)

## Acknowledgements

- [Code Institute](https://codeinstitute.net/) for this Hackathon event

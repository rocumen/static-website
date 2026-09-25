# CloudSphere - Static Website Published on GitHub Pages

Activity: Publish a Static Website Using GitHub Pages  
Course: Cloud Computing  
Technology Stack: HTML5, CSS3, JavaScript (ES6+), GitHub, GitHub Pages  

---

## Live Demo

Published website:  
https://rocumen.github.io/static-website/

Repository:  
https://github.com/rocumen/static-website

---

## Project Overview

CloudSphere is a responsive educational static website built to present fundamental cloud computing concepts, including cloud service models (IaaS, PaaS, SaaS) and key industry benefits. 

The website includes interactive JavaScript features: a real-time digital clock, an event countdown timer, a cloud fact generator, an interactive like counter, an accordion toggle, and a dark/light mode toggle.

---

## Features

### 1. HTML5 Structure
- Semantic layout using standard HTML5 tags (header, nav, main, section, footer).
- Sticky navigation bar with anchor links to page sections.
- Sections: Overview, Service Models, Key Benefits, and Live Tools.

### 2. CSS3 Styling and Responsiveness
- Responsive layout supporting desktop and mobile screens via media queries.
- Card grid displays for service models, benefits, and tools.
- Dark mode theme toggle with styling overrides.

### 3. JavaScript Features
- Live Digital Clock: Displays current time (12-hour format with AM/PM) and date, updating every second.
- Event Countdown Timer: Calculates and displays remaining days, hours, minutes, and seconds until the target deadline.
- Interactive Buttons:
  - Fact Generator: Displays a cloud computing tip or fact on button click.
  - Helpful Counter: Tracks click count dynamically.
  - Quick Note Toggle: Expands and collapses additional information.
  - Theme Toggle: Switches between dark mode and light mode, persisting the preference in localStorage.

---

## File Structure

```text
static-website/
├── index.html       # Main HTML page structure
├── style.css        # CSS stylesheets and theme rules
├── script.js        # JavaScript logic for clock, countdown, and buttons
├── DOCUMENTATION_SUBMISSION_GUIDE.md # Submission guide and screenshot checklist
└── README.md        # Project documentation
```

---

## Running Locally

1. Clone or download the repository:
   ```bash
   git clone https://github.com/rocumen/static-website.git
   ```

2. Navigate to the project directory:
   ```bash
   cd static-website
   ```

3. Open `index.html` in any modern web browser, or start a local HTTP server:
   ```bash
   python -m http.server 8000
   ```

4. Open `http://localhost:8000` in your browser.

---

## Deployment to GitHub Pages

1. Push all files to the `main` branch of the GitHub repository.
2. Go to repository Settings > Pages.
3. Under Build and deployment, set Source to "Deploy from a branch".
4. Select `main` branch and `/(root)` folder.
5. Save the configuration and access the site at the generated GitHub Pages URL.

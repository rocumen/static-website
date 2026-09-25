# CloudSphere - Static Website Published on GitHub Pages

> **Activity:** Publish a Static Website Using GitHub Pages  
> **Course:** Cloud Computing  
> **Technology Stack:** HTML5, CSS3, JavaScript (ES6+), GitHub, GitHub Pages  

---

## 🚀 Live Demo
Access the published website here:  
👉 **[https://rocumen.github.io/static-website/](https://rocumen.github.io/static-website/)**  
*(Note: Replace with your actual GitHub Pages URL once deployed!)*

---

## 📌 Project Overview
**CloudSphere** is a modern, responsive, and educational static website designed to introduce foundational cloud computing concepts, service models (IaaS, PaaS, SaaS), deployment architectures, and industry benefits. 

The website incorporates interactive JavaScript features including a real-time digital clock, an event countdown timer, a dynamic cloud fact generator, and a light/dark theme switcher.

---

## ✨ Features

### 1. HTML5 Structure
- **Semantic Layout:** Built using modern HTML5 semantic elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`).
- **Interactive Navigation:** Sticky header with anchor navigation that smoothly scrolls to different sections.
- **Rich Content:** 4 comprehensive content sections, styled lists, official external links (Google Cloud, AWS, Microsoft Azure), and modern SVG graphics.

### 2. CSS3 Design & Responsiveness
- **Design Tokens:** Flexible CSS custom variables for themes, typography, spacing, and shadows.
- **Card-based UI:** Sleek, modern cards with hover transitions and subtle shadows.
- **Responsive Media Queries:** Fully responsive across mobile phones, tablets, and desktop displays.
- **Dark & Light Mode:** Seamless styling transitions between light and dark visual themes.

### 3. JavaScript Functionality
1. **Live Digital Clock:** Dynamically updates the current 12-hour time (`HH:MM:SS AM/PM`) and date every single second.
2. **Event Countdown Timer:** Real-time countdown clock calculating Days, Hours, Minutes, and Seconds remaining until the project deadline.
3. **Interactive Actions:**
   - **Cloud Tip Generator:** Selects and renders random cloud computing insights upon user click.
   - **Helpful Counter:** Increments an engagement counter dynamically without reloading the page.
   - **Collapsible Architecture Note:** Toggles additional detailed information smoothly.
   - **Dark Mode Switcher:** Toggles and saves user preference using `localStorage`.

---

## 📂 Repository File Structure
```text
static-website/
├── index.html       # Primary HTML structure and content
├── style.css        # Responsive styling and CSS theme rules
├── script.js        # JavaScript logic (clock, timer, interactive buttons)
└── README.md        # Project documentation and activity overview
```

---

## 🛠️ How to Run Locally
1. Clone or download this repository:
   ```bash
   git clone https://github.com/rocumen/static-website.git
   ```
2. Navigate to the project directory:
   ```bash
   cd static-website
   ```
3. Open `index.html` in any web browser, or launch using VS Code Live Server / Python HTTP server:
   ```bash
   python -m http.server 8000
   ```
4. Visit `http://localhost:8000` in your web browser.

---

## 🌐 Publishing to GitHub Pages
1. Push all files to the `main` branch of your GitHub repository `static-website`.
2. On GitHub, navigate to **Settings** > **Pages**.
3. Under **Branch**, select `main` and root folder `/(root)`.
4. Click **Save** and wait for deployment to complete.

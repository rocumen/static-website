# Activity: Publish a Static Website Using GitHub Pages

Course: Cloud Computing  
Repository: https://github.com/rocumen/static-website  
Published Website URL: https://rocumen.github.io/static-website/  

---

## 1. Activity Information

Activity Goal: Publish a functional static website using HTML, CSS, JavaScript, GitHub, and GitHub Pages.  
Selected Topic: Cloud Computing Information (Part 2 - Plan Your Website)  

Website Plan Details:
- Website Title: CloudSphere | Cloud Computing Essentials
- Purpose: Provide a clear educational resource explaining fundamental cloud computing concepts, service models, and benefits, accompanied by real-time interactive tools.
- Target Audience: Students, beginner developers, and IT learners exploring cloud infrastructure.
- Main Content: Cloud computing overview, service models (IaaS, PaaS, SaaS), key advantages, and live interactive JavaScript tools.

---

## 2. Activity Requirements Compliance

### Part 3 - HTML Structure (index.html)
The webpage contains appropriate HTML5 semantic elements:
- Website title and header
- Navigation menu with anchor links
- Main content divided into four distinct sections:
  1. Overview (Hero section)
  2. Service Models (IaaS, PaaS, SaaS)
  3. Key Benefits (Cost, Scalability, Performance, Reliability)
  4. Live Tools (Interactive JavaScript features)
- Visual content (inline vector graphics and card badges)
- Hyperlinks for page navigation
- Unordered and structured lists
- Footer with attribution

### Part 4 - CSS Design (style.css)
The stylesheet customizes the visual appearance:
- Background styling and color palettes
- Font styling (Plus Jakarta Sans and JetBrains Mono)
- Text alignment, spacing, margins, and padding
- Border styling and card-based layout
- Button styling with hover states
- Navigation bar styling
- Section and card layouts
- Responsive layout using media queries for mobile and desktop screens
- Light and dark theme styling

### Part 5 - JavaScript Functionality (script.js)
The script implements three functional JavaScript features:
1. Live Time Counter (Requirement 1):
   - Displays current 12-hour time (HH:MM:SS AM/PM) and full date.
   - Updates automatically every second.
2. Event Countdown Timer (Requirement 2):
   - Real-time countdown displaying Days, Hours, Minutes, and Seconds.
   - Automatically decreases every second toward the target deadline.
3. Interactive Button and Extra Features (Requirement 3):
   - Random cloud tip/fact generator that changes page text on click.
   - Helpful counter that updates dynamically without refreshing the page.
   - Show/hide collapsible note.
   - Dark/light mode theme toggle saved in localStorage.

---

## 3. Repository File Structure

```text
static-website/
├── index.html       # HTML5 structure and content
├── style.css        # CSS3 styling and responsive layout
├── script.js        # JavaScript interactive features
├── DOCUMENTATION_SUBMISSION_GUIDE.md # Canvas submission reference guide
└── README.md        # Activity documentation
```

---

## 4. Running Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/rocumen/static-website.git
   ```

2. Open the project folder:
   ```bash
   cd static-website
   ```

3. Open `index.html` in any web browser, or run a local HTTP server:
   ```bash
   python -m http.server 8000
   ```

4. View the website at `http://localhost:8000`.

---

## 5. Publishing to GitHub Pages (Part 9)

1. Push all files to the `main` branch of the GitHub repository `static-website`.
2. Navigate to repository Settings > Pages.
3. Under Build and deployment, set Source to "Deploy from a branch".
4. Select the `main` branch and `/(root)` directory.
5. Save settings and access the live website at:
   https://rocumen.github.io/static-website/

/**
 * CloudSphere - Interactive Web Features
 * Activity: Publish a Static Website Using GitHub Pages
 * Fulfills all JavaScript Requirements:
 * 1. Live Digital Clock (real-time updating every second)
 * 2. Event Countdown Timer (decreasing dynamically)
 * 3. Interactive Buttons (Theme toggle, Tip generator, Counter, Accordion)
 */

document.addEventListener('DOMContentLoaded', () => {

  /* ==========================================================================
     FEATURE 1: Live Digital Clock
     - Displays formatted current time (HH:MM:SS AM/PM)
     - Updates automatically every second
     ========================================================================== */
  const liveClockElement = document.getElementById('liveClock');
  const liveDateElement = document.getElementById('liveDate');

  function updateLiveClock() {
    const now = new Date();

    // Format Hours, Minutes, Seconds with leading zeros
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';

    // Convert 24-hour format to 12-hour format
    hours = hours % 12;
    hours = hours ? String(hours).padStart(2, '0') : '12';

    const timeString = `${hours}:${minutes}:${seconds} ${ampm}`;

    // Format readable Date (e.g. Friday, September 25, 2026)
    const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateString = now.toLocaleDateString(undefined, dateOptions);

    if (liveClockElement) {
      liveClockElement.textContent = timeString;
    }
    if (liveDateElement) {
      liveDateElement.textContent = dateString;
    }
  }

  // Initial call immediately so there is no delay, then update every 1 second
  updateLiveClock();
  setInterval(updateLiveClock, 1000);


  /* ==========================================================================
     FEATURE 2: Event Countdown Timer
     - Target: Cloud Computing Project Showcase & Final Examination
     - Decreases automatically every second
     - Displays Days, Hours, Minutes, Seconds
     ========================================================================== */
  const daysVal = document.getElementById('daysVal');
  const hoursVal = document.getElementById('hoursVal');
  const minutesVal = document.getElementById('minutesVal');
  const secondsVal = document.getElementById('secondsVal');
  const countdownContainer = document.getElementById('countdownContainer');

  // Set target date for 15 days from now (or specific term deadline)
  // This ensures the countdown is always actively ticking for demonstration
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 15);
  targetDate.setHours(23, 59, 59, 0);

  function updateCountdown() {
    const currentTime = new Date().getTime();
    const distance = targetDate.getTime() - currentTime;

    if (distance > 0) {
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (daysVal) daysVal.textContent = String(days).padStart(2, '0');
      if (hoursVal) hoursVal.textContent = String(hours).padStart(2, '0');
      if (minutesVal) minutesVal.textContent = String(minutes).padStart(2, '0');
      if (secondsVal) secondsVal.textContent = String(seconds).padStart(2, '0');
    } else {
      if (countdownContainer) {
        countdownContainer.innerHTML = '<span style="font-weight:bold; color:var(--primary-color);">🎉 Event has officially launched!</span>';
      }
    }
  }

  // Initial call and 1-second interval
  updateCountdown();
  setInterval(updateCountdown, 1000);


  /* ==========================================================================
     FEATURE 3: Interactive Buttons & Creative Features
     - Action A: Random Cloud Fact / Tip Generator
     - Action B: Helpful Feedback Counter
     - Action C: Expand / Collapse Architecture Note
     - Action D: Dark / Light Mode Toggle with LocalStorage
     ========================================================================== */

  // --- Action A: Random Cloud Tip Generator ---
  const cloudTips = [
    "☁️ Cloud fact: AWS was launched publicly in 2006, with S3 and EC2 as its earliest core offerings.",
    "🛡️ Security tip: The Shared Responsibility Model means the cloud provider secures the cloud, while you secure what is in the cloud.",
    "⚡ Scalability tip: Horizontal scaling (scaling out) adds more machine instances, while vertical scaling (scaling up) upgrades the existing machine.",
    "🌐 Serverless fact: Serverless computing (like AWS Lambda or Google Cloud Functions) charges strictly per millisecond of compute time executed.",
    "💾 Storage insight: Cold storage classes provide the lowest storage prices for archiving data that is rarely accessed.",
    "🚀 Multi-cloud strategy: Over 85% of enterprise companies leverage multi-cloud environments to prevent vendor lock-in."
  ];

  const generateTipBtn = document.getElementById('generateTipBtn');
  const tipText = document.getElementById('tipText');

  if (generateTipBtn && tipText) {
    let lastIndex = -1;
    generateTipBtn.addEventListener('click', () => {
      // Pick a random tip different from the current one
      let newIndex;
      do {
        newIndex = Math.floor(Math.random() * cloudTips.length);
      } while (newIndex === lastIndex && cloudTips.length > 1);

      lastIndex = newIndex;

      // Animate text update
      tipText.style.opacity = '0';
      setTimeout(() => {
        tipText.textContent = cloudTips[newIndex];
        tipText.style.opacity = '1';
      }, 150);
    });
  }

  // --- Action B: Helpful Like Counter ---
  const likeCounterBtn = document.getElementById('likeCounterBtn');
  const likeCountSpan = document.getElementById('likeCount');
  let count = 0;

  if (likeCounterBtn && likeCountSpan) {
    likeCounterBtn.addEventListener('click', () => {
      count++;
      likeCountSpan.textContent = count;
      likeCounterBtn.classList.add('btn-primary');
      likeCounterBtn.classList.remove('btn-outline');
    });
  }

  // --- Action C: Show/Hide Architecture Note ---
  const toggleInfoBtn = document.getElementById('toggleInfoBtn');
  const toggleText = document.getElementById('toggleText');
  const collapsibleContent = document.getElementById('collapsibleContent');

  if (toggleInfoBtn && collapsibleContent && toggleText) {
    toggleInfoBtn.addEventListener('click', () => {
      const isExpanded = collapsibleContent.classList.toggle('expanded');
      toggleText.textContent = isExpanded 
        ? 'Hide Architecture Quick Note' 
        : 'Show Architecture Quick Note';
    });
  }

  // --- Action D: Dark / Light Mode Toggle ---
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const themeIcon = themeToggleBtn ? themeToggleBtn.querySelector('.theme-icon') : null;

  // Check saved theme in localStorage
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-theme');
    if (themeIcon) themeIcon.textContent = '☀️';
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      document.body.classList.toggle('dark-theme');
      const isDark = document.body.classList.contains('dark-theme');
      
      // Update button icon
      if (themeIcon) {
        themeIcon.textContent = isDark ? '☀️' : '🌙';
      }

      // Persist setting
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
  }

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

});

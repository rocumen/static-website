document.addEventListener('DOMContentLoaded', () => {

  const liveClock = document.getElementById('liveClock');
  const liveDate = document.getElementById('liveDate');

  function updateClock() {
    const now = new Date();

    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours ? String(hours).padStart(2, '0') : '12';

    if (liveClock) {
      liveClock.textContent = `${hours}:${minutes}:${seconds} ${ampm}`;
    }
    if (liveDate) {
      liveDate.textContent = now.toLocaleDateString(undefined, {
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
      });
    }
  }

  updateClock();
  setInterval(updateClock, 1000);

  const daysVal = document.getElementById('daysVal');
  const hoursVal = document.getElementById('hoursVal');
  const minutesVal = document.getElementById('minutesVal');
  const secondsVal = document.getElementById('secondsVal');
  const countdownContainer = document.getElementById('countdownContainer');

  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 15);
  targetDate.setHours(23, 59, 59, 0);

  function updateCountdown() {
    const distance = targetDate.getTime() - new Date().getTime();

    if (distance > 0) {
      const d = Math.floor(distance / (1000 * 60 * 60 * 24));
      const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((distance % (1000 * 60)) / 1000);

      if (daysVal) daysVal.textContent = String(d).padStart(2, '0');
      if (hoursVal) hoursVal.textContent = String(h).padStart(2, '0');
      if (minutesVal) minutesVal.textContent = String(m).padStart(2, '0');
      if (secondsVal) secondsVal.textContent = String(s).padStart(2, '0');
    } else {
      if (countdownContainer) {
        countdownContainer.innerHTML = '<span style="font-weight:bold; color:#2563eb;">Event has launched.</span>';
      }
    }
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);

  const tips = [
    "AWS launched publicly in 2006 with S3 and EC2 as its first services.",
    "The Shared Responsibility Model: the provider secures the cloud, you secure what is in it.",
    "Horizontal scaling adds more machines; vertical scaling upgrades existing ones.",
    "Serverless (like AWS Lambda) charges per millisecond of compute time.",
    "Cold storage gives the cheapest prices for rarely accessed archive data.",
    "Over 85% of enterprises use multi-cloud to avoid vendor lock-in."
  ];

  const generateBtn = document.getElementById('generateTipBtn');
  const tipText = document.getElementById('tipText');

  if (generateBtn && tipText) {
    let lastIndex = -1;
    generateBtn.addEventListener('click', () => {
      let newIndex;
      do {
        newIndex = Math.floor(Math.random() * tips.length);
      } while (newIndex === lastIndex && tips.length > 1);
      lastIndex = newIndex;

      tipText.style.opacity = '0';
      setTimeout(() => {
        tipText.textContent = tips[newIndex];
        tipText.style.opacity = '1';
      }, 150);
    });
  }

  const likeBtn = document.getElementById('likeCounterBtn');
  const likeCount = document.getElementById('likeCount');
  let count = 0;

  if (likeBtn && likeCount) {
    likeBtn.addEventListener('click', () => {
      count++;
      likeCount.textContent = count;
      likeBtn.classList.add('btn-primary');
      likeBtn.classList.remove('btn-outline');
    });
  }

  const toggleBtn = document.getElementById('toggleInfoBtn');
  const toggleText = document.getElementById('toggleText');
  const collapsible = document.getElementById('collapsibleContent');

  if (toggleBtn && collapsible && toggleText) {
    toggleBtn.addEventListener('click', () => {
      const isOpen = collapsible.classList.toggle('expanded');
      toggleText.textContent = isOpen ? 'Hide Quick Note' : 'Show Quick Note';
    });
  }

  const themeBtn = document.getElementById('themeToggleBtn');

  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-theme');
    if (themeBtn) themeBtn.textContent = 'Light Mode';
  }

  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      document.body.classList.toggle('dark-theme');
      const isDark = document.body.classList.contains('dark-theme');
      themeBtn.textContent = isDark ? 'Light Mode' : 'Dark Mode';
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

});

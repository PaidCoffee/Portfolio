// Open Hamburger Menu //

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const body = document.body;
const overlay = document.querySelector('.overlay');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');      
  body.classList.toggle('no-scroll');       
  overlay.classList.toggle('active');
});

// Close Menu By Clicking Outside Of The Hamburger Menu //

overlay.addEventListener('click', () => {
    navLinks.classList.remove('active');
    body.classList.remove('no-scroll');
    overlay.classList.remove('active');
});

document.addEventListener("DOMContentLoaded", () => {
    const dropdownBtn = document.getElementById("dropdownBtn");
    const dropdownMenu = document.getElementById("dropdownMenu");

  // Toggle dropdown on button click
    dropdownBtn.addEventListener("click", (e) => {
      e.stopPropagation(); // prevent triggering outside click
      dropdownMenu.classList.toggle("show");
  });

  // Close dropdown if clicking outside
    document.addEventListener("click", () => {
      dropdownMenu.classList.remove("show");
  });
});

// Typewriter Effect //

document.addEventListener("DOMContentLoaded", () => {
  const phrases = [
    "Hello there, and welcome to my about me page."
  ];

  const el = document.getElementById("typewriter");
  const arrow = document.getElementById("scroll-arrow");
  let letterIndex = 0;

  function type() {
    const currentPhrase = phrases[0];
    const visibleText = currentPhrase.substring(0, letterIndex);
    el.textContent = visibleText;

    if (letterIndex < currentPhrase.length) {
      letterIndex++;
      setTimeout(type, 100);
    } else {
      arrow.classList.add("show-arrow"); // Makes it visible with a fade
    }
  }

  arrow.addEventListener("click", () => {
    const nextSection = document.querySelector(".about-me-container");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  });

  type();
});

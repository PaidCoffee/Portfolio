document.addEventListener("DOMContentLoaded", () => {
  // Hamburger Menu Toggle
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  const body = document.body;
  const overlay = document.querySelector('.overlay');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    body.classList.toggle('no-scroll');
    overlay.classList.toggle('active');
  });

  // Close Menu on Overlay Click
  overlay.addEventListener('click', () => {
    navLinks.classList.remove('active');
    body.classList.remove('no-scroll');
    overlay.classList.remove('active');
  });

  // Dropdown Resume Toggle
  const dropdownBtn = document.getElementById("dropdownBtn");
  const dropdownMenu = document.getElementById("dropdownMenu");

  dropdownBtn.addEventListener("click", (e) => {
    e.stopPropagation(); // Prevent closing when clicking inside
    dropdownMenu.classList.toggle("show");
    dropdownBtn.classList.toggle("open");
  });

  // Close dropdown if clicking outside
  document.addEventListener("click", () => {
    dropdownMenu.classList.remove("show");
    dropdownBtn.classList.remove("open");
  });

  // Typewriter Effect
  const phrases = ["About me page."];
  const el = document.getElementById("typewriter");
  const arrow = document.getElementById("scroll-arrow");
  let letterIndex = 0;

  function type() {
    const currentPhrase = phrases[0];
    const visibleText = currentPhrase.substring(0, letterIndex);
    el.textContent = visibleText;

    if (letterIndex < currentPhrase.length) {
      letterIndex++;
      setTimeout(type, 70);
    } else {
      arrow.classList.add("show-arrow");
    }
  }

  type();

  // Scroll to section on arrow click
  arrow.addEventListener("click", () => {
    const nextSection = document.querySelector(".about-me-container");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  });
});

  // Typewriter Effect Front Page //
  const phrases = ["Hello there, and welcome to my portfolio."];
  const el = document.getElementById("typewriter-fp");
  const arrow = document.getElementById("scroll-arrow-fp");
  let letterIndex = 0;

  function type() {
    const currentPhrase = phrases[0];
    const visibleText = currentPhrase.substring(0, letterIndex);
    el.textContent = visibleText;

    if (letterIndex < currentPhrase.length) {
      letterIndex++;
      setTimeout(type, 70);
    } else {
      arrow.classList.add("show-arrow");
    }
  }

  type();

  // Scroll to section on arrow click
  arrow.addEventListener("click", () => {
    const nextSection = document.querySelector(".about-me-container");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
});
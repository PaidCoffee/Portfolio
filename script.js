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

  // Typewriter Effect About Me Page // 
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
document.addEventListener("DOMContentLoaded", () => {
  const phrasesFP = ["Hello there, and welcome to my portfolio."];
  const elFP = document.getElementById("typewriter-fp");
  const arrowFP = document.getElementById("scroll-arrow-fp");
  let letterIndexFP = 0;

  function typeFP() {
    const currentPhrase = phrasesFP[0];
    const visibleText = currentPhrase.substring(0, letterIndexFP);
    elFP.textContent = visibleText;

    if (letterIndexFP < currentPhrase.length) {
      letterIndexFP++;
      setTimeout(typeFP, 70);
    } else {
      arrowFP.classList.add("show-arrow");
    }
  }

  typeFP();

  // Scroll to section on arrow click
  arrowFP.addEventListener("click", () => {
    const nextSection = document.querySelector(".about-me-container");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Typewriter Effect Photo Page //
document.addEventListener("DOMContentLoaded", () => {
  const phrasesPhoto = ["Photography."];
  const elPhoto = document.getElementById("typewriter-photo");
  const arrowPhoto = document.getElementById("scroll-arrow-photo");
  let letterIndexPhoto = 0;

  function typePhoto() {
    const currentPhrase = phrasesPhoto[0];
    const visibleText = currentPhrase.substring(0, letterIndexPhoto);
    elPhoto.textContent = visibleText;

    if (letterIndexPhoto < currentPhrase.length) {
      letterIndexPhoto++;
      setTimeout(typePhoto, 70);
    } else {
      arrowPhoto.classList.add("show-arrow");
    }
  }

  typePhoto();

  // Scroll to section on arrow click
  arrowPhoto.addEventListener("click", () => {
    const nextSection = document.querySelector(".about-me-container");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  });
});
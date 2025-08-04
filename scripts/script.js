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
});

// Typewriter effect for headers 

document.addEventListener("DOMContentLoaded", () => {
  const phrasesPhoto = 
  ["Welcome To My Portfolio.",
   "About Me",
   "Projects.",
   "Photography.",
   "Contact Me."];
  const elPhoto = document.getElementById("typewriter");
  let letterIndexPhoto = 0;
  let currentPhrase;
  const path = window.location.pathname;

  // Choose the sentence based on the current page
function chooseSentence () {
  if (path.endsWith("/index.html") || path === "/" || path === "/Portfolio/" ) {
    currentPhrase = phrasesPhoto[0];
  } else if (path.endsWith("/pages/about-me.html")) {
    currentPhrase = phrasesPhoto[1];
  } else if (path.endsWith("/pages/projects.html")) {
    currentPhrase = phrasesPhoto[2];
  } else if (path.endsWith("/pages/photography.html")) {
    currentPhrase = phrasesPhoto[3];
  } else if (path.endsWith("/pages/contact-me.html")) {
    currentPhrase = phrasesPhoto[4];
  } else {
    currentPhrase = phrasesPhoto[0];
  }
}

  // Start typing the chosen sentence

  chooseSentence();

  function typePhoto() {
    const visibleText = currentPhrase.substring(0, letterIndexPhoto);
    elPhoto.textContent = visibleText;

    if (letterIndexPhoto < currentPhrase.length) {
      letterIndexPhoto++;
      setTimeout(typePhoto, 70);
    }
  }
  typePhoto();
});

// Section Scroll Animation

document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll('.scroll-section');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  }, {
    threshold: 0.3
  });

  sections.forEach(section => {
    observer.observe(section);
  });
});

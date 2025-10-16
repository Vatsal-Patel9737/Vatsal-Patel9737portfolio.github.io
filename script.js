// Typed.js effect
var typed = new Typed("#typed-text", {
  strings: ["Web Developer", "Designer", "Tech Enthusiast"],
  typeSpeed: 60,
  backSpeed: 40,
  loop: true
});

// Mobile menu toggle
const menuBtn = document.getElementById("menu-btn");
const menuDropdown = document.getElementById("menu-dropdown");

menuBtn.addEventListener("click", () => {
  menuDropdown.classList.toggle("hidden");
});
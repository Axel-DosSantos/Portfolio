// Animation de chargement
const loader = document.querySelector(".loader");
window.addEventListener("load", () => {
  loader.style.display = "none";
});

// Effet de survol sur les boutons de navigation
const navLinks = document.querySelectorAll("nav a");
navLinks.forEach((link) => {
  link.addEventListener("mouseenter", () => {
    link.classList.add("hover-effect");
  });
  link.addEventListener("mouseleave", () => {
    link.classList.remove("hover-effect");
  });
});

// Animation de défilement fluide pour les liens de navigation
navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const targetId = link.getAttribute("href");
    document.querySelector(targetId).scrollIntoView({
      behavior: "smooth",
    });
  });
});

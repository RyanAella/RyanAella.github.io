let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

const observerOptions = {
  threshold: 0.3, // Aktiviert, wenn 30% der Sektion sichtbar sind
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute("id");
      navLinks.forEach((link) => {
        // Prüft ob der Link-Hash exakt der Sektions-ID entspricht
        const href = link.getAttribute("href");
        const isTarget = href.endsWith(`#${id}`) || href === `sites/${id}.html`;
        link.classList.toggle("active", isTarget);
      });
    }
  });
}, observerOptions);

sections.forEach((section) => observer.observe(section));

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

console.log("tes")

// Sidebar Toggle
const sidebar = document.querySelector('.sidebar');
const hamburger = document.querySelector('.hamburger');
const menuWrapper = document.querySelector(".menu-wrapper");
const bigOverlay = document.querySelector(".big-overlay");

function toggleSidebar() {
    sidebar.classList.toggle("close");
    menuWrapper.classList.toggle("close");
    // hamburger.classList.toggle("close")
    document.querySelector(".short-bio").classList.toggle("close")
    document.querySelector(".top-nav").classList.toggle("extend")
    document.querySelector(".big-overlay").classList.toggle("close")
    document.querySelector("body").classList.toggle('freeze')
    document.querySelector(".hamburger").classList.toggle("open")
}

hamburger.addEventListener('click', () => {
    toggleSidebar();
});

bigOverlay.addEventListener('click', () => {
    toggleSidebar();
})

const menus = document.querySelectorAll(".nav-menu");

menus.forEach(menu => {
    menu.addEventListener("click", () => {
        toggleSidebar()
    });

})

const text = "Farhan Hakiki";
  const el = document.getElementById("typewriter");
  let index = 0;

  function type() {
    if (index < text.length) {
      el.textContent += text.charAt(index);
      index++;
      setTimeout(type, 150); // kecepatan ketik
    }
  }

  type();

document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      } else {
        entry.target.classList.remove("visible"); // Untuk fade out
      }
    });
  }, {
    threshold: 0.1 // Elemen muncul 10% di layar
  });

  const fadeElements = document.querySelectorAll(".fade-element");
  fadeElements.forEach(el => observer.observe(el));
});
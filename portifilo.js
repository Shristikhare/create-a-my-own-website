// Year auto-update
document.getElementById("year").innerText = new Date().getFullYear();

// Mobile menu
const btn = document.getElementById("menu-btn");
const nav = document.getElementById("nav");

btn.addEventListener("click", () => {
  nav.classList.toggle("show");
});

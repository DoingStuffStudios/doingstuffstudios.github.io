const year = String(new Date().getFullYear());
document.querySelectorAll("[data-year]").forEach((element) => {
  element.textContent = year;
});

const menu = document.querySelector(".menu-toggle");
const nav = document.querySelector("#site-nav");
const mobile = window.matchMedia("(max-width: 740px)");

function setMenu(open) {
  menu.setAttribute("aria-expanded", String(open));
  nav.hidden = mobile.matches && !open;
}

function syncMenu() {
  menu.hidden = !mobile.matches;
  setMenu(mobile.matches && nav.contains(document.activeElement));
}

menu.addEventListener("click", () => setMenu(nav.hidden));
menu.closest("header").addEventListener("keydown", (event) => {
  if (event.key === "Escape" && mobile.matches && !nav.hidden) {
    setMenu(false);
    menu.focus();
  }
});

mobile.addEventListener("change", syncMenu);
syncMenu();

const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector("#menu-principal");
const mobileViewport = window.matchMedia("(max-width: 680px)");

if (menuToggle && menu) {
  document.documentElement.classList.add("js-enabled");

  const closeMenu = () => {
    menu.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
  };

  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menu.classList.toggle("is-open", !isOpen);
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
  });

  menu.addEventListener("click", (event) => {
    if (event.target instanceof Element && event.target.closest("a")) {
      closeMenu();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
      menuToggle.focus();
    }
  });

  mobileViewport.addEventListener("change", closeMenu);
}

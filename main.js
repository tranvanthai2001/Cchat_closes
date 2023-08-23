const navMenu = document.querySelector(".box_menu"),
  onMenu_mb = document.querySelector(".menu_icon"),
  offMenu_mb = document.querySelector(".icon_close");

onMenu_mb.addEventListener("click", (e) => {
  e.stopPropagation();
  if (!navMenu.classList.contains("show")) {
    navMenu.classList.add("show");
  }
});

offMenu_mb.addEventListener("click", () => {
  navMenu.classList.remove("show");
});

document.addEventListener('click', (e) => {
  if (!navMenu.contains(e.target) && navMenu.classList.contains("show")) {
    navMenu.classList.remove("show");
  }
});
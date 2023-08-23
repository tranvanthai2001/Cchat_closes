const navMenu = document.querySelector(".box_menu"),
  onMenu_mb = document.querySelector(".menu_icon"),
    offMenu_mb = document.querySelector(".icon_close");

onMenu_mb.addEventListener("click", () => {
  navMenu.classList.add("show");
});
offMenu_mb.addEventListener("click", () => {
    navMenu.classList.remove("show");
  });
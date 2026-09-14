document.addEventListener("DOMContentLoaded", () => {

  const menuButton =
    document.getElementById("menuButton");

  const menuClose =
    document.getElementById("menuClose");

  const sideMenu =
    document.getElementById("sideMenu");

  const menuOverlay =
    document.getElementById("menuOverlay");


  if (
    !menuButton ||
    !sideMenu ||
    !menuOverlay
  ) {
    return;
  }


  function openMenu() {

    sideMenu.classList.add("open");

    menuOverlay.classList.add("open");

    document.body.classList.add("menu-open");

  }


  function closeMenu() {

    sideMenu.classList.remove("open");

    menuOverlay.classList.remove("open");

    document.body.classList.remove("menu-open");

  }


  menuButton.addEventListener(
    "click",
    openMenu
  );


  if (menuClose) {

    menuClose.addEventListener(
      "click",
      closeMenu
    );

  }


  menuOverlay.addEventListener(
    "click",
    closeMenu
  );


  document.addEventListener(
    "keydown",
    event => {

      if (event.key === "Escape") {

        closeMenu();

      }

    }
  );


  sideMenu
    .querySelectorAll("a")
    .forEach(link => {

      link.addEventListener(
        "click",
        closeMenu
      );

    });

});
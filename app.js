document.addEventListener("DOMContentLoaded", () => {

  const menuButton = document.querySelector(".menu-button");
  const menu = document.querySelector(".side-menu");
  const overlay = document.querySelector(".menu-overlay");
  const closeButton = document.querySelector(".menu-close");

  function openMenu() {
    if (!menu || !overlay) return;

    menu.classList.add("active");
    overlay.classList.add("active");
    document.body.classList.add("menu-open");

    menuButton?.setAttribute("aria-expanded", "true");
  }

  function closeMenu() {
    if (!menu || !overlay) return;

    menu.classList.remove("active");
    overlay.classList.remove("active");
    document.body.classList.remove("menu-open");

    menuButton?.setAttribute("aria-expanded", "false");
  }

  menuButton?.addEventListener("click", openMenu);
  closeButton?.addEventListener("click", closeMenu);
  overlay?.addEventListener("click", closeMenu);

  document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });

  document.querySelectorAll(".side-menu a").forEach(link => {
    link.addEventListener("click", closeMenu);
  });

});


/* DATI COMUNI */

window.App = {

  normalizeCode(code) {
    if (!code) return "";
    return String(code).trim().padStart(6, "0");
  },

  isVisited(code) {
    const normalized = this.normalizeCode(code);

    return new Set(
      (window.VISITED_ISTAT || [])
        .map(this.normalizeCode)
    ).has(normalized);
  },

  getComuneData(code) {
    const normalized = this.normalizeCode(code);

    return window.COMUNI_DATA?.[normalized] || null;
  },

  formatNumber(number) {
    return Number(number || 0).toLocaleString("it-IT");
  }

};
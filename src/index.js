import './sass/main.scss';
//скрипт для меню хедера
(() => {
  const openMenuBtnRef = document.querySelector("[data-open-menu-button]");
  const closeMenuBtnRef = document.querySelector("[data-close-menu-button]");
  const mobileMenuRef = document.querySelector("[data-menu]");

  openMenuBtnRef.addEventListener("click", () => {
    mobileMenuRef.classList.add("menu-is-open");
    mobileMenuRef.setAttribute("aria-expanded", true);
    openMenuBtnRef.setAttribute("aria-expanded", false);
  });

  closeMenuBtnRef.addEventListener("click", () => {
    mobileMenuRef.classList.remove("menu-is-open");
    mobileMenuRef.setAttribute("aria-expanded", false);
    closeMenuBtnRef.setAttribute("aria-expanded", true);
  });
})();

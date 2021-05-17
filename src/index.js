import './sass/main.scss';
//скрипт для меню хедера
(() => {
  const openMenuBtnRef = document.querySelector("[data-open-menu-button]");
  const closeMenuBtnRef = document.querySelector("[data-close-menu-button]");
  const menuLinkRef = document.querySelector("[data-menu-link]"); 
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

  menuLinkRef.addEventListener("click", () => {
    mobileMenuRef.classList.remove("menu-is-open");
    mobileMenuRef.setAttribute("aria-expanded", false);
    closeMenuBtnRef.setAttribute("aria-expanded", true);
  });
})();

// cкрипт секции About us, для кнопки Read more/Read less
let checkIt = true;

let btn = document.getElementById('btn');
btn.addEventListener('click', readMore);

function readMore() {
  let brake = document.getElementById('brake');
  let more = document.getElementById('more');

  if (checkIt) {
    more.style.display = 'inline';
    brake.style.display = 'none';
    btn.innerHTML = 'less';
    checkIt = false;
  } else {
    brake.style.display = 'inline';
    more.style.display = 'none';
    btn.innerHTML = 'Read more';
    checkIt = true;
  }
}
// cкрипт секции Program, для кнопки Read more/Read less
let programcheckIt = true;
let programbtn = document.getElementById('program__btn');
programbtn.addEventListener('click', readMore);
function readMore() {
  let program__brake = document.getElementById('program__brake');
  let program__more = document.getElementById('program__more');
  if (programcheckIt) {
    program__more.style.display = 'inline';
    program__brake.style.display = 'none';
    programbtn.innerHTML = 'less';
    programcheckIt = false;
  } else {
    program__brake.style.display = 'inline';
    program__more.style.display = 'none';
    programbtn.innerHTML = 'Read more';
    programcheckIt = true;
  }
}
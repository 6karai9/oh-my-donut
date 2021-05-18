import './sass/main.scss';

// cкрипт секции Program, для кнопки Read more/Read less
let programcheckIt = true;
let programbtn = document.getElementById('programbtn');
programbtn.addEventListener('click', showMore);
function showMore() {
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

// cкрипт секции About us, для кнопки Read more/Read less
let checkIt = true;

let btn = document.getElementById('btn');
btn.addEventListener('click', readMore);

function readMore() {
  let brake = document.getElementById('brake');
  let more = document.getElementById('more');
  let state = document.getElementById('state');

  if (checkIt) {
    more.style.display = 'inline';
    state.style.display = 'block';
    brake.style.display = 'none';
    btn.innerHTML = 'less';
    checkIt = false;
  } else {
    brake.style.display = 'inline';
    more.style.display = 'none';
    state.style.display = 'none';
    btn.innerHTML = 'Read more';
    checkIt = true;
  }
}

//скрипт для меню хедера
(() => {
  const openMenuBtnRef = document.querySelector('[data-open-menu-button]');
  const closeMenuBtnRef = document.querySelector('[data-close-menu-button]');
  const menuLinkRef = Array.from(document.querySelectorAll('[data-menu-link]'));
  const mobileMenuRef = document.querySelector('[data-menu]');

  openMenuBtnRef.addEventListener('click', () => {
    mobileMenuRef.classList.add('menu-is-open');
    mobileMenuRef.setAttribute('aria-expanded', true);
    openMenuBtnRef.setAttribute('aria-expanded', false);
  });

  closeMenuBtnRef.addEventListener('click', () => {
    mobileMenuRef.classList.remove('menu-is-open');
    mobileMenuRef.setAttribute('aria-expanded', false);
    closeMenuBtnRef.setAttribute('aria-expanded', true);
  });

  menuLinkRef.forEach((linkRef) => {
      linkRef.addEventListener('click', () => {
      mobileMenuRef.classList.remove('menu-is-open');
      mobileMenuRef.setAttribute('aria-expanded', false);
    });
  })
})();

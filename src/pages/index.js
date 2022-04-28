import './index.css';
import {
  menu,
  submenus,
  // menuItems,
  buttonMenu,
  buttonClose,
  buttonSharePublication,
  buttonSharePublicationSelector,
  sharePopupSelector,
  buttonStudyAspirant,
  buttonStudyMagistr,
  cardStudyAspirant,
  cardStudyMagistr,
  projectCards,
} from '../utils/constants.js';
import Popup from '../components/Popup.js';

const sharePopup = new Popup(sharePopupSelector, buttonSharePublicationSelector);

buttonMenu.addEventListener('click', openMenu);
buttonClose.addEventListener('click', closeMenu);
submenus.forEach((submenu) => submenu.addEventListener('click', (e) => toggleSubmenu(e)));
buttonSharePublication.addEventListener('click', openPublicationPopup);

function openMenu() {
  menu.classList.add('header__menu_open');
  buttonMenu.style.display = 'none';
  buttonClose.classList.add('header__close_open');
}

function closeMenu() {
  menu.classList.remove('header__menu_open');
  buttonMenu.style.display = 'flex';
  buttonClose.classList.remove('header__close_open');
  closeSubmenu();
}

function toggleSubmenu(e) {
  const sublist = e.target.nextElementSibling;
  if (sublist) sublist.classList.toggle('menu__sublist_open');
}

function closeSubmenu() {
  document
    .querySelectorAll('.menu__sublist')
    .forEach((sublist) => sublist.classList.remove('menu__sublist_open'));
}

function openPublicationPopup() {
  return sharePopup.isOpened ? sharePopup.close() : sharePopup.open();
}

// study
buttonStudyAspirant.addEventListener('click', () => {
  cardStudyAspirant.classList.add('study__card_visible');
  buttonStudyAspirant.classList.add('study__button_active');
  buttonStudyMagistr.classList.remove('study__button_active');
  cardStudyMagistr.classList.remove('study__card_visible');
});

buttonStudyMagistr.addEventListener('click', () => {
  cardStudyMagistr.classList.add('study__card_visible');
  buttonStudyMagistr.classList.add('study__button_active');
  cardStudyAspirant.classList.remove('study__card_visible');
  buttonStudyAspirant.classList.remove('study__button_active');
});

// project cards
projectCards.addEventListener('click', (e) => {
  if (e.target.closest('.project__card')) {
    e.target.closest('.project__card').classList.toggle('project__card_active');
  }
});

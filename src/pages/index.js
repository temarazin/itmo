import './index.css';
import {
  page,
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
  select,
  selectItems,
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

// handle select item
const handleSelectItem = (e) => {
  if (e.target.classList.contains('project__filter-item')) {
    document.querySelector('.project__filter-subtitle').textContent = e.target.textContent;
    // eslint-disable-next-line no-use-before-define
    selectClose();
  }
};

// open select
const selectOpen = () => {
  select.classList.add('project__filter_open');
  // addEL click select item
  selectItems.addEventListener('click', handleSelectItem);
  // addEL close select click overlay
  // eslint-disable-next-line no-use-before-define
  page.addEventListener('click', selectOverlayClose);
  // addEL close select button
  // eslint-disable-next-line no-use-before-define
  document.addEventListener('keydown', selectButtonClose);
};

// close select
const selectClose = () => {
  select.classList.remove('project__filter_open');
  // removeEL click select item
  selectItems.removeEventListener('click', handleSelectItem);
  // addEL close select click overlay
  // eslint-disable-next-line no-use-before-define
  page.removeEventListener('click', selectOverlayClose);
  // addEL close select button
  // eslint-disable-next-line no-use-before-define
  document.removeEventListener('keydown', selectButtonClose);
};

// close select button
const selectButtonClose = (e) => {
  if (e.key === 'Escape') {
    selectClose();
  }
};

// toggle select
const toggleSelect = () => {
  if (select.classList.contains('project__filter_open')) {
    selectClose();
  } else {
    selectOpen();
  }
};

// close select overlay
const selectOverlayClose = (e) => {
  if (!e.target.closest('.project__filter')) {
    selectClose();
  }
};

// addEL select
select.addEventListener('click', toggleSelect);

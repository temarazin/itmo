import './index.css';
import constants from '../utils/constants.js';
import Popup from '../components/Popup.js';

const sharePopup = new Popup(
  constants.sharePopupSelector,
  constants.buttonSharePublicationSelector
);

constants.buttonMenu.addEventListener('click', openMenu);
constants.buttonClose.addEventListener('click', closeMenu);
constants.submenus.forEach((submenu) => submenu.addEventListener('click', (e) => toggleSubmenu(e)));
constants.buttonSharePublication.addEventListener('click', openPublicationPopup);

function openMenu() {
  constants.menu.classList.add('header__menu_open');
  constants.buttonMenu.style.display = 'none';
  constants.buttonClose.classList.add('header__close_open');
}

function closeMenu() {
  constants.menu.classList.remove('header__menu_open');
  constants.buttonMenu.style.display = 'flex';
  constants.buttonClose.classList.remove('header__close_open');
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

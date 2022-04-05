import './index.css';
import {
  menu,
  menuItems,
  buttonMenu,
  buttonClose,
  buttonSharePublication,
  sharePopupSelector,
} from '../pages/scripts/utils/constants';
import { Popup } from '../pages/scripts/components/Popup.js';

const sharePopup = new Popup(sharePopupSelector);

buttonMenu.addEventListener('click', openMenu);
buttonClose.addEventListener('click', closeMenu);
menuItems.addEventListener('click', openSubmenu)
buttonSharePublication.addEventListener('click', openPublicationPopup);

function openMenu() {
  menu.classList.add('menu_open');
  buttonMenu.style.display = 'none';
  buttonClose.classList.add('header__close_open')
}

function closeMenu() {
  menu.classList.remove('menu_open');
  buttonMenu.style.display = 'flex';
  buttonClose.classList.remove('header__close_open')
}

function openSubmenu(e) {
  if (e.target.closest('.menu__link_type_study'))
    document.querySelector('.menu__sublist').classList.toggle('menu__sublist_open')
}

function openPublicationPopup() {
  sharePopup.open();
}

const menuElement = document.querySelector('.menu');
const constants = {
  menu: menuElement,
  menuItems: menuElement.querySelector('.menu__list'),
  buttonMenu: document.querySelector('.burger'),
  buttonClose: document.querySelector('.close'),
  buttonSharePublication: document.querySelector('.publication__share'),
  buttonSharePublicationSelector: 'publication__share',
  sharePopupSelector: 'share-popup',
  openedPopupSelector: 'popup_opened',
  submenus: menuElement.querySelectorAll('.menu__item_type_submenu'),
};

export default constants;
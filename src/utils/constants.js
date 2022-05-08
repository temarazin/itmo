const menuElement = document.querySelector('.menu');
const constants = {
  menu: menuElement,
  menuItems: menuElement.querySelector('.menu__list'),
  buttonMenu: document.querySelector('.burger'),
  buttonClose: document.querySelector('.close'),
  buttonSharePublication: document.querySelector('.publication__share'),
  buttonSharePublicationSelector: 'publication__share',
  sharePopupSelector: 'share-popup',
  openedPopupSelector: 'share-popup_opened',
  submenus: menuElement.querySelectorAll('.menu__item_type_submenu'),
  buttonStudyAspirant: document.querySelector('.study__button_type_aspirant'),
  buttonStudyMagistr: document.querySelector('.study__button_type_magistr'),
  cardStudyAspirant: document.querySelector('.study__card_type_aspirant'),
  cardStudyMagistr: document.querySelector('.study__card_type_magistr'),
  projectCards: document.querySelector('.project__cards'),
};

export default constants;

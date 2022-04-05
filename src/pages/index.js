import './index.css';
import {
  menu,
  menuItems,
  buttonMenu,
  buttonClose
} from '../pages/scripts/utils/constants'


buttonMenu.addEventListener('click', openMenu);
buttonClose.addEventListener('click', closeMenu);
menuItems.addEventListener('click', openEducation)

function openMenu() {
  menu.classList.add('menu_open');
  buttonMenu.style.display = 'none';
}

function closeMenu() {
  menu.classList.remove('menu_open');
  buttonMenu.style.display = 'flex';
}

function openEducation(e) {
  if (e.target.closest('.menu__link_type_study'))
    document.querySelector('.menu__sublist').classList.toggle('menu__sublist_open')
}

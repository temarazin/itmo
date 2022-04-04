import './index.css';
import {
  menu,
  buttonMenu
} from '../pages/scripts/utils/constants'


buttonMenu.addEventListener('click', toggleMenu);

function toggleMenu() {
  menu.classList.toggle('menu_open');
  console.log(menu)
}

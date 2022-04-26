import constants from '../utils/constants.js';

export default class Popup {
  constructor(popupSelector, buttonOpenPopupSelector) {
    this._popup = document.querySelector(`.${popupSelector}`);
    this._handleEscClose = this._handleEscClose.bind(this);
    this._handleClickOutside = this._handleClickOutside.bind(this);
    this.isOpened = false;
    this.buttonOpenPopupSelector = buttonOpenPopupSelector;
  }

  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      this.close();
    }
  }

  _handleClickOutside(evt) {
    if (
      !this._popup.contains(evt.target) &&
      !evt.target.classList.contains(this.buttonOpenPopupSelector)
    ) {
      this.close();
    }
  }

  open() {
    this._popup.classList.add(constants.openedPopupSelector);
    document.addEventListener('keydown', this._handleEscClose);
    document.addEventListener('mousedown', this._handleClickOutside);
    this.isOpened = true;
  }

  close() {
    this._popup.classList.remove(constants.openedPopupSelector);
    document.removeEventListener('keydown', this._handleEscClose);
    document.removeEventListener('mousedown', this._handleClickOutside);
    this.isOpened = false;
  }
}

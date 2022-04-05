import { openedPopupSelector } from "../utils/constants.js";

class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector("." + popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
    this._handleClickOutside = this._handleClickOutside.bind(this);
  }

  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }

  _handleClickOutside(evt) {
    if (!this._popup.contains(evt.target)) this.close();
  }

  open() {
    this._popup.classList.add(openedPopupSelector);
    document.addEventListener("keydown", this._handleEscClose);
    document.addEventListener("mousedown", this._handleClickOutside);
  }

  close() {
    this._popup.classList.remove(openedPopupSelector);
    document.removeEventListener("keydown", this._handleEscClose);
    document.removeEventListener("mousedown", this._handleClickOutside);
  }
}

export { Popup };

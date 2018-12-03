import './error-popup.scss';
import { Popup } from '../../components/popup/popup.js';

export default class ErrorPopup {
  constructor() {
    /* Singleton */
    if (typeof ErrorPopup.instance === 'object') {
      return ErrorPopup.instance;
    }
    this._popup = new Popup({ autohideTimeMs: 5000, colorClass: 'red', title: 'Error' });
    ErrorPopup.instance = this;
  }

  static getInstance() {
    return new ErrorPopup();
  }

  showError(message) {
    this._popup.message = message;
    this._popup.show();
  }
}

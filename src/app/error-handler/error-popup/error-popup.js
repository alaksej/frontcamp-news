import './error-popup.scss';

export class ErrorPopup {
  constructor() {
    /* Singleton */
    if (typeof ErrorPopup.instance === 'object') {
      return ErrorPopup.instance;
    }
    ErrorPopup.instance = this;
  }

  static getInstance() {
    return new ErrorPopup();
  }

  showError(message) {
    const popup = document.createElement('div');
    popup.innerHTML = `
      ${message}
    `
    document.body.appendChild(popup);
  }

}

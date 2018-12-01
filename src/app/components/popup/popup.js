import './popup.scss';

export class Popup {
  constructor({ container, title, message, color, autohideTimeMs = -1 } = {}) {
    this._container = container;
    this._title = title;
    this._message = message;
    this._color = color;
    this._init();
    this._closeBtn = this._popup.querySelector('.close');
    this._closeBtn.addEventListener('click', () => this.hide());
    if (autohideTimeMs >= 0) {
      setTimeout(() => this.hide(), autohideTimeMs);
    }
  }

  _init() {
    this._popup = document.createElement('div');
    this._popup.classList.add('popup');
    this._popup.innerHTML = `
      <div class="color-stripe ${this._color}"></div>
      <div class="content">
        <h3 class="title">${this._title}</h3>
        <p class="message">${this._message}</p>
      </div>
      <a href="javascript:void(0);" class="close"></a>
    `;
    this.hide();
    this._container
      ? this._container.appendChild(this._popup)
      : document.body.appendChild(this._popup);
  }

  show() {
    this._popup.classList.remove('hidden');
  }
  
  hide() {
    this._popup.classList.add('hidden');
  }
}
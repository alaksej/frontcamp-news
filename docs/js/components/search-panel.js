import { DOMHelper } from '../core/utls.js';
import { EventEmitter } from '../core/event-emitter.js';

/** Gets search parameters and emits an event when a user clicks submit button */
export class SearchPanel {
  constructor({ sources = [] } = {}) {
    this._pageEl = document.getElementById('page');
    this._pageElContainer = document.getElementById('pageContainer');
    this._sourcesConfig = sources;
    this._sourceEl = document.getElementById('source');
    this._initSourceOptions(this._sourceEl, sources);
    this._submitButton = document.getElementById('submit');
    this._submitButton.addEventListener('click', this._onSubmitClick.bind(this));
    this._submitClick = new EventEmitter();
    this.enableSubmit();
  }

  get page() {
    const page = this._pageEl && +this._pageEl.value || 1;
    if (!Number.isInteger(page) || page < 1) {
      throw new TypeError('The page must be a positive integer number');
    }
    return page;
  }

  get source() {
    return this._sourceEl.value;
  }

  get submitClick() {
    return this._submitClick;
  }

  dispose() {
    this._pageEl.removeEventListener('click', this._onSubmitClick.bind(this));
  }

  disableSubmit() {
    this._submitButton.setAttribute('disabled', '');
  }

  enableSubmit() {
    this._submitButton.removeAttribute('disabled');
  }

  _initSourceOptions(sourceEl, sources) {
    if (!sourceEl) {
      throw new Error('Unable to find the source element');
    }

    DOMHelper.removeAllChildren(sourceEl);
    sourceEl.innerHTML = sources.map(source => this._createOption(source)).join('');
    this._setPageVisible();
    sourceEl.addEventListener('change', () => this._setPageVisible());
  }

  get _isPaginationHidden() {
    return this._sourcesConfig.find(s => s.value === this.source).isPaginationHidden;
  }

  _setPageVisible() {
    this._isPaginationHidden ? this._hidePage() : this._showPage();
  }

  _hidePage() {
    this._pageElContainer.setAttribute('hidden', '');
  }

  _showPage() {
    this._pageElContainer.removeAttribute('hidden');
  }

  _createOption({ displayName, value }) {
    return `<option value="${value}">${displayName}</option>`;
  }

  _onSubmitClick() {
    this.submitClick.emit({ source: this.source, page: this.page });
  }
}

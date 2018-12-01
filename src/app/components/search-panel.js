import { DOMHelper } from '../common/utls.js';
import { EventEmitter } from '../common/event-emitter.js';
import { handleError } from '../error-handler/error-hanlder-loader.js';

/** Gets search parameters and emits an event when a user clicks submit button */
export class SearchPanel {
  _pageEl = document.getElementById('page');
  _pageElContainer = document.getElementById('pageContainer');
  _sourceEl = document.getElementById('source');
  _submitButton = document.getElementById('submit');
  _submitClick = new EventEmitter();
  _sourcesConfig;
  
  constructor({ sources = [] } = {}) {
    this._sourcesConfig = sources;
    this._initSourceOptions(this._sourceEl, sources);
    this._submitButton.addEventListener('click', this._onSubmitClick.bind(this));
    this.enableSubmit();
  }

  get page() {
    const page = (!this._isPaginationHidden || 1) && this._pageEl && +this._pageEl.value;
    if (!Number.isInteger(page) || page < 1) {
      const errorMessage = 'The page must be a positive integer number';
      handleError(errorMessage);
      throw new TypeError(errorMessage);
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

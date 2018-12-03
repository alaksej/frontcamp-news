import { DOMHelper } from '../../common/utls.js';
import { handleError } from '../../error-handling/error-handling.js';
import template from './search-panel.template.js';
import { SearchPanelController } from './search-panel.controller.js';
import { SourcesConfig } from '../../config/config.js';

/** Gets search parameters and emits an event when a user clicks submit button */
export class SearchPanel {
  static selector = 'app-search-panel';
  _searchPanelOptions = new SourcesConfig().getSearchPanelOptions();

  constructor(model, hostEl) {
    this._hostEl = hostEl;
    this._controller = new SearchPanelController(model);
    this.render(hostEl);

    this._pageEl = hostEl.querySelector('#page');
    this._pageElContainer = hostEl.querySelector('#pageContainer');
    this._sourceEl = hostEl.querySelector('#source');
    this._submitButton = hostEl.querySelector('#submit');
    this._initSourceOptions(this._sourceEl, this._searchPanelOptions);
    this._submitButton.addEventListener('click', this._onSubmitClick.bind(this));
    this.update(model.value);
    model.change.subscribe(value => this.update(value));
  }

  render(hostEl) {
    hostEl.innerHTML = template;
  }

  update(appModelValue) {
    appModelValue.isLoading ? this._disableSubmit() : this._enableSubmit();
    this.page = appModelValue.searchPanel.page;
    this.source = appModelValue.searchPanel.source;
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

  set page(value) {
    this._pageEl.value = value;
  }

  get source() {
    return this._sourceEl.value;
  }

  set source(value) {
    this._sourceEl.value = value;
    this._sourceEl.dispatchEvent(new Event('change'));
  }

  dispose() {
    this._pageEl.removeEventListener('click', this._onSubmitClick.bind(this));
  }

  _disableSubmit() {
    this._submitButton.setAttribute('disabled', '');
  }

  _enableSubmit() {
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
    return this._searchPanelOptions.find(s => s.value === this.source).isPaginationHidden;
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
    this._controller.onSubmitClick({ source: this.source, page: this.page });
  }
}

import { DOMHelper } from '../../common/utls.js';
import { handleError } from '../../error-handling/error-handling.js';
import template from './search-panel.template.js';
import { SearchPanelController } from './search-panel.controller.js';
import { SourcesConfig } from '../../config/config.js';

/** Gets search parameters and emits an event when a user clicks submit button */
export class SearchPanel {
  selector = 'app-search-panel';
  _searchPanelOptions = new SourcesConfig().getSearchPanelOptions();

  constructor(model) {
    this._model = model;
    this._controller = new SearchPanelController(model);
    this.render();

    this._pageEl = document.getElementById('page');
    this._pageElContainer = document.getElementById('pageContainer');
    this._sourceEl = document.getElementById('source');
    this._submitButton = document.getElementById('submit');
    this._initSourceOptions(this._sourceEl, this._searchPanelOptions);
    this._submitButton.addEventListener('click', this._onSubmitClick.bind(this));
    model.isLoading ? this._disableSubmit() : this._enableSubmit();
  }

  render() {
    // TODO: get the element to attach to from parent view
    const el = document.querySelector(this.selector);
    el.innerHTML = template;
    return el;
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

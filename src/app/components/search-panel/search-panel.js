import { DOMHelper } from '../../common/utls.js';
import { handleError } from '../../error-handling/error-handling.js';
import template from './search-panel.html';
import { SearchPanelController } from './search-panel.controller.js';
import { SourcesConfig } from '../../config/config.js';

/** Gets search parameters and emits an event when a user clicks submit button */
export class SearchPanel {
  static selector = 'app-search-panel';

  constructor(model, hostEl) {
    hostEl.innerHTML = template;
    this._controller = new SearchPanelController(model);

    this._pageEl = hostEl.querySelector('#page');
    this._pageElContainer = hostEl.querySelector('#pageContainer');
    this._pageEl.addEventListener('change', () => this._controller.onPageChange(this.page));

    this._sourceEl = hostEl.querySelector('#source');
    this._initSourceOptions(this._sourceEl, new SourcesConfig().getSearchPanelOptions());
    this._sourceEl.addEventListener('change', () => this._controller.onSourceChange(this._sourceEl.value));

    this._submitButton = hostEl.querySelector('#submit');
    this._submitButton.addEventListener('click', () => this._controller.onSubmitClick());

    this.update(model.value);
    model.change.subscribe(value => this.update(value));
  }

  update(appModelValue) {
    this._pageEl.value = appModelValue.searchPanel.page;
    this._sourceEl.value = appModelValue.searchPanel.sourceId;
    this._setPageVisibility(appModelValue.searchPanel.isPaginationHidden);
    this._setButtonEnabledState(!appModelValue.isLoading);
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

  _initSourceOptions(sourceEl, sources) {
    sourceEl.innerHTML = sources.reduce((result, { displayName, sourceId }) => result + `<option value="${sourceId}">${displayName}</option>`, '');
  }

  _setPageVisibility(isPaginationHidden) {
    isPaginationHidden ? this._pageElContainer.setAttribute('hidden', '') : this._pageElContainer.removeAttribute('hidden');
  }

  _setButtonEnabledState(isEnabled) {
    isEnabled ? this._submitButton.removeAttribute('disabled') : this._submitButton.setAttribute('disabled', '');
  }
}

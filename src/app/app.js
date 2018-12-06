import { SearchPanel } from './components/search-panel/search-panel.js';
import template from './app.html';
import { AppModel } from './app.model.js';
import { getClassAsync } from './core/class-loader.js';

/** The main application class */
export class App {
  selector = 'app-root';
  _model = new AppModel();

  constructor() {
    this._hostEl = document.querySelector(this.selector);
    this.render(this._hostEl);
    this._searchPanel = new SearchPanel(this._model, this._hostEl.querySelector(SearchPanel.selector));
    this._subscription = this._model.change.subscribe(modelValue => {
      if (!this._newsList && modelValue.isLoading) {
        getClassAsync('NewsList').then(NewsList => {
          this._newsList = new NewsList(this._model, this._hostEl.querySelector(NewsList.selector));
          this._subscription.unsubscribe();
        });
      }
    });
  }

  render(hostEl) {
    hostEl.innerHTML = template;
  }
}

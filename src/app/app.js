import { SearchPanel } from './components/search-panel/search-panel.js';
import template from './app.template.js';
import { AppModel } from './app.model.js';

/** The main application class */
export class App {
  selector = 'app-root';
  _model = new AppModel();

  constructor() {
    this.render();
    this._searchPanel = new SearchPanel(this._model);
  }

  render() {
    const appEl = document.querySelector(this.selector);
    appEl.innerHTML = template;
    return appEl;
  }
}

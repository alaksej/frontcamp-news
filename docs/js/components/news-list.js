import { DOMHelper, isIterable } from '../core/utls.js';
import { genericNewsLogoPath } from '../config/config.js';

/** Displays the list of the news articles */
export class NewsList {
  constructor(containerEl) {
    this._newsListContainer = containerEl;
  }

  set text(text) {
    this.clear();
    this._newsListContainer.append(text);
  }

  set articles(articles) {
    this.clear();
    this.add(articles);
  }

  clear() {
    DOMHelper.removeAllChildren(this._newsListContainer);
  }

  add(articles) {
    if (isIterable(articles)) {
      this._newsListContainer.innerHTML = Array.from(articles, article => this._createCardEl(article)).join('');
    }
  }

  _createCardEl(article) {
    return `
      <div class="card">
        <a class="card-link" href="${article.url}" target="_blank">
          <div class="card-image">
            <img src="${article.urlToImage || genericNewsLogoPath}" alt="${article.title}">
          </div>
          <div class="card-text">
            <h3 class="card-title" title="${article.title}">${article.title}</h3>
            <p class="card-description" title="${article.description}">${article.description}</p>
            <div class="card-footer">
              <p class="card-date">
                <time title="${new Date(article.publishedAt).toLocaleString()}">${new Date(article.publishedAt).toLocaleDateString()}</time>
              </p>
              <p class="card-source" title="${article.source.name}">${article.source.name}</p>
            </div>
          </div>
        </a>
      </div>
    `;
    }
}

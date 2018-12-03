import { DOMHelper, isIterable } from '../../common/utls.js';
import { genericNewsLogoPath } from '../../config/config.js';
import './news-list.scss';

/** Displays the list of the news articles */
export default class NewsList {
  static selector = 'app-news-list';

  constructor(model, hostEl) {
    this._hostEl = hostEl;
    this._hostEl.classList.add('card-list');
    model.change.subscribe(modelValue => {
      this.update(modelValue);
    })
    this.update(model.value);
  }

  update(appModelValue) {
    if (appModelValue.newsList.showText) {
      this.text = appModelValue.newsList.text;
    } else {
      this.articles = appModelValue.newsList.articles;
    }

    if (appModelValue.isLoading) {
      this.text = 'Loading...';
    }
  }

  set text(text) {
    this.clear();
    this._hostEl.append(text);
  }

  set articles(articles) {
    this.clear();
    this.add(articles);
  }

  clear() {
    DOMHelper.removeAllChildren(this._hostEl);
  }

  add(articles) {
    if (isIterable(articles)) {
      this._hostEl.innerHTML = Array.from(articles, article => this._createCardEl(article)).join('');
    }
    Array.from(document.querySelectorAll('.card-image img')).forEach(image => image.onload = () => image.parentElement.classList.remove('loading'));
  }

  _createCardEl(article) {
    return `
      <div class="card">
        <a class="card-link" href="${article.url}" target="_blank">
          <div class="card-image loading">
            <img src="${article.urlToImage || genericNewsLogoPath}" alt="${article.title}">
          </div>
          <div class="card-text">
            <h3 class="card-title" title="${article.title}">${article.title}</h3>
            <p class="card-description" title="${article.description || ''}">${article.description || ''}</p>
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

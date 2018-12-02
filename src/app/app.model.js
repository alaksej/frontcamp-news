import { EventEmitter } from "./common/event-emitter";

export class AppModel {
  change = new EventEmitter();

  searchPanel = { source: '', page: 1 };
  isLoading = false;
  articles = [];

  setPage(value) {
    this.searchPanel.page = value;
    this.change.emit(this);
  }

  setIsLoading(value) {
    this.isLoading = value;
    this.change.emit(this);
  }

  setArticles(articles) {
    this.articles = articles;
    this.change.emit(this);
  }
}

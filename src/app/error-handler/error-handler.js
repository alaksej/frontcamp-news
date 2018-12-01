import { ErrorPopup } from "./error-popup/error-popup";

export class ErrorHandler {
  constructor() {
    /* Singleton */
    if (typeof ErrorHandler.instance === 'object') {
      return ErrorHandler.instance;
    }
    ErrorHandler.instance = this;
  }

  handle(error) {
    ErrorPopup.getInstance().showError(error);
  }
}

export class ErrorHandler {
  constructor() {
    /* Singleton */
    if (typeof ErrorHandler.instance === 'object') {
      return ErrorHandler.instance;
    }
    ErrorHandler.instance = this;
  }

  handle(error) {
    console.log(error);
  }
}

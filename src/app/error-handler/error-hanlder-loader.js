async function loadErrorHandler() {
  const { ErrorHandler } = await import(/* webpackChunkName: 'error-handler' */ '../error-handler/error-handler.js');
  return ErrorHandler;
}

export async function handleError(errorMessage) {
  const ErrorHandler = await loadErrorHandler();
  const instance = new ErrorHandler();
  instance.handle(errorMessage);
}
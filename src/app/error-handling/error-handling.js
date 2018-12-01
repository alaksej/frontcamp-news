async function loadErrorPopup() {
  const { ErrorPopup } = await import(/* webpackChunkName: 'error-popup' */ './error-popup/error-popup.js');
  return ErrorPopup;
}

export async function handleError(errorMessage) {
  const ErrorPopup = await loadErrorPopup();
  ErrorPopup.getInstance().showError(errorMessage);
}
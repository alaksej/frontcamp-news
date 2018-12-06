import { getClassAsync } from '../core/class-loader.js';

export async function handleError(errorMessage) {
  const ErrorPopup = await getClassAsync('ErrorPopup');
  ErrorPopup.getInstance().showError(errorMessage);
}
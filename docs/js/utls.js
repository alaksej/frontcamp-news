export function isFunction(x) {
  return typeof x === 'function';
}

export function isIterable(obj) {
  return obj != null && typeof obj[Symbol.iterator] === 'function';
}

export class DOMHelper {
  static removeAllChildren(node) {
    while (node.firstChild) {
      node.removeChild(node.firstChild);
    }
  }
}

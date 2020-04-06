import { createElement, Fragment } from "@k0michi/hyperscript-jsx";
export { createElement, Fragment };

export function render(element, container) {
  removeChildNodes(container);
  container.append(element);
}

export function renderToString(element) {
  return element.outerHTML;
}

function removeChildNodes(element) {
  while (element.childNodes.length > 0) {
    element.removeChild(element.childNodes[0]);
  }
}
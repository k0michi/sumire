"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.render = render;
exports.renderToString = renderToString;
Object.defineProperty(exports, "createElement", {
  enumerable: true,
  get: function () {
    return _hyperscriptJsx.createElement;
  }
});
Object.defineProperty(exports, "Fragment", {
  enumerable: true,
  get: function () {
    return _hyperscriptJsx.Fragment;
  }
});

var _hyperscriptJsx = require("@k0michi/hyperscript-jsx");

function render(element, container) {
  removeChildNodes(container);
  container.append(element);
}

function renderToString(element) {
  return element.outerHTML;
}

function removeChildNodes(element) {
  while (element.childNodes.length > 0) {
    element.removeChild(element.childNodes[0]);
  }
}
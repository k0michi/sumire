"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderToString = renderToString;
Object.defineProperty(exports, "createElement", {
  enumerable: true,
  get: function () {
    return _hastscriptJsx.createElement;
  }
});
Object.defineProperty(exports, "Fragment", {
  enumerable: true,
  get: function () {
    return _hastscriptJsx.Fragment;
  }
});

var _hastUtilToHtml = _interopRequireDefault(require("hast-util-to-html"));

var _hastscriptJsx = require("hastscript-jsx");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function renderToString(tree) {
  return (0, _hastUtilToHtml.default)(tree);
}
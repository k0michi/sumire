import hastUtilToHTML from "hast-util-to-html";

export { createElement, Fragment } from "hastscript-jsx";

export function renderToString(tree) {
  return hastUtilToHTML(tree);
}
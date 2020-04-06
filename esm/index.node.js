import hastUtilToHTML from "hast-util-to-html";

export { createElement, Fragment } from "@k0michi/hastscript-jsx";

export function renderToString(tree) {
  return hastUtilToHTML(tree);
}
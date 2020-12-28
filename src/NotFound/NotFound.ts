import { FASTElement, customElement, html } from "@microsoft/fast-element";
import styles from "./NotFound.scss";

const template = html`<h1>Page not found!</h1><p>Sorry, the page you're trying to access does not exist</p>`;

@customElement({
  name: "wcs-not-found",
  template,
  styles,
})
export default class NotFoundComponent extends FASTElement {}

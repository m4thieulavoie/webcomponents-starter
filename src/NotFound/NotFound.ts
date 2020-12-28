import { FASTElement, customElement, html } from "@microsoft/fast-element";
import styles from "./NotFound.scss";

const template = html`this is not found`;

@customElement({
  name: "wcs-not-found",
  template,
  styles,
})
export default class NotFoundComponent extends FASTElement {}

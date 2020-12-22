import { FASTElement, customElement, html } from "@microsoft/fast-element";
import styles from "./Header.scss";

const template = html`whatsup2`;

@customElement({
  name: "wcs-header",
  template,
  styles: styles.toString(),
})
export default class HeaderComponent extends FASTElement {}

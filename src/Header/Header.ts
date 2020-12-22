import { FASTElement, customElement } from "@microsoft/fast-element";
import { html } from "@microsoft/fast-element";
import styles from "./Header.scss";

const template = html`whatsup2`;

@customElement({
  name: "wcs-header",
  template,
  styles: styles.toString(),
})
export class HeaderComponent extends FASTElement {}

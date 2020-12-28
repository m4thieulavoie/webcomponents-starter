import { FASTElement, customElement, html } from "@microsoft/fast-element";
import styles from "./Home.scss";

const template = html`<h1>This website does absolutely nothing!</h1>`;

@customElement({
  name: "wcs-home",
  template,
  styles,
})
export default class HomeComponent extends FASTElement {}

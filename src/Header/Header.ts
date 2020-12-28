import { FASTElement, customElement, html } from "@microsoft/fast-element";
import styles from "./Header.scss";

const template = html`
  <a href="/">Home</a><a href="/nsdfoig">Random non existing page</a><a href="https://github.com/m4thieulavoie/webcomponents-starter" target="_blank">View in GitHub</a>
`;

@customElement({
  name: "wcs-header",
  template,
  styles,
})
export default class HeaderComponent extends FASTElement {}

import { Router } from "@vaadin/router";

import styles from "./app.scss";

const styling = document.createElement("style");
styling.innerText = styles;

document.querySelector("head").append(styling);

const router = new Router(document.getElementById("app"));
router.setRoutes([
  { path: "/", component: "wcs-home" },
  { path: "(.*)", component: "wcs-not-found" },
]);
/** *
 * Disabled the @webcomponents/webcomponentsjs by default. Uncomment if you need to support older browsers
 */
// require("@webcomponents/webcomponentsjs/webcomponents-bundle.js");

require("./Header/Header");
require("./Home/Home");
require("./NotFound/NotFound");

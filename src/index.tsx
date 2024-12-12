/* @refresh reload */
import { render } from "solid-js/web";
import App from "./App";

import "./output.css";

render(() => <App />, document.getElementById("root") as HTMLElement);

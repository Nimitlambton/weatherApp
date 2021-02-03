import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faCheckSquare,
  faCoffee,
  faPlusCircle,
  faAnchor,
} from "@fortawesome/free-solid-svg-icons";
import App from "./App";

library.add(fab, faCheckSquare, faCoffee, faPlusCircle, faAnchor);

ReactDOM.render(
  <div className="bg-red-500">
    <App></App>{" "}
  </div>,
  document.getElementById("root")
);

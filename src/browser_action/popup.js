import Greeting from "./components/greeting";
import React from "react";
import { render } from "react-dom";

render(<Greeting />, window.document.getElementById("root"));
console.log("from the browser action");

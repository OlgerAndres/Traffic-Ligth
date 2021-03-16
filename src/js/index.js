//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { Home } from "./component/home.js";
import { TrafficLigth } from "./component/traffic-ligth.js";

//render your react application
ReactDOM.render(<TrafficLigth />, document.querySelector("#app"));

//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
let numberArray = [4, 3, 4, 3, 0, 0];
//render your react application
ReactDOM.render(<Home seconds={numberArray} />, document.querySelector("#app"));

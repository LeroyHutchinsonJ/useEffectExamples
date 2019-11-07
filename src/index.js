import React from "react";
import ReactDOM from "react-dom";
import App from "./app.js";
import TitleChangeApp from "./titleChangeApp";

const rootElement = document.getElementById("root");
ReactDOM.render(<TitleChangeApp className="App" />, rootElement);

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";
import * as serviceWorker from "./serviceWorker";
import "typeface-roboto";

const getWidth = () => {
  return Math.max(
    document.body.scrollWidth,
    document.documentElement.scrollWidth,
    document.body.offsetWidth,
    document.documentElement.offsetWidth,
    document.documentElement.clientWidth
  );
};

const messageError =
  "Disculpa, nuestra aplicacion está hecha para que se abra desde un movil. ";

if (getWidth() < 420) {
  ReactDOM.render(<App />, document.getElementById("root"));
} else {
  ReactDOM.render(
    <div className="message">
      <h2>{messageError}</h2>
    </div>,
    document.getElementById("root")
  );
}

serviceWorker.unregister();

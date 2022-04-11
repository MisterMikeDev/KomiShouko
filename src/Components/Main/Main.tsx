import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { RouterManager } from "../Router/RouterManager";
import "./Main.css";
render(
  <BrowserRouter>
    <RouterManager />
  </BrowserRouter>,
  document.getElementById("main")
);

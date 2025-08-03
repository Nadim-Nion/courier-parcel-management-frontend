import "./index.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router";
import BasicRoute from "./routes/BasicRoute";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <BasicRoute />
  </BrowserRouter>
);

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Country, State } from "country-state-city";
import { CartProvider } from "./context/cart";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CartProvider>

        <App />

    </CartProvider>
  </React.StrictMode>,
);

import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store/index";
import { BrowserRouter } from "react-router-dom";
import { SidebarProvider } from "./contexts/SidebarContext";
import { SessionProvider } from "./contexts/SessionContext";
import { disableReactDevTools } from "@fvilers/disable-react-devtools";
import App from "./App";
import "./app.css";
import { processResult } from "immer/dist/internal";

if (process.env.NODE_ENV === "production") disableReactDevTools();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <SessionProvider>
          <SidebarProvider>
            <App />
          </SidebarProvider>
        </SessionProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

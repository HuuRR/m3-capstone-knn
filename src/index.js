import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { NewsProvider } from "./contexts/NewsContext";
import { UserProvider } from "./contexts/UserContext";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
         <NewsProvider>
          <App />
        </NewsProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);

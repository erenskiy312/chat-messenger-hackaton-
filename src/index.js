import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { AuthContextProvider } from "./context/AuthContextProvider";
import { ChatContextProvider } from "./context/ChatContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthContextProvider>
    <ChatContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChatContextProvider>
  </AuthContextProvider>
);

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Header } from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Profile, Chat } from "./pages";
import { CustomThemeProvider } from "./theme-context";
import { store } from "./store";
import "./global.css";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <CustomThemeProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<h1>Home page</h1>} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/chat/*" element={<Chat />} />
            <Route path="*" element={<h1>404 page</h1>} />
          </Routes>
        </BrowserRouter>
      </CustomThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { Header } from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Profile, Chat, Gists } from "./pages";
import { CustomThemeProvider } from "./theme-context";
import { store, persistor } from "./store";
import "./global.css";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <CustomThemeProvider>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<h1>Home page</h1>} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/chat/*" element={<Chat />} />
              <Route path="/gists/*" element={<Gists />} />
              <Route path="*" element={<h1>404 page</h1>} />
            </Routes>
          </BrowserRouter>
        </CustomThemeProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

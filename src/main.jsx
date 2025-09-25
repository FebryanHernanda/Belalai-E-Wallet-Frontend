import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import MainRoutes from "./routes/Routes";
import { Provider } from "react-redux";
import { persistor, store } from "./store/store";
import { PersistGate } from "redux-persist/integration/react";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <MainRoutes />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </StrictMode>
);

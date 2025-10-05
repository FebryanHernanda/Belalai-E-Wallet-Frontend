import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  PERSIST,
  REHYDRATE,
  REGISTER,
  FLUSH,
  PAUSE,
  PURGE,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import authReducers from "./authSlice";
import userReducers from "./userSlice";
import transferReducers from "./transferSlice";
import topupReducers from "./topupSlice";
import recoveryReducer from "./recoverySlice";

// combine all reducers
const rootReducer = combineReducers({
  auth: authReducers,
  user: userReducers,
  transfer: transferReducers,
  topup: topupReducers,
  recovery: recoveryReducer,
});

// persist configuration
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth", "user"],
};

// warp rootreducer with persist
const persistedReducer = persistReducer(persistConfig, rootReducer);

// create store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [PERSIST, REHYDRATE, REGISTER, FLUSH, PAUSE, PURGE],
      },
    });
  },
});

// create persistor
export const persistor = persistStore(store);

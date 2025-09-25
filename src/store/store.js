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

// combine all reducers
const rootReducer = combineReducers({
  auth: authReducers,
  // user
});

// persist configuration
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"],
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

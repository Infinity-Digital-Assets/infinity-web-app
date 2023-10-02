import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // default localStorage

import userReducer from './userSlice'

const persistConfig = {
  key: 'root', // key for the root state
  storage,
};

const persistedReducer = persistReducer(persistConfig, userReducer);

const store = configureStore({
    reducer:{
        user: persistedReducer, // Use the persisted reducer
    }
});

const persistor = persistStore(store);

export { store, persistor };

import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import contactReducer from './contacts/contactsSlice'
import filterReducer from './contacts/filtersSlice'
import authReducer from "./auth/authSlice"

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};
const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);

    export const store = configureStore({
  reducer: {
    contacts: contactReducer,
    filters: filterReducer,
    auth: persistedAuthReducer,
      },
      middleware: getDefaultMiddleware => 
        getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          }
        })
    });

  export const persistor = persistStore(store);
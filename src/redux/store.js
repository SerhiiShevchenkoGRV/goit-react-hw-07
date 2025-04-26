import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./contactsSlice"
import filtersReducer from './filtersSlice'

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const contactsPersistConfig = {
  key: 'contacts-persist',
  version: 1,
  storage,
}

const filtersPersistConfig = {
  key: 'filters-persist',
  version: 1,
  storage,
}

const persistedContactsReducer = persistReducer(contactsPersistConfig, contactsReducer);
const persistedFiltersReducer = persistReducer(filtersPersistConfig, filtersReducer);

export const store = configureStore({
    reducer: {
        contacts: persistedContactsReducer,
        filters: persistedFiltersReducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store)
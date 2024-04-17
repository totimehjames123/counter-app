import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import counterReducer from './counter.jsx';
import { nonSerializableMiddleware } from './reduxMiddleware.js'; // Import the middleware

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, counterReducer);

export const store = configureStore({
  reducer: {
    counter: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(nonSerializableMiddleware),
});

export const persistor = persistStore(store);

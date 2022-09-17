import logger from 'redux-logger';
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
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import reducer from './reducer';

export const persistKey = `${process.env.NODE_ENV ?? 'development'} v0.2`;

const persistConfig = {
  key: persistKey,
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => {
    const enhancer = getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });

    if (process.env.NODE_ENV === 'production') return enhancer;
    return enhancer.concat(logger);
  },
});

export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);
export default store;

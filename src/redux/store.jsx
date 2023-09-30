import { configureStore , combineReducers } from '@reduxjs/toolkit'

// importing persist
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import userSlice from './userSlice';


const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({ 
    user : userSlice,
})
const persistedReducer = persistReducer(persistConfig, rootReducer )

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});


export const persistor = persistStore(store);
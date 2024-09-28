import { combineReducers, configureStore } from "@reduxjs/toolkit";
import habitReducer from '../store/slices/habit/habitSlice'
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";

const persistConfig = {
    key: 'root',
    storage
}

const persistedReducer = persistReducer(persistConfig, combineReducers({habit: habitReducer}));

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: {
            // Ignore redux-persist actions that contain non-serializable values
            ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
          },
        })
})

export const persistor = persistStore(store);

// export default store;
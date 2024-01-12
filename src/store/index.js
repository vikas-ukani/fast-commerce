const { configureStore, combineReducers } = require("@reduxjs/toolkit");
import categoryReducer from '@/store/categorySlice'
import productReducer from '@/store/productSlice'
import storageSession from 'redux-persist/lib/storage/session'
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';


const persistConfig = {
    key: 'root',
    storage: storageSession,
}

const rootReducer = combineReducers({
    category: categoryReducer,
    product: productReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer);


export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),

    devTools: process.env.NODE_ENV !== 'production',
    // middleware: (getDefaultMiddleware) =>
    //     getDefaultMiddleware({
    //         serializableCheck: {
    //             ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    //         },
    //     }),

    // middleware: [thunk]
})
export const persistor = persistStore(store);
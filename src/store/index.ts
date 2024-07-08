const { configureStore, combineReducers } = require("@reduxjs/toolkit");
import {
    FLUSH,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
    REHYDRATE,
    persistReducer,
    persistStore,
} from "redux-persist";
import storageSession from "redux-persist/lib/storage/session";

import authSlice from "@/store/authSlice";
import categoryReducer from "@/store/categorySlice";
import productReducer from "@/store/productSlice";
import cartSlice from "./cartSlice";
import wishlistSlice from "./wishlistSlice";

const persistConfig = {
    key: "root",
    storage: storageSession,
};

const rootReducer = combineReducers({
    category: categoryReducer,
    product: productReducer,
    auth: authSlice,
    cart: cartSlice,
    wishlist: wishlistSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware: any) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),

    devTools: process.env.NODE_ENV !== "production",
    // middleware: (getDefaultMiddleware) =>
    //     getDefaultMiddleware({
    //         serializableCheck: {
    //             ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    //         },
    //     }),
    // middleware: [thunk]
});
export type AppStore = ReturnType<typeof store>
export type IRootState = ReturnType<AppStore['getState']>

export const persistor = persistStore(store);

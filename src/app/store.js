import { configureStore } from "@reduxjs/toolkit";
import { cryptoApi } from "../services/cryptoAPI";
import { newsApi } from "../services/cryptoNewsAPI";

const store = configureStore({
    reducer: {
        [cryptoApi.reducerPath]: cryptoApi.reducer,
        [newsApi.reducerPath]: newsApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(cryptoApi.middleware)
            .concat(newsApi.middleware),
})

export default store;
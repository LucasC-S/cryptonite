import { configureStore } from "@reduxjs/toolkit"

import { fetchCrypto } from "../services/fetchCrypto"
import { fetchNews } from "../services/fetchNews"

export default configureStore({
    reducer: {
        [fetchCrypto.reducerPath]: fetchCrypto.reducer,
        [fetchNews.reducerPath]: fetchNews.reducer,
    },
})
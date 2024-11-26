import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { contentApi, rawContentApi } from './api'

export const store = configureStore({
  reducer: {
    [contentApi.reducerPath]: contentApi.reducer,
    [rawContentApi.reducerPath]: rawContentApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(contentApi.middleware, rawContentApi.middleware),
})

setupListeners(store.dispatch)

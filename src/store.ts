import { configureStore } from '@reduxjs/toolkit'
import { cyberApi } from './services/cyberApi'

export const store = configureStore({
  reducer: {
    cyberApi: cyberApi.reducer
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cyberApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter.jsx'

export const store = configureStore({
  reducer: {
    counter: counterReducer
  },
})
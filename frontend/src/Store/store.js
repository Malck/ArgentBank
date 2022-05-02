import { configureStore } from '@reduxjs/toolkit'
import todoSlice from "../Store/TodoSlice"

export const store = configureStore({
  reducer: {
    UserState: todoSlice
  },
})
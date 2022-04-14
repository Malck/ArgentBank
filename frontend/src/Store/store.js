import { configureStore } from '@reduxjs/toolkit'
import TodoReducer from "../Store/TodoSlice"

export const store = configureStore({
  reducer: {
    UserState: TodoReducer
  },
})
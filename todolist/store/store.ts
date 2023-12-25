
import { configureStore } from "@reduxjs/toolkit";
import AddTaskReducer from './slices/AddTaskSlice'

export const store = configureStore({
    reducer:{
        AddTaskReducer,

    }
})

export type RootState = ReturnType<typeof store.getState>
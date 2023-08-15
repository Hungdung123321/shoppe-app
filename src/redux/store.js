import { configureStore } from '@reduxjs/toolkit'
import TestReducer from './TestSlice'

const Reducer = {
    dung: TestReducer
}

export const store = configureStore({
    reducer: Reducer,
})
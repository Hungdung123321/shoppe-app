import { configureStore } from '@reduxjs/toolkit'
import BarsReducer from './BarsSlice'

const Reducers = {
    Bars: BarsReducer
}

export const store = configureStore({
    reducer: Reducers
})
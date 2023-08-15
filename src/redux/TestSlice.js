import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0,
}

export const TestSlice = createSlice({
    name: 'test',
    initialState,
    reducers: {
        increase: (state, ation) => {
            state.value = state.value + 1
        }
    }
})

export const { increase } = TestSlice.actions

export default TestSlice.reducer
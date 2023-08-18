import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isSearchBar: true,
}

export const BarsSlice = createSlice({
    name: 'Bar',
    initialState,
    reducers: {
        setIsSearchBar: (state, ation) => {
            state.isSearchBar = !state.isSearchBar
        }
    }
})

export const { setIsSearchBar } = BarsSlice.actions
export const selectIsSearchBar = (state) => state.Bars.isSearchBar

export default BarsSlice.reducer
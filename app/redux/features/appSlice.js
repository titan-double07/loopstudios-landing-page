// "use client";
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isHamOpen:false
}

export const appSlice = createSlice({
    name:'app',
    initialState,
    reducers: {
       toggleHamMenu: (state) => {
            state.isHamOpen = !state.isHamOpen
        },
    },
});

export const { toggleHamMenu, } = appSlice.actions;
export default appSlice.reducer;
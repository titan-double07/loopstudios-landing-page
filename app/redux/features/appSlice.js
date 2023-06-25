// "use client";
import { createSlice } from '@reduxjs/toolkit';



const initialState = {
    isHamOpen: false,
    splashLoader:true
}

export const appSlice = createSlice({
    name:'app',
    initialState,
    reducers: {
       toggleHamMenu: (state) => {
            state.isHamOpen = !state.isHamOpen
        },
        setSplashLoader: (state, ) => { 
            state.splashLoader = false
        }
    },
});

export const { toggleHamMenu,setSplashLoader } = appSlice.actions;
export default appSlice.reducer;
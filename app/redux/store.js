// "use client";
import { configureStore } from '@reduxjs/toolkit';
import appReducer from '@/redux/features/appSlice'; // Import your reducer

 const store = configureStore({
    reducer: { app: appReducer },
})
export default store

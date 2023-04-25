import { configureStore } from "@reduxjs/toolkit";
import loginFormReducer from "./storeSlices/loginFormSlice";  


export const store =configureStore({
    reducer:{
        loginForm : loginFormReducer
    }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
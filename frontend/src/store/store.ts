import { configureStore } from "@reduxjs/toolkit";
import loginFormReducer from "./storeSlices/loginFormSlice";  
import registerFormReducer from "./storeSlices/registerFormSlice";  


export const store =configureStore({
    reducer:{
        loginForm : loginFormReducer,
        registerForm : registerFormReducer

    }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
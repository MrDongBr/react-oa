import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./user";
import themeReduceer from "./theme";
export const store = configureStore({
    reducer: {
        user: userReducer,
        theme: themeReduceer
    }
})
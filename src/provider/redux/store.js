import { configureStore } from "@reduxjs/toolkit";
import addcartReducer from "./addcard";

export const store = configureStore({
    reducer: {
        addcart: addcartReducer
        // If you don't have a "user" reducer, remove this line
    }
});

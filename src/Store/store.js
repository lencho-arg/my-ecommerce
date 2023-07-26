import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../Features/Counter/counterSlice'
import shopReducer from '../Features/Counter/Market/shopSlice'

export default configureStore ({
    reducer: {
        counterReducer,
        shopReducer
    }
})
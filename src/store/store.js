import {configureStore} from "@reduxjs/toolkit"
import moviesReducer  from '../store/Movies/slice';
export const store = configureStore({
    reducer:{
        Movies:moviesReducer,
    }
})
import { configureStore } from "@reduxjs/toolkit";

import todosReducer from './reducers/todosSlice';
import authReducer from './reducers/authSlice'; 

export const store = configureStore({
    reducer: {
        auth: authReducer,
        todos: todosReducer
    }
})
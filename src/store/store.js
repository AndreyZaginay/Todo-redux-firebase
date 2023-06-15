import { configureStore } from "@reduxjs/toolkit";

import todosReducer from './reducers/todosSlice';

export const store = configureStore({
    reducer: {
        // users: '',
        todos: todosReducer
    }
})
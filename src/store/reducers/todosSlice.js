import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: [],
    isLoading: false,
    error: null
}

export const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        todosFetching(state) {
            state.isLoading = true;
        },
        todosFetchingSuccess(state, action) {
            state.isLoading = false;
            state.error = null;
            state.todos = action.payload;
        },
        todosFetchingError(state, action) {
            state.isLoading = false;
            state.error = action.payload;
        },
        addTodoAction(state) {
            state.isLoading = true;
        },
        addTodoSuccess(state, action) {
            state.isLoading = false;
            state.todos.push(action.payload);
            state.error = null;
        },
        addTodoError(state, action) {
            state.isLoading = false;
            state.error = action.payload;
        }

    }
}) 

export const { 
    todosFetching, 
    todosFetchingSuccess, 
    todosFetchingError, 
    addTodoAction, 
    addTodoError, 
    addTodoSuccess 
} = todosSlice.actions;

export default todosSlice.reducer;
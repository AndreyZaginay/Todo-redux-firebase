import { add, getTodos, remove, update } from "../../API/todo.firebase"
import { 
    addTodoAction,
    addTodoError, 
    addTodoSuccess, 
    removeTodoAction, 
    removeTodoError, 
    removeTodoSuccess, 
    todosFetching, 
    todosFetchingError, 
    todosFetchingSuccess, 
    updateTodoAction, 
    updateTodoError, 
    updateTodoSuccess 
} from "../reducers/todosSlice";

export const fetchTodos = () => async (dispatch) => {
    try {
        dispatch(todosFetching());
        const todos = await getTodos();
        dispatch(todosFetchingSuccess(todos));
    } catch (error) {
        dispatch(todosFetchingError(error.message));
    }
}

export const addTodo = (todo) => async (dispatch) => {
    try {
        dispatch(addTodoAction());
        const todoId = await add(todo);
        dispatch(addTodoSuccess({ id: todoId, ...todo }));
    } catch (error) {
        dispatch(addTodoError(error.message));
    }
}

export const removeTodo = (todoId) => async (dispatch) => {
    try {
        dispatch(removeTodoAction());
        await remove(todoId);
        dispatch(removeTodoSuccess(todoId));
    } catch (error) {
        dispatch(removeTodoError(error.message));
    }
}

export const updateTodo = (id, isComplete) => async (dispatch) => {
    try {
        dispatch(updateTodoAction());
        await update(id, isComplete);
        dispatch(updateTodoSuccess({ id, ...isComplete }));
    } catch (error) {
        dispatch(updateTodoError(error.message));
    }
}
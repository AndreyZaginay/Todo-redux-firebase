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

export const fetchTodos = () => (dispatch) => {
    try {
        dispatch(todosFetching());
        const response = getTodos();
        response.then(todos => dispatch(todosFetchingSuccess(todos)));
    } catch (e) {
        dispatch(todosFetchingError(e.message));
    }
}

export const addTodo = (todo) => (dispatch) => {
    try {
        dispatch(addTodoAction());
        add(todo).then(todoId => dispatch(addTodoSuccess({ id: todoId, ...todo })));
    } catch (e) {
        dispatch(addTodoError(e.message));
    }
}

export const removeTodo = (todoId) => (dispatch) => {
    try {
        dispatch(removeTodoAction());
        remove(todoId);
        dispatch(removeTodoSuccess(todoId));
    } catch (e) {
        dispatch(removeTodoError(e.message));
    }
}

export const updateTodo = (id, isComplete) => (dispatch) => {
    try {
        dispatch(updateTodoAction());
        update(id, isComplete);
        dispatch(updateTodoSuccess({id, ...isComplete}));
    } catch (e) {
        dispatch(updateTodoError(e.message));
    }
}
import { add, getTodos, remove } from "../../API/todo.firebase"
import { addTodoAction, addTodoError, addTodoSuccess, removeTodoAction, removeTodoError, removeTodoSuccess, todosFetching, todosFetchingError, todosFetchingSuccess } from "../reducers/todosSlice";

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
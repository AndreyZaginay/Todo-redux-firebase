import { getTodos } from "../../API/todo.firebase"
import { todosFetching, todosFetchingError, todosFetchingSuccess } from "../reducers/todosSlice";

export const fetchTodos = () => (dispatch) => {
    try {
        dispatch(todosFetching());
        const response = getTodos();
        response.then(todos => dispatch(todosFetchingSuccess(todos)));
    } catch (e) {
        dispatch(todosFetchingError(e.message));
    }
}
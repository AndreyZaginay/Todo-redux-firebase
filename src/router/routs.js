import { TodoIdPage } from "../pages/TodoIdPage";
import { Todos } from "../pages/Todos";

// export const publicRoutes = [
//     {
//         path: 'login',
//         component: Login,
//         name: 'Login'
//     },
// ];
export const privateRoutes = [
    {
        path: 'todos',
        component: Todos,
        name: 'Todos',
        index: true
    },
    {
        path: 'todos/todo/:id',
        component: TodoIdPage,
        name: 'TodoIdPage'
    },

];
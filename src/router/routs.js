import { Todos } from "../pages/Todos";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";

export const publicRoutes = [
    {
        path: 'login',
        component: Login,
        name: 'Login'
    },
    {
        path: 'register',
        component: Register,
        name: 'Register'
    },
];
export const privateRoutes = [
    {
        path: 'todos',
        component: Todos,
        name: 'Todos',
        index: true
    },
];
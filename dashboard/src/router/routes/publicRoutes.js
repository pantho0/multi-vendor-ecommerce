import { lazy } from "react";
import Home from "../../views/pages/Home/Home";
const Login = lazy(()=> import('../../views/auth/Login'))
const Register = lazy(()=> import('../../views/auth/Register'))


const publicRoutes = [
    {
        path : '/',
        element : <Home/>
    },
    {
        path : '/login',
        element : <Login/>
    },
    {
        path : '/register',
        element : <Register/>
    }
]

export default publicRoutes;
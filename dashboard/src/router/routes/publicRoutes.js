import Login from "../../views/auth/Login";
import Register from "../../views/auth/Register";
import Home from "../../views/pages/Home/Home";




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
import Home from "../../views/pages/Home/Home";

export const sellerRoutes = [
    {
        path : '/',
        element : <Home/>,
        ability : ['admin', 'seller']
    }
]
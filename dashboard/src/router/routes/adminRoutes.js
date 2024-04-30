import AdminDashboard from "../../views/admin/AdminDashboard";
import Category from "../../views/admin/Category";
import Orders from "../../views/admin/Orders";


export const adminRoutes = [
    {
        path : 'admin/dashboard',
        element : <AdminDashboard/>,
        role : 'admin'
    },
    {
        path : 'admin/dashboard/orders',
        element : <Orders/>,
        role : 'admin'
    },
    {
        path : 'admin/dashboard/category',
        element : <Category/>,
        role : 'admin'
    }
]
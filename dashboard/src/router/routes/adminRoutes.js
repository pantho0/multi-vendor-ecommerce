import AdminDashboard from "../../views/admin/AdminDashboard";
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
    }
]
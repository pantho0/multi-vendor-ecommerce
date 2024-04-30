import AdminDashboard from "../../views/admin/AdminDashboard";
import Category from "../../views/admin/Category";
import Orders from "../../views/admin/Orders";
import PaymentRequest from "../../views/admin/PaymentRequest";
import Sellers from "../../views/admin/Sellers";


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
    },
    {
        path : 'admin/dashboard/sellers',
        element : <Sellers/>,
        role : 'admin'
    },
    {
        path : 'admin/dashboard/payment-request',
        element : <PaymentRequest/>,
        role : 'admin'
    }
]
import AdminDashboard from "../../views/admin/AdminDashboard";


export const adminRoutes = [
    {
        path : 'admin/dashboard',
        element : <AdminDashboard/>,
        role : 'admin'
    }
]
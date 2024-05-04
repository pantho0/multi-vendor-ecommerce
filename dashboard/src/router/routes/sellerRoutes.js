import Home from "../../views/pages/Home/Home";
import AddProduct from "../../views/seller/AddProduct";
import DiscountProducts from "../../views/seller/DiscountProducts";
import EditProduct from "../../views/seller/EditProduct";
import Orders from "../../views/seller/Orders";
import Payments from "../../views/seller/Payments";
import Products from "../../views/seller/Products";
import Profile from "../../views/seller/Profile";
import SellerDashboard from "../../views/seller/SellerDashboard";
import SellerToAdmin from "../../views/seller/SellerToAdmin";
import SellerToCustomer from "../../views/seller/SellerToCustomer";

export const sellerRoutes = [
  {
    path: "/",
    element: <Home />,
    ability: ["admin", "seller"],
  },
  {
    path: "/seller/dashboard",
    element: <SellerDashboard />,
    role: "seller",
    status: 'active'
  },
  {
    path: "/seller/dashboard/add-product",
    element: <AddProduct />,
    role: "seller",
    status: 'active'
  },
  {
    path: "/seller/dashboard/all-product",
    element: <Products/>,
    role: "seller",
    status: 'active'
  },
  {
    path: "/seller/dashboard/discount-product",
    element: <DiscountProducts/>,
    role: "seller",
    status: 'active'
  },
  {
    path: "/seller/dashboard/orders",
    element: <Orders/>,
    role: "seller",
    ability: ['active', 'deactive']
  },
  {
    path: "/seller/dashboard/payments",
    element: <Payments/>,
    role: "seller",
    status: 'active'
  },
  {
    path: "/seller/dashboard/chat-customer/:customerId",
    element: <SellerToCustomer/>,
    role: "seller",
    ability: ['active', 'deactive','pending']
  },
  {
    path: "/seller/dashboard/chat-support",
    element: <SellerToAdmin/>,
    role: "seller",
    status: 'active'
  },
  {
    path: "/seller/dashboard/chat-customer",
    element: <SellerToCustomer/>,
    role: "seller",
    status: 'active'
  },
  {
    path: "/seller/dashboard/profile",
    element: <Profile/>,
    role: "seller",
    status: 'active'
  },
  {
    path: "/seller/dashboard/edit-product/:productId",
    element: <EditProduct/>,
    role: "seller",
    status: 'active'
  },
];

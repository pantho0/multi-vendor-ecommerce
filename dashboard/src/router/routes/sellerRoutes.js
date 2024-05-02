import Home from "../../views/pages/Home/Home";
import AddProduct from "../../views/seller/AddProduct";
import DiscountProducts from "../../views/seller/DiscountProducts";
import Orders from "../../views/seller/Orders";
import Payments from "../../views/seller/Payments";
import Products from "../../views/seller/Products";
import SellerDashboard from "../../views/seller/SellerDashboard";

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
];

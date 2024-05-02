import Home from "../../views/pages/Home/Home";
import AddProduct from "../../views/seller/AddProduct";
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
    ability: ["seller"],
  },
  {
    path: "/seller/dashboard/add-product",
    element: <AddProduct />,
    ability: ["seller"],
  },
  {
    path: "/seller/dashboard/all-product",
    element: <Products/>,
    ability: ["seller"],
  },
];

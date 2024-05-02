import Home from "../../views/pages/Home/Home";
import AddProduct from "../../views/seller/AddProduct";
import DiscountProducts from "../../views/seller/DiscountProducts";
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
  {
    path: "/seller/dashboard/discount-product",
    element: <DiscountProducts/>,
    ability: ["seller"],
  },
];

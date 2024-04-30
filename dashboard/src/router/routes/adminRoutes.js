import AdminDashboard from "../../views/admin/AdminDashboard";
import Category from "../../views/admin/Category";
import ChatSeller from "../../views/admin/ChatSeller";
import DeactivateSellers from "../../views/admin/DeactivateSellers";
import Orders from "../../views/admin/Orders";
import PaymentRequest from "../../views/admin/PaymentRequest";
import SellerDetails from "../../views/admin/SellerDetails";
import SellerRequest from "../../views/admin/SellerRequest";
import Sellers from "../../views/admin/Sellers";

export const adminRoutes = [
  {
    path: "admin/dashboard",
    element: <AdminDashboard />,
    role: "admin",
  },
  {
    path: "admin/dashboard/orders",
    element: <Orders />,
    role: "admin",
  },
  {
    path: "admin/dashboard/category",
    element: <Category />,
    role: "admin",
  },
  {
    path: "admin/dashboard/sellers",
    element: <Sellers />,
    role: "admin",
  },
  {
    path: "admin/dashboard/payment-request",
    element: <PaymentRequest />,
    role: "admin",
  },
  {
    path: "admin/dashboard/deactive-sellers",
    element: <DeactivateSellers />,
    role: "admin",
  },
  {
    path: "admin/dashboard/sellers-request",
    element: <SellerRequest />,
    role: "admin",
  },
  {
    path: "admin/dashboard/seller/details/:sellerId",
    element: <SellerDetails/>,
    role: "admin",
  },
  {
    path: "admin/dashboard/chat-seller",
    element: <ChatSeller/>,
    role: "admin",
  }
];

import Success from "../pages/Success";
import Checkout from "../pages/Checkout";
import Restaurant from "../pages/Resturant";

export const authRoutes = [
  { index: true, element: <Success /> },
  { path: "success", element: <Success /> },
  { path: "checkout", element: <Checkout /> },
  { path: "restaurant", element: <Restaurant /> },
];

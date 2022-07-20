import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import ForgotPassword from "../pages/ForgotPassword";

export const webRoutes = [
  { index: true, element: <SignUp /> },
  { path: "/", element: <SignUp /> },
  { path: "/login", element: <Login /> },
  { path: "/forgot-password", element: <ForgotPassword /> },
];

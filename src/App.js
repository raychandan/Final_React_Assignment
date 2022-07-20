import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { webRoutes } from "./routes/webRoutes";
import { authRoutes } from "./routes/authRoutes";
import NotFound from "./pages/404";
import WebLayout from "./pages/WebLayout";
import ComponantLayout from "./pages/componants/ComponantLayout";
import "./App.css";
import "./assets/vendor/slick/slick.min.css";
import "./assets/vendor/slick/slick-theme.min.css";
import "./assets/vendor/icons/feather.css";
import "./assets/vendor/bootstrap/css/bootstrap.min.css";
import "./assets/css/style.css";
import "./assets/css/developer.css";
import "./assets/vendor/sidebar/demo.css";
import "./assets/css/owl.carousel-min.css";

function App() {
  const webRoute = webRoutes.map((route, index) => (
    <Route
      index={route.index}
      element={route.element}
      path={route.path}
      key={index}
    />
  ));

  const authRoute = authRoutes.map((route, index) => (
    <Route
      index={route.index}
      element={route.element}
      // element={user?.email ? route.element : <Navigate to="/login" />}
      path={route.path}
      key={index}
    />
  ));
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        newestOnTop
        closeOnClick
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={true}
        limit={3}
      />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WebLayout />}>
            {webRoute}
            <Route path="user" element={<ComponantLayout />}>
              {authRoute}
            </Route>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

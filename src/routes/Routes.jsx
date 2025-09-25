import { Route, Routes } from "react-router-dom";
import Register from "../pages/register/Register";
import Login from "../pages/login/login";
import EnterPin from "../pages/enter-pin/EnterPin";
import LandingLayout from "../layouts/LandingLayout";
import { ToastContainer } from "react-toastify";
import LandingPage from "../pages/landing-page/LandingPage";

function MainRoutes() {
  return (
    <>
      {/* Routes */}
      <Routes>
        {/* Landing Routes */}
        <Route element={<LandingLayout />}>
          <Route path="/" element={<LandingPage />} />
          {/* Content */}
        </Route>
        {/* Landing Routes */}

        {/* Auth Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/login/enter-pin" element={<EnterPin />} />
        <Route path="/register" element={<Register />} />
        {/* Auth Routes */}
      </Routes>
      {/* Routes */}
      <ToastContainer />
    </>
  );
}

export default MainRoutes;

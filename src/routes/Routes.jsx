import { Route, Routes } from "react-router-dom";
import Register from "../pages/register/Register";
import Login from "../pages/login/login";
import EnterPin from "../pages/enter-pin/EnterPin";
import LandingLayout from "../layouts/LandingLayout";

function MainRoutes() {
  return (
    <>
      {/* Routes */}
      <Routes>
        {/* Landing Routes */}
        <Route path="/" element={<LandingLayout />}>
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
    </>
  );
}

export default MainRoutes;

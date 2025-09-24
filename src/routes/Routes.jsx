import { Route, Routes } from "react-router-dom";
import Register from "../pages/register/Register";
import Login from "../pages/login/login";
import EnterPin from "../pages/enter-pin/EnterPin";
import MainLayout from "../layouts/MainLayout";

function MainRoutes() {
  return (
    <>
      {/* Routes */}
      <Routes>
        <Route path="/landing" element={<MainLayout />}></Route>
        {/* Auth Routes */}
        <Route path="/" element={<Login />} />
        <Route path="/login/enter-pin" element={<EnterPin />} />
        <Route path="/register" element={<Register />} />
        {/* Auth Routes */}
      </Routes>
      {/* Routes */}
    </>
  );
}

export default MainRoutes;

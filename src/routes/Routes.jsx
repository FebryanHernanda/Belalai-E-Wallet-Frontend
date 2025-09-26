import { Route, Routes } from "react-router-dom";
import Register from "../pages/register/Register";
import Login from "../pages/login/login";
import EnterPin from "../pages/enter-pin/EnterPin";
import LandingLayout from "../layouts/LandingLayout";
import { ToastContainer } from "react-toastify";
import LandingPage from "../pages/landing-page/LandingPage";
import MainLayout from "../layouts/MainLayout";
import Profile from "../pages/profile/Profile";
import Dashboard from "../pages/dashboard/Dashboard";
import Transfer from "../pages/transfer/Transfer";
import ChangePin from "../pages/changePin/ChangePin";
import History from "../pages/history/History";

function MainRoutes() {
  return (
    <>
      {/* Routes */}
      <Routes>
        {/* Landing Layouts */}
        <Route element={<LandingLayout />}>
          <Route path="/" element={<LandingPage />} />
        </Route>
        {/* Landing Layouts */}

        {/* Main Layouts */}
        <Route element={<MainLayout />}>
          {/* Profile */}
          <Route path="profile">
            <Route index element={<Profile />} />
            <Route path="change-pin" element={<ChangePin />} />
          </Route>
          {/* Profile */}

          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/transfer" element={<Transfer />} />
          <Route path="/history" element={<History />} />
        </Route>
        {/* Main Layouts */}

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

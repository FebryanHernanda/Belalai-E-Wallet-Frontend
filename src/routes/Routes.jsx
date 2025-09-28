import { Navigate, Route, Routes } from "react-router-dom";
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
import ChangePassword from "../pages/changePassword/ChangePassword";
import Topup from "../pages/topup/Topup";
import TransferDetail from "../pages/transfer-detail/TransferDetail";
import { useSelector } from "react-redux";

function MainRoutes() {
  const PrivateRoute = ({ children }) => {
    const auth = useSelector((state) => state.auth);
    if (!auth.token) return <Navigate to="/login" replace />;
    return children;
  };

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
            <Route
              index
              element={
                <PrivateRoute>
                  <Profile />
                </PrivateRoute>
              }
            />
            <Route
              path="change-pin"
              element={
                <PrivateRoute>
                  <ChangePin />
                </PrivateRoute>
              }
            />
            <Route
              path="change-password"
              element={
                <PrivateRoute>
                  <ChangePassword />
                </PrivateRoute>
              }
            />
          </Route>
          {/* Profile */}

          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/transfer"
            element={
              <PrivateRoute>
                <Transfer />
              </PrivateRoute>
            }
          />
          <Route
            path="/transfer_detail"
            element={
              <PrivateRoute>
                <TransferDetail />
              </PrivateRoute>
            }
          />
          <Route
            path="/history"
            element={
              <PrivateRoute>
                <History />
              </PrivateRoute>
            }
          />
          <Route
            path="/top-up"
            element={
              <PrivateRoute>
                <Topup />
              </PrivateRoute>
            }
          />
        </Route>
        {/* Main Layouts */}

        {/* Auth Routes */}
        <Route path="/login" element={<Login />} />
        <Route
          path="/login/enter-pin"
          element={
            <PrivateRoute>
              <EnterPin />
            </PrivateRoute>
          }
        />
        <Route path="/register" element={<Register />} />
        {/* Auth Routes */}
      </Routes>
      {/* Routes */}
      <ToastContainer />
    </>
  );
}

export default MainRoutes;

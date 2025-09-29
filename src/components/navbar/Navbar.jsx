// import navbarIcon from "/src/assets/icon/wallet-icon.png";
import avatarBase from "/public/icon/avatar-base.png";
import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import NavbarDropdown from "./NavbarDropdown";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { API_URL } from "../../utils";
import { logout } from "../../store/authSlice";
import { toast } from "react-toastify";
import { persistor } from "../../store/store";

const Navbar = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isMenuOpen, setIsMenuOpen } = props;
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const { isAuthenticated } = useSelector((state) => state.auth);
  const { userData } = useSelector((state) => state.user);

  useEffect(() => {
    if (isAuthenticated) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [isAuthenticated]);

  const handleMenuDropdown = (e) => {
    e.stopPropagation();
    setIsMenuOpen(!isMenuOpen);
  };

  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

  const handleLogoutClick = () => {
    setIsLogoutModalOpen(true);
  };

  const handleCancelLogout = () => {
    setIsLogoutModalOpen(false);
  };

  const handleConfirmLogout = () => {
    dispatch(logout());
    setIsLoggedIn(false);
    persistor.purge();
    navigate("/");
    toast.success("Anda telah berhasil keluar", {
      position: "top-right",
      autoClose: 1000,
    });
    setIsLogoutModalOpen(false);
  };

  return (
    <nav
      className="text-red  bg-blue-700 w-full h-full flex justify-between text-white p-5"
      onClick={() => setIsMenuOpen(false)}
    >
      <Link
        className="flex items-center justify-between gap-5 cursor-pointer"
        to="/"
      >
        <img src="/belalai-wallet.png" alt="E-Wallet icon" className="w-10" />
        <h1 className="text-xl">Russel Pay</h1>
      </Link>

      {isLoggedIn ? (
        //  {/* Login Nav */}
        <div className="gap-5 hidden lg:flex items-center justify-between">
          <h1>{userData?.fullname ? `${userData?.fullname}` : "Hola !"}</h1>
          <img
            src={
              userData?.profile_picture
                ? `${API_URL}/img/${userData?.profile_picture}`
                : avatarBase
            }
            alt="Avatar Profile"
            className="w-13 h-13 object-cover rounded-full"
          />
          <ChevronDown
            size={35}
            className="cursor-pointer b"
            onClick={handleMenuDropdown}
          />
        </div>
      ) : (
        //   {/* Not Login Nav */}
        <div className="hidden gap-5 justify-between lg:flex">
          <Link
            className="p-3 border-1 font-semibold rounded-lg cursor-pointer border-white hover:bg-white hover:text-blue-700 "
            to="/login"
          >
            Sign In
          </Link>
          <Link
            className="p-3 border-1 font-semibold rounded-lg cursor-pointer bg-white text-blue-700 hover:bg-blue-700 hover:border-1 hover:border-white hover:text-white"
            to="/register"
          >
            Sign Up
          </Link>
        </div>
      )}

      {/* Mobile Responsive */}
      <button className="lg:hidden cursor-pointer" onClick={handleMenuDropdown}>
        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>
      {/* Mobile Responsive */}

      {/* Navbar dropdown */}
      {isMenuOpen && (
        <NavbarDropdown
          setIsLoggedIn={setIsLoggedIn}
          isLoggedIn={isLoggedIn}
          onLogoutClick={handleLogoutClick}
        />
      )}

      {isLogoutModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl w-[400px]">
            <h2 className="text-lg text-black  mb-4">
              Apakah Anda yakin ingin keluar?
            </h2>
            <div className="flex justify-end gap-4">
              <button
                className="px-4 py-2 bg-gray-400 cursor-pointer rounded hover:bg-gray-400"
                onClick={handleCancelLogout}
              >
                Batal
              </button>
              <button
                className="px-4 py-2 bg-red-600 cursor-pointer text-white rounded hover:bg-red-700"
                onClick={handleConfirmLogout}
              >
                Keluar
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

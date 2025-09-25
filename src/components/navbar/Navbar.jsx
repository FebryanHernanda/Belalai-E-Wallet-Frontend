import navbarIcon from "/src/assets/icon/wallet-icon.png";
import avatarBase from "/src/assets/icon/avatar-base.png";
import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import NavbarDropdown from "./NavbarDropdown";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = (props) => {
  const { isMenuOpen, setIsMenuOpen } = props;
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const { isAuthenticated } = useSelector((state) => state.auth);

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

  return (
    <nav
      className="text-red  bg-blue-700 w-full h-full flex justify-between text-white p-5"
      onClick={() => setIsMenuOpen(false)}
    >
      <Link
        className="flex items-center justify-between gap-5 cursor-pointer"
        to="/"
      >
        <img src={navbarIcon} alt="E-Wallet icon" className="w-10" />
        <h1 className="text-xl">E-Wallet</h1>
      </Link>

      {isLoggedIn ? (
        //  {/* Login Nav */}
        <div className="gap-5 hidden lg:flex items-center justify-between">
          <h1>Ghaluh Wizzard</h1>
          <img src={avatarBase} alt="Avatar Profile" className="w-13 h-13" />
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
        <NavbarDropdown setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} />
      )}
    </nav>
  );
};

export default Navbar;

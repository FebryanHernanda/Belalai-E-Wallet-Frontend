import { IdCard, LogOut, User } from "lucide-react";
import { Link } from "react-router-dom";

const NavbarDropdown = (props) => {
  const { setIsMenuOpen, isLoggedIn } = props;

  return (
    <div className="absolute right-5 top-20 w-60 rounded-xl border-1 border-gray-300 bg-white p-4 shadow-2xl lg:top-23 lg:right-10 2xl:right-5">
      {/* Navigation */}
      <div className="flex flex-col gap-4 border-b">
        {isLoggedIn ? (
          <div className="flex flex-col justify-between  gap-3">
            <div className="flex p-2 text-blue-700 gap-5 cursor-pointer rounded-lg hover:bg-blue-700 hover:text-white ">
              <User />
              <h3>Profile</h3>
            </div>
            <div className="flex p-2 text-red-700 gap-5 cursor-pointer  rounded-lg hover:bg-blue-700 hover:text-white ">
              <LogOut className="rotate-180" />
              <h3>Keluar</h3>
            </div>
          </div>
        ) : (
          <div className="flex flex-col justify-between  gap-3">
            <Link
              className="flex p-2 text-blue-700 gap-5 cursor-pointer rounded-lg hover:bg-blue-700 hover:text-white "
              to="/login"
            >
              <User />
              <h3>Sign In</h3>
            </Link>
            <Link
              className="flex p-2 text-red-700 gap-5 cursor-pointer  rounded-lg hover:bg-blue-700 hover:text-white"
              to="/register"
            >
              <IdCard />
              <h3>Sign Up</h3>
            </Link>
          </div>
        )}
      </div>
      {/* Navigation */}
    </div>
  );
};

export default NavbarDropdown;

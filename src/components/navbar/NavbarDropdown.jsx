import {
  IdCard,
  LifeBuoy,
  LogOut,
  Send,
  User,
  BanknoteArrowUp,
  History,
} from "lucide-react";
import { Link, NavLink } from "react-router-dom";

const NavbarDropdown = (props) => {
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  const { isLoggedIn, onLogoutClick } = props;

  return (
    <>
      <div className="absolute z-50 right-5 top-20 w-60 rounded-xl border-1 border-gray-300 bg-white p-4 shadow-2xl lg:top-23 lg:right-10 2xl:right-5">
        {/* Navigation */}
        <div className="flex flex-col gap-4 border-b">
          {isLoggedIn ? (
            <div className="flex flex-col justify-between gap-3">
              <Link
                className="flex p-2 text-blue-700 gap-5 cursor-pointer rounded-lg hover:bg-blue-700 hover:text-white "
                to="/profile"
              >
                <User />
                <h3>Profile</h3>
              </Link>
              <div className="block lg:hidden">
                <NavLink
                  className="flex p-2 text-blue-700 gap-5 cursor-pointer rounded-lg hover:bg-blue-700 hover:text-white "
                  to="/dashboard"
                >
                  <LifeBuoy size={28} />
                  <h1 className="font-light">Dashboard</h1>
                </NavLink>
                <NavLink
                  className="flex p-2 text-blue-700 gap-5 cursor-pointer rounded-lg hover:bg-blue-700 hover:text-white "
                  to="/transfer"
                >
                  <Send size={28} />
                  <h1 className="font-light">Transfer</h1>
                </NavLink>
                <NavLink
                  className="flex p-2 text-blue-700 gap-5 cursor-pointer rounded-lg hover:bg-blue-700 hover:text-white "
                  to="/history"
                >
                  <History size={28} />
                  <h1 className="font-light">History</h1>
                </NavLink>
                <NavLink
                  className="flex p-2 text-blue-700 gap-5 cursor-pointer rounded-lg hover:bg-blue-700 hover:text-white "
                  to="/top-up"
                >
                  <BanknoteArrowUp size={28} />
                  <h1 className="font-light">Top Up</h1>
                </NavLink>
              </div>
              <button
                className="flex p-2 text-red-700 gap-5 cursor-pointer  rounded-lg hover:bg-blue-700 hover:text-white "
                onClick={onLogoutClick}
              >
                <LogOut className="rotate-180" />
                <h3>Keluar</h3>
              </button>
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
    </>
  );
};

export default NavbarDropdown;

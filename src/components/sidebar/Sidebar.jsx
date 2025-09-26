import {
  BanknoteArrowUp,
  History,
  LifeBuoy,
  LogOut,
  Send,
  UserRoundPen,
} from "lucide-react";
import { useDispatch } from "react-redux";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { logout } from "../../store/authSlice";
import { persistor } from "../../store/store";

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const baseClass =
    "flex gap-5 cursor-pointer items-center p-2 rounded-xl hover:bg-blue-600 hover:text-white";

  const activeClass = "bg-blue-600 text-white";

  const handleLogout = (e) => {
    e.preventDefault();
    toast.success("Anda Telah berhasil keluar", {
      position: "top-right",
      autoClose: 1000,
    });

    dispatch(logout());
    persistor.purge();

    navigate("/");
  };

  return (
    <aside className="hidden lg:flex lg:w-1/5 min-h-screen border-r-1 border-gray-300">
      <nav className="flex flex-col gap-2 p-5 w-full">
        <NavLink
          className={({ isActive }) =>
            isActive ? `${baseClass} ${activeClass}` : baseClass
          }
          to="/dashboard"
        >
          <LifeBuoy size={28} />
          <h1 className="font-light">Dashboard</h1>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? `${baseClass} ${activeClass}` : baseClass
          }
          to="/transfer"
        >
          <Send size={28} />
          <h1 className="font-light">Transfer</h1>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? `${baseClass} ${activeClass}` : baseClass
          }
          to="/history"
        >
          <History size={28} />
          <h1 className="font-light">History</h1>
        </NavLink>
        <NavLink
          className="flex gap-5 cursor-pointer items-center p-3 rounded-xl hover:bg-blue-500 hover:text-white"
          href="#"
        >
          <BanknoteArrowUp size={28} />
          <h1 className="font-light">Top Up</h1>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? `${baseClass} ${activeClass}` : baseClass
          }
          to="/profile"
        >
          <UserRoundPen size={28} />
          <h1 className="font-light">Profile</h1>
        </NavLink>
        <button
          className="flex gap-5 cursor-pointer text-red-600 items-center p-3 rounded-xl hover:bg-blue-500 hover:text-white"
          onClick={handleLogout}
        >
          <LogOut className="rotate-180" />
          <h3>Keluar</h3>
        </button>
      </nav>
    </aside>
  );
};

export default Sidebar;

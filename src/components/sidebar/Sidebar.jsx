import {
  BanknoteArrowUp,
  History,
  LifeBuoy,
  LogOut,
  Send,
  UserRoundPen,
} from "lucide-react";

const Sidebar = () => {
  return (
    <aside className="hidden lg:flex lg:w-1/6 min-h-screen border-r-1 border-gray-300">
      <nav className="flex flex-col p-5 w-full">
        <a
          className="flex gap-5 cursor-pointer items-center p-3 rounded-xl hover:bg-blue-500 hover:text-white"
          href="#"
        >
          <LifeBuoy size={28} />
          <h1 className="font-light">Dashboard</h1>
        </a>
        <a
          className="flex gap-5 cursor-pointer items-center p-3 rounded-xl hover:bg-blue-500 hover:text-white"
          href="#"
        >
          <Send size={28} />
          <h1 className="font-light">Transfer</h1>
        </a>
        <a
          className="flex gap-5 cursor-pointer items-center p-3 rounded-xl hover:bg-blue-500 hover:text-white"
          href="#"
        >
          <History size={28} />
          <h1 className="font-light">History</h1>
        </a>
        <a
          className="flex gap-5 cursor-pointer items-center p-3 rounded-xl hover:bg-blue-500 hover:text-white"
          href="#"
        >
          <BanknoteArrowUp size={28} />
          <h1 className="font-light">Top Up</h1>
        </a>
        <a
          className="flex gap-5 cursor-pointer items-center p-3 rounded-xl hover:bg-blue-500 hover:text-white"
          href="#"
        >
          <UserRoundPen size={28} />
          <h1 className="font-light">Profile</h1>
        </a>
        <a
          className="flex gap-5 cursor-pointer text-red-600 items-center p-3 rounded-xl hover:bg-blue-500 hover:text-white"
          href="#"
        >
          <LogOut className="rotate-180" />
          <h3>Keluar</h3>
        </a>
      </nav>
    </aside>
  );
};

export default Sidebar;

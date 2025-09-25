import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/navbar";
import Sidebar from "../components/sidebar/Sidebar";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen flex">
        <Sidebar />
        <div className="w-full relative">
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;

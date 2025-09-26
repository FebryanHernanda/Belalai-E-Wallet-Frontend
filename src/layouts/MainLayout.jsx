import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/sidebar/Sidebar";
import { useState } from "react";

const MainLayout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <main className="min-h-screen flex" onClick={() => setIsMenuOpen(false)}>
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

import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/Footer";

const LandingLayout = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen flex">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default LandingLayout;

// import "./index.css";
import { Route, Routes } from "react-router-dom";
import Register from "../pages/register/register";
// import About from "../pages/about/About";

function MainRoutes() {
  return (
    <>
      {/* <nav>
        <h1 className="text-red-500">Home</h1>
      </nav> */}

      {/* Routes */}
      <Routes>
        <Route path="/register" element={<Register />} />
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>
      {/* Routes */}
    </>
  );
}

export default MainRoutes;

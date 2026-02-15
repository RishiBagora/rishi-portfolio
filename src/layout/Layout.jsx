import { Outlet } from "react-router-dom";
import MagneticCursor from "../components/MagneticCursor";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import GridOverlay from "../components/GridOverlay";

const Layout = () => {
  return (
    <div className="relative min-h-screen z-10">
        <MagneticCursor/>
      <GridOverlay />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;

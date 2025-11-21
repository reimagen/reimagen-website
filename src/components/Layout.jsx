import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";


export default function Layout() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Navbar spans full width */}
      <Navbar />

      {/* Page content is centered */}
      <main className={`flex-grow w-full ${isHome ? "" : "pt-24"}`}>
        <Outlet />
      </main>

      {/* Footer spans full width */}
      <Footer />
    </div>
  );
}

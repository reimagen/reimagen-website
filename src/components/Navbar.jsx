import { Link, useLocation } from "react-router-dom";

const NAV_LINKS = [
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
  { to: "/gallery", label: "Gallery" },
  { to: "/toolkit", label: "Toolkit" },
];

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 flex justify-between items-center py-4 px-12 bg-black/40 backdrop-blur text-white shadow border-b border-white/10 z-50">
      <Link to="/">
        <h1 className="text-2xl tracking-[0.12em] text-brand-lavender">reimagen</h1>
      </Link>
      <ul className="flex gap-6 text-md tracking-[0.12em]">
        {NAV_LINKS.map(({ to, label }) => {
          const isActive = location.pathname === to;
          return (
            <li key={label}>
              <Link
                to={to}
                className={isActive ? "text-brand-lavender" : "text-white hover:text-brand-lavender/70 transition"}
              >
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

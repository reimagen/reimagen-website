import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const NAV_LINKS = [
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
  { to: "/gallery", label: "Gallery" },
  { to: "/toolkit", label: "Toolkit" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const renderLinks = (itemClass = "") => (
    NAV_LINKS.map(({ to, label }) => {
      const isActive = location.pathname === to;
      return (
        <li key={label}>
          <Link
            to={to}
            className={`${itemClass} ${isActive ? "text-brand-lavender" : "text-white hover:text-brand-lavender/70 transition"}`.trim()}
          >
            {label}
          </Link>
        </li>
      );
    })
  );

  return (
    <nav className="fixed inset-x-0 top-4 px-4 md:px-8 z-50">
      <div className="bg-black/40 backdrop-blur text-white border border-white/10 rounded-2xl px-4 md:px-6 py-3 md:py-4 shadow-none">
        <div className="flex items-center justify-between">
          <Link to="/">
            <h1 className="text-2xl tracking-[0.12em] text-brand-lavender">reimagen</h1>
          </Link>

          <button
            type="button"
            className="md:hidden inline-flex flex-col gap-1.5 rounded border border-white/30 px-3 py-2"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
          >
            <span className="block h-0.5 w-6 bg-white" />
            <span className="block h-0.5 w-6 bg-white" />
            <span className="block h-0.5 w-6 bg-white" />
          </button>

          <ul className="hidden md:flex gap-6 text-md tracking-[0.12em]">
            {renderLinks()}
          </ul>
        </div>

        {isMenuOpen && (
          <ul className="mt-4 flex flex-col gap-4 text-sm tracking-[0.2em] md:hidden border-t border-white/10 pt-4 text-right">
            {renderLinks("block")}
          </ul>
        )}
      </div>
    </nav>
  );
}

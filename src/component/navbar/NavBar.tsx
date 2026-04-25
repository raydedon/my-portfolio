"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Blogs", href: "/blogs" },
  { label: "Contact", href: "/#contact" },
];

const NavBar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    if (href === pathname) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50">
        <div className="flex items-center justify-end px-4 h-16">
          <button
            className="sm:hidden p-2 text-gray-800"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="toggle navigation"
          >
            {mobileOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
          <div className="hidden sm:flex gap-1">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => handleNavClick(item.href)}
                className="px-4 py-2 text-gray-800 hover:text-green-700 font-medium"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {mobileOpen && (
        <div className="fixed inset-0 z-40 sm:hidden">
          <div
            className="absolute inset-0 bg-black/30"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute left-0 top-0 bottom-0 w-60 bg-white shadow-lg pt-16">
            <ul>
              {navItems.map((item) => (
                <li key={item.label}>
                  <Link
                    key={item.label}
                    href={item.href}
                    className="block w-full px-4 py-3 text-center hover:bg-gray-100"
                    onClick={() => handleNavClick(item.href)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;

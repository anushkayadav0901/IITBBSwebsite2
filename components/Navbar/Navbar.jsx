"use client";

import React, { useState } from "react";
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Facilities", href: "#facilities" },
  { name: "Rooms", href: "#rooms" },
  { name: "Mess", href: "#mess" },
  { name: "Activities", href: "#activities" },
  { name: "Gallery", href: "#gallery" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
  { name: "About Us", href: "/about" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur shadow-lg transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 lg:py-5">
        <Link href="/" className="text-2xl font-bold tracking-wide text-[#e52d27] hover:text-[#b31217] transition-colors duration-200">
          IIT Bhubaneswar Hostel
        </Link>
        <div className="lg:hidden">
          <button
            className="text-3xl text-[#e52d27] focus:outline-none"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Toggle menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
        <ul className="hidden lg:flex gap-8 items-center font-semibold text-lg">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="relative px-3 py-2 transition-all duration-200 rounded hover:bg-[#e52d27] hover:text-white focus:bg-[#e52d27] focus:text-white"
              >
                {link.name}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#e52d27] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/* Mobile menu */}
      {menuOpen && (
        <ul className="lg:hidden flex flex-col gap-2 px-4 pb-4 bg-white/95 shadow-md animate-fade-in-down">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="block px-3 py-3 rounded text-lg font-semibold text-[#e52d27] hover:bg-[#e52d27] hover:text-white transition-all duration-200"
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
      <style jsx>{`
        @media (max-width: 1024px) {
          .animate-fade-in-down {
            animation: fadeInDown 0.3s;
          }
          @keyframes fadeInDown {
            from {
              opacity: 0;
              transform: translateY(-20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        }
      `}</style>
    </nav>
  );
}

export default Navbar;

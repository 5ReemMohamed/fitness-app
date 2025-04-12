"use client";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { FaBars } from "react-icons/fa";
import { IoFitnessSharp } from "react-icons/io5";

export default function Navbar() {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Exercises", path: "/exercises" },
    { name: "Contact", path: "/contact" },
  ];

  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

 
  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="p-4 bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container flex justify-between items-center">
       
        <div className="flex items-center gap-2">
          <IoFitnessSharp className="text-3xl text-[#ff5e18]" />
          <Link href="/" className="uppercase text-2xl font-bold">
            Fit<span className="text-[#ff5e18]">nase</span>
          </Link>
        </div>

       
        <ul
          className={`md:flex gap-5 absolute md:static w-full md:w-auto left-0 top-16 p-4 lg:p-0 transition-all duration-500
            ${menuOpen ? "block bg-black/70" : "hidden"} md:bg-transparent`}
        >
          {navLinks.map((link) => (
            <li key={link.path} className="md:mb-0 mb-4 font-semibold">
              <Link
                href={link.path}
                onClick={handleLinkClick}
                className={`block px-4 py-2 text-center ${
                  pathname === link.path
                    ? "text-[#ff5e18]"
                    : "text-white md:text-[#161616]"
                } hover:text-[#ff5e18]`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

      
        <div
          className="md:hidden text-[#ff5e18] cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          <FaBars size={24} />
        </div>
      </div>
    </nav>
  );
}

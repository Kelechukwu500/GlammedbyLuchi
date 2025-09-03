import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.jpg"; // Assuming you have a logo image

const Navbar = () => {
  return (
    <nav className="w-screen bg-black text-white shadow-lg fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between px-6 py-4 gap-4 sm:gap-0">
        {/* ✅ Logo on the Left */}
        <div className="flex items-center justify-center sm:justify-start w-full sm:w-auto">
          <img
            src={Logo}
            alt="Logo"
            className="h-20 w-auto rounded-full object-contain -mt-2 -mb-2"
          />
        </div>

        {/* ✅ GlammedByLuchi Animation slightly left */}
        <div className="flex items-center gap-1 text-sm justify-center w-full sm:absolute sm:left-[48%] sm:transform sm:-translate-x-1/2">
          <span className="px-1 bg-rose-500 rounded-full animate-[ping_1.9s_linear_infinite]">
            G
          </span>
          <span className="px-1 bg-rose-500 rounded-full animate-[ping_2s_linear_infinite]">
            L
          </span>
          <span className="px-1 bg-rose-500 rounded-full animate-[ping_2.1s_linear_infinite]">
            A
          </span>
          <span className="px-1 bg-rose-500 rounded-full animate-[ping_2.2s_linear_infinite]">
            M
          </span>
          <span className="px-1 bg-rose-500 rounded-full animate-[ping_2.3s_linear_infinite]">
            M
          </span>
          <span className="px-1 bg-rose-500 rounded-full animate-[ping_2.4s_linear_infinite]">
            E
          </span>
          <span className="px-1 bg-rose-500 rounded-full animate-[ping_2.4s_linear_infinite]">
            D
          </span>
          <span className="px-1 bg-rose-500 rounded-full animate-[ping_2.5s_linear_infinite]">
            B
          </span>
          <span className="px-1 bg-rose-500 rounded-full animate-[ping_2.6s_linear_infinite]">
            Y
          </span>
          <span className="px-1 bg-rose-500 rounded-full animate-[ping_2.7s_linear_infinite]">
            L
          </span>
          <span className="px-1 bg-rose-500 rounded-full animate-[ping_2.8s_linear_infinite]">
            U
          </span>
          <span className="px-1 bg-rose-500 rounded-full animate-[ping_2.9s_linear_infinite]">
            C
          </span>
          <span className="px-1 bg-rose-500 rounded-full animate-[ping_3s_linear_infinite]">
            H
          </span>
          <span className="px-1 bg-rose-500 rounded-full animate-[ping_3.1s_linear_infinite]">
            I
          </span>
        </div>

        {/* ✅ Right Nav Links */}
        <ul className="flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-8 w-full sm:w-auto text-lg font-medium">
          <li>
            <Link to="/hero" className="hover:text-yellow-400 transition">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-yellow-400 transition">
              About Me
            </Link>
          </li>
          <li>
            <Link to="/gallery" className="hover:text-yellow-400 transition">
              Gallery
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-yellow-400 transition">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

import React from "react";
import { FaWhatsapp, FaArrowUp, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-screen bg-gray-100 text-gray-600 py-6 px-4">
      <div className="flex flex-col md:flex-row justify-between items-center">
        {/* Left: WhatsApp + Instagram */}
        <div className="flex items-center gap-4 mb-4 md:mb-0 pl-2 sm:pl-0">
          <a
            href="https://api.whatsapp.com/send?phone=2348160023604&text=Hello%2C%20I%20truly%20admire%20the%20elegance%20and%20creativity%20in%20your%20makeup%20style."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-green-500 hover:text-green-600 font-semibold"
          >
            <FaWhatsapp size={20} />
            WhatsApp
          </a>

          <a
            href="https://www.instagram.com/glammedbyluchi?igsh=MWs1YnZodnIweDA2Yw=="
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-pink-500 hover:text-pink-600 font-semibold"
          >
            <FaInstagram size={20} />
            Instagram
          </a>
        </div>

        {/* Center: Copyright */}
        <div className="text-center mb-4 md:mb-0">
          <span className="block text-sm font-medium">
            © 2025. All rights reserved. Created by Kaycee Tech.
          </span>
        </div>

        {/* Right: Back to Top */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-1 text-blue-600 hover:text-blue-800 font-semibold"
        >
          <FaArrowUp size={16} />
          Back to Top
        </button>
      </div>
    </footer>
  );
};

export default Footer;

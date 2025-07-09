"use client";

import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white mt-auto border-t border-gray-700">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-8">
          {/* Company Info */}
          <div className="text-center md:text-left">
            <p className="text-sm text-gray-300">
              &copy; {year} Advent NuruTech. All rights reserved.
            </p>
            <p className="text-xs text-gray-400 mt-1">
              Empowering you with smart technology.
            </p>
          </div>

          {/* Social Media Links */}
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition text-2xl"><FaFacebookF /></a>
              <a href="#" className="text-gray-400 hover:text-white transition text-2xl"><FaTwitter /></a>
              <a href="#" className="text-gray-400 hover:text-white transition text-2xl"><FaLinkedinIn /></a>
              <a href="#" className="text-gray-400 hover:text-white transition text-2xl"><FaInstagram /></a>
              <a href="https://youtube.com/@youngevangelistsministry8232?si=6FCkwkK5YeZEjYG2" className="text-gray-400 hover:text-white transition text-2xl"><FaYoutube /></a>
              <a href="#" className="text-gray-400 hover:text-white transition text-2xl"><FaWhatsapp /></a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-400"> Kenya-Africa</p>
            <p className="text-gray-400">📧 nurutech36@gmail.com</p>
            <p className="text-gray-400">📞 +254 105178685</p>
          </div>
        </div>

        {/* Blessing Note */}
        <div className="mt-6 pt-6 border-t border-gray-700 text-center">
          <p className="text-xs text-gray-400">
            God bless you for visiting us. Maranatha
          </p>
        </div>
      </div>
    </footer>
  );
}

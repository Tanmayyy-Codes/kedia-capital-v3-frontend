import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white px-6 py-4 md:px-20 flex justify-between items-center">
      {/* Logo */}
      <div className="flex-shrink-0">
        <Link to="/">
          <img src="logo.png" alt="logo" className="h-12 w-auto" />
        </Link>
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
        <li>
          <Link to="/" className="hover:text-blue-600 transition duration-300">
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/news"
            className="hover:text-blue-600 transition duration-300"
          >
            News
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="hover:text-blue-600 transition duration-300"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className="hover:text-blue-600 transition duration-300"
          >
            Contact
          </Link>
        </li>
      </ul>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-gray-700"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <IoCloseSharp size={28} /> : <IoMenu size={28} />}
      </button>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-16 h-[100%] left-0 w-full bg-white shadow-lg flex flex-col items-center space-y-4 py-4 md:hidden">
          <Link
            to="/"
            className="text-gray-700 hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/news"
            className="text-gray-700 hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            News
          </Link>
          <Link
            to="/about"
            className="text-gray-700 hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-gray-700 hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

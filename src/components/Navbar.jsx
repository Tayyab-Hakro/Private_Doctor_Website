import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { FaBars, FaTimes, FaPaw, FaHome, FaUserAlt, FaEnvelope } from 'react-icons/fa';

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const navigate = useNavigate();

  const menuHandler = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div className="sticky top-0 bg-white shadow-md z-50">
      {/* Navbar */}
      <div className="w-full h-20 flex justify-between items-center border-b px-5">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <FaPaw size={30} className="text-blue-600" />
          <Link to="/">
            <h1 className="text-2xl font-bold text-blue-600">Pet Care</h1>
          </Link>
        </div>

        {/* Center Navigation Links */}
        <ul className="hidden md:flex text-lg gap-8 text-black items-center">
          <Link to="/">
            <li className="relative group cursor-pointer flex items-center gap-2">
              Home
              <span className="absolute left-0 bottom-0 h-0.5 w-full bg-blue-300 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </li>
          </Link>
          <Link to="/services">
            <li className="relative group cursor-pointer">
              Services
              <span className="absolute left-0 bottom-0 h-0.5 w-full bg-blue-300 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </li>
          </Link>
          <Link to="/about">
            <li className="relative group cursor-pointer">
              About Us
              <span className="absolute left-0 bottom-0 h-0.5 w-full bg-blue-300 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </li>
          </Link>
          <Link to="/contact">
            <li className="relative group cursor-pointer">
              Contact
              <span className="absolute left-0 bottom-0 h-0.5 w-full bg-blue-300 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </li>
          </Link>
        </ul>

        {/* Book Appointment Button */}
        <div className="hidden md:block">
          <button
            onClick={() => navigate('/book-appointment')}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Book Appointment
          </button>
        </div>

        {/* Hamburger Menu */}
        <div className="md:hidden">
          {openMenu ? (
            <FaTimes
              onClick={menuHandler}
              className="cursor-pointer w-8 h-8 text-blue-600"
            />
          ) : (
            <FaBars
              onClick={menuHandler}
              className="cursor-pointer w-8 h-8 text-blue-600"
            />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <ul
        className={`fixed md:hidden top-15 left-0 w-full bg-blue-500 text-white flex flex-col items-center gap-5 p-5 
        transform transition-transform duration-500 ease-in-out 
        ${openMenu ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <Link to="/">
          <li className="flex items-center gap-2">
            Home
          </li>
        </Link>
        <Link to="/services">
          <li>Services</li>
        </Link>
        <Link to="/about">
          <li>About Us</li>
        </Link>
        <Link to="/contact">
          <li className="flex items-center gap-2">
            <FaEnvelope />
            Contact
          </li>
        </Link>
        <button
          onClick={() => navigate('/book-appointment')}
          className="px-4 py-2 bg-white text-blue-600 rounded hover:bg-gray-100"
        >
          Book Appointment
        </button>
      </ul>
    </div>
  );
}

export default Navbar;

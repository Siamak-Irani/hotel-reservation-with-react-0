import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaAlignRight } from "react-icons/fa";
import logo from "../files/images/logo.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className="fixed top-0 left-0 w-full
     py-3 px-8 bg-offWhite z-1"
    >
      <div
        className="nav-center md:max-w-1170px md:my-0
       md:mx-auto md:flex"
      >
        <div className="flex justify-between">
          <Link to="/">
            <img src={logo} alt="Beach Resort" />
          </Link>
          <button
            type="button"
            className="bg-transparent border-none cursor-pointer
            outline-none md:hidden"
            onClick={handleToggle}
          >
            <FaAlignRight className="text-2xl text-primaryColor" />
          </button>
        </div>
        <ul
          className={`h-0 overflow-hidden transition-mainTransition
          list-none md:h-auto md:flex md:ml-1 ${isOpen ? "h-24" : ""}`}
        >
          <li>
            <Link
              to="/"
              className="block no-underline py-4 px-0
            text-mainBlack transition-mainTransition text-center
            text-base font-semibold tracking-mainSpacing
            hover:text-primaryColor md:my-0 md:mx-4 md:py-2
             md:px-0"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/rooms"
              className="block no-underline py-4 px-0
            text-mainBlack transition-mainTransition text-center
            text-base font-semibold tracking-mainSpacing
            hover:text-primaryColor md:my-0 md:mx-4 md:py-2
             md:px-0"
            >
              Rooms
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

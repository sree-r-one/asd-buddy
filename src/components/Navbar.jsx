import React from "react";
import { logo, logoASDBuddy } from "../assets";

const links = [
  {
    name: "home",
    displayText: "Home",
    path: "/",
  },
  {
    name: "courses",
    displayText: "Courses",
    path: "/courses",
  },
  {
    name: "freedom",
    displayText: "Freedom",
    path: "/freedom",
  },
  {
    name: "blog",
    displayText: "Blog",
    path: "/blog",
  },
  {
    name: "community",
    displayText: "Community",
    path: "/community",
  },
  {
    name: "book",
    displayText: "Book",
    path: "/book",
  },
  {
    name: "faq",
    displayText: "FAQ",
    path: "/faq",
  },
];

const Navbar = () => {
  return (
    <nav className="relative mx-auto rounded-b-lg bg-white px-6 py-4 drop-shadow-lg">
      {/* flex container */}
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="pt-2">
          <img src={logoASDBuddy} alt="" className="h-12" />
        </div>

        {/* Menu items  */}
        <div className="hidden items-center justify-center space-x-6 md:flex">
          {links.map((link, i) => (
            <a href="#" key={i} className="hover:text-darkGrayishBlue">
              {link.displayText}
            </a>
          ))}
          {/* <a href="# " className="hover:text-darkGrayishBlue">
            Pricing
          </a>
          <a href="#" className="hover:text-darkGrayishBlue">
            Product
          </a>
          <a href="#" className="hover:text-darkGrayishBlue">
            About Us
          </a>
          <a href="#" className="hover:text-darkGrayishBlue">
            Careers
          </a>
          <a href="#" className="hover:text-darkGrayishBlue">
            Community
          </a>
          <a href="#" className="hover:text-darkGrayishBlue">
            Pricing
          </a> */}
          {/* Button */}
          <a
            href="#"
            className="bg-buddyBlue hover:bg-buddyBlueLight rounded-full px-6 py-2 text-white"
          >
            login
          </a>
        </div>

        {/* Hamburger Icon */}
        <button
          id="menu-btn"
          className="hamburger block focus:outline-none md:hidden"
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>
      {/* <!-- Mobile Menu --> */}
    </nav>
  );
};

export default Navbar;

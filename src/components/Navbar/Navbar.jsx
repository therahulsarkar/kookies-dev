import React from "react";
import { Link } from "react-router-dom";
import Styles from "./Header.module.css";

import { BiGridSmall } from "react-icons/bi";
const Navbar = () => {
  return (
    <header className="text-gray-600 body-font ">
  <div className="  flex justify-between p-5">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <span className="ml-3 text-2xl">kookies</span>
    </a>
    <div className="flex flex-row">
    <nav className=" mt-2  hidden sm:block">
      <Link to="/contact" className="mr-5 font-medium hover:text-gray-900 cursor-pointer">Contact</Link>
    </nav>
    <button className="inline-flex items-center rounded-sm focus:outline-none hover:bg-gray-200">
      <BiGridSmall size={35}/>
    </button>
    </div>
  </div>
</header>
  );
};

export default Navbar;

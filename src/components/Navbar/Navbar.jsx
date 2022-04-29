import React, { useState } from "react";
import { Link } from "react-router-dom";
import Styles from "./Navbar.module.css";
import Logo from '../../assets/images/logo.png'
import { BiGridSmall } from "react-icons/bi";
import NavMenu from "../NavMenu/NavMenu";
import RubberBand from 'react-reveal/RubberBand';

const Navbar = ({ clickButton }) => {
  // const [toggle, setToggle] = useState(false);

  return (
    <header className="text-gray-600 body-font ">
      <div className="  flex justify-between p-5">
      <RubberBand>
        <a href="/" className="flex title-font ml-4 font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img src={Logo} alt="Logo" width={120} />
        </a></RubberBand>
        <div className="flex flex-row ">
          <nav className=" hidden sm:block self-center">
            <Link
              to="/contact"
              className="mr-5 font-medium hover:text-gray-900 cursor-pointer"
            >
              Contact
            </Link>
          </nav>
          <span className="flex justify-center ">
          <button
            className="self-center  z-10 rounded-sm focus:outline-none "
            onClick={() => clickButton()}
          >
            <BiGridSmall size={35} />
          </button></span>
        </div>
      </div>

      {/* {toggle && <NavMenu/>} */}
    </header>
  );
};

export default Navbar;

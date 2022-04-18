import React, { useState } from "react";
import Styles from "./NavMenu.module.css";
import { Link } from "react-router-dom";
import { BiGridSmall } from "react-icons/bi";
import navBg from "../../assets/images/home/navBg.svg";

const NavMenu = ({ clickButtonFromNavMenu }) => {
  const [hollow1, setHollow1] = useState(false);
  const [hollow2, setHollow2] = useState(false);
  const [hollow3, setHollow3] = useState(false);
  const [hollow4, setHollow4] = useState(false);
  const [hollow5, setHollow5] = useState(false);

  return (
    <>
      <header className="text-white body-font bg-black ">
        <div className="  flex justify-between p-5">
          <a
            href="/"
            className="flex title-font font-medium items-center text-white mb-4 md:mb-0"
          >
            <span className="ml-3 text-2xl">kookies</span>
          </a>
          <div className="flex flex-row">
            <nav className=" mt-2  hidden sm:block">
              <Link
                to="/contact"
                className="mr-5 font-medium hover:text-gray-900 cursor-pointer"
              >
                Contact
              </Link>
            </nav>
            <button className="inline-flex items-center z-10 rounded-sm focus:outline-none hover:bg-gray-200"
            onClick={() => clickButtonFromNavMenu()}
            >
              <BiGridSmall size={35} />
            </button>
          </div>
        </div>

        {/* {toggle && <NavMenu/>} */}
      </header>

      <section className={` ${Styles.navMenuContainer}  `}>
        {/* <img src={navBg}/> */}
        <h1>Kookies</h1>

        <div className="">
          <Link
            to="/"
            onMouseOver={() => {
              setHollow1(true);
            }}
            onMouseLeave={() => setHollow1(false)}
            className={`${hollow1 ? "hollow" : "noHollow"}`}
          >
            {" "}
            <p>Home </p>
          </Link>
          <Link
            to="/approach"
            onMouseOver={() => {
              setHollow2(true);
            }}
            onMouseLeave={() => {
              setHollow2(false);
            }}
            className={`${hollow2 ? "hollow" : "noHollow"}`}
          >
            {" "}
            <p>Approach</p>
          </Link>
          <Link
            to="/work"
            onMouseOver={() => {
              setHollow3(true);
            }}
            onMouseLeave={() => {
              setHollow3(false);
            }}
            className={`${hollow3 ? "hollow" : "noHollow"}`}
          >
            {" "}
            <p>Work</p>
          </Link>
          <Link
            to="/career"
            onMouseOver={() => {
              setHollow4(true);
            }}
            onMouseLeave={() => {
              setHollow4(false);
            }}
            className={`${hollow4 ? "hollow" : "noHollow"}`}
          >
            <p> Career</p>
          </Link>
          <Link
            to="/about"
            onMouseOver={() => {
              setHollow5(true);
            }}
            onMouseLeave={() => {
              setHollow5(false);
            }}
            className={`${hollow5 ? "hollow" : "noHollow"}`}
          >
            <p> About Us</p>
          </Link>
        </div>
      </section>
    </>
  );
};

export default NavMenu;

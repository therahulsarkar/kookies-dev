import React from "react";
import Styles from "./Banner.module.css";
import { HiChevronRight } from "react-icons/hi";

const Banner = ({ text, coloredText }) => {
  return (
    <section className={`${Styles.heroSection}`}>
      <h1 className="px-6 sm:px-20">
        {text.slice(0, 23)} <br />
        {text.slice(22, 28)}
        <span className={Styles.gradientText}> {coloredText.slice(0, 4)}</span> { text.slice(28, 33) } { " "} 
        <span className={Styles.gradientText}>{coloredText.slice(4, 15)}</span>
      </h1>

      <div className="flex flex-row rotate-90">
        <p className="mr-2">Scroll</p>
        <div className={Styles.line}></div>

        <HiChevronRight />
      </div>

      {/* <span className={Styles.heroBg}>
          <h1>KOOKIES</h1>
          <h1>KOOKIES</h1>
        </span> */}
    </section>
  );
};

export default Banner;

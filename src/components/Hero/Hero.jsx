import React from "react";
import Styles from "./Hero.module.css";
import { HiChevronRight } from "react-icons/hi";
import bgText from "../../assets/images/home/bgText.svg";

const Hero = () => {
  return (
    <section className={`${Styles.heroSection}`}>
      <h1 className="px-6 sm:px-20">
        At Kookies <br /> we bake <span className="gradientText"> dreams</span>{" "}
        to your <span className="gradientText">desire</span> <br />
        with the ingredients of <br />{" "}
        <span className="gradientText">technology</span> and{" "}
        <span className="gradientText">designing</span> skills
      </h1>

      <div className="flex flex-row rotate-90  ">
        <p className="mr-4">Scroll</p>
        <div className={Styles.line}></div>
       <span className="flex justify-center align-middle "><HiChevronRight /></span>
      </div>

      {/* <span className={Styles.heroBg}>
         <img src={bgText} alt="Kookies"/>
         <img src={bgText} alt="Kookies" />
        </span> */}
    </section>
  );
};

export default Hero;

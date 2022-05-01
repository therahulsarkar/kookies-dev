import React from "react";
import Styles from "./Workflow.module.css";
import { Link } from "react-router-dom";
import { BlackButton } from "../../shared/BlackButton/BlackButton";
import { FaQuoteLeft } from "react-icons/fa";
import homeImg from "../../assets/images/home/home1.svg";
import Quote from "../../assets/images/quote.svg";

import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';


const Approach = () => {
  return (
    <section className={`paddingX  ${Styles.approach}`}>
      <div className="flex flex-row gap-8 py-6 justify-between px-1 ">
      <Fade bottom cascade>
        <div
          className={`flex flex-col text-left   mb-0 pl-8 ${Styles.approachText} basis-6/12 `}
        >
          <h1 className="titleFont">The Workflow</h1>

          <span className="mt-8 -mb-4">
            <img src={Quote} alt="Quote"/>
          </span>
          <h2 className="-mt-2">
            An Excellent Process is the blueprint to success.{" "}
          </h2>
          <p>
            Inspired by the philosophy, Kookies discovered a <br /> Spectacular
            formula to build brilliance with a perfect
            <br /> combination of Design and Development Strategies.{" "}
          </p>

          <h3>We would love to share that secret with you!</h3>
          <Slide left >
          <div>
            <BlackButton url="approach" text="CHECK NOW" />
          </div></Slide>
        </div>
        </Fade>


        <div className="basis-6/12 relative flex justify-center">
          <span className={`${Styles.homeImageBg}`}>
            <img src={homeImg} alt="About" />
          </span>
        </div>

      </div>
      <div className={Styles.purpleBg}></div>
    </section>
  );
};

export default Approach;

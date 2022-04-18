import React from "react";
import Layout from "../../utils/Layout";
import Styles from "./Career.module.css";
import { HiChevronRight } from "react-icons/hi";
import BlackSection from "../../shared/BlackSection/BlackSection";
import JobOpening from "../../shared/JobOpening/JobOpening";

const Career = () => {
  document.title = "Career";

  return (
    <Layout>
      <section className={`${Styles.heroSection}`}>
        <h1 className="px-6 sm:px-20">
          Be the one to <br /> embrace the
          <span className={Styles.geadientText}> glory</span> with us!
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

      <section
        className={`flex justify-center text-center  ${Styles.BlackBg}`}
      >
        <div className="flex flex-col">
          <p className="">
            At Kookies, we always crave creativity, passion and exceptional{" "}
            <br />
            craftsmanship. If you possess the same thirst and craving, join us
            on our
            <br /> caravan to write the most reknowned success stories and
            ashtonishing <br /> experiences in the universe of technology.{" "}
            <br />
            <br />
            Let &#x27;s leave our trace behind for the world to admire!
          </p>
        </div>
      </section>

      <section className={` body-font ${Styles.approach}`}>
        <div className=" py-16 ">
          <div
            className={`flex flex-col text-left  mb-0 pl-8 ${Styles.approachText}`}
          >
            <h1 className="text-gray-900 pb-5">Current Openings</h1>
          </div>

          <JobOpening title="Front End Developer ( 1 )" description="We are looking for front end developers who are motivated, passionate about programming, result-oriented, believe in leading from the front, and are always willing to go the extra mile. The role requires a talented, self-directed individual with a strong work ethic." link="approach"/>
          <hr className="mt-10 mb-10 w-4/5"/>
          <JobOpening  title="Back End Developer ( 1 )" description="We are looking for back end developers who are motivated, passionate about programming, result-oriented, believe in leading from the front, and are always willing to go the extra mile. The role requires a talented, self-directed individual with a strong work ethic." link="about"/>

        </div>
  </section>
    </Layout>
  );
};

export default Career;

import React from "react";
import Layout from "../../utils/Layout";
import Styles from "./Approach.module.css";
import { HiChevronRight } from "react-icons/hi";
import BlackSection from "../../shared/BlackSection/BlackSection";
import { BlackButton } from "../../shared/BlackButton/BlackButton";

const Approach = () => {
  document.title = "Our Approach";

  return (
    <Layout>
      <section className={`${Styles.heroSection}`}>
        <h1 className="px-6 sm:px-20">
          Our
          <span className={Styles.geadientText}> Secret</span> Formula
        </h1>

        <span className="my-10">
          <BlackButton text="SEE MORE" />
        </span>
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

      <BlackSection
        sign="true"
        breakValue={70}
        text="The world &#x27;s best cookies are baked with dough of unseizable passion, with a pinch of insanity and a whole lot of flavor of dreams."
      />

      <section className={` body-font ${Styles.approach}`}>
        <div className=" py-16 ">
          <div
            className={`flex flex-col text-left  mb-0 pl-8 ${Styles.approachText}`}
          >
            <h1 className="text-gray-900 pb-5">Our Approach</h1>
          </div>

          {/* 1 Strategic planning */}
          <div
            className={`flex flex-row justify-between ml-8 ${Styles.ApproachSection}`}
          >
            {/* Left row */}
            <div className="basis-3/6">
              <div className={`flex flex-row ${Styles.number} `}>
                <h1>01</h1>
                <h2 className="top-5 ml-4">Strategic Planning</h2>
              </div>
              <p className="mt-6 ">
                Initializing, the first step is always about the dream, the most
                important ingredient of all greatness. We start by understanding
                your vision, learning about every possibility. <br />
                We help discover the best user experience by performing
                brainstorming workshops, not leaving any stone unturned. We
                research and analyze all possible risks and plan for effective
                solutions for unstoppable development. <br />
                Accordingly we choose the most adequate technology to deliver an
                ultimate user experience.
              </p>
            </div>
            {/* Right row */}
            <div
              className={`bg-blue-200 basis-2/6 flex justify-start items-center pl-6 ${Styles.list}`}
            >
              <span>
                <ul className="leading-6">
                  <li className="">Product Research</li>
                  <li className="mt-2">User Experience Research</li>
                  <li className="mt-2">Feature Scoping</li>
                  <li className="mt-2">Brainstorming Workshops</li>
                  <li className="mt-2">Risk Analysis</li>
                  <li className="mt-2">Technology Management</li>
                </ul>
              </span>
            </div>
          </div>

          {/* 2  Designing & Development*/}
          <div
            className={`flex flex-row justify-between ml-8  ${Styles.ApproachSection}`}
          >
            {/* Left row */}
            <div className="basis-3/6 order-2">
              <div className={`flex flex-row ${Styles.number} `}>
                <h1>02</h1>
                <h2 className="top-5 ml-4">Designing & Development</h2>
              </div>
              <p className="mt-6 ">
                Effective use of design is necessary for the long run, it
                increases the brand value, boost &#x27;s trust by making a
                strong impression, and building customer relationships. <br />
                Kookies helps you to reach the bar by crafting experiences that
                get users exactly where they need to go, and make the journey a
                treat for the senses. We give life to the visuals integrating
                with the best combination of technologies.
              </p>
            </div>
            {/* Right row */}
            <div
              className={`bg-blue-200 basis-2/6 order-1 flex justify-end text-right items-center pr-6 ${Styles.list}`}
            >
              <span>
                <ul className="leading-6">
                  <li className="">User Interface Design</li>
                  <li className="mt-2"> Prototyping</li>
                  <li className="mt-2"> User Insights</li>
                  <li className="mt-2"> Backend Implementation</li>
                  <li className="mt-2">Quality Assurance</li>
                </ul>
              </span>
            </div>
          </div>

          {/* 3 Technical Assistance */}
          <div
            className={`flex flex-row justify-between ml-8 ${Styles.ApproachSection}`}
          >
            {/* Left row */}
            <div className="basis-3/6">
              <div className={`flex flex-row ${Styles.number} `}>
                <h1>03</h1>
                <h2 className="top-5 ml-4">Technical Assistance</h2>
              </div>
              <p className="mt-6 ">
                Product release isn&#x27;t the end, our team of quality and
                functional analysts provide maintenance services such as
                resolving errors in specification, design and implementation,
                functionality enhancement, support and assistance for new
                releases.
              </p>
            </div>
            {/* Right row */}
            <div
              className={`bg-blue-200 basis-2/6 flex justify-start items-center pl-6 ${Styles.list}`}
            >
              <span>
                <ul className="leading-6">
                  <li className="">Maintenance</li>
                  <li className="mt-2"> Growth & Analytics</li>
                  <li className="mt-2">Product Guidance</li>
                  <li className="mt-2"> Support</li>
                </ul>
              </span>
            </div>
          </div>
          
        </div>
      </section>
    </Layout>
  );
};

export default Approach;

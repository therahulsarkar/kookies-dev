import React from "react";
import Layout from "../../utils/Layout";
import Styles from "./About.module.css";
import { HiChevronRight } from "react-icons/hi";
import { WhiteButton } from "../../shared/WhiteButton/WhiteButton";

import team1 from "../../assets/images/team/team1.svg";
import team2 from "../../assets/images/team/team2.svg";
import team3 from "../../assets/images/team/team3.svg";
import aboutImg from "../../assets/images/about/about.svg";

const About = () => {
  document.title = "About Us";
  const data = [
    {
      id: 1,
      title: "Strategic Planning",
      list: [
        "Product Research",
        "User Experience Research",
        "Feature Scoping",
        "Brainstorming Workshops",
        "Risk Analysis",
        "Technology Management",
      ],
    },
    {
      id: 2,
      title: "Designing & Development",
      list: [
        "User Interface Design",
        "Prototyping",
        "User Insights",
        "Backend Implementation",
        "Quality Assurance",
      ],
    },
    {
      id: 3,
      title: "Technical Assistance",
      list: [
        "Maintenance",
        "Growth & Analytics",
        "Product Guidance",
        "Support",
      ],
    },
  ];

  const teamMember = [
    {
      id: 1,
      name: "Steven McGraw",
      job: "Founder, Kookies",
      about:
        "Initializing, the first step is always about the dream, the most important ingredient of      all greatness. We start by understanding your vision.",
      image: team1,
    },
    {
      id: 2,
      name: "Julia Fonseca",
      job: "Senior Analyst",
      about:
        "Learning about every possibility. We help discover the best user experience by performing Brainstorming workshops.",
      image: team2,
    },
    {
      id: 3,
      name: "Xavier Pryor",
      job: "UX/UI Designer",
      about:
        "We research and analyze all possible risks and plan for effective solutions for unstoppable development.",
      image: team3,
    },
  ];

  const dosDonts = [
    [
      "Working Smart ",
      "Thinking Outside the Box",
      "Conceptualization",
      "Innovation",
      "Being Straight Forward",
      "Aiming for greatness",
      " Acquiring knowledge continuously",
      "Battling Our Problem ",
      "Never Give up",
    ],
    [
      "Do the Donkey Work",
      "Plagiarize",
      "Chase Projects/Customers",
      "Mislead For Profits",
      "Outsource",
      "Wheel & Deal",
      " Entertain a dead duck",
      "Believe in the word ",
      "unachievable",
    ],
  ];

  return (
    <Layout>
      {/* Header section */}
      <section className={`${Styles.heroSection}`}>
        <h1 className="px-6 sm:px-20">
          Curious about Kookies? <br /> Let&#39;s
          <span className={Styles.geadientText}> feed</span>your{" "}
          <span className={Styles.geadientText}>curiosity!</span>
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

      <div className="bg-violet-600 h-1 w-1/12"></div>
       {/* Description section */}
       <div className="flex flex-row justify-between mt-20">
          <div className="flex flex-col  text-left w-2/5 ml-20">
            <h1 className="sm:text-3xl text-2xl  font-medium title-font text-gray-900">
              About Us
            </h1>
            <p className="mt-16">
              We at kookies crunch out the “im” from impossible, and add flavors
              to your imagination.<br/> <br/>We hook it, cook it and mold your dream
              kookies into your fortune ones.<br/> <br/>Too Good? Yet is true!
            </p>
          </div>

          <div className={`${Styles.aboutImageBg}    `}>

            <img src={aboutImg}  alt="About"/>
      
        </div>
        </div>

      {/* About section */}
      <section className={` ${Styles.about_Section_Container} `}>
 

        {/* Card section */}
        <div className="text-gray-800 body-font">
          <div className=" py-20 ">
            {/* Section title */}
            <div className="flex flex-row justify-between text-left w-full mb-10 pl-8">
              <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
                We Got You Covered
              </h1>
              <span className={`${Styles.titleButton}`}>
                <WhiteButton text="SEE MORE" />
              </span>
            </div>
            {/* Section data */}
            <div className="flex flex-wrap m-4  justify-evenly">
              {data.map((box) => {
                return (
                  <div className="p-4 " key={box.id}>
                    <div className="flex  h-full  rounded-lg bg-white   p-8 flex-col">
                      <div
                        className={`flex flex-col mb-3 ${Styles.violetText}`}
                      >
                        <h1 className="text-3xl mb-6">0{box.id}</h1>
                        <h2 className="text-gray-900  mb-4">{box.title}</h2>
                        <hr />
                      </div>
                      <div className="flex-grow pr-4">
                        <p className="leading-relaxed text-base">
                          {box.list.map((listData) => {
                            return (
                              <ul className={`${Styles.listText}`}>
                                <li>{listData}</li>
                              </ul>
                            );
                          })}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>


        {/* Do's Dont's section */}
        <div className="flex justify-around my-12">
          <div>
            <h1 className=" font-medium text-4xl mb-6">We Believe In</h1>

            {dosDonts[0].map((dosData, index) => {
              return (
                <p key={index} className="mb-4">
                  <li>{dosData}</li>
                </p>
              );
            })}
          </div>

          <div>
            <h1 className=" font-medium text-4xl mb-6">And We Dont</h1>
            {dosDonts[1].map((dosData, index) => {
              return (
                <p key={index} className="mb-4 line-through text-right">
                  <li>{dosData}</li>
                </p>
              );
            })}
          </div>
        </div>


      </section>
    </Layout>
  );
};

export default About;

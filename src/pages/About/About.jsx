import React from "react";
import Layout from "../../utils/Layout";
import Styles from "./About.module.css";
import { HiChevronRight } from "react-icons/hi";
import { WhiteButton } from "../../shared/WhiteButton/WhiteButton";
import { BlackButton } from "../../shared/BlackButton/BlackButton";
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
      "Working Smart 🕵️ 🧠 👍 ",
      "Thinking Outside the Box 📤",
      "Conceptualization 📝 📋 📓",
      "Innovation ✨ ✨ ✨",
      "Being Straight Forward 🙌 ✅",
      "Aiming for greatness 📈 📈 📈",
      " Acquiring knowledge continuously 💭 ✍️ ♾️",
      "Battling Our Problem ⚔️ 🪖 🤙 ",
      "Never Give up ✊ ☝️ 💯",
    ],
    [
      "💤 ❌ Do the Donkey Work",
      "🔁 🙅‍♂️ Plagiarize",
      "🚷🚷Chase Projects/Customers",
      "↗️ ➡️ ↘️ 🚫 Mislead For Profits",
      "🔀 ❌  Outsource",
      "🔁 ⛔Wheel & Deal",
      "🤹‍♂️ 💀 🦆 ❌ Entertain a dead duck",
      "🤡 🤥 🚫 Believe in the word ",
      "😰 😓 🙅‍♂️ unachievable",
    ],
  ];

  return (
    <Layout>
      {/* Header section */}
      <section className={`${Styles.aboutSection} `}>
        <h1 className="px-6  sm:px-20">
          Curious about Kookies? <br /> Let&#39;s
          <span className={Styles.pinkTextMain}> feed </span>your{" "}
          <span className={Styles.violetTextMain}>curiosity!</span>
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

      <div className="bg-violet-600 h-1 w-1/12 "></div>
      {/* Description section */}
      <div className="flex flex-row justify-between gap-6 mt-20 paddingX">
        <div className="flex flex-col  text-left w-2/5 ml-20">
          <h1 className="titleFont">
            About Us
          </h1>
          <p className="mt-16">
            We at kookies crunch out the “im” from impossible, and add flavors
            to your imagination.
            <br /> <br />
            We hook it, cook it and mold your dream kookies into your fortune
            ones.
            <br /> <br />
            Too Good? Yet is true!
          </p>
        </div>

        <div className={`${Styles.aboutImageBg}    `}>
          <img src={aboutImg} alt="About" />
        </div>
      </div>

      {/* About section */}
      <section className={` ${Styles.about_Section_Container} `}>
        {/* Card section */}
        <div className="text-gray-800 body-font ">
   
            {/* Section title */}
            <div className="flex flex-row align-middle justify-between ">
              <h1 className="titleFont">
                We Got You Covered
              </h1>
              <span className={`${Styles.titleButton} `}>
                <WhiteButton text="SEE MORE" />
              </span>
            </div>
            {/* Section data */}
            <div className="flex flex-wrap justify-between mt-20">
              {data.map((box) => {
                return (
                  <div className="p-4 " key={box.id}>
                    <div className={` flex  h-full  rounded-lg bg-white flex-col ${box.id === 2 ? 'pl-16' : 'pl-0'} `}>
                      <div
                        className={`flex flex-col mb-3 ${Styles.violetText}`}
                      >
                        <h1 className="text-3xl mb-6">0{box.id}</h1>
                        <h2 className="text-gray-900  mb-4 ">{box.title}</h2>
                        <hr />
                      </div>
                      <div className="flex-grow">
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

        {/* Do's Dont's section */}
        <div className="flex justify-between my-24 ">
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

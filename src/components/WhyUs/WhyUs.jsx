import React from "react";
import Styles from "./WhyUs.module.css";
import { FaQuoteLeft } from "react-icons/fa";
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import Quote from "../../assets/images/quote.svg";


const WhyUs = () => {
  const data = [
    {
      id: 1,
      title: "Aim is Success",
      desc: "Kookies are a bunch of such extraordinaires who aim for only success and nothing else. We believe in your passion to build your dream and accordingly our team excels at it.",
    },
    {
      id: 2,
      title: "Collaboration",
      desc: "Our team of Strategists, Designers and Engineers find the perfect plan to create a product that possesses the quality of outstanding and exceptional craftsmanship.",
    },
    {
      id: 3,
      title: "Commitment",
      desc: "We embrace challenges as opportunities and seek to grow, discover and influence the world with our unique skills and quality.",
    },
  ];

  return (
    <section className={`paddingX  ${Styles.whyUs} `}>
      <div className=" py-20 sm:px-8 ">
      <Slide left >
        <div className={`flex flex-col text-left w-full  ${Styles.whyUsText}`}>
          <h1 className=" titleFont pb-5">Why Us</h1>
          <span className="mt-8">
            <img src={Quote} alt="Quote"/>
          </span>

          <p>
            One machine can do the work of fifty ordinary men, <br />
            No machine can do the work of one extraordinary man.
          </p>
        </div>
        </Slide>
        <Fade bottom>
        <div className="flex flex-wrap mt-4">
          {data.map((box) => {
            return (
              <div className="pt-0 md:w-1/3 " key={box.id}>
                <div className="flex  h-full rounded-lg    py-8 pr-8 flex-col">
                  <div className={`flex ${Styles.boldText} flex-col mb-3`}>
                    <h1 className="text-3xl mb-5">0{box.id}</h1>
                    <h2 className="text-black title-font font-medium mb-4">
                      {box.title}
                    </h2>
                    <hr className="bg-gray-300" style={{ height: "1.5px" }} />
                  </div>
                  <Fade bottom cascade>
                  <div className="flex-grow pr-6">
                    <p className="leading-relaxed text-base">{box.desc}</p>
                  </div>
                  </Fade>
                </div>
              </div>
            );
          })}
        </div></Fade>
      </div>
    </section>
  );
};

export default WhyUs;

import React from 'react'
import Styles from './WhyUs.module.css'
import { FaQuoteLeft } from "react-icons/fa";

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
    <section className="text-gray-800 body-font bg-violet-100">
      <div className=" py-16 ">
        <div className={`flex flex-col text-left w-full mb-0 pl-16 ${Styles.whyUsText}`}>
          <h1 className=" text-gray-900 pb-5">
            Why Us
          </h1>
          <span className='text-violet-400'><FaQuoteLeft size={40} /></span>
          <p>One machine can do the work of fifty ordinary men, <br/>
          No machine can do the work of one extraordinary man.</p>
        </div>
        <div className="flex flex-wrap m-4">
          {data.map((box) => {
            return (
              <div className="p-4 md:w-1/3" key={box.id}>
                <div className="flex  h-full rounded-lg    p-8 flex-col">
                  <div className={`flex ${Styles.boldText} flex-col mb-3`}>
                    <h1 className="text-3xl mb-3">0{box.id}</h1>
                    <h2 className="text-gray-900 text-lg title-font font-medium mb-4">
                      {box.title}
                    </h2>
                    <hr className='bg-gray-300' style={{height: '2px'}}/>
                  </div>
                  <div className="flex-grow pr-6">
                    <p className="leading-relaxed text-base">{box.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  )
}

export default WhyUs
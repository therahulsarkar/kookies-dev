import { data } from "autoprefixer";
import React from "react";
import Styles from "./WhatWeDo.module.css";
const WhatWeDo = () => {
  const data = [
    {
      id: 1,
      title: "Initiate",
      desc: "We just have a little fun, play with some top notch tech and build a beautiful cannon with love and delicacy.",
    },
    {
      id: 2,
      title: "Combine",
      desc: "Put your Dreams inside the trunk, fuel it with our secret flavors and then light up with some amazing Skills.",
    },
    {
      id: 3,
      title: "Launch",
      desc: "So that it can Shoot High Up in the Sky and burst into your dream firework, mesmerizing people across the globe.",
    },
  ];

  return (
    <section className="text-gray-800 body-font ">
    <div className="bg-violet-600 h-1 w-1/12"></div>
      <div className=" py-20 ">
        <div className="flex flex-col text-left w-full mb-10 pl-8">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
            What We Do
          </h1>
        </div>
        <div className="flex flex-wrap m-4">
          {data.map((box) => {
            return (
              <div className="p-4 md:w-1/3" key={box.id}>
                <div className="flex  h-full rounded-lg bg-white   p-8 flex-col">
                  <div className={`flex flex-col mb-3 ${Styles.boldText}`}>
                    <h1 className="text-3xl mb-3">0{box.id}</h1>
                    <h2 className="text-gray-900 text-lg title-font font-medium mb-4">
                      {box.title}
                    </h2>
                    <hr />
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
  );
};

export default WhatWeDo;

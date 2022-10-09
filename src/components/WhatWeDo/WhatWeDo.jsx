import React from "react";
import Styles from "./WhatWeDo.module.css";
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

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
    <section className={ `paddingX   ${Styles.WhatWeDo}` } >
    <Slide left cascade>
        <div className=" w-full mb-10  pl-10">
          <h1 className="titleFont">A Day at Kookies</h1>
        </div></Slide>
        <Fade bottom>
        <div className="flex flex-wrap">
          {data.map((box) => {
            return (
              <div className="p-4 md:w-1/3" key={box.id}>
                <div className="flex h-full rounded-lg    sm:p-6 flex-col">
                  <div className={`flex flex-col mb-3 ${Styles.boldText}`}>
                    <h1 className="mb-1">0{box.id}</h1>
                    <h2 className=" title-font  mb-4">
                      {box.title}
                    </h2>
                    <hr />
                  </div>
                  <Fade bottom cascade>
                  <div className="flex-grow w-5/5">
                    <p className="leading-relaxed text-base">{box.desc}</p>
                  </div></Fade>
                </div>
              </div>
            );
          })}
        </div></Fade>
    </section>
  );
};

export default WhatWeDo;

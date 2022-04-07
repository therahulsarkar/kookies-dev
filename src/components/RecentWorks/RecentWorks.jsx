import React from "react";
import Styles from "./RecentWorks.module.css";
import Slider from "react-slick";
import Card from "./Card";
import work1 from '../../assets/images/work1.png'
import work2 from '../../assets/images/work2.png'
import work3 from '../../assets/images/work3.png'

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { RiArrowRightUpLine } from "react-icons/ri";

const RecentWorks = () => {
  // var settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 2000,
  //   slidesToShow: 2,
  //   slidesToScroll: 3,
  //   initialSlide: 0,
  //   autoplay: true,
  //   autoplaySpeed: 3000,
  // };

  var data = [
    {
      id: 0,
      title: "Powerplay",
      desc: "AI Powered Captions & Hashtags",
      imgg: work3
    },
    {
      id: 1,
      title: "SkulQ",
      desc: "Payroll Management Application",
      imgg: work1
    },
    {
      id: 2,
      title: "SkulZ",
      desc: "Payroll Management Applications",
      imgg: work2
    },
  ];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <section className="w-full text-gray-800 body-font mt-10 mb-20">
      <div className="bg-violet-600 h-1 w-1/12"></div>
      <div className=" py-4 ">
        <div className={` ${Styles.WorkText} flex flex-col text-left w-full mb-10 pl-8`}>
          <h1 className=" text-gray-900">
            Our Recent Work
          </h1>
        </div>

        <div className="flex justify-end mr-5">
          <button className="bg-white font-bold  flex flex-row text-gray-800 px-3 py-2 border-2 border-gray-800">
            SEE MORE{" "}
            <span className="mt-1 ml-1 text-gray-800 ">
              <RiArrowRightUpLine />
            </span>
            </button>
        </div>

        <div className=" py-10 sm:pb-20 ">
          <Carousel
            swipeable={true}
            draggable={true}
            showDots={false}
            responsive={responsive}
            infinite={true}
            autoPlaySpeed={4000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerclassName="carousel-container"
            dotListclassName="custom-dot-list-style"
            itemclassName="carousel-item-padding-40-px"
          >
            {data.map((data) => {
              return (
                <div className={`flex justify-center mx-2 flex-wrap ${Styles.card}`} key={data.id} >
                  <div className="max-w-sm   rounded-lg border shadow border-gray-200  ">
                    <a href="#" className={Styles.cardImage}>
                      <img className=" object-cover " src={data.imgg} alt={data.title} />
                    </a>

                    <div className={`p-5  `}>
                      <span className={`flex flex-row`}>
                        <h1>{data.title}</h1>
                        <br/>
                        <h2>{data.desc}</h2>
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </Carousel>
          ;
        </div>
      </div>
    </section>
  );
};

export default RecentWorks;

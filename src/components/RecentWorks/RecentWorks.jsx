import React from "react";
import { Link } from "react-router-dom";
import Styles from "./RecentWorks.module.css";
import Slider from "react-slick";
import Card from "./Card";

import work1 from '../../assets/images/work/work1.svg'
import work2 from '../../assets/images/work/work2.svg'
import work3 from '../../assets/images/work/work3.svg'
import work4 from '../../assets/images/work/work4.svg'

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { RiArrowRightUpLine } from "react-icons/ri";
import { WhiteButton } from "../../shared/WhiteButton/WhiteButton";


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
      title: "Primo Umbrella",
      desc: "Payroll Management Application",
      imgg: work3
    },
    {
      id: 1,
      title: "Transguard",
      desc: "Delivery Service Web-Based Portal",
      imgg: work4
    },
    {
      id: 2,
      title: "Firstep",
      desc: "Beautiful Shareable Matrimonial Biodata Maker",
      imgg: work2
    },
    {
      id: 3,
      title: "MyCareerNext",
      desc: "Product for Career Enhancement",
      imgg: work1
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
    <section className="w-full text-gray-800 bg-violet-100 body-font mt-10 mb-20">

      <div className=" py-4 ">
        <div className={` ${Styles.WorkText} flex flex-col text-left w-full mb-10 pl-8`}>
          <h1 className=" text-gray-900">
            Our Recent Work
          </h1>
        </div>

        <div className="flex justify-end mr-5">
         <WhiteButton text="SEE MORE" url="work" bgColor="bg-violet-100"/>
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
                  <div className="max-w-sm   rounded-lg    ">
                    <Link to="/" className={Styles.cardImage}>
                      <img className=" object-cover " src={data.imgg} alt={data.title} />
                    </Link>

                    <div className={`p-5  `}>
                      <span className={`flex flex-col`}>
                        <h1 className=" font-medium text-lg">{data.title}</h1>
                        <h2 className=" font-normal text-sm mt-3 ">{data.desc}</h2>
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

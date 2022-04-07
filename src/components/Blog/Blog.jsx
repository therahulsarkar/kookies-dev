import React from "react";
import Styles from "./Blog.module.css";
import blog1 from "../../assets/images/blog1.jpg";
import blog2 from "../../assets/images/blog2.jpg";
import blog3 from "../../assets/images/blog3.jpg";
import { RiArrowRightUpLine } from "react-icons/ri";

const Blog = () => {
  const data = [
    {
      id: 1,
      date: 24,
      month: "March",
      title: "DESIGN",
      desc: "Product Design Lessons To Learn From The Ancient Pyramids Of Egypt",
      image: blog1,
    },
    {
      id: 2,
      date: 23,
      month: "March",
      title: "UX",
      desc: "Tools That Can Streamline Your UX Research",
      image: blog2,
    },
    {
      id: 3,
      date: 22,
      month: "March",
      title: "DESIGN",
      desc: "6 Design Fundamentals To Make Your Website Experience Stunning!",
      image: blog3,
    },
  ];

  return (
    <div className={` ${Styles.blog} flex flex-col justify-center`}>
      <div className="flex justify-between mx-6 my-10">
        <h1 className={`${Styles.blogFont}`}>Blog</h1>
        <span>
          <button className="bg-gray-900  flex flex-row text-white px-3 py-2">
            SEE MORE{" "}
            <span className="mt-1 ml-1 text-white ">
              <RiArrowRightUpLine />
            </span>
          </button>
        </span>
      </div>

      <div className="bg-white flex justify-around flex-wrap m-2">
        {data.map((blog) => {
          return (
            <div className="flex justify-center mt-4 flex-wrap gap-4" key={blog.id}>
              <div className="max-w-sm   rounded-lg border border-gray-300 shadow ">
                <a href="#" className="">
                  <img
                    className=" object-cover"
                    src={blog.image}
                    alt="Sining"
                  />
                </a>

                <div className={`p-5  `}>
                  <span className={`flex flex-row ${Styles.blogText}`}>
                    <h1>{blog.date}</h1>
                    <h2>{blog.month}</h2>
                  </span>
                  <h5 className="mb-3 mt-3 text-sm font-medium">{blog.title}</h5>
                  <p className="mb-3 font-normal text-base ">{blog.desc}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Blog;

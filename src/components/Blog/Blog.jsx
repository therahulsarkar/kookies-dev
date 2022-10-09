import React from "react";
import Styles from "./Blog.module.css";
import blog1 from "../../assets/images/blog1.jpg";
import blog2 from "../../assets/images/blog2.jpg";
import blog3 from "../../assets/images/blog3.jpg";
import { RiArrowRightUpLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { BlackButton } from "../../shared/BlackButton/BlackButton";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";

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
    <div className={` ${Styles.blog} flex flex-col justify-center paddingX`}>
      <Fade left cascade>
        <div className="flex justify-between sm:px-8 my-10 ">
          <h1 className="titleFont">Blog</h1>
          <span>
            <BlackButton url="/" text="SEE MORE" />
          </span>
        </div>
      </Fade>

      <Zoom bottom cascade>
        <div className=" flex justify-between sm:px-8  flex-wrap ">
          {data.map((blog) => {
            return (
              <div
                className={`flex  justify-between ${Styles.blogCard}  mt-4`}
                key={blog.id}
              >
                <div className="max-w-sm   rounded-lg  ">
                  <Link to="/" className="">
                    <img
                      className=" object-cover"
                      src={blog.image}
                      alt="Sining"
                    />
                  </Link>
                  <Fade bottom cascade>
                    <div className={`pt-5 pr-4  `}>
                      <span className={`flex flex-row ${Styles.blogText}`}>
                        <h1>{blog.date}</h1>
                        <h2>{blog.month}</h2>
                      </span>
                      <h5 className="mb-3 mt-3 text-sm font-medium">
                        {blog.title}
                      </h5>
                      <p className="mb-3 font-normal text-base ">{blog.desc}</p>
                    </div>
                  </Fade>
                </div>
              </div>
            );
          })}
        </div>
      </Zoom>
    </div>
  );
};

export default Blog;

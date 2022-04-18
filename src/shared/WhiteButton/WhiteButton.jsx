import React from 'react'
import { RiArrowRightUpLine } from "react-icons/ri";
import { Link } from 'react-router-dom';

export const WhiteButton = ({   url, text, bgColor }) => {
  return (
      <>
    <Link to={`/${url}`}>
    <button className={` ${ bgColor ? bgColor : 'bg-white' } text-sm flex flex-row border-2 border-gray-900 text-gray-900 px-5 py-2`}>
    
      {text}{" "}
      <span className="mt-1 ml-1 text-gray-900 ">
        <RiArrowRightUpLine />
      </span>
      
    </button></Link>
    </>
  )
}

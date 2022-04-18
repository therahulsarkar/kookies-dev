import React from 'react'
import { RiArrowRightUpLine } from "react-icons/ri";
import { Link } from 'react-router-dom';

export const BlackButton = ({   url, text}) => {
  return (
      <>
    <Link to={`/${url}`}>
    <button className="bg-gray-900 text-sm flex flex-row text-white px-5 py-2">
    
      {text}{" "}
      <span className="mt-1 ml-1 text-white ">
        <RiArrowRightUpLine />
      </span>
      
    </button></Link>
    </>
  )
}

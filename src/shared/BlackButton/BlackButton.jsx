import React from 'react'
import { RiArrowRightUpLine } from "react-icons/ri";
import { Link } from 'react-router-dom';

export const BlackButton = ({   url, text}) => {
  return (
      <>
    <Link to={`/${url}`}>
    <button className="bg-black text-sm flex flex-row  text-white py-3 px-4">
    
      <span className='self-center font-medium'> {text}{" "}</span>
      <span className="ml-1 text-white  self-center ">
        <RiArrowRightUpLine />
      </span>
      
    </button></Link>
    </>
  )
}

import React from 'react'
import { RiArrowRightUpLine } from "react-icons/ri";
import { Link } from 'react-router-dom';

export const WhiteButton = ({   url, text, bgColor }) => {
  return (
      <>
    <Link to={`/${url}`}>
    <button className={` ${ bgColor ? bgColor : 'bg-white' } text-sm flex flex-row border-2 border-black text-black px-5 py-2`}>
    
     <span className='self-center'> {text}{" "}</span>
      <span className="ml-1 text-black self-center ">
        <RiArrowRightUpLine />
      </span>
      
    </button></Link>
    </>
  )
}

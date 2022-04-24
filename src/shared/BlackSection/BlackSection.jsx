import React from 'react'
import Styles from './BlackSection.module.css';
import { FaQuoteLeft } from "react-icons/fa";

const BlackSection = ({ breakValue, text, sign }) => {
  return (
    <section className={`flex justify-center relative  ${Styles.BlackBg}`}>
    <div className="flex flex-col ">
        {
          sign &&  <span className=' -ml-4 absolute top-10'><FaQuoteLeft size={40} /></span>
        }
        <p className='ml-10 mt-2'>{text.slice(0, breakValue)} <br/> {text.slice(breakValue, text.length)}</p>
        </div>
    </section>
  )
}

export default BlackSection
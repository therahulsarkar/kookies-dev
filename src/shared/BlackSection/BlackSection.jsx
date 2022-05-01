import React from 'react'
import Styles from './BlackSection.module.css';
import { FaQuoteLeft } from "react-icons/fa";
import Quote from '../../assets/images/whiteQuote.svg'

const BlackSection = ({ breakValue, text, sign }) => {
  return (
    <section className={`flex justify-center relative  ${Styles.BlackBg}`}>
    <div className="flex flex-col  justify-center relative ">
        {
          sign &&  <span className={Styles.whiteQuote}> <img src={Quote} alt="White Quote"/></span>
        }
        <p className='ml-10  self-center'>{text.slice(0, breakValue)} <br/> {text.slice(breakValue, text.length)}</p>
        </div>
    </section>
  )
}

export default BlackSection
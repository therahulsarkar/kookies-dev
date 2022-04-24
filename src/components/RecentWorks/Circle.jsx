import React from 'react'
import Styles from "./RecentWorks.module.css";

const Circle = ({ opacity }) => {
  return (
      <div className={ `${Styles.circle} ${ opacity ? 'opacity-100' : 'opacity-30' }  `} >
    <div className={Styles.innerCirle}></div>
    <div className={Styles.outerCirle}></div>
    </div>
  )
}

export default Circle
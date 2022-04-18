import React from 'react';
import Styles from './WorkCard.module.css';

const WorkCard = ({ date, month, heading, imgSrc, title, description, url }) => {
  return (
    <section className={` flex flex-row  ${Styles.WorkCardBg}`}>
      <div className='basis-1/12  flex place-items-center'>
      <span className={`flex flex-row ${Styles.workCardText} `}>
                    <h1>{date}</h1>
                    <h2>{month}</h2>
                  </span>
      </div>
      <div className={` basis-6/12 bg-blue-400 h-72 ${Styles.workImage} `}>
      <img src={imgSrc} alt={title}/>
      </div>

      <div className={` basis-4/12 flex flex-col justify-between  ${Styles.workDetailsContainer} `}>
        <div className={` ${Styles.workDetails} `}>
        <p>{heading}</p>
        <h1>{title}</h1>
        <h2>{description}</h2>
      </div>
      <div className={` ${Styles.workDetailsButton} `}>
      <button>CHECK NOW</button>
      </div>
      </div>

    </section> 
  )
}

export default WorkCard
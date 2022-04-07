import React from 'react'
import Styles from './Expertise.module.css'

const Expertise = () => {
  return (
    <section className="text-gray-800 body-font ">

      <div className=" py-10 flex flex-row relative ">

        <div className={` w-2/12 ${Styles.bgOne}`}>
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 -rotate-90 absolute top-2/4 ">
            Our Expertise
          </h1>
          <span className='flex flex-row -rotate-90 absolute top-2/4 gap-4 underline'>
            <p>Evolve</p>
            <p>Maintain</p>
            <p>Develop</p>
            <p>Design</p>
            <p>Strategy</p>
          </span>
        </div>


        {/* <div className=" w-2/12 bg-blue-400 -rotate-90">
          
        </div> */}

        <div className={` w-10/12 bg-red-400 ${Styles.bgImage}`}>
          <div className={`${Styles.bgText} flex flex-row mt-10 pl-6`}>
            <h1>01</h1>
            <h2>Strategy Planning</h2>
          </div>

          <div className={Styles.bgSmallText}>
            <p>Research & Insight</p>
            <p>Design Sprint</p>
            <p>Product Management</p>
            <p>Technology Strategy</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Expertise
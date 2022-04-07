import React from 'react'
import Styles from './Hero.module.css'
import { HiChevronRight } from "react-icons/hi";

const Hero = () => {
  return (
    <section className={`${Styles.heroSection}` } >
      
        <h1 className='px-6 sm:px-20'>At Kookies <br/> we bake <span className={Styles.geadientText}> dreams</span> to your <span className={Styles.geadientText}>desire</span> <br/>with the ingredients of <br/> <span className={Styles.geadientText}>technology</span> and <span className={Styles.geadientText}>designing</span> skills</h1>

        <div className='flex flex-row rotate-90'>

            <p className='mr-2'>Scroll</p>
            <div className={Styles.line}></div>

            <HiChevronRight/>

        </div>

        {/* <span className={Styles.heroBg}>
          <h1>KOOKIES</h1>
          <h1>KOOKIES</h1>
        </span> */}
    </section>
  )
}

export default Hero
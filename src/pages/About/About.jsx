import React from 'react'
import Layout from '../../utils/Layout'
import Styles from "./About.module.css";
import { HiChevronRight } from "react-icons/hi";


const About = () => {

document.title = "About Us";

  return (
      <Layout>
    <section className={`${Styles.heroSection}`}>
      <h1 className="px-6 sm:px-20">
      Curious about Kookies? <br/> Let&#39;s
        <span className={Styles.geadientText}> feed</span>your  { " "} 
        <span className={Styles.geadientText}>curiosity!</span>
      </h1>

      <div className="flex flex-row rotate-90">
        <p className="mr-2">Scroll</p>
        <div className={Styles.line}></div>

        <HiChevronRight />
      </div>

      {/* <span className={Styles.heroBg}>
          <h1>KOOKIES</h1>
          <h1>KOOKIES</h1>
        </span> */}
    </section>
    </Layout>
  )
}

export default About
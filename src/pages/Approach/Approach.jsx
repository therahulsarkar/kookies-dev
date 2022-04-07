import React from 'react'
import Layout from '../../utils/Layout'
import Styles from "./Approach.module.css";
import { HiChevronRight } from "react-icons/hi";

const Approach = () => {
document.title = "Our Approach";

  return (
      <Layout>
    <section className={`${Styles.heroSection}`}>
      <h1 className="px-6 sm:px-20">
      Our 
        <span className={Styles.geadientText}> Secret</span> Formula 
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

export default Approach
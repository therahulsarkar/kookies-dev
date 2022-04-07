import React from 'react'
import Layout from '../../utils/Layout'
import Styles from "./Career.module.css";
import { HiChevronRight } from "react-icons/hi";

const Career = () => {
document.title = "Career";

  return (
      <Layout>
      <section className={`${Styles.heroSection}`}>
      <h1 className="px-6 sm:px-20">
      Be the one to <br/> embrace the
        <span className={Styles.geadientText}> glory</span> with us! 
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

export default Career
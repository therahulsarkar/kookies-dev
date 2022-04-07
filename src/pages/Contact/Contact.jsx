import React from 'react'
import Layout from '../../utils/Layout'
import Styles from "./Contact.module.css";
import { HiChevronRight } from "react-icons/hi";

const Contact = () => {

document.title = "Contact Us";

  return (
      <Layout>
    <section className={`${Styles.heroSection}`}>
      <h1 className="px-6 sm:px-20">
      Turn your
        <span className={Styles.geadientText}> wish</span> into 
        <span className={Styles.geadientText}> will. </span><br/>
        Get yourself some delicious <br/> kookies! 
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

export default Contact
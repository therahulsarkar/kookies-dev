import React from "react";
import Layout from "../../utils/Layout";
import Styles from "./Contact.module.css";
import { HiChevronRight } from "react-icons/hi";
import { BlackButton } from "../../shared/BlackButton/BlackButton";
import { Link } from "react-router-dom";
const Contact = () => {
  document.title = "Contact Us";

  return (
    <Layout>
      <section className={`${Styles.contactSection}`}>
        <h1 className="px-6 sm:px-20">
          Turn your
          <span className="gradientText"> wish</span> into
          <span className="gradientText"> will</span>.
          <br />
          Get yourself some delicious <br />  kookies!
        </h1>


        <span className="my-14">

          <BlackButton text="CONTACT US" url="contact" />
     
        </span>
        {/* <span className={Styles.heroBg}>
          <h1>KOOKIES</h1>
          <h1>KOOKIES</h1>
        </span> */}
      </section>
    </Layout>
  );
};

export default Contact;

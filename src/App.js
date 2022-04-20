import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Layout from "./utils/Layout";
import Workflow from "./components/Workflow/Workflow";
import Blog from "./components/Blog/Blog";
import Brands from "./components/Brands/Brands";
import Expertise from "./components/Expertise/Expertise";

import Hero from "./components/Hero/Hero";
import RecentWorks from "./components/RecentWorks/RecentWorks";
import WhatWeDo from "./components/WhatWeDo/WhatWeDo";
import WhyUs from "./components/WhyUs/WhyUs";
import NavMenu from "./components/NavMenu/NavMenu";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  document.title = "Kookies";

  // const toggle = false;
  const [toggle, setToggle] = useState(false);

  const toggleButton = () => {
    setToggle(!toggle);
  };

  return (
    <div className="">
      {toggle ? (
        <NavMenu clickButtonFromNavMenu={toggleButton} />
      ) : (
        <>
          <Layout clickButton={toggleButton}>
            <Hero />
            <WhatWeDo />
            <RecentWorks />
            <Expertise />
            <Workflow />
            <WhyUs />
            <Blog />
          </Layout>
        </>
      )}
    </div>
  );
}

export default App;

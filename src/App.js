import logo from './logo.svg';
import './App.css';
import Layout from './utils/Layout'
import Approach from './components/Approach/Approach'
import Blog from './components/Blog/Blog'
import Brands from './components/Brands/Brands'
import Expertise from './components/Expertise/Expertise'

import Hero from './components/Hero/Hero'
import RecentWorks from './components/RecentWorks/RecentWorks'
import WhatWeDo from './components/WhatWeDo/WhatWeDo'
import WhyUs from './components/WhyUs/WhyUs'

function App() {
document.title = "Kookies";

  return (
   <div className="">
      <Layout>
        <Hero/>
        <WhatWeDo/>
        {/* <Brands/> */}
        {/* <RecentWorks/> */}
        {/* <Expertise/> */}
        <Approach/>
        <WhyUs/>
        {/* <Blog/> */}
      </Layout>
    </div>
  );
}

export default App;

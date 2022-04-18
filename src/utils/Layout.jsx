import React from 'react'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'



const Layout = ({ children, clickButton }) => {
  return (
      <>
        <Navbar clickButton={clickButton}/>
       { children }
        <Footer/>
    </>
  )
}

export default Layout
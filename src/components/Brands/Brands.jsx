import React from 'react'
import Styles from './Brands.module.css'
import Marquee from "react-fast-marquee";
import brand1 from '../../assets/images/brand1.png'
import brand2 from '../../assets/images/brand2.png'
import brand3 from '../../assets/images/brand3.png'
import brand4 from '../../assets/images/brand4.png'
import brand5 from '../../assets/images/brand5.png'
import brand6 from '../../assets/images/brand6.png'
import brand7 from '../../assets/images/brand7.png'


const Brands = () => {
  return (
    <div className={Styles.brands}>
      <Marquee speed={50}>
    <img src={brand1}  height="100" width="100" className='mx-10'/>
    <img src={brand2} height="100" width="100" className='mx-10'/>
    <img src={brand3} height="100" width="100" className='mx-10'/>
    <img src={brand4} height="100" width="100" className='mx-10'/>
    <img src={brand5} height="100" width="100" className='mx-10'/>
    <img src={brand6} height="100" width="100" className='mx-10'/>
    <img src={brand7} height="100" width="100" className='mx-10'/>
</Marquee>
    </div>
  )
}

export default Brands
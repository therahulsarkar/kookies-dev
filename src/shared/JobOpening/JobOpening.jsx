import React from 'react'
import { BlackButton } from '../BlackButton/BlackButton'

const JobOpening = ({ title, description, link }) => {
  return (
    <div className='flex justify-start flex-col sm:ml-10'>
        <h1 className='mb-10'>{title}</h1>
        <p className='mb-10 sm:w-3/6'>{description}</p>
        <BlackButton text="APPLY" url={link}/>
    </div>
  )
}

export default JobOpening
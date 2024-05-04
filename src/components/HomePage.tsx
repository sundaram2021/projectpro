import React from 'react'
import { AuroraBackground } from './ui/aurora-background'

function HomePage() {
  return (
    <div>
        <AuroraBackground className='auroraBackground' showRadialGradient={true} >
          <div className='flex flex-col justify-center items-center'>
            <h2 className='text-white text-4xl font-bold mb-2'>Convenient, secure, vast selection, personalized.</h2>
            <h4 className='text-white text-sm'>Discover endless possibilities. Shop smarter with us.</h4>
            <button className='text-black bg-white rounded-lg px-5 py-2 mt-5 cursor-pointer hover:bg-transparent hover:border'>Shop Now</button>
          </div>
        </AuroraBackground>    
    </div>
  )
}

export default HomePage
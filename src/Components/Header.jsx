import React from 'react'
import icon from '../Images/logo.png'

function Header() {
  return (
    <div className='flex justify-center items-center bg-[#1b4887]'>
      <div> <img src={icon} alt="icon" className='w-10 h-10'/> </div>
      <div className='text-2xl text-white font-semibold text-center m-4'>Weather App</div>
    </div>

  )
}

export default Header
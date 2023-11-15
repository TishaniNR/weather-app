import React from 'react'
import icon from '../Images/logo.png'

function Header() {
  return (
    <div className='flex justify-center items-center bg-[#213a73] p-4'>
        <div> <img src={icon} alt="icon" className='w-10 h-10'/> </div>
        <div className='text-2xl text-white font-semibold text-center m-4 italic'>READY WEATHER</div>
    </div>

  )
}

export default Header
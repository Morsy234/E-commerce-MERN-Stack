import React from 'react'
import {assets} from '../assets/admin_assets/assets.js'

const NavBar = ({setToken}) => {
  return (
    <div className='flex item-center py-2 px-[4%] justify-between'>
      <img src={assets.logo} className='w-28' alt="logo" />
      <button onClick={() => setToken('')}className='bg-gray-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm'>Logout</button>
    </div>
  )
}

export default NavBar

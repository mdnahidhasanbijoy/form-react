import React from 'react'
import { NavLink } from "react-router";

const NavBar = () => {
  return (
    <div>
      <nav className='flex justify-between items-center bg-amber-300 py-4'>
       <div className='w-1/2 flex justify-center'>
        <ul className=' flex gap-12 text-blue-900 font-bold'>
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/About" end>
            About
          </NavLink>
            <li>Menu</li>
            <li>contact</li>
        </ul>
       </div>
     <div className=' w-1/3'>
         <button className='px-5 py-3  bg-red-700 text-amber-50 rounded-2xl'>Click</button>
     </div>
      </nav>
    </div>
  )
}

export default NavBar

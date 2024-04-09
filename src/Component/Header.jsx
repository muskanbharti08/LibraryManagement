import React from 'react'
import { NavLink } from 'react-router-dom'
import Drower from './Drower'
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
export default function Header() {
  return (
    <>
    <div className="sm:hidden"><Drower/></div>
      <div className="sm:flex sm:justify-center sm:space-x-40  sm:p-8">
        <div className=""><LocalLibraryIcon/> </div>



        {/* sm */}
          <div className="hidden sm:block items-center space-x-24 justify-center">
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/service' >Service</NavLink>
            <NavLink to='/auther' >AuthercheckList</NavLink>
            <NavLink to='/blog'>Blog</NavLink>
            <NavLink to='/contact' >Contact</NavLink>
            <NavLink to ='/fq'>FAQ</NavLink>
          </div>
          
      
      </div>

    </>
  )
}

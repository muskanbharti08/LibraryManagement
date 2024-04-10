import React from 'react'
import { NavLink } from 'react-router-dom'
import Drower from './Drower'
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
export default function Header() {

let a = "text-blue-400 underline font-bold"
let b = "text-red-700 font-semibold"


  return (
    <>
    <div className="sm:hidden"><Drower/></div>
      <div className="sm:flex sm:justify-center sm:space-x-40  sm:p-8">
        <div className=""><LocalLibraryIcon/> </div>



        {/* sm */}
          <div className="hidden sm:block items-center space-x-24 justify-center">
            <NavLink className={({isActive})=> `${isActive?a:b}` } to='/'>Home</NavLink>
            <NavLink className={({isActive})=> `${isActive?a:b}` } to='/service' >Service</NavLink>
            <NavLink className={({isActive})=> `${isActive?a:b}` } to='/auther' >AuthercheckList</NavLink>
            <NavLink className={({isActive})=> `${isActive?a:b}` } to='/blog'>Blog</NavLink>
            <NavLink className={({isActive})=> `${isActive?a:b}` } to='/contact' >Contact</NavLink>
            <NavLink className={({isActive})=> `${isActive?a:b}` } to ='/fq'>FAQ</NavLink>
          </div>
          
      
      </div>

    </>
  )
}

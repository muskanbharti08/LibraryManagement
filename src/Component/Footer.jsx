import React from 'react'
import Footer_1 from './Footer_1'
import Footer_2 from './Footer_2'
import FitbitIcon from '@mui/icons-material/Fitbit';

export default function Footer() {
  return (
    <>
    <div className="bg-gray-400 space-y-2">

        {/* logo */}
        <div className="">
               <h1 className="pt-4 "><FitbitIcon/></h1>
        </div>


        {/* para1 */}
        <div className="px-24 sm:flex sm:justify-evenly sm:text-xl text-gray-800 hover:text-black">
                <h1 className=""><a href="tel:9087433080">9087433080</a></h1>
               <h1 className=""> <a href="tel:9087433080">9001234512</a></h1>
               <h1 className=""><a href="mailto:wedoyourwork0@gmail.com">wedoyourwork0@gmail.com</a></h1>
        
               </div>
              


        {/* para2 */}
        <div className="underline  text-blue-900 hover:text-blue-800 sm:flex sm:justify-evenly  px-24">
                No.29,9th cross Kurinjinagar Lawspet puducherry
        </div>
        <Footer_2/>
        <Footer_1/>
    </div>
    
    </>
  )
}

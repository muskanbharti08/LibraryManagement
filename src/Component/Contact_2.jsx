import React from 'react'
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PlaceIcon from '@mui/icons-material/Place';



export default function Contact_2() {
  return (
    <>
    <div className=" pt-10 px-8 flex-col space-y-4 sm:px-32 sm:w-6/12 ">
        <div className="">
                <h1 className=" flex justify-center sm:justify-start font-semibold  sm:text-2xl">GET IN TOUCH</h1>
        </div>


        {/* Phone */}
        <div className="sm:text-xl text-gray-700  hover:text-gray-800">
                <h1 className=""><AddIcCallIcon/>Phone</h1>
                <a href="tel:9087433080">9087433080</a></div>


        {/* Mail */}
        <div className="sm:text-xl text-gray-600  hover:text-gray-800">
                <h1 className=""><MailOutlineIcon/>email</h1>
                <a href="mailto:wedoyourwork0@gmail.com">wedoyourwork0@gmail.com</a>
        </div>

        {/* Addresss */}
        <div className="sm:text-xl text-gray-600  hover:text-gray-800">
                <h1 className=""><PlaceIcon/>Address</h1>
                <h1 className="w-11/12 sm:w-11/12">No.29,9th cross Kurinjinagar Lawspet puducherry</h1>
        </div>

        <div className="border border-gray-300 rounded-md shadow-xl shadow-gray-500 flex justify-center sm:w-11/12 ">
                <img src="https://tse1.mm.bing.net/th?id=OIP.zdN_BQoXNgCAtk-eoXBerwHaFM&pid=Api&P=0&h=220" alt="" />
        </div>

    </div>
    </>
  )
}

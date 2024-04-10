import React from 'react'

export default function Contact_3() {
  return (
    <>
      <div className="border border-gray-200 rounded-md sm:px-16  mt-6 p-3 shadow-xl shadow-gray-300 ">

        {/* detail */}
        <div className="">
          <h1 className="py-8 sm:py-6 sm:text-2xl font-semibold">Fill The Details Below</h1>
        </div>


        {/* input tags */}
        <div className="flex-col space-y-4  ">
           <input type="text" className="border w-full border-gray-500 rounded-full py-1 px-4 space-x-5" placeholder="Full Name" />
          <input type="text" className="border w-full border-gray-500 rounded-full py-1 px-4 space-x-5" placeholder="Email" />
          
         <input type="text" className="border w-full border-gray-500 rounded-full py-1 px-4 space-x-5" placeholder="Mobile" />
         
          <textarea name="" id="" cols="" rows="5" placeholder="Your Message" className='border w-full border-gray-500 rounded-xl space-x-5 px-4 py-2'></textarea>
          <div className="flex justify-center"><button className=" w-1/2 sm:w-1/4   font-bold text-white bg-blue-500 hover:bg-blue-700 rounded-full px-3 py-1">Submit</button></div>
        </div>
      </div>

    </>
  )
}

import React from 'react'
import Contact_2 from './Contact_2'
import Contact_3 from './Contact_3'

export default function Contact_1() {

  return (

    <>
      <div className="">
        <div className="">
          <h1 className="bg-[url(https://plus.unsplash.com/premium_photo-1661549545880-cdf61fd7bd9a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Ym9vayUyMGltYWdlfGVufDB8fDB8fHww)] h-80 w-full bg-cover bg-no-repeat"><h1 className=" flex justify-center pt-32 sm:text-2xl text-xl font-semibold ">CONTACT US</h1></h1>
        </div>

      </div>
      <div className="sm:flex px-4 sm:px-10 mb-10">

        <Contact_2 />
        <Contact_3 />
      </div>
    </>
  )
}

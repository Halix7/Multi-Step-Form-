import React, { useState } from 'react'

const Add = ({ plan,services,setServices}) => {
  
  return (
    <main className="flex md:my-4 justify-center   ">
      <fieldset className="bg-white flex flex-col gap-3 p-5 py-8 m-5 md:py-10 md:px-14 rounded-xl   ubuntu  relative bottom-40 md:bottom-0 shadow-xl md:shadow-none">
        <h1 className="text-[1.5rem] font-bold ubuntu marine-blue leading-6 md:text-[1.9rem]">
          Pick add-ons
        </h1>
        <p className="cool-gray font-normal leading-6 text-[1.1rem]  md:text-md">
         Add-ons help enhance your gaming experience.
        </p>
        <ul  className="grid gap-3  ">
          <li  className={`px-4 py-4 md:flex md:gap-5 md:p-3 border-2  md:pr-12  cursor-pointer justify-between items-center ${services.online ? " border-purple-800  bg-alabaster" : " border-gray-200"} flex rounded-lg  `} onClick={()=>setServices({...services,online:!services.online})}>
            <input type="checkbox" checked={services.online} className='w-4 h-4 '/>
            <div className="">
              <h2 className='font-bold marine-blue text-md md:text-lg'>Online service</h2>
              <p className='cool-gray text-sm md:text-md'>Access to multiplayer games</p>
            </div>
            <span className='text-sm md:text-md purplish-blue' >
              {plan ? "+$10/yr":"+$1/mo"}
            </span>
          </li>
          <li className={`px-4 py-4 md:flex md:gap-5 md:p-3 border-2 cursor-pointer md:pr-12 ${services.storage ? " border-purple-800 bg-alabaster" : " border-gray-200"}  flex  rounded-lg justify-between items-center  `} onClick={()=>setServices({...services,storage:!services.storage})}>
          <input type="checkbox" checked={services.storage} className='w-4 h-4 '/>
            <div className="">
              <h2 className='font-bold marine-blue text-md md:text-lg'>Larger storage</h2>
              <p className='cool-gray text-sm md:text-md'>Extra 1TB of cloud save</p>
            </div>
            <span className='text-sm md:text-md purplish-blue'>
            {plan ? "+$20/yr":"+$2/mo"}
            </span>
          </li>
          <li className={`px-4 py-4 md:flex md:gap-5 items-center cursor-pointer  md:p-3 border-2  md:pr-12 ${services.profile ? " border-purple-800 bg-alabaster" : " border-gray-200"} flex rounded-lg justify-between `} onClick={()=>setServices({...services,profile:!services.profile})}>
          <input type="checkbox" checked={services.profile} className='w-4 h-4 ' />
            <div className="">
              <h2 className='font-bold marine-blue text-md md:text-lg'>Customizable Profile</h2>
              <p  className='cool-gray text-sm md:text-md'>Custom theme on your profile</p>
            </div>
            <span className='text-sm md:text-md purplish-blue'>
            {plan ? "+$20/yr":"+$2/mo"}
            </span>
          </li>
        </ul>
        </fieldset>
    </main>
  
  )
}

export default Add
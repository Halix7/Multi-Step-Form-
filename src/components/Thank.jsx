import React from 'react'
import checkMark from "../assets/images/icon-checkmark.svg"
import thanks from "../assets/images/icon-thank-you.svg"
import { useNavigate } from 'react-router-dom'
const Thank = () => {
  const navigate=useNavigate();
  return (
    <main className='flex md:my-4  '>
      <fieldset className='bg-white flex flex-col gap-6 text-center p-5 py-8 m-5 md:py-10 md:px-14 rounded-xl   ubuntu  relative bottom-40 md:bottom-0 shadow-xl md:shadow-none'>
        <button onClick={()=> navigate("/")} className='cursor-pointer'>

      <img src={thanks} alt="Check Mark"  className='w-12 md:w-16 mx-auto' />
        </button>
      <div >

      <h1 className='text-xl font-bold ubuntu marine-blue leading-6 md:text-[1.9rem]'>Thank You !</h1>
      <p className='cool-gray font-normal leading-6 md:text-md mt-2'>Thanks for confirming your subscription! We hope you have fun <br /> using our platform.  If you ever need support, please feel free to email us at support@loremgaming.com</p>
     
     
      </div>
      </fieldset>
    </main>
  )
}

export default Thank
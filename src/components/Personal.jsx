import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Personal = ({formData,setFormData,required}) => {
 
  const handleChange=(e)=>{
    // console.log(e);
    const {value,name} = e.target;
    // console.log(value,name);
    
    setFormData((prev)=>
      
        name == "name" ? {...prev,name:value}: name == "email" ? {...prev,email:value} : name == "phone" ? {...prev,phone:value}: {...prev}
      
   )
  }
  


  return (
    <main className='flex md:my-4  '>
      <fieldset className='bg-white flex flex-col gap-3 p-5 py-8 m-5 md:py-10 md:px-14 rounded-xl   ubuntu  relative bottom-40 md:bottom-0 shadow-xl md:shadow-none'>

      <h1 className='text-xl font-bold ubuntu marine-blue leading-6 md:text-[1.9rem]'>Personal info</h1>
      <p className='cool-gray font-normal leading-6 md:text-md'>Please provide your name, email address, and phone number.</p>
      <form action="POST" className='md:max-w-2xl grid' >

      <label htmlFor="#name" className='text-sm md:text-md marine-blue leading-3 flex justify-between'>
        <h2>Name</h2>
        {required && formData.name ===""  ? (<p className='text-[0.8rem] text-red-500 font-bold'>This field is required</p>):""}
      </label>
        <input type="text" value={formData.name}  name={'name'} id='name'  onChange={handleChange} placeholder='e.g. Stephen King' className={`w-full  border-2 ${required && formData.name ==="" ? "focus:outline-red-700 border-red-600 border-solid":""}focus:outline-blue-900 cursor-pointer pl-3 text-lg 
 h-10 rounded-md mb-3 mt-2`} />
      <label htmlFor="#email" className='text-sm md:text-md marine-blue leading-3 flex justify-between'>
        <h2>

        Email Address
        </h2>
        {required && formData.email ===""  ? (<p className='text-[0.8rem] text-red-500 font-bold'>This field is required</p>):""}
      </label>
        <input type="email" value={formData.email} name={'email'}  id='email'  onChange={handleChange} placeholder='e.g. stephenking@lorem.com' className={`w-full pl-3 h-10  border-2 ${required && formData.email ===""  ? "focus:outline-red-700 border-red-600 border-solid":""} cursor-pointer text-lg focus:outline-blue-900
  rounded-md mb-3  mt-2`} />
      <label htmlFor="#number" className='text-sm md:text-md marine-blue leading-3 flex justify-between'>
       <h2>
         Phone Number
        </h2>
        {required && formData.phone ===""  ? (<p className='text-[0.8rem] text-red-500 font-bold'>This field is required</p>):""}
      </label>
        <input required type="number"  value={formData.phone} name={'phone'} id='number' onChange={handleChange}  placeholder='e.g. +1 234 567 890' className={`w-full pl-3 text-lg h-10  border-2 ${required && formData.phone ===""  ? "focus:outline-red-700 border-red-600 border-solid":""}  rounded-md cursor-pointer mb-3 focus:outline-blue-900  mt-2`} />
      
      </form>
      </fieldset>
    </main>
  )
}

export default Personal
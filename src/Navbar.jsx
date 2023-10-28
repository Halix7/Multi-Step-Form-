import React from 'react'
import { NavLink, useLocation } from 'react-router-dom';
// import BgMob from "./assets/images/bg-sidebar-desktop.svg";

const Navbar = () => {
    const location=useLocation();
  return (
    <nav className={`flex justify-center md:w-[30%] md:justify-start md:m-5 md:rounded-xl w-full h-[16rem] md:h-[60vh] border bg-[url('./assets/images/bg-sidebar-mobile.svg')] md:bg-[url(./assets/images/bg-sidebar-desktop.svg)] bg-no-repeat object-fill bg-center bg-cover  `}>
        
        <ul  className=" flex mt-14 text-white md:flex  md:flex-col  md:gap-7 md:mx-7" >
        
        
        <li className='md:flex md:gap-1'>

        <h1 className={`p-[0.4rem] px-[0.7rem] md:p-[0.6rem] md:px-[1rem] rounded-full border text-sm md:text-md font-bold  mx-3 ${location.pathname === "/" ? "bg-light-blue  marine-blue":""}`}  >
            1
        </h1>
        <div className='text-left hidden lg:block'>
            <p className='cool-gray text-[0.8rem] '>STEP 1</p>

            <h2 className='font-bold '>YOUR INFO</h2>
        </div>
        </li>
        <li className='md:flex md:gap-1'>
        <h1   className={`p-[0.4rem] px-[0.7rem]  md:p-[0.5rem] md:px-[1rem] rounded-full border text-sm md:text-lg  font-bold  mx-3  ${location.pathname === "/plans" ? "bg-light-blue  marine-blue":""}`} >
            2
        </h1>
        <div className='text-left hidden lg:block'>
            <p className='cool-gray text-[0.8rem]'>STEP 2</p>

            <h2 className='font-bold '>SELECT PLAN</h2>
        </div>
        </li>
        <li className='md:flex md:gap-1'>
        <h1  className={`p-[0.4rem] px-[0.7rem]  md:p-[0.5rem] md:px-[1rem] rounded-full border text-sm md:text-lg  font-bold  mx-3  ${location.pathname === "/add" ? "bg-light-blue  marine-blue":""}`}  >
            3
        </h1>
        <div className='text-left hidden lg:block'>
            <p className='cool-gray text-[0.8rem]'>STEP 3</p>

            <h2 className='font-bold  '>ADD-ONS</h2>
        </div>
        </li>

        <li className='md:flex md:gap-1'>
        <h1  className={`p-[0.4rem] px-[0.7rem]  md:p-[0.5rem] md:px-[1rem] rounded-full border text-sm md:text-lg  font-bold  mx-3  ${location.pathname === "/finish" || location.pathname === "/thank"  ? "bg-light-blue  marine-blue":""} `}  >
            4
        </h1>
        <div className='text-left hidden lg:block'>
        <p className='cool-gray text-[0.8rem]'>STEP 4</p>

        <h2 className='font-bold  '>SUMMARY</h2>
    </div>
    </li>
        </ul>
    </nav>
  )
}

export default Navbar
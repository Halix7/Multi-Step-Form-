import React, { useRef, useState } from "react";
import arcade from "../assets/images/icon-arcade.svg";
import advanced from "../assets/images/icon-advanced.svg";
import pro from "../assets/images/icon-pro.svg";

const Plans = ({plan,setPlan,choosePlan,setChoosePlan}) => {
  
  return (
    <main className="flex md:my-4 justify-center   ">
      <fieldset className="bg-white flex flex-col gap-3 p-5 py-8 m-5 md:py-10 md:px-14 rounded-xl   ubuntu  relative bottom-40 md:bottom-0 shadow-xl md:shadow-none">
        <h1 className="text-[1.5rem] font-bold ubuntu marine-blue leading-6 md:text-[1.9rem]">
          Select your plan
        </h1>
        <p className="cool-gray font-normal leading-6 text-[1.1rem]  md:text-md">
          You have the option of monthly or yearly billing.
        </p>
        <ul  className="grid gap-3 md:grid-cols-3 ">
          <li  className={`px-4 py-4 md:flex md:flex-col md:p-3 border-2  md:pr-12  ${choosePlan.arcade ? " border-purple-800  bg-alabaster" : " border-gray-200"} flex rounded-lg gap-3 `} onClick={()=>setChoosePlan({arcade:true,advanced:false,pro:false})}>
            <img src={arcade} className="w-10 md:w-14" alt="arcade" />
            <div className="">
              <h2 className="marine-blue font-bold">Arcade</h2>
              <p className="text-sm cool-gray">{plan ? "$90/yr" : "$9/mo"}</p>
              {plan ? (
                <p className="text-[0.8rem] marine-blue">2 Months free</p>
              ) : (
                ""
              )}
            </div>
          </li>
          <li className={`px-4 py-4 md:flex md:flex-col md:p-3 border-2 md:pr-12 ${choosePlan.advanced ? " border-purple-800 bg-alabaster" : " border-gray-200"}  flex  rounded-lg gap-3 `} onClick={()=>setChoosePlan({arcade:false,advanced:true,pro:false})}>
            <img src={advanced} className="w-10 md:w-14 " alt="advanced" />
            <div>
              <h2 className="marine-blue font-bold">Advanced</h2>
              <p className="text-sm cool-gray">{plan ? "$120/yr" : "$12/mo"}</p>
              {plan ? (
                <p className="text-[0.8rem] marine-blue">2 Months free</p>
              ) : (
                ""
              )}
            </div>
          </li>
          <li className={`px-4 py-4 md:flex md:flex-col md:p-3 border-2  md:pr-12 ${choosePlan.pro ? " border-purple-800 bg-alabaster" : " border-gray-200"} flex rounded-lg gap-3 `} onClick={()=>setChoosePlan({arcade:false,advanced:false,pro:true})}>
            <img src={pro} className="w-10 md:w-14" alt="pro" />
            <div>
              <h2 className="marine-blue font-bold">Pro</h2>
              <p className="text-sm cool-gray">{plan ? "$150/yr" : "$15/mo"}</p>
              {plan ? (
                <p className="text-[0.8rem] marine-blue">2 Months free</p>
              ) : (
                ""
              )}
            </div>
          </li>
        </ul>
        <section className="flex justify-center bg-magnolia py-3 items-center rounded-lg gap-2 mt-4">
          <h4 className={`text-sm font-bold ${plan ? "marine-blue":"cool-gray"}`}>Monthly</h4>
          <button className="bg-marine-blue w-10 h-5 rounded-xl " onClick={()=> setPlan(!plan)}>
             <span className={`w-4 h-4   rounded-full transition-all ease-in-out delay-75 bg-white flex ${plan ? "translate-x-5":"translate-x-1"}`}></span> 
          </button>
          <h4 className={`text-sm font-bold   ${plan ? "cool-gray":"marine-blue"}`}>Yearly</h4>
        </section>
      </fieldset>
    </main>
  );
};

export default Plans;

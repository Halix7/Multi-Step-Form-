import React from 'react'
import { Link } from 'react-router-dom'

const Finish = ({ plan,choosePlan,services}) => {
  const obj=Object.keys(choosePlan).filter(item=>  choosePlan[item]=== true);
  const servicesObj=Object.keys(services).filter(item=>services[item]===true);
  let sum=0;
  console.log(obj)
  const checkRate=()=>{
    if(obj[0]==="arcade"){
      if(plan){
        sum+=90;
        return "$90/yr";
      }
      sum+=9;
      return "$9/mo"
    }
    else if(obj[0]==="advanced"){
      if(plan){
        sum+=120;
        return "$120/yr";
      }
      sum+=12;
      return "$12/mo"
    }
    else{
      if(plan){
        sum+=150;
        return "$150/yr";
      }
      sum+=15;
      return "$15/mo"
    }
    
  }
  const checkServiceRate=(pack)=>{
    if(pack==="online"){
      if(plan){
        sum+=10;
        return "$10/yr";
      }
      sum+=1;
      return "$1/mo"
    }
    else if(pack==="storage"){
      if(plan){
        sum+=20;
        return "$20/yr";
      }
      sum+=2;
      return "$2/mo"
    }
    else{
      if(plan){
        sum+=20;
        return "$20/yr";
      }
      sum+=2;
      return "$2/mo"
    }
    
  }
  return (
    <main className="flex md:my-4 justify-center   ">
      <fieldset className="bg-white flex flex-col gap-3 p-5 py-8 m-5 md:py-10 md:px-14 rounded-xl   ubuntu  relative bottom-40 md:bottom-0 shadow-xl md:shadow-none">
        <h1 className="text-[1.5rem] font-bold ubuntu marine-blue leading-6 md:text-[1.9rem]">
          Finishing up
        </h1>
        <p className="cool-gray font-normal leading-6 text-[1.1rem]  md:text-md">
         Double-check everything looks OK before confirming.
        </p>
        <section className='bg-alabaster px-5 py-6 rounded-xl '>
          <div className="flex justify-between  items-center ">
            <div>
              <h2 className='text-sm md:text-lg font-bold marine-blue'>{obj[0].charAt(0).toUpperCase() + obj[0].slice(1) } ({plan  ? "Yearly":"Monthly"})</h2>
              <Link to={"/plans"} className='underline text-sm md:text-md cool-gray '>Change</Link>
            </div>
            <span className='text-sm md:text-lg font-bold marine-blue'>{checkRate()}</span>
          </div>
          <hr className='my-4' />
          {
            servicesObj.map((pack,key)=>(
              <div key={key} className="flex justify-between items-center my-2">
              <h2 className='text-sm md:text-lg cool-gray'>{pack === "online" ? "online service":pack === "storage" ? "large storage":pack === "profile" ? "customizable profile":""}</h2>
              <span className='marine-blue text-sm md:text-md'>{checkServiceRate(pack)}</span>
              
            </div>
            ))
          }
          
        </section>
        <div className='flex justify-between items-center'>
          <h2 className='text-sm md:text-lg cool-gray'>Total (per {plan  ? "Year":"Month"})</h2>
          <span className='font-bold purplish-blue md:text-xl'>${sum}/yr</span>
        </div>
        </fieldset>
    </main>
  )
}

export default Finish;
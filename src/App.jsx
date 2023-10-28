import { useEffect, useState } from 'react'
import {
  Routes,
  Route,
  useNavigate,
  useLocation
} from "react-router-dom";
import './App.css'
import Navbar from './Navbar';
import Personal from './components/Personal';
import Plans from './components/Plans';
import Add from './components/Add';
import Finish from './components/Finish';
import Thank from './components/Thank';


function App() {
  const location=useLocation();
  const navigate=useNavigate();
  const [required, setRequired] = useState(false);
  const [formData, setFormData] = useState({
    name:"",
    email:"",
    phone:""
  })
  const [plan, setPlan] = useState(false);
  const [choosePlan, setChoosePlan] = useState({
    arcade: true,
    advanced: false,
    pro: false,
  });
  const [services, setServices] = useState({
    online:false,
    storage:false,
    profile:false
  })
  useEffect(() => {
    navigate("/")
  }, [])
  
  // console.log(location);
  const handleNext=()=>{
    if(formData.name === "" || formData.email === "" || formData.phone === ""){
      setRequired(true);
      return
    }
    setRequired(false);
    navigate(location.pathname === "/"?"/plans":location.pathname === "/plans"? "/add": location.pathname === "/add"? "/finish": location.pathname === "/finish"? "/thank": "/");
  }
  const handleGoBack=()=>{
    navigate(location.pathname === "/plans"? "/": location.pathname === "/add"? "/plans": location.pathname === "/finish"? "/add": location.pathname === "/finish"? "/thank" :"/");
  }
  return (
    <div className='md:flex md:justify-center md:items-center md:min-h-screen'>
      <div className='md:bg-white md:flex   '>

      <Navbar/>
      <div>

      <Routes >
        <Route exact path='/' element={<Personal required={required} formData={formData} setFormData={setFormData} />}/>
        <Route exact path='/plans' element={<Plans plan={plan} setPlan={setPlan} choosePlan={choosePlan} setChoosePlan={setChoosePlan}/>}/>
        <Route exact path='/add' element={<Add  plan={plan} services={services} setServices={setServices}/>}/>
        <Route exact path='/finish' element={<Finish plan={plan} choosePlan={choosePlan} services={services}/>}/>
        <Route exact path='/thank' element={<Thank/>}/>
      </Routes>
      <footer className={` absolute md:relative bottom-0 right-0 w-full md:top-0  bg-white md:bg-transparent py-2 md:py-0 ${location.pathname === "/thank" ? "hidden":""}`} >
        <div className={`w-full h-12 flex ${location.pathname === "/" ? "justify-end":"justify-between"} items-center px-4 md:pr-16`}>
        {
          location.pathname === "/" ? "":<button className='  font-bold marine-blue ' onClick={handleGoBack}>Go Back</button>
        }
        
        <button type='submit' className={`  alabaster text-sm ubuntu px-4 py-2 rounded-md ${location.pathname === "/finish" ? "bg-purplish-blue":"bg-marine-blue"}`} onClick={handleNext}>
          {
            location.pathname === "/finish" ? "Confirm":"Next Step"
          }
        </button>
        </div>
      </footer>
      </div>
      </div>
    </div>
  )
}

export default App

import React, { useEffect, useState } from 'react'
import Logo from '../Assets/Mainlogo.png' ; 
import '../styles/Loader.css'
import {useNavigate} from 'react-router-dom'

function OpeningLoader() {

  const [loader,setLoader] = useState(0) ; 
  const navigate = useNavigate() ;

  useEffect(()=>{

    const interval = setInterval(()=>{

      setLoader((prevCouter=>{
        if(prevCouter>=0 && prevCouter<100){
          return prevCouter+1 ; 
        }else{
          return prevCouter ; 
        }
      }))

    },20)

    return()=>{
      clearInterval(interval);
    }
  },[])






  return (
   <>
          <div className='OpeningLoader-Container w-screen h-screen bg-[#978080] flex flex-col items-center justify-center'>
           <img src={Logo} alt="OpeningLogo-image" className='OpeningLogo-image w-60'></img> 
           <div className='Loader-container w-[15vw] sm:w-[15vw] h-[5px] bg-slate-300 rounded-xl'>
            <div className='  h-[5px] bg-white rounded-xl' style={{width:`${loader}%`}}></div>
           </div>
          </div>
     {loader===100?navigate('/Home'):null}




   </>
  )
}

export default OpeningLoader
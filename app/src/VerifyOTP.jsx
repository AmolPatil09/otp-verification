import React, { useEffect, useRef, useState } from 'react'
import './VerifyOTP.css'
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
export default function VerifyOTP() {
    const [OTP,setOTP]=useState(new Array(4).fill(""));
    const [btn,setBtn]=useState(true);
    const inputRefs=useRef([]);
    const location=useLocation();
    const {state}=location;
    const navigate=useNavigate();
    
  
    useEffect(()=>{
        if(inputRefs.current[0])
        {
            inputRefs.current[0].focus();
        }
       
    console.log(inputRefs);
    
   
   },[])


   const handaleChange=(e,index)=>{
    const value=e.target.value;
    if(isNaN(value)) return;
    const newOtp=[...OTP];
    newOtp[index]=value.substring(value.length-1);
    console.log(value.substring(value.length-1));

    setOTP(newOtp)
    console.log(OTP);
    console.log(value);
    
    
    if (!(value=="") && index < 3 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1].focus();
    }
   

   }

   const handleClick = (index) => {
    inputRefs.current[index].setSelectionRange(1, 1);

    
    if (index > 0 && !OTP[index - 1]) {
      inputRefs.current[OTP.indexOf("")].focus();
    }
  };
  const handleKeyDown = (index, e) => {
    if (
      e.key === "Backspace" &&
      !OTP[index] &&
      index > 0 &&
      inputRefs.current[index - 1]
    ) {
      inputRefs.current[index - 1].focus();
    }
  };

  const submitOTP=()=>{
    let Otp="";
     for(let i=0;i<4;i++)
     {
      Otp+=inputRefs.current[i].value;
     }
     console.log(Otp);
     console.log(state.otp);
     if(Otp==state.otp){
      console.log("OTP Verified");
      navigate('/dashbord')
     }
     else{
      navigate('/unauthrize')
     }

  }

     
  return (
    <div className='container mainDiv'>
        <h2 className='mt-3'>Enter OTP</h2>
        <h5 className='mt-3'>OTP send at {state.mobileNo}</h5>
       <div className='OTPDiv'>
        {
            OTP.map((m,index)=>{
              return  <input  className='OTPField form-control text-center'
                type='text' ref={(input)=>{
                    inputRefs.current[index]=input
                }}
                key={index}
                onChange={(e)=>
                   handaleChange(e,index) 
                }
                value={m}
                onClick={() => handleClick(index)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                />
            })
        }
       
       </div>
       <button className='btn btn-primary mt-3 mb-3' onClick={submitOTP} >Verify OTP</button>

      
    </div>
  )
}

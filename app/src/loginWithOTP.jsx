import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


export default function loginWithOTP() {
    const [mobileNo, setMobileNo]=useState();
    const [valid ,setValid]=useState(true)
    const [mobileNoError,setMobileNoError]=useState("");
    const navigate=useNavigate();
   const handleChange=(e)=>{
     if(String(e.target.value).length==10)
     {
        setMobileNoError("");
        setMobileNo(e.target.value)
        setValid(false)
     }
     else{
        setMobileNoError("Mobile No should 10 digit" );
        setValid(true)
     }
    }
    const generateOTP=()=>{
        let otp='';
        for(let i=0;i<4;i++)
        {
            otp+=String(Math.floor(Math.random()*10));
        }
        console.log(otp);
        navigate('/verifyotp',{
            state:{

                mobileNo:mobileNo,
                otp:otp
                
            }
        })

    }
    const submit=()=>{
        console.log(mobileNo);
       console.log();
       generateOTP()
       
       
        
       }
        
    
  return (
   <>
  <div className='container' style={{maxWidth:'500px',border:'2px solid black',padding:'20px',borderRadius:'10px' }}>
    <h2>Login With OTP</h2>
    <div>
        <label className='form-lable'>Mobile No</label>
        <input
        type='number'
        id='mobileNo'
        name='mobileNo'
        className='form-control'
       onChange={handleChange}
        />

    </div>
    {mobileNoError&&<p className='text-danger'>{mobileNoError}</p>}
   <button className='btn btn-primary mt-1 text-left' disabled={valid} onClick={submit}>Send OTP</button>

  </div>
   </>
  )
}

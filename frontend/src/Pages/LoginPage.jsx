import React from 'react'
import './Css/LoginPage.css'
import { useState } from 'react'
export default function LoginPage() {
  const [state,setState] = useState("Login");
  const [formData,setformData] = useState({
    username:"",
    password:"",
    email:""
  })
  const changeHandler = (e)=>{
       setformData({...formData,[e.target.name]:e.target.value})
  }
  const changeState = () =>{
    if (state === "Login") {
      setState("Sign Up")
    }else{
      setState("Login")
    }
   
  }
  const login = async () => {
    console.log("this is login",formData)
    let responseData;
    await fetch("http://localhost:4000/login",{
      method:'POST',
      headers:{
        Accept:'application/form-data',
        'Content-Type':'application/json',
      },
      body:JSON.stringify(formData),
    }).then((response)=>response.json()).then((data)=>responseData=data)
    if (responseData.success) {
      localStorage.setItem('auth-token',responseData.token)
      window.location.replace("/");
    }else{
      alert(responseData.errors)
    }
  }
  const signup = async () => {
    console.log("this is sign up",formData)
    let responseData;
    await fetch("http://localhost:4000/signup",{
      method:'POST',
      headers:{
        Accept:'application/form-data',
        'Content-Type':'application/json',
      },
      body:JSON.stringify(formData),
    }).then((response)=>response.json()).then((data)=>responseData=data)
    if (responseData.success) {
      localStorage.setItem('auth-token',responseData.token)
      window.location.replace("/");
    }else{
      alert(responseData.errors)
    }
  }

  return (
    <div className='loginsignup'>
      <div className='loginsignup-container'>
        <h1>{state}</h1>
        <div className='loginsignup-fields'>
          
       {state==="Sign Up"?<input type='text' placeholder='your name' name='username' value={formData.username} onChange={changeHandler}></input>
       :""}     
    <input type='email' placeholder='your mail' name='email' value={formData.email} onChange={changeHandler}></input>
        <input type='password' placeholder='your password' name='password' value={formData.password} onChange={changeHandler}></input>
        
        </div>
        <button onClick={()=>{state==="Login"?login():signup()}}>Continue</button>
      <p className="loginsignup-login">Already have an account?<span onClick={()=>changeState()} style={{cursor:"pointer"}}>Login here!</span> </p>
       <div className='loginsignup-agree'>
        <input type="checkbox" name='' id='cbcss'></input>
         
       <p>By Continuing,i agree to the Terms&Conditions</p>
       </div>
 
      </div>
    </div>
  )
}

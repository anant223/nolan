import React, { useState } from 'react'
import authService from '../appwrieService/authService'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { login } from '../redux_slice/authSlice'

const Auth = () => {
  const {register, handleSubmit} = useForm()
  const [state, setState] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch();


  const handleAuthSession = async (data) =>{
    try {
      let user;
      if(!state){
        const loggedInUser = await authService.login(data);
        if (loggedInUser) {
          user = await authService.getCurrentUser();
          console.log(user);
        }
      }else{
        const newUser = await authService.createAccount(data);
        if(newUser){
          user = await authService.getCurrentUser();
        }     
      }
      if(user){
        dispatch(login(user))
        navigate("/dashboard");
      }
    } catch (error) {
      console.error("Authentication error:", error.message);
      throw (error.message)
    }
  }



  const signupORLogin = ()=>{
    setState(!state)
  }


  return (
    <div className="border-white py-6 px-10 bg-gray-700 sm:h-[460px] sm:w-[340px] bg-opacity-30 text-center rounded-md">
      <label className="">
        <h1 className=" font-semibold text-3xl py-6">{!state ? "Login" : "Sign Up"}</h1>
      </label>
      <form onSubmit={handleSubmit(handleAuthSession)}>
        <div className="mb-6">
          <input
            type="email"
            name="email"
            placeholder="Your Email..."
            className="py-4 px-4 w-full bg-gray-700 rounded-md"
            {...register("email", {required:true})}
          />
        </div>
        <div className="mb-6">
          <input
            className="py-4 px-4 w-full bg-gray-700 rounded-md"
            type="password"
            name="password"
            placeholder="Your Password..."
            {...register("password", {required:true})}
          />
        </div>
        <div>
          <button className='bg-gray-700 py-4 px-6 rounded w-full'>{!state ? "Login" : "Sign Up"}</button>
        </div>
        <div className=" p-2 text-justify">
          {!state ? "Don't have an account : -" : "Already have an account"} <Link onClick={signupORLogin} className=' border-b hover:text-gray-400' >{!state ? "Register Here" : "Login Here"}</Link>
        </div>
      </form>
    </div>
  );
}

export default Auth
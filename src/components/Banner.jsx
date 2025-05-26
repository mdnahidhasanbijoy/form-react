import React, { useState } from 'react'
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";

const Banner = () => {

   const [email,setEmail] = useState("")
   const [password,setPassword] = useState("")  
   const [emailError,setEmailError] = useState("")
   const [passwordError,setPasswordError] = useState("")
    const [showPassword, setShowPassword] = useState(false);


   const HandleEmail = (e)=>{
        setEmail(e.target.value)
        setEmailError("");
   }

   const HandlePassword =(e)=>{
        setPassword(e.target.value)
        setPasswordError("");
   }

   const HandleClick = (e)=>{
      if (!email) {
        e.preventDefault();
        setEmailError("Please enter your email")
      }
      if (!password) {
        setPasswordError("Please enter your password")
      }
   }

     const handleToggle = () => {
        setShowPassword(!showPassword);
    };

    

    return (
        <div>

            <form className="max-w-sm mx-auto my-15">
                <div className="mb-5">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                    <input onChange={HandleEmail} type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" />
                    <h2 className='text-red-500 font-black'>{emailError}</h2>
                </div>
                <div className="mb-5">
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                <div className='relative'>
                        <input onChange={HandlePassword} type={showPassword? 'text' : 'password'} id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                       

                        { showPassword?
                            <FaRegEye onClick={handleToggle} className='absolute top-3 right-4' />
                           : <FaRegEyeSlash onClick={handleToggle} className='absolute top-3 right-4'/>

                        }

                </div>
                    <h2 className='text-red-500 font-black'>{passwordError}</h2>                    
                </div>
                <div className="flex items-start mb-5">
                    <div className="flex items-center h-5">
                        <input id="remember" type="checkbox" defaultValue className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" />
                    </div>
                    <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                </div>
                <button
                  onClick={HandleClick}
                  type="submit"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>



        </div>
    )
}

export default Banner

import React, { useState,useEffect } from 'react'
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
import { ToastContainer, toast,Bounce } from 'react-toastify';
import { getDatabase, push, ref, set, onValue } from "firebase/database";


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
   

//    const HandleClick = (e)=>{
//       if (!email) {
//         e.preventDefault();
//         setEmailError("Please enter your email")
//       }
//       if (!password) {
//         setPasswordError("Please enter your password")
//       }
//    }

    const notify = () => {
        task == ''?
        toast.error('please enter your task!', {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
        }) : 
        toast.success('successful!', {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
        });
    }

    const [task, setTask] = useState('')
    const [taskError, setTaskError] = useState('')
    const [alltask, setAllTask] = useState([])

     const handleToggle = () => {
        setShowPassword(!showPassword);
    };

    const HandleSubmit =(e)=>{
        console.log(task);
        e.preventDefault()

     if (!task) {
        setTaskError('please enter your task')
        notify()
     }else{
         const db = getDatabase();
         set(push(ref(db, "todo/"), {
           todoName:task,
            }).then(()=>{
                notify()
            })
        )
            }
     }
     
    useEffect(()=>{
        const db = getDatabase();
        const todoRef = ref(db, 'todo/');
        onValue(todoRef, (snapshot) => {
        const data = snapshot.val();
        const Arr = []
            snapshot.forEach((item)=>{
            Arr.push(item.val());
            setAllTask(Arr)
                
            })
        },[]);

    })


    const HandleTask =(e)=>{
        setTaskError('')
       setTask(e.target.value)
        
    }


    return (
        <div>

            <form className="max-w-sm mx-auto my-[100px]">
               <ToastContainer
                    position="top-center"
                    autoClose={1000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick={false}
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="dark"
                    transition={Bounce}
                />
                <div className="mb-5">
                    <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your task</label>
                    <input onChange={HandleTask} type="text" id="text" className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="enter your task" />
                    <h2 className='text-red-500 font-black'>{taskError}</h2>
                </div>                  
                <button
                  onClick={HandleSubmit}
                  type="submit"
                  className="text-white bg-blue-700 hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-6 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            
                <div className='flex justify-center '>
                    <ul className="w-full mt-5 text-sm font-medium text-gray-200 bg-black border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                    {
                        alltask.map((item)=>{
                        return( 
                            <li className="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600 flex justify-between items-center">
                                {item.todoName}
                            <button className='px-4 py-2 bg-red-700 '>Delete</button>
                            </li>
                            )

                        })
                    }
                    </ul>
                </div>

            </form>

        

            

        </div>
    )

}
export default Banner

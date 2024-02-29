import React from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import Loginpic from '../assets/loginPic.svg'
import{Link} from 'react-router-dom'

function Login() {
  return (
    <div>
        <Navbar/>
        <div className='flex w-[1000px] h-[600px] bg-gray-100 m-auto rounded-3xl p-8 my-7'>
          <div className=' p-5 flex-1'>
            <form>
            <h2 className='text-2xl font-bold mb-10 text-center'>LogIn To  Your Account</h2>
            <div className='mb-4'>
                <input
                    type="text"
                    placeholder='Enter the name'
                    className='w-full p-2 border rounded'
                   
                   
                />
            </div>

            <div className='mb-4'>
                <input
                    type="text"
                    placeholder='Enter the E-mail'
                    className='w-full p-2 border rounded'
                    
                />
            </div>
            <div className='flex justify-between'>
                {/* <div className='flex'>
                <input className="w-5 h-5" type="checkbox" id="myCheckbox" name="myCheckbox"/>
                <div className='-mt-1 pl-3'> <label for="myCheckbox">Accept all Terms:</label></div>
                </div> */}

                <div className='text-green-600 -mt-1'>
                    Forget Password
                </div>
            </div>

                <button className='bg-green-500 w-full text-white px-4 py-2 rounded mt-6  hover:bg-green-900'>Log in</button>    
            </form>
            <h1 className='text-center mt-10'> Not Register Yet? <Link to="/register" className=" text-green-600 hover:opacity-95 cursor-pointer">Register</Link></h1>
            <h1></h1>
          </div>
          <div><img className='w-96 h-96' src={Loginpic} alt="" /></div>
        </div>
       
    </div>
  )
}

export default Login
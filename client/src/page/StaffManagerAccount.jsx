import React from 'react'
import Navbar from '../component/Navbar'
import { Link } from 'react-router-dom';
import userPic from '../assets/userSh.png'


function StaffManagerAccount() {
  return (
    <div>
      <Navbar/>
      <div className='flex'>
        <div className='flex w-[300px] h-[1200px] bg-lime-900'>
          <div className='p-5'>
            <button className='w-[230px] h-[40px] bg-gray-500 text-white rounded-2xl text-center my-3'><Link to="/StaffManagerAccount">StaffManagerAccount</Link></button>
            <button className='w-[230px] h-[40px] bg-gray-200 rounded-2xl text-center my-3'><Link to="/PaymentInforStaffMan">Payment Infor</Link></button>
            <button className='w-[230px] h-[40px] bg-gray-200 rounded-2xl text-center my-3'><Link to="/Responce">Responce</Link></button>
            <button className='w-[230px] h-[40px] bg-gray-200 rounded-2xl text-center my-3'><Link to="/AllStaffGet">Staff Infor</Link></button>

          </div>
        </div>
        <div>
          <h1 className='text-3xl text-center'>Staff Account Manager</h1>
          <div className='w-[150px] h-[150px]  rounded-full ml-[500px] mt-5 bg-gray-300 pt-3 -mb-[150px]'>
            <img src={userPic} alt="user image" className='w-[100px] h-[100px] m-auto ' />
          </div>
          <div className=' w-[700px] h-[600px] bg-gray-300 rounded-lg ml-52 mt-32'>
            <form className='px-6 py-8'>
               <input
                className='w-[600px] h-[50px] ml-3 rounded-3xl px-5 py-2 my-4' 
                type="text" 
                placeholder="Username"/>

                <input
                className='w-[600px] h-[50px] ml-3 rounded-3xl px-5 py-2 my-4' 
                type="text" 
                placeholder="Email-address"/>


                <input
                className='w-[600px] h-[50px] ml-3 rounded-3xl px-5 py-2 my-4' 
                type="text" 
                placeholder="Gender"/>


                <input
                className='w-[600px] h-[50px] ml-3 rounded-3xl px-5 py-2 my-4' 
                type="text" 
                placeholder="Expreience"/>


                <input
                className='w-[600px] h-[50px] ml-3 rounded-3xl px-5 py-2 my-4' 
                type="text" 
                placeholder="Branch"/>


                <button className='w-[150px] h-[40px] bg-green-900 text-white rounded-xl text-center ml-96 mt-6'>Update</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StaffManagerAccount
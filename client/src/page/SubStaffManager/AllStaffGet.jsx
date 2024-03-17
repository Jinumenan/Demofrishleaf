import React from 'react'
import Navbar from '../../component/Navbar'
import { Link } from 'react-router-dom';
import userPic from '../../assets/userSh.png'

function AllStaffGet() {
  return (
    <div>
    <Navbar/>
  
    <div className='flex'>
      <div className='flex w-[300px] h-[1200px] bg-lime-900'>
        <div className='p-5'>
        <button className='w-[230px] h-[40px] bg-gray-200 rounded-2xl text-center my-3'><Link to="/StaffManagerAccount">StaffManagerAccount</Link></button>
            <button className='w-[230px] h-[40px]  bg-gray-200 rounded-2xl text-center my-3'><Link to="/PaymentInforStaffMan">Payment Infor</Link></button>
            <button className='w-[230px] h-[40px]  bg-gray-200  rounded-2xl text-center my-3'><Link to="/Responce">Responce</Link></button>
            <button className='w-[230px] h-[40px]  bg-gray-500 text-white  rounded-2xl text-center my-3'><Link to="/AllStaffGet">Staff Infor</Link></button>

        </div>
      </div>
      <div>
        <h1 className='text-center text-3xl'>Staff Details</h1>
         
          <div className='min-h-[200px] w-[1200px] ml-2 bg-gray-200'>
        <h1>Show all request</h1>
        </div>
      </div>
    </div>
  </div>
  )
}

export default AllStaffGet
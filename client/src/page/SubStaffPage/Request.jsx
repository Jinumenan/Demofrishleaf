import React from 'react'
import Navbar from '../../component/Navbar'
import { Link } from 'react-router-dom';

function Request() {
  return (
    <div>
    <Navbar/>
  
    <div className='flex'>
      <div className='flex w-[300px] h-[1200px] bg-lime-900'>
        <div className='p-5'>
          <button className='w-[230px] h-[40px] bg-gray-200 rounded-2xl text-center my-3'><Link to="/staffAccount">Details</Link></button>
          <button className='w-[230px] h-[40px] bg-gray-200 rounded-2xl text-center my-3'><Link to="/PaymentInforStaff">Payment Infor</Link></button>
          <button className='w-[230px] h-[40px] bg-gray-500 text-white  rounded-2xl text-center my-3'><Link to="/request">Request</Link></button>


        </div>
      </div>
      <div>
        <h1 className='text-center text-3xl'>Request</h1>
         
          <form className='px-6 py-8'>
            <input
            placeholder='Reson for Time off......  '
            className='px-5 py-3 w-[900px] ml-[100px]'
            /><br/> <br/>
            <button className='bg-green-900 text-white px-3 py-1 ml-[900px] rounded-lg'> Submit</button>
          </form>
          <div className='min-h-[200px] w-[1200px] ml-2 bg-gray-200'>
        <h1>Show all request</h1>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Request

import React, { useEffect, useState } from 'react'
import axios from "axios";
  import { Link } from 'react-router-dom'
import Navbar from '../../component/Navbar';
import Footer from '../../component/Footer';

function userFeedBack() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/server/FeedBackUser/getall") // Provide the correct URL here
      .then((result) => {
        console.log("data: ", typeof result.data.data); // Check the fetched data
        console.log("data: ", Object.values(result.data.data)); // Check the fetched data
        setUsers(result.data ? Object.values(result.data.data) : []);
      })
      .catch((err) => console.error(err)); // Log any errors
  }, []);
  

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3001/server/FeedBackUser/delete/${id}`)
      .then(res => {
        console.log(res);
        window.location.reload();
      })
      .catch(err => console.log(err));
  };

  return (
    <div className='userTable'>
      <Navbar/>
    <Link to={"/addUser"} className='addButton -ml-[900px] bg-green-500 text-white px-4 py-2 rounded-2xl'>Add Review</Link>

<div className='flex'>
<div className='flex w-[300px] h-[1200px] bg-lime-900'>
        <div className='p-5'>
          <button className='w-[230px] h-[40px] bg-gray-500 text-white rounded-2xl text-center my-3'><Link to="/userAccount">User Infor</Link></button>
          <button className='w-[230px] h-[40px] bg-gray-200 rounded-2xl text-center my-3'><Link to="/userPayment">Payment Infor</Link></button>
          <button className='w-[230px] h-[40px] bg-gray-200 rounded-2xl text-center my-3'><Link to="/UserProduct">Delivery Info</Link></button>
          <button className='w-[230px] h-[40px] bg-gray-200 rounded-2xl text-center my-3'><Link to="/userFeedback">FeedBack</Link></button>
          <button className='w-[230px] h-[40px] bg-gray-200 rounded-2xl text-center my-3'><Link to="/userFeedback">Promotion</Link></button>
        </div>
      </div>
      <div>
    {
      users.map((user, index) => (
        <div key={user._id} className='flex bg-gray-200 rounded-3xl ml-24 mt-6 w-[1000px] h-[250px]'>
\          <div className='flex-2 px-2 py-4'>
            <h1 className='font-bold mr-96  text-pretty text-2xl'>{user.name}</h1>
            <p className='mr-80 text-2xl text-center mt-5'> {user.rating} out of 5</p>
            <p className='text-center p-2 '>{user.des}</p>
            <div className='flex justify-center mt-5 ml-96'>
              <button onClick={() => handleDelete(user._id)} className='bg-red-500 text-white rounded-2xl px-4 py-1 mr-2'>Delete</button>
              <Link to={`/UserFeedBackUpdate/${user._id}`} className='bg-yellow-500 text-white rounded-2xl px-4 py-1 mr-2'>Update</Link>
            </div>
          </div>
        </div>
      ))
    }
    </div>
    </div>
    <Footer/>
  </div>
  )
}

export default userFeedBack
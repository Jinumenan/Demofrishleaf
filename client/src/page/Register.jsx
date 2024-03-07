import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import Navbar from '../component/Navbar';
import { Link } from 'react-router-dom';
import RegisterPic from '../assets/RegisterPic.svg';


function Register() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const res = await fetch('http://localhost:3001/server/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      const data = await res.json();
  
      if (data.success === false) {
        setError(data.message);
        return;
      }
  
      setError(null);
      alert("LogIn to Your  Account!");
      navigate("/login");

    } catch (error) {
      setError(error.message);
    }
  };
  
    
  
  return (
    <div>
    <Navbar/>
    <div className='flex w-[1000px] h-[600px] bg-gray-100 m-auto rounded-3xl p-8  my-7'>
      <div className=' p-5 flex-1'>
        <form onSubmit={handleSubmit}>
        <h2 className='text-2xl font-bold mb-10 text-center '>Create Your Account</h2>
        <div className='mb-4'>
            <input
                type="text"
                placeholder='Enter the name'
                className='w-full p-2 border rounded'
                onChange={handleChange}
                name='name'
                autoComplete='off'
                id='name'
            />
        </div>

        <div className='mb-4'>
            <input
                placeholder='Enter the E-mail'
                className='w-full p-2 border rounded'
                type='email'
                autoComplete='off'
                name='email'
                id='email'
                onChange={handleChange}
                
            />
        </div>
        <div className='mb-4'>
            <input
                type='password'
                placeholder='Enter the Password'
                className='w-full p-2 border rounded'
                name='password'
                id='password'
                onChange={handleChange}
                autoComplete='off'
            />
        </div>
    
        <div className='flex justify-between'>
            <div className='flex'>
            <input className="w-5 h-5" type="checkbox" id="myCheckbox" name="myCheckbox"/>
            <div className='-mt-1 pl-3'> <label for="myCheckbox">Accept all Terms:</label></div>
            </div>

            {/* <div className='text-green-600 -mt-1'>
                Forget Password
            </div> */}
        </div>

            <button className='bg-green-500 w-full text-white px-4 py-2 rounded mt-6  hover:bg-green-900'>Register Now</button>    
        </form>
        <h1 className='text-center mt-10'> Have An Account ? <Link to="/login" className=" text-green-600 hover:opacity-95 cursor-pointer">LogIn</Link></h1>
        <h1></h1>
      </div>
      <div><img className='w-96 h-96' src={RegisterPic} alt="" /></div>
    </div>
   
    
</div>
  )
}

export default Register
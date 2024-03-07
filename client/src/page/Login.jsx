import React, { useState } from 'react'
import Navbar from '../component/Navbar'
import Loginpic from '../assets/loginPic.svg'
import{Link,useNavigate } from 'react-router-dom'


function Login() {

  const [formDate, setFormData] = useState({});
  const navigate = useNavigate();
  const handleChange = (e)=>{
    setFormData({
  ...formDate,
  [e.target.id]:e.target.value,  
})
  }

  

const handleSubmit = async(e)=>{
  e.preventDefault();
  try {
    const res = await fetch('http://localhost:3001/server/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formDate),
    });

    const data = await res.json();
    console.log(data);

    if (data.success === false) {
      console.error(data.message);
      return;
    }
  
    const emailPrefix = formDate.email.toLowerCase().slice(0, 5);

    switch (emailPrefix) {
      case 'suppl':
        alert('You login Your Supplier Account');
        navigate('/supplierAccount');
        break;
      case 'staff':
        alert('You login Your Staff Account');
        navigate('/staffAccount');
        break;

      case 'stman':
        alert('You login Your Staff Manger Account');
        navigate('/staffManagerAccount');
        break;

      case 'shipm':
        alert('You login Your Shipment Account');
        navigate('/shipmentAccount');
        break;

      case 'marke':
        alert('You login Your Marketing Account');
        navigate('/marketingAccount');
        break;
      default:
        alert('You login Your User Account');
        navigate('/userAccount'); 
        break;
    }
  } catch (error) {
    console.error(error.message);
  }
  
}
  return (
    <div>
        <Navbar/>
        <div className='flex w-[1000px] h-[600px] bg-gray-100 m-auto rounded-3xl p-8 my-7'>
          <div className=' p-5 flex-1'>
            <form onSubmit={handleSubmit}>
            <h2 className='text-2xl font-bold mb-10 text-center'>LogIn To  Your Account</h2>
            <div className='mb-4'>
                <input
                    type="email"
                    placeholder="Enter the e-mail"
                    className='w-full p-2 border rounded'
                    onChange={handleChange} 
                    id='email'
                 />
                  
            </div>

            <div className='mb-4'>
                <input
                    type="password"
                    placeholder="Enter the password"
                    className='w-full p-2 border rounded'
                    onChange={handleChange}
                    id='password'
                    
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
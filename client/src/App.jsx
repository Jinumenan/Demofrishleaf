import './App.css'
import Home from './page/Home'
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Register from './page/Register'
import Login from './page/Login'
import SupplierAccount from './page/SupplierAccount'
import ShipmentAccount from './page/ShipmentAccount'
import MarketingAccout from './page/MarketingAccout'

import StaffManagerAccount from './page/StaffManagerAccount'
import PaymentInforStaffMan from './page/SubStaffManager/PaymentforStaffMan'
import AllStaffGet from './page/SubStaffManager/AllStaffGet'
import Responce from './page/SubStaffManager/Responce'

import StaffAccount from './page/StaffAccount'
import PaymentInforStaff from './page/SubStaffPage/PaymentInforStaff'
import Request from './page/SubStaffPage/Request'

import UserAccount from './page/UserAccount'
import Contact from './page/Contact'
import About from './page/About'
import OwnerPage from './page/OwnerPage'



function App() {

  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/Contact' element={<Contact/>}/>
    <Route path='/supplierAccount' element={<SupplierAccount/>}/>
    <Route path='/shipmentAccount' element={<ShipmentAccount/>}/>
    <Route path='/marketingAccount' element={<MarketingAccout/>}/>

    <Route path='/staffManagerAccount' element={<StaffManagerAccount/>}/>
    <Route path='/PaymentInforStaffMan' element={<PaymentInforStaffMan/>}/>
    <Route path='/AllStaffGet' element={<AllStaffGet/>}/>
    <Route path='/Responce' element={<Responce/>}/>

    <Route path='/staffAccount' element={<StaffAccount/>}/>
    <Route path='/PaymentInforStaff' element={<PaymentInforStaff/>}/>
    <Route path='/request' element={<Request/>}/>

    <Route path='/userAccount' element={<UserAccount/>}/>
    <Route path='/OwnerPage' element={<OwnerPage/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App

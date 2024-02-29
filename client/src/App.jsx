import './App.css'
import Home from './page/Home'
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Register from './page/Register'
import Login from './page/Login'
import SupplierAccount from './page/SupplierAccount'
import ShipmentAccount from './page/ShipmentAccount'
import MarketingAccout from './page/MarketingAccout'
import StaffManagerAccount from './page/StaffManagerAccount'
import StaffAccount from './page/StaffAccount'
import UserAccount from './page/UserAccount'
import About from './page/About'

function App() {

  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/supplierAccount' element={<SupplierAccount/>}/>
    <Route path='/shipmentAccount' element={<ShipmentAccount/>}/>
    <Route path='/marketingAccount' element={<MarketingAccout/>}/>
    <Route path='/staffManagerAccount' element={<StaffManagerAccount/>}/>
    <Route path='/staffAccount' element={<StaffAccount/>}/>
    <Route path='/userAccount' element={<UserAccount/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App

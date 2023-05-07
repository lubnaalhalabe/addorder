import React from "react";
import {Routes , Route , Navigate}  from 'react-router-dom'
import Home from '../pages/Home'
import Allfoods from '../pages/Allfoods'
import Contact from '../pages/Contact'
import Cart from '../pages/Cart'
import Checkout from '../pages/Checkout'
import FoodDetails from '../pages/FoodDetails'
import Login from '../pages/Login';
import Register from '../pages/Register';
const Routers = () =>{
    return(
        <Routes>
            <Route path ='/' element={<Navigate to='/home' />} />
            <Route path='/Home' element={<Home />} />
            <Route path='/foods' element={< Allfoods />} />
            <Route path='/Foods/: id' element={<FoodDetails />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/cart' element={<Cart/>} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />

        </Routes>
    )
}
export default Routers;
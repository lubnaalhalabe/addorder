import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Routers from "../../routes/Routers"
import Carts from "../Ul/cart/Carts";
import { useSelector } from "react-redux";


const Layout = () =>{
    const showCart = useSelector(state => state.cartUi.cartIsVisible) 
    return(
        <div>
        <Header />
        {showCart  && <Carts />}
        <div >
            <Routers />
        </div>
        <Footer />  
        </div>
    );
}
export default Layout;
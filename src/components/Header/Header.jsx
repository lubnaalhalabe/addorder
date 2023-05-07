import React , {useRef , useEffect } from "react";
import { Container } from "reactstrap";
import 'remixicon/fonts/remixicon.css'
import '../../style/header.css'
import loge from '../../assets/image/1.jfif';
import {NavLink , Link} from "react-router-dom" ;
import { useSelector  , useDispatch} from "react-redux";
import { cartUiActions } from "../../store/shopping-cart/cartUiSlice";


const Nav__Link  = [
{
    display: "Home",
    path: "/Home"
} ,
{
    display: "Foods",
    path: "/foods"
} ,
{
    display: "Cart",
    path: "/cart"
} ,
{
    display: "Conact",
    path: "/conact"
} ,

]
const Header = () =>{
    const meunRef = useRef(null);
    const headerRef = useRef(null);
    const totalQuantity = useSelector(state => state.cart.totalQuantity)
    const  dispatch = useDispatch()
    const toggleMeun = () => meunRef.current.classList.toggle('show_menu')

     const toggleCart = ()=>{
        dispatch(cartUiActions.toggle())
     }



    useEffect(()=>{
       window.addEventListener('scroll' , ()=>{
        if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80)
        {
            headerRef.current.classList.add('header__shirck')
        }
        else{
            headerRef.current.classList.remove('header__shirck')
        }
       })
       return () => window.removeEventListener('scroll')
    },[])
    return(
        <header className="header " ref={headerRef}>
            <Container>
              <div className="nav__wrapper d-flex align-items-center justify-content-between">
                <div className="loge ">
                    <img src={loge} path="loge" />
                     <h5> Tasty Treat</h5>
                </div>
              {/*  ======================= */}

            <div className="navigation"  ref={meunRef}  onClick={toggleMeun} >
                <div className="menu  d-flex align-items-center gap-4 ">
                    {
                        Nav__Link.map((item,index) =>(
                            <NavLink
                            onClick={toggleMeun}
                             to={item.path}
                             key={index}
                             className={ navClass => navClass.isActive ? "active__menu" : " " }>
                             {item.display}
                             </NavLink>
                        ))}
                    

                </div>
            </div>
            {/* ================================ */}
            <div className="nav__right d-flex align-items-center gap-3">
                <span className="cart-icon"  onClick={toggleCart}>
                    <i class="ri-shopping-basket-line"></i>
                    <span className="cart-deger">{totalQuantity}</span>
                </span>
                
                <span className="user-icon">
                <Link to='/login'> <i class="ri-user-line"></i> </Link>
                </span>
                <span className="mobile-menu " onClick={toggleMeun}>
                <i class="ri-menu-line"></i>
                </span>
            </div>
            </div>
            </Container>
        </header>
    
    );
}
export default Header;
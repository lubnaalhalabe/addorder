import React from 'react'
import { ListGroupItem } from 'reactstrap'
import "../../../style/cart-item.css"
import { useDispatch } from 'react-redux'
import { cartActions } from '../../../store/shopping-cart/cartSlice';

const CartItem = ({item}) => {
  const {id , title , price , image01 , quantity , totalPrice } = item ;
  const dispath = useDispatch() ;
  const incrementItem = ()=> {
    dispath(cartActions.addItem({
      id, 
      title,
      price,
      image01,

    })
    );
  };
  const decreaseItem = () =>{
    dispath(cartActions.removeItem(id))
  };
  const deletItem = () =>
  {
    dispath(cartActions.deleteItem(id))
  }
  return <ListGroupItem className='border-0 cart-items'>
  <div className='cart-item-info d-flex gap-2'>
        <img src={image01} alt="product-info" />
     <div className="cart-product-info  w-100 d-flex align-items-center
      gap-4 justify-content-between">
        <div>
            <h6 className='cart-title'>{title}</h6>
            <p className=' d-flex align-items-center gap-5 cart-desc'>{quantity} x <span>${totalPrice}</span></p>
             <div className= 'd-flex align-items-center gap-3 cart-item-icon justify-content-between '>
                <span className='increase-btn' onClick={incrementItem}><i class="ri-add-line"></i></span>
                <span className='quantity'>{quantity}</span>
                <span className='decrease-btn'
                 onClick={decreaseItem}><i class="ri-subtract-line"></i></span>
             </div>
        </div> 
        <span className='delate-but' onClick={deletItem}><i class="ri-close-line"></i></span>
        </div>  
    </div>
    </ListGroupItem>
}

export default CartItem

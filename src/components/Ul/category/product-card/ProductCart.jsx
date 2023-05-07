import React from 'react'
import { Link } from 'react-router-dom';
import "../../../../style/productcard.css"
import { useDispatch } from 'react-redux';
import { cartActions } from '../../../../store/shopping-cart/cartSlice';





function ProductCart(props) {
  const {id,title,image01,price} = props.item  
  const dispatch = useDispatch()
  const addToCart = ()  => {
    dispatch(cartActions.addItem({
      id ,
      title,
      image01,
      price 

    }))
  }

  return (
    <div className="prodect-item">
      <div className="prodect-img">
        <img src= {image01} className='w-50' />
      </div>
      <div className="prodect-content">
        <h5>
          <Link to={`/foods/${id}`}>{title}</Link>
        </h5>
      </div>
      <div className='d-flex align-items-center justify-content-between'>
      <span className='prodect-price' > ${price}</span>
      <button className='addToCart-butm' onClick={addToCart}>Add To Cart</button>
      </div>  
    </div>
  )
}

export default ProductCart

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems : [] ,
    totalQuantity : 0 ,
    totalAmount :0 
}
 const cartslice = createSlice({
    name: 'cart',
    initialState : initialState,

    reducers: {
      addItem(state , action){
          const newItem = action.payload
          const exisitingItem = state.cartItems.find(item => item.id === newItem.id) 
              state.totalQuantity++
              if(!exisitingItem) {
                  //====  note: if you use just redux you should not mute 
                  //=== state array instead of clone the stat array but if ypu use redux tootkit that will not a problem because redux
                  //=== toolkit clone the arry behind the  scene 
                  state.cartItems.push({
                      id:newItem.id,
                      title:newItem.title,
                      image01:newItem.image01,
                      price:newItem.price,
                      quantity:1 ,
                      totalPrice :newItem.price
                  })
              }
              else {
                  exisitingItem.quantity++
                  exisitingItem.totalPrice = Number(exisitingItem.totalPrice)
                  + Number(newItem.price)
              }
              state.totalAmount = state.cartItems.reduce((total, item) => (
                  total + Number(item.price) * Number(item.quantity)
              ));
  
          },
          removeItem(state,action){
            const id = action.payload
            const exisitingItem = state.cartItems.find(item => item.id === id)
             state.totalQuantity--
             if(exisitingItem.quantity === 1){
                state.cartItems = state.cartItems.filter(item => item.id !== id)
             }
             else{
                exisitingItem.quantity--
                exisitingItem.totalPrice = Number(exisitingItem.totalPrice) - Number
                (exisitingItem.price)
             } 
             state.totalAmount =  state.cartItems.reduce((total, item) =>(
                total + Number(item.price) * Number(item.quantity) ,0)
                

             );
        },
        deleteItem(state ,action){
            const id = action.payload
            const exisitingItem = state.cartItems.find(item => item.id === id)
            if(exisitingItem){
                state.cartItems = state.cartItems.filter(item => item.id !== id)
                state.totalQuantity = state.totalQuantity - exisitingItem.quantity
            }
            state.totalAmount =  state.cartItems.reduce((total, item) =>(
                total + Number(item.price) * Number(item.quantity),0) 
                

             );
        },

    },
  
   });
    
 export const cartActions = cartslice.actions
 export default cartslice ;


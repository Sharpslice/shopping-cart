import { useState } from 'react'
import '../css/addToCartBtn.css'
import TestBtn from './TestBtn'
import ShopContext from '../context'
import { useContext } from 'react'
const AddToCartBtn = ({item}) =>{
    const [gate,setGate]= useState(true)
    const {addToCart,removeFromCart} = useContext(ShopContext)

   
    return(
        gate ? 
        <button className ="add-to-cart-btn" onClick={()=> { 
            addToCart(item)
            setGate(false);

        }} >
            Add to Order
        </button>
        : <TestBtn item ={item} onAddBtn={addToCart} onSubBtn={removeFromCart}/>
    )
}



export default AddToCartBtn;
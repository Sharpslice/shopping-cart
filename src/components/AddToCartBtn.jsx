
import '../css/addToCartBtn.css'
import TestBtn from './TestBtn'
import ShopContext from '../context'
import { useContext } from 'react'
const AddToCartBtn = ({item}) =>{
    
    const {cartItems, addToCart,removeFromCart} = useContext(ShopContext)

   
    return(
        !cartItems.get(item.id) ? 
        <button className ="add-to-cart-btn" onClick={()=> { 
            addToCart(item)
            

        }} >
            Add to Order
        </button>
        : <TestBtn item ={item} onAddBtn={addToCart} onSubBtn={removeFromCart} />
    )
}



export default AddToCartBtn;
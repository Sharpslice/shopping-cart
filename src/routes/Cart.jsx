import ShopContext from "../context";
import { useContext } from "react";

const Cart = () => {
    const {cartItems} = useContext(ShopContext)
    
    return( 
        <div>
        <h1>Cart page</h1>
        {console.log(cartItems)}
    </div>
    )
    
}

export default Cart;
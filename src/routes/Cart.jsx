
import CartCard from "../components/CartCard";
import CheckOutBox from "../components/CheckOutBox";
import ProductCard from "../components/ProductCard";
import ShopContext from "../context";
import { useContext } from "react";


const Cart = () => {
    const {cartItems} = useContext(ShopContext)
    const total = Array.from(cartItems.values()).reduce((sum,product)=>{
        return sum + (product.price*product.orderQuantity)
    },0)
    
    
    return( 
        <div>
            <div>
                <h1>Cart page</h1>
                {
                    [...cartItems.entries()].map(([key,product])=>(
                        <CartCard
                            key= {key}
                            product ={product}
                        
                        
                        />
                            
                    
                    ))
                }
            </div>
           <div>
           <CheckOutBox
                total = {total}
            />
           </div>
            
           
           
        </div>
    )
    
}

export default Cart;
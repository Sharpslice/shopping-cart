

import CheckOutBox from "../components/CheckOutBox";
import ProductCard from "../components/ProductCard";
import ShopContext from "../context";
import { useContext } from "react";
import '../css/cart.css'
import { useMemo } from "react";

const Cart = () => {
    const {cartItems} = useContext(ShopContext)
    const total = useMemo(()=>{
        return Array.from(cartItems.values()).reduce((sum,product)=>{
            return sum+(product.price * product.orderQuantity)

        },0)
    },[cartItems])

    const totalItems = useMemo(()=>{
        return Array.from(cartItems.values()).reduce((sum,product)=>{
            return sum+product.orderQuantity
        },0)
    },[cartItems])
    
    return( 
        <div id="cart-container">
           <div id="cart">
                {
                    [...cartItems.entries()].map(([key,product])=>(
                        <ProductCard
                            key={key}
                            className={"cart-card"}
                            item={product}
                        />
                    ))

                }
           </div>
           <div id="checkout">
                <CheckOutBox
                    totalItems={totalItems}
                    totalPrice={total}
                
                />
           </div>
        </div>
    )
    
}

export default Cart;
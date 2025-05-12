import { useContext } from "react";
import ShopContext from "../context";

const CheckOutBox = ({total}) =>{
    const {cartItems} = useContext(ShopContext);

    const totalItem = Array.from(cartItems.values()).reduce((sum,product)=>{
        return sum + (product.orderQuantity)
    },0)
    return(
        <div id = "checkout-box">
            <p>Subtotal ({totalItem} items): ${total}</p>




        </div>
    )
}

export default CheckOutBox;
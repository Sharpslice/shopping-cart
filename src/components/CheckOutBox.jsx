
import ShopContext from "../context";

const CheckOutBox = ({totalItems,totalPrice}) =>{
    return(
        <div id = "checkout-box">
            <p>Subtotal ({totalItems} items): ${totalPrice}</p>
        </div>
    )
}

export default CheckOutBox;
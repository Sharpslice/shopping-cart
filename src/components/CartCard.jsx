import AddToCartBtn from "./AddToCartBtn";
import "../css/cart.css"
const CartCard = ({product})=>{
    return(
        <div className = "cart-card">

            <img src ={product.image} alt=""/>
            <p>{product.title}</p>
            <p>{product.price}</p>
            <AddToCartBtn item={product}/>
        </div>



    )

}


export default CartCard;
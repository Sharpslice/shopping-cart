import "../css/product.css"
import AddToCartBtn from "./AddToCartBtn";
import TestBtn from "./TestBtn";
const ProductCard =({item})=>{
    return(
        <div id = "product-card">
            <img src={item.image} alt="" />
            <p>{item.title}</p>
            <AddToCartBtn/>
            
            
        </div>


    );
}


export default ProductCard;
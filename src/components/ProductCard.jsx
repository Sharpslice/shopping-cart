import "../css/product.css"
import AddToCartBtn from "./AddToCartBtn";
import TestBtn from "./TestBtn";
const ProductCard =({className,item})=>{ 
    return(
        <div className={className}> 
            <img src={item.image} alt="" />
            <p>{item.title}</p>
            <p>{item.price}</p>
            <AddToCartBtn item={item}/>
        </div>


    );
}


export default ProductCard;
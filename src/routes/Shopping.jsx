
import { useEffect } from "react";
import {getAllProduct} from "../api";
import '../css/shopping.css'
import { useState } from "react";
import ProductCard from "../components/ProductCard";
import ShopContext from "../context";
import { useContext } from "react";
import Product from "../product";
const Shopping = () =>{
    const [products,setProducts] = useState(null);
    useEffect(()=>{
        const fetchData =async() =>{
            const data = await getAllProduct();
            setProducts(data);
        }
        fetchData();
    },[]


    
)
    const {cartItems} = useContext(ShopContext);
    return (
        <div id="shopping-page">
            {console.log(cartItems)}
            { products &&
            
            products.map((item)=>(
                <ProductCard
                    key={item.id}
                    item ={new Product(item)}
                />

            ))}
        </div>
    )
}

export default Shopping;
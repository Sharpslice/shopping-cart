
import { useEffect } from "react";
import {getAllProduct} from "../api";
import '../css/shopping.css'
import { useState } from "react";
import ProductCard from "../components/ProductCard";
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
    return (
        <div id="shopping-page">
            
            { products &&
            
            products.map((item)=>(
                <ProductCard
                    key={item.id}
                    item ={item}
                />
            ))}
        </div>
    )
}

export default Shopping;
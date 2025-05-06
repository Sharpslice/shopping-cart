
import { useEffect } from "react";
import {getAllProduct} from "../api";
import '../css/shopping.css'
import { useState } from "react";
const Shopping = () =>{
    //const products = [{id: 1, title: "test"}]
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
        <div>
            <h1>Shopping page</h1>
            { products &&
            
            products.map((item)=>(
                <li key={item.id}> {item.title}</li>
            ))}
        </div>
    )
}

export default Shopping;
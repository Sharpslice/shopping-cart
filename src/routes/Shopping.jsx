
import { useEffect } from "react";
import {getAllProduct} from "../api";
import '../css/shopping.css'
const Shopping = () =>{
    useEffect(()=>{
        getAllProduct();
    },[])
    return (
        <div>
            <h1>Shopping page</h1>
           
        </div>
    )
}

export default Shopping;
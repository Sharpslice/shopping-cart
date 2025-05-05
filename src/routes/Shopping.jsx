
import { useEffect } from "react";
import {getAllProduct} from "../api";

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
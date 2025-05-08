import { useState } from 'react'
import '../css/addToCartBtn.css'
import TestBtn from './TestBtn'
const AddToCartBtn = () =>{
    const [gate,setGate]= useState(true)
    const [amount, setAmount] = useState(0);

    const increment =()=>{
        setAmount(amount => amount+1);
    }
    const deincrement= () =>{
        if(amount >1)
        {
            setAmount(amount => amount -1);
        }
        else{
            setAmount(amount => amount -1);
            setGate(true)
        }
         
    }

    return(
        gate ? 
        <button className ="add-to-cart-btn" onClick={()=> { 
            increment();
            setGate(false);

        }} >
            Add to Order
        </button>
        : <TestBtn amount={amount} onAddBtn={increment} onSubBtn={deincrement}/>
    )
}



export default AddToCartBtn;
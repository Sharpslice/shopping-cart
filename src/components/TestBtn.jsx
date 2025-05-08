import ShopContext from "../context"
import { useContext } from "react"
const TestBtn = ({ onAddBtn, onSubBtn,item, onGate}) =>{
    const {cartItems} = useContext(ShopContext)
    return(
        <div id = "fakeBtn">
            <button id="leftBtn" onClick={()=>{
                if(cartItems?.get(item.id).orderQuantity ==1){
                    onGate(true)
                }
                onSubBtn(item);
                
                
                }}> 
                -
            </button>

            {cartItems.get(item.id) ? cartItems.get(item.id).orderQuantity : 0}

            <button id= "rightBtn" onClick={()=>{onAddBtn(item)}}>
                +
            </button>


        </div>
    )
}

export default TestBtn;
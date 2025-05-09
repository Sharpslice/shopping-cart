import ShopContext from "../context"
import { useContext } from "react"
const TestBtn = ({ onAddBtn, onSubBtn,item}) =>{
    const {cartItems} = useContext(ShopContext)
    return(
        <div id = "fakeBtn">
            <button id="leftBtn" onClick={()=>{
                
                onSubBtn(item);
                }}> 
                -
            </button>

            {cartItems.get(item.id).orderQuantity}

            <button id= "rightBtn" onClick={()=>{onAddBtn(item)}}>
                +
            </button>


        </div>
    )
}

export default TestBtn;
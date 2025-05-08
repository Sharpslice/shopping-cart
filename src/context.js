import { createContext } from "react";

const ShopContext = createContext({
    cartItems : new Map(),
    addToCart : () =>{},
    removeFromCart : () =>{}


})


export default ShopContext;
import { Link, Outlet } from 'react-router-dom'
import './css/navBar.css'
import './css/layout.css'
import { useState } from 'react'
import ShopContext from './context'





function App() {
  const [cartItems, setCartItems] = useState(new Map())



  
  const addToCart = (product) =>{
    const cart = new Map(cartItems)
    if(cart.has(product.id))
    {
      console.log("in cart already");
      const {orderQuantity} = cart.get(product.id)
      const updateProduct = {...product, orderQuantity: orderQuantity+1}
      cart.set(product.id,updateProduct);
      setCartItems(cart);
    }
    else{
      console.log("added to cart");
      cart.set(product.id,product);
      setCartItems(cart);
    }
  }
  const removeFromCart =(product) =>{
    console.log("remove",product);
  }



  return (
    <>
   <ShopContext.Provider value ={{cartItems,addToCart,removeFromCart}}>
      <div id= "main-container">
        <nav>
            <ul id= "nav-ul">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                
                <Link to="shopping">Shopping Page</Link>
              </li>
              <li>
                <Link to="cart">Cart Page</Link>
              </li>
            </ul>
          </nav>
          <Outlet></Outlet>
      </div>
    </ShopContext.Provider>
      
    </>
  )
}

export default App

import { Link, Outlet } from 'react-router-dom'
import './css/navBar.css'
import './css/layout.css'
import { useState } from 'react'
import ShopContext from './context'
import { useEffect } from 'react'


function App() {
  
  
  
  //sets up intital cart. If local storage has items, use that cart, if not, create an empty map
  const [cartItems, setCartItems] = useState(()=>{
    return localStorage.getItem("cart") ? new Map(JSON.parse(localStorage.getItem("cart"))) : new Map();
  })

  //everytime global cartItem is updated(setCartItems), update local storage
  useEffect(()=>{
    localStorage.setItem("cart",JSON.stringify([...cartItems]))
  },[cartItems])
  
  const addToCart = (product) =>{
      setCartItems(prev=>
        {
          const cart = new Map(prev);
          if(cart.has(product.id))
            {
              
              const updateProduct = {...product, orderQuantity: cart.get(product.id).orderQuantity+1}
              cart.set(product.id,updateProduct);
            }
          else{
              const updateProduct = {...product, orderQuantity: 1}
              cart.set(product.id,updateProduct);
             
          }

        
          return cart
        }
      ) 


  }

  const removeFromCart =(product) =>{
    setCartItems(prev=>{
      const cart = new Map(prev); // make a copy
      
      const updateProduct = {...product, orderQuantity: cart.get(product.id).orderQuantity -1}
      cart.set(product.id, updateProduct);
     
      if(cart.get(product.id).orderQuantity == 0){
        cart.delete(product.id);
        
      }
      return cart;
    })
    
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

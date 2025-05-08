import { Link, Outlet } from 'react-router-dom'
import './css/navBar.css'
import './css/layout.css'
import { useState } from 'react'
import ShopContext from './context'





function App() {
  const [cartItems, setCartItems] = useState(["hello"])

  return (
    <>
   <ShopContext.Provider value ={{cartItems}}>
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

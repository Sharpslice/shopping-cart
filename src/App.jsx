import { Link, Outlet } from 'react-router-dom'
import './App.css'
import './css/navBar.css'
import './css/layout.css'
function App() {



  
  return (
    <>
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
      
    </>
  )
}

export default App

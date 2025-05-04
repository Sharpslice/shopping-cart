import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Link, Outlet } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <>
      <nav>
        <ul>
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
    </>
  )
}

export default App

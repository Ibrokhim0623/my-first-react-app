import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/pizzaLogo.png'
import './Navbar.css'

function Navbar() {
  const [menu, setMenu] = useState(false)
  // window.addEventListener("click", () => {
  //   const open = document.querySelector(".open");
  //   open.style.display = "none"
  // })
  return (
    <div className='navbar'>
        <div className='leftSide'>
            <img src={Logo} />
        </div>
        <div className={menu ? 'open' : 'rightSide'} onClick={() => setMenu(false)}>
            <Link to='/'>Home</Link>
            <Link to='/menu'>Menu</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
        </div>
        <button className='toggle' onClick={() => setMenu(!menu)}>
          {
            menu ? <i className='fas fa-times'></i> : <i className='fa fa-bars bars'></i>
          }
        </button>
    </div>
  )
}

export default Navbar

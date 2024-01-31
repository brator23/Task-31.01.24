import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
      <NavLink to="/">
        Add
      </NavLink>
      <NavLink to="/list">
        Books
      </NavLink>
    </div>
  )
}

export default Navbar

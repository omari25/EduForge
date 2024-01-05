import React from 'react'
import { FaRegCircleUser } from "react-icons/fa6";
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div className='navbar'>
      <Link to={`/`} className='title-header-h1'>
        <h1>EduForge</h1>
      </Link>
      <form action="" id="search-form">
        <input type="search" name="" id="search-input" placeholder='Search'/>
        <button type="submit">Submit</button>
      </form>
      <FaRegCircleUser className='user-icom'/>
    </div>
  )
}

export default NavBar
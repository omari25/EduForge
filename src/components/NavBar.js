import React from 'react'

function NavBar() {
  return (
    <div className='navbar'>
      <h1>EduForge</h1>
      <form action="" id="search-form">
        <input type="search" name="" id="search-input" placeholder='Search'/>
        <button type="submit">Submit</button>
      </form>
      <i class="fa-regular fa-circle-user"></i>
    </div>
  )
}

export default NavBar
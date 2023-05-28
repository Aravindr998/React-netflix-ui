import React from 'react'
import NetflixLogo from '../UI/NetflixLogo'
import './Navbar.css'

function Navbar() {
  return (
    <div className='navbar'>
      <NetflixLogo className='logo'/>
      <img className='avatar' src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="" />
    </div>
  )
}

export default Navbar
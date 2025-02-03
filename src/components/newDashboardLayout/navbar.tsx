import React, { useState } from 'react'
import NavLinks from './navLinks'
import NavSearch from './navSearch'

function Navbar() {
  console.log('Navbar rendered')
  return (
    <div>
        <NavLinks/>
        <NavSearch/>
    </div>
  )
}

export default Navbar
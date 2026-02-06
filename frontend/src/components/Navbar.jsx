import { useState, useEffect } from 'react'
import './App.css'

function Navbar() {
  
  return (
    <>
      <div className="flex justify-center">
        Navbar
        <div className="flex flex-col gap-2">
          <div>Home</div>
          <div>Contact</div>
          <div>Help</div>
        </div>
      </div>
    </>
  )
}

export default Navbar

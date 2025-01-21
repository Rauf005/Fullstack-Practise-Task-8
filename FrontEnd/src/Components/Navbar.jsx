import React from 'react'
import style from "./style.module.css"
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className={style.navbar} >
      
      <div className={style.nav} >
      <h1>Banker.</h1>

      <div className={style.links}>
        <ul>
           <NavLink style={{textDecoration:"none",color:"black"}} to="" >Home</NavLink>
           <NavLink style={{textDecoration:"none",color:"black"}} >About Us</NavLink>
           <NavLink style={{textDecoration:"none",color:"black"}} >Blog</NavLink>
           <NavLink style={{textDecoration:"none",color:"black"}} to="favorites" >Wishlist</NavLink>

        </ul>

        <NavLink to="add" ><button>Add</button></NavLink>
      </div>
    </div>
    </div>
  )
}

export default Navbar

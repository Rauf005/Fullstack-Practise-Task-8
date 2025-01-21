import React from 'react'
import Navbar from '../Components/Navbar'
import {Outlet} from "react-router-dom"
import Footer from '../Components/Footer'

import Add from './Add/Add'
import Home from './Home/Home'

function UserRoot() {
  return (
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default UserRoot

import React, { useState, useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Toolboxes from './toolboxes'
import Navbar from "./navBar"



//REMEMBER ONLY ONE TOOL CAN BE SELECT SO ONLY ONE TOOL CAN BE RENDERED
function App() {

  return (
    <>
     <Navbar />
     <Toolboxes />
    
    </>
  )
}

export default App

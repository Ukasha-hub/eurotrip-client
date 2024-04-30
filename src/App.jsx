import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import NavBar2 from "./NavBar2"



function App() {
  

  return (
    <>
      <Navbar></Navbar>
      <NavBar2></NavBar2>
      <Outlet></Outlet>
    </>
  )
}

export default App

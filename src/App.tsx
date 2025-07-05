import { Outlet } from "react-router-dom"
import { Navbar } from "./layout/Navbar"
import Footer from "./components/module/home/Footer"



function App() {

  return (
    <div>
      <div className="bg-gray-200"><Navbar /></div>
      <div><Outlet /></div>
      <div><Footer /></div>
    </div>
  )
}

export default App;

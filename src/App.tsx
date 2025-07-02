import { Outlet } from "react-router-dom"
import { Navbar } from "./layout/Navbar"



function App() {

  return (
    <div>
      <div className="bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <Navbar />
        </div>
      </div>
      <div className="max-w-7xl mx-auto">
        <Outlet />
      </div>
    </div>
  )
}

export default App

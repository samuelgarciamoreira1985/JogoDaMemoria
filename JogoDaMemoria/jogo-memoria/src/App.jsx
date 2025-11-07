//REACT
import { Outlet } from "react-router-dom"
import NavTitle from "./components/NavTitle/NavTitle"
//CSS
import './App.css'

function App() {

  return (

    <div className='App'>
      <NavTitle/>
      <Outlet/>
    </div>

  )

}

export default App

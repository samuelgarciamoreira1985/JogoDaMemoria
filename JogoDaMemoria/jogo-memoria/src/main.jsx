import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter,RouterProvider } from 'react-router-dom'
// REACT
import Menu from "./pages/Menu.jsx"
import GamePlay from './pages/GamePlay.jsx'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Menu/>
      },
      {
        path: "/gameplay", // INTERFACE DE GAME PLAY
        element: <GamePlay/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={routes}/>
  </StrictMode>,
)

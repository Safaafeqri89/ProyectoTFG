
import { RouterProvider } from 'react-router-dom'
import './App.css'
import { router } from './router'

function App() {


  return (
    <>
    <RouterProvider router={router} /> {/* Utiliza RouterProvider para proporcionar el enrutador a la aplicación */}
    </>
  )
}

export default App

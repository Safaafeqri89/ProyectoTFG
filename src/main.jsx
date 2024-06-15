import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Utiliza ReactDOM.createRoot para renderizar la aplicación en el elemento con id 'root' del documento HTML
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
  {/* Renderiza el componente principal de la aplicación dentro de React.StrictMode */}

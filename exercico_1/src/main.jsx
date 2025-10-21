import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ContadorCustom from './ContatorCustom.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <ContadorCustom />
  </StrictMode>,
)

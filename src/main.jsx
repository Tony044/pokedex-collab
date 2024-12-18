import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Pokedex } from './Pokedex.jsx'
import { BrowserRouter } from "react-router"

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <Pokedex />
        </BrowserRouter>
    </StrictMode>
)

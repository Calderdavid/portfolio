import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Portfolio } from './PortfolioApp'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    
    <React.StrictMode>
        <BrowserRouter>
            <Portfolio />
        </BrowserRouter>
    </React.StrictMode>
)


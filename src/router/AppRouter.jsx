import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { PortfolioPage } from '../portfolio/PortfolioPage'

export const AppRouter = () => {
  return (
    <Routes>
        <Route path="/" element={<PortfolioPage/>}/>
    </Routes>
  )
}


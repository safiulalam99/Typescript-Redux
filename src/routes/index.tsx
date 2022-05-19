import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartPage } from '../pages/CartPage'
import Error from '../pages/Error'
import Home from '../pages/Home'
import ResponsiveAppBar from '../components/NavBar'

const Index = () => {
  return (
    <BrowserRouter>
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Index

import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../Components/Home/Index'
import Login from '../Components/Login/Index'

const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login/*" element={<Login />} />
    </Routes>
  </BrowserRouter>
  )
}

export default Router

import React from 'react'
import { Routes, Route } from 'react-router'
import LoginCreate from './LoginCreate/Index'
import LoginForm from './LoginForm/Index'

const Login = () => {
  return (
    <section>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="criar" element={<LoginCreate />} />
      </Routes>
    </section>
  )
}

export default Login

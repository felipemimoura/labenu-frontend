import React from 'react'
import { Routes, Route } from 'react-router'
import LoginCreate from './LoginCreate/Index'
import LoginForm from './LoginForm/Index'
import * as S from './Styles'

const Login = () => {
  return (
    <S.LoginWrapper>
      <S.LoginForms>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="criar" element={<LoginCreate />} />
        </Routes>
      </S.LoginForms>
    </S.LoginWrapper>
  )
}

export default Login

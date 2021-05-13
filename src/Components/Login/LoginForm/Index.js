import React from 'react'
import useForm from '../../../Hooks/useForm'
import Button from '../Helpers/Button/Index'
import Input from '../Helpers/Input/Index'

const LoginForm = () => {
  const username = useForm()
  const password = useForm()
  return (
    <section>
      <h1>
        Login
      </h1>
      <form>
        <Input label="Email" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password"{...password} />
        <Button>
          Entrar
        </Button>
      </form>
    </section>
  )
}

export default LoginForm

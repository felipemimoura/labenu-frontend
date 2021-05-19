import React from 'react'
import { Link } from 'react-router-dom'
import useForm from '../../../Hooks/useForm'
import Button from '../Helpers/Button/Index'
import Input from '../Helpers/Input/Index'

const LoginForm = () => {
  const username = useForm("email")
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
      <div>
        <h2>Cadastra-se</h2>
        <p>Ainda não possui conta? Cadastra-se no site</p>
        <Link to="/login/criar">
          <Button>
            Cadastro
          </Button>
        </Link>
      </div>
    </section>
  )
}

export default LoginForm

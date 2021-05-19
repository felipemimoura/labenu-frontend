import React from 'react'
import useForm from '../../../Hooks/useForm'
import Button from '../Helpers/Button/Index'
import Input from '../Helpers/Input/Index'

const LoginCreate = () => {
  const name = useForm()
  const email = useForm("email")
  const nickname = useForm()
  const password = useForm("password")
  return (
    <>
      <h1>
        Cadastra-se
    </h1>
      <form>
        <Input label="Nome" type="text" name="name"{...name} />
        <Input label="Email" type="text" name="email" {...email} />
        <Input label="Nome de Usuário" type="text" name="nickname"{...nickname} />
        <Input label="senha" type="password" name="password" {...password}/>
        <Button>
          Cadastrar
        </Button>
      </form>
    </>
  )
}

export default LoginCreate

import React, { useState } from 'react'

const types = {
  email: {
    regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: "Preencha um email válido",
  },
  password: {
    regex: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
    message: "Senha deve possuir 6 caracteres e pelo menos um número"
  }
};

const useForm = (type) => {
  const [value, setValue] = useState("")
  const [error, setError] = useState(null)

  function validade(value) {
    if (type === false) return true
    if (value.length === 0) {
      setError("Preencha um valor")
      return false
    } else if (types[type] && !types[type].regex.test(value)) {
      setError(types[type].message)
    } else {
      setError(null)
      return true
    }
  }
  function onChange({ target }) {
    if (error) validade(target.value)
    setValue(target.value)
  }
  return {
    value,
    setValue,
    onChange,
    error,
    validade: () => validade(value),
    onBlur: () => validade(value)

  }


}

export default useForm

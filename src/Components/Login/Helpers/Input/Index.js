import React from 'react'
import useForm from '../../../../Hooks/useForm'
import * as S from './Styles'

const Input = ({ label, type, name, value, onChange, error, onBlur }) => {
  return (
    <S.Wrapper>
      <S.Label htmlFor={name}>
        {label}
      </S.Label>
      <S.Input type={type}
        id={name}
        name={name}
        onChange={onChange}
        value={value}
        onBlur={onBlur}

      />
      {error && <S.ErrorParagraph>{error}</S.ErrorParagraph>}
    </S.Wrapper>
  )
}

export default Input

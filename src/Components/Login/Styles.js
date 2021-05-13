import styled from 'styled-components'

export const LoginWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 100vh;
  gap: 2rem;

  &::before{
    display: block;
    content: "";
    background: url('../../Assets/login.jpg') no-repeat center;
    background-size: cover;
  }
`

export const LoginForms = styled.div`
  max-width: 30rem;
  padding: 1rem;
  margin-top: 20vh;
`
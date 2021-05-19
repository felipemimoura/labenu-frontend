import styled from 'styled-components'

export const Wrapper = styled.div`
  margin-bottom: 1rem;
`

export const Label = styled.label`
  display: block;
  font-size: 1rem;
  line-height: 1;
  padding-bottom: 0.5rem;
`

export const Input = styled.input`
  border: 1px solid #eee;
  display: block;
  width: 100%;
  font-size: 1rem;
  padding: 0.8rem;
  border-radius: 0.4rem;
  background-color: #eee;
  transition: 0.2s;

  &:focus, :hover{
    outline: none;
    border-color: #22437d;
    background: white;
  };
  
`

export const ErrorParagraph = styled.p`
  color: #4682B4;
  font-size: 0.875rem;
  margin-top: 0.25rem
`

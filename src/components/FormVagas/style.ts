import styled from 'styled-components'
import { Cor } from '../../style'

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: ${Cor.corSecundaria};
  padding: 32px;
  border-radius: 12px;
  margin-top: 40px;
`

export const ButtonSearch = styled.button`
  background-color: ${Cor.corPrincipal};
  border: 1px solid ${Cor.corPrincipal};
  height: 40px;
  padding: 0 16px;
  font-size: 18px;
  color: ${Cor.corSecundaria};
  margin-left: 8px;
  cursor: pointer;
`

export const InputSearch = styled.input`
  padding: 0 16px;
  outline-color: ${Cor.corPrincipal};
`

export default Form

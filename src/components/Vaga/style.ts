import styled from 'styled-components'
import { Cor } from '../../style'

const VagaLista = styled.ul`
  border: 1px solid ${Cor.corPrincipal};
  background-color: ${Cor.corSecundaria};
  color: ${Cor.corPrincipal};
  padding: 16px;
  transition: all ease 0.3s;
  border-radius: 8px;

  :hover {
    background-color: ${Cor.corPrincipal};
    color: ${Cor.corSecundaria};
  }

  :hover a {
    border-color: ${Cor.corPrincipal};
    background-color: ${Cor.corSecundaria};
    color: ${Cor.corPrincipal};
  }
`

export const Titulo = styled.h3`
  font-weight: bold;
  margin-bottom: 16px;
`

export const Link = styled.a`
  border-color: ${Cor.corSecundaria};
  background-color: ${Cor.corPrincipal};
  color: ${Cor.corSecundaria};
  display: inline-block;
  padding: 8px 16px;
  text-decoration: none;
  margin-top: 16px;
  font-weight: bold;
  font-size: 14px;
  border-radius: 8px;
  text-align: center;

  @media (max-width: 768px) {
    display: block;
  }
`
export default VagaLista

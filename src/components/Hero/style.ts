import styled from 'styled-components'
import { Cor } from '../../style'

const HeroForm = styled.form`
  width: 100%;
  height: 360px;
  position: relative;
  display: flex;
  align-items: center;
  background-image: url('https://cdn.pixabay.com/photo/2018/08/10/15/45/woman-3597101_1280.jpg');
  background-size: cover;

  @media screen and (max-width: 768px) {
    height: auto;
    padding: 24px 0;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${Cor.corPrincipal};
    opacity: 0.7;
    z-index: 1;
  }
`

export const HeroTitulo = styled.h2`
  position: relative;
  z-index: 2;
  font-size: 40px;
  font-family: 'Gloock', serif;
  color: ${Cor.corSecundaria};

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
`

export default HeroForm

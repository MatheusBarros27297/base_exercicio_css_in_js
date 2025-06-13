import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Lato', sans-serif;
    list-style: none;
  }

  body {
    padding-bottom: 120px;
  }
`

export const Container = styled.div`
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;

  @media screen and (max-width: 1024px) {
    max-width: 80%;
  }
`

declare module 'styled-components' {
  export interface DefaultTheme {
    corPrincipal: string
    corSecundaria: string
  }
}

export const Cor = {
  corPrincipal: '#a7727d',
  corSecundaria: '#f9f5e7'
}

export default GlobalStyle

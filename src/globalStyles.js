import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Kanit', sans-serif;
    }
`

export const Button = styled.button`
    border-radius: 4px;
    background: transparent;
    padding: ${({ big }) => (big ? '16px 20px' : '10px 25px')};
    font-size: ${({ fontBig }) => (fontBig ? '20px' : '25px')};
    color: #fff;
    white-space: nowrap;
    outline: none;
    border: none;
    cursor: pointer;


    &:hover {
        transition: all 0.3s ease-out;
        background: #fff;
        color: #242424;
    } 
    
    @media screen and (max-width: 960px) {
        width: 100%;
             
     }
`

export default GlobalStyle;
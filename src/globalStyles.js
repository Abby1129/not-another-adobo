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
    padding: 10px 20px;
    background: ${({ primary }) => (primary ? '#fff' : 'transparent')};
    font-size: 20px;
    color: ${({ primary }) => (primary ? '#242424' : '#fff')};
    outline: none;
    border: 1px solid #fff;
    cursor: pointer;
    white-space: nowrap;

    &:hover {
        background: #fff;
        color: #242424;
        transition: all 0.3s ease-out;

        @media screen and (max-width: 960px) {
             width: 100%;
         }
    }
`

export default GlobalStyle;
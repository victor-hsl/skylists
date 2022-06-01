import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: linear-gradient(${props => props.theme.background}, ${props => props.theme.gradient}) !important;
        height: 100vh;
    }
`
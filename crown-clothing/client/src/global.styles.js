import { createGlobalStyle } from 'styled-components'; 

export const GlobalStyle = createGlobalStyle`
    body {
        /* font-family: 'open sans'; */
        padding: 2rem 8rem;

        @media screen and (max-width: 800px){
            padding: 10px;
        }
    }

    a {
        text-decoration: none;
        color: black;
    }

    * {
        box-sizing: border-box;
    }
`
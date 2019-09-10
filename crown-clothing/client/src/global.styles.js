import { createGlobalStyle } from 'styled-components'; 

export const GlobalStyle = createGlobalStyle`
    body {
        /* font-family: 'open sans'; */
        padding: 2rem 8rem;

        @media screen and (max-width: 800px){
            padding: 10px;
        }
    }

    * {
        ::-webkit-scrollbar {
            width: .75em;
        }
        
        ::-webkit-scrollbar-track {
            -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.15);
            border-radius: .75em;
        }
        
        ::-webkit-scrollbar-thumb {
            background-color: lightgrey;
            outline: 1px solid slategrey;
            border-radius: .75em;
            margin: 2px 0px;
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

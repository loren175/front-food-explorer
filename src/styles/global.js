import { createGlobalStyle } from "styled-components"
import { DEVICE_BREAKPOINTS } from "./deviceBreakPoints"

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 16px;

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}){
      font-size: 12px;
    }
  }

  body{
    background-color: ${({ theme }) => theme.COLORS.DARK_400};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-family: 'Roboto', serif;
    font-size: 1rem;
    outline: none;

    -webkit-font-smoothing: antialiased;
  }

  input, button{
    font-family: 'Poppins', serif;
    font-size: 1rem;
    outline: none;
  }

  a {
    text-decoration: none;
  }
  
  button, a, svg {
    cursor: pointer;
    transition: filter 0.2s;
  }
  
  button:hover, a:hover, svg:hover {
    filter: brightness(0.9);
  }
`

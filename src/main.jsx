import React from "react"
import ReactDOM from "react-dom/client"
import { ThemeProvider } from "styled-components"
import theme from "./styles/theme.js"
import GlobalStyles from "./styles/global.js"
import { SignIn } from "./pages/SignIn/index.jsx"
import { BrowserRouter } from "react-router-dom"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BrowserRouter>
        <SignIn />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
)

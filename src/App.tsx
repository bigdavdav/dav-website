import { Router } from "./Router"
import { BrowserRouter } from "react-router-dom"
import { ScrollToTop } from "./ScrollToTop"

import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/Default/defaultTheme"

import { GlobalStyle } from "./styles/global"

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <ScrollToTop />
        <Router />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
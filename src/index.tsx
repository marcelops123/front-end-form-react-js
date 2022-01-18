import { ColorModeScript, Editable, Table } from "@chakra-ui/react"
import * as React from "react"
import ReactDOM from "react-dom"
import Main  from './components/Main'
import { Tabela } from "./components/Tabela"
import GlobalStyle  from './Styles'

ReactDOM.render(
  <React.StrictMode>
    <ColorModeScript />
    <Main />
   <Tabela />
   <GlobalStyle />
  </React.StrictMode>,
  document.getElementById("root"),
  )
    



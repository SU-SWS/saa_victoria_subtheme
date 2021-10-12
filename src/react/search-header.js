import React from "react"
import ReactDOM from "react-dom"
import HeaderSeachApp from "./components/headerSearchApp"

import '../scss/config/index.scss'

ReactDOM.render(
  <div>
    <HeaderSeachApp />
  </div>, 
  document.getElementById("algolia-search-header")
)
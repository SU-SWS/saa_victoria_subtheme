import React from "react"
import ReactDOM from "react-dom"
import SearchPage from "./components/searchPage"
import { QueryParamProvider } from "use-query-params"
import { BrowserRouter as Router, Route} from 'react-router-dom'

import '../scss/config/index.scss'

ReactDOM.render(
  <Router>
    <QueryParamProvider ReactRouterRoute={Route}>
      <SearchPage />
    </QueryParamProvider>
  </Router>, 
  document.getElementById("search-page-app")
)
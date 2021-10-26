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

// The mobile search element is prepended with javascript, so we need to wait for it first.
const waitForMobileSearch = setInterval(() => {
  if (document.getElementById("block-stanford-basic-search-mobile")) {
    ReactDOM.render(
      <div>
        <HeaderSeachApp />
      </div>, 
      document.getElementById("block-stanford-basic-search-mobile")
    )
    clearInterval(waitForMobileSearch);
  }
}, 250)


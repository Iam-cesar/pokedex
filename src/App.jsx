import React from 'react'
import { GlobalStyle } from 'components/UI/GlobalStyle'
import Home from 'pages/Home'
import Navigation from 'components/Navigation'

function App () {
  return (
    <div className="App">
      <GlobalStyle />
      <Navigation />
      <Home />
    </div>
  )
}

export default App

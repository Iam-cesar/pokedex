import React from 'react'
import { GlobalStyle } from 'components/UI/GlobalStyle'
import Home from 'pages/Home'
import AsideNavigation from 'components/AsideNavigation'

function App () {
  return (
    <div className="App" style={style} >
      <GlobalStyle />
      <AsideNavigation />
      <Home />
    </div>
  )
}

export default App

const style = {
  display: 'grid',
  gridTemplateColumns: '100px 90%',
  gridTemplateAreas: '"aside home"'
}

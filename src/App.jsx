import React from 'react'
import { GlobalStyle } from 'components/UI/GlobalStyle'
import Home from 'components/pages/Home'
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
  gridTemplateColumns: 'auto 85%',
  gridTemplateAreas: '"aside home"'
}

import React from 'react'
import { GlobalStyle } from 'components/UI/GlobalStyle'
import Home from 'pages/Home'
import Aside from 'components/Aside'

function App () {
  return (
    <div className="App" style={style} >
      <GlobalStyle />
      <Aside />
      <Home />
    </div>
  )
}

export default App

const style = {
  display: 'grid',
  gridTemplateColumns: '100px 95%',
  gridTemplateAreas: '"aside home"'
}

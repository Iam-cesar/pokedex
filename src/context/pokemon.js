import React, { createContext, useState } from 'react'
import PropTypes from 'prop-types'

export const PokemonContext = createContext()
PokemonContext.displayName = 'Pokemon'
PokemonProvider.propTypes = {
  children: PropTypes.node
}

export function PokemonProvider ({ children }) {
  const [response, setResponse] = useState({})
  return (
    <PokemonContext.Provider value={{ response, setResponse }}>
      {children}
    </PokemonContext.Provider>
  )
}

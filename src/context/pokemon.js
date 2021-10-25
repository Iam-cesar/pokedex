import React, { createContext, useState } from 'react'
import PropTypes from 'prop-types'

export const PokemonContext = createContext()
PokemonContext.displayName = 'Pokemon'
PokemonProvider.propTypes = {
  children: PropTypes.node
}

export function PokemonProvider ({ children }) {
  const [searchText, setSearchText] = useState('')
  const [response, setResponse] = useState({})
  return (
    <PokemonContext.Provider
      value={{ searchText, setSearchText, response, setResponse }}
    >
      {children}
    </PokemonContext.Provider>
  )
}

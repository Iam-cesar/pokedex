import React, { createContext, useState } from 'react'
import PropTypes from 'prop-types'

export const PokemonContext = createContext()
PokemonContext.displayName = 'Pokemon'
PokemonProvider.propTypes = {
  children: PropTypes.node
}

export function PokemonProvider ({ children }) {
  const [response, setResponse] = useState(
    {
      name: '',
      urlSpecie: '',
      id: '',
      image: '',
      imgAnimated: '',
      type: '',
      stats: '',
      abilities: '',
      weight: '',
      color: '',
      shape: '',
      evolutions: [{
        name: '',
        id: '',
        image: ''
      }]
    }
  )

  return (
    <PokemonContext.Provider value={{
      response,
      setResponse
    }}>
      {children}
    </PokemonContext.Provider>
  )
}

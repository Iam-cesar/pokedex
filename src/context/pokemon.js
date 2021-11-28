import React, { createContext, useState } from 'react'
import PropTypes from 'prop-types'

export const PokemonContext = createContext()
PokemonContext.displayName = 'Pokemon'
PokemonProvider.propTypes = {
  children: PropTypes.node
}

export function PokemonProvider ({ children }) {
  const [pokemon, setPokemon] = useState(
    {
      name: '',
      urlSpecie: '',
      id: '',
      image: '',
      imgAnimated: '',
      type: [],
      stats: [],
      abilities: [],
      evolutions: [{
        name: '',
        id: '',
        image: ''
      }]
    }
  )

  return (
    <PokemonContext.Provider value={{
      pokemon,
      setPokemon
    }}>
      {children}
    </PokemonContext.Provider>
  )
}

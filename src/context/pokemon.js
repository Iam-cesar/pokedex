import React, { createContext, useState } from 'react'
import PropTypes from 'prop-types'
import Pokemon from 'model/Pokemon'

export const PokemonContext = createContext()

PokemonContext.displayName = 'Pokemon'
PokemonProvider.propTypes = {
  children: PropTypes.node
}

const pokemonModel = new Pokemon()

export function PokemonProvider ({ children }) {
  const [pokemon, setPokemon] = useState(pokemonModel)

  return (
    <PokemonContext.Provider value={{
      pokemon,
      setPokemon
    }}>
      {children}
    </PokemonContext.Provider>
  )
}

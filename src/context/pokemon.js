import React, { createContext, useState } from 'react'
import PropTypes from 'prop-types'

export const PokemonContext = createContext()
PokemonContext.displayName = 'Pokemon'
PokemonProvider.propTypes = {
  children: PropTypes.node
}

export function PokemonProvider ({ children }) {
  const [pokemonList, setPokemonList] = useState([])

  const [response, setResponse] = useState({
    name: '',
    urlSpecie: '',
    id: '',
    image: '',
    imgAnimated: '',
    urlEvolutionChain: '',
    evolutions: []
  })

  return (
    <PokemonContext.Provider value={{
      response,
      setResponse,
      pokemonList,
      setPokemonList
    }}>
      {children}
    </PokemonContext.Provider>
  )
}

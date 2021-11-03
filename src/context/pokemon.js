import React, { createContext, useState } from 'react'
import PropTypes from 'prop-types'

export const PokemonContext = createContext()
PokemonContext.displayName = 'Pokemon'
PokemonProvider.propTypes = {
  children: PropTypes.node
}

export function PokemonProvider ({ children }) {
  const [response, setResponse] = useState({
    name: '',
    urlSpecie: '',
    id: '',
    image: '',
    imgAnimated: ''
  })

  const [url, setUrl] = useState({})
  const [evolutionNames, setEvolutionNames] = useState([])
  const [evolution, setEvolution] = useState([])

  return (
    <PokemonContext.Provider value={{
      response,
      setResponse,
      evolutionNames,
      setEvolutionNames,
      evolution,
      setEvolution,
      url,
      setUrl
    }}>
      {children}
    </PokemonContext.Provider>
  )
}

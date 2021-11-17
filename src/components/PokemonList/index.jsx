import { PokemonListContainer } from './style'
import React, { useState, useEffect } from 'react'
import Api from 'Api'
import { usePokemonChainEvolution } from 'hooks/usePokemonChainEvolution'

function PokemonList () {
  const urlEvolution = 'https://pokeapi.co/api/v2/evolution-chain/'
  const [pokemonList, setPokemonList] = useState([])
  const listLength = 5

  useEffect(() => {
    handlePokemonList()
  }, [])

  async function handlePokemonList () {
    const array = []
    for (let i = 0; i < listLength; i++) {
      const random = (Math.random() * 100).toFixed()
      const res = await Api.fetchPokemonEvolutionChain(`${urlEvolution}${random}`)
      array.push(usePokemonChainEvolution(res))
    }
    setPokemonList(array)
  }

  return (
    <PokemonListContainer>
      {console.log(pokemonList)}
    </PokemonListContainer>
  )
}

export default PokemonList

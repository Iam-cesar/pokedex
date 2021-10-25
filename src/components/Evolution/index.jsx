import { usePokemon } from 'hooks/usePokemon'
import React, { useEffect, useState } from 'react'
import { EvolutionContainer } from './style'
import Api from 'Api'

function Evolution () {
  const { evolutionChain, setEvolutionChain, response, url } = usePokemon()
  const [pokemonEvolutionNames, setPokemonEvolutionNames] = useState()

  useEffect(() => {
    handlePokemon(pokemonEvolutionNames)
  }, [response])

  useEffect(() => {
    handleEvolutionNames(url)
  }, [url])

  useEffect(() => {
    handlePokemon(pokemonEvolutionNames)
    handleEvolutionNames(url)
  }, [])

  function handleEvolutionNames (url) {
    if (url) {
      Api.fetchPokemonEvolutionChain(url)
        .then(res => {
          setPokemonEvolutionNames([
            res.chain.species.name,
            res.chain.evolves_to[0]?.species.name,
            res.chain.evolves_to[0]?.evolves_to[0]?.species.name
          ])
        })
    }
  }

  function handlePokemon (name) {
    const array = []
    if (name) {
      name.forEach((item, index) => {
        if (item) {
          Api.fetchPokemon(item)
            .then(res => {
              array.push({
                name: name[index],
                id: res?.id,
                image: res?.sprites?.front_default
              })
            })
        }
      })
    }
    setEvolutionChain(array)
  }

  return (
    <EvolutionContainer>
      {evolutionChain.map((item, index) => {
        return (
          <div key={index}>
            <h4>{item.name}</h4>
          </div>
        )
      })}
    </EvolutionContainer>
  )
}

export default Evolution

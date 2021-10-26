import { usePokemon } from 'hooks/usePokemon'
import React, { useEffect, useState } from 'react'
import { EvolutionContainer } from './style'
import Api from 'Api'

function Evolution () {
  const { url, response } = usePokemon()
  const [pokemonEvolutionNames, setPokemonEvolutionNames] = useState([])
  const [evolutionChain, setEvolutionChain] = useState([])

  useEffect(() => {
    handleEvolutionChain()
  }, [pokemonEvolutionNames])

  useEffect(() => {
    handleEvolutionNames(url)
  }, [url, response])

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

  function handleEvolutionChain () {
    const array = []
    pokemonEvolutionNames.forEach(async (item, index) => {
      if (item) {
        await Api.fetchPokemon(item)
          .then(res => {
            array.push({
              name: pokemonEvolutionNames[index],
              id: res.id,
              image: res.sprites.front_default
            })
          })
      }
    })
    setEvolutionChain(array)
  }

  return (
    <EvolutionContainer>
      {console.log(evolutionChain)}
      {evolutionChain.map((item, index) => {
        return (
          <div key={index}>
            <h4>{item.name}</h4>
            <p>{item.id}</p>
            <img src={item.image} alt='' />
          </div>
        )
      })}
    </EvolutionContainer>
  )
}

export default Evolution

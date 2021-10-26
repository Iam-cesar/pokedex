import { usePokemon } from 'hooks/usePokemon'
import React, { useEffect, useState } from 'react'
import { EvolutionContainer } from './style'
import Api from 'Api'

function Evolution () {

  const { url, setEvolutionChain, response } = usePokemon()
  const [pokemonEvolutionNames, setPokemonEvolutionNames] = useState('')
  const [initialStage, setInitialStage] = useState()
  const [middleStage, setMiddleStage] = useState()
  const [lastStage, setLastStage] = useState()

  useEffect(() => {
    handleEvolutionNames(url)
  }, [response])

  useEffect(() => {
    handleEvolutionChain(pokemonEvolutionNames[0], setInitialStage)
    handleEvolutionChain(pokemonEvolutionNames[1], setMiddleStage)
    handleEvolutionChain(pokemonEvolutionNames[2], setLastStage)
  }, [url])

  useEffect(() => {
    concatPokemonStages()
  }, [url])

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


  function handleEvolutionChain (name, setPokemon) {
    if (name) {
      Api.fetchPokemon(name)
        .then(res => {
          setPokemon({
            name: name,
            id: res.id,
            image: res.sprites.front_default
          })
        })
    }
  }

  function concatPokemonStages () {
    const resArray = []
    resArray.push(initialStage, middleStage, lastStage)
    setEvolutionChain(resArray)
  }

  return (
    <EvolutionContainer>
      {console.log(pokemonEvolutionNames)}
    </EvolutionContainer>
  )
}

export default Evolution

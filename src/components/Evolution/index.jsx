import { usePokemon } from 'hooks/usePokemon'
import React, { useEffect, useState } from 'react'
import { EvolutionContainer } from './style'
import { stylingPokemonId } from 'components/UI/mixins'
import Api from 'Api'

function Evolution () {
  const { url, setEvolutionChain, response, setUrl, evolutionChain } = usePokemon()
  const [pokemonEvolutionNames, setPokemonEvolutionNames] = useState('')
  const [initialStage, setInitialStage] = useState({})
  const [middleStage, setMiddleStage] = useState({})
  const [lastStage, setLastStage] = useState({})

  useEffect(() => {
    handleEvolutionChain(response.name)
  }, [response])

  useEffect(() => {
    handleEvolutionNames(url)
  }, [url])

  useEffect(() => {
    setInitialStage({})
    setMiddleStage({})
    setLastStage({})
  }, [url])

  useEffect(() => {
    handleEvolution(pokemonEvolutionNames[0], setInitialStage)
    handleEvolution(pokemonEvolutionNames[1], setMiddleStage)
    handleEvolution(pokemonEvolutionNames[2], setLastStage)
  }, [pokemonEvolutionNames])

  useEffect(() => {
    concatPokemonStages()
  }, [initialStage, middleStage, lastStage])

  async function handleEvolutionChain (name) {
    if (name) {
      const res = await Api.fetchPokemonSpecies(name)
      setUrl(res.evolution_chain.url)
    }
  }

  async function handleEvolutionNames (url) {
    if (url) {
      const res = await Api.fetchPokemonEvolutionChain(url)
      setPokemonEvolutionNames([
        res.chain.species.name,
        res.chain.evolves_to[0]?.species.name || '',
        res.chain.evolves_to[0]?.evolves_to[0]?.species.name || ''
      ])
    }
  }

  async function handleEvolution (name, setPokemon) {
    if (name) {
      const res = await Api.fetchPokemon(name)
      setPokemon({
        name: name,
        id: res.id,
        image: res.sprites.front_default
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
      {evolutionChain.map((item, index) => {
        return (
          item.image
            ? <div key={index} className='evolution__item'>
              <h4>{item.name}</h4>
              <p>{stylingPokemonId(item)}</p>
              <img
                src={item.image}
                alt={`Pokemon ${item.name}`}
              />
            </div>
            : ''
        )
      })}
    </EvolutionContainer>
  )
}

export default Evolution

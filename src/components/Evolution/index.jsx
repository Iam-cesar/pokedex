import { usePokemon } from 'hooks/usePokemon'
import React, { useEffect, useState } from 'react'
import { EvolutionContainer } from './style'
import { stylingPokemonId } from 'components/UI/mixins'
import Api from 'Api'

function Evolution () {
  const {
    evolutionNames,
    evolution,
    setEvolution
  } = usePokemon()

  const [pokemonEvolution, setPokemonEvolution] = useState([])
  const [pokemonSecundEvolution, setPokemonSecundEvolution] = useState([])
  const [pokemonLastEvolution, setPokemonLastEvolution] = useState([])

  useEffect(() => {
    setPokemonLastEvolution([])
    setPokemonSecundEvolution([])
    handleEvolutionList(evolutionNames?.evolutionInitial?.name, setPokemonEvolution)
    handleEvolutionList(evolutionNames?.evolutionMiddle?.name, setPokemonSecundEvolution)
    handleEvolutionList(evolutionNames?.evolutionFinal?.name, setPokemonLastEvolution)
  }, [evolutionNames])

  useEffect(() => {
    concat(pokemonEvolution, pokemonSecundEvolution, pokemonLastEvolution)
  }, [pokemonEvolution, pokemonSecundEvolution, pokemonLastEvolution])

  function concat (...arrays) {
    const concatArray = arrays
    setEvolution(concatArray)
  }

  async function handleEvolutionList (name, setFn) {
    if (name) {
      const data = await Api.fetchPokemon(name)
      setFn({
        id: data.id,
        image: data.sprites.front_default,
        name: data.name,
        type: data.types
      })
    }
  }

  return (
    <EvolutionContainer>
      {evolution.map((item, index) => {
        return (
          item.image
            ? <div key={index} className='evolution__item'>
              <h4>{item.name}</h4>
              <p>{stylingPokemonId(item.id)}</p>
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

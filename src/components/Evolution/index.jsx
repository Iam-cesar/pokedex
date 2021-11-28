import { usePokemon } from 'hooks/usePokemon'
import React, { useEffect, useState } from 'react'
import { EvolutionContainer } from './style'
import { stylingPokemonId } from 'components/UI/mixins'

function Evolution () {
  const { pokemon, setPokemon } = usePokemon()
  const [evolutions, setEvolutions] = useState([])

  useEffect(() => {
    setEvolutions(pokemon.evolutions)
  }, [pokemon.evolutions])

  function handleMainCardWithSelectedFromEvolution (pokemon, index) {
    const container = Object.assign(pokemon[index], { evolutions: pokemon.evolutions })
    setPokemon(container)
  }

  return (
    <EvolutionContainer>
      {evolutions.map((item, index) => {
        return (
          item
            ? <a
              key={index}
              onClick={() => handleMainCardWithSelectedFromEvolution(evolutions, index)}
              className='evolutions__container'
            >
              <div key={item.index} className='evolution__item'>
                <h4>{item.name}</h4>
                <p>{stylingPokemonId(item.id)}</p>
                <img
                  src={item.image}
                  alt={`Pokemon ${item.name}`}
                />
              </div>
            </a>
            : ''
        )
      })}
    </EvolutionContainer>
  )
}

export default Evolution

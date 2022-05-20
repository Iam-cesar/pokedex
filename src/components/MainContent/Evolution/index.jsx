import { stylingPokemonId } from 'components/UI/mixins'
import { usePokemon } from 'hooks/usePokemon'
import React, { useCallback, useEffect, useState } from 'react'
import { EvolutionContainer } from './style'

function Evolution () {
  const { pokemon, setPokemon } = usePokemon()
  const [evolutions, setEvolutions] = useState([])

  useEffect(() => {
    setEvolutions(pokemon.evolutions)
  }, [pokemon.evolutions])

  const handleMainCardSelectedEvolution = useCallback((data, index) => {
    const newPokemonInMainCard = Object.assign(data[index], { evolutions: pokemon.evolutions })
    setPokemon(newPokemonInMainCard)
  })

  return (
    <EvolutionContainer className='evolution'>
      {evolutions.map((item, index) => {
        return (
          item
            ? <a
              key={index}
              onClick={() => handleMainCardSelectedEvolution(evolutions, index)}
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

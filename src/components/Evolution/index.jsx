import { usePokemon } from 'hooks/usePokemon'
import React, { useEffect, useState } from 'react'
import { EvolutionContainer } from './style'
import { stylingPokemonId } from 'components/UI/mixins'

function Evolution () {
  const { response } = usePokemon()
  const [evolutions, setEvolutions] = useState([])

  useEffect(() => {
    setEvolutions(response.evolutions)
  }, [response.evolutions])

  return (
    <EvolutionContainer>
      {evolutions.map((item, index) => {
        return (
          <div key={item.index || index} className='evolution__item'>
            <h4>{item.name}</h4>
            <p>{stylingPokemonId(item.id)}</p>
            <img
              src={item.image}
              alt={`Pokemon ${item.name}`}
            />
          </div>
        )
      })}
    </EvolutionContainer>
  )
}

export default Evolution

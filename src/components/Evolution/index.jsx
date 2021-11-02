import { usePokemon } from 'hooks/usePokemon'
import React, { } from 'react'
import { EvolutionContainer } from './style'
// import { stylingPokemonId } from 'components/UI/mixins'
// import Api from 'Api'

function Evolution () {
  const { response } = usePokemon()
  // const [pokemonList] = useState()

  return (
    <EvolutionContainer>
      {console.log(response)}
      {/* {evolutions.map((item, index) => {
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
      })} */}
    </EvolutionContainer>
  )
}

export default Evolution

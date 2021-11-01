import { usePokemon } from 'hooks/usePokemon'
import React, { useEffect } from 'react'
import { EvolutionContainer } from './style'
// import { stylingPokemonId } from 'components/UI/mixins'
// import Api from 'Api'

function Evolution () {
  const {
    response
    // setPokemonEvolution
  } = usePokemon()

  useEffect(() => {
    // handleEvolution(response.urlEvolutionChain)
  }, [response])

  useEffect(() => {
  }, [])

  // async function handleEvolution (url) {
  //   if (url) {
  //     const data = await Api.fetchPokemonEvolutionChain(url)
  //     setPokemonEvolution({
  //       initalStage: {
  //         name: data.chain?.species.name || '',
  //         url: data.chain?.species.url || ''
  //       },
  //       middleStage: {
  //         name: data.chain?.evolves_to[0]?.species.name || '',
  //         url: data.chain?.evolves_to[0]?.species.url || ''
  //       },
  //       lastStage: {
  //         name: data.chain?.evolves_to[0]?.evolves_to[0]?.species.name || '',
  //         url: data.chain?.evolves_to[0]?.evolves_to[0]?.species.url || ''
  //       }
  //     })
  //   }
  // }

  return (
    <EvolutionContainer>
      {/* {response.map((item, index) => {
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

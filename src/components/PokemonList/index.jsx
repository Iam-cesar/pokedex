import { PokemonListContainer } from './style'
import React, { } from 'react'
// import { usePokemon } from 'hooks/usePokemon'
// import { stylingPokemonId } from 'components/UI/mixins'
// import Api from 'Api'

function PokemonList () {
  // const { response, setPokemonList } = usePokemon()

  // useEffect(() => {
  //   handlePokemonList()
  // }, [response])

  // async function handlePokemonList () {
  //   const array = []
  //   const lenght = 5

  //   try {
  //     for (let i = response.id; i < response.id + lenght; i++) {
  //       const data = await Api
  //         .fetchPokemonEvolutionChain(`https://pokeapi.co/api/v2/evolution-chain/${i}/`)
  //       array.push({
  //         initalStage: {
  //           name: data.chain?.species.name || '',
  //           url: data.chain?.species.url || ''
  //         },
  //         middleStage: {
  //           name: data.chain?.evolves_to[0]?.species.name || '',
  //           url: data.chain?.evolves_to[0]?.species.url || ''
  //         },
  //         lastStage: {
  //           name: data.chain?.evolves_to[0]?.evolves_to[0]?.species.name || '',
  //           url: data.chain?.evolves_to[0]?.evolves_to[0]?.species.url || ''
  //         }
  //       })
  //     }
  //     setPokemonList(array)
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }

  return (
    <PokemonListContainer>

    </PokemonListContainer>
  )
}

export default PokemonList

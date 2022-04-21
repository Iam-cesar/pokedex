import React, { useEffect, useState } from 'react'

import { PokemonGroupContainer } from './style'
import pokeball from 'assets/svg/pokeball.svg'

// import PokemonModel from 'model/Pokemon'
import Pokemon from 'api/Pokemon'
import { usePokemon } from 'hooks/usePokemon'

import Loader from 'components/Loader'

function PokemonGroup () {
  const pokemon = new Pokemon()
  const { setPokemon } = usePokemon()
  const [pokemonGroup, setPokemonGroup] = useState([])

  useEffect(() => {
    handlePokemonsGroup()
  }, [])

  async function handlePokemonsGroup () {
    const data = await pokemon.getGroup()

    setPokemonGroup(data)
  }

  return (
    <PokemonGroupContainer>
      {<Loader className='group__loader' /> &&
        <ul>{pokemonGroup.map((item, index) => {
          return (
            <li key={index}>
              <a
                onClick={() => setPokemon(pokemonGroup[index])}
              >
                <div className='pokemon__group'>
                  <img src={item.image || pokeball} alt={item.name} />
                  <p>{item.name}</p>
                </div>
              </a>
            </li>
          )
        })}</ul>}
    </PokemonGroupContainer>
  )
}

export default PokemonGroup

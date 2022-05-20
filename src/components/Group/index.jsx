import Pokemon from 'api/Pokemon'
import pokeball from 'assets/svg/pokeball.svg'
import Loader from 'components/Loader'
import { usePokemon } from 'hooks/usePokemon'
import React, { useCallback, useEffect, useState } from 'react'
import { PokemonGroupContainer } from './style'

function PokemonGroup () {
  const pokemon = new Pokemon()
  const { setPokemon } = usePokemon()
  const [pokemonGroup, setPokemonGroup] = useState([])

  useEffect(() => {
    handlePokemonsGroup()
  }, [])

  const handlePokemonsGroup = useCallback(async () => {
    const data = await pokemon.getGroup()

    setPokemonGroup(data)
  })

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

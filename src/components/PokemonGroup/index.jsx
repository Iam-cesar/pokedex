import { PokemonGroupContainer } from './style'
import React, { useEffect, useState } from 'react'
import Pokemon from 'api/Pokemon'
import { usePokemon } from 'hooks/usePokemon'
import pokeball from 'assets/svg/pokeball.svg'

function PokemonGroup () {
  const { setPokemon } = usePokemon()
  const [pokemonGroup, setPokemonGroup] = useState([])
  const Apipokemon = new Pokemon()

  useEffect(() => {
    handlePokemonsGroup()
  }, [])

  async function handlePokemonsGroup () {
    const res = await Apipokemon.getGroup()
    const container = []
    await Promise.all(res.map(async (item) => {
      const pokemon = await Apipokemon.getAllInformation(item)
      container.push(pokemon)
    }))
    setPokemonGroup(container)
  }

  return (
    <PokemonGroupContainer>
      {pokemonGroup.map((item, index) => {
        return (
          <a
            key={index}
            onClick={() => setPokemon(pokemonGroup[index])}
          >
            <div className='pokemon__group'>
              <img src={item.image || pokeball} alt={item.name} />
              <p>{item.name}</p>
            </div>
          </a>
        )
      })}
    </PokemonGroupContainer>
  )
}

export default PokemonGroup

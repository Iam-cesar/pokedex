import { PokemonListContainer } from './style'
import React, { useEffect, useState } from 'react'
import Pokemon from 'api/Pokemon'
import { usePokemon } from 'hooks/usePokemon'
import pokeball from 'assets/svg/pokeball.svg'

function PokemonList () {
  const { setPokemon } = usePokemon()
  const [pokemonList, setPokemonList] = useState([])
  const Apipokemon = new Pokemon()

  useEffect(() => {
    handlePokemonsList()
  }, [])

  async function handlePokemonsList () {
    const res = await Apipokemon.getGroup()
    const container = []
    await Promise.all(res.map(async (item) => {
      const pokemon = await Apipokemon.getAllInformation(item)
      container.push(pokemon)
    }))
    setPokemonList(container)
  }

  return (
    <PokemonListContainer>
      {pokemonList.map((item, index) => {
        return (
          <a
            key={index}
            onClick={() => setPokemon(pokemonList[index])}
          >
            <div className='pokemon-list'>
              <img src={item.image || pokeball} alt={item.name} />
              <p>{item.name}</p>
            </div>
          </a>
        )
      })}
    </PokemonListContainer>
  )
}

export default PokemonList

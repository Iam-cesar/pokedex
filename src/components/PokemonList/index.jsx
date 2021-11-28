import { PokemonListContainer } from './style'
import React, { useEffect, useState } from 'react'
import Api from 'Api'
import { usePokemon } from 'hooks/usePokemon'
import pokeball from 'assets/svg/pokeball.svg'

function PokemonList () {
  const { setPokemon } = usePokemon()
  const [pokemonList, setPokemonList] = useState([])

  useEffect(() => {
    handlePokemonsList()
  }, [])

  async function handlePokemonsList () {
    const res = await Api.getPokemonList()
    const array = []
    await Promise.all(res.map(async (item) => {
      const pokemon = await Api.getPokemonFullInfo(item)
      array.push(pokemon)
    }))
    setPokemonList(array)
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

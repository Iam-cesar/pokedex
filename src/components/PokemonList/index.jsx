import { PokemonListContainer } from './style'
import React, { useEffect, useState } from 'react'
import Api from 'Api'
import { usePokemon } from 'hooks/usePokemon'

function PokemonList () {
  const { setResponse } = usePokemon()
  const [pokemonList, setPokemonList] = useState([])

  useEffect(() => {
    handlePokemonsList()
  }, [])

  async function handlePokemonsList () {
    const res = await Api.getPokemonList()
    const array = []
    await Promise.all(res.map(async (item) => {
      const response = await Api.getPokemonFullInfo(item)
      array.push(response)
    }))
    setPokemonList(array)
  }

  return (
    <PokemonListContainer>
      {pokemonList.map((item, index) => {
        return (
          <a
            key={index}
            onClick={() => setResponse(pokemonList[index])}
          >
            <div className='pokemon-list'>
              <img src={item.image} alt={item.name} />
              <p>{item.name}</p>
            </div>
          </a>
        )
      })}
    </PokemonListContainer>
  )
}

export default PokemonList

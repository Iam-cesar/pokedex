import { PokemonListContainer } from './style'
import React, { useEffect, useState } from 'react'
import Api from 'Api'
import { stylingPokemonId } from 'components/UI/mixins'

function PokemonList () {
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
          <div key={index} className='pokemon-list'>
            <img src={item.image} alt={item.name} />
            <span>{stylingPokemonId(item.id)}</span>
          </div>
        )
      })}
    </PokemonListContainer>
  )
}

export default PokemonList

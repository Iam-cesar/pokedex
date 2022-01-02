import React, { useContext, useEffect, useState } from 'react'

import { PokemonGroupContainer } from './style'
import pokeball from 'assets/svg/pokeball.svg'

import PokemonModel from 'model/Pokemon'
import Pokemon from 'api/Pokemon'
import { usePokemon } from 'hooks/usePokemon'

import { LoaderContext } from 'context/loader'
import Loader from 'components/Loader'

function PokemonGroup () {
  const { setPokemon } = usePokemon()
  const [pokemonGroup, setPokemonGroup] = useState([])
  const Apipokemon = new Pokemon()
  const { loader, setLoader } = useContext(LoaderContext)

  useEffect(() => {
    handlePokemonsGroup()
  }, [])

  async function handlePokemonsGroup () {
    const res = await Apipokemon.getGroupNames()
    const group = new PokemonModel().group
    await Promise.all(res.map(async (item) => {
      const pokemon = await Apipokemon.getAllInformation(item)
      group.push(pokemon)
    })).then(setPokemonGroup(group))
    setLoader(false)
  }

  return (
    <PokemonGroupContainer>
      {loader
        ? <Loader className='group__loader' />
        : <ul>{pokemonGroup.map((item, index) => {
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

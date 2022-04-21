import React, { useEffect, useState } from 'react'
import translateTypeNames from './util/translateTypeNames'
import handleTypeIcons from './util/handleTypeIcons'
import { PokemonTypeContainer } from './style'

import Loader from 'components/Loader'

import { usePokemon } from 'hooks/usePokemon'

function PokemonType () {
  const { pokemon } = usePokemon()
  const [pokemonType, setPokemonType] = useState([])

  useEffect(() => {
    setPokemonType(pokemon.type)
  }, [pokemon.type])

  return (
    <PokemonTypeContainer>
      {<Loader className='loader__type' /> &&
        pokemonType.map((item, index) => {
          const pokemon = handleTypeIcons(item.type.name)
          const translatedName = translateTypeNames(item.type.name)
          return <div
            key={index}
            className={
              pokemonType.length === 2
                ? 'pokemon__type__double__container'
                : 'pokemon__type__container'
            }
            style={{ backgroundColor: pokemon.color }}
          >
            <div >
              <img
                src={pokemon.imageType}
                alt={translatedName}
              />
              <p>{translatedName}</p>
            </div>
          </div>
        })}
    </PokemonTypeContainer>
  )
}

export default PokemonType

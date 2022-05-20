import Loader from 'components/Loader'
import { usePokemon } from 'hooks/usePokemon'
import React, { useEffect, useState } from 'react'
import { PokemonTypeContainer } from './style'
import handleTypeIcons from './utils/handleTypeIcons'
import translateTypeNames from './utils/translateTypeNames'

function PokemonType () {
  const { pokemon } = usePokemon()
  const [pokemonType, setPokemonType] = useState([])

  useEffect(() => {
    setPokemonType(pokemon.type)
  }, [pokemon.type])

  function handleClassnameContainer(length) {
    return length === 2
      ? 'pokemon__type__double__container'
      : 'pokemon__type__container'
  }

  return (
    <PokemonTypeContainer>
      {<Loader className='loader__type' /> &&
        pokemonType.map((item, index) => {
          const pokemon = handleTypeIcons(item.type.name)
          const translatedName = translateTypeNames(item.type.name)

          return <div
            key={index}
            className={ handleClassnameContainer(pokemonType.length) }
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

import IconImg from 'components/IconImg'
import Loader from 'components/Loader'
import { stylingPokemonId } from 'components/UI/mixins'
import { usePokemon } from 'hooks/usePokemon'
import React from 'react'
import { MainCardContainer } from './style'

function MainCard () {
  const { pokemon } = usePokemon()
  const animatedSpritesUntilToday = 649

  function capitalize (string) {
    return `${string.charAt(0).toUpperCase()}${string.slice(1)}`
  }

  return (
    <MainCardContainer>
      {!pokemon
        ? <Loader />
        : <>
          <div className='main__card__title'>
            <h1>{capitalize(pokemon?.name)}</h1>
            <p>{stylingPokemonId(pokemon.id)}</p>
          </div>
          <IconImg
            className='main__card__img'
            img={pokemon.id <= animatedSpritesUntilToday
              ? pokemon.imgAnimated
              : pokemon.image || ''}
            alt={pokemon.name
              ? `Pokemon ${capitalize(pokemon?.name)}`
              : ''}
          />
        </>}
    </MainCardContainer>
  )
}

export default MainCard

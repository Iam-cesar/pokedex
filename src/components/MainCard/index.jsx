import { MainCardContainer } from './style'
import React from 'react'
import IconImg from 'components/IconImg'
import { usePokemon } from 'hooks/usePokemon'
import { stylingPokemonId } from 'components/UI/mixins'

function MainCard () {
  const { pokemon } = usePokemon()
  const animatedSpritesUntilToday = 649

  function capitalize (string) {
    return `${string.charAt(0).toUpperCase()}${string.slice(1)}`
  }

  return (
    <MainCardContainer>
      <div className='main__card'>
        <h1>{capitalize(pokemon?.name || '')}</h1>
        <p>{stylingPokemonId(pokemon.id)}</p>
      </div>
      <IconImg
        className='main__card__img'
        img={pokemon?.id <= animatedSpritesUntilToday
          ? pokemon?.imgAnimated
          : pokemon?.image || ''}
        alt={pokemon.name
          ? `Pokemon ${capitalize(pokemon?.name)}`
          : ''}
      />
    </MainCardContainer>
  )
}

export default MainCard

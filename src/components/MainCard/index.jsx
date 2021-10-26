import { MainCardContainer } from './style'
import React from 'react'
import IconImg from 'components/IconImg'
import { usePokemon } from 'hooks/usePokemon'
import { stylingPokemonId } from 'components/UI/mixins'

function MainCard () {
  const { response } = usePokemon()
  const animatedSpritesUntilToday = 649

  function capitalize (string) {
    return `${string.charAt(0).toUpperCase()}${string.slice(1)}`
  }

  return (
    <MainCardContainer>
      <div className='main__card__title'>
        <h1>{capitalize(response?.name || '')}</h1>
        <p>{stylingPokemonId(response)}</p>
      </div>
      <IconImg
        className='main__card__img'
        img={response?.id <= animatedSpritesUntilToday
          ? response?.sprites.versions['generation-v']['black-white'].animated?.front_default
          : response?.sprites?.front_default || ''}
        alt={response.name
          ? `Pokemon ${capitalize(response?.name)}`
          : ''}
      />
    </MainCardContainer>
  )
}

export default MainCard

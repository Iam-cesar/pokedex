import { MainCardContainer } from './style'
import React from 'react'
import IconImg from 'components/IconImg'
import { usePokemon } from 'hooks/usePokemon'

function MainCard () {
  const { response } = usePokemon()
  function capitalize (string) {
    return `${string.charAt(0).toUpperCase()}${string.slice(1)}`
  }

  return (
    <MainCardContainer>
      <div className='main__card__title'>
        <h1>{capitalize(response?.name || '')}</h1>
      </div>
      <IconImg
        className='main__card__img'
        img={response?.id <= 649
          ? `/animated/${response?.id || 1}.gif`
          : `${response?.sprites?.front_default || ''}`}
        alt={response.name
          ? `Pokemon ${capitalize(response?.name)}`
          : ''}
      />
    </MainCardContainer>
  )
}

export default MainCard

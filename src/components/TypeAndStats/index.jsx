import React from 'react'

import PokemonType from 'components/TypeAndStats/Type'
import StatsInfo from 'components/TypeAndStats/Statistics'
import Title from 'components/Navigation/Title'

import { TypeAndStatsContainer } from './style'

function TypeAndStats () {
  return (
    <TypeAndStatsContainer>
      <Title
        HtmlSize='h3'
        className='title__type'
        text='Tipo e informações'
      />
      <div className='types__info'>
        <PokemonType />
        <StatsInfo />
      </div>
    </TypeAndStatsContainer>
  )
}

export default TypeAndStats

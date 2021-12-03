import React from 'react'
import PokemonType from 'components/PokemonType'
import StatsInfo from 'components/StatsInfo'
import Title from 'components/Title'
import { TypesAndStatsContainer } from './style'

function TypesAndStats () {
  return (
    <TypesAndStatsContainer>
      <Title
        HtmlSize='h3'
        className='title__type'
        text='Type and information'
      />
      <div className='types__info'>
        <PokemonType />
        <StatsInfo />
      </div>
    </TypesAndStatsContainer>
  )
}

export default TypesAndStats

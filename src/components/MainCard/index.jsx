import { MainCardContainer } from './style'
import React, { useContext } from 'react'
import { PokemonContext } from 'context/pokemon'

function MainCard () {
  const { response } = useContext(PokemonContext)

  return (
    <MainCardContainer>
      <div>
        <h1>{response?.name}</h1>
      </div>
      <div>
        <img src={`/animated/${response?.id || 1}.gif`} alt={`Pokemon ${response?.name}`} />
      </div>
    </MainCardContainer>
  )
}

export default MainCard

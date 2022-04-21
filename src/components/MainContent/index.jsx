import React from 'react'
import MainCard from 'components/MainContent/MainCard'
import Evolution from 'components/MainContent/Evolution'
import { MainContentContainer } from './style'

function MainContent () {
  return (
    <MainContentContainer>
      <MainCard />
      <Evolution />
    </MainContentContainer>
  )
}

export default MainContent

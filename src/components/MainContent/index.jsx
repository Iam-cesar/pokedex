import React from 'react'
import MainCard from 'components/MainCard'
import Evolution from 'components/Evolution'
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

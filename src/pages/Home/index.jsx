import React from 'react'
import { HomeContainer } from './style'
import { PokemonProvider } from 'context/pokemon'
import SearchInput from 'components/SearchInput'
import TypesAndStats from 'components/TypesAndStats'
import Footer from 'components/Footer'
import PokemonGroup from 'components/PokemonGroup'
import MainContent from 'components/MainContent/indes'

function Home () {
  return (
    <PokemonProvider>
      <HomeContainer>
        <SearchInput />
        <MainContent />
        <TypesAndStats />
        <PokemonGroup />
        <Footer />
      </HomeContainer>
    </PokemonProvider>
  )
}

export default Home

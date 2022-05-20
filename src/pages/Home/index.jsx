import Footer from 'components/Footer'
import PokemonGroup from 'components/Group'
import MainContent from 'components/MainContent/index'
import Navigation from 'components/Navigation'
import SearchInput from 'components/Navigation/SearchInput'
import TypeAndStats from 'components/TypeAndStats'
import { PokemonProvider } from 'context/pokemon'
import React from 'react'
import { HomeContainer } from './style'

function Home () {
  return (
    <PokemonProvider>
      <HomeContainer>
        <Navigation />
        <SearchInput />
        <MainContent />
        <TypeAndStats />
        <PokemonGroup />
        <Footer />
      </HomeContainer>
    </PokemonProvider>
  )
}

export default Home

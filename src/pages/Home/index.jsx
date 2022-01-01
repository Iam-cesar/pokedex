import React from 'react'
import { HomeContainer } from './style'
import { PokemonProvider } from 'context/pokemon'
import SearchInput from 'components/SearchInput'
import TypeAndStats from 'components/TypeAndStats'
import Footer from 'components/Footer'
import PokemonGroup from 'components/Group'
import MainContent from 'components/MainContent/index'
import Navigation from 'components/Navigation'
import { LoaderProvider } from 'context/loader'

function Home () {
  return (
    <PokemonProvider>
      <LoaderProvider>
        <HomeContainer>
          <Navigation />
          <SearchInput />
          <MainContent />
          <TypeAndStats />
          <PokemonGroup />
          <Footer />
        </HomeContainer>
      </LoaderProvider>
    </PokemonProvider>
  )
}

export default Home

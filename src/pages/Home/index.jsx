import { HomeContainer } from './style'
import React from 'react'
import SearchInput from 'components/SearchInput'
import MainCard from 'components/MainCard'
import Evolution from 'components/Evolution'
import PokemonType from 'components/PokemonType'
import PokemonPrevius from 'components/PokemonPrevius'
import PokemonNext from 'components/PokemonNext'
import Footer from 'components/Footer'
import PokemonInfo from 'components/PokemonList'
import Title from 'components/Title'
import { PokemonProvider } from 'context/pokemon'

function Home () {
  return (
    <PokemonProvider>
      <HomeContainer>
        <SearchInput />
        <MainCard />
        <PokemonInfo />
        <Title
          HtmlSize='h3'
          className='title__evolution'
          text='Evolutions'
          style={{ gridArea: 'title__evolution' }}
        />
        <Evolution />
        <Title
          HtmlSize='h3'
          className='title__type'
          text='Type'
          style={{ gridArea: 'title__type' }}
        />
        <PokemonType />
        <PokemonPrevius />
        <PokemonNext />
        <Footer />
      </HomeContainer>
    </PokemonProvider>
  )
}

export default Home

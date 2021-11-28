import IconImg from 'components/IconImg'
import React from 'react'
import { AsideContainer } from './style'
import searchIcon from 'assets/svg/pokeball.svg'

function Aside () {
  return (
    <AsideContainer>
      <IconImg
        className='aside__icon'
        img={searchIcon}
        alt='alt'
      />
      <nav>
        <h1>Pokedex</h1>
      </nav>
    </AsideContainer>
  )
}

export default Aside

import IconImg from 'components/IconImg'
import React from 'react'
import { NavContainer } from './style'
import searchIcon from 'assets/svg/pokeball.svg'

function Navigation () {
  return (
    <NavContainer>
      <IconImg
        className='nav__icon'
        img={searchIcon}
        alt='logotipo pokebola'
      />
      <nav>
        <h1>Pokedex</h1>
      </nav>
    </NavContainer>
  )
}

export default Navigation

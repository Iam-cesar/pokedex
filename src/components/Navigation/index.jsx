import React from 'react'

import IconImg from 'components/IconImg'
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
      <div>
        <h1>Pokedex</h1>
      </div>
    </NavContainer>
  )
}

export default Navigation

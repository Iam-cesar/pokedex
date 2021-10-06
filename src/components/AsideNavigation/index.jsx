import IconImg from 'components/IconImg'
import React from 'react'
import { AsideNavigationContainer } from './style'
import searchIcon from 'assets/svg/pokeball.svg'
import homeIcon from 'assets/svg/home.svg'

function AsideNavigation () {
  return (
    <AsideNavigationContainer>
      <IconImg
        className='aside__icon'
        img={searchIcon}
        alt='alt'
      />
      <nav>
        <ul className='aside__list'>
          <li className='aside__list__item'>
            <img src={homeIcon} alt="Icone pagina principal" />
          </li>
        </ul>
      </nav>
    </AsideNavigationContainer>
  )
}

export default AsideNavigation

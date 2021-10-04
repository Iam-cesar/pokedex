import IconImg from 'components/IconImg'
import React from 'react'
import { AsideNavigationContainer } from './style'

function AsideNavigation () {
  return (
    <AsideNavigationContainer>
      <nav>
        <IconImg
          img='img'
          alt='alt'
        />
        <ul>
          <li>home</li>
        </ul>
      </nav>
    </AsideNavigationContainer>
  )
}

export default AsideNavigation

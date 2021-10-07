import styled from 'styled-components'
import { $primaryColor, $white } from 'components/UI/colors'

export const AsideNavigationContainer = styled.aside`
  align-items: center;
  border-right: 1px solid ${$white};
  display: flex;
  flex-direction: column;
  grid-area: aside;
  height: 100vh;
  padding: 24px 30px;

  nav{
    height: 60%;
    display: grid;
    place-items: center;
  }

  .aside__list__item{
    border-radius: 15px;
    display: grid;
    height: 3rem;
    list-style: none;
    place-items: center;    
    width: 3rem;

    &:hover{
      background-color: ${$primaryColor};
      transition: 200ms ease-in-out;
      cursor: pointer;
    }
  }
`

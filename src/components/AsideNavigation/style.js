import styled from 'styled-components'
import { $primaryColor } from 'components/UI/colors'

export const AsideNavigationContainer = styled.aside`
  align-items: center;
  display: flex;
  flex-direction: column;
  grid-area: aside;

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
    }
  }
`

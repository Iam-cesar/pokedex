import styled from 'styled-components'
import { $white } from 'components/UI/colors'

export const AsideContainer = styled.aside`
  align-items: center;
  border-right: 1px solid ${$white};
  display: flex;
  flex-direction: column;
  grid-area: aside;
  height: 100vh;
  padding: 24px 30px;

  nav{
    display: grid;
    height: 80%;
    place-items: center;
  }

  h1{
    font-size: 2rem;
    text-orientation: upright;
    writing-mode: vertical-lr;
  }

`

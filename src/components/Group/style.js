import { cardConfig } from 'components/UI/mixins'
import styled from 'styled-components'

export const PokemonGroupContainer = styled.section`
  ${cardConfig}

  .group__loader{
    height: 40vh;
    width: 100%;
  }

  ul{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 0 .5rem 1rem .5rem;
  }

  li {
    list-style: none;
  }

  li > a > .pokemon__group{
  align-items: center;
  display: flex;
  flex-direction: column;

    :hover{
      cursor: pointer;
      transform: scale(1.2);
    }
  }

  .pokemon__group p{
    font-size: 1.1rem;
    text-align: center;
  }
`

import { cardConfig } from 'components/UI/mixins'
import styled from 'styled-components'

export const PokemonGroupContainer = styled.div`
  ${cardConfig}
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 0 .5rem 1rem .5rem;

  .pokemon__group{
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

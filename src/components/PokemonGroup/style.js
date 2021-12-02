import { cardConfig } from 'components/UI/mixins'
import styled from 'styled-components'

export const PokemonGroupContainer = styled.div`
  ${cardConfig}
  grid-area: group;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 0 0 1em 0;
  max-height: 90vh;

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

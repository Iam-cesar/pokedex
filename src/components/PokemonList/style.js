import { cardConfig } from 'components/UI/mixins'
import styled from 'styled-components'

export const PokemonListContainer = styled.div`
  ${cardConfig}
  grid-area: list;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 0 0 1em 0;
  max-height: 90vh;

  .pokemon-list{
    align-items: center;
    display: flex;
    flex-direction: column;

    :hover{
    cursor: pointer;
    transform: scale(1.3);
  }

    p{
      font-size: 1rem;
      text-align: center;
    }
  }
`

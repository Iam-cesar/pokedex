import { cardConfig } from 'components/UI/mixins'
import styled from 'styled-components'

export const PokemonListContainer = styled.div`
  ${cardConfig}
  grid-area: list;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-around;
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
      font-size: 0.8rem;
      text-align: center;
    }
  }
`

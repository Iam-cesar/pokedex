import { cardConfig } from 'components/UI/mixins'
import styled from 'styled-components'

export const EvolutionContainer = styled.div`
  ${cardConfig}
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  grid-area: evolution;
  
  .evolutions__container{
    cursor: pointer;

    .evolution__item{
      align-items: center;
      display: flex;
      flex-direction: column;
      height: 100%;
      justify-content: flex-end;
      
      h4{
        font-size: 1.2em;
      }
      
      p{
        font-size: 1em;
      }
      
      img{
        height: 65%;
      }
    }
  }
`

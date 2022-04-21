import { cardConfig } from 'components/UI/mixins'
import styled from 'styled-components'

export const EvolutionContainer = styled.div`
  ${cardConfig}
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 1rem 0;
  width: 50%;
  
  .evolutions__container{
    cursor: pointer;

    .evolution__item{
      align-items: center;
      display: flex;
      flex-direction: column;
      height: 100%;
      justify-content: flex-end;
      
      h4{
        font-size: 1rem;
      }
      
      p{
        font-size: .8rem;
      }
      
      img{
        height: 65%;
      }
    }
  }
`

import { cardConfig } from 'components/UI/mixins'
import styled from 'styled-components'
import { typesAndStats450px } from 'components/UI/responsive'

export const PokemonTypeContainer = styled.div`
  ${cardConfig}
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 30%;

  .pokemon__type--container,
  .pokemon__type--double--container{
    align-items: center;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    height:100%;
    width: 100%;
    
    div{
      align-items:center;
      display:flex;
      flex-direction: column;
      
      img{
        height: 32px;
        width: 32px;
      }
      
      p{
        font-size: 1.3rem;
      }
    }
  }

  .pokemon__type--double--container{
    :nth-child(1n){
      border-radius: 15px 15px 0 0;
    }
    :nth-child(2n){
      border-radius: 0 0 15px 15px;
    }
  }

  ${typesAndStats450px}
`

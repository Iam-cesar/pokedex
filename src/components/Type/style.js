import { cardConfig } from 'components/UI/mixins'
import styled from 'styled-components'

export const typesResponsivity = `
  @media screen and (max-width: 450px){
    .pokemon__type__container div p,
    .pokemon__type__double__container div p{
      font-size: 1rem !important;
    }
  }
`

export const PokemonTypeContainer = styled.div`
  ${cardConfig}
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 30%;

  .loader__type{
    height: 15vh;
    width: 100%;
  }

  .pokemon__type__container,
  .pokemon__type__double__container{
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

  .pokemon__type__double__container{
    :nth-child(1n){
      border-radius: 15px 15px 0 0;
    }
    :nth-child(2n){
      border-radius: 0 0 15px 15px;
    }
  }

  ${typesResponsivity}
`

import { cardConfig } from 'components/UI/mixins'
import styled from 'styled-components'

export const MainCardContainer = styled.div`
  ${cardConfig}
  background-color: rgba(242, 242, 242, .2);
  display: flex;
  grid-area: main;

  .main__card__title{
    display: flex;
    flex-direction: column;
    padding: 4rem;
    width: 50%;

    h1{
      font-size: 2.5rem;
    }
  }

  .main__card__img{
    display: grid;
    place-items: center;
    width: 50%;

    img{
      height: 70%;
    }
  }
`

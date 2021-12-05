import { cardConfig } from 'components/UI/mixins'
import styled from 'styled-components'
import { mainCardTitle450px } from 'components/UI/responsive'

export const MainCardContainer = styled.div`
  ${cardConfig}
  background-color: rgba(242, 242, 242, .2);
  display: flex;
  width: 50%;

  .main__card__title{
    display: flex;
    flex-direction: column;
    padding: 4rem;
    width: 50%;

    h1{
      font-size: 2rem;
    }

    ${mainCardTitle450px}
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

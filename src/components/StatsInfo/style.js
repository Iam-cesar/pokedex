import { cardConfig } from 'components/UI/mixins'
import styled from 'styled-components'

export const statsInfo = `
  @media screen and (max-width: 450px){
    tr > td {
      font-size: .9rem !important;
    }
  }
`

export const StatsInfoContainer = styled.table`
  ${cardConfig}
  padding: .5rem 1rem;
  width: 70%;

  tr > td {
    font-size: 1.1rem;
  }

  .pokemon__info__stats__number{
    text-align: end;
  }

  ${statsInfo}
`

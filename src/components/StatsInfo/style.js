import { cardConfig } from 'components/UI/mixins'
import styled from 'styled-components'
import { statsInfo450px } from 'components/UI/responsive'

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

  ${statsInfo450px}
`

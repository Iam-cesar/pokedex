import { cardConfig } from 'components/UI/mixins'
import styled from 'styled-components'

export const StatsInfoContainer = styled.table`
  ${cardConfig}
  grid-area: statsInfo;
  padding: .5rem 1rem;

  tr > td {
    font-size: 1.1rem;
  }

  .pokemon__info__stats__number{
    text-align: end;
  }
`

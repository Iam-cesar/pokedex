import { cardConfig } from 'components/UI/mixins'
import styled from 'styled-components'

export const SearchInputContainer = styled.div`
  ${cardConfig}
  display: flex;
  grid-area: search;
  align-items:center;
  width: 30%;

  .search__input{
    height: 100%;
    width: 100%;
  }
`

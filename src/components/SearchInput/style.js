import { cardConfig } from 'components/UI/mixins'
import styled from 'styled-components'

export const SearchInputContainer = styled.div`
  ${cardConfig}
  align-items:center;
  border-radius: 30px;
  display: flex;
  grid-area: search;
  width: 30%;

  .search__icon{
    display:grid;
    height: 100%;
    place-items: center;
    width: 50px;
  }

  .search__input{
    background-color: transparent;
    border-radius: 15px;
    border: none;
    height: 100%;
    width: 100%;

    &:focus{
      outline: none;
    }
  }
`

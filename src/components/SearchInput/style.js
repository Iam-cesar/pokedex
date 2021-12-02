import { cardConfig } from 'components/UI/mixins'
import styled from 'styled-components'
import { $white, $errorColor } from 'components/UI/colors'

export const errorToastStyle = {
  border: `1px solid ${$errorColor}`,
  padding: '16px',
  color: `${$errorColor}`,
  fontSize: '1.3rem'
}

export const SearchInputContainer = styled.div`
  ${cardConfig}
  align-items:center;
  border-radius: 30px;
  display: flex;
  grid-area: search;
  padding: .5rem;  

  .search__icon{
    display:grid;
    height: 100%;
    place-items: center;
    width: 50px;
  }
  
  .search__input,
  form{
    background-color: transparent;
    border-radius: 15px;
    border: none;
    color: ${$white};
    font-size: 16px;
    height: 100%;
    width: 100%;

    &:focus{
      outline: none;
    }
  }
`

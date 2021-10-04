import IconImg from 'components/IconImg'
import { SearchInputContainer } from './style'
import React from 'react'

function SearchInput () {
  return (
    <SearchInputContainer>
      <IconImg
        className='search__icon'
        img='img'
        alt='alt'
      />
      <input
        type="text"
        className='search__input'
      />
    </SearchInputContainer>
  )
}

export default SearchInput

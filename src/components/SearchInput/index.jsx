import IconImg from 'components/IconImg'
import { SearchInputContainer } from './style'
import React from 'react'
import searchIcon from 'assets/svg/search_icon.svg'

function SearchInput () {
  return (
    <SearchInputContainer>
      <IconImg
        className='search__icon'
        img={searchIcon}
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

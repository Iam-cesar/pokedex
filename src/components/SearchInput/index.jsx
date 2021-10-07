import IconImg from 'components/IconImg'
import { SearchInputContainer } from './style'
import React, { useContext, useEffect } from 'react'
import searchIcon from 'assets/svg/search_icon.svg'
import Api from 'Api'
import { PokemonContext } from 'context/pokemon'

function SearchInput () {
  const { response, setResponse, searchText, setSearchText } = useContext(PokemonContext)

  useEffect(() => {
    clearElement('search__input')
  }, [response])

  function handleSearchText (e) {
    e.preventDefault()
    handlePokemon(searchText)
  }

  function clearElement (classElement) {
    const element = document.querySelector(`.${classElement}`)
    element.value = ''
    setSearchText('')
  }

  function handlePokemon (param) {
    const data = Api
      .fetchPokemon(param)
      .then(res => setResponse(res))
    return data
  }

  return (
    <SearchInputContainer>
      <IconImg
        className='search__icon'
        img={searchIcon}
        alt='alt'
      />
      <form onSubmit={handleSearchText}>
        <input
          type="text"
          placeholder='Search...'
          className='search__input'
          value={searchText}
          onChange={e => setSearchText(e.target.value)}
        />
      </form>
    </SearchInputContainer>
  )
}

export default SearchInput

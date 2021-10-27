import React, { useContext, useEffect, useState, useRef } from 'react'
import { SearchInputContainer } from './style'
import { PokemonContext } from 'context/pokemon'
import { $errorColor } from 'components/UI/colors'
import toast, { Toaster } from 'react-hot-toast'
import IconImg from 'components/IconImg'
import searchIcon from 'assets/svg/search_icon.svg'
import Api from 'Api'

function SearchInput () {
  const { response, setResponse } = useContext(PokemonContext)
  const [searchText, setSearchText] = useState('')
  const toastStyle = { color: `${$errorColor}` }
  const searchInputRef = useRef('')

  useEffect(() => {
    clearElement(searchInputRef)
    setSearchText('')
  }, [response])

  // useEffect(() => {
  //   initialFetch()
  // }, [])

  function notify () {
    setSearchText('')
    toast('Pokemon não encontrado')
  }

  // function initialFetch () {
  //   const randomPokemonId = (Math.random() * 100).toFixed()
  //   handleFetchPokemon(randomPokemonId)
  // }

  function handleSearchPokemon (event) {
    event.preventDefault()
    handleFetchPokemon(searchText)
  }

  function clearElement (element) {
    element.current = ''
  }

  function handleFetchPokemon (param) {
    const data = Api.fetchPokemon(param)
      .then(res => setResponse(res))
      .catch(() => notify())
    return data
  }

  return (
    <SearchInputContainer>
      <Toaster toastOptions={{ style: toastStyle }} />
      <IconImg
        className='search__icon'
        img={searchIcon}
        alt='alt'
      />
      <form onSubmit={handleSearchPokemon}>
        <input
          ref={searchInputRef}
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

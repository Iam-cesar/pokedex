import IconImg from 'components/IconImg'
import { SearchInputContainer } from './style'
import React, { useContext, useEffect } from 'react'
import searchIcon from 'assets/svg/search_icon.svg'
import Api from 'Api'
import { PokemonContext } from 'context/pokemon'
import toast, { Toaster } from 'react-hot-toast'

function SearchInput () {
  const { response, setResponse, searchText, setSearchText } = useContext(PokemonContext)
  const toastStyle = { color: '#EC1B23' }

  useEffect(() => {
    clearElement('search__input')
    setSearchText('')
  }, [response])

  useEffect(() => {
    initialFetch()
  }, [])

  function notify () {
    setSearchText('')
    toast('Pokemon não encontrado')
  }

  function initialFetch () {
    const randomPokemonId = (Math.random() * 100).toFixed()
    return handleFetchPokemon(randomPokemonId)
  }

  function handleSearchPokemon (event) {
    event.preventDefault()
    handleFetchPokemon(searchText)
  }

  function clearElement (classElement) {
    const element = document.querySelector(`.${classElement}`)
    element.value = ''
  }

  function handleFetchPokemon (param) {
    const data = Api
      .fetchPokemon(param)
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

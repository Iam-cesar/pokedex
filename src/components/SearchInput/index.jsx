import React, { useContext, useEffect, useState, useRef } from 'react'
import { SearchInputContainer } from './style'
import { PokemonContext } from 'context/pokemon'
import { $errorColor } from 'components/UI/colors'
import toast, { Toaster } from 'react-hot-toast'
import IconImg from 'components/IconImg'
import searchIcon from 'assets/svg/search_icon.svg'
import Api from 'Api'

function SearchInput () {
  const {
    response,
    setResponse
  } = useContext(PokemonContext)

  const [searchText, setSearchText] = useState('')
  const toastStyle = { color: `${$errorColor}` }
  const searchInputRef = useRef('')

  useEffect(() => {
    initialFetch()
  }, [])

  useEffect(() => {
    clearElement(searchInputRef)
    setSearchText('')
  }, [response])

  async function handleFetchPokemon (param) {
    try {
      const data = await Api.getPokemonFullInfo(param)
      setResponse(data)
    } catch (err) {
      notify()
    }
  }

  function notify () {
    toast('Pokemon não encontrado')
    setSearchText('')
  }

  function initialFetch () {
    const randomPokemonId = (Math.random() * 100 + 1).toFixed()
    handleFetchPokemon(randomPokemonId)
  }

  function handleSearchPokemon (event) {
    event.preventDefault()
    if (!searchText) toast('Insira um nome para pesquisa')
    if (searchText === '0') toast('Não existe pokemon com Id zero :[')

    handleFetchPokemon(searchText)
  }

  function clearElement (element) {
    element.current = ''
  }

  return (
    <SearchInputContainer>
      <Toaster
        toastOptions={{ style: toastStyle }}
        position={'top-center'}
      />
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

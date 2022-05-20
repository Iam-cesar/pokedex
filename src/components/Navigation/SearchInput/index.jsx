import Pokemon from 'api/Pokemon'
import searchIcon from 'assets/svg/search_icon.svg'
import IconImg from 'components/IconImg'
import { PokemonContext } from 'context/pokemon'
import React, { useCallback, useContext, useEffect, useRef, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { errorToastStyle, SearchInputContainer } from './style'

function SearchInput () {
  const {
    pokemon,
    setPokemon
  } = useContext(PokemonContext)

  const Api = new Pokemon()
  const [searchText, setSearchText] = useState('')
  const searchInputRef = useRef('')

  useEffect(() => {
    initialFetch()
  }, [])

  useEffect(() => {
    clearElement(searchInputRef)
    setSearchText('')
  }, [pokemon])

  const handleFetchPokemon = useCallback(async (nameOrId) => {
    try {
      const response = await Api.getAllInformation(nameOrId)
      setPokemon(response)
    } catch (err) {
      notify()
    }
  })

  function notify () {
    setSearchText('')
    toast('Pokemon não encontrado !')
  }

  function initialFetch () {
    const randomPokemonId = (Math.random() * 100 + 1).toFixed()
    handleFetchPokemon(randomPokemonId)
  }

  const handleSearchPokemon = useCallback((event) => {
    event.preventDefault()
    if (!searchText) toast('Insira um nome para pesquisa')
    if (searchText === '0') toast('Não existe pokemon com Id zero :[')

    handleFetchPokemon(searchText)
  })

  function clearElement (element) {
    element.current = ''
  }

  return (
    <SearchInputContainer>
      <Toaster
        toastOptions={{ style: errorToastStyle }}
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

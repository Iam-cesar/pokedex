import React, { useContext, useEffect, useState, useRef } from 'react'
import { SearchInputContainer } from './style'
import { PokemonContext } from 'context/pokemon'
import { $errorColor } from 'components/UI/colors'
import toast, { Toaster } from 'react-hot-toast'
import IconImg from 'components/IconImg'
import searchIcon from 'assets/svg/search_icon.svg'
import Api from 'Api'
import { usePokemonChainEvolution } from 'hooks/usePokemonChainEvolution'

function SearchInput () {
  const {
    response,
    setResponse,
    setEvolutionNames,
    setUrl,
    url
  } = useContext(PokemonContext)

  const [searchText, setSearchText] = useState('')
  const toastStyle = { color: `${$errorColor}` }
  const searchInputRef = useRef('')

  useEffect(() => {
    initialFetch()
  }, [])

  useEffect(() => {
    handleEvolutionChain(response.name)
    clearElement(searchInputRef)
    setSearchText('')
  }, [response])

  useEffect(() => {
    handleEvolutions(url.pokemon_chain)
  }, [url])

  async function handleEvolutionChain (name) {
    if (name) {
      await Api.fetchPokemonSpecies(name)
        .then(data => {
          setUrl({ pokemon_chain: data.evolution_chain.url })
        })
    }
  }

  async function handleFetchPokemon (param) {
    try {
      const data = await Api.fetchPokemon(param)
      setResponse({
        name: data.species?.name,
        urlSpecie: data.species?.url,
        id: data.id,
        image: data.sprites?.front_default,
        imgAnimated: data?.sprites.versions['generation-v']['black-white'].animated?.front_default,
        type: data.types,
        stats: data.stats,
        abilities: data.abilities
      })
    } catch (err) {
      notify()
    }
  }

  async function handleEvolutions (url) {
    try {
      if (url) {
        const data = await Api.fetchPokemonEvolutionChain(url)
        setEvolutionNames(usePokemonChainEvolution(data))
      }
    } catch (err) {
      notify()
    }
  }

  function notify () {
    setSearchText('')
    toast('Pokemon não encontrado')
  }

  function initialFetch () {
    const randomPokemonId = (Math.random() * 100).toFixed()
    handleFetchPokemon(randomPokemonId)
  }

  function handleSearchPokemon (event) {
    event.preventDefault()
    if (!searchText) {
      toast('Insira um nome para pesquisa')
    }
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

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
    handleEvolutionChain(response.name)
    clearElement(searchInputRef)
    setSearchText('')
  }, [response])

  useEffect(() => {
    initialFetch()
  }, [])

  async function handleEvolutionChain (name) {
    if (name) {
      const data = await Api.fetchPokemonSpecies(name)
      setResponse(Object.assign(response, { urlEvolutionChain: data.evolution_chain.url }))
      await handleEvolutions(response.urlEvolutionChain)
      handleEvolutionList()
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
    if (url) {
      const data = await Api.fetchPokemonEvolutionChain(url)
      setResponse(Object.assign(response, {
        evolutions: [{
          name: data.chain?.species.name || '',
          url: data.chain?.species.url || ''
        },
        {
          name: data.chain?.evolves_to[0]?.species.name || '',
          url: data.chain?.evolves_to[0]?.species.url || ''
        },
        {
          name: data.chain?.evolves_to[0]?.evolves_to[0]?.species.name || '',
          url: data.chain?.evolves_to[0]?.evolves_to[0]?.species.url || ''
        }]
      }))
    }
  }

  function handleEvolutionList () {
    const array = []
    response.evolutions.map(async (item) => {
      if (item.name) {
        const data = await Api.fetchPokemon(item.name)
        array.push({
          id: data.id,
          image: data.sprites.front_default,
          name: data.name,
          type: data.types
        })
      }
      setResponse(Object.assign(response, {
        evolutionList: array
      }))
    })
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

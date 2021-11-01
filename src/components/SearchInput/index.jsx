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
    handleEvolutions(response.urlEvolutionChain)
  }, [response])

  useEffect(() => {
    initialFetch()
  }, [])

  function notify () {
    setSearchText('')
    toast('Pokemon não encontrado')
  }

  async function handleEvolutionChain (name) {
    if (name) {
      const data = await Api.fetchPokemonSpecies(name)
      setResponse(Object.assign(response, { urlEvolutionChain: data.evolution_chain.url }))
    }
  }

  async function handleEvolutions (url) {
    if (url) {
      const data = await Api.fetchPokemonEvolutionChain(url)
      console.log(data)
      setResponse({
        evolutions: {
          initalStage: {
            name: data.chain?.species.name || '',
            url: data.chain?.species.url || ''
          },
          middleStage: {
            name: data.chain?.evolves_to[0]?.species.name || '',
            url: data.chain?.evolves_to[0]?.species.url || ''
          },
          lastStage: {
            name: data.chain?.evolves_to[0]?.evolves_to[0]?.species.name || '',
            url: data.chain?.evolves_to[0]?.evolves_to[0]?.species.url || ''
          }
        }
      })
    }
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

  async function handleFetchPokemon (param) {
    try {
      const data = await Api.fetchPokemon(param)
      setResponse({
        name: data.species?.name,
        urlSpecie: data.species?.url,
        id: data.id,
        image: data.sprites?.front_default,
        imgAnimated: data?.sprites.versions['generation-v']['black-white'].animated?.front_default
      })
    } catch (err) {
      notify()
    }
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

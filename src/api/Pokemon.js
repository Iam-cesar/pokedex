import axios from 'axios'
import PokemonModel from 'model/Pokemon'
import addSufixOn from './util/addSufixOn'
import removeSufixOf from './util/removeSufixOf'

class Pokemon {
  constructor() {
    this.urlEvolutionChainOffset = 'https://pokeapi.co/api/v2/evolution-chain/?offset=0&limit=30'
    this.urlPokemon = 'https://pokeapi.co/api/v2/pokemon/'
    this.urlPokemonSpecies = 'https://pokeapi.co/api/v2/pokemon-species/'
  }

  async getBasicInformation (name) {
    try {
      if (name === '0') { return }
      const response = await axios
        .get(`${this.urlPokemon}${addSufixOn(name)}`)

      return response.data
    } catch (err) {
      return err
    }
  }

  async getSpecie (nameOrId) {
    try {
      const response = await axios
        .get(`${this.urlPokemonSpecies}${removeSufixOf(nameOrId)}`)

      return response.data
    } catch (err) {
      return err
    }
  }

  async getOneUrlOfEvolution (UrlChain) {
    try {
      const response = await axios.get(UrlChain)
      return response.data
    } catch (err) {
      return err
    }
  }

  async getUrlChainEvolutionOffset () {
    const response = await axios.get(this.urlEvolutionChainOffset)
    return response.data.results
  }

  async getGroup () {
    const allUrls = await this.getUrlChainEvolutionOffset()
    const instancePokemon = new PokemonModel()

    await Promise
      .all(allUrls.map(async (item) => {
        const oneUrl = await this.getOneUrlOfEvolution(item.url)
        const response = await this.getAllInformation(oneUrl.chain?.species.name)
        instancePokemon.group.push(response)
      }))

    return instancePokemon.group
  }

  async getOne (nameOrId) {
    const pokemonInfo = await this.getBasicInformation(nameOrId)

    if (!nameOrId) { return }

    const pokemonSpecies = await this.getSpecie(pokemonInfo.name)
    const pokemonEvolutionChain = await this.getOneUrlOfEvolution(pokemonSpecies.evolution_chain.url)

    return { pokemonInfo, pokemonSpecies, pokemonEvolutionChain }
  }

  async getEvolutionNames (pokemonEvolutionChain) {
    return [
      pokemonEvolutionChain.chain?.species.name || '',
      pokemonEvolutionChain.chain?.evolves_to[0]?.species.name || '',
      pokemonEvolutionChain.chain?.evolves_to[0]?.evolves_to[0]?.species.name || ''
    ]
  }

  async getEvolutions (pokemonNames) {
    const evolutionNames = await this.getEvolutionNames(pokemonNames)
    const instancePokemon = new PokemonModel()

    await Promise
      .all(evolutionNames.map(async (item, index) => {
        if (!item) { return }

        const res = await this.getBasicInformation(item)

        instancePokemon.evolutions.push({
          index,
          name: res.species?.name,
          urlSpecie: res.species?.url,
          id: res.id,
          image: res.sprites?.front_default,
          imgAnimated: res?.sprites.versions['generation-v']['black-white'].animated?.front_default,
          type: res.types,
          stats: res.stats
        })
      }))

    return (
      instancePokemon.evolutions
        .sort((a, b) => (a.index > b.index) ? 1 : -1)
    )
  }

  async getAllInformation (nameOrId) {
    const { pokemonInfo, pokemonEvolutionChain } = await this.getOne(nameOrId)
    const evolutions = await this.getEvolutions(pokemonEvolutionChain)

    const pokemon = new PokemonModel(
      pokemonInfo.species?.name,
      pokemonInfo.species?.url,
      pokemonInfo.id,
      pokemonInfo.sprites?.front_default,
      pokemonInfo?.sprites.versions['generation-v']['black-white'].animated?.front_default,
      pokemonInfo.types,
      pokemonInfo.stats,
      evolutions
    )

    return pokemon
  }
}

export default Pokemon

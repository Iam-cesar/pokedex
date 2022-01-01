import axios from 'axios'

class Pokemon {
  constructor() {
    this.urlEvolutionChainOffset = 'https://pokeapi.co/api/v2/evolution-chain/?offset=0&limit=30'
    this.urlPokemon = 'https://pokeapi.co/api/v2/pokemon/'
    this.urlPokemonSpecies = 'https://pokeapi.co/api/v2/pokemon-species/'
  }

  addSufixOn (name) {
    const specialPokemons = {
      incarnate: ['tornadus', 'thundurus', 'landorus'],
      ordinary: ['keldeo'],
      aria: ['meloetta'],
      baile: ['oricorio'],
      red: ['minior'],
      altered: ['giratina'],
      striped: ['basculin'],
      average: ['gourgeist', 'pumpkaboo']
    }
    if (specialPokemons.incarnate.includes(name)) { name = `${name}-incarnate` }
    if (specialPokemons.ordinary.includes(name)) { name = `${name}-ordinary` }
    if (specialPokemons.aria.includes(name)) { name = `${name}-aria` }
    if (specialPokemons.baile.includes(name)) { name = `${name}-baile` }
    if (specialPokemons.red.includes(name)) { name = `${name}-red` }
    if (specialPokemons.altered.includes(name)) { name = `${name}-altered` }
    if (specialPokemons.striped.includes(name)) { name = `${name}-red-striped` }
    if (specialPokemons.average.includes(name)) { name = `${name}-average` }
    return name
  }

  async getBasicInformation (name) {
    try {
      if (name === '0') return
      const response = await axios.get(`${this.urlPokemon}${this.addSufixOn(name)}`)
      return response.data
    } catch (err) {
      return err
    }
  }

  removeSufixOf (name) {
    if (name.includes('incarnate')) { name = name.replace('-incarnate', '') }
    if (name.includes('ordinary')) { name = name.replace('-ordinary', '') }
    if (name.includes('aria')) { name = name.replace('-aria', '') }
    if (name.includes('baile')) { name = name.replace('-baile', '') }
    if (name.includes('red')) { name = name.replace('-red', '') }
    if (name.includes('meteor')) { name = name.replace('-meteor', '') }
    if (name.includes('altered')) { name = name.replace('-altered', '') }
    if (name.includes('striped')) { name = name.replace('-striped', '') }
    return name
  }

  async getSpecie (nameOrId) {
    try {
      const response = await axios.get(`${this.urlPokemonSpecies}${this.removeSufixOf(nameOrId)}`)
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
    const group = []
    await Promise.all(allUrls.map(async (item) => {
      const oneUrl = await this.getOneUrlOfEvolution(item.url)
      group.push(oneUrl.chain?.species.name)
    }))
    return group
  }

  async getOne (nameOrId) {
    const pokemonInfo = await this.getBasicInformation(nameOrId)
    if (!nameOrId) return
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
    const pokemonEvolutions = []
    await Promise.all(evolutionNames.map(async (item, index) => {
      if (!item) return
      const res = await this.getBasicInformation(item)
      pokemonEvolutions.push({
        index,
        name: res.species?.name,
        urlSpecie: res.species?.url,
        id: res.id,
        image: res.sprites?.front_default,
        imgAnimated: res?.sprites.versions['generation-v']['black-white'].animated?.front_default,
        type: res.types,
        stats: res.stats,
        abilities: res.abilities
      })
    }))
    return pokemonEvolutions.sort((a, b) => (a.index > b.index) ? 1 : -1)
  }

  async getAllInformation (nameOrId) {
    const { pokemonInfo, pokemonEvolutionChain } = await this.getOne(nameOrId)
    const evolutions = await this.getEvolutions(pokemonEvolutionChain)
    return {
      name: pokemonInfo.species?.name,
      urlSpecie: pokemonInfo.species?.url,
      id: pokemonInfo.id,
      image: pokemonInfo.sprites?.front_default,
      imgAnimated: pokemonInfo?.sprites.versions['generation-v']['black-white'].animated?.front_default,
      type: pokemonInfo.types,
      stats: pokemonInfo.stats,
      abilities: pokemonInfo.abilities,
      evolutions: evolutions
    }
  }
}

export default Pokemon

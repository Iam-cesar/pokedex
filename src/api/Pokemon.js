import axios from 'axios'
class Pokemon {
  constructor() {
    this.urlEvolutionChainOffset = 'https://pokeapi.co/api/v2/evolution-chain/?offset=0&limit=30'
    this.urlPokemon = 'https://pokeapi.co/api/v2/pokemon/'
    this.urlPokemonSpecies = 'https://pokeapi.co/api/v2/pokemon-species/'
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
    const pokemonInfo = await this.getInformation(nameOrId)
    if (!nameOrId) return
    const pokemonSpecies = await this.getSpecies(pokemonInfo.id)
    const pokemonEvolutionChain = await this.getOneUrlOfEvolution(pokemonSpecies.evolution_chain.url)
    return { pokemonInfo, pokemonSpecies, pokemonEvolutionChain }
  }

  async getEvolutionNames (pokemonEvolutionChain) {
    const pokemonEvolutionNames = [
      pokemonEvolutionChain.chain?.species.name || '',
      pokemonEvolutionChain.chain?.evolves_to[0]?.species.name || '',
      pokemonEvolutionChain.chain?.evolves_to[0]?.evolves_to[0]?.species.name || ''
    ]
    return pokemonEvolutionNames
  }

  async getEvolutions (pokemonNames) {
    const evolutionNames = await this.getEvolutionNames(pokemonNames)
    const container = []
    await Promise.all(evolutionNames.map(async (item, index) => {
      if (!item) return
      const res = await this.getInformation(item)
      container.push({
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
    return container.sort((a, b) => (a.index > b.index) ? 1 : -1)
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

  addSufixOn (name, specialName, sufix) {
    if (specialName.includes(name)) { name = `${name}${sufix}` }
    return name
  }

  treatAddSufixOn (name) {
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
    this.addSufixOn(name, specialPokemons.incarnate, '-incarnate')
    this.addSufixOn(name, specialPokemons.ordinary, '-ordinary')
    this.addSufixOn(name, specialPokemons.aria, '-aria')
    this.addSufixOn(name, specialPokemons.baile, '-baile')
    this.addSufixOn(name, specialPokemons.red, '-red')
    this.addSufixOn(name, specialPokemons.altered, '-altered')
    this.addSufixOn(name, specialPokemons.striped, '-red-striped')
    this.addSufixOn(name, specialPokemons.average, '-average')

    return name
  }

  removeSufixOf(name, sufix) {
    if (name.includes(sufix)) { name = name.replace(`-${sufix}`, '') }
    return name
  }

  treatRemoveSufixOf (name) {
    this.removeSufixOf(name, 'incarnate')
    this.removeSufixOf(name, 'ordinary')
    this.removeSufixOf(name, 'aria')
    this.removeSufixOf(name, 'baile')
    this.removeSufixOf(name, 'red')
    this.removeSufixOf(name, 'meteor')
    this.removeSufixOf(name, 'altered')
    this.removeSufixOf(name, 'striped')
    return name
  }

  async getInformation (name) {
    try {
      if (name === '0') return
      const response = await axios.get(`${this.urlPokemon}${this.treatAddSufixOn(name)}`)
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

  async getSpecies (param) {
    try {
      const response = await axios.get(`${this.urlPokemonSpecies}${param}`)
      return response.data
    } catch (err) {
      return err
    }
  }
}

export default Pokemon

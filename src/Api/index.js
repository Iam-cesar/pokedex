import axios from 'axios'
class Api {
  constructor() {
    this.urlEvolutionChainOffset = 'https://pokeapi.co/api/v2/evolution-chain/?offset=0&limit=30'
    this.urlPokemon = 'https://pokeapi.co/api/v2/pokemon/'
    this.urlPokemonSpecies = 'https://pokeapi.co/api/v2/pokemon-species/'
  }

  async getUrlEvolutionChains () {
    const response = await axios.get(this.urlEvolutionChainOffset)
    return response.data.results
  }

  async getPokemonList () {
    const list = await this.getUrlEvolutionChains()
    const container = []
    await Promise.all(list.map(async (item) => {
      const res = await this.getPokemonEvolutionChain(item.url)
      container.push(res.chain?.species.name)
    }))
    return container
  }

  async getOnePokemonInfo (nameOrId) {
    const pokemonInfo = await this.getPokemonInfo(nameOrId)
    if (!nameOrId) return
    const pokemonSpecies = await this.getPokemonSpecies(pokemonInfo.id)
    const pokemonEvolutionChain = await this.getPokemonEvolutionChain(pokemonSpecies.evolution_chain.url)
    return { pokemonInfo, pokemonSpecies, pokemonEvolutionChain }
  }

  async getPokemonEvolutionNames (pokemonEvolutionChain) {
    const pokemonEvolutionNames = [
      pokemonEvolutionChain.chain?.species.name || '',
      pokemonEvolutionChain.chain?.evolves_to[0]?.species.name || '',
      pokemonEvolutionChain.chain?.evolves_to[0]?.evolves_to[0]?.species.name || ''
    ]
    return pokemonEvolutionNames
  }

  async getPokemonEvolutions (pokemonNames) {
    const evolutionNames = await this.getPokemonEvolutionNames(pokemonNames)
    const container = []
    await Promise.all(evolutionNames.map(async (item, index) => {
      if (!item) return
      const res = await this.getPokemonInfo(item)
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

  async getPokemonFullInfo (nameOrId) {
    const { pokemonInfo, pokemonEvolutionChain } = await this.getOnePokemonInfo(nameOrId)
    const evolutions = await this.getPokemonEvolutions(pokemonEvolutionChain)
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

  addSufixOn (name, specialName, sufix) {
    if (specialName.includes(name)) { name = `${name}${sufix}` }
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

  removeSufixOf(name, sufix) {
    if (name.includes(sufix)) { name = name.replace(`-${sufix}`, '') }
    return name
  }

  async getPokemonInfo (name) {
    try {
      if (name === '0') return
      const response = await axios.get(`${this.urlPokemon}${this.treatAddSufixOn(name)}`)
      return response.data
    } catch (err) {
      return err
    }
  }

  async getPokemonEvolutionChain (UrlChain) {
    try {
      const response = await axios.get(UrlChain)
      return response.data
    } catch (err) {
      return err
    }
  }

  async getPokemonSpecies (param) {
    try {
      const response = await axios.get(`${this.urlPokemonSpecies}${param}`)
      return response.data
    } catch (err) {
      return err
    }
  }
}

export default new Api()

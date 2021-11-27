import axios from 'axios'
class Api {
  async getUrlEvolutionChains () {
    const url = 'https://pokeapi.co/api/v2/evolution-chain/?offset=0&limit=30'
    const response = await axios.get(url)
    return response.data.results
  }

  async getPokemonList () {
    const list = await this.getUrlEvolutionChains()
    const container = []
    await Promise.all(list.map(async item => {
      const res = await this.fetchPokemonEvolutionChain(item.url)
      container.push(res.chain?.species.name)
    }))
    return container
  }

  async fetchPokemon (param) {
    const pokemonInfo = await this.fetchPokemonInfo(param)
    if (param) {
      const pokemonSpecies = await this.fetchPokemonSpecies(this.removeSufixName(pokemonInfo.name))
      const pokemonEvolutionChain = await this.fetchPokemonEvolutionChain(pokemonSpecies.evolution_chain.url)
      return [pokemonInfo, pokemonSpecies, pokemonEvolutionChain]
    }
  }

  async getPokemonEvolutionNames (pokemonEvolutionChain) {
    const pokemons = [
      pokemonEvolutionChain.chain?.species.name || '',
      pokemonEvolutionChain.chain?.evolves_to[0]?.species.name || '',
      pokemonEvolutionChain.chain?.evolves_to[0]?.evolves_to[0]?.species.name || ''
    ]
    return pokemons
  }

  async getPokemonEvolutions (param) {
    const evolutionNames = await this.getPokemonEvolutionNames(param)
    const container = []
    await Promise.all(evolutionNames.map(async (item, index) => {
      if (item) {
        const res = await this.fetchPokemonInfo(item)
        container.push({
          index,
          name: res.species?.name,
          urlSpecie: res.species?.url,
          id: res.id,
          image: res.sprites?.front_default,
          imgAnimated: res?.sprites.versions['generation-v']['black-white'].animated?.front_default,
          type: res.types,
          stats: res.stats,
          abilities: res.abilities,
          weight: res.weight
        })
      }
    }))
    return container.sort((a, b) => (a.index > b.index) ? 1 : -1)
  }

  async getPokemonFullInfo (param) {
    const [pokemonInfo, pokemonSpecies, pokemonEvolutionChain] = await this.fetchPokemon(param)
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
      weight: pokemonInfo.weight,
      color: pokemonSpecies.color.name,
      shape: pokemonSpecies.shape.name,
      evolutions: evolutions
    }
  }

  async fetchPokemonInfo (param) {
    const url = `https://pokeapi.co/api/v2/pokemon/${this.addSufixOnName(param)}`
    try {
      if (param === '0') return
      const response = await axios.get(url)
      return response.data
    } catch (err) {
      console.log(err)
    }
  }

  async fetchPokemonEvolutionChain (param) {
    try {
      const response = await axios.get(param)
      return response.data
    } catch (err) {
      console.log(err)
    }
  }

  async fetchPokemonSpecies (param) {
    const url = `https://pokeapi.co/api/v2/pokemon-species/${param}`
    try {
      const response = await axios.get(url)
      return response.data
    } catch (err) {
      console.log(err)
    }
  }

  addSufixOnName (param) {
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

    if (specialPokemons.incarnate.includes(param)) { param = param + '-incarnate' }
    if (specialPokemons.ordinary.includes(param)) { param = param + '-ordinary' }
    if (specialPokemons.aria.includes(param)) { param = param + '-aria' }
    if (specialPokemons.baile.includes(param)) { param = param + '-baile' }
    if (specialPokemons.red.includes(param)) { param = param + '-red' }
    if (specialPokemons.altered.includes(param)) { param = param + '-altered' }
    if (specialPokemons.striped.includes(param)) { param = param + '-red-striped' }
    if (specialPokemons.average.includes(param)) { param = param + '-average' }
    return param
  }

  removeSufixName (param) {
    if (param.includes('incarnate')) { param = param.replace('-incarnate', '') }
    if (param.includes('ordinary')) { param = param.replace('-ordinary', '') }
    if (param.includes('aria')) { param = param.replace('-aria', '') }
    if (param.includes('baile')) { param = param.replace('-baile', '') }
    if (param.includes('red')) { param = param.replace('-red', '') }
    if (param.includes('meteor')) { param = param.replace('-meteor', '') }
    if (param.includes('altered')) { param = param.replace('-altered', '') }
    if (param.includes('striped')) { param = param.replace('-striped', '') }
    if (param.includes('average')) { param = param.replace('-average', '') }
    return param
  }
}

export default new Api()

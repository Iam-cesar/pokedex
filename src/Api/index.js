class Api {
  addSufixOnName (param) {
    const specialPokemons = {
      incarnate: ['tornadus', 'thundurus', 'landorus'],
      ordinary: ['keldeo'],
      aria: ['meloetta'],
      baile: ['oricorio'],
      red: ['minior'],
      altered: ['giratina']
    }

    if (specialPokemons.incarnate.includes(param)) { param = param + '-incarnate' }
    if (specialPokemons.ordinary.includes(param)) { param = param + '-ordinary' }
    if (specialPokemons.aria.includes(param)) { param = param + '-aria' }
    if (specialPokemons.baile.includes(param)) { param = param + '-baile' }
    if (specialPokemons.red.includes(param)) { param = param + '-red' }
    if (specialPokemons.altered.includes(param)) { param = param + '-altered' }
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
    return param
  }

  async fetchPokemon (param) {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.addSufixOnName(param)}`)
        .then(res => res.json())
      return response
    } catch (err) {
      console.log(err)
    }
  }

  async fetchPokemonEvolutionChain (param) {
    try {
      const response = await fetch(param)
        .then(res => res.json())
      return response
    } catch (err) {
      console.log(err)
    }
  }

  async fetchPokemonSpecies (param) {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${this.removeSufixName(param)}`)
        .then(res => res.json())
      return response
    } catch (err) {
      console.log(err)
    }
  }
}

export default new Api()

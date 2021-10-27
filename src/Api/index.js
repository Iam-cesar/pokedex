class Api {
  async fetchPokemon (param) {
    const incarnatePokemons = [
      'tornadus', 'thundurus', 'landorus'
    ]

    const ordinayPokemons = [
      'keldeo'
    ]

    const ariaPokemons = [
      'meloetta'
    ]

    if (incarnatePokemons.includes(param)) { param = param + '-incarnate' }
    if (ordinayPokemons.includes(param)) { param = param + '-ordinary' }
    if (ariaPokemons.includes(param)) { param = param + '-aria' }

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${param}`)
      .then(res => res.json())
    return response
  }

  async fetchPokemonEvolutionChain (param) {
    const response = await fetch(param)
      .then(res => res.json())
    return response
  }

  async fetchPokemonSpecies (param) {
    if (param.includes('incarnate')) { param = param.replace('-incarnate', '') }
    if (param.includes('ordinary')) { param = param.replace('-ordinary', '') }
    if (param.includes('aria')) { param = param.replace('-aria', '') }

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${param}`)
      .then(res => res.json())
    return response
  }
}

export default new Api()

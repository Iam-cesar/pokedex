class Api {
  async fetchPokemon (param) {
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
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${param}`)
      .then(res => res.json())
    return response
  }
}

export default new Api()

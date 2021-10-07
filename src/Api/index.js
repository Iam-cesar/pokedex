
class Api {
  async fetchPokemon (param) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${param}`)
      .then(res => res.json())
      .catch(err => console.log(err))

    return response
  }
}

export default new Api()

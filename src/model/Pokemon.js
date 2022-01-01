class PokemonModel {
  constructor(
    name = '',
    urlSpecie = '',
    id = 0,
    image = '',
    imgAnimated = '',
    types = [],
    stats = [],
    evolutions = []
  ) {
    this.index = 0
    this.name = name
    this.urlSpecie = urlSpecie
    this.id = id
    this.image = image
    this.imgAnimated = imgAnimated
    this.type = types
    this.stats = stats
    this.evolutions = evolutions
    this.evolutionChain = ''
    this.group = []
  }
}

export default PokemonModel

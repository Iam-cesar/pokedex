export default (name) => {
  const names = {
    bug: 'Inseto',
    dark: 'Noturno',
    dragon: 'Dragão',
    electric: 'Elétrico',
    fairy: 'Fada',
    fighting: 'Lutador',
    fire: 'Fogo',
    flying: 'Voador',
    ghost: 'Fantasma',
    grass: 'Grama',
    ground: 'Terrestre',
    ice: 'Gelo',
    normal: 'Normal',
    poison: 'Venenoso',
    psychic: 'Psiquico',
    rock: 'Pedra',
    steel: 'Aço',
    water: 'Agua'
  }
  return names[name]
}

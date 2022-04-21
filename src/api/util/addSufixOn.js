export default (name) => {
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
